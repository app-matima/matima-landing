import { ScrollReveal } from "@/components/ScrollReveal";
import { MatimaFavicon } from "@/components/brand/MatimaFavicon";
import { RadialGlow } from "./RadialGlow";
import { ContactForm } from "./ContactForm";
import { ContactFaq } from "./ContactFaq";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative dot-pattern px-4 md:px-10 py-16 md:py-24 scroll-mt-[60px] overflow-hidden"
    >
      <RadialGlow position="top-left" variant="on-dark" />

      <div
        className="pointer-events-none absolute bottom-4 right-4 md:bottom-8 md:right-10 z-0"
        aria-hidden
      >
        <MatimaFavicon
          color="#5EC4B8"
          fillOpacity={0.22}
          className="w-24 h-24 md:w-32 md:h-32"
        />
      </div>

      <div className="max-w-[1060px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-[640px] mx-auto mb-12 md:mb-16">
            <h2 className="text-[clamp(28px,4vw,36px)] font-black text-white tracking-[-0.02em] mb-4">
              Rejoignez les mandataires qui font confiance à Matima
            </h2>
            <p className="text-text-hint text-base mb-8">
              1 mois offert, sans engagement, résiliable à tout moment.
            </p>
            <a
              href="#tarifs"
              className="inline-block bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-xl font-semibold text-[15px] no-underline transition-colors"
            >
              Démarrer avec 1 mois offert →
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <ScrollReveal delay={80}>
            <ContactForm />
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <ContactFaq />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
