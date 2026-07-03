"use client";

import { useState } from "react";

type ProductPlan = {
  name: string;
  business: string;
  status: string;
  price: string;
  next_step: string;
  description: string;
  seo_title: string;
  seo_description: string;
  keywords: string;
  pinterest_titles: string;
  pinterest_descriptions?: string;
  tiktok_script: string;
  facebook_post: string;
  instagram_caption?: string;
  email_copy: string;
  image_prompt: string;
  pdf_outline?: string;
  launch_checklist?: string;
};

export function ProductFactoryForm() {
  const [idea, setIdea] = useState("Section 8 Landlord Call Script Pack");
  const [business, setBusiness] = useState("Auto-pick best fit");
  const [audience, setAudience] = useState("");
  const [productType, setProductType] = useState("");
  const [plan, setPlan] = useState<ProductPlan | null>(null);
  const [source, setSource] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGenerate() {
    setLoading(true);
    setError("");
    setPlan(null);

    try {
      const response = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idea,
          business: business === "Auto-pick best fit" ? undefined : business,
          audience,
          productType,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Generation failed.");
      }

      setPlan(result.data);
      setSource(result.source);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.25fr]">
      <section className="card">
        <h3 className="text-2xl font-black">1. Give ATLAS one idea</h3>
        <p className="mt-2 text-slate-400">ATLAS will generate the product plan, sales copy, SEO, content ideas, and launch checklist.</p>

        <label className="mb-2 mt-5 block text-sm font-bold text-slate-300">Product idea</label>
        <textarea className="input min-h-32" value={idea} onChange={(event) => setIdea(event.target.value)} />

        <label className="mb-2 mt-4 block text-sm font-bold text-slate-300">Business</label>
        <select className="input" value={business} onChange={(event) => setBusiness(event.target.value)}>
          <option>Auto-pick best fit</option>
          <option>Housing Help Hub</option>
          <option>Mimi's Cozy Corner</option>
          <option>Mimi Finds Daily</option>
        </select>

        <label className="mb-2 mt-4 block text-sm font-bold text-slate-300">Audience</label>
        <input className="input" value={audience} onChange={(event) => setAudience(event.target.value)} placeholder="Example: Section 8 voucher holders" />

        <label className="mb-2 mt-4 block text-sm font-bold text-slate-300">Product type</label>
        <input className="input" value={productType} onChange={(event) => setProductType(event.target.value)} placeholder="Example: checklist, planner, script pack, guide" />

        <button className="btn-primary mt-5 w-full" onClick={handleGenerate} disabled={loading}>
          {loading ? "Generating..." : "Generate With ATLAS AI"}
        </button>

        {error && <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-red-200">{error}</div>}

        {source && (
          <div className="mt-4 rounded-xl border border-atlasTeal/30 bg-atlasTeal/10 p-3 text-sm text-slate-300">
            Generation source: {source === "openai" ? "OpenAI API" : "Fallback generator"}
          </div>
        )}
      </section>

      <section className="card">
        <h3 className="text-2xl font-black">2. Review and save</h3>
        {!plan && <p className="mt-4 text-slate-400">Generate a product plan to preview it here.</p>}

        {plan && (
          <form action="/products/new" method="GET" className="mt-5 space-y-4">
            {Object.entries(plan).map(([key, value]) => (
              <input key={key} type="hidden" name={key} value={String(value ?? "")} />
            ))}

            <div className="grid gap-3">
              <Preview label="Product Name" value={plan.name} />
              <Preview label="Business" value={plan.business} />
              <Preview label="Suggested Price" value={plan.price} />
              <Preview label="Description" value={plan.description} large />
              <Preview label="PDF Outline" value={plan.pdf_outline || ""} large />
              <Preview label="Pinterest Titles" value={plan.pinterest_titles} large />
              <Preview label="TikTok Script" value={plan.tiktok_script} large />
              <Preview label="Launch Checklist" value={plan.launch_checklist || ""} large />
            </div>

            <button className="btn-primary w-full" type="submit">Send to Save Form</button>
          </form>
        )}
      </section>
    </div>
  );
}

function Preview({ label, value, large = false }: { label: string; value: string; large?: boolean }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-atlasTeal">{label}</p>
      <p className={large ? "whitespace-pre-line text-sm text-slate-300" : "text-slate-200"}>{value}</p>
    </div>
  );
}
