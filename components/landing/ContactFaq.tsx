"use client";

import { useState } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/faq";

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="text-left">
      <h3 className="text-xl font-bold text-white mb-1">Questions fréquentes</h3>
      <p className="text-text-hint text-sm mb-6">
        Tout ce qu&apos;il faut savoir avant de démarrer avec Matima.
      </p>

      <div className="flex flex-col gap-2">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-start justify-between gap-4 px-4 py-4 md:px-5 md:py-4 text-left cursor-pointer bg-transparent border-0"
                aria-expanded={isOpen}
              >
                <span className="text-[15px] font-semibold text-white leading-snug">
                  {item.question}
                </span>
                <ChevronDown
                  className={clsx(
                    "w-5 h-5 text-white/60 shrink-0 mt-0.5 transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                  strokeWidth={2.25}
                />
              </button>

              <div
                className={clsx(
                  "grid transition-[grid-template-rows] duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-4 pb-4 md:px-5 md:pb-5 text-sm text-text-hint leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
