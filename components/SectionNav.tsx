"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { SECTIONS, type SectionId } from "@/lib/sections";

export function SectionNav() {
  const [activeId, setActiveId] = useState<SectionId>("hero");
  const [hovered, setHovered] = useState(false);
  const ratiosRef = useRef(new Map<string, number>());

  useEffect(() => {
    const elements = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean,
    ) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ratiosRef.current.set(entry.target.id, entry.intersectionRatio);
          } else {
            ratiosRef.current.delete(entry.target.id);
          }
        });

        let bestId: SectionId = "hero";
        let bestRatio = 0;

        ratiosRef.current.forEach((ratio, id) => {
          if (ratio >= bestRatio) {
            bestRatio = ratio;
            bestId = id as SectionId;
          }
        });

        if (bestRatio > 0) setActiveId(bestId);
      },
      { threshold: [0, 0.15, 0.35, 0.55, 0.75, 1], rootMargin: "-20% 0px -35% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav
      aria-label="Navigation des sections"
      className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col items-start gap-5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {SECTIONS.map((section) => {
        const isActive = activeId === section.id;
        return (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollTo(section.id)}
            aria-label={`Aller à ${section.label}`}
            aria-current={isActive ? "true" : undefined}
            className="group/dot flex items-center gap-3 justify-start bg-transparent border-0 p-0 cursor-pointer"
          >
            <span
              className={clsx(
                "rounded-full transition-all duration-300 ease-out shrink-0",
                isActive
                  ? "w-3 h-3 bg-accent shadow-[0_0_0_4px_rgba(0,163,148,0.15)]"
                  : "w-2 h-2 bg-border group-hover/dot:bg-text-hint",
              )}
            />
            <span
              className={clsx(
                "text-xs font-medium whitespace-nowrap transition-all duration-300 ease-out",
                hovered
                  ? "opacity-100 translate-x-0 text-text-soft"
                  : "opacity-0 -translate-x-2 pointer-events-none",
              )}
            >
              {section.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
