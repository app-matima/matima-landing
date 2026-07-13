import { SectionNav } from "@/components/SectionNav";
import { HeroRevealProvider } from "./HeroRevealContext";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { BrandSeparator } from "./BrandSeparator";
import { ProblemeSection } from "./ProblemeSection";
import { FonctionnalitesSection } from "./FonctionnalitesSection";
import { TarifsSection } from "./TarifsSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <HeroRevealProvider>
      <Navbar />
      <SectionNav />
      <main>
        <HeroSection />
        <BrandSeparator variant="muted" />
        <ProblemeSection />
        <BrandSeparator variant="dark" />
        <FonctionnalitesSection />
        <BrandSeparator variant="light" />
        <TarifsSection />
        <BrandSeparator variant="muted" />
        <ContactSection />
      </main>
      <Footer />
    </HeroRevealProvider>
  );
}
