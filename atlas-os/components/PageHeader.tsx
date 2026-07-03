export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="mb-6 rounded-3xl border border-slate-700 bg-gradient-to-r from-pink-500/15 to-cyan-400/10 p-8">
      <p className="mb-2 text-xs font-black uppercase tracking-widest text-atlasTeal">{eyebrow}</p>
      <h2 className="text-4xl font-black">{title}</h2>
      <p className="mt-3 max-w-3xl text-slate-300">{description}</p>
    </section>
  );
}
