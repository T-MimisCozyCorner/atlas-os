import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { products } from "@/lib/data";

export default function ProductsPage() {
  return (
    <Shell>
      <PageHeader eyebrow="Product Factory" title="Product Manager" description="Track every product from idea to published asset." />
      <div className="card overflow-hidden p-0">
        <table className="w-full">
          <thead className="bg-slate-950 text-left text-atlasTeal">
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4">Business</th>
              <th className="p-4">Status</th>
              <th className="p-4">Price</th>
              <th className="p-4">Next Step</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.name} className="border-t border-slate-800">
                <td className="p-4 font-bold">{product.name}</td>
                <td className="p-4 text-slate-300">{product.business}</td>
                <td className="p-4"><span className="rounded-full bg-purple-500/20 px-3 py-1 text-sm">{product.status}</span></td>
                <td className="p-4">{product.price}</td>
                <td className="p-4 text-slate-300">{product.nextStep}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Shell>
  );
}
