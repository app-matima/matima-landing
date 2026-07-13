"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";
import { FolderOpen } from "lucide-react";
import { MatimaLogo } from "@/components/brand/MatimaLogo";
import { RadialGlow } from "./RadialGlow";
import { IMAGES } from "@/lib/images";
import { useHeroReveal } from "./HeroRevealContext";

/** Total scroll delta (px) required to complete the reveal animation */
const REVEAL_DISTANCE = 1200;

export function HeroSection() {
  const { progress, setProgress, isRevealed } = useHeroReveal();
  const progressRef = useRef(0);
  const unlockedRef = useRef(false);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    const completeReveal = () => {
      progressRef.current = 1;
      unlockedRef.current = true;
      setProgress(1);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      completeReveal();
      return;
    }

    if (window.scrollY > 0) {
      completeReveal();
      return;
    }

    let touchLastY = 0;
    let touching = false;

    const addProgress = (delta: number) => {
      if (unlockedRef.current || delta <= 0) return;

      if (window.scrollY > 0) {
        completeReveal();
        return;
      }

      const next = Math.min(1, progressRef.current + delta / REVEAL_DISTANCE);
      progressRef.current = next;
      setProgress(next);

      if (next >= 1) {
        unlockedRef.current = true;
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (unlockedRef.current) return;

      if (window.scrollY > 0) {
        completeReveal();
        return;
      }

      if (e.deltaY > 0) {
        e.preventDefault();
        addProgress(e.deltaY);
      } else if (progressRef.current === 0) {
        e.preventDefault();
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      if (unlockedRef.current) return;
      touching = true;
      touchLastY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!touching || unlockedRef.current) return;

      if (window.scrollY > 0) {
        completeReveal();
        touching = false;
        return;
      }

      const y = e.touches[0].clientY;
      const delta = touchLastY - y;
      touchLastY = y;

      if (delta > 0) {
        e.preventDefault();
        addProgress(delta);
      } else if (progressRef.current === 0) {
        e.preventDefault();
      }
    };

    const onTouchEnd = () => {
      touching = false;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [setProgress]);

  const blurPx = progress * 4;
  const overlayOpacity = progress * 0.7;
  const contentOpacity = progress;
  const contentTranslateY = (1 - progress) * 20;

  return (
    <section
      id="hero"
      className="relative bg-[#FDFCF9] px-4 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28 scroll-mt-[60px] overflow-hidden"
      style={{ touchAction: isRevealed ? "auto" : "none" }}
    >
      <div className="absolute inset-0 z-0" aria-hidden>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: `blur(${blurPx}px)` }}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={IMAGES.dashboard}
        >
          <source src={IMAGES.heroVideo} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-white"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      <RadialGlow
        position="top-right"
        className="z-[1]"
        style={{ opacity: progress }}
      />

      <div
        className={clsx(
          "relative max-w-[720px] mx-auto text-center z-10",
          isRevealed ? "pointer-events-auto" : "pointer-events-none",
        )}
        style={{
          opacity: contentOpacity,
          transform: `translateY(${contentTranslateY}px)`,
        }}
      >
        <span className="inline-block bg-badge-bg text-text-strong text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
          1 mois offert · Sans engagement
        </span>

        <MatimaLogo
          color="#00A394"
          className="h-18 md:h-22 w-auto mx-auto mb-8"
          aria-label="Matima"
        />

        <h1 className="text-[clamp(32px,5vw,52px)] font-black text-text-strong leading-[1.08] tracking-[-0.03em] mb-5">
          Le logiciel qui simplifie la protection juridique
        </h1>

        <p className="text-text-soft text-base md:text-lg leading-relaxed mb-8">
          Centralisez vos dossiers, documents, comptes de gestion et courriers
          dans un seul outil conçu pour les mandataires judiciaires.
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="#tarifs"
            className="bg-accent hover:bg-accent-hover text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] no-underline transition-colors"
          >
            Démarrer maintenant
          </a>
          <a
            href="#tarifs"
            className="bg-white text-text-strong px-7 py-3.5 rounded-xl font-semibold text-[15px] border border-border no-underline hover:bg-[#F4F5F7] transition-colors"
          >
            Voir les tarifs
          </a>
        </div>

        <p className="mt-8 flex items-center justify-center gap-2.5 text-base md:text-lg font-semibold text-text-strong leading-snug">
          <FolderOpen
            className="w-5 h-5 text-accent shrink-0"
            strokeWidth={2.25}
          />
          <span>
            <span className="text-accent font-bold">+300 dossiers</span> gérés
            par nos mandataires partenaires
          </span>
        </p>
      </div>
    </section>
  );
}
