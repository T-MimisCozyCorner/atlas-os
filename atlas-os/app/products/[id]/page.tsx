import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { CopyButton } from "@/components/CopyButton";
import { createClient } from "@/lib/supabase/server";
import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

async function updateProductDescription(formData: FormData) {
  "use server";

  const id = String(formData.get("id"));
  const description = String(formData.get("description"));
  const supabase = createClient();

  const { error } = await supabase.from("products").update({ description }).eq("id", id);

  if (error) redirect(`/products/${id}?message=${encodeURIComponent(error.message)}`);

  revalidatePath(`/products/${id}`);
  redirect(`/products/${id}?message=Product description saved`);
}

export default async function ProductDetailPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { message?: string };
}) {
  const supabase = createClient();

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !product) notFound();

  const payhipListing = `${product.name}

Price: ${product.price}

${product.description}

What's included:
${product.pdf_outline || "Add PDF outline here."}

SEO keywords:
${product.keywords || ""}`;

  const pinterestPackage = `Pinterest Titles:
${product.pinterest_titles || ""}

Pinterest Descriptions:
${product.pinterest_descriptions || ""}`;

  const emailCampaign = `${product.email_copy || ""}`;

  const copyEverything = `ATLAS PRODUCT EXPORT

PRODUCT
${product.name}
${product.business} • ${product.status} • ${product.price}

DESCRIPTION
${product.description || ""}

SEO
Title: ${product.seo_title || ""}
Description: ${product.seo_description || ""}
Keywords: ${product.keywords || ""}

PAYHIP LISTING
${payhipListing}

PINTEREST PACKAGE
${pinterestPackage}

TIKTOK SCRIPT
${product.tiktok_script || ""}

FACEBOOK POST
${product.facebook_post || ""}

INSTAGRAM CAPTION
${product.instagram_caption || ""}

EMAIL CAMPAIGN
${emailCampaign}

IMAGE PROMPT
${product.image_prompt || ""}

PDF OUTLINE
${product.pdf_outline || ""}

LAUNCH CHECKLIST
${product.launch_checklist || ""}`;

  return (
    <Shell>
      <PageHeader
        eyebrow="Product Workspace"
        title={product.name}
        description={`${product.business} • ${product.status} • ${product.price}`}
      />

      {searchParams.message && (
        <div className="mb-4 rounded-xl border border-atlasTeal/30 bg-atlasTeal/10 p-4 text-atlasTeal">
          {searchParams.message}
        </div>
      )}

      <div className="card mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-black">Publishing Tools</h3>
          <p className="mt-1 text-slate-400">
            Copy your launch assets into Payhip, Pinterest, TikTok, Facebook, Instagram, or email.
          </p>
        </div>
        <CopyButton text={copyEverything} label="Copy Everything" />
      </div>

      <div className="mb-6 grid gap-4 md:grid-cols-5">
        <PublishingCard title="📄 PDF" content={product.pdf_outline} />
        <PublishingCard title="🛒 Payhip" content={payhipListing} />
        <PublishingCard title="📌 Pinterest" content={pinterestPackage} />
        <PublishingCard title="🎬 TikTok" content={product.tiktok_script} />
        <PublishingCard title="📧 Email" content={emailCampaign} />
      </div>

      <div className="grid gap-4">
        <form action={updateProductDescription} className="card">
          <input type="hidden" name="id" value={product.id} />
          <h3 className="mb-3 text-xl font-black">Product Description</h3>
          <textarea
            name="description"
            className="input min-h-40 text-sm leading-6"
            defaultValue={product.description || ""}
          />
          <button className="btn-primary mt-4" type="submit">
            Save Description
          </button>
        </form>

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

function PublishingCard({ title, content }: { title: string; content?: string | null }) {
  const safeContent = content || "Nothing saved yet.";

  return (
    <div className="card">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h3 className="text-lg font-black">{title}</h3>
        <CopyButton text={safeContent} />
      </div>
      <p className="mt-2 line-clamp-4 text-sm text-slate-400">{safeContent}</p>
    </div>
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
