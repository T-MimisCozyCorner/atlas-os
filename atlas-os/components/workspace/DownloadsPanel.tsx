function DownloadCard({ title, status }: { title: string; status: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
      <h4 className="font-black">{title}</h4>
      <p className="mt-2 text-sm text-slate-400">{status}</p>
    </div>
  );
}

export function DownloadsPanel() {
  return (
    <section id="downloads" className="card mb-6">
      <h3 className="text-2xl font-black">Downloads</h3>
      <p className="mt-1 text-slate-400">
        Export this product package into files you can use outside ATLAS.
      </p>

      <div className="mt-5 grid gap-4 md:grid-cols-4">
        <DownloadCard title="📄 PDF" status="Coming soon" />
        <DownloadCard title="📝 Markdown" status="Coming soon" />
        <DownloadCard title="📋 TXT" status="Coming soon" />
        <DownloadCard title="📦 Product Package" status="Coming soon" />
      </div>
    </section>
  );
}
