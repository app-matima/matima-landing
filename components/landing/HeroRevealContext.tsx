"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type HeroRevealContextValue = {
  progress: number;
  setProgress: (progress: number) => void;
  isRevealed: boolean;
};

const HeroRevealContext = createContext<HeroRevealContextValue | null>(null);

export function HeroRevealProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);

  const value = useMemo(
    () => ({
      progress,
      setProgress,
      isRevealed: progress >= 1,
    }),
    [progress],
  );

  return (
    <HeroRevealContext.Provider value={value}>
      {children}
    </HeroRevealContext.Provider>
  );
}

export function useHeroReveal() {
  const context = useContext(HeroRevealContext);
  if (!context) {
    return {
      progress: 1,
      setProgress: () => {},
      isRevealed: true,
    };
  }
  return context;
}
