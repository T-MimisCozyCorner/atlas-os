import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !product) {
    notFound();
  }

  return (
    <Shell>
      <PageHeader
        eyebrow="Product Workspace"
        title={product.name}
        description={`${product.business} • ${product.status} • ${product.price}`}
      />

      <div className="grid gap-4">
        <WorkspaceSection title="Product Description" content={product.description} />
        <WorkspaceSection title="SEO Title" content={product.seo_title} />
        <WorkspaceSection title="SEO Description" content={product.seo_description} />
        <WorkspaceSection title="Keywords" content={product.keywords} />
        <WorkspaceSection title="Pinterest Titles" content={product.pinterest_titles} />
        <WorkspaceSection title="Pinterest Descriptions" content={product.pinterest_descriptions} />
        <WorkspaceSection title="TikTok Script" content={product.tiktok_script} />
        <WorkspaceSection title="Facebook Post" content={product.facebook_post} />
        <WorkspaceSection title="Instagram Caption" content={product.instagram_caption} />
        <WorkspaceSection title="Email Copy" content={product.email_copy} />
        <WorkspaceSection title="Image Prompt" content={product.image_prompt} />
        <WorkspaceSection title="PDF Outline" content={product.pdf_outline} />
        <WorkspaceSection title="Launch Checklist" content={product.launch_checklist} />
      </div>
    </Shell>
  );
}

function WorkspaceSection({
  title,
  content,
}: {
  title: string;
  content?: string | null;
}) {
  return (
    <div className="card">
      <h3 className="mb-3 text-xl font-black">{title}</h3>
      <p className="whitespace-pre-line text-slate-300">
        {content || "Nothing saved yet."}
      </p>
    </div>
  );
}