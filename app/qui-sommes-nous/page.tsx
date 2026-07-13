import type { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { QuiSommesNousSection } from "@/components/landing/QuiSommesNousSection";

export const metadata: Metadata = {
  title: "Qui sommes-nous — Matima",
  description:
    "Découvrez l'équipe et la mission de Matima, la plateforme pour mandataires judiciaires.",
};

export default function QuiSommesNousPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <QuiSommesNousSection standalone />
      </main>
      <Footer />
    </>
  );
}
