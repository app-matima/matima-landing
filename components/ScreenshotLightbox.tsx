"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";

interface ScreenshotLightboxProps {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
}

export function ScreenshotLightbox({
  src,
  alt,
  open,
  onClose,
}: ScreenshotLightboxProps) {
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Aperçu agrandi : ${alt}`}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/80 cursor-pointer"
        onClick={() => onCloseRef.current()}
        aria-label="Fermer l'aperçu"
      />

      <button
        type="button"
        onClick={() => onCloseRef.current()}
        className="absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-text-strong shadow-lg hover:bg-[#F4F5F7] transition-colors cursor-pointer"
        aria-label="Fermer"
      >
        <X className="h-5 w-5" strokeWidth={2.25} />
      </button>

      <div className="relative z-10 flex max-h-[90vh] max-w-6xl items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={1440}
          height={900}
          className="max-h-[90vh] w-auto max-w-full object-contain rounded-lg shadow-[0_32px_80px_-16px_rgba(0,0,0,0.55)]"
          sizes="100vw"
        />
      </div>
    </div>,
    document.body,
  );
}
