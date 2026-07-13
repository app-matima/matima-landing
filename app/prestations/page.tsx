import type { Metadata } from "next";
import { HeroRevealProvider } from "@/components/landing/HeroRevealContext";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { PrestationsPageContent } from "@/components/landing/PrestationsPageContent";

export const metadata: Metadata = {
  title: "Prestations terrain — Matima",
  description:
    "Commandez et suivez les interventions terrain pour vos protégés depuis Matima : livraisons, déménagements, travaux spécialisés et attestations automatiques.",
};

export default function PrestationsPage() {
  return (
    <HeroRevealProvider>
      <div className="dot-pattern-prestations flex flex-col flex-1">
        <Navbar />
        <main>
          <PrestationsPageContent />
        </main>
      </div>
      <Footer />
    </HeroRevealProvider>
  );
}
