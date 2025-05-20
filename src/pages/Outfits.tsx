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
  CarouselNext,
  type CarouselApi,
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
import { supabase } from "@/lib/supabaseClient";
import { useRef } from "react";

<style>
{`
  .scrollbar-chromatique-rose {
    scrollbar-color: #e49ca3 #f8e9e3; /* thumb, track */
    scrollbar-width: thin;
  }
  .scrollbar-chromatique-rose::-webkit-scrollbar {
    width: 8px;
    background: #f8e9e3;
    border-radius: 8px;
  }
  .scrollbar-chromatique-rose::-webkit-scrollbar-thumb {
    background: #e49ca3;
    border-radius: 8px;
  }
`}
</style>
export default function Outfits() {
  const { toast } = useToast();
  const isMobile = useMobile();
  const [items, setItems] = useState<UserClothingItem[]>([]);
  const [outfits, setOutfits] = useState<Outfit[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [outfitType, setOutfitType] = useState<"dress" | "separates">("dress");
  const [selectedItems, setSelectedItems] = useState<Record<ClothingItemType, UserClothingItem | null>>({
    tops: null,
    bottoms: null,
    dresses: null,
    outerwear: null,
    accessories: null,
    jewelry: null
  });
  const [carouselIndices, setCarouselIndices] = useState<Record<ClothingItemType, number>>({
    tops: 0,
    bottoms: 0,
    dresses: 0,
    outerwear: 0,
    accessories: 0,
    jewelry: 0
  });
  const [newOutfitName, setNewOutfitName] = useState("");
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [selectedOutfit, setSelectedOutfit] = useState<Outfit | null>(null);
  const [outfitDialogOpen, setOutfitDialogOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error("User not logged in");

        const { data: clothingData, error: clothingError } = await supabase
          .from("userclothing_items")
          .select("*")
          .eq("user_id", user.id);

        const { data: outfitData, error: outfitError } = await supabase
          .from("outfits")
          .select("*")
          .eq("user_id", user.id);

        if (clothingError) throw clothingError;
        if (outfitError) throw outfitError;

        setItems(clothingData);
        setOutfits(outfitData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        toast({
          title: "Error",
          description: "Failed to load your wardrobe and outfits",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const itemsByType = (type: ClothingItemType) => {
    return items.filter(item => item.type === type);
  };

  const selectItem = (type: ClothingItemType, item: UserClothingItem) => {
    setSelectedItems(prev => ({ ...prev, [type]: item }));
    const typeItems = itemsByType(type);
    const itemIndex = typeItems.findIndex(i => i.id === item.id);
    if (itemIndex !== -1) {
      setCarouselIndices(prev => ({ ...prev, [type]: itemIndex }));
    }
  };
  


  const removeItem = (type: ClothingItemType) => {
    setSelectedItems(prev => ({ ...prev, [type]: null }));
    setCarouselIndices(prev => ({ ...prev, [type]: 0 }));
  };

  const saveOutfit = async () => {
    if (!newOutfitName.trim()) {
      toast({
        title: "Name required",
        description: "Please give your outfit a name",
        variant: "destructive",
      });
      return;
    }

    const outfitItems = Object.values(selectedItems).filter(Boolean) as UserClothingItem[];
    if (outfitItems.length === 0) {
      toast({
        title: "Empty outfit",
        description: "Please select at least one item",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const { data: newOutfit, error } = await supabase
        .from("outfits")
        .insert({
          user_id: user.id,
          name: newOutfitName.trim(),
          items: outfitItems,
          created_at: new Date().toISOString()
        })
        .select()
        .single();

      if (error) throw error;

      setOutfits(prev => [...prev, newOutfit]);
      setSelectedItems({
        tops: null,
        bottoms: null,
        dresses: null,
        outerwear: null,
        accessories: null,
        jewelry: null
      });
      setCarouselIndices({
        tops: 0,
        bottoms: 0,
        dresses: 0,
        outerwear: 0,
        accessories: 0,
        jewelry: 0
      });
      setNewOutfitName("");
      setSaveDialogOpen(false);

      toast({
        title: "Outfit saved",
        description: "Your outfit has been saved",
      });
    } catch (error: any) {
      console.error("Error saving outfit:", error);
      toast({
        title: "Save failed",
        description: error.message || "There was an error saving the outfit",
        variant: "destructive",
      });
    }
  };

  const deleteOutfit = async (id: string) => {
    try {
      const { error } = await supabase.from("outfits").delete().eq("id", id);
      if (error) throw error;

      setOutfits(prev => prev.filter(o => o.id !== id));
      toast({
        title: "Outfit deleted",
        description: "Your outfit has been removed",
      });
    } catch (error) {
      console.error("Error deleting outfit:", error);
      toast({
        title: "Delete failed",
        description: "There was an error deleting your outfit",
        variant: "destructive",
      });
    }
  };

  const hasOutfitItems = Object.values(selectedItems).some(item => item !== null);

  const openOutfitDialog = (outfit: Outfit) => {
    setSelectedOutfit(outfit);
    setOutfitDialogOpen(true);
  };

  const ItemCarousel = ({ type, className }: { type: ClothingItemType; className?: string }) => {
  const typeItems = itemsByType(type);
  const currentIndex = carouselIndices[type] || 0;
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (api) {
      api.scrollTo(currentIndex);
    }
  }, [api, currentIndex]); 


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

      <Carousel
        className="w-full max-w-xs mx-auto relative"
        opts={{ align: "start", loop: false }}
        setApi={setApi}
      >
        <CarouselContent>
          {typeItems.map((item, index) => (
            <CarouselItem key={item.id}>
              <div
                className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                  selectedItems[type]?.id === item.id
                    ? "border-4 border-chromatique-rose"
                    : "border border-transparent"
                }`}
                style={
                  selectedItems[type]?.id === item.id
                    ? { borderWidth: "1px", borderColor: "var(--chromatique-rose, #e49ca3)", borderRadius: "12px" }
                    : { borderRadius: "12px" }
                }
                onClick={() => selectItem(type, item)}
              >
                <div className="aspect-square bg-white">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-full h-full object-contain rounded-[10px]"
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
      <div className="container py-8 min-h-screen flex flex-col">
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
                                    src={item!.image_url} 
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
            <div className="border rounded-lg p-6 bg-white h-full flex flex-col">
              <h2 className="text-xl font-semibold mb-6">Saved Outfits</h2>
              
              {isLoading ? (
                <div className="flex justify-center items-center py-16">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
              ) : outfits.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed rounded-lg">
                  <Tag className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                  <h3 className="text-lg font-medium">No outfits saved yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Create and save your first outfit
                  </p>
                </div>
              ) : (
                <div className="flex-1 min-h-0">
                  <ScrollArea className="h-[600px] pr-2 scrollbar-chromatique-rose">
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
                                    src={item.image_url} 
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
                  </ScrollArea>
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
                                  src={item.image_url} 
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
                                  src={item.image_url} 
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
                                    src={item.image_url} 
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
                                    src={item.image_url} 
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
                                  src={item.image_url} 
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
                                  src={item.image_url} 
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
