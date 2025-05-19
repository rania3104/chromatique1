// components/admin/UserTable.tsx
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Skeleton } from "@/components/ui/skeleton";

type UserProfile = {
  id: string;
  email: string;
  name?: string;
  skin_tone?: string;
  undertone?: string;
  eye_color?: string;
  season?: string;
  created_at?: string;
};

export function UserTable() {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("user_profiles").select("*").order("created_at", { ascending: false });
      if (error) {
        console.error("Error fetching users:", error);
        return;
      }
      setUsers(data || []);
      setIsLoading(false);
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
      </div>
    );
  }

  return (
    <div className="border rounded-lg overflow-auto">
      <table className="w-full">
        <thead className="bg-muted text-sm text-left">
          <tr>
            <th className="p-3">Email</th>
            <th className="p-3">Name</th>
            <th className="p-3">Season</th>
            <th className="p-3">Skin Tone</th>
            <th className="p-3">Undertone</th>
            <th className="p-3">Eye Color</th>
            <th className="p-3">Joined</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t hover:bg-muted/50">
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.name || "—"}</td>
              <td className="p-3 capitalize">{user.season || "—"}</td>
              <td className="p-3 capitalize">{user.skin_tone || "—"}</td>
              <td className="p-3 capitalize">{user.undertone || "—"}</td>
              <td className="p-3 capitalize">{user.eye_color || "—"}</td>
              <td className="p-3 text-sm text-muted-foreground">
                {user.created_at ? new Date(user.created_at).toLocaleDateString() : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
