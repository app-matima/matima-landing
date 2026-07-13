export const SECTIONS = [
  { id: "hero", label: "Accueil" },
  { id: "sans-matima", label: "Sans Matima" },
  { id: "fonctionnalites", label: "Fonctionnalités" },
  { id: "tarifs", label: "Tarifs" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
