import type { Metadata } from "next";
import { HeroRevealProvider } from "@/components/landing/HeroRevealContext";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { QuiSommesNousPageContent } from "@/components/landing/QuiSommesNousPageContent";

export const metadata: Metadata = {
  title: "Qui sommes-nous — Matima",
  description:
    "Découvrez l'histoire, la mission et l'équipe de Matima — une plateforme née du terrain pour les mandataires judiciaires.",
};

export default function QuiSommesNousPage() {
  return (
    <HeroRevealProvider>
      <div className="dot-pattern-prestations flex flex-col flex-1">
        <Navbar />
        <main>
          <QuiSommesNousPageContent />
        </main>
      </div>
      <Footer />
    </HeroRevealProvider>
  );
}
