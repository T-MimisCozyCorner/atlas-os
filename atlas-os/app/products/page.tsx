import Link from "next/link";
import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { createClient } from "@/lib/supabase/server";
import { deleteProduct } from "./actions";

export default async function ProductsPage() {
  const supabase = createClient();
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <Shell>
      <div className="flex items-start justify-between gap-4">
        <PageHeader
          eyebrow="Product Factory"
          title="Product Manager"
          description="Track every product from idea to published asset."
        />
        <div className="mt-3 flex gap-3">
          <Link href="/product-factory" className="btn-primary whitespace-nowrap">
            AI Product Factory
          </Link>
          <Link
            href="/products/new"
            className="whitespace-nowrap rounded-xl bg-slate-800 px-4 py-2 font-bold text-white hover:bg-slate-700"
          >
            + New Product
          </Link>
        </div>
      </div>

      {error && (
        <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-200">
          {error.message}
        </div>
      )}

      <div className="card overflow-hidden p-0">
        <table className="w-full">
          <thead className="bg-slate-950 text-left text-atlasTeal">
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4">Business</th>
              <th className="p-4">Status</th>
              <th className="p-4">Price</th>
              <th className="p-4">Next Step</th>
              <th className="p-4">Content</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product: any) => (
              <tr key={product.id} className="border-t border-slate-800 align-top">
                <td className="p-4 font-bold">{product.name}</td>
                <td className="p-4 text-slate-300">{product.business}</td>
                <td className="p-4">
                  <span className="rounded-full bg-purple-500/20 px-3 py-1 text-sm">
                    {product.status}
                  </span>
                </td>
                <td className="p-4">{product.price}</td>
                <td className="p-4 text-slate-300">{product.next_step}</td>
                <td className="p-4 text-sm text-slate-400">
                  {product.description ? "Generated" : "Manual"}
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <Link
                      href={`/products/${product.id}`}
                      className="rounded-lg bg-atlasTeal/20 px-3 py-2 text-sm font-bold text-atlasTeal hover:bg-atlasTeal/30"
                    >
                      Open
                    </Link>
                    <form action={deleteProduct}>
                      <input type="hidden" name="id" value={product.id} />
                      <button className="rounded-lg bg-red-500/15 px-3 py-2 text-sm text-red-200 hover:bg-red-500/25">
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Shell>
  );
}
