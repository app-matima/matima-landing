import { STATS } from "@/lib/constants";
import { FadeIn } from "./FadeIn";

export function Stats() {
  return (
    <section className="bg-text-strong py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <FadeIn>
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-text-hint mb-10 md:mb-14">
            Pourquoi les MJPM choisissent Matima
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-8">
          {STATS.map((item, i) => (
            <FadeIn key={item.label} delay={i * 80}>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[42px] font-black leading-none text-accent">
                    {item.value}
                  </span>
                  <span className="text-lg font-semibold text-white">
                    {item.label}
                  </span>
                </div>
                <p className="mt-3 text-sm text-text-hint leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
