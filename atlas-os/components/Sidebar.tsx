import Link from "next/link";
import { UserMenu } from "./UserMenu";

const links = [
  ["🏠", "Dashboard", "/dashboard"],
  ["🏢", "Businesses", "/businesses"],
  ["💡", "Products", "/products"],
  ["✅", "Tasks", "/tasks"],
  ["🤖", "AI Employees", "/ai-employees"],
  ["📁", "Assets", "/assets"],
  ["💰", "Revenue", "/revenue"],
];

export function Sidebar() {
  return (
    <aside className="fixed bottom-0 left-0 top-0 w-72 border-r border-slate-800 bg-slate-950/90 p-6 backdrop-blur">
      <Link href="/dashboard" className="mb-8 flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-atlasPink via-atlasPurple to-atlasTeal font-black">AI</div>
        <div><h1 className="text-xl font-black">ATLAS OS</h1><p className="text-xs text-slate-400">AI Business Operating System</p></div>
      </Link>
      <nav className="space-y-2">
        {links.map(([icon, label, href]) => (
          <Link key={href} href={href} className="block rounded-xl px-3 py-3 text-slate-200 hover:bg-slate-800"><span className="mr-3">{icon}</span>{label}</Link>
        ))}
      </nav>
      <UserMenu />
    </aside>
  );
}
