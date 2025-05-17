import { useState, useEffect } from "react";
import { UserClothingItem, Outfit, ClothingItemType } from "@/lib/types";
import { Header } from "@/components/layout/Header";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Shirt, Scissors, Tag } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

export default function Outfits() {
  const { toast } = useToast();
  const isMobile = useMobile();
  const [items, setItems] = useState<UserClothingItem[]>([]);
  const [outfits, setOutfits] = useState<Outfit[]>([]);
  const [outfitType, setOutfitType] = useState<"dress" | "separates">("dress");
  const [selectedItems, setSelectedItems] = useState<Record<ClothingItemType, UserClothingItem | null>>({
    tops: null,
    bottoms: null,
    dresses: null,
    outerwear: null,
    accessories: null,
    jewelry: null
  });
  const [newOutfitName, setNewOutfitName] = useState("");
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [selectedOutfit, setSelectedOutfit] = useState<Outfit | null>(null);
  const [outfitDialogOpen, setOutfitDialogOpen] = useState(false);
  
  // Load items and outfits from localStorage
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("user-clothing-items") || "[]");
    const savedOutfits = JSON.parse(localStorage.getItem("user-outfits") || "[]");
    setItems(savedItems);
    setOutfits(savedOutfits);
  }, []);
  
  const itemsByType = (type: ClothingItemType) => {
    return items.filter(item => item.type === type);
  };
  
  // Select an item for the outfit
  const selectItem = (type: ClothingItemType, item: UserClothingItem) => {
    setSelectedItems(prev => ({...prev, [type]: item}));
  };
  
  // Remove an item from the outfit
  const removeItem = (type: ClothingItemType) => {
    setSelectedItems(prev => ({...prev, [type]: null}));
  };
  
  // Save outfit
  const saveOutfit = () => {
    if (!newOutfitName.trim()) {
      toast({
        title: "Name required",
        description: "Please give your outfit a name",
        variant: "destructive",
      });
      return;
    }
    
    // Filter out null values
    const outfitItems = Object.values(selectedItems).filter(Boolean) as UserClothingItem[];
    
    if (outfitItems.length === 0) {
      toast({
        title: "Empty outfit",
        description: "Please select at least one item for your outfit",
        variant: "destructive",
      });
      return;
    }
    
    const newOutfit: Outfit = {
      id: `outfit-${Date.now()}`,
      name: newOutfitName,
      items: outfitItems,
      createdAt: new Date().toISOString(),
    };
    
    const updatedOutfits = [...outfits, newOutfit];
    setOutfits(updatedOutfits);
    localStorage.setItem("user-outfits", JSON.stringify(updatedOutfits));
    
    // Reset state
    setNewOutfitName("");
    setSaveDialogOpen(false);
    setSelectedItems({
      tops: null,
      bottoms: null,
      dresses: null,
      outerwear: null,
      accessories: null,
      jewelry: null
    });
    
    toast({
      title: "Outfit saved",
      description: "Your outfit has been saved to your collection",
    });
  };
  
  // Delete outfit
  const deleteOutfit = (id: string) => {
    const updatedOutfits = outfits.filter(outfit => outfit.id !== id);
    setOutfits(updatedOutfits);
    localStorage.setItem("user-outfits", JSON.stringify(updatedOutfits));
    
    toast({
      title: "Outfit deleted",
      description: "Your outfit has been removed from your collection",
    });
  };
  
  // Calculate if the outfit has any items
  const hasOutfitItems = Object.values(selectedItems).some(item => item !== null);
  
  // Open outfit dialog
  const openOutfitDialog = (outfit: Outfit) => {
    setSelectedOutfit(outfit);
    setOutfitDialogOpen(true);
  };
  
  // Carousel component for a specific clothing type
  const ItemCarousel = ({ type, className }: { type: ClothingItemType, className?: string }) => {
    const typeItems = itemsByType(type);
    
    if (typeItems.length === 0) {
      return (
        <div className={`text-center py-4 border-2 border-dashed rounded-lg ${className}`}>
          <p className="text-sm text-muted-foreground">
            No {type} found. <a href="/wardrobe" className="text-primary underline">Add some</a>
          </p>
        </div>
      );
    }
    
    return (
      <div className={`${className}`}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium capitalize">{type}</h3>
          {selectedItems[type] && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => removeItem(type)}
              className="h-6 text-xs"
            >
              Remove
            </Button>
          )}
        </div>
        
        <Carousel className="w-full max-w-xs mx-auto relative">
          <CarouselContent>
            {typeItems.map((item) => (
              <CarouselItem key={item.id}>
                <div 
                  className={`border rounded-lg overflow-hidden cursor-pointer transition-all
                    ${selectedItems[type]?.id === item.id ? 'ring-2 ring-primary' : ''}
                  `}
                  onClick={() => selectItem(type, item)}
                >
                  <div className="aspect-square bg-white">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  
                  <div className="p-2 bg-white">
                    <h4 className="font-medium text-sm truncate">{item.name}</h4>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0" />
          <CarouselNext className="absolute right-0" />
        </Carousel>
      </div>
    );
  };
  
  return (
    <>
      <Header />
      <div className="container py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Outfit Builder</h1>
          <p className="text-muted-foreground">
            Mix and match your wardrobe items to create perfect outfits
          </p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            <div className="border rounded-lg p-6 bg-white">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Current Outfit</h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={outfitType === "dress" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setOutfitType("dress")}
                      className="flex items-center gap-2"
                    >
                      <span>Dress</span>
                    </Button>
                    
                    <Button
                      variant={outfitType === "separates" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setOutfitType("separates")}
                      className="flex items-center gap-2"
                    >
                      <Shirt className="h-4 w-4" />
                      <span>+</span>
                      <Scissors className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Accessories (top) */}
                <ItemCarousel type="accessories" className="bg-muted/20 p-4 rounded-lg" />
                
                {/* Main clothing item(s) */}
                {outfitType === "dress" ? (
                  <ItemCarousel type="dresses" className="bg-white p-4 rounded-lg border" />
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <ItemCarousel type="tops" className="bg-white p-4 rounded-lg border" />
                    <ItemCarousel type="bottoms" className="bg-white p-4 rounded-lg border" />
                  </div>
                )}
                
                {/* Outerwear (optional) */}
                <ItemCarousel type="outerwear" className="bg-muted/20 p-4 rounded-lg" />
                
                {/* Jewelry (bottom) */}
                <ItemCarousel type="jewelry" className="bg-muted/20 p-4 rounded-lg" />
              </div>
              
              <div className="mt-6 flex justify-end gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSelectedItems({
                      tops: null,
                      bottoms: null,
                      dresses: null,
                      outerwear: null,
                      accessories: null,
                      jewelry: null
                    });
                  }}
                >
                  Clear All
                </Button>
                
                <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
                  <DialogTrigger asChild>
                    <Button disabled={!hasOutfitItems}>Save Outfit</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Save Outfit</DialogTitle>
                      <DialogDescription>
                        Name your outfit collection for easy reference
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Outfit Name</Label>
                        <Input
                          id="name"
                          placeholder="Enter a name for your outfit"
                          value={newOutfitName}
                          onChange={(e) => setNewOutfitName(e.target.value)}
                        />
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <p className="font-medium mb-2">Items in this outfit:</p>
                        <ul className="space-y-2">
                          {Object.entries(selectedItems)
                            .filter(([_, item]) => item !== null)
                            .map(([type, item]) => (
                              <li key={item!.id} className="flex items-center gap-2">
                                <div className="h-10 w-10">
                                  <img 
                                    src={item!.image} 
                                    alt={item!.name} 
                                    className="w-full h-full object-cover rounded"
                                  />
                                </div>
                                <span className="text-sm">
                                  <span className="font-medium capitalize">{type}:</span> {item!.name}
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>
                      
                      <Button onClick={saveOutfit} className="w-full">
                        Save Outfit
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4">
            <div className="border rounded-lg p-6 bg-white h-full">
              <h2 className="text-xl font-semibold mb-6">Saved Outfits</h2>
              
              {outfits.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed rounded-lg">
                  <Tag className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                  <h3 className="text-lg font-medium">No outfits saved yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Create and save your first outfit
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {outfits.map(outfit => (
                    <Card key={outfit.id} className="overflow-hidden cursor-pointer" onClick={() => openOutfitDialog(outfit)}>
                      <CardContent className="p-0">
                        <div className="p-4">
                          <div className="flex justify-between items-center">
                            <h3 className="font-medium">{outfit.name}</h3>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={(e) => {
                                e.stopPropagation();
                                deleteOutfit(outfit.id);
                              }}
                            >
                              Delete
                            </Button>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {new Date(outfit.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-1 p-2 bg-muted/20">
                          {outfit.items.slice(0, 6).map((item) => (
                            <div key={item.id} className="aspect-square bg-white border rounded">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-contain"
                              />
                            </div>
                          ))}
                          {outfit.items.length > 6 && (
                            <div className="aspect-square bg-white border rounded flex items-center justify-center text-sm font-medium">
                              +{outfit.items.length - 6} more
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
              
              <div className="mt-6">
                <Button 
                  variant="outline" 
                  className="w-full" 
                  asChild
                >
                  <a href="/wardrobe">
                    <Plus className="mr-2 h-4 w-4" />
                    Add More Items
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Outfit Detail Dialog */}
      <Dialog open={outfitDialogOpen} onOpenChange={setOutfitDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{selectedOutfit?.name}</DialogTitle>
            <DialogDescription>
              Created on {selectedOutfit && new Date(selectedOutfit.createdAt).toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>
          
          <ScrollArea className="h-[60vh]">
            <div className="space-y-6 py-4 px-1">
              {/* Group items by type and display them in the same order as the carousel */}
              {selectedOutfit && (
                <>
                  {/* Display accessories first */}
                  {selectedOutfit.items.filter(item => item.type === "accessories").length > 0 && (
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium capitalize">Accessories</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {selectedOutfit.items
                          .filter(item => item.type === "accessories")
                          .map(item => (
                            <div key={item.id} className="border rounded-lg overflow-hidden">
                              <div className="aspect-square bg-white">
                                <img 
                                  src={item.image} 
                                  alt={item.name} 
                                  className="w-full h-full object-contain" 
                                />
                              </div>
                              <div className="p-2 bg-white">
                                <p className="text-xs font-medium truncate">{item.name}</p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Display tops or dresses */}
                  {selectedOutfit.items.filter(item => item.type === "dresses").length > 0 && (
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium capitalize">Dresses</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {selectedOutfit.items
                          .filter(item => item.type === "dresses")
                          .map(item => (
                            <div key={item.id} className="border rounded-lg overflow-hidden">
                              <div className="aspect-square bg-white">
                                <img 
                                  src={item.image} 
                                  alt={item.name} 
                                  className="w-full h-full object-contain" 
                                />
                              </div>
                              <div className="p-2 bg-white">
                                <p className="text-xs font-medium truncate">{item.name}</p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Display tops & bottoms */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Tops */}
                    {selectedOutfit.items.filter(item => item.type === "tops").length > 0 && (
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium capitalize">Tops</h3>
                        <div className="grid gap-2">
                          {selectedOutfit.items
                            .filter(item => item.type === "tops")
                            .map(item => (
                              <div key={item.id} className="border rounded-lg overflow-hidden">
                                <div className="aspect-square bg-white">
                                  <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-full object-contain" 
                                  />
                                </div>
                                <div className="p-2 bg-white">
                                  <p className="text-xs font-medium truncate">{item.name}</p>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Bottoms */}
                    {selectedOutfit.items.filter(item => item.type === "bottoms").length > 0 && (
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium capitalize">Bottoms</h3>
                        <div className="grid gap-2">
                          {selectedOutfit.items
                            .filter(item => item.type === "bottoms")
                            .map(item => (
                              <div key={item.id} className="border rounded-lg overflow-hidden">
                                <div className="aspect-square bg-white">
                                  <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-full object-contain" 
                                  />
                                </div>
                                <div className="p-2 bg-white">
                                  <p className="text-xs font-medium truncate">{item.name}</p>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Outerwear */}
                  {selectedOutfit.items.filter(item => item.type === "outerwear").length > 0 && (
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium capitalize">Outerwear</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {selectedOutfit.items
                          .filter(item => item.type === "outerwear")
                          .map(item => (
                            <div key={item.id} className="border rounded-lg overflow-hidden">
                              <div className="aspect-square bg-white">
                                <img 
                                  src={item.image} 
                                  alt={item.name} 
                                  className="w-full h-full object-contain" 
                                />
                              </div>
                              <div className="p-2 bg-white">
                                <p className="text-xs font-medium truncate">{item.name}</p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Jewelry */}
                  {selectedOutfit.items.filter(item => item.type === "jewelry").length > 0 && (
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium capitalize">Jewelry</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {selectedOutfit.items
                          .filter(item => item.type === "jewelry")
                          .map(item => (
                            <div key={item.id} className="border rounded-lg overflow-hidden">
                              <div className="aspect-square bg-white">
                                <img 
                                  src={item.image} 
                                  alt={item.name} 
                                  className="w-full h-full object-contain" 
                                />
                              </div>
                              <div className="p-2 bg-white">
                                <p className="text-xs font-medium truncate">{item.name}</p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
