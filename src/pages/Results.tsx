
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ColorPalette } from "@/components/results/ColorPalette";
import { SeasonCard } from "@/components/results/SeasonCard";
import { getSeasonInfo } from "@/lib/api";
import { Season } from "@/lib/types";
import { useChromatique } from "@/lib/context";
import { Header } from "@/components/layout/Header";
import { Sparkles } from "lucide-react";
import { supabase } from "@/lib/supabaseClient"; // or wherever your Supabase client is set up


const Results = () => {
  const navigate = useNavigate();
  const { user, isQuizComplete, isPremiumUser, refreshUserData } = useChromatique();
  const [seasonData, setSeasonData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Make sure we have the most up-to-date user data
    refreshUserData();
  }, []);
  
const saveUserColorProfile = async () => {
  if (!user?.id || !user?.skinTone || !user?.undertone || !user?.eyeColor || !user?.season) return;

  const { error } = await supabase
    .from("user_profiles") // updated to match your login logic
    .update({
      skin_tone: user.skinTone,       // match DB column name
      undertone: user.undertone,
      eye_color: user.eyeColor,
      season: user.season,
    })
    .eq("id", user.id);

  if (error) {
    console.error("Failed to save user color profile:", error.message);
  }
};


  useEffect(() => {
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
    
    if (user?.season) {
      setIsLoading(true);
      getSeasonInfo(user.season).then((data) => {
        setSeasonData(data);
        setIsLoading(false);
      });

      // Save to Supabase
      saveUserColorProfile();
    }
  }, [isQuizComplete, user, navigate, refreshUserData]);
  
  if (!user?.season || isLoading || !seasonData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-pulse">
          <p className="text-xl text-chromatique-taupe">Analyzing your colors...</p>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <Header />
      <main className="container px-4 py-8 animate-in">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-chromatique-cream to-chromatique-cream/30 p-6 rounded-lg mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-medium mb-2 text-chromatique-shallow">
              Your Color Analysis Results
            </h1>
            <p className="text-chromatique-taupe">
              Based on your unique features, we've determined your seasonal color palette
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <SeasonCard
              season={seasonData.name}
              description={seasonData.description}
              colors={seasonData.colors}
              characteristics={seasonData.characteristics}
            />
            
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-serif mb-4">Your Characteristics</h2>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-chromatique-taupe">Skin Tone:</span>
                    <span className="font-medium">
                      {user.skinTone.split('-').map(word => 
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(' ')}
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-chromatique-taupe">Undertone:</span>
                    <span className="font-medium capitalize">{user.undertone}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-chromatique-taupe">Eye Color:</span>
                    <span className="font-medium">
                      {user.eyeColor.split('-').map(word => 
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(' ')}
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/quiz/skin-tone")}
                  className="w-full"
                >
                  Retake Quiz
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <ColorPalette
            season={seasonData.name}
            description="These are the colors that will complement your natural features"
            bestColors={seasonData.bestColors}
            avoidColors={seasonData.avoidColors}
            className="mb-8"
          />
          
          {!isPremiumUser && (
            <Card className="border-dashed border-2 border-chromatique-taupe/30 bg-chromatique-cream/30 mb-8">
              <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4 p-6">
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-serif mb-2 flex items-center gap-2">
                    <Sparkles size={20} className="text-chromatique-rose" />
                    Unlock Premium Features
                  </h3>
                  <p className="text-chromatique-taupe mb-2">
                    Get personalized makeup, hair color, and jewelry recommendations
                    that perfectly complement your seasonal palette.
                  </p>
                </div>
                <Button 
                  onClick={() => navigate("/subscription")}
                  className="bg-chromatique-rose hover:bg-chromatique-shallow whitespace-nowrap"
                >
                  Upgrade to Premium
                </Button>
              </CardContent>
            </Card>
          )}
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
            <Button
              onClick={() => navigate("/home")}
              className="bg-chromatique-rose hover:bg-chromatique-shallow"
              size="lg"
            >
              See Clothing Recommendations
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/wishlist")}
              size="lg"
            >
              View Wishlist
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Results;
