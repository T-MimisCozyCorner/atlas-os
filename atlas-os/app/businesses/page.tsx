import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { businesses } from "@/lib/data";

export default function BusinessesPage() {
  return (
    <Shell>
      <PageHeader eyebrow="Business Manager" title="Your Business Hubs" description="Manage each brand ATLAS OS supports." />
      <section className="grid gap-5 md:grid-cols-3">
        {businesses.map((biz) => (
          <div className="card" key={biz.name}>
            <h3 className="text-2xl font-black">{biz.name}</h3>
            <p className="mt-3 text-slate-300">{biz.focus}</p>
            <p className="mt-4 text-sm text-slate-400">Goal: {biz.goal}</p>
            <span className="mt-4 inline-block rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-300">{biz.status}</span>
          </div>
        ))}
      </section>
    </Shell>
  );
}
