import clsx from "clsx";
import type { CSSProperties } from "react";

type GlowPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left";
type GlowVariant = "default" | "on-dark";

const POSITION_CLASSES: Record<GlowPosition, string> = {
  "top-right": "-top-24 -right-24",
  "top-left": "-top-20 -left-20",
  "bottom-right": "-bottom-28 -right-16",
  "bottom-left": "-bottom-24 -left-24",
};

const GLOW_BACKGROUNDS: Record<GlowVariant, string> = {
  default:
    "radial-gradient(circle, rgba(0,163,148,0.15) 0%, rgba(0,163,148,0) 70%)",
  "on-dark":
    "radial-gradient(circle, rgba(0,196,179,0.28) 0%, rgba(0,163,148,0.08) 45%, rgba(0,163,148,0) 72%)",
};

interface RadialGlowProps {
  position: GlowPosition;
  variant?: GlowVariant;
  className?: string;
  style?: CSSProperties;
}

export function RadialGlow({
  position,
  variant = "default",
  className,
  style,
}: RadialGlowProps) {
  return (
    <div
      className={clsx(
        "pointer-events-none absolute w-[min(420px,50vw)] h-[min(420px,50vw)] rounded-full",
        POSITION_CLASSES[position],
        className,
      )}
      style={{ background: GLOW_BACKGROUNDS[variant], ...style }}
      aria-hidden
    />
  );
}
