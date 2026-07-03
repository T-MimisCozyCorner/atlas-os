import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { createProduct } from "../actions";

export default function NewProductPage({ searchParams }: { searchParams: { message?: string } }) {
  return (
    <Shell>
      <PageHeader eyebrow="Product Factory" title="Create Product" description="Add a real product to your Supabase database." />
      {searchParams.message && <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-200">{searchParams.message}</div>}
      <form action={createProduct} className="card max-w-2xl space-y-4">
        <div><label className="mb-2 block text-sm font-bold text-slate-300">Product Name</label><input className="input" name="name" placeholder="Section 8 Landlord Call Script Pack" required /></div>
        <div><label className="mb-2 block text-sm font-bold text-slate-300">Business</label><select className="input" name="business" defaultValue="Housing Help Hub"><option>Housing Help Hub</option><option>Mimi's Cozy Corner</option><option>Mimi Finds Daily</option></select></div>
        <div><label className="mb-2 block text-sm font-bold text-slate-300">Status</label><select className="input" name="status" defaultValue="Idea"><option>Idea</option><option>Research</option><option>Draft</option><option>Design</option><option>Published</option></select></div>
        <div><label className="mb-2 block text-sm font-bold text-slate-300">Price</label><input className="input" name="price" placeholder="$9" /></div>
        <div><label className="mb-2 block text-sm font-bold text-slate-300">Next Step</label><input className="input" name="next_step" placeholder="Write templates and create PDF" /></div>
        <button className="btn-primary" type="submit">Save Product</button>
      </form>
    </Shell>
  );
}
