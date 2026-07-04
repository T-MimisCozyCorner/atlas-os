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

const starterPrompt =
  "Create a printable bundle for Housing Help Hub that helps Section 8 tenants prepare for annual recertification. Include checklists, phone scripts, document trackers, a 30-day timeline, Pinterest pins, TikTok script, Facebook post, Payhip listing copy, SEO keywords, and a launch checklist. Keep it under $20.";

export function ProductFactoryForm() {
  const [request, setRequest] = useState(starterPrompt);
  const [plan, setPlan] = useState<ProductPlan | null>(null);
  const [source, setSource] = useState("");
  const [fallbackReason, setFallbackReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleGenerate() {
    setLoading(true);
    setError("");
    setFallbackReason("");
    setPlan(null);

    try {
      const response = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idea: request,
          business: undefined,
          audience: undefined,
          productType: undefined,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Generation failed.");
      }

      setPlan(result.data);
      setSource(result.source);
      setFallbackReason(result.error || "");
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <section className="card">
        <div className="mb-5 rounded-3xl border border-atlasPurple/30 bg-gradient-to-br from-atlasPink/10 via-atlasPurple/10 to-atlasTeal/10 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-atlasTeal">
            ATLAS AI Employee
          </p>
          <h3 className="mt-3 text-4xl font-black">
            What would you like me to build today?
          </h3>
          <p className="mt-3 max-w-3xl text-slate-300">
            Talk to ATLAS like an employee. Give one natural request and ATLAS will choose the business,
            create the product, write marketing copy, build the PDF outline, and prepare the launch checklist.
          </p>
        </div>

        <textarea
          className="input min-h-48 text-base leading-7"
          value={request}
          onChange={(event) => setRequest(event.target.value)}
          placeholder="Example: Create a digital product for Housing Help Hub that helps Section 8 tenants prepare for annual recertification..."
        />

        <div className="mt-4 flex flex-wrap gap-3">
          <button className="btn-primary" onClick={handleGenerate} disabled={loading}>
            {loading ? "ATLAS is building..." : "Generate Product Workspace"}
          </button>

          <button
            className="rounded-xl bg-slate-800 px-4 py-2 font-bold text-white hover:bg-slate-700"
            onClick={() => setRequest(starterPrompt)}
            type="button"
          >
            Use starter prompt
          </button>
        </div>

        {loading && (
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {["Choosing business", "Writing product", "Creating marketing", "Building checklist"].map((step) => (
              <div key={step} className="rounded-2xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-300">
                ✓ {step}
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-red-200">
            {error}
          </div>
        )}

        {source && (
          <div className="mt-4 rounded-xl border border-atlasTeal/30 bg-atlasTeal/10 p-3 text-sm text-slate-300">
            <p>Generation source: {source === "openai" ? "OpenAI API" : "Fallback generator"}</p>
            {fallbackReason && <p className="mt-2 text-yellow-200">Fallback reason: {fallbackReason}</p>}
          </div>
        )}
      </section>

      {!plan && (
        <section className="card">
          <h3 className="text-2xl font-black">Your product workspace will appear here</h3>
          <p className="mt-2 text-slate-400">
            Once ATLAS generates the draft, you’ll see editable sections for product details, sales copy,
            Pinterest, TikTok, email, SEO, image prompts, PDF outline, and launch tasks.
          </p>
        </section>
      )}

      {plan && (
        <section className="space-y-4">
          <div className="card">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-atlasTeal">
                  Generated Workspace
                </p>
                <h3 className="mt-2 text-3xl font-black">{plan.name}</h3>
                <p className="mt-2 text-slate-400">
                  {plan.business} • {plan.price} • {plan.status}
                </p>
              </div>

              <form action="/products/new" method="GET">
                {Object.entries(plan).map(([key, value]) => (
                  <input key={key} type="hidden" name={key} value={String(value ?? "")} />
                ))}
                <button className="btn-primary" type="submit">
                  Save to Product Manager
                </button>
              </form>
            </div>
          </div>

          <WorkspaceCard emoji="📦" title="Product" content={plan.description} />
          <WorkspaceCard emoji="🔍" title="SEO" content={`${plan.seo_title}\n\n${plan.seo_description}\n\nKeywords:\n${plan.keywords}`} />
          <WorkspaceCard emoji="📌" title="Pinterest" content={`${plan.pinterest_titles}\n\n${plan.pinterest_descriptions || ""}`} />
          <WorkspaceCard emoji="🎬" title="TikTok" content={plan.tiktok_script} />
          <WorkspaceCard emoji="📘" title="Facebook" content={plan.facebook_post} />
          <WorkspaceCard emoji="📸" title="Instagram" content={plan.instagram_caption || ""} />
          <WorkspaceCard emoji="📧" title="Email" content={plan.email_copy || ""} />
          <WorkspaceCard emoji="🖼️" title="Image Prompt" content={plan.image_prompt} />
          <WorkspaceCard emoji="📄" title="PDF Outline" content={plan.pdf_outline || ""} />
          <WorkspaceCard emoji="🚀" title="Launch Checklist" content={plan.launch_checklist || ""} />
        </section>
      )}
    </div>
  );
}

function WorkspaceCard({
  emoji,
  title,
  content,
}: {
  emoji: string;
  title: string;
  content: string;
}) {
  const [text, setText] = useState(content);

  async function copyText() {
    await navigator.clipboard.writeText(text);
  }

  return (
    <div className="card">
      <div className="mb-3 flex items-center justify-between gap-4">
        <h4 className="text-xl font-black">
          <span className="mr-2">{emoji}</span>
          {title}
        </h4>
        <button
          onClick={copyText}
          type="button"
          className="rounded-xl bg-slate-800 px-3 py-2 text-sm font-bold text-white hover:bg-slate-700"
        >
          Copy
        </button>
      </div>

      <textarea
        className="input min-h-40 whitespace-pre-line text-sm leading-6"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </div>
  );
}
