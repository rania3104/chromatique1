
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { CategoryCard } from "@/components/clothing/CategoryCard";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { CategoryType, SeasonType, addClothingItem, getSeasonColors, useSeasonCategoryData } from "@/lib/imageUtils";

export function SeasonCategoryDisplay() {
  const [selectedSeason, setSelectedSeason] = useState<SeasonType>("spring");
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null);
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [newItem, setNewItem] = useState({
    name: "",
    image: "",
    description: ""
  });
  
  const categoryData = useSeasonCategoryData();
  const { toast } = useToast();
  
  const seasons: SeasonType[] = ["spring", "summer", "autumn", "winter"];
  const categories: CategoryType[] = ["tops", "bottoms", "dresses", "accessories", "outerwear"];
  
  const handleAddItem = () => {
    if (!selectedCategory) return;
    
    if (!newItem.name || !newItem.image) {
      toast({
        title: "Missing information",
        description: "Please provide at least a name and image URL",
        variant: "destructive"
      });
      return;
    }
    
    const result = addClothingItem(selectedSeason, selectedCategory, newItem);
    
    if (result.success) {
      toast({
        title: "Item added",
        description: `${newItem.name} has been added to ${selectedSeason} ${selectedCategory}`
      });
      
      // Reset the form
      setNewItem({
        name: "",
        image: "",
        description: ""
      });
      setIsAddingItem(false);
    } else {
      toast({
        title: "Error adding item",
        description: result.error,
        variant: "destructive"
      });
    }
  };
  
  return (
    <Card className="mt-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Season Categories</CardTitle>
          <CardDescription>
            Browse clothing items by season and category
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs 
          defaultValue="spring" 
          onValueChange={(value) => setSelectedSeason(value as SeasonType)}
        >
          <TabsList className="mb-6">
            {seasons.map(season => (
              <TabsTrigger key={season} value={season} className="capitalize">
                {season}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {seasons.map(season => (
            <TabsContent key={season} value={season}>
              <div className="space-y-6">
                {categories.map(category => (
                  <div key={category}>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-medium capitalize">{category}</h3>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => {
                              setSelectedCategory(category);
                              setIsAddingItem(true);
                            }}
                          >
                            <PlusCircle className="h-4 w-4 mr-2" />
                            Add Item
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Add New {category.charAt(0).toUpperCase() + category.slice(1)}</DialogTitle>
                            <DialogDescription>
                              Add a new clothing item to the {season} {category} category.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="name" className="text-right">
                                Name
                              </Label>
                              <Input
                                id="name"
                                className="col-span-3"
                                value={newItem.name}
                                onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="image" className="text-right">
                                Image URL
                              </Label>
                              <Input
                                id="image"
                                className="col-span-3"
                                value={newItem.image}
                                onChange={(e) => setNewItem({...newItem, image: e.target.value})}
                                placeholder="https://example.com/image.jpg"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="description" className="text-right">
                                Description
                              </Label>
                              <Textarea
                                id="description"
                                className="col-span-3"
                                value={newItem.description}
                                onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="submit" onClick={handleAddItem}>Add Item</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {categoryData[season][category].length > 0 ? (
                        categoryData[season][category].map((item) => (
                          <CategoryCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                          />
                        ))
                      ) : (
                        <p className="text-muted-foreground col-span-full py-4">
                          No {category} items found for {season} season. Add images to generate content.
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
