import Link from "next/link";
import { MatimaLogo } from "@/components/brand/MatimaLogo";
import { RadialGlow } from "./RadialGlow";

const FOOTER_LINKS = [
  { href: "/prestations", label: "Prestations" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/mentions-legales", label: "Mentions légales" },
  {
    href: "/politique-confidentialite",
    label: "Politique de confidentialité",
  },
  { href: "/cgu-cgv", label: "CGU / CGV" },
] as const;

export function Footer() {
  return (
    <footer className="relative z-10 bg-white border-t border-border px-4 md:px-10 py-6 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 brand-favicon-pattern"
        aria-hidden
      />
      <RadialGlow
        position="bottom-right"
        className="!w-[280px] !h-[280px] opacity-70"
      />

      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
        <MatimaLogo
          color="#0F1923"
          className="h-5 w-auto"
          aria-label="Matima"
        />
        <nav className="flex flex-wrap items-center gap-4 md:gap-6">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-text-soft hover:text-text-strong transition-colors no-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <span className="text-xs text-text-hint">
          contact@matima.net · © 2026 Matima
        </span>
      </div>
    </footer>
  );
}
