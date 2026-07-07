import { CollapsibleCard } from "./CollapsibleCard";
import { CopyButton } from "@/components/CopyButton";

export function AssetsSection({
  imagePrompt,
  pdfOutline,
}: {
  imagePrompt?: string | null;
  pdfOutline?: string | null;
}) {
  const copyText = `ASSETS

IMAGE PROMPT
${imagePrompt || ""}

PDF OUTLINE
${pdfOutline || ""}`;

  return (
    <CollapsibleCard title="🎨 Assets">
      <div className="space-y-5">
        <CopyButton text={copyText} label="Copy Assets" />

        <div>
          <p className="text-sm font-bold text-atlasTeal">Image Prompt</p>
          <p className="mt-1 whitespace-pre-line text-slate-300">
            {imagePrompt || "Nothing saved yet."}
          </p>
        </div>

        <div>
          <p className="text-sm font-bold text-atlasTeal">PDF Outline</p>
          <p className="mt-1 whitespace-pre-line text-slate-300">
            {pdfOutline || "Nothing saved yet."}
          </p>
        </div>
      </div>
    </CollapsibleCard>
  );
}
