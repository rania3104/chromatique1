import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabaseClient";

type ClothingCardProps = {
  id: string;
  name: string;
  image: string;
  colors: string[];
  keywords: string[];
  onOpenDetails: () => void;
  className?: string;
};

export function ClothingCard({
  id,
  name,
  image,
  colors,
  keywords,
  onOpenDetails,
  className,
}: ClothingCardProps) {
  const { toast } = useToast();
  const [isSaved, setIsSaved] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  // Fetch current user
  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user) return;
      setUserId(user.id);
    };
    fetchUser();
  }, []);

  // Check if item is saved in Supabase
  useEffect(() => {
    if (!userId) return;

    const checkSavedStatus = async () => {
      const { data, error } = await supabase
        .from("saved_items")
        .select("id")
        .eq("user_id", userId)
        .eq("item_id", id)
        .single();

      setIsSaved(!!data && !error);
    };

    checkSavedStatus();
  }, [userId, id]);

  const toggleSaved = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!userId) return;

    if (isSaved) {
      // Remove from Supabase
      const { error } = await supabase
        .from("saved_items")
        .delete()
        .eq("user_id", userId)
        .eq("item_id", id);

      if (error) {
        toast({ title: "Error", description: "Failed to remove from wishlist", variant: "destructive" });
      } else {
        setIsSaved(false);
        toast({ title: "Removed", description: `${name} removed from wishlist` });
      }
    } else {
      // Save to Supabase
      const newItem = {
        id,
        name,
        image,
        colors,
        keywords,
        category: "Unknown",
        description: "",
        styleCategories: [],
        seasons: [],
      };

      const { error } = await supabase.from("saved_items").insert({
        user_id: userId,
        item_id: id,
        item_data: newItem,
        saved_at: new Date().toISOString(),
      });

      if (error) {
        toast({ title: "Error", description: "Failed to save to wishlist", variant: "destructive" });
      } else {
        setIsSaved(true);
        toast({ title: "Saved", description: `${name} added to wishlist` });
      }
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    const category = keywords.find(k =>
      ["tops", "bottoms", "dresses", "accessories", "outerwear"].includes(k)
    ) || "clothing";
    target.src = `https://source.unsplash.com/featured/?${category}&sig=${id}`;
  };

  return (
    <Card
      className={cn(
        "overflow-hidden cursor-pointer transition-all hover:shadow-lg relative group",
        className
      )}
      onClick={onOpenDetails}
    >
      <div className="aspect-[3/4] relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
        <Button
          size="icon"
          variant="ghost"
          className={cn(
            "absolute top-2 right-2 rounded-full bg-white/80 backdrop-blur-sm",
            "transition-opacity hover:bg-white",
            isSaved ? "text-red-500" : "text-gray-500 opacity-0 group-hover:opacity-100"
          )}
          onClick={toggleSaved}
        >
          <Heart className={cn("h-5 w-5", isSaved && "fill-current")} />
        </Button>
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/80 backdrop-blur-sm">
          <h3 className="font-medium text-sm truncate">{name}</h3>
          <div className="flex mt-2 gap-1">
            {colors.map((color, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full border border-gray-200"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
