const tabs = ["Overview", "Marketing", "Publishing", "Assets", "Downloads", "Launch"];

export function WorkspaceTabs() {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <a
          key={tab}
          href={`#${tab.toLowerCase()}`}
          className="rounded-xl bg-slate-800 px-4 py-2 text-sm font-bold text-white hover:bg-slate-700"
        >
          {tab}
        </a>
      ))}
    </div>
  );
}
