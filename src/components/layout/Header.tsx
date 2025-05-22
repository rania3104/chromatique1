import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Heart, Home, LogOut, User, Shirt, Palette } from "lucide-react";

export function Header() {
  const [user, setUser] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("chromatique-user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const isAuthPage =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup";
  const isAdminPage = location.pathname.startsWith("/admin");

  const handleLogout = () => {
    localStorage.removeItem("chromatique-user");
    setUser(null);
    navigate("/");
  };

  const getButtonClass = (path: string) =>
    location.pathname === path ? "text-chromatique-rose" : "";

  if (isAuthPage || isAdminPage) return null;

  return (
    <header className="border-b sticky top-0 z-40 bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <h1
            className="text-2xl font-serif cursor-pointer"
            onClick={() => navigate("/home")}
          >
            Chromatique
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-4">
          {[
            { path: "/home", label: "Home", tooltip: "Your personalized dashboard" },
            { path: "/results", label: "My Colors", tooltip: "View your analyzed color palette" },
            { path: "/wishlist", label: "Wishlist", tooltip: "Your favorite styles and colors" },
            { path: "/wardrobe", label: "Wardrobe", tooltip: "Your saved wardrobe items" },
            { path: "/outfits", label: "Outfits", tooltip: "Mix and match your outfits" },
            { path: "/subscription", label: "Premium", tooltip: "Upgrade for premium features" },
          ].map(({ path, label, tooltip }) => (
            <Button
              key={path}
              variant="ghost"
              size="sm"
              onClick={() => navigate(path)}
              title={tooltip}
              className={getButtonClass(path)}
            >
              {label}
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => navigate("/wishlist")}
            title="Go to your Wishlist"
          >
            <Heart className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full" title="Account menu">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/home")}>
                <Home className="mr-2 h-4 w-4" />
                <span>Home</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/results")}>
                <Palette className="mr-2 h-4 w-4" />
                <span>My Colors</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/wardrobe")}>
                <Shirt className="mr-2 h-4 w-4" />
                <span>Wardrobe</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/outfits")}>
                <Palette className="mr-2 h-4 w-4" />
                <span>Outfits</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/wishlist")}>
                <Heart className="mr-2 h-4 w-4" />
                <span>Wishlist</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
