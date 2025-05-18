
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories } from "@/lib/api";
import { Category } from "@/lib/types";
import { CategoryCard } from "@/components/clothing/CategoryCard";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { useChromatique } from "@/lib/context";

const Home = () => {
  const navigate = useNavigate();
  const { user, isQuizComplete, refreshUserData } = useChromatique();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [seasonalRecommendations] = useState(() => {
    // Generate recommendations based on user's season
    const seasonType = user?.season?.split('-')[1] || 'spring'; // default to spring if no season
    
    const recommendations = {
      spring: [
        { title: "Light pastels", description: "Incorporate light pastel colors in your outfits for a fresh spring look" },
        { title: "Floral patterns", description: "Floral prints complement your spring palette perfectly" },
        { title: "Light fabrics", description: "Choose breathable fabrics that enhance your natural coloring" }
      ],
      summer: [
        { title: "Soft neutrals", description: "Muted and cool-toned neutrals will enhance your summer coloring" },
        { title: "Watercolor prints", description: "Soft, blended patterns that mimic watercolors suit you well" },
        { title: "Light layering", description: "Create dimension with light layers in complementary tones" }
      ],
      autumn: [
        { title: "Earth tones", description: "Rich, warm earth tones will make your autumn coloring glow" },
        { title: "Textured fabrics", description: "Add visual interest with textures like suede, corduroy and knits" },
        { title: "Monochromatic looks", description: "Try tonal dressing with varying shades from your palette" }
      ],
      winter: [
        { title: "Bold contrasts", description: "High-contrast combinations highlight your winter features" },
        { title: "Jewel tones", description: "Rich jewel tones bring out the best in your winter coloring" },
        { title: "Statement pieces", description: "Incorporate one bold piece that draws attention" }
      ]
    };
    
    return recommendations[seasonType as keyof typeof recommendations];
  });
  
  useEffect(() => {
    // Make sure we have the most up-to-date user data
    refreshUserData();
    
    // If quiz isn't complete, redirect to start
    if (!isQuizComplete) {
      if (user) {
        // If user exists but quiz incomplete, go to the first missing step
        if (!user.skinTone) {
          navigate("/quiz/skin-tone");
        } else if (!user.undertone) {
          navigate("/quiz/undertone");
        } else {
          navigate("/quiz/eye-color");
        }
      } else {
        // No user at all
        navigate("/");
      }
      return;
    }
    
    // Fetch categories
    getCategories()
      .then((data) => {
        // Filter out activewear
        const filteredCategories = data.filter(category => category.id !== "activewear");
        setCategories(filteredCategories);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setIsLoading(false);
      });
  }, [isQuizComplete, user, navigate, refreshUserData]);
  
  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center animate-pulse">
            <p className="text-xl text-chromatique-taupe">Loading...</p>
          </div>
        </div>
      </>
    );
  }
  
  return (
    <>
      <Header />
      <main className="container px-4 py-8 animate-fade-in">
        <section className="mb-12">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">
              Your Perfect Style Collection
            </h1>
            <p className="text-lg text-chromatique-taupe">
              Browse categories that complement your {user?.season?.split("-").join(" ")} color palette
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard 
                key={category.id} 
                id={category.id} 
                name={category.name} 
                image={category.image} 
              />
            ))}
          </div>
        </section>
        
        {/* New Feature: Personalized Style Tips */}
        <section className="mb-12">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-2">
              Style Tips for Your Season
            </h2>
            <p className="text-chromatique-taupe mb-6">
              Personalized recommendations for your {user?.season?.split("-").join(" ")} coloring
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {seasonalRecommendations.map((tip, index) => (
              <div 
                key={index}
                className="bg-white shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow border border-chromatique-cream"
              >
                <div className="w-12 h-12 bg-chromatique-rose/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-chromatique-deep font-medium">{index + 1}</span>
                </div>
                <h3 className="text-xl font-serif mb-2 text-center">{tip.title}</h3>
                <p className="text-chromatique-taupe text-center">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="max-w-3xl mx-auto bg-chromatique-cream/30 rounded-xl p-6 text-center">
          <h2 className="text-xl font-serif mb-2">Need to review your color analysis?</h2>
          <p className="text-chromatique-taupe mb-4">
            Visit your results page to see your seasonal palette and color recommendations
          </p>
          <Button 
            onClick={() => navigate("/results")}
            className="bg-chromatique-rose hover:bg-chromatique-deep"
          >
            View My Results
          </Button>
        </section>
      </main>
    </>
  );
};

export default Home;
