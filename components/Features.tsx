import {
  FolderOpen,
  Users,
  FileCheck,
  Calendar,
  Shield,
  Wallet,
} from "lucide-react";
import { FEATURES } from "@/lib/constants";
import { FadeIn } from "./FadeIn";

const iconMap = {
  FolderOpen,
  Users,
  FileCheck,
  Calendar,
  Shield,
  Wallet,
} as const;

export function Features() {
  return (
    <section className="bg-bg-gray py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <FadeIn>
          <h2 className="text-[28px] md:text-[36px] font-black tracking-[-0.03em] text-text-strong">
            Tout ce dont vous avez besoin, enfin réuni
          </h2>
        </FadeIn>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <FadeIn key={feature.title} delay={i * 60}>
                <div className="bg-white border border-border rounded-[14px] p-5 md:p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-badge-bg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-bold text-text-strong">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-text-soft leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
