import { CopyButton } from "@/components/CopyButton";
import { DownloadTextButton } from "@/components/DownloadTextButton";

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

export function PublishingTools({
  productName,
  copyEverything,
  pdfOutline,
  payhipListing,
  pinterestPackage,
  tiktokScript,
  emailCampaign,
}: {
  productName: string;
  copyEverything: string;
  pdfOutline?: string | null;
  payhipListing: string;
  pinterestPackage: string;
  tiktokScript?: string | null;
  emailCampaign: string;
}) {
  return (
    <>
      <section id="publishing" className="card mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-black">Publishing Tools</h3>
          <p className="mt-1 text-slate-400">
            Copy your launch assets into Payhip, Pinterest, TikTok, Facebook, Instagram, or email.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <CopyButton text={copyEverything} label="Copy Everything" />
          <DownloadTextButton filename={productName} text={copyEverything} label="Download TXT" />
        </div>
      </section>

      <div className="mb-6 grid gap-4 md:grid-cols-5">
        <PublishingCard title="📄 PDF" content={pdfOutline} />
        <PublishingCard title="🛒 Payhip" content={payhipListing} />
        <PublishingCard title="📌 Pinterest" content={pinterestPackage} />
        <PublishingCard title="🎬 TikTok" content={tiktokScript} />
        <PublishingCard title="📧 Email" content={emailCampaign} />
      </div>
    </>
  );
}
