import { Check } from "lucide-react";
import { PLANS, planRegisterUrl } from "@/lib/constants";
import { FadeIn } from "./FadeIn";
import clsx from "clsx";

export function Plans() {
  return (
    <section id="plans" className="bg-white py-16 md:py-24 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <FadeIn>
          <h2 className="text-[28px] md:text-[36px] font-black tracking-[-0.03em] text-text-strong text-center">
            Des tarifs simples, par dossier
          </h2>
        </FadeIn>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-stretch max-w-3xl mx-auto">
          {PLANS.map((plan, i) => {
            const isRecommended = plan.variant === "recommended";

            return (
              <FadeIn key={plan.id} delay={i * 80}>
                <div
                  className={clsx(
                    "relative rounded-[14px] p-6 flex flex-col h-full bg-white",
                    isRecommended
                      ? "border-2 border-accent"
                      : "border border-border",
                  )}
                >
                  {isRecommended && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                      Recommandé
                    </span>
                  )}

                  <h3 className="text-lg font-bold text-text-strong">
                    {plan.name}
                  </h3>

                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-[40px] font-black leading-none tracking-[-0.03em] text-text-strong">
                      {plan.price}€
                    </span>
                    <span className="text-sm text-text-soft">/dossier/mois</span>
                  </div>

                  <ul className="mt-6 space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm leading-snug text-text-soft"
                      >
                        <Check
                          className="w-4 h-4 shrink-0 mt-0.5 text-accent"
                          strokeWidth={2.5}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={planRegisterUrl(plan.id)}
                    className={clsx(
                      "mt-8 block text-center px-5 py-3 rounded-xl font-semibold text-sm transition-colors",
                      isRecommended
                        ? "bg-accent hover:bg-accent-hover text-white"
                        : "border border-border hover:bg-bg-gray text-text-strong",
                    )}
                  >
                    Choisir {plan.name}
                  </a>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
