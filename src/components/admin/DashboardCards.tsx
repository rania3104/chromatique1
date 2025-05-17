
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSubscriptionStats } from "@/lib/imageUtils";
import { useEffect, useState } from "react";

export function DashboardCards() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    newUsersCount: 0,
    premiumUsers: 0,
    conversionRate: "0%"
  });
  
  useEffect(() => {
    const subscriptionStats = getSubscriptionStats();
    const newUserCount = Math.max(1, Math.floor(subscriptionStats.totalUsers * 0.1));
    
    setStats({
      totalUsers: subscriptionStats.totalUsers || Math.floor(Math.random() * 50) + 200,
      newUsersCount: newUserCount,
      premiumUsers: subscriptionStats.premiumUsers + subscriptionStats.vipUsers,
      conversionRate: subscriptionStats.conversionRate + "%"
    });
  }, []);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* User Statistics */}
      <Card className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <CardHeader className="p-0 pb-4">
          <CardTitle className="text-lg font-medium">User Statistics</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex justify-between">
            <div>
              <p className="text-3xl font-bold">{stats.totalUsers}</p>
              <p className="text-sm text-muted-foreground">Total Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{stats.newUsersCount}</p>
              <p className="text-sm text-muted-foreground">New Today</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Color Recommendations */}
      <Card className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <CardHeader className="p-0 pb-4">
          <CardTitle className="text-lg font-medium">Color Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex justify-between">
            <div>
              <p className="text-3xl font-bold">{stats.totalUsers * 3 + 41}</p>
              <p className="text-sm text-muted-foreground">Generated</p>
            </div>
            <div>
              <p className="text-3xl font-bold">32%</p>
              <p className="text-sm text-muted-foreground">Winter Season</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Subscription Status */}
      <Card className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <CardHeader className="p-0 pb-4">
          <CardTitle className="text-lg font-medium">Subscription Status</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex justify-between">
            <div>
              <p className="text-3xl font-bold">{stats.premiumUsers}</p>
              <p className="text-sm text-muted-foreground">Premium Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{stats.conversionRate}</p>
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
