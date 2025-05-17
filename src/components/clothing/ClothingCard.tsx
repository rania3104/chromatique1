
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { useChromatique } from "@/lib/context";

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
  className 
}: ClothingCardProps) {
  const { savedItems, addToSavedItems, removeFromSavedItems } = useChromatique();
  const [isSaved, setIsSaved] = useState(false);
  const { toast } = useToast();
  
  // Check if this item is in savedItems
  useEffect(() => {
    setIsSaved(savedItems.some(item => item.id === id));
  }, [savedItems, id]);
  
  // Fallback image if the provided one fails to load
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // Prevent infinite loop
    const category = keywords.find(k => ['tops', 'bottoms', 'dresses', 'accessories', 'outerwear'].includes(k)) || 'clothing';
    target.src = `https://source.unsplash.com/featured/?${category}&sig=${id}`;
  };
  
  const toggleSaved = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    const item = {
      id,
      name,
      image,
      colors,
      keywords,
      category: "Unknown", // Default category
      description: "", // Default description
      styleCategories: [],
      seasons: [],
    };
    
    if (isSaved) {
      removeFromSavedItems(id);
      toast({
        title: "Removed from wishlist",
        description: `${name} has been removed`,
      });
    } else {
      addToSavedItems(item);
      toast({
        title: "Added to wishlist",
        description: `${name} has been added`,
      });
    }
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
