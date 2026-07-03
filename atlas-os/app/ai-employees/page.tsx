import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { employees } from "@/lib/data";

export default function AIEmployeesPage() {
  return (
    <Shell>
      <PageHeader eyebrow="AI Team" title="AI Employees" description="Specialized assistants for each business function." />
      <section className="grid gap-5 md:grid-cols-3">
        {employees.map((employee) => (
          <div className="card" key={employee.name}>
            <h3 className="text-2xl font-black">{employee.name}</h3>
            <p className="mt-3 text-slate-300">{employee.job}</p>
          </div>
        ))}
      </section>
    </Shell>
  );
}
