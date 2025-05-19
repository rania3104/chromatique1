import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabaseClient";

type ItemDetailDialogProps = {
  item: {
    id: string;
    name: string;
    image: string;
    description: string;
    colors: string[];
    keywords: string[];
    category: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
};

export function ItemDetailDialog({ item, isOpen, onClose }: ItemDetailDialogProps) {
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

  // Check saved status from Supabase
  useEffect(() => {
    if (!item || !userId) return;

    const checkSaved = async () => {
      const { data, error } = await supabase
        .from("saved_items")
        .select("id")
        .eq("user_id", userId)
        .eq("item_id", item.id)
        .single();

      setIsSaved(!!data && !error);
    };

    checkSaved();
  }, [item, userId]);

  // Toggle wishlist save/remove
  const toggleSaved = async () => {
    if (!item || !userId) return;

    if (isSaved) {
      const { error } = await supabase
        .from("saved_items")
        .delete()
        .eq("user_id", userId)
        .eq("item_id", item.id);

      if (error) {
        toast({ title: "Error", description: "Failed to remove from wishlist", variant: "destructive" });
      } else {
        setIsSaved(false);
        toast({ title: "Removed", description: `${item.name} removed from wishlist` });
      }
    } else {
      const clothingItem = {
        id: item.id,
        name: item.name,
        image: item.image,
        colors: item.colors,
        keywords: item.keywords,
        category: item.category,
        description: item.description || "",
        styleCategories: [item.category],
        seasons: [],
      };

      const { error } = await supabase.from("saved_items").insert({
        user_id: userId,
        item_id: item.id,
        item_data: clothingItem,
        saved_at: new Date().toISOString(),
      });

      if (error) {
        toast({ title: "Error", description: "Failed to save to wishlist", variant: "destructive" });
      } else {
        setIsSaved(true);
        toast({ title: "Saved", description: `${item.name} added to wishlist` });
      }
    }
  };

  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] p-0">
        <div className="grid grid-cols-2">
          <div className="aspect-[3/4] relative">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-xl pr-8">{item.name}</DialogTitle>
              <DialogDescription className="text-sm">{item.category}</DialogDescription>
            </DialogHeader>

            <div className="mt-4">
              <p className="text-sm">{item.description}</p>

              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Colors:</h4>
                <div className="flex gap-2">
                  {item.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Keywords for Shopping:</h4>
                <div className="flex flex-wrap gap-1">
                  {item.keywords.map((keyword, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-chromatique-cream text-xs"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <Button
                  variant={isSaved ? "default" : "outline"}
                  size="sm"
                  className={isSaved ? "bg-red-500 hover:bg-red-600" : ""}
                  onClick={toggleSaved}
                >
                  <Heart className={`h-4 w-4 mr-2 ${isSaved ? "fill-white" : ""}`} />
                  {isSaved ? "Saved" : "Save to Wishlist"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
