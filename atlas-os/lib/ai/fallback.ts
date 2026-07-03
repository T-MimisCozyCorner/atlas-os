function titleCase(input: string) {
  return input
    .replace(/[^a-zA-Z0-9 $&'-]/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.length <= 3 && word !== "and" ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function guessBusiness(idea: string) {
  const lower = idea.toLowerCase();
  if (lower.includes("section 8") || lower.includes("housing") || lower.includes("landlord") || lower.includes("voucher")) return "Housing Help Hub";
  if (lower.includes("amazon") || lower.includes("finds") || lower.includes("tiktok shop") || lower.includes("affiliate")) return "Mimi Finds Daily";
  return "Mimi's Cozy Corner";
}

function guessPrice(idea: string, business: string) {
  const lower = idea.toLowerCase();
  if (business === "Mimi Finds Daily") return "Affiliate";
  if (lower.includes("bundle") || lower.includes("kit")) return "$17";
  if (lower.includes("checklist") || lower.includes("script")) return "$9";
  if (lower.includes("planner") || lower.includes("journal")) return "$7";
  return "$12";
}

export function fallbackProductPlan(idea: string) {
  const name = titleCase(idea || "Digital Product Starter Kit");
  const business = guessBusiness(name);
  return {
    name,
    business,
    status: "Draft",
    price: guessPrice(name, business),
    next_step: "Review generated copy, create PDF/Canva file, then publish listing.",
    description: `A practical, easy-to-use ${name} designed for people who need a clear shortcut instead of starting from scratch.`,
    seo_title: `${name} | Digital Download`,
    seo_description: `Get the ${name}, a simple digital resource with templates, steps, and guidance to help buyers take action faster.`,
    keywords: `${name.toLowerCase()}, digital download, printable, template, checklist, instant download, ${business.toLowerCase()}`,
    pinterest_titles: `${name} You Can Use Today\\nSimple ${name} for Beginners\\nSave Time With This ${name}\\n${name}: Easy Digital Download\\nHelpful ${name} Template`,
    pinterest_descriptions: `A simple resource to help you get organized.\\nUse this template to save time.\\nHelpful digital download for busy people.\\nA practical checklist you can use today.\\nGrab this easy-to-use resource.`,
    tiktok_script: `Hook: I made this because people need a simpler way to handle ${name.toLowerCase()}.\\nShow the product pages quickly.\\nCTA: Grab the download from the link in my bio.`,
    facebook_post: `I created a new resource: ${name}. It gives you simple steps, helpful wording, and a clear path to follow.`,
    instagram_caption: `New resource: ${name}. Simple, practical, and made to help you take action faster. Link in bio.`,
    email_copy: `Subject idea: New resource: ${name}\\n\\nI created ${name} to make this easier and less overwhelming. It includes simple steps and helpful wording.`,
    image_prompt: `Create a clean modern digital product cover for "${name}". Use dark navy background, hot pink, purple, and teal accents.`,
    pdf_outline: `1. Introduction\\n2. Quick-start guide\\n3. Main checklist\\n4. Scripts/templates\\n5. Next steps`,
    launch_checklist: `Create PDF\\nDesign cover\\nUpload to Payhip/Gumroad\\nCreate Pinterest pins\\nPost TikTok\\nPost Facebook\\nSend email`
  };
}
