import { Hero } from "@/components/hero/Hero";
import { CatalogSection } from "@/components/catalog/CatalogSection";
import { TrustSection } from "@/components/trust/TrustSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CatalogSection />
      <TrustSection />
      <ContactSection />
    </>
  );
}
