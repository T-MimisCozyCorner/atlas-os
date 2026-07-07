"use client";

import { useState } from "react";

export function CollapsibleCard({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="card">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left"
      >
        <h3 className="text-xl font-black">{title}</h3>
        <span className="text-slate-400">{open ? "▼" : "▶"}</span>
      </button>

      {open && <div className="mt-4">{children}</div>}
    </div>
  );
}
