import { CollapsibleCard } from "./CollapsibleCard";
import { CopyButton } from "@/components/CopyButton";

export function SEOSection({
  seoTitle,
  seoDescription,
  keywords,
}: {
  seoTitle?: string | null;
  seoDescription?: string | null;
  keywords?: string | null;
}) {
  const copyText = `SEO TITLE
${seoTitle || ""}

SEO DESCRIPTION
${seoDescription || ""}

KEYWORDS
${keywords || ""}`;

  return (
    <CollapsibleCard title="🔍 SEO">
      <div className="space-y-4">
        <CopyButton text={copyText} label="Copy SEO" />

        <div>
          <p className="text-sm font-bold text-atlasTeal">SEO Title</p>
          <p className="mt-1 whitespace-pre-line text-slate-300">{seoTitle || "Nothing saved yet."}</p>
        </div>

        <div>
          <p className="text-sm font-bold text-atlasTeal">SEO Description</p>
          <p className="mt-1 whitespace-pre-line text-slate-300">{seoDescription || "Nothing saved yet."}</p>
        </div>

        <div>
          <p className="text-sm font-bold text-atlasTeal">Keywords</p>
          <p className="mt-1 whitespace-pre-line text-slate-300">{keywords || "Nothing saved yet."}</p>
        </div>
      </div>
    </CollapsibleCard>
  );
}
