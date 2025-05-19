import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Activity = {
  id: string;
  user_id: string;
  email: string;
  logged_in_at: string;
};

export function RecentActivity() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoginActivity = async () => {
      const { data, error } = await supabase
        .from("login_activity")
        .select("*")
        .order("logged_in_at", { ascending: false })
        .limit(10);

      if (error) {
        console.error("Error fetching login activity:", error);
        setLoading(false);
        return;
      }

      setActivities(data as Activity[]);
      setLoading(false);
    };

    fetchLoginActivity();
  }, []);

  return (
    <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="font-medium text-lg mb-6">Recent Logins</h3>

      {loading ? (
        <p className="text-muted-foreground text-sm">Loading...</p>
      ) : activities.length === 0 ? (
        <p className="text-muted-foreground text-sm">No login activity found.</p>
      ) : (
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between py-2 border-b last:border-0"
            >
              <div>
                <p className="font-medium">{activity.email}</p>
                <p className="text-sm text-muted-foreground">
                  Logged in
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                {new Date(activity.logged_in_at).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
