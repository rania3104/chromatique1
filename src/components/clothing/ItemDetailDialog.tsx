
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useChromatique } from "@/lib/context";

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
  const { savedItems, addToSavedItems, removeFromSavedItems } = useChromatique();
  const [isSaved, setIsSaved] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    if (item) {
      setIsSaved(savedItems.some(savedItem => savedItem.id === item.id));
    }
  }, [item, savedItems]);
  
  if (!item) return null;
  
  const toggleSaved = () => {
    if (isSaved) {
      removeFromSavedItems(item.id);
      toast({
        title: "Removed from wishlist",
        description: `${item.name} has been removed`,
      });
    } else {
      // Create a full ClothingItem object from the dialog item
      const clothingItem = {
        ...item,
        styleCategories: [item.category],
        seasons: [], // Default empty seasons
      };
      addToSavedItems(clothingItem);
      toast({
        title: "Added to wishlist",
        description: `${item.name} has been added`,
      });
    }
    
    // No need to setIsSaved here as it will be updated by the useEffect
  };
  
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
              <DialogDescription className="text-sm">
                {item.category}
              </DialogDescription>
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
                    <Badge key={i} variant="secondary" className="bg-chromatique-cream text-xs">
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
