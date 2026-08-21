import type { Metadata } from "next";
import { HeroRevealProvider } from "@/components/landing/HeroRevealContext";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { MentionsLegalesContent } from "@/components/landing/MentionsLegalesContent";

export const metadata: Metadata = {
  title: "Mentions légales — Matima",
  description:
    "Mentions légales de Matima : éditeur, directeur de la publication, hébergement, propriété intellectuelle et contact.",
};

export default function MentionsLegalesPage() {
  return (
    <HeroRevealProvider>
      <Navbar />
      <main className="flex-1">
        <MentionsLegalesContent />
      </main>
      <Footer />
    </HeroRevealProvider>
  );
}
