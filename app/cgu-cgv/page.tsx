import type { Metadata } from "next";
import { HeroRevealProvider } from "@/components/landing/HeroRevealContext";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CguCgvContent } from "@/components/landing/CguCgvContent";

export const metadata: Metadata = {
  title: "CGU / CGV — Matima",
  description:
    "Conditions Générales d'Utilisation et de Vente de Matima : offres, paiement, obligations, responsabilité et droit applicable.",
};

export default function CguCgvPage() {
  return (
    <HeroRevealProvider>
      <Navbar />
      <main className="flex-1">
        <CguCgvContent />
      </main>
      <Footer />
    </HeroRevealProvider>
  );
}
