import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { ProductFactoryForm } from "@/components/ProductFactoryForm";

export default function ProductFactoryPage() {
  return (
    <Shell>
      <PageHeader
        eyebrow="ATLAS AI Engine"
        title="AI Product Factory"
        description="Describe a product once. ATLAS generates the product plan, content, SEO, and launch checklist."
      />
      <ProductFactoryForm />
    </Shell>
  );
}
