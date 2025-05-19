// lib/logLogin.ts
import { supabase } from "@/lib/supabaseClient";

export async function logLogin(userId: string, email: string) {
  const { error } = await supabase.from("login_activity").insert({
    user_id: userId,
    email,
    logged_in_at: new Date().toISOString(),
  });

  if (error) {
    console.error("Failed to log login activity:", error);
  }
}
