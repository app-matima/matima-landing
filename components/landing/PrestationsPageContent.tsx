import clsx from "clsx";
import type { ReactNode } from "react";
import {
  Droplets,
  FileSignature,
  Key,
  Package,
  Shirt,
  Sparkles,
  Truck,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BrowserMockup } from "@/components/landing/BrowserMockup";
import { BrandSeparator } from "@/components/landing/BrandSeparator";
import { RadialGlow } from "@/components/landing/RadialGlow";
import { REGISTER_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const CARD_BG = "bg-[#1A2733] border border-white/10";

const COMMON_INTERVENTIONS: { label: string; icon: LucideIcon }[] = [
  { label: "Livraison", icon: Package },
  { label: "Achat de vêtements", icon: Shirt },
  { label: "Débarras", icon: Truck },
  { label: "Déménagement", icon: Truck },
  { label: "Signature de documents", icon: FileSignature },
  { label: "Nettoyage", icon: Sparkles },
  { label: "Assainissement", icon: Droplets },
];

const SPECIALIZED_INTERVENTIONS: { label: string; icon: LucideIcon }[] = [
  { label: "Serrurerie", icon: Key },
  { label: "Plomberie", icon: Wrench },
  { label: "Électricité", icon: Zap },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Le MJPM commande depuis Matima",
    description:
      "Sélectionnez une prestation, précisez le besoin et validez la demande en quelques clics depuis la fiche du protégé.",
  },
  {
    number: "02",
    title: "Un intervenant réalise la mission",
    description:
      "Un membre de notre réseau est assigné, intervient sur le terrain et vous tient informé de l'avancement.",
  },
  {
    number: "03",
    title: "Attestation archivée dans la GED",
    description:
      "Une attestation signée est générée automatiquement et rangée dans le dossier, prête pour vos obligations de suivi.",
  },
] as const;

