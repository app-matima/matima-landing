import clsx from "clsx";
import { ScrollReveal } from "@/components/ScrollReveal";
import { BrowserMockup } from "./BrowserMockup";
import { RadialGlow } from "./RadialGlow";
import { FEATURE_BLOCKS } from "@/lib/images";

export function FonctionnalitesSection() {
  return (
    <section
      id="fonctionnalites"
      className="relative bg-white px-4 md:px-10 py-16 md:py-24 scroll-mt-[60px] overflow-hidden"
    >
      <RadialGlow position="bottom-left" />

      <div className="max-w-[1060px] mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-[600px] mx-auto mb-16 md:mb-20">
            <h2 className="text-[clamp(28px,4vw,38px)] font-black text-text-strong tracking-[-0.02em] mb-3">
              Tout ce dont vous avez besoin
            </h2>
            <p className="text-text-soft text-base">
              Des modules pensés pour le quotidien des mandataires — du premier
              courrier au compte de gestion.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-20 md:gap-28">
          {FEATURE_BLOCKS.map((block, i) => {
            const imageFirst = i % 2 === 0;
            const number = String(i + 1).padStart(2, "0");

            return (
              <ScrollReveal key={block.title} delay={60}>
                <div
                  className={clsx(
                    "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center",
                    !imageFirst && "lg:[&>*:first-child]:order-2",
                  )}
                >
                  <BrowserMockup
                    src={block.image}
                    alt={block.imageAlt}
                    priority={i === 0}
                  />

                  <div>
                    <span
                      className={clsx(
                        "inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4",
                        block.badgeClass,
                      )}
                    >
                      {block.badge}
                    </span>
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-2xl font-black text-accent/25 leading-none tracking-[-0.03em] shrink-0">
                        {number}
                      </span>
                      <h3 className="text-[26px] font-bold text-text-strong tracking-[-0.02em]">
                        {block.title}
                      </h3>
                    </div>
                    <p className="text-text-soft text-base leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
