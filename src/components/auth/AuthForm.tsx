
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useChromatique } from "@/lib/context";

export function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();
  const { isQuizComplete, setUserQuizData } = useChromatique();
  
  const handleSubmit = (e: React.FormEvent, isLogin: boolean) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      
      // Save user data
      const userData = {
        id: "user-1",
        email,
        name: isLogin ? "User" : name,
        hasCompletedQuiz: isLogin && isQuizComplete,
      };
      
      localStorage.setItem("chromatique-user", JSON.stringify(userData));
      
      // Show success toast
      toast({
        title: isLogin ? "Welcome back!" : "Account created successfully!",
        description: isLogin 
          ? isQuizComplete 
            ? "You've been signed in." 
            : "Please complete your color profile."
          : "Please complete your color profile.",
      });
      
      // Navigate to appropriate page
      if (isLogin && isQuizComplete) {
        navigate("/home");
      } else {
        navigate("/quiz/skin-tone");
      }
    }, 1000);
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
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Input 
                  type="email" 
                  placeholder="Email" 
                  required 
                  className="border-chromatique-taupe/40"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Input 
                  type="password" 
                  placeholder="Password" 
                  required 
                  className="border-chromatique-taupe/40"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-right">
                <Button variant="link" className="text-chromatique-rose hover:text-chromatique-shallow p-0">
                  Forgot your password?
                </Button>
              </div>
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
              <CardDescription>Enter your details to get started</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Input 
                  type="text" 
                  placeholder="Name" 
                  required 
                  className="border-chromatique-taupe/40"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Input 
                  type="email" 
                  placeholder="Email" 
                  required 
                  className="border-chromatique-taupe/40"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Input 
                  type="password" 
                  placeholder="Password" 
                  required 
                  className="border-chromatique-taupe/40"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
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
