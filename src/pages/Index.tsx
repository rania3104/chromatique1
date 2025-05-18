
import { useState } from "react";
import { AuthForm } from "@/components/auth/AuthForm";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex flex-col md:flex-row">
        <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md space-y-8 animate-fade-in">
            <div className="text-center">
              <h1 className="text-4xl font-serif font-medium tracking-tight text-chromatique-deep">
                Chromatique
              </h1>
              <p className="mt-3 text-chromatique-taupe">
                Discover your perfect colors and elevate your style
              </p>
            </div>
            
            <AuthForm />
            
            <div className="text-center text-sm text-muted-foreground">
              By continuing, you agree to our{" "}
              <span className="text-chromatique-deep">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-chromatique-deep">
                Privacy Policy
              </span>
            </div>

            <div className="text-center mt-6">
              <Button 
                variant="link" 
                className="text-chromatique-deep opacity-70 hover:opacity-100"
                asChild
              >
                <Link to="/admin/login">Admin Login</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block flex-1 bg-chromatique-cream">
          <div className="h-full w-full bg-cover bg-center" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')",
              backgroundBlendMode: "soft-light"
            }}>
            <div className="h-full w-full flex items-center justify-center p-6 bg-chromatique-rose/5">
              <div className="max-w-md p-8 bg-white/70 backdrop-blur-sm rounded-xl shadow-xl">
                <h2 className="text-2xl font-serif font-medium text-chromatique-deep mb-4">
                  Find your perfect palette
                </h2>
                <p className="text-chromatique-taupe mb-4">
                  Chromatique analyzes your unique features to determine your seasonal color palette, 
                  then recommends clothing and accessories that complement your natural beauty.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="w-8 h-8 rounded-full bg-chromatique-winter"></div>
                  <div className="w-8 h-8 rounded-full bg-chromatique-spring"></div>
                  <div className="w-8 h-8 rounded-full bg-chromatique-summer"></div>
                  <div className="w-8 h-8 rounded-full bg-chromatique-autumn"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
