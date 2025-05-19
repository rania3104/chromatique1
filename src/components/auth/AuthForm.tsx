import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useChromatique } from "@/lib/context";
import { supabase } from "@/lib/supabaseClient";
import { determineColorSeason } from "@/lib/api";
import type { SkinTone, Undertone, EyeColor } from "@/lib/api";
import { logLogin } from "@/lib/logLogin";

export function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

const [skinTone, setSkinTone] = useState<SkinTone | undefined>();
const [undertone, setUndertone] = useState<Undertone | undefined>();
const [eyeColor, setEyeColor] = useState<EyeColor | undefined>();


  const { toast } = useToast();
  const navigate = useNavigate();
  const { setUserQuizData } = useChromatique();

  const handleSubmit = async (e: React.FormEvent, isLogin: boolean) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    if (isLogin) {
      const authResponse = await supabase.auth.signInWithPassword({ email, password });
      if (authResponse.error) throw authResponse.error;

      const user = authResponse.data.user;
      if (!user) throw new Error("No user found after login");

      // ✅ Log login
      await logLogin(user.id, user.email || "");

      const { data: profile } = await supabase
        .from("user_profiles")
        .select("*")
        .eq("email", email)
        .single();

      if (!profile) throw new Error("User profile not found");

      localStorage.setItem("chromatique-user", JSON.stringify(profile));

      await setUserQuizData({
        id: profile.id,
        skinTone: profile.skin_tone,
        undertone: profile.undertone,
        eyeColor: profile.eye_color,
        season: profile.season,
      });

      toast({ title: "Signed in", description: "Welcome back!" });
      navigate(profile.season ? "/home" : "/quiz/skin-tone");
    } else {
      // SIGN UP FLOW
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });
      if (signUpError) throw signUpError;

      const userId = signUpData.user?.id;
      if (!userId) throw new Error("Sign up failed — no user returned.");

      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) throw new Error("No session found after signup.");

      const season = await determineColorSeason(skinTone, undertone, eyeColor);

      const { error: insertError } = await supabase.from("user_profiles").insert([
        {
          id: userId,
          email,
          name,
          password,
          skin_tone: skinTone,
          undertone,
          eye_color: eyeColor,
          season,
        },
      ]);

      if (insertError) throw insertError;

      const profile = {
        id: userId,
        email,
        name,
        password,
        skinTone,
        undertone,
        eyeColor,
        season,
      };

      localStorage.setItem("chromatique-user", JSON.stringify(profile));
      await setUserQuizData(profile);

      toast({ title: "Account created", description: "Complete your profile." });
      navigate("/quiz/skin-tone");
    }
  } catch (error: any) {
    toast({ title: "Error", description: error.message, variant: "destructive" });
  } finally {
    setIsLoading(false);
  }
};


  return (
    <Card className="w-full max-w-md mx-auto">
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <form onSubmit={(e) => handleSubmit(e, true)}>
            <CardHeader>
              <CardTitle className="text-2xl">Welcome back</CardTitle>
              <CardDescription>
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full bg-chromatique-rose hover:bg-chromatique-shallow"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </CardFooter>
          </form>
        </TabsContent>

        <TabsContent value="signup">
          <form onSubmit={(e) => handleSubmit(e, false)}>
            <CardHeader>
              <CardTitle className="text-2xl">Create an account</CardTitle>
              <CardDescription>
                Enter your details to get started
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full bg-chromatique-rose hover:bg-chromatique-shallow"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </CardFooter>
          </form>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
