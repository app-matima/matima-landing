"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { LOGIN_URL } from "@/lib/constants";
import { MatimaLogo } from "@/components/brand/MatimaLogo";
import { useHeroReveal } from "./HeroRevealContext";

const NAV_LINKS = [
  { href: "/prestations", label: "Prestations" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
] as const;

const DARK_NAV_PAGES = ["/prestations", "/qui-sommes-nous"] as const;

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isDarkNavPage = DARK_NAV_PAGES.includes(
    pathname as (typeof DARK_NAV_PAGES)[number],
  );
  const { progress } = useHeroReveal();

  const navOpacity = isHome ? progress : 1;
  const showSolidBg = isDarkNavPage ? false : isHome ? progress >= 1 : true;

  return (
    <nav
      style={{
        opacity: navOpacity,
        pointerEvents: navOpacity > 0 ? "auto" : "none",
      }}
      className={clsx(
        "sticky top-0 z-40 px-4 md:px-10 flex items-center justify-between h-[60px]",
        showSolidBg
          ? "bg-white border-b border-border shadow-[0_1px_12px_rgba(15,25,35,0.06)]"
          : clsx(
              "bg-transparent border-b border-transparent",
              isDarkNavPage && "backdrop-blur-[10px]",
            ),
      )}
    >
      <Link href="/" aria-label="Matima — Accueil" className="shrink-0">
        <MatimaLogo
          color={isDarkNavPage ? "#FFFFFF" : "#0F1923"}
          className="h-6 w-auto"
        />
      </Link>
      <div className="flex gap-4 md:gap-6 items-center">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              "text-[13px] transition-colors no-underline",
              isDarkNavPage
                ? clsx(
                    "text-white/75 hover:text-accent",
                    pathname === link.href && "text-accent",
                  )
                : "text-text-soft hover:text-text-strong",
            )}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={LOGIN_URL}
          className="bg-accent hover:bg-accent-hover text-white px-[18px] py-2 rounded-[10px] font-semibold text-[13px] no-underline transition-colors"
        >
          Se connecter
        </a>
      </div>
    </nav>
  );
}
