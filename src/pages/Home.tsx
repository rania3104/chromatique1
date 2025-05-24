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

  // 🔒 Protect route — redirect to login if no user
  useEffect(() => {
    const storedUser = localStorage.getItem("chromatique-user");
    if (!user || !storedUser) {
      navigate("/");
    }
  }, [user, navigate]);
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

  // Rehydrate user on refresh if needed
  useEffect(() => {
    if (!user) {
      const storedUser = localStorage.getItem("chromatique-user");
      if (storedUser) {
        try {
          refreshUserData(); // Re-fetch user data from storage or server
        } catch (error) {
          console.error("Error rehydrating user:", error);
          navigate("/");
        }
      } else {
        navigate("/");
      }
    }
  }, []);

  // Redirect to quiz if incomplete
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
      }
    }
  }, [isQuizComplete, user, navigate]);

  // Fetch categories after quiz complete
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

      <footer className="mt-16 border-t border-chromatique-cream pt-10 pb-8 text-sm text-chromatique-taupe bg-chromatique-rose/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2">
              <p className="font-semibold text-chromatique-shallow uppercase text-xs tracking-wide">Navigate</p>
              <a href="https://chromatique.onrender.com/" className="block hover:underline">About</a>
              <a href="https://chromatique.onrender.com/" className="block hover:underline">Contact Us</a>
              <a href="#" className="block hover:underline">Privacy Policy</a>
              <a href="#" className="block hover:underline">Terms of Use</a>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-chromatique-shallow uppercase text-xs tracking-wide">Features</p>
              <a href="/quiz/skin-tone" className="block hover:underline">Color Quiz</a>
              <a href="/wardrobe" className="block hover:underline">Saved Wardrobe</a>
              <a href="/outfits" className="block hover:underline">Outfit Planner</a>
              <a href="/results" className="block hover:underline">My Color Palette</a>
            </div>

            <div className="space-y-4 text-center md:text-right">
              <p className="font-semibold text-chromatique-shallow uppercase text-xs tracking-wide">Stay Connected</p>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="https://www.instagram.com/chromatique._" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-chromatique-rose transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-.88a.88.88 0 1 1 0 1.76.88.88 0 0 1 0-1.76z"/></svg>
                </a>
                <a href="https://open.spotify.com/show/4SsjYAnYvOBfpVyPzclb6F?fbclid=PAQ0xDSwKa1p1leHRuA2FlbQIxMQABpwmYRlBqiUfDyMk_Xrj5oLTZbSQzONVRk-j3k7pkajMoaYW9ovHoa6aQaTd3_aem_yvZatS__CWLEqV_P5vo6VA" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="hover:text-green-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.63 14.55a.78.78 0 0 1-1.07.24c-2.93-1.78-6.63-2.18-11.01-1.2a.78.78 0 1 1-.32-1.52c4.77-1.03 8.92-.58 12.2 1.4a.78.78 0 0 1 .2 1.08zm1.5-3.07a.97.97 0 0 1-1.33.3c-3.36-2.03-8.47-2.63-12.43-1.45a.97.97 0 1 1-.56-1.86c4.43-1.33 10.13-.68 14 1.68.46.28.6.89.32 1.33zm.16-3.24C15.65 8.1 8.82 7.93 5.68 9.07a1.17 1.17 0 1 1-.7-2.22c3.66-1.15 11.24-.94 15.54 1.84a1.17 1.17 0 0 1-1.23 2.05z"/></svg>
                </a>
              </div>
              <p className="text-xs mt-2">Wear your true colours — Elevate your style</p>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Chromatique. Crafted with care.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
