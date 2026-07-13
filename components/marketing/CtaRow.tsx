"use client";

import Link from "next/link";
import { useCalModal } from "@/contexts/CalModalContext";

// The standard action pair used in heroes and CTAs: primary "Book a discovery
// call" (opens the accessible booking modal) + secondary "Hear it answer"
// (jumps to the live Vera demo). Both always work — no dead anchors.
export default function CtaRow({
  demoHref = "/#demo",
  className = "",
  bookLabel = "Book a discovery call",
}: {
  demoHref?: string;
  className?: string;
  bookLabel?: string;
}) {
  const { open } = useCalModal();
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}>
      <button
        type="button"
        onClick={() => open()}
        className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-amber)] px-6 font-semibold text-white shadow-[var(--shadow-sm)] transition-[background,box-shadow,transform] duration-150 hover:bg-[var(--color-amber-deep)] hover:shadow-[var(--shadow-md)] active:translate-y-px"
      >
        {bookLabel}
      </button>
      <Link
        href={demoHref}
        className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-hairline)] px-6 font-semibold text-[var(--color-ink)] transition-[background,border-color] duration-150 hover:border-[var(--pod-accent-deep)] hover:bg-[var(--pod-accent-tint)]"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M4 3.5v9l7-4.5-7-4.5z" fill="currentColor" />
        </svg>
        Hear it answer
      </Link>
    </div>
  );
}
