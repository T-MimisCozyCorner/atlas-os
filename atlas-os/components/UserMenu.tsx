import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/app/auth/actions";

export async function UserMenu() {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <form action={signOut} className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-3">
      <p className="mb-3 truncate text-xs text-slate-400">{data.user?.email}</p>
      <button className="w-full rounded-xl bg-slate-800 px-3 py-2 text-sm font-bold hover:bg-slate-700">Log out</button>
    </form>
  );
}
