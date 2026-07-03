import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { createProduct } from "../actions";

export default function NewProductPage({ searchParams }: { searchParams: any }) {
  return (
    <Shell>
      <PageHeader eyebrow="Product Factory" title="Create Product" description="Review, edit, and save the product to your Supabase database." />

      {searchParams.message && <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-200">{searchParams.message}</div>}

      <form action={createProduct} className="card max-w-4xl space-y-4">
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-300">Product Name</label>
          <input className="input" name="name" defaultValue={searchParams.name || ""} placeholder="Section 8 Landlord Call Script Pack" required />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm font-bold text-slate-300">Business</label>
            <select className="input" name="business" defaultValue={searchParams.business || "Housing Help Hub"}>
              <option>Housing Help Hub</option>
              <option>Mimi's Cozy Corner</option>
              <option>Mimi Finds Daily</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold text-slate-300">Status</label>
            <select className="input" name="status" defaultValue={searchParams.status || "Draft"}>
              <option>Idea</option><option>Research</option><option>Draft</option><option>Design</option><option>Published</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-bold text-slate-300">Price</label>
            <input className="input" name="price" defaultValue={searchParams.price || ""} placeholder="$9" />
          </div>
        </div>

        <Field name="next_step" label="Next Step" value={searchParams.next_step} />
        <TextArea name="description" label="Product Description" value={searchParams.description} />
        <Field name="seo_title" label="SEO Title" value={searchParams.seo_title} />
        <TextArea name="seo_description" label="SEO Description" value={searchParams.seo_description} />
        <TextArea name="keywords" label="Keywords" value={searchParams.keywords} />
        <TextArea name="pinterest_titles" label="Pinterest Titles" value={searchParams.pinterest_titles} />
        <TextArea name="pinterest_descriptions" label="Pinterest Descriptions" value={searchParams.pinterest_descriptions} />
        <TextArea name="tiktok_script" label="TikTok Script" value={searchParams.tiktok_script} />
        <TextArea name="facebook_post" label="Facebook Post" value={searchParams.facebook_post} />
        <TextArea name="instagram_caption" label="Instagram Caption" value={searchParams.instagram_caption} />
        <TextArea name="email_copy" label="Email Copy" value={searchParams.email_copy} />
        <TextArea name="image_prompt" label="Image Prompt" value={searchParams.image_prompt} />
        <TextArea name="pdf_outline" label="PDF Outline" value={searchParams.pdf_outline} />
        <TextArea name="launch_checklist" label="Launch Checklist" value={searchParams.launch_checklist} />

        <button className="btn-primary" type="submit">Save Product</button>
      </form>
    </Shell>
  );
}

function Field({ name, label, value }: { name: string; label: string; value?: string }) {
  return <div><label className="mb-2 block text-sm font-bold text-slate-300">{label}</label><input className="input" name={name} defaultValue={value || ""} /></div>;
}

function TextArea({ name, label, value }: { name: string; label: string; value?: string }) {
  return <div><label className="mb-2 block text-sm font-bold text-slate-300">{label}</label><textarea className="input min-h-24" name={name} defaultValue={value || ""} /></div>;
}
