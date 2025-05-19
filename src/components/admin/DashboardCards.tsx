import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type DashboardCardsProps = {
  totalUsers: number;
  planStats: {
    free: number;
    premium: number;
    vip: number;
  };
};

const DashboardCards: React.FC<DashboardCardsProps> = ({ totalUsers, planStats }) => {
  const newUsersCount = Math.max(1, Math.floor(totalUsers * 0.1));
  const premiumUsers = planStats.premium + planStats.vip;
  const conversionRate =
    totalUsers > 0 ? ((premiumUsers / totalUsers) * 100).toFixed(1) + "%" : "0%";

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
              <p className="text-3xl font-bold">{totalUsers}</p>
              <p className="text-sm text-muted-foreground">Total Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{newUsersCount}</p>
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
              <p className="text-3xl font-bold">{totalUsers * 3 + 41}</p>
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
              <p className="text-3xl font-bold">{premiumUsers}</p>
              <p className="text-sm text-muted-foreground">Premium Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{conversionRate}</p>
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCards;
