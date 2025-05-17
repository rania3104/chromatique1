
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple admin authentication
    if (email === "admin" && password === "admin") {
      // Store admin session
      localStorage.setItem("chromatique-admin", JSON.stringify({ isAdmin: true }));
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard",
      });
      navigate("/admin/dashboard");
    } else {
      toast({
        variant: "destructive",
        title: "Authentication failed",
        description: "Invalid email or password",
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-chromatique-cream/30">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-serif font-medium">Chromatique Admin</h1>
          <p className="mt-2 text-chromatique-taupe">Sign in to access the admin dashboard</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-chromatique-deep hover:bg-chromatique-deep/90"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
        
        <div className="text-center text-sm">
          <Button 
            variant="link" 
            onClick={() => navigate("/")}
            className="text-chromatique-deep"
          >
            Return to Main Site
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
