export const REGISTER_URL = "https://app.matima.net/auth/register";
export const LOGIN_URL = "https://app.matima.net/auth/login";
export const CONTACT_EMAIL = "contact@matima.net";

export function planRegisterUrl(plan: "gestion" | "optimal" | "prestations") {
  return `${REGISTER_URL}?plan=${plan}`;
}

export const STATS = [
  {
    value: "3h",
    label: "économisées",
    description: "Par semaine sur le tri, la saisie et les relances manuelles.",
  },
  {
    value: "1",
    label: "seul outil",
    description: "Pour gérer dossiers, documents, prestations et alertes.",
  },
  {
    value: "0",
    label: "formation requise",
    description: "Interface intuitive, prise en main immédiate.",
  },
] as const;

export const FEATURES = [
  {
    title: "GED intelligente",
    description:
      "Classez, recherchez et retrouvez vos documents en quelques clics.",
    icon: "FolderOpen" as const,
  },
  {
    title: "Gestion des protégés",
    description:
      "Fiches, mesures et contacts centralisés pour chaque dossier.",
    icon: "Users" as const,
  },
  {
    title: "Prestations & attestations",
    description:
      "Modèles conformes, génération et suivi en quelques clics.",
    icon: "FileCheck" as const,
  },
  {
    title: "Calendrier & alertes",
    description:
      "Rappels automatiques pour ne plus manquer une échéance.",
    icon: "Calendar" as const,
  },
  {
    title: "Coffre-fort sécurisé",
    description:
      "Documents sensibles chiffrés, conformes aux exigences de confidentialité.",
    icon: "Shield" as const,
  },
  {
    title: "Compte de gestion",
    description:
      "Recettes, dépenses et soldes suivis dossier par dossier.",
    icon: "Wallet" as const,
  },
] as const;

export const PLAN_FEATURES = {
  gestion: [
    "Gestion des protégés",
    "GED & documents",
    "Rappels & alertes",
    "Calendrier",
    "Coffre-fort sécurisé",
    "Prestations & attestations",
    "Courrier physique (à l'usage)",
  ],
  optimal: [
    "Tout le plan Gestion",
    "Génération courriers par IA",
    "Emails & alias par protégé",
    "Génération DIPM automatique",
    "Compte de gestion PDF",
    "Paiement SEPA Bridge",
    "Assistants / multi-utilisateurs",
  ],
} as const;

export const PLANS = [
  {
    id: "gestion" as const,
    name: "Gestion",
    price: 2,
    features: PLAN_FEATURES.gestion,
    variant: "default" as const,
  },
  {
    id: "optimal" as const,
    name: "Optimal",
    price: 4,
    features: PLAN_FEATURES.optimal,
    variant: "recommended" as const,
  },
] as const;
