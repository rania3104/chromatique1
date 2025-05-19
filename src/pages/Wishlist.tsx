import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ClothingCard } from "@/components/clothing/ClothingCard";
import { ItemDetailDialog } from "@/components/clothing/ItemDetailDialog";
import { Header } from "@/components/layout/Header";
import { supabase } from "@/lib/supabaseClient";
import { ClothingItem } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

const Wishlist = () => {
  const navigate = useNavigate();
  const [savedItems, setSavedItems] = useState<ClothingItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<ClothingItem | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const { toast } = useToast();

  const fetchSavedItems = async () => {
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) {
      console.error("Not authenticated");
      return;
    }

    const { data, error } = await supabase
      .from("saved_items")
      .select("item_data")
      .eq("user_id", user.id);

    if (error) {
      console.error("Failed to fetch wishlist:", error.message);
      toast({
        title: "Error",
        description: "Could not load wishlist",
        variant: "destructive",
      });
      return;
    }

    const items = data.map((entry) => entry.item_data as ClothingItem);
    setSavedItems(items);
  };

  useEffect(() => {
    fetchSavedItems();
  }, []);

  const handleOpenDetails = (item: ClothingItem) => {
    setSelectedItem(item);
    setIsDetailOpen(true);
  };

  return (
    <>
      <Header />
      <main className="container px-4 py-8 animate-in">
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-serif font-medium">Your Wishlist</h1>
              <p className="text-chromatique-taupe">Items you've saved for inspiration</p>
            </div>
          </div>

          {savedItems.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {savedItems.map((item) => (
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
            <div className="min-h-[300px] flex flex-col items-center justify-center">
              <div className="text-center mb-8">
                <p className="text-xl text-chromatique-taupe mb-2">Your wishlist is empty</p>
                <p className="text-muted-foreground">Save items by clicking the heart icon</p>
              </div>
              <Button
                onClick={() => navigate("/home")}
                className="bg-chromatique-rose hover:bg-chromatique-shallow"
              >
                Browse Categories
              </Button>
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

export default Wishlist;
