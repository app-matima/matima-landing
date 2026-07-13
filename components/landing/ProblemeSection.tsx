import { ScrollReveal } from "@/components/ScrollReveal";

const PAIN_POINTS = [
  {
    title: "Des dossiers papier éparpillés",
    description:
      "Classeurs, emails et fichiers Excel dispersés — impossible de retrouver une information rapidement.",
  },
  {
    title: "Des heures perdues en tâches répétitives",
    description:
      "Saisie manuelle, relances, courriers à retaper : l'administratif grignote votre temps de terrain.",
  },
  {
    title: "Des outils qui ne communiquent pas entre eux",
    description:
      "Un logiciel pour les documents, un autre pour les comptes, un troisième pour le courrier — sans lien entre eux.",
  },
] as const;

export function ProblemeSection() {
  return (
    <section
      id="sans-matima"
      className="relative bg-bg-gray dot-pattern-light px-4 md:px-10 py-20 md:py-28 scroll-mt-[60px] overflow-hidden"
    >
      <div className="max-w-[1060px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <ScrollReveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <span className="inline-block bg-badge-bg text-text-strong text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                Sans Matima
              </span>
              <h2 className="text-[clamp(26px,4vw,38px)] font-black text-text-strong tracking-[-0.02em] leading-tight">
                Votre quotidien mérite mieux qu&apos;un empilement
                d&apos;outils
              </h2>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-8">
            {PAIN_POINTS.map((point, i) => (
              <ScrollReveal key={point.title} delay={i * 80}>
                <div
                  className={
                    i > 0 ? "border-t border-border pt-8 mt-8" : undefined
                  }
                >
                  <div className="flex gap-5 md:gap-8 items-start">
                    <span className="text-[clamp(36px,5vw,48px)] font-black text-accent leading-none tracking-[-0.03em] shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-text-strong mb-2 leading-snug">
                        {point.title}
                      </h3>
                      <p className="text-sm text-text-soft leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
