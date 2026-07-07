import { CollapsibleCard } from "./CollapsibleCard";
import { CopyButton } from "@/components/CopyButton";

export function SocialSection({
  pinterestTitles,
  pinterestDescriptions,
  tiktokScript,
  facebookPost,
  instagramCaption,
  emailCopy,
}: {
  pinterestTitles?: string | null;
  pinterestDescriptions?: string | null;
  tiktokScript?: string | null;
  facebookPost?: string | null;
  instagramCaption?: string | null;
  emailCopy?: string | null;
}) {
  const copyText = `SOCIAL PACKAGE

PINTEREST TITLES
${pinterestTitles || ""}

PINTEREST DESCRIPTIONS
${pinterestDescriptions || ""}

TIKTOK SCRIPT
${tiktokScript || ""}

FACEBOOK POST
${facebookPost || ""}

INSTAGRAM CAPTION
${instagramCaption || ""}

EMAIL COPY
${emailCopy || ""}`;

  return (
    <CollapsibleCard title="📣 Social + Email">
      <div className="space-y-5">
        <CopyButton text={copyText} label="Copy Social Package" />

        <SocialBlock title="Pinterest Titles" content={pinterestTitles} />
        <SocialBlock title="Pinterest Descriptions" content={pinterestDescriptions} />
        <SocialBlock title="TikTok Script" content={tiktokScript} />
        <SocialBlock title="Facebook Post" content={facebookPost} />
        <SocialBlock title="Instagram Caption" content={instagramCaption} />
        <SocialBlock title="Email Copy" content={emailCopy} />
      </div>
    </CollapsibleCard>
  );
}

function SocialBlock({ title, content }: { title: string; content?: string | null }) {
  return (
    <div>
      <p className="text-sm font-bold text-atlasTeal">{title}</p>
      <p className="mt-1 whitespace-pre-line text-slate-300">
        {content || "Nothing saved yet."}
      </p>
    </div>
  );
}
