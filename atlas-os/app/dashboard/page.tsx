import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { businesses, dailyPlan, tasks } from "@/lib/data";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = createClient();
  const { count: productCount } = await supabase.from("products").select("*", { count: "exact", head: true });

  return (
    <Shell>
      <PageHeader eyebrow="Founder Command Center" title="Good morning, Tonya 👋" description="ATLAS OS now has real login and database support. Product records are saved in Supabase." />
      <section className="mb-6 grid gap-4 md:grid-cols-4">
        <div className="card"><p className="text-slate-400">Businesses</p><h3 className="mt-2 text-3xl font-black">{businesses.length}</h3></div>
        <div className="card"><p className="text-slate-400">Products</p><h3 className="mt-2 text-3xl font-black">{productCount ?? 0}</h3></div>
        <div className="card"><p className="text-slate-400">Open Tasks</p><h3 className="mt-2 text-3xl font-black">{tasks.filter(t => t.status !== "Done").length}</h3></div>
        <div className="card"><p className="text-slate-400">Daily Goal</p><h3 className="mt-2 text-2xl font-black">$100/day</h3></div>
      </section>
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card"><h3 className="mb-4 text-2xl font-black">Today's AI Plan</h3><ol className="space-y-3">{dailyPlan.map((item, index) => <li key={item} className="rounded-xl bg-slate-950 p-3"><span className="mr-2 text-atlasTeal">{index + 1}.</span>{item}</li>)}</ol></div>
        <div className="card"><h3 className="mb-4 text-2xl font-black">Sprint 2.1 Status</h3><p className="text-slate-300">Login and Supabase database are now wired in. Next: create/edit product workflows, then the AI Product Factory.</p><div className="mt-5 rounded-2xl border border-pink-500/30 bg-pink-500/10 p-4">Next product: <strong>Section 8 Landlord Call Script Pack</strong></div></div>
      </section>
    </Shell>
  );
}
