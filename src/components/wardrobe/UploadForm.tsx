import { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { ClothingItemType } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { UserClothingItem } from "@/lib/types";

type UploadFormProps = {
  onSuccess: (newItem: UserClothingItem) => void;
};

export function UploadForm({ onSuccess }: UploadFormProps) {
  const { toast } = useToast();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<{
    name: string;
    description: string;
    type: ClothingItemType;
    tags: string;
    image: FileList;
  }>({
    defaultValues: {
      type: "tops"
    }
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select an image smaller than 5MB",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

 const onSubmit = handleSubmit(async (data) => {
  setIsUploading(true);

  const imageFile = data.image?.[0];
  if (!imageFile) {
    toast({
      title: "No image selected",
      description: "Please select an image before uploading",
      variant: "destructive",
    });
    setIsUploading(false);
    return;
  }

  try {
    // 1. Get current user
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) throw new Error("Not authenticated");

    // 2. Create safe filename and path
    const ext = imageFile.name.split(".").pop();
    const baseName = imageFile.name
      .replace(/\.[^/.]+$/, "")
      .replace(/[^a-z0-9]/gi, "_")
      .toLowerCase();
    const fileName = `${Date.now()}_${baseName}.${ext}`;
    const filePath = `user_${user.id}/${fileName}`;

    // 3. Upload image
    const { error: uploadError } = await supabase.storage
      .from("clothing_images")
      .upload(filePath, imageFile);
    if (uploadError) throw uploadError;

// 4. Generate public URL
const imageUrl = `https://ookegebzsduvzvfjbjjs.supabase.co/storage/v1/object/public/clothing_images/${filePath}`;

    // 5. Insert into database
const { data: insertedItems, error: insertError } = await supabase
  .from("userclothing_items")
  .insert({
    user_id: user.id, // this is crucial for per-user filtering
    name: data.name,
    description: data.description,
    image_url: imageUrl, // make sure this key matches your DB schema
    type: data.type,
    tags: data.tags.split(",").map((t) => t.trim()).filter(Boolean),
  })
  .select()
  .single();

    if (insertError) throw insertError;

    toast({
      title: "Item uploaded",
      description: "Your clothing item has been added to your wardrobe",
    });

    reset();
    setImagePreview(null);
    if (insertedItems) {
      onSuccess(insertedItems as UserClothingItem);
    }

  } catch (error: any) {
    console.error("Upload error:", error);
    toast({
      title: "Upload failed",
      description: error.message || "There was an error uploading your item",
      variant: "destructive",
    });
  } finally {
    setIsUploading(false);
  }
});

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto px-1">
      {/* Image Upload */}
      <div className="space-y-2">
        <Label htmlFor="image">Image</Label>
        <div className="flex flex-col items-center p-4 border-2 border-dashed rounded-md border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors">
          {imagePreview ? (
            <div className="relative w-full max-h-48 mx-auto mb-4">
              <img src={imagePreview} alt="Preview" className="w-full h-full object-contain max-h-48" />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  setImagePreview(null);
                  setValue("image", undefined as any);
                }}
                className="absolute top-2 right-2 bg-white"
              >
                Remove
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-4">
              <Upload className="h-12 w-12 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-400">PNG, JPG, GIF up to 5MB</p>
            </div>
          )}

          <input
            id="image"
            type="file"
            accept="image/*"
            className={`hidden ${errors.image ? "border-red-500" : ""}`}
            {...register("image", { required: "Image is required" })}
            onChange={(e) => {
              register("image").onChange(e);
              handleImageChange(e);
            }}
          />

          <Button 
            type="button" 
            variant="outline"
            onClick={() => document.getElementById("image")?.click()}
            className="mt-2"
          >
            Select Image
          </Button>

          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>
      </div>

      {/* Name */}
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          {...register("name", { required: "Name is required" })}
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          {...register("description")}
          className="min-h-[80px]"
        />
      </div>

      {/* Type */}
      <div className="space-y-2">
        <Label htmlFor="type">Type</Label>
        <Select 
          onValueChange={(value) => setValue("type", value as ClothingItemType)} 
          defaultValue="tops"
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tops">Tops</SelectItem>
            <SelectItem value="bottoms">Bottoms</SelectItem>
            <SelectItem value="dresses">Dresses</SelectItem>
            <SelectItem value="outerwear">Outerwear</SelectItem>
            <SelectItem value="accessories">Accessories</SelectItem>
            <SelectItem value="jewelry">Jewelry</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tags */}
      <div className="space-y-2">
        <Label htmlFor="tags">Tags (Comma separated)</Label>
        <Input
          id="tags"
          placeholder="casual, summer, cotton, etc."
          {...register("tags")}
        />
      </div>

      <Button 
        type="submit" 
        className="w-full"
        disabled={isUploading}
      >
        {isUploading ? "Uploading..." : "Upload Item"}
      </Button>
    </form>
  );
}