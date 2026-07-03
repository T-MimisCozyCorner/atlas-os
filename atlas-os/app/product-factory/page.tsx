import { Shell } from "@/components/Shell";
import { PageHeader } from "@/components/PageHeader";
import { ProductFactoryForm } from "@/components/ProductFactoryForm";

export default function ProductFactoryPage() {
  return (
    <Shell>
      <PageHeader
        eyebrow="AI Product Factory"
        title="Tell ATLAS what to build"
        description="Type one idea and ATLAS will turn it into a product plan, listing copy, social content, keywords, and next steps."
      />
      <ProductFactoryForm />
    </Shell>
  );
}
