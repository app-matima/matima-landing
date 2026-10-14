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

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc pl-5 mb-4 space-y-2 text-text-soft text-base leading-relaxed">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function CguCgvContent() {
  return (
    <section className="relative bg-bg-gray px-4 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden">
      <RadialGlow position="top-right" />

      <div className="max-w-[760px] mx-auto relative z-10">
        <ScrollReveal>
          <h1 className="text-[clamp(28px,4vw,42px)] font-black text-text-strong leading-[1.08] tracking-[-0.03em] mb-3">
            Conditions Générales d&apos;Utilisation et de Vente
          </h1>
          <p className="text-text-hint text-sm mb-8 italic">
            Dernière mise à jour : 21 août 2026
          </p>

          <article className="rounded-2xl border border-border bg-white p-6 md:p-10 shadow-sm">
            <SectionTitle id="article-1">Article 1 — Objet</SectionTitle>
            <Paragraph>
              Les présentes Conditions Générales d&apos;Utilisation et de Vente
              (ci-après les « CGU/CGV ») régissent l&apos;accès et l&apos;utilisation
              du logiciel Matima, édité par la SARL MATIMA (ci-après « Matima »),
              par toute personne ou structure y souscrivant (ci-après le
              « Client »).
            </Paragraph>
            <Paragraph>
              Matima est un logiciel de gestion à destination des mandataires
              judiciaires à la protection des majeurs (MJPM), leur permettant
              notamment de gérer les dossiers des personnes protégées, la
              documentation associée, le suivi financier, la rédaction de
              courriers et la génération de comptes de gestion.
            </Paragraph>
            <Paragraph>
              Toute souscription à Matima implique l&apos;acceptation pleine et
              entière des présentes CGU/CGV.
            </Paragraph>

            <SectionTitle id="article-2">Article 2 — Accès au service</SectionTitle>
            <Paragraph>
              L&apos;accès à Matima est réservé aux mandataires judiciaires à la
              protection des majeurs légalement agréés pour l&apos;exercice de
              cette activité, ainsi qu&apos;aux membres de leur équipe qu&apos;ils
              autorisent à accéder à l&apos;outil dans le cadre de leur mission.
            </Paragraph>
            <Paragraph>
              Le Client garantit disposer des autorisations professionnelles
              nécessaires à l&apos;exercice de son activité de MJPM, et
              s&apos;engage à utiliser Matima conformément à ses obligations
              légales et déontologiques.
            </Paragraph>
            <Paragraph>
              La création d&apos;un compte nécessite la fourniture
              d&apos;informations exactes et à jour. Le Client est responsable de
              la confidentialité de ses identifiants de connexion.
            </Paragraph>

            <SectionTitle id="article-3">
              Article 3 — Offres et tarification
            </SectionTitle>
            <Paragraph>
              Matima propose plusieurs formules d&apos;abonnement, dont le
              détail et les tarifs en vigueur sont consultables sur le site
              matima.net ou dans l&apos;application&nbsp;:
            </Paragraph>
            <BulletList
              items={[
                <>
                  <strong className="text-text-strong font-semibold">
                    Prestations
                  </strong>{" "}
                  : accès gratuit, limité à la gestion des demandes de
                  prestations.
                </>,
                <>
                  <strong className="text-text-strong font-semibold">
                    Gestion
                  </strong>{" "}
                  et{" "}
                  <strong className="text-text-strong font-semibold">
                    Optimal
                  </strong>{" "}
                  : formules payantes, facturées mensuellement en fonction du
                  nombre de dossiers de protection actifs gérés par le Client.
                </>,
              ]}
            />
            <Paragraph>
              Les tarifs sont indiqués hors taxes et TTC. Matima se réserve le
              droit de faire évoluer ses tarifs, sous réserve d&apos;en informer
              le Client au moins 30 jours avant l&apos;entrée en vigueur des
              nouveaux tarifs pour les abonnements en cours.
            </Paragraph>

            <SectionTitle id="article-4">
              Article 4 — Modalités de paiement
            </SectionTitle>
            <Paragraph>
              Le paiement s&apos;effectue par prélèvement mensuel automatique
              via notre prestataire de paiement Stripe, sur la base du nombre de
              dossiers actifs constaté sur la période.
            </Paragraph>
            <Paragraph>
              <strong className="text-text-strong font-semibold">
                Sans engagement
              </strong>{" "}
              : l&apos;abonnement est sans durée minimale et peut être résilié à
              tout moment (voir Article 5).
            </Paragraph>
            <Paragraph>
              <strong className="text-text-strong font-semibold">
                Défaut de paiement
              </strong>{" "}
              : en cas d&apos;échec de prélèvement, le Client dispose d&apos;un
              délai de grâce de 3 jours pour régulariser sa situation avant
              suspension de l&apos;accès au service. Le Client conserve la
              possibilité de mettre à jour son moyen de paiement directement
              depuis son espace Matima.
            </Paragraph>
            <Paragraph>
              <strong className="text-text-strong font-semibold">
                Aucun remboursement
              </strong>{" "}
              ne sera effectué au titre des sommes déjà réglées, sauf disposition
              légale contraire.
            </Paragraph>

            <SectionTitle id="article-5">
              Article 5 — Durée et résiliation
            </SectionTitle>
            <Paragraph>
              Le Client peut résilier son abonnement à tout moment depuis son
              espace Matima, sans préavis ni justification.
            </Paragraph>
            <Paragraph>
              La résiliation prend effet à la fin de la période mensuelle en
              cours et déjà réglée. Le Client conserve l&apos;accès au service
              jusqu&apos;à cette date.
            </Paragraph>
            <Paragraph>
              Matima se réserve le droit de suspendre ou résilier l&apos;accès
              d&apos;un Client en cas de manquement grave aux présentes CGU/CGV,
              notamment en cas d&apos;usage non conforme à la déontologie
              professionnelle des MJPM, après mise en demeure restée sans effet,
              sauf urgence.
            </Paragraph>

            <SectionTitle id="article-6">
              Article 6 — Obligations du Client
            </SectionTitle>
            <Paragraph>Le Client s&apos;engage à&nbsp;:</Paragraph>
            <BulletList
              items={[
                "Utiliser Matima conformément à sa destination et aux règles applicables à sa profession ;",
                "Ne saisir dans l'outil que des données qu'il est légalement autorisé à traiter ;",
                "Vérifier l'exactitude et la pertinence des informations qu'il saisit ;",
                "Ne pas céder, partager ou permettre l'utilisation de son compte par un tiers non autorisé.",
              ]}
            />
            <div className="mb-4 rounded-xl border border-accent/25 bg-badge-bg px-4 py-3 text-[14px] leading-relaxed text-text-strong">
              <p>
                <strong className="font-semibold">
                  Responsabilité sur les documents produits
                </strong>{" "}
                : Matima est un outil d&apos;assistance à la gestion et à la
                rédaction. Les documents générés via Matima — notamment les
                comptes de gestion, courriers et emails, y compris ceux assistés
                par intelligence artificielle — doivent être relus et validés
                par le Client avant tout usage officiel ou transmission à un
                tiers (juge des tutelles, organisme, etc.).{" "}
                <strong className="font-semibold">
                  Le Client demeure seul responsable de l&apos;exactitude, de la
                  validité juridique et de l&apos;usage final de tout document
                  produit à l&apos;aide de Matima.
                </strong>
              </p>
            </div>

            <SectionTitle id="article-7">
              Article 7 — Obligations de Matima
            </SectionTitle>
            <Paragraph>
              Matima s&apos;engage à mettre en œuvre les moyens raisonnables pour
              assurer la disponibilité, la sécurité et le bon fonctionnement du
              service, dans le cadre d&apos;une obligation de moyens.
            </Paragraph>
            <Paragraph>
              Matima ne garantit pas une disponibilité ininterrompue du service,
              notamment en cas de maintenance, de mise à jour, ou de
              circonstances indépendantes de sa volonté (panne d&apos;un
              prestataire technique, force majeure).
            </Paragraph>
            <Paragraph>
              Les engagements de Matima en matière de protection des données
              personnelles sont détaillés dans sa{" "}
              <Link
                href="/politique-confidentialite"
                className="text-accent font-semibold no-underline hover:text-accent-hover"
              >
                Politique de confidentialité
              </Link>
              .
            </Paragraph>

            <SectionTitle id="article-8">Article 8 — Responsabilité</SectionTitle>
            <Paragraph>
              Matima met en œuvre des moyens raisonnables pour assurer la
              fiabilité de ses fonctionnalités, y compris celles assistées par
              intelligence artificielle. Toutefois, Matima ne saurait être tenue
              responsable des conséquences résultant d&apos;une utilisation non
              conforme du service, d&apos;une erreur de saisie du Client, ou
              d&apos;un défaut de vérification par le Client des documents
              produits (voir Article 6).
            </Paragraph>
            <div className="mb-4 rounded-xl border border-border bg-bg-gray/60 px-4 py-3 text-[14px] leading-relaxed text-text-strong">
              <p>
                <strong className="font-semibold">
                  Dans toute la mesure permise par la loi, la responsabilité
                  totale de Matima au titre de l&apos;exécution des présentes
                  CGU/CGV est plafonnée au montant des sommes effectivement
                  versées par le Client au cours des trois (3) derniers mois
                  précédant le fait générateur du dommage.
                </strong>
              </p>
            </div>
            <Paragraph>
              Cette limitation ne s&apos;applique pas en cas de faute lourde ou
              intentionnelle de Matima, ni aux dommages qui ne peuvent être
              exclus ou limités en vertu du droit applicable.
            </Paragraph>

            <SectionTitle id="article-9">
              Article 9 — Propriété intellectuelle
            </SectionTitle>
            <Paragraph>
              Le logiciel Matima, sa structure, son code, son design et
              l&apos;ensemble des éléments qui le composent sont la propriété
              exclusive de la SARL MATIMA et sont protégés par le droit de la
              propriété intellectuelle. L&apos;abonnement du Client lui confère
              un droit d&apos;usage personnel, non exclusif et non transférable,
              pour la durée de son abonnement.
            </Paragraph>
            <Paragraph>
              Les données saisies par le Client (dossiers, documents,
              informations relatives aux personnes protégées) demeurent la
              propriété du Client ou des personnes concernées, selon le cas.
              Matima intervient en qualité de sous-traitant technique pour leur
              hébergement et leur traitement, conformément à sa Politique de
              confidentialité.
            </Paragraph>

            <SectionTitle id="article-10">
              Article 10 — Données personnelles
            </SectionTitle>
            <Paragraph>
              Le traitement des données personnelles dans le cadre de
              l&apos;utilisation de Matima est détaillé dans notre{" "}
              <Link
                href="/politique-confidentialite"
                className="text-accent font-semibold no-underline hover:text-accent-hover"
              >
                Politique de confidentialité
              </Link>
              , qui fait partie intégrante des présentes CGU/CGV.
            </Paragraph>

            <SectionTitle id="article-11">
              Article 11 — Modification des CGU/CGV
            </SectionTitle>
            <Paragraph>
              Matima se réserve le droit de modifier les présentes CGU/CGV à
              tout moment. Le Client sera informé de toute modification
              substantielle au moins 30 jours avant son entrée en vigueur. La
              poursuite de l&apos;utilisation du service après cette date vaut
              acceptation des CGU/CGV modifiées.
            </Paragraph>

            <SectionTitle id="article-12">
              Article 12 — Droit applicable et juridiction compétente
            </SectionTitle>
            <Paragraph>
              Les présentes CGU/CGV sont soumises au droit français. En cas de
              litige, et à défaut de résolution amiable, les tribunaux
              compétents seront ceux du ressort du siège social de la SARL
              MATIMA, sauf disposition légale impérative contraire.
            </Paragraph>

            <SectionTitle id="article-13">Article 13 — Contact</SectionTitle>
            <Paragraph>
              Pour toute question relative aux présentes CGU/CGV :{" "}
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
