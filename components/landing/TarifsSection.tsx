import { ScrollReveal } from "@/components/ScrollReveal";

const PRESTATIONS_FEATURES = [
  "Commande d'interventions terrain",
  "Suivi en temps réel",
  "Attestations automatiques",
  "Facturation à l'intervention",
] as const;

const GESTION_FEATURES = [
  "Gestion des protégés",
  "GED & documents",
  "Rappels & alertes",
  "Calendrier",
  "Coffre-fort sécurisé",
  "Prestations & attestations",
  "Courrier physique (à l'usage)",
] as const;

const OPTIMAL_FEATURES = [
  "Tout le plan Gestion",
  "Génération courriers par IA",
  "Emails & alias par protégé",
  "Génération DIPM automatique",
  "Compte de gestion PDF",
  "Paiement SEPA Bridge",
  "Assistants / multi-utilisateurs",
] as const;

export function TarifsSection() {
  return (
    <section
      id="tarifs"
      className="relative bg-bg-gray dot-pattern-light px-4 md:px-10 py-16 md:py-24 scroll-mt-[60px] overflow-hidden"
    >
      <div className="max-w-[1060px] mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="text-[clamp(28px,4vw,38px)] font-black text-text-strong tracking-[-0.02em] mb-2 text-center">
            Des tarifs simples, par dossier
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={60}>
          <p className="text-text-soft text-center mb-12 text-[15px]">
            Payez uniquement pour ce que vous utilisez. 1 mois offert sur tous les
            plans.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          <ScrollReveal delay={80} className="h-full">
            <div className="flex flex-col h-full border border-border rounded-2xl p-7 bg-white shadow-sm">
              <div className="font-extrabold text-[17px] text-text-strong mb-1">
                Prestations
              </div>
              <div className="text-text-soft text-xs mb-5">
                Accès au réseau de prestations uniquement
              </div>
              <div className="mb-6">
                <span className="text-[44px] font-black text-text-strong">
                  Gratuit
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2.5 text-[13px] text-[#374151]">
                {PRESTATIONS_FEATURES.map((f) => (
                  <div key={f}>✓ {f}</div>
                ))}
              </div>
              <div className="mt-auto shrink-0">
                <p className="text-text-hint text-[11px] leading-snug mb-7">
                  Interventions facturées à l&apos;usage, sans abonnement logiciel
                </p>
                <a
                  href="https://app.matima.net/auth/register?plan=prestations"
                  className="block text-center py-3 border-[1.5px] border-border rounded-[10px] font-semibold text-sm text-text-strong no-underline hover:bg-bg-gray transition-colors"
                >
                  Choisir ce plan
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={110} className="h-full">
            <div className="flex flex-col h-full border border-border rounded-2xl p-7 bg-white shadow-sm">
              <div className="font-extrabold text-[17px] text-text-strong mb-1">
                Gestion
              </div>
              <div className="text-text-soft text-xs mb-5">
                L&apos;essentiel pour démarrer
              </div>
              <div className="mb-6">
                <span className="text-[44px] font-black text-text-strong">2€</span>
                <span className="text-text-soft text-[13px]"> /dossier/mois</span>
              </div>
              <div className="flex flex-1 flex-col gap-2.5 text-[13px] text-[#374151]">
                {GESTION_FEATURES.map((f) => (
                  <div key={f}>✓ {f}</div>
                ))}
              </div>
              <div className="mt-auto shrink-0 pt-7">
                <a
                  href="https://app.matima.net/auth/register?plan=gestion"
                  className="block text-center py-3 border-[1.5px] border-border rounded-[10px] font-semibold text-sm text-text-strong no-underline hover:bg-bg-gray transition-colors"
                >
                  Choisir Gestion
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={140} className="h-full">
            <div className="flex flex-col h-full border-2 border-accent rounded-2xl p-7 relative bg-white shadow-md">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[11px] font-bold px-4 py-1 rounded-full whitespace-nowrap">
                Recommandé
              </div>
              <div className="font-extrabold text-[17px] text-text-strong mb-1">
                Optimal
              </div>
              <div className="text-text-soft text-xs mb-5">
                Gestion + automatisations IA
              </div>
              <div className="mb-6">
                <span className="text-[44px] font-black text-text-strong">4€</span>
                <span className="text-text-soft text-[13px]"> /dossier/mois</span>
              </div>
              <div className="flex flex-1 flex-col gap-2.5 text-[13px] text-[#374151]">
                {OPTIMAL_FEATURES.map((f) => (
                  <div key={f}>✓ {f}</div>
                ))}
              </div>
              <div className="mt-auto shrink-0 pt-7">
                <a
                  href="https://app.matima.net/auth/register?plan=optimal"
                  className="block text-center py-3 bg-accent hover:bg-accent-hover rounded-[10px] font-semibold text-sm text-white no-underline transition-colors"
                >
                  Choisir Optimal
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
