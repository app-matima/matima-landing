"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { ScreenshotLightbox } from "@/components/ScreenshotLightbox";

interface BrowserMockupProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function BrowserMockup({
  src,
  alt,
  className,
  priority = false,
}: BrowserMockupProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = useCallback(() => setLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  return (
    <>
      <button
        type="button"
        onClick={openLightbox}
        className={clsx(
          "group/mockup block w-full text-left rounded-xl overflow-hidden border border-border",
          "shadow-[0_20px_50px_-12px_rgba(15,25,35,0.18)]",
          "cursor-pointer transition-all duration-300 ease-out",
          "hover:scale-[1.02] hover:shadow-[0_28px_64px_-12px_rgba(15,25,35,0.28)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
          className,
        )}
        aria-label={`Agrandir la capture : ${alt}`}
      >
        <div className="bg-text-strong px-4 py-3 flex items-center gap-2 pointer-events-none">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" aria-hidden />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" aria-hidden />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" aria-hidden />
        </div>
        <div className="relative bg-white">
          <Image
            src={src}
            alt={alt}
            width={1440}
            height={900}
            priority={priority}
            className="w-full h-auto block"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
          />
        </div>
      </button>

      <ScreenshotLightbox
        src={src}
        alt={alt}
        open={lightboxOpen}
        onClose={closeLightbox}
      />
    </>
  );
}
