import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
} from "recharts";
import { supabase } from "@/lib/supabaseClient";

const planAmounts: Record<string, number> = {
  free: 0,
  premium: 9.99,
  vip: 24.99,
};

export const SubscriptionCharts = () => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [revenueData, setRevenueData] = useState<any[]>([]);

  useEffect(() => {
    const fetchChartData = async () => {
      const { data: subscriptions, error } = await supabase
        .from("subscriptions")
        .select("plan_id, created_at");

      if (error) {
        console.error("Error fetching subscription chart data:", error);
        return;
      }

      const counts = { free: 0, premium: 0, vip: 0 };
      const dailyRevenueMap: Record<string, number> = {};

      subscriptions.forEach((sub) => {
        const plan = sub.plan_id || "free";
        counts[plan] = (counts[plan] || 0) + 1;

        if (plan !== "free") {
          const date = new Date(sub.created_at)
            .toISOString()
            .slice(0, 10); // format as YYYY-MM-DD

          if (!dailyRevenueMap[date]) dailyRevenueMap[date] = 0;
          dailyRevenueMap[date] += planAmounts[plan];
        }
      });

      setChartData([
        { name: "Free", count: counts.free },
        { name: "Premium", count: counts.premium },
        { name: "VIP", count: counts.vip },
      ]);

      const revenueSorted = Object.entries(dailyRevenueMap)
        .sort((a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime())
        .map(([date, revenue]) => ({ date, revenue: +revenue.toFixed(2) }));

      setRevenueData(revenueSorted);
    };

    fetchChartData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Users by Plan</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Daily Revenue</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#e11d48"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
