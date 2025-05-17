
import { useState, useEffect } from "react";
import { UserClothingItem, ClothingItemType } from "@/lib/types";
import { UploadForm } from "@/components/wardrobe/UploadForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Upload } from "lucide-react";
import { useChromatique } from "@/lib/context";
import { Header } from "@/components/layout/Header";

export default function Wardrobe() {
  const { isQuizComplete } = useChromatique();
  const [items, setItems] = useState<UserClothingItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<UserClothingItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<ClothingItemType | "all">("all");
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);

  // Load items from localStorage
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("user-clothing-items") || "[]");
    setItems(savedItems);
    setFilteredItems(savedItems);
  }, []);

  // Filter items based on search and type
  useEffect(() => {
    let filtered = [...items];
    
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (filterType !== "all") {
      filtered = filtered.filter(item => item.type === filterType);
    }
    
    setFilteredItems(filtered);
  }, [items, searchTerm, filterType]);

  // Add new item
  const handleItemAdded = (newItem: UserClothingItem) => {
    setItems(prev => [...prev, newItem]);
    setUploadDialogOpen(false);
  };

  // Delete item
  const handleDeleteItem = (id: string) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("user-clothing-items", JSON.stringify(updatedItems));
  };

  return (
    <>
      <Header />
      <div className="container py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Wardrobe</h1>
          <p className="text-muted-foreground">
            Upload and manage your clothing items to create outfits
          </p>
        </header>

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
          <div className="flex flex-1 gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={filterType} onValueChange={(value) => setFilterType(value as ClothingItemType | "all")}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Items</SelectItem>
                <SelectItem value="tops">Tops</SelectItem>
                <SelectItem value="bottoms">Bottoms</SelectItem>
                <SelectItem value="dresses">Dresses</SelectItem>
                <SelectItem value="outerwear">Outerwear</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
                <SelectItem value="jewelry">Jewelry</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  <span>Upload Item</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Upload New Item</DialogTitle>
                </DialogHeader>
                <UploadForm onSuccess={handleItemAdded} />
              </DialogContent>
            </Dialog>
            
            <Button variant="outline" asChild>
              <a href="/outfits">Create Outfit</a>
            </Button>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-16 border rounded-lg bg-muted/30">
            <h3 className="text-xl font-medium mb-2">Your wardrobe is empty</h3>
            <p className="text-muted-foreground mb-6">
              Start by uploading your first clothing item
            </p>
            {/* Removing the duplicate upload button here since we already have one in the top menu */}
          </div>
        ) : (
          <Tabs defaultValue="grid" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
            </TabsList>
            
            <TabsContent value="grid">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {filteredItems.map(item => (
                  <div 
                    key={item.id} 
                    className="border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-square relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                        {item.type}
                      </div>
                    </div>
                    
                    <div className="p-3">
                      <h3 className="font-medium text-sm line-clamp-1">{item.name}</h3>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {item.tags.slice(0, 3).map((tag, i) => (
                          <span 
                            key={i} 
                            className="bg-muted text-xs px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {item.tags.length > 3 && (
                          <span className="text-xs text-muted-foreground">
                            +{item.tags.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex justify-between mt-3">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="list">
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-3">Image</th>
                      <th className="text-left p-3">Name</th>
                      <th className="text-left p-3">Type</th>
                      <th className="text-left p-3">Tags</th>
                      <th className="text-left p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredItems.map(item => (
                      <tr key={item.id} className="border-t">
                        <td className="p-3">
                          <div className="w-12 h-12">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                        </td>
                        <td className="p-3">{item.name}</td>
                        <td className="p-3">{item.type}</td>
                        <td className="p-3">
                          <div className="flex flex-wrap gap-1">
                            {item.tags.slice(0, 3).map((tag, i) => (
                              <span 
                                key={i} 
                                className="bg-muted text-xs px-2 py-0.5 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                            {item.tags.length > 3 && (
                              <span className="text-xs text-muted-foreground">
                                +{item.tags.length - 3}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="p-3">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleDeleteItem(item.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </>
  );
}
