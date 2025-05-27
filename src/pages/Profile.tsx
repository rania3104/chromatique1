import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChromatique } from "@/lib/context";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { supabase } from "@/lib/supabaseClient";

const Profile = () => {
  const navigate = useNavigate();
  const { user: contextUser } = useChromatique();

  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);

      const {
        data: { user: supabaseUser },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !supabaseUser) {
        console.error("❌ Failed to fetch Supabase user:", authError?.message);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("user_profiles")
        .select("name, email, season")
        .eq("id", supabaseUser.id)
        .single();

      if (error) {
        console.error("❌ Failed to fetch user profile from Supabase:", error.message);
      } else {
        setProfile(data);
      }

      setLoading(false);
    };

    fetchProfile();
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem("chromatique-user");
    await fetch("/logout", { method: "POST" }).catch(() => {});
    window.location.href = "/";
  };

  if (loading || !profile) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-chromatique-taupe text-lg">Loading profile...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container px-4 py-12 animate-fade-in">
        <div className="max-w-2xl mx-auto bg-white border border-chromatique-cream rounded-xl shadow-sm p-6 md:p-10">
          <h1 className="text-3xl font-serif mb-8 text-center">My Profile</h1>

          <div className="space-y-6 text-base">
            <div className="flex justify-between">
              <span className="text-chromatique-taupe font-medium">Name</span>
              <span className="font-serif">{profile.name || "Not set"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-chromatique-taupe font-medium">Email</span>
              <span className="font-serif">{profile.email || "Not set"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-chromatique-taupe font-medium">Season</span>
              <span className="font-serif capitalize">
                {profile.season?.split("-").join(" ") || "Not completed"}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 space-y-4 text-center">
            <Button
              onClick={() => navigate("/results")}
              className="w-full bg-chromatique-rose hover:bg-chromatique-shallow"
            >
              View My Results
            </Button>
            <Button
              onClick={() => navigate("/wardrobe")}
              variant="outline"
              className="w-full"
            >
              View My Wardrobe
            </Button>
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="w-full text-red-500 hover:text-red-600"
            >
              Log Out
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
