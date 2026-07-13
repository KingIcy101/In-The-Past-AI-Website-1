"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// Semantic accordion (replaces the div-onClick FAQ). Each item is a real
// <button aria-expanded aria-controls> toggling a labelled region.
export type FaqItem = { q: string; a: string };

export default function FAQAccordion({ items, idBase = "faq" }: { items: FaqItem[]; idBase?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <div className="divide-y divide-[var(--color-hairline)] border-y border-[var(--color-hairline)]">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${idBase}-btn-${i}`;
        const panelId = `${idBase}-panel-${i}`;
        return (
          <div key={i}>
            <h3 className="m-0">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left min-h-[44px]"
              >
                <span className="font-[var(--font-display)] text-[1.05rem] font-medium text-[var(--color-ink)]">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={`flex-none text-[var(--pod-accent-deep)] transition-transform duration-200 motion-reduce:transition-none ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={reduce ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-5 leading-relaxed text-[var(--color-ink-secondary)]">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
