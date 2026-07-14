import Image from "next/image";
import {
  MapPin,
  Scale,
  Shield,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BrandSeparator } from "@/components/landing/BrandSeparator";
import { RadialGlow } from "@/components/landing/RadialGlow";
import { REGISTER_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const CARD_BG = "bg-[#1A2733] border border-white/10";

const VALUES: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Sécurité",
    description:
      "Vos données et celles de vos protégés méritent une protection sans compromis",
    icon: Shield,
  },
  {
    title: "Simplicité",
    description:
      "Un outil pris en main en moins d'une heure, sans formation",
    icon: Sparkles,
  },
  {
    title: "Écoute du terrain",
    description:
      "Chaque fonctionnalité naît d'un besoin réel de mandataire",
    icon: MapPin,
  },
  {
    title: "Rigueur",
    description:
      "La précision qu'exige la gestion de mesures de protection",
    icon: Scale,
  },
];

const TEAM = [
  { name: "Thibaut", role: "Cofondateur" },
  { name: "Maxime", role: "Cofondateur" },
] as const;

function ValueCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <div className={`flex flex-col h-full rounded-2xl p-6 ${CARD_BG}`}>
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent mb-4">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </div>
      <h3 className="text-[17px] font-bold text-white tracking-[-0.02em] mb-2">
        {title}
      </h3>
      <p className="text-white text-[13px] leading-relaxed">{description}</p>
    </div>
  );
}

export function QuiSommesNousPageContent() {
  return (
    <>
      <section
        id="qui-sommes-nous-hero"
        className="relative px-4 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24 scroll-mt-[60px] overflow-hidden"
      >
        <RadialGlow position="top-right" variant="on-dark" />
        <div className="max-w-[720px] mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block bg-accent/15 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-accent/25">
              L&apos;équipe Matima
            </span>
            <h1 className="text-[clamp(32px,5vw,52px)] font-black text-accent leading-[1.08] tracking-[-0.03em] mb-5">
              Qui sommes-nous
            </h1>
            <p className="text-white text-base md:text-lg leading-relaxed">
              Une équipe qui connaît le métier avant de construire l&apos;outil
            </p>
          </ScrollReveal>
        </div>
      </section>

      <BrandSeparator variant="on-dark" />

      <section className="relative px-4 md:px-10 py-16 md:py-24 overflow-hidden">
        <RadialGlow position="bottom-left" variant="on-dark" />
        <div className="max-w-[760px] mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-[clamp(28px,4vw,38px)] font-black text-accent tracking-[-0.02em] mb-6 text-center">
              Une idée née du terrain
            </h2>
            <p className="text-white text-base md:text-[17px] leading-relaxed">
              Tout a commencé par les prestations. En intervenant directement
              auprès des protégés — livraisons, déménagements, démarches sur
              place — nous avons vu de près le quotidien des mandataires
              judiciaires : des outils dépassés, des dossiers papier, des heures
              perdues en tâches administratives, alors que leur vrai métier est
              de prendre soin de personnes vulnérables. De cette expérience
              terrain est née une évidence : ce métier méritait un vrai outil.
              Matima est né comme le prolongement naturel de notre travail
              auprès des mandataires — pensé pour l&apos;usage réel, pas pour
              cocher des cases.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <BrandSeparator variant="on-dark" />

      <section className="relative px-4 md:px-10 py-16 md:py-24 overflow-hidden">
        <RadialGlow position="top-right" variant="on-dark" />
        <div className="max-w-[760px] mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-[clamp(28px,4vw,38px)] font-black text-accent tracking-[-0.02em] mb-6 text-center">
              Notre conviction
            </h2>
            <p className="text-white text-base md:text-[17px] leading-relaxed text-center">
              Nous croyons qu&apos;un bon logiciel ne s&apos;impose pas au
              métier — il s&apos;y adapte. Chaque fonctionnalité de Matima est
              pensée avec des professionnels du terrain, pour répondre à un
              besoin réel.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <BrandSeparator variant="on-dark" />

      <section className="relative px-4 md:px-10 py-16 md:py-24 overflow-hidden">
        <RadialGlow position="bottom-left" variant="on-dark" />
        <div className="max-w-[1060px] mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-[clamp(28px,4vw,38px)] font-black text-accent tracking-[-0.02em] mb-12 md:mb-16 text-center">
              Nos valeurs
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
            {VALUES.map((value, i) => (
              <ScrollReveal key={value.title} delay={60 + i * 40} className="h-full">
                <ValueCard {...value} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <BrandSeparator variant="on-dark" />

      <section className="relative px-4 md:px-10 py-16 md:py-24 overflow-hidden">
        <RadialGlow position="top-right" variant="on-dark" />
        <div className="max-w-[1060px] mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-[clamp(28px,4vw,38px)] font-black text-accent tracking-[-0.02em] mb-12 md:mb-16 text-center">
              L&apos;équipe
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <div className="flex flex-col items-center text-center max-w-md mx-auto">
              <div className="mb-8 rounded-full p-1 border-2 border-accent/40 shadow-[0_0_0_4px_rgba(0,163,148,0.12)]">
                <Image
                  src={IMAGES.equipeMatima}
                  alt="Thibaut et Maxime, cofondateurs de Matima"
                  width={250}
                  height={250}
                  className="rounded-full object-cover w-[220px] h-[220px] md:w-[250px] md:h-[250px]"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-center gap-6 sm:gap-12 w-full">
                {TEAM.map((member) => (
                  <div key={member.name}>
                    <p className="text-[20px] font-bold text-white tracking-[-0.02em]">
                      {member.name}
                    </p>
                    <p className="text-white/80 text-sm mt-1">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <BrandSeparator variant="on-dark" />

      <section className="relative px-4 md:px-10 py-16 md:py-24 text-center overflow-hidden">
        <RadialGlow position="top-left" variant="on-dark" />
        <div className="max-w-[700px] mx-auto relative z-10">
          <ScrollReveal>
            <h2 className="text-[clamp(28px,4vw,36px)] font-black text-accent tracking-[-0.02em] mb-4">
              Prêt à simplifier votre quotidien de mandataire ?
            </h2>
            <p className="text-white mb-8 text-base leading-relaxed">
              Rejoignez les professionnels qui font confiance à Matima — 1 mois
              offert, sans engagement.
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
