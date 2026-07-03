import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";

const rows = [
  ["Mimi Finds Daily", "Affiliate", "$50/day", "Build traffic"],
  ["Mimi's Cozy Corner", "POD + Digital", "$30/day", "Add products"],
  ["Housing Help Hub", "Guides", "$20/day", "Add templates"],
];

export default function RevenuePage() {
  return (
    <Shell>
      <PageHeader eyebrow="Money Dashboard" title="Revenue Tracker" description="Track income goals by brand and income stream." />
      <div className="card overflow-hidden p-0">
        <table className="w-full">
          <thead className="bg-slate-950 text-left text-atlasTeal">
            <tr><th className="p-4">Business</th><th className="p-4">Stream</th><th className="p-4">Goal</th><th className="p-4">Focus</th></tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr className="border-t border-slate-800" key={row[0]}>
                {row.map((cell) => <td className="p-4" key={cell}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Shell>
  );
}
