import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Activity = {
  id: string;
  user_id: string;
  email: string;
  logged_in_at: string;
};

const PAGE_SIZE = 15;

export function RecentActivity() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchLoginActivity = async () => {
      setLoading(true);

      const from = (page - 1) * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      const { data, error, count } = await supabase
        .from("login_activity")
        .select("*", { count: "exact" }) // get total count for pagination
        .order("logged_in_at", { ascending: false })
        .range(from, to);

      if (error) {
        console.error("Error fetching login activity:", error);
        setLoading(false);
        return;
      }

      setActivities(data as Activity[]);
      setTotalCount(count ?? 0);
      setLoading(false);
    };

    fetchLoginActivity();
  }, [page]);

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

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
                <p className="text-sm text-muted-foreground">Logged in</p>
              </div>
              <div className="text-sm text-muted-foreground">
                {new Date(activity.logged_in_at).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {!loading && totalPages > 1 && (
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 text-sm rounded bg-gray-100 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 text-sm rounded bg-gray-100 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
