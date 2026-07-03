export type ProductGenerationInput = {
  idea: string;
  business?: string;
  audience?: string;
  productType?: string;
};

export const businessProfiles: Record<string, string> = {
  "Housing Help Hub":
    "Housing Help Hub helps renters, Section 8 voucher holders, DSS/benefits households, and people navigating housing applications. Tone: respectful, clear, practical, dignity-first, non-legal-advice.",
  "Mimi's Cozy Corner":
    "Mimi's Cozy Corner sells cozy, funny, emotionally honest print-on-demand and digital products. Tone: cozy, real, slightly chaotic, warm, bold.",
  "Mimi Finds Daily":
    "Mimi Finds Daily shares budget-friendly product finds, affiliate recommendations, home finds, pet picks, beauty, tech, and everyday useful products. Tone: helpful, honest, casual, energetic.",
};

export function getProductFactoryPrompt(input: ProductGenerationInput) {
  const business = input.business || "Auto-pick best fit";
  const businessContext =
    business !== "Auto-pick best fit"
      ? businessProfiles[business] || business
      : Object.entries(businessProfiles)
          .map(([name, profile]) => `${name}: ${profile}`)
          .join("\\n");

  return `
You are ATLAS OS, an AI product strategist for a creator running three businesses.

Business context:
${businessContext}

User idea:
${input.idea}

Preferred business:
${business}

Audience:
${input.audience || "Infer from the idea"}

Product type:
${input.productType || "Infer best product type"}

Create a practical sellable product plan.

Return ONLY valid JSON. No markdown. No commentary.

Use this exact JSON shape:
{
  "name": "string",
  "business": "Housing Help Hub | Mimi's Cozy Corner | Mimi Finds Daily",
  "status": "Draft",
  "price": "string",
  "next_step": "string",
  "description": "string",
  "seo_title": "string",
  "seo_description": "string",
  "keywords": "comma separated string",
  "pinterest_titles": "5 lines, one title per line",
  "pinterest_descriptions": "5 lines, one description per line",
  "tiktok_script": "string",
  "facebook_post": "string",
  "instagram_caption": "string",
  "email_copy": "string",
  "image_prompt": "string",
  "pdf_outline": "numbered outline as a string",
  "launch_checklist": "checklist as a string"
}

Rules:
- Keep it ethical and legal.
- Do not promise guaranteed income, guaranteed housing approval, or guaranteed results.
- For Housing Help Hub, avoid legal advice language. Say practical guidance, scripts, checklists, and organization help.
- Make the product specific enough to sell.
- Price under $20 unless the idea clearly requires affiliate pricing.
- Make copy simple, useful, and ready to paste into Payhip/Gumroad/social platforms.
`;
}
