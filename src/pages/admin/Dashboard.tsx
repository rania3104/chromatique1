import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminHeader } from "@/components/admin/AdminHeader";
import DashboardCards from "@/components/admin/DashboardCards";
import { RecentActivity } from "@/components/admin/RecentActivity";
import { supabase } from "@/lib/supabaseClient";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [userCount, setUserCount] = useState(0);
  const [subscriptionStats, setSubscriptionStats] = useState({
    free: 0,
    premium: 0,
    vip: 0,
  });

  useEffect(() => {
    const adminData = localStorage.getItem("chromatique-admin");
    if (!adminData) {
      navigate("/admin/login");
      return;
    }

    try {
      const { isAdmin } = JSON.parse(adminData);
      setIsAdmin(isAdmin);
    } catch (error) {
      navigate("/admin/login");
    }

    setIsLoading(false);
  }, [navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchDashboardData();
    }
  }, [isAdmin]);

  const fetchDashboardData = async () => {
    try {
      // Count total users
      const { data: users, error: userError } = await supabase
        .from("user_profiles")
        .select("id");

      if (userError) throw userError;
      setUserCount(users?.length || 0);

      // Count subscription plans
      const { data: subscriptions, error: subError } = await supabase
        .from("subscriptions")
        .select("plan_id");

      if (subError) throw subError;

      const stats = {
        free: 0,
        premium: 0,
        vip: 0,
      };

      subscriptions?.forEach((s) => {
        if (s.plan_id === "free") stats.free++;
        else if (s.plan_id === "premium") stats.premium++;
        else if (s.plan_id === "vip") stats.vip++;
      });

      setSubscriptionStats(stats);
    } catch (err) {
      console.error("Failed to fetch dashboard data:", err);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-pulse">
          <p className="text-xl text-chromatique-taupe">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <AdminHeader />
      <div className="flex flex-1">
        <div className="hidden md:block w-64 border-r bg-background">
          <AdminSidebar />
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden absolute top-4 left-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <span className="sr-only">Toggle Menu</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1.5 7C1.22386 7 1 7.22386 1 7.5C1 7.77614 1.22386 8 1.5 8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H1.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <SheetHeader className="border-b p-4">
              <SheetTitle>Admin Navigation</SheetTitle>
            </SheetHeader>
            <AdminSidebar />
          </SheetContent>
        </Sheet>

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-serif mb-6">Dashboard</h1>

            <DashboardCards
              totalUsers={userCount}
              planStats={subscriptionStats}
            />

            <RecentActivity />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
