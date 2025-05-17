
import { useNavigate } from "react-router-dom";
import { LogOut, User, Home, Settings, Users, CreditCard, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AdminSidebar() {
  const navigate = useNavigate();
  const path = window.location.pathname;
  
  const handleLogout = () => {
    localStorage.removeItem("chromatique-admin");
    navigate("/admin/login");
  };
  
  const isActive = (path: string) => {
    return window.location.pathname === path;
  };
  
  return (
    <div className="flex flex-col h-full p-4">
      <div className="space-y-1 flex-1">
        <Button 
          variant={isActive("/admin/dashboard") ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => navigate("/admin/dashboard")}
        >
          <Home className="mr-2 h-4 w-4" /> Dashboard
        </Button>
        
        <Button 
          variant={isActive("/admin/users") ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => navigate("/admin/users")}
        >
          <Users className="mr-2 h-4 w-4" /> Users
        </Button>

        <Button 
          variant={isActive("/admin/subscriptions") ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => navigate("/admin/subscriptions")}
        >
          <CreditCard className="mr-2 h-4 w-4" /> Subscriptions
        </Button>
        
        <Button 
          variant={isActive("/admin/settings") ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => navigate("/admin/settings")}
        >
          <Settings className="mr-2 h-4 w-4" /> Settings
        </Button>
      </div>
      
      <div className="pt-4 border-t">
        <Button
          variant="ghost"
          className="w-full justify-start text-rose-600 hover:text-rose-700 hover:bg-rose-50"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" /> Sign Out
        </Button>
        <Button
          variant="outline"
          className="w-full justify-start mt-2"
          onClick={() => navigate("/")}
        >
          Return to Site
        </Button>
      </div>
    </div>
  );
}
