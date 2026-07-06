"use client";

export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  async function copyText() {
    await navigator.clipboard.writeText(text || "");
    alert("Copied!");
  }

  return (
    <button
      type="button"
      onClick={copyText}
      className="rounded-xl bg-slate-800 px-3 py-2 text-sm font-bold text-white hover:bg-slate-700"
    >
      📋 {label}
    </button>
  );
}
