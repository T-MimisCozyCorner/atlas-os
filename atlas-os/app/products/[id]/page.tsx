import { Shell } from "@/components/Shell";
import Link from "next/link";

const categories = [
  {
    title: "🏠 Housing Help Hub",
    items: [
      "Section 8 Approval Kit",
      "Annual Recertification Bundle",
      "Landlord Call Script Pack",
      "Housing Binder",
      "Move-Out Checklist",
    ],
  },
  {
    title: "🛍 Mimi's Cozy Corner",
    items: ["T-Shirt", "Sticker Pack", "Canvas Wall Art", "Coffee Mug", "Printable Wall Art"],
  },
  {
    title: "📱 Mimi Finds Daily",
    items: ["Amazon Finds Campaign", "TikTok Product Review", "Pinterest Campaign", "Instagram Campaign"],
  },
  {
    title: "🤖 AI Digital Products",
    items: ["ChatGPT Prompt Pack", "365-Day Caption Bank", "AI Wall Art Pack", "Cozy Commerce Instagram Kit"],
  },
  {
    title: "💼 AI Services",
    items: ["Monroe County Intel Brief", "AI Research Service", "Automation Agency", "Private Membership"],
  },
];

export default function BlueprintLibraryPage() {
  return (
    <Shell>
      <div className="mb-8">
        <h1 className="text-4xl font-black">Blueprint Library</h1>
        <p className="mt-2 text-slate-400">
          Start every product from a reusable AI blueprint instead of a blank page.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {categories.map((category) => (
          <div key={category.title} className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
            <h2 className="mb-4 text-2xl font-black">{category.title}</h2>

            <div className="space-y-3">
              {category.items.map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl border border-slate-800 p-4">
                  <span>{item}</span>
                  <button className="btn-primary">Generate Product</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link href="/products" className="btn-secondary">
          ← Back to Product Factory
        </Link>
      </div>
    </Shell>
  );
}