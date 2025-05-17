
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function AdminHeader() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("chromatique-admin");
    navigate("/admin/login");
  };
  
  return (
    <header className="bg-white border-b h-16 flex items-center justify-between px-6 sticky top-0 z-10">
      <div>
        <h1 
          className="text-2xl font-serif cursor-pointer"
          onClick={() => navigate("/admin/dashboard")}
        >
          Chromatique Admin
        </h1>
      </div>
      
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={handleLogout}
          className="rounded-full"
        >
          <LogOut className="h-5 w-5" />
          <span className="sr-only">Log out</span>
        </Button>
      </div>
    </header>
  );
}
