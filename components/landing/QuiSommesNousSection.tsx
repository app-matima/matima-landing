import { ScrollReveal } from "@/components/ScrollReveal";

interface QuiSommesNousSectionProps {
  standalone?: boolean;
}

export function QuiSommesNousSection({
  standalone = false,
}: QuiSommesNousSectionProps) {
  return (
    <section
      {...(!standalone && { id: "qui-sommes-nous" })}
      className={
        standalone
          ? "relative bg-bg-gray px-4 md:px-10 py-24 md:py-32 min-h-[60vh] flex items-center overflow-hidden"
          : "relative bg-bg-gray px-4 md:px-10 py-24 min-h-[40vh] flex items-center scroll-mt-[60px] overflow-hidden"
      }
    >
      <div className="max-w-[860px] mx-auto w-full text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-[clamp(28px,4vw,38px)] font-black text-text-strong tracking-[-0.02em] mb-3">
            Qui sommes-nous
          </h2>
          <p className="text-text-soft text-[15px]">Contenu à venir</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
