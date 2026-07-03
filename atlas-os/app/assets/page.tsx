import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";

const folders = ["Images", "PDFs", "Mockups", "Videos", "Logos", "Prompt Packs", "Brand Kits", "Templates"];

export default function AssetsPage() {
  return (
    <Shell>
      <PageHeader eyebrow="Asset Library" title="Files & Creative Assets" description="A home for the assets your businesses create and reuse." />
      <section className="grid gap-5 md:grid-cols-4">
        {folders.map((folder) => (
          <div className="card" key={folder}>
            <h3 className="text-xl font-black">📁 {folder}</h3>
            <p className="mt-3 text-sm text-slate-400">Coming in Sprint 2</p>
          </div>
        ))}
      </section>
    </Shell>
  );
}
