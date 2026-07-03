import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { tasks } from "@/lib/data";

const columns = ["To Do", "Doing", "Done"];

export default function TasksPage() {
  return (
    <Shell>
      <PageHeader eyebrow="Daily Planner" title="Task Board" description="Keep the business moving with clear daily action." />
      <section className="grid gap-5 md:grid-cols-3">
        {columns.map((column) => (
          <div className="card" key={column}>
            <h3 className="mb-4 text-2xl font-black">{column}</h3>
            <div className="space-y-3">
              {tasks.filter((task) => task.status === column).map((task) => (
                <div key={task.title} className="rounded-xl bg-slate-950 p-4">
                  <p className="font-bold">{task.title}</p>
                  <p className="mt-2 text-sm text-slate-400">Priority: {task.priority}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </Shell>
  );
}
