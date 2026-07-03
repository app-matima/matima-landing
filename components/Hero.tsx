import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section className="paper-texture py-16 md:py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <FadeIn>
          <span className="inline-block bg-accent text-white text-sm px-4 py-1.5 rounded-full font-medium">
            1 mois offert · Sans engagement
          </span>
        </FadeIn>

        <FadeIn delay={80}>
          <h1 className="mt-8 max-w-4xl text-[2rem] leading-[1.08] sm:text-[2.75rem] md:text-[52px] font-black tracking-[-0.04em] text-text-strong">
            La plateforme des{" "}
            <span className="text-accent">mandataires judiciaires</span>{" "}
            modernes
          </h1>
        </FadeIn>

        <FadeIn delay={140}>
          <p className="mt-5 max-w-xl text-base md:text-lg text-text-soft leading-relaxed">
            Gérez vos dossiers, documents, prestations et alertes depuis un seul
            outil pensé pour les MJPM.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#plans"
              className="inline-flex justify-center bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Démarrer maintenant
            </a>
            <a
              href="#plans"
              className="inline-flex justify-center border border-border hover:bg-white text-text-strong px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Voir les tarifs
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={260}>
          <p className="mt-6 text-sm text-text-hint">
            À partir de 2€ / dossier / mois
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
