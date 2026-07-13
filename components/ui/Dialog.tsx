"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// Accessible modal primitive (validation amendment 3): role="dialog",
// aria-modal, labelled title, focus trap, focus restoration to the trigger,
// Esc close, scroll lock. Powers the booking + Vera modals.
const FOCUSABLE =
  'a[href],button:not([disabled]),textarea,input,select,iframe,[tabindex]:not([tabindex="-1"])';

export default function Dialog({
  isOpen,
  onClose,
  title,
  children,
  labelId = "dialog-title",
}: {
  isOpen: boolean;
  onClose: () => void;
  title: ReactNode;
  children: ReactNode;
  labelId?: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    restoreRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusables = () =>
      Array.from(panel?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []).filter(
        (el) => el.offsetParent !== null || el.tagName === "IFRAME",
      );

    // Move focus into the dialog.
    const first = focusables()[0] ?? panel;
    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) {
        e.preventDefault();
        return;
      }
      const firstEl = items[0];
      const lastEl = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && active === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && active === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      restoreRef.current?.focus?.();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
          style={{ background: "rgba(22,19,16,0.55)", backdropFilter: "blur(4px)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelId}
            initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.98, y: 12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-canvas-raised)] shadow-[var(--shadow-lg)]"
            style={{ maxHeight: "min(88vh, 720px)" }}
          >
            <div className="flex items-center justify-between border-b border-[var(--color-hairline)] px-5 py-4">
              <p id={labelId} className="font-[var(--font-display)] text-lg text-[var(--color-ink)]">
                {title}
              </p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-ink-secondary)] transition-colors duration-150 hover:bg-[var(--color-canvas-sunken)]"
              >
                <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-auto">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
