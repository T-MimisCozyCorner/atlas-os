import { CopyButton } from "@/components/CopyButton";
import { DownloadTextButton } from "@/components/DownloadTextButton";

export function ActionBar({
  copyText,
  filename,
}: {
  copyText: string;
  filename: string;
}) {
  return (
    <div className="sticky top-0 z-20 mb-6 rounded-2xl border border-slate-800 bg-slate-950/95 p-4 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-atlasTeal">
            Quick Actions
          </p>
          <p className="text-sm text-slate-400">
            Copy, export, or prepare this product for launch.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <CopyButton text={copyText} label="Copy Everything" />
          <DownloadTextButton filename={filename} text={copyText} label="Download TXT" />
          <button
            type="button"
            className="rounded-xl bg-slate-800 px-3 py-2 text-sm font-bold text-slate-400"
            disabled
          >
            🚀 Launch Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
}
