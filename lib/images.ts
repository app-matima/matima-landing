export const IMAGES = {
  dashboard:
    "https://pthryicgtcbllvkbbylp.supabase.co/storage/v1/object/public/ressources-images/dashboard.png",
  ged: "https://pthryicgtcbllvkbbylp.supabase.co/storage/v1/object/public/ressources-images/ged.png",
  proteges:
    "https://pthryicgtcbllvkbbylp.supabase.co/storage/v1/object/public/ressources-images/proteges.png",
  prestations:
    "https://pthryicgtcbllvkbbylp.supabase.co/storage/v1/object/public/ressources-images/prestations.png",
  equipe:
    "https://pthryicgtcbllvkbbylp.supabase.co/storage/v1/object/public/ressources-images/equipe.png",
  equipeMatima:
    "https://pthryicgtcbllvkbbylp.supabase.co/storage/v1/object/public/ressources-images/equipe_matima.jpeg",
  dashboardProtege:
    "https://pthryicgtcbllvkbbylp.supabase.co/storage/v1/object/public/ressources-images/dashboard_protege.png",
  heroVideo:
    "https://pthryicgtcbllvkbbylp.supabase.co/storage/v1/object/public/ressources-images/video_hero.mp4",
} as const;

export const FEATURE_BLOCKS = [
  {
    badge: "Tableau de bord",
    badgeClass: "bg-badge-bg text-badge-text",
    title: "Ouvrez Matima, tout est là",
    description:
      "Le tableau de bord centralise en un coup d'œil les alertes urgentes, les protégés actifs, les documents à traiter et les rendez-vous du jour. Fini les allers-retours entre plusieurs écrans pour savoir par où commencer.",
    image: IMAGES.dashboard,
    imageAlt: "Dashboard Matima — vue d'ensemble de l'activité",
  },
  {
    badge: "GED",
    badgeClass: "bg-badge-bg text-badge-text",
    title: "GED intelligente",
    description:
      "Classement automatique, recherche instantanée et upload en masse. Retrouvez n'importe quel document en quelques secondes.",
    image: IMAGES.ged,
    imageAlt: "Interface GED Matima — gestion documentaire intelligente",
  },
  {
    badge: "Protégés",
    badgeClass: "bg-text-strong text-white",
    title: "Gestion des protégés",
    description:
      "Fiches complètes, mesures de protection, contacts et checklist d'onboarding pour chaque nouveau dossier.",
    image: IMAGES.proteges,
    imageAlt: "Liste des protégés dans Matima",
  },
  {
    badge: "Prestations",
    badgeClass: "bg-[#E8F4FD] text-[#1D6FA3]",
    title: "Prestations & attestations",
    description:
      "Commandez des interventions, suivez leur avancement et générez automatiquement l'attestation signée.",
    image: IMAGES.prestations,
    imageAlt: "Module prestations et attestations Matima",
  },
  {
    badge: "Équipe",
    badgeClass: "bg-[#F3EEFF] text-[#6B4FBB]",
    title: "Travail en équipe",
    description:
      "Invitez des assistants avec des permissions par module — GED, protégés, comptes ou courrier — pour déléguer en toute sécurité.",
    image: IMAGES.equipe,
    imageAlt: "Gestion d'équipe et permissions dans Matima",
  },
] as const;
