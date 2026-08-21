import type { Metadata } from "next";
import { HeroRevealProvider } from "@/components/landing/HeroRevealContext";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { PolitiqueConfidentialiteContent } from "@/components/landing/PolitiqueConfidentialiteContent";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Matima",
  description:
    "Politique de confidentialité de Matima : données collectées, bases légales, sous-traitants, durées de conservation et vos droits RGPD.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <HeroRevealProvider>
      <Navbar />
      <main className="flex-1">
        <PolitiqueConfidentialiteContent />
      </main>
      <Footer />
    </HeroRevealProvider>
  );
}
