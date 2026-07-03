import { Sidebar } from "./Sidebar";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidebar />
      <main className="ml-72 min-h-screen p-8">{children}</main>
    </div>
  );
}
