import clsx from "clsx";
import { MatimaFavicon } from "@/components/brand/MatimaFavicon";

type BrandSeparatorVariant = "light" | "muted" | "dark" | "on-dark";

const VARIANTS: Record<
  BrandSeparatorVariant,
  { bg: string; faviconColor: string; faviconOpacity: number }
> = {
  light: { bg: "bg-white", faviconColor: "#8ECFC8", faviconOpacity: 1 },
  muted: { bg: "bg-bg-gray", faviconColor: "#7BBFB8", faviconOpacity: 1 },
  dark: { bg: "bg-text-strong", faviconColor: "#4A9E96", faviconOpacity: 1 },
  "on-dark": {
    bg: "bg-transparent",
    faviconColor: "#00A394",
    faviconOpacity: 1,
  },
};

interface BrandSeparatorProps {
  variant?: BrandSeparatorVariant;
  transparent?: boolean;
}

export function BrandSeparator({
  variant = "light",
  transparent = false,
}: BrandSeparatorProps) {
  const { bg, faviconColor, faviconOpacity } = VARIANTS[variant];

  return (
    <div
      className={clsx(
        "flex justify-center py-5 md:py-6",
        transparent ? "bg-transparent" : bg,
      )}
      aria-hidden
    >
      <MatimaFavicon
        color={faviconColor}
        fillOpacity={faviconOpacity}
        className="w-7 h-7"
      />
    </div>
  );
}
