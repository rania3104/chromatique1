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
    const seasonType = user?.season?.split("-")[1] || "spring";
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

  // 1. Fetch user data once on mount
  useEffect(() => {
    refreshUserData();
  }, []);

  // 2. Handle quiz redirection when user/isQuizComplete changes
  useEffect(() => {
    if (!isQuizComplete) {
      if (user) {
        if (!user.skinTone) {
          navigate("/quiz/skin-tone");
        } else if (!user.undertone) {
          navigate("/quiz/undertone");
        } else {
          navigate("/quiz/eye-color");
        }
      } else {
        navigate("/");
      }
    }
  }, [isQuizComplete, user, navigate]);

  // 3. Fetch categories when quiz is complete
  useEffect(() => {
    if (!isQuizComplete || !user) return;

    getCategories()
      .then((data) => {
        const filtered = data.filter((category) => category.id !== "activewear");
        setCategories(filtered);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isQuizComplete, user]);

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

        {/* Personalized Style Tips */}
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
                  <span className="text-chromatique-shallow font-medium">{index + 1}</span>
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
            className="bg-chromatique-rose hover:bg-chromatique-shallow"
          >
            View My Results
          </Button>
        </section>
      </main>

      <footer className="mt-12 bg-chromatique-rose/10 rounded-t-2xl py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-6">
          {/* App Name & Email */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-chromatique-rose font-semibold mb-1">Chromatique</h3>
            <p className="text-chromatique-taupe text-sm">
              <a href="mailto:chromatique2025@gmail.com" className="hover:underline">
                hello@chromatique.com
              </a>
            </p>
          </div>
          
          {/* Socials & Copyright */}
            <div className="flex flex-col items-end gap-2 ml-auto">
            <div className="flex justify-end gap-4 mb-1">
              <a
              href="https://www.instagram.com/chromatique._/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-chromatique-shallow hover:text-chromatique-rose transition-colors"
              >
              {/* Instagram SVG */}
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="6" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17" cy="7" r="1.2" fill="currentColor"/>
              </svg>
              </a>
              <a
              href="https://open.spotify.com/show/4SsjYAnYvOBfpVyPzclb6F"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify Podcast"
              className="text-chromatique-shallow hover:text-chromatique-rose transition-colors"
              >
              {/* Spotify SVG (fixed, more accurate) */}
              <svg width="28" height="28" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" strokeWidth="4"/>
                <path d="M12.3332 30.6695c8.1899-1.8711 15.215-1.0655 20.8822 2.3979m-21.6486-8.7867c7.8081-2.3692 17.5151-1.2216 24.1517 2.8567m-25.3671-9.8174c7.5945-2.3055 20.2195-1.8601 28.1974 2.876" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </a>
            </div>
            <div className="text-xs text-chromatique-taupe/70 text-right">
              &copy; {new Date().getFullYear()} Chromatique. All rights reserved.
            </div>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
