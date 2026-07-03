"use client";

import { useState } from "react";

function guessBusiness(idea: string) {
  const lower = idea.toLowerCase();
  if (lower.includes("section 8") || lower.includes("housing") || lower.includes("landlord") || lower.includes("voucher")) return "Housing Help Hub";
  if (lower.includes("amazon") || lower.includes("finds") || lower.includes("tiktok shop") || lower.includes("affiliate")) return "Mimi Finds Daily";
  return "Mimi's Cozy Corner";
}

function titleCase(input: string) {
  return input
    .replace(/[^a-zA-Z0-9 $&'-]/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.length <= 3 && word !== "and" ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function guessPrice(idea: string, business: string) {
  const lower = idea.toLowerCase();
  if (business === "Mimi Finds Daily") return "Affiliate";
  if (lower.includes("bundle") || lower.includes("kit")) return "$17";
  if (lower.includes("checklist") || lower.includes("script")) return "$9";
  if (lower.includes("planner") || lower.includes("journal")) return "$7";
  return "$12";
}

function generateProductPlan(idea: string) {
  const cleanIdea = idea.trim() || "Digital Product Starter Kit";
  const business = guessBusiness(cleanIdea);
  const name = titleCase(cleanIdea);
  const price = guessPrice(cleanIdea, business);

  return {
    name,
    business,
    status: "Draft",
    price,
    next_step: "Review generated copy, create PDF/Canva file, then publish listing.",
    description: `A practical, easy-to-use ${name} designed for people who need a clear shortcut instead of starting from scratch. This product gives buyers simple steps, ready-to-use wording, and an organized path to take action quickly.`,
    seo_title: `${name} | Digital Download`,
    seo_description: `Get the ${name}, a simple digital resource with templates, steps, and guidance to help buyers take action faster.`,
    keywords: `${name.toLowerCase()}, digital download, printable, template, checklist, instant download, ${business.toLowerCase()}`,
    pinterest_titles: [
      `${name} You Can Use Today`,
      `Simple ${name} for Beginners`,
      `Save Time With This ${name}`,
      `${name}: Easy Digital Download`,
      `Helpful ${name} Template`
    ].join("\\n"),
    tiktok_script: `Hook: I made this because people need a simpler way to handle ${name.toLowerCase()}.\\n\\nShow the product pages quickly.\\n\\nSay: This gives you the exact steps, wording, and checklist so you don't have to figure it out alone.\\n\\nCTA: Grab the download from the link in my bio.`,
    facebook_post: `I created a new resource: ${name}.\\n\\nIt's made for anyone who wants a simple, organized way to take action without starting from scratch. It includes practical steps, ready-to-use wording, and a clear checklist.\\n\\nAvailable as a digital download.`,
    email_copy: `Subject idea: New resource: ${name}\\n\\nHi! I created ${name} to make this process easier and less overwhelming. It includes simple steps, helpful wording, and a clear path to follow.\\n\\nYou can download it today and use it right away.`,
    image_prompt: `Create a clean modern digital product cover for "${name}". Use dark navy background, hot pink, purple, and teal accents. Style should feel professional, helpful, bold, and easy to read. Include space for subtitle and small checklist-style icons.`
  };
}

export function ProductFactoryForm() {
  const [idea, setIdea] = useState("Section 8 Landlord Call Script Pack");
  const [plan, setPlan] = useState<any>(null);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.25fr]">
      <section className="card">
        <h3 className="text-2xl font-black">1. Give ATLAS one idea</h3>
        <p className="mt-2 text-slate-400">Start simple. Example: “Section 8 Approval Checklist” or “Soft Life Weekly Planner.”</p>
        <textarea className="input mt-5 min-h-36" value={idea} onChange={(event) => setIdea(event.target.value)} />
        <button className="btn-primary mt-4 w-full" onClick={() => setPlan(generateProductPlan(idea))}>Generate Product Plan</button>
        <div className="mt-6 rounded-2xl border border-atlasTeal/30 bg-atlasTeal/10 p-4 text-sm text-slate-300">
          This first version uses a built-in generator. Next sprint, we will connect this to an AI API.
        </div>
      </section>

      <section className="card">
        <h3 className="text-2xl font-black">2. Review and save</h3>
        {!plan && <p className="mt-4 text-slate-400">Click “Generate Product Plan” to create a product draft.</p>}
        {plan && (
          <form action="/products/new" method="GET" className="mt-5 space-y-4">
            {Object.entries(plan).map(([key, value]) => <input key={key} type="hidden" name={key} value={String(value)} />)}
            <div className="grid gap-3">
              <Preview label="Product Name" value={plan.name} />
              <Preview label="Business" value={plan.business} />
              <Preview label="Suggested Price" value={plan.price} />
              <Preview label="Next Step" value={plan.next_step} />
              <Preview label="Description" value={plan.description} large />
              <Preview label="Pinterest Titles" value={plan.pinterest_titles} large />
              <Preview label="TikTok Script" value={plan.tiktok_script} large />
              <Preview label="Image Prompt" value={plan.image_prompt} large />
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
