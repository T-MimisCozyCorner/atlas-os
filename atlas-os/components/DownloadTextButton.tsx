"use client";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function DownloadTextButton({
  filename,
  text,
  label = "Download TXT",
}: {
  filename: string;
  text: string;
  label?: string;
}) {
  function downloadFile() {
    const blob = new Blob([text || ""], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${slugify(filename || "atlas-product")}.txt`;

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
  }

  return (
    <button
      type="button"
      onClick={downloadFile}
      className="rounded-xl bg-slate-800 px-3 py-2 text-sm font-bold text-white hover:bg-slate-700"
    >
      ⬇ {label}
    </button>
  );
}
