import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";


import { DownloadsPanel } from "@/components/workspace/DownloadsPanel";
import { PublishingTools } from "@/components/workspace/PublishingTools";
import { SEOSection } from "@/components/workspace/SEOSection";
import { SocialSection } from "@/components/workspace/SocialSection";
import { AssetsSection } from "@/components/workspace/AssetsSection";
import { LaunchSection } from "@/components/workspace/LaunchSection";
import { ProductDescription } from "@/components/workspace/ProductDescription";
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

export default async function ProductDetailPage({ params, searchParams }: { params: { id: string }; searchParams: { message?: string } }) {
  const supabase = createClient();

  const { data: product, error } = await supabase.from("products").select("*").eq("id", params.id).single();
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
      <PageHeader eyebrow="Product Workspace" title={product.name} description={`${product.business} • ${product.status} • ${product.price}`} />

      <div className="mb-6 flex flex-wrap gap-2">
        {["Overview", "Marketing", "Publishing", "Assets", "Downloads", "Launch"].map((tab) => (
          <a key={tab} href={`#${tab.toLowerCase()}`} className="rounded-xl bg-slate-800 px-4 py-2 text-sm font-bold text-white hover:bg-slate-700">
            {tab}
          </a>
        ))}
      </div>

      {searchParams.message && <div className="mb-4 rounded-xl border border-atlasTeal/30 bg-atlasTeal/10 p-4 text-atlasTeal">{searchParams.message}</div>}

     <DownloadsPanel />

      <PublishingTools
  productName={product.name}
  copyEverything={copyEverything}
  pdfOutline={product.pdf_outline}
  payhipListing={payhipListing}
  pinterestPackage={pinterestPackage}
  tiktokScript={product.tiktok_script}
  emailCampaign={emailCampaign}
/>
       
<section id="overview" className="grid gap-4">
     <ProductDescription
  productId={product.id}
  description={product.description}
  action={updateProductDescription}
/>

        <SEOSection
          seoTitle={product.seo_title}
          seoDescription={product.seo_description}
          keywords={product.keywords}
        />
        <SocialSection
          pinterestTitles={product.pinterest_titles}
          pinterestDescriptions={product.pinterest_descriptions}
          tiktokScript={product.tiktok_script}
          facebookPost={product.facebook_post}
          instagramCaption={product.instagram_caption}
          emailCopy={product.email_copy}
        />
        <AssetsSection
          imagePrompt={product.image_prompt}
          pdfOutline={product.pdf_outline}
        />
        <LaunchSection launchChecklist={product.launch_checklist} />
      </section>
    </Shell>
  );
}






