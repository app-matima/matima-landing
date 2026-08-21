import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { RadialGlow } from "@/components/landing/RadialGlow";

function SectionTitle({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <h2
      id={id}
      className="text-[clamp(22px,3vw,28px)] font-black text-text-strong tracking-[-0.02em] mb-4 mt-12 first:mt-0 scroll-mt-[80px]"
    >
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-text-soft text-base leading-relaxed mb-4">{children}</p>
  );
}

function InfoBlock({ lines }: { lines: React.ReactNode[] }) {
  return (
    <div className="mb-4 rounded-xl border border-border bg-bg-gray/60 px-5 py-4 text-base leading-relaxed text-text-soft space-y-1">
      {lines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  );
}

export function MentionsLegalesContent() {
  return (
    <section className="relative bg-bg-gray px-4 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden">
      <RadialGlow position="top-right" />

      <div className="max-w-[760px] mx-auto relative z-10">
        <ScrollReveal>
          <h1 className="text-[clamp(28px,4vw,42px)] font-black text-text-strong leading-[1.08] tracking-[-0.03em] mb-3">
            Mentions légales
          </h1>
          <p className="text-text-hint text-sm mb-8 italic">
            Dernière mise à jour : 21 août 2026
          </p>

          <article className="rounded-2xl border border-border bg-white p-6 md:p-10 shadow-sm">
            <SectionTitle id="editeur">Éditeur du site</SectionTitle>
            <Paragraph>Le site matima.net est édité par&nbsp;:</Paragraph>
            <InfoBlock
              lines={[
                <strong
                  key="name"
                  className="text-text-strong font-semibold block mb-1"
                >
                  SARL MATIMA
                </strong>,
                "Société à responsabilité limitée au capital de 500 €",
                "Siège social : 24 rue Garnier Pagès, 94100 Saint-Maur-des-Fossés",
                "SIRET : 102 609 682 00012",
                "RCS Créteil",
                "N° TVA intracommunautaire : FR43102609682",
                "Téléphone : 07 43 53 99 80",
                <>
                  Email :{" "}
                  <a
                    href="mailto:contact@matima.net"
                    className="text-accent font-semibold no-underline hover:text-accent-hover"
                  >
                    contact@matima.net
                  </a>
                </>,
              ]}
            />

            <SectionTitle id="directeur">Directeur de la publication</SectionTitle>
            <Paragraph>
              <strong className="text-text-strong font-semibold">
                Maxime DELAUNAY
              </strong>
              , co-gérant de la SARL MATIMA.
            </Paragraph>

            <SectionTitle id="hebergement">Hébergement du site</SectionTitle>
            <Paragraph>Le site matima.net est hébergé par&nbsp;:</Paragraph>
            <InfoBlock
              lines={[
                <strong
                  key="host"
                  className="text-text-strong font-semibold block mb-1"
                >
                  OVH SAS
                </strong>,
                "Société par actions simplifiée au capital de 10 174 560 €",
                "Siège social : 2 rue Kellermann, 59100 Roubaix, France",
                "RCS Lille Métropole 424 761 419",
              ]}
            />

            <SectionTitle id="activite">Activité réglementée</SectionTitle>
            <Paragraph>
              Matima est un logiciel destiné aux mandataires judiciaires à la
              protection des majeurs (MJPM), profession réglementée dont
              l&apos;exercice est encadré par le Code de l&apos;action sociale et
              des familles et soumis à agrément préfectoral. Matima n&apos;exerce
              pas elle-même la fonction de mandataire judiciaire : elle fournit
              un outil logiciel à destination des professionnels agréés
              exerçant cette mission.
            </Paragraph>

            <SectionTitle id="propriete">Propriété intellectuelle</SectionTitle>
            <Paragraph>
              L&apos;ensemble des éléments composant le site matima.net (textes,
              images, logos, structure) est la propriété de la SARL MATIMA, sauf
              mention contraire, et est protégé par les dispositions du Code de
              la propriété intellectuelle. Toute reproduction, représentation ou
              exploitation, totale ou partielle, sans autorisation préalable, est
              interdite.
            </Paragraph>

            <SectionTitle id="donnees">Données personnelles</SectionTitle>
            <Paragraph>
              Le traitement des données personnelles est détaillé dans notre{" "}
              <Link
                href="/politique-confidentialite"
                className="text-accent font-semibold no-underline hover:text-accent-hover"
              >
                Politique de confidentialité
              </Link>
              .
            </Paragraph>

            <SectionTitle id="contact">Contact</SectionTitle>
            <Paragraph>
              Pour toute question relative au site ou à son contenu :{" "}
              <a
                href="mailto:contact@matima.net"
                className="text-accent font-semibold no-underline hover:text-accent-hover"
              >
                contact@matima.net
              </a>
            </Paragraph>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
