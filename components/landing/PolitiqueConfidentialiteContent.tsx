import { ScrollReveal } from "@/components/ScrollReveal";
import { RadialGlow } from "@/components/landing/RadialGlow";

const SUBPROCESSORS = [
  {
    name: "Supabase",
    role: "Hébergement de la base de données et des fichiers",
    location: "Union Européenne",
  },
  {
    name: "Anthropic",
    role: "Génération de texte par intelligence artificielle (courriers, classification de documents)",
    location:
      "États-Unis (par défaut), encadré par des clauses contractuelles types",
  },
  {
    name: "Stripe",
    role: "Traitement des paiements et de la facturation",
    location:
      "États-Unis, encadré par le Data Privacy Framework et des clauses contractuelles types",
  },
  {
    name: "Vercel",
    role: "Hébergement de l'application",
    location: "États-Unis, encadré par des clauses contractuelles types",
  },
  {
    name: "Resend",
    role: "Envoi des emails (notifications, réinitialisation de mot de passe)",
    location:
      "États-Unis, encadré par le Data Privacy Framework et des clauses contractuelles types",
  },
  {
    name: "Pennylane",
    role: "Facturation des prestations",
    location: "Union Européenne",
  },
] as const;

const RETENTION = [
  {
    type: "Compte utilisateur (cabinet MJPM)",
    duration: "Durée du contrat + 3 ans",
  },
  {
    type: "Dossier d'une personne protégée (informations, documents, comptes, courriers)",
    duration: "5 ans à compter de la fin de la mesure de protection",
  },
  {
    type: "Données de facturation",
    duration: "Durée du contrat + 10 ans (obligations comptables)",
  },
  {
    type: "Journaux de connexion",
    duration: "6 mois",
  },
] as const;

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

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[17px] font-bold text-text-strong tracking-[-0.02em] mb-3 mt-8">
      {children}
    </h3>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-text-soft text-base leading-relaxed mb-4">{children}</p>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc pl-5 mb-4 space-y-2 text-text-soft text-base leading-relaxed">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function LegalTable({
  headers,
  rows,
}: {
  headers: [string, string, string?];
  rows: readonly (readonly [string, string] | readonly [string, string, string])[];
}) {
  const cols = headers.filter(Boolean).length;

  return (
    <div className="overflow-x-auto mb-6 rounded-xl border border-border bg-white shadow-sm">
      <table className="w-full text-left text-sm border-collapse min-w-[480px]">
        <thead>
          <tr className="bg-bg-gray border-b border-border">
            {headers.filter(Boolean).map((header) => (
              <th
                key={header}
                className="px-4 py-3 font-semibold text-text-strong text-[13px]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i < rows.length - 1 ? "border-b border-border" : ""}
            >
              {row.slice(0, cols).map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 text-text-soft leading-relaxed align-top ${
                    j === 0 ? "font-medium text-text-strong whitespace-nowrap" : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PolitiqueConfidentialiteContent() {
  return (
    <section className="relative bg-bg-gray px-4 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden">
      <RadialGlow position="top-right" />

      <div className="max-w-[760px] mx-auto relative z-10">
        <ScrollReveal>
          <h1 className="text-[clamp(28px,4vw,42px)] font-black text-text-strong leading-[1.08] tracking-[-0.03em] mb-3">
            Politique de confidentialité
          </h1>
          <p className="text-text-hint text-sm mb-8 italic">
            Dernière mise à jour : 21 août 2026
          </p>

          <article className="rounded-2xl border border-border bg-white p-6 md:p-10 shadow-sm">
            <SectionTitle id="qui-sommes-nous">1. Qui sommes-nous&nbsp;?</SectionTitle>
            <Paragraph>
              Matima est un logiciel destiné aux mandataires judiciaires à la
              protection des majeurs (MJPM), édité par{" "}
              <strong className="text-text-strong font-semibold">
                SARL MATIMA
              </strong>
              , dont le siège social est situé{" "}
              <strong className="text-text-strong font-semibold">
                24 rue Garnier Pagès, 94100 Saint-Maur-des-Fossés
              </strong>
              .
            </Paragraph>
            <Paragraph>
              Pour toute question relative à vos données personnelles, vous
              pouvez nous contacter à l&apos;adresse :{" "}
              <a
                href="mailto:contact@matima.net"
                className="text-accent font-semibold no-underline hover:text-accent-hover"
              >
                contact@matima.net
              </a>
              .
            </Paragraph>

            <SectionTitle id="donnees">
              2. Quelles données collectons-nous, et pourquoi&nbsp;?
            </SectionTitle>
            <Paragraph>
              Matima traite des données personnelles dans le cadre de plusieurs
              activités, résumées ci-dessous.
            </Paragraph>

            <SubTitle>
              Si vous êtes un cabinet MJPM utilisateur de Matima (ou un membre
              de son équipe)
            </SubTitle>
            <Paragraph>
              Nous collectons votre identité, votre adresse email et vos
              informations de connexion pour vous permettre d&apos;accéder à
              l&apos;application et de gérer votre abonnement. Ces données sont
              nécessaires à l&apos;exécution du contrat qui nous lie.
            </Paragraph>

            <SubTitle>
              Si vous êtes une personne protégée dont le dossier est géré via
              Matima
            </SubTitle>
            <Paragraph>
              Votre mandataire judiciaire (le cabinet MJPM, notre client)
              utilise Matima pour assurer le suivi de votre mesure de
              protection. Dans ce cadre, les données suivantes peuvent être
              traitées&nbsp;:
            </Paragraph>
            <BulletList
              items={[
                "Votre identité et vos coordonnées",
                "Les informations relatives à votre mesure de protection (type, dates, tribunal compétent)",
                "Vos données financières (comptes bancaires, transactions, dans le cadre de la gestion patrimoniale confiée à votre mandataire)",
                "Certains numéros administratifs (sécurité sociale, CAF, MDPH) lorsque nécessaires à vos démarches",
                "Les documents relatifs à votre dossier, déposés par votre mandataire",
              ]}
            />
            <div className="mb-4 rounded-xl border border-accent/25 bg-badge-bg px-4 py-3 text-[14px] leading-relaxed text-text-strong">
              <p>
                <strong className="font-semibold">
                  Important — qui décide de ces traitements&nbsp;:
                </strong>{" "}
                dans ce cas, Matima agit en tant que{" "}
                <strong className="font-semibold">sous-traitant</strong>{" "}
                technique. C&apos;est votre mandataire judiciaire qui reste
                responsable de la collecte et de l&apos;usage de vos données,
                dans le cadre de sa mission légale de protection. Pour exercer
                vos droits sur ces données, vous devez vous adresser en priorité
                à votre mandataire.
              </p>
            </div>

            <SectionTitle id="base-legale">
              3. Sur quelle base légale traitons-nous vos données&nbsp;?
            </SectionTitle>
            <Paragraph>
              Selon les cas, nos traitements reposent sur&nbsp;:
            </Paragraph>
            <BulletList
              items={[
                <>
                  <strong className="text-text-strong font-semibold">
                    L&apos;exécution du contrat
                  </strong>{" "}
                  qui nous lie à vous (cabinet MJPM utilisateur)&nbsp;;
                </>,
                <>
                  <strong className="text-text-strong font-semibold">
                    L&apos;intérêt légitime
                  </strong>{" "}
                  du mandataire judiciaire dans l&apos;exercice de sa mission de
                  protection, pour les données des personnes protégées&nbsp;;
                </>,
                <>
                  <strong className="text-text-strong font-semibold">
                    Une obligation légale
                  </strong>
                  , notamment pour la conservation de certains documents
                  comptables et la reddition de comptes au juge des
                  tutelles.
                </>,
              ]}
            />

            <SectionTitle id="acces">
              4. Qui a accès à vos données&nbsp;?
            </SectionTitle>
            <Paragraph>
              En interne, l&apos;accès à vos données est strictement limité aux
              personnes qui en ont besoin pour l&apos;exercice de leur mission
              (le mandataire titulaire du dossier, et les membres de son équipe
              autorisés selon leurs permissions).
            </Paragraph>
            <Paragraph>
              Nous faisons appel à des prestataires techniques (sous-traitants
              au sens du RGPD) pour faire fonctionner Matima&nbsp;:
            </Paragraph>
            <LegalTable
              headers={["Prestataire", "Rôle", "Localisation des données"]}
              rows={SUBPROCESSORS.map((p) => [p.name, p.role, p.location])}
            />
            <Paragraph>
              Chacun de ces prestataires est engagé contractuellement à protéger
              vos données conformément au RGPD.
            </Paragraph>

            <SectionTitle id="transferts">
              5. Transferts de données hors Union Européenne
            </SectionTitle>
            <Paragraph>
              Certains de nos prestataires (Anthropic, Stripe, Vercel, Resend)
              sont basés aux États-Unis. Lorsque vos données leur sont
              transmises, ce transfert est encadré par des garanties reconnues
              par le droit européen — notamment les{" "}
              <strong className="text-text-strong font-semibold">
                clauses contractuelles types
              </strong>{" "}
              de la Commission européenne, et pour certains prestataires, une
              certification au{" "}
              <strong className="text-text-strong font-semibold">
                cadre de protection des données UE-États-Unis
              </strong>{" "}
              (Data Privacy Framework).
            </Paragraph>

            <SectionTitle id="conservation">
              6. Combien de temps conservons-nous vos données&nbsp;?
            </SectionTitle>
            <LegalTable
              headers={["Type de donnée", "Durée de conservation"]}
              rows={RETENTION.map((r) => [r.type, r.duration])}
            />
            <Paragraph>
              Ces durées s&apos;appuient sur les recommandations de la CNIL
              applicables à l&apos;activité des mandataires judiciaires à la
              protection des majeurs.
            </Paragraph>
            <Paragraph>
              À l&apos;expiration de ces durées, vos données sont supprimées de
              façon sécurisée ou archivées conformément aux obligations légales
              applicables.
            </Paragraph>

            <SectionTitle id="protection">
              7. Comment protégeons-nous vos données&nbsp;?
            </SectionTitle>
            <Paragraph>
              Nous mettons en œuvre des mesures techniques pour protéger vos
              données, notamment&nbsp;:
            </Paragraph>
            <BulletList
              items={[
                "Isolation stricte des données entre chaque cabinet client (aucun cabinet ne peut accéder aux données d'un autre) ;",
                "Chiffrement des données sensibles ;",
                "Authentification requise pour tout accès, avec des permissions différenciées selon les rôles ;",
                "Journalisation des accès aux données les plus sensibles (identifiants administratifs, coffre-fort numérique) ;",
                "Un espace de stockage d'identifiants (coffre-fort) protégé par une authentification renforcée et limité dans le temps.",
              ]}
            />

            <SectionTitle id="cookies">8. Cookies</SectionTitle>
            <Paragraph>
              Matima utilise des cookies strictement nécessaires au
              fonctionnement de l&apos;application&nbsp;:
            </Paragraph>
            <BulletList
              items={[
                "Un cookie de session pour vous maintenir connecté ;",
                "Un cookie technique de courte durée pour sécuriser l'accès au coffre-fort numérique ;",
                "Un cookie de suivi de parrainage (30 jours), si vous arrivez sur Matima via un lien de parrainage.",
              ]}
            />
            <Paragraph>
              Aucun de ces cookies n&apos;est utilisé à des fins publicitaires ou
              de traçage marketing.
            </Paragraph>

            <SectionTitle id="droits">9. Vos droits</SectionTitle>
            <Paragraph>
              Conformément au RGPD, vous disposez des droits suivants sur vos
              données personnelles&nbsp;:
            </Paragraph>
            <BulletList
              items={[
                <>
                  <strong className="text-text-strong font-semibold">
                    Droit d&apos;accès
                  </strong>{" "}
                  : obtenir une copie des données que nous détenons sur
                  vous&nbsp;;
                </>,
                <>
                  <strong className="text-text-strong font-semibold">
                    Droit de rectification
                  </strong>{" "}
                  : corriger des données inexactes&nbsp;;
                </>,
                <>
                  <strong className="text-text-strong font-semibold">
                    Droit à l&apos;effacement
                  </strong>{" "}
                  : demander la suppression de vos données, dans les limites de
                  nos obligations légales de conservation&nbsp;;
                </>,
                <>
                  <strong className="text-text-strong font-semibold">
                    Droit d&apos;opposition
                  </strong>{" "}
                  : vous opposer à un traitement pour un motif légitime&nbsp;;
                </>,
                <>
                  <strong className="text-text-strong font-semibold">
                    Droit à la portabilité
                  </strong>{" "}
                  : recevoir vos données dans un format réutilisable.
                </>,
              ]}
            />
            <Paragraph>Pour exercer ces droits&nbsp;:</Paragraph>
            <BulletList
              items={[
                <>
                  <strong className="text-text-strong font-semibold">
                    Si vous êtes un cabinet MJPM utilisateur
                  </strong>
                  , contactez-nous directement à{" "}
                  <a
                    href="mailto:contact@matima.net"
                    className="text-accent font-semibold no-underline hover:text-accent-hover"
                  >
                    contact@matima.net
                  </a>
                  .
                </>,
                <>
                  <strong className="text-text-strong font-semibold">
                    Si vous êtes une personne protégée
                  </strong>
                  , adressez votre demande en priorité à votre mandataire
                  judiciaire, responsable de vos données dans ce cadre. Vous
                  pouvez également nous contacter directement.
                </>,
              ]}
            />
            <Paragraph>
              Vous disposez également du droit d&apos;introduire une
              réclamation auprès de la{" "}
              <strong className="text-text-strong font-semibold">CNIL</strong>{" "}
              (Commission Nationale de l&apos;Informatique et des Libertés)&nbsp;:{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold no-underline hover:text-accent-hover"
              >
                www.cnil.fr
              </a>
              .
            </Paragraph>

            <SectionTitle id="modifications">
              10. Modifications de cette politique
            </SectionTitle>
            <Paragraph>
              Cette politique de confidentialité peut être mise à jour,
              notamment lors de l&apos;ajout de nouvelles fonctionnalités. La
              date de dernière mise à jour figure en haut de ce document. Nous
              vous invitons à la consulter régulièrement.
            </Paragraph>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
