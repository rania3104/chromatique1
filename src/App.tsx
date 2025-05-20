
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChromatiqueProvider } from "@/lib/context";

// Pages
import Index from "./pages/Index";
import SkinTone from "./pages/quiz/SkinTone";
import Undertone from "./pages/quiz/Undertone";
import EyeColor from "./pages/quiz/EyeColor";
import Results from "./pages/Results";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Wishlist from "./pages/Wishlist";
import Subscription from "./pages/Subscription";
import NotFound from "./pages/NotFound";
import Wardrobe from "./pages/Wardrobe";
import Outfits from "./pages/Outfits";
import Profile from "./pages/Profile";

// Admin Pages
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/Users";
import AdminSettings from "./pages/admin/Settings";
import AdminSubscriptions from "./pages/admin/Subscriptions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChromatiqueProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quiz/skin-tone" element={<SkinTone />} />
            <Route path="/quiz/undertone" element={<Undertone />} />
            <Route path="/quiz/eye-color" element={<EyeColor />} />
            <Route path="/results" element={<Results />} />
            <Route path="/home" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/wardrobe" element={<Wardrobe />} />
            <Route path="/outfits" element={<Outfits />} />
            <Route path="/profile" element={<Profile />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
            <Route path="/admin/subscriptions" element={<AdminSubscriptions />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ChromatiqueProvider>
  </QueryClientProvider>
);

export default App;
