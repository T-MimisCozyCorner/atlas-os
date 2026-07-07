import { CollapsibleCard } from "./CollapsibleCard";
import { CopyButton } from "@/components/CopyButton";

export function LaunchSection({
  launchChecklist,
}: {
  launchChecklist?: string | null;
}) {
  const copyText = `LAUNCH CHECKLIST

${launchChecklist || ""}`;

  return (
    <CollapsibleCard title="🚀 Launch">
      <div className="space-y-4">
        <CopyButton text={copyText} label="Copy Launch Checklist" />

        <div>
          <p className="text-sm font-bold text-atlasTeal">Launch Checklist</p>
          <p className="mt-1 whitespace-pre-line text-slate-300">
            {launchChecklist || "Nothing saved yet."}
          </p>
        </div>
      </div>
    </CollapsibleCard>
  );
}
