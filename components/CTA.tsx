import { REGISTER_URL } from "@/lib/constants";
import { FadeIn } from "./FadeIn";

export function CTA() {
  return (
    <section className="bg-text-strong py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <FadeIn>
          <h2 className="text-[28px] md:text-[36px] font-black tracking-[-0.03em] text-white">
            Rejoignez les mandataires qui font confiance à Matima
          </h2>
        </FadeIn>
        <FadeIn delay={80}>
          <p className="mt-4 text-base text-text-hint max-w-lg mx-auto">
            1 mois offert, sans engagement. Commencez dès aujourd&apos;hui.
          </p>
        </FadeIn>
        <FadeIn delay={140}>
          <a
            href={REGISTER_URL}
            className="inline-block mt-8 bg-accent hover:bg-accent-hover text-white px-7 py-3.5 rounded-xl font-semibold transition-colors"
          >
            Créer mon compte gratuitement →
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
