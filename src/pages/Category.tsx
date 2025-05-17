
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getClothingItemsByCategory } from "@/lib/api";
import { ClothingItem } from "@/lib/types";
import { ClothingCard } from "@/components/clothing/ClothingCard";
import { ItemDetailDialog } from "@/components/clothing/ItemDetailDialog";
import { Header } from "@/components/layout/Header";
import { categories } from "@/lib/data";
import { useChromatique } from "@/lib/context";

const Category = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useChromatique();
  const [items, setItems] = useState<ClothingItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<ClothingItem | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  
  const category = categories.find(c => c.id === id);
  
  useEffect(() => {
    if (id && user?.season) {
      setIsLoading(true);
      getClothingItemsByCategory(id, user.season)
        .then((data) => {
          setItems(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching items:", error);
          setIsLoading(false);
        });
    }
  }, [id, user?.season]);
  
  const handleOpenDetails = (item: ClothingItem) => {
    setSelectedItem(item);
    setIsDetailOpen(true);
  };
  
  return (
    <>
      <Header />
      <main className="container px-4 py-8 animate-fade-in">
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-serif font-medium">
                {category?.name || "Category"}
              </h1>
              <p className="text-chromatique-taupe">
                Items recommended for your {user?.season?.split("-").join(" ")} palette
              </p>
            </div>
          </div>
          
          {isLoading ? (
            <div className="min-h-[300px] flex items-center justify-center">
              <div className="text-center animate-pulse">
                <p className="text-xl text-chromatique-taupe">Loading items...</p>
              </div>
            </div>
          ) : items.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {items.map((item) => (
                <ClothingCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  colors={item.colors}
                  keywords={item.keywords}
                  onOpenDetails={() => handleOpenDetails(item)}
                />
              ))}
            </div>
          ) : (
            <div className="min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-xl text-chromatique-taupe">
                  No items available in this category for your color palette.
                </p>
              </div>
            </div>
          )}
        </section>
        
        <ItemDetailDialog
          item={selectedItem}
          isOpen={isDetailOpen}
          onClose={() => setIsDetailOpen(false)}
        />
      </main>
    </>
  );
};

export default Category;