function InterventionIconGrid({
  items,
}: {
  items: { label: string; icon: LucideIcon }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.label}
            className={clsx(
              "flex flex-col items-center justify-center gap-2.5 rounded-xl px-3 py-5 text-center h-full",
              CARD_BG,
            )}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <Icon className="h-5 w-5" strokeWidth={2} />
            </div>
            <span className="text-xs font-semibold leading-snug text-white">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function FeatureBlock({
  badge,
  number,
  title,
  description,
  visual,
  imageFirst = true,
}: {
  badge: string;
  number: string;
  title: string;
  description: string;
  visual: ReactNode;
  imageFirst?: boolean;
}) {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center",
        !imageFirst && "lg:[&>*:first-child]:order-2",
      )}
    >
      <div>{visual}</div>
      <div>
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 bg-accent/15 text-accent border border-accent/25">
          {badge}
        </span>
        <div className="flex items-baseline gap-3 mb-3">
          <span className="text-2xl font-black text-accent/30 leading-none tracking-[-0.03em] shrink-0">
            {number}
          </span>
          <h3 className="text-[26px] font-bold text-white tracking-[-0.02em]">
            {title}
          </h3>
        </div>
        <p className="text-white text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function PrestationsPageContent() {
  return (
    <>
      <section
        id="prestations-hero"
        className="relative px-4 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24 scroll-mt-[60px] overflow-hidden"
      >
        <RadialGlow position="top-right" variant="on-dark" />
        <div className="max-w-[720px] mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block bg-accent/15 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-accent/25">
              Prestations terrain
            </span>
            <h1 className="text-[clamp(32px,5vw,52px)] font-black text-accent leading-[1.08] tracking-[-0.03em] mb-5">
              Un réseau de confiance pour toutes vos interventions terrain
            </h1>
            <p className="text-white text-base md:text-lg leading-relaxed">
              Matima met à votre disposition une équipe et des partenaires de
              confiance pour réaliser les interventions physiques dont vos
              protégés ont besoin — commandées, suivies et attestées
              directement depuis la plateforme.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <BrandSeparator variant="on-dark" />

      <section className="relative px-4 md:px-10 py-16 md:py-24 overflow-hidden">
        <RadialGlow position="bottom-left" variant="on-dark" />

        <div className="max-w-[1060px] mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-[600px] mx-auto mb-16 md:mb-20">
              <h2 className="text-[clamp(28px,4vw,38px)] font-black text-accent tracking-[-0.02em] mb-3">
                Interventions courantes
              </h2>
              <p className="text-white text-base">
                Les missions du quotidien, prises en charge rapidement par notre
                réseau d&apos;intervenants de confiance.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <FeatureBlock
              badge="Quotidien"
              number="01"
              title="Tout le terrain courant, couvert"
              description="Livraisons, achats, déménagements, nettoyage ou signatures : chaque demande est traitée depuis Matima, sans multiplier les interlocuteurs."
              imageFirst
              visual={
                <InterventionIconGrid items={COMMON_INTERVENTIONS} />
              }
            />
          </ScrollReveal>
        </div>
      </section>

      <BrandSeparator variant="on-dark" />

      <section className="relative px-4 md:px-10 py-16 md:py-24 overflow-hidden">
        <RadialGlow position="top-right" variant="on-dark" />

        <div className="max-w-[1060px] mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-[600px] mx-auto mb-16 md:mb-20">
              <h2 className="text-[clamp(28px,4vw,38px)] font-black text-accent tracking-[-0.02em] mb-3">
                Interventions spécialisées
              </h2>
              <p className="text-white text-base">
                Pour les besoins techniques, nous mobilisons des partenaires
                rigoureusement sélectionnés.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <FeatureBlock
              badge="Partenaires"
              number="02"
              title="Des experts pour chaque métier"
              description="Serrurerie, plomberie, électricité : nos partenaires interviennent dans les mêmes délais et avec le même suivi que le reste de vos prestations."
              imageFirst={false}
              visual={
                <InterventionIconGrid items={SPECIALIZED_INTERVENTIONS} />
              }
            />
          </ScrollReveal>
        </div>
      </section>

      <BrandSeparator variant="on-dark" />

      <section className="relative px-4 md:px-10 py-16 md:py-24 overflow-hidden">
        <RadialGlow position="bottom-left" variant="on-dark" />

        <div className="max-w-[1060px] mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-[600px] mx-auto mb-16 md:mb-20">
              <h2 className="text-[clamp(28px,4vw,38px)] font-black text-accent tracking-[-0.02em] mb-3">
                Comment ça marche
              </h2>
              <p className="text-white text-base">
                De la commande à l&apos;attestation, tout se passe dans Matima.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-20 md:gap-28">
            <ScrollReveal delay={60}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <BrowserMockup
                  src={IMAGES.prestations}
                  alt="Module prestations Matima — commande et suivi d'interventions"
                  priority
                />

                <div className="flex flex-col gap-4 md:gap-5">
                  {PROCESS_STEPS.map((step) => (
                    <div
                      key={step.number}
                      className={clsx(
                        "flex gap-5 items-start rounded-xl p-5 md:p-6",
                        CARD_BG,
                      )}
                    >
                      <span className="text-[clamp(28px,4vw,36px)] font-black text-accent/30 leading-none tracking-[-0.03em] shrink-0">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-[26px] font-bold text-white tracking-[-0.02em] mb-2 leading-snug">
                          {step.title}
                        </h3>
                        <p className="text-white text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <BrandSeparator variant="on-dark" />

      <section className="relative px-4 md:px-10 py-16 md:py-24 text-center overflow-hidden">
        <RadialGlow position="top-left" variant="on-dark" />

        <div className="max-w-[700px] mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-[clamp(28px,4vw,36px)] font-black text-accent tracking-[-0.02em] mb-4">
              Prêt à simplifier vos interventions terrain ?
            </h2>
            <p className="text-white mb-8 text-base leading-relaxed">
              Commandez, suivez et archivez vos prestations depuis un seul
              outil — 1 mois offert, sans engagement.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={REGISTER_URL}
                className="bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-xl font-semibold text-[15px] no-underline transition-colors"
              >
                Démarrer avec 1 mois offert
              </a>
              <a
                href="/#tarifs"
                className="bg-transparent text-white px-8 py-3.5 rounded-xl font-semibold text-[15px] border border-white no-underline hover:bg-white/10 transition-colors"
              >
                Voir les tarifs
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
