"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PodIcon from "@/components/marketing/PodIcon";
import { SECTORS } from "@/lib/marketing/market-pods";

// The five small aesthetic SECTOR BUTTONS (Matt's explicit requirement).
// Real <Link>s to the five routes — keyboard + touch operable, ≥44px targets,
// pod-accent dot, visible focus. Replaces the six hover-only flip cards.
//
// variant:
//  - "chips"   compact row/grid under the hero + in the footer
//  - "cards"   the homepage Industries section (chip + one native pain line)

type Variant = "chips" | "cards";

export default function SectorButtons({
  variant = "chips",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const pathname = usePathname();

  if (variant === "cards") {
    return (
      <ul className={`grid gap-3 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
        {SECTORS.map((s) => {
          const active = pathname === s.href;
          return (
            <li key={s.slug} data-pod={s.slug}>
              <Link
                href={s.href}
                aria-current={active ? "page" : undefined}
                className={`group flex items-start gap-3 rounded-[var(--radius-md)] border bg-[var(--color-canvas-raised)] p-4 min-h-[44px] transition-[background,border-color,transform,box-shadow] duration-150 hover:-translate-y-px hover:shadow-[var(--shadow-sm)] motion-reduce:transform-none ${
                  active
                    ? "border-[var(--pod-accent)] bg-[var(--pod-accent-tint)]"
                    : "border-[var(--color-hairline)] hover:border-[var(--pod-accent)] hover:bg-[var(--pod-accent-tint)]"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-[var(--radius-sm)] bg-[var(--pod-accent-tint)] text-[var(--pod-accent-deep)]"
                >
                  <PodIcon icon={s.icon} size={20} />
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-2">
                    <span className="font-semibold text-[var(--color-ink)]">{s.label}</span>
                    <span aria-hidden="true" className="h-1.5 w-1.5 flex-none rounded-full bg-[var(--pod-accent)]" />
                  </span>
                  <span className="mt-0.5 block text-sm leading-snug text-[var(--color-ink-secondary)]">
                    {s.sectorPain}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {SECTORS.map((s) => {
        const active = pathname === s.href;
        return (
          <li key={s.slug} data-pod={s.slug}>
            <Link
              href={s.href}
              aria-current={active ? "page" : undefined}
              className={`inline-flex items-center gap-2 rounded-[var(--radius-pill)] border px-3.5 py-2 min-h-[44px] text-sm font-medium transition-[background,border-color,transform] duration-150 hover:-translate-y-px motion-reduce:transform-none ${
                active
                  ? "border-[var(--pod-accent)] bg-[var(--pod-accent-tint)] text-[var(--color-ink)]"
                  : "border-[var(--color-hairline)] bg-[var(--color-canvas-raised)] text-[var(--color-ink)] hover:border-[var(--pod-accent)] hover:bg-[var(--pod-accent-tint)]"
              }`}
            >
              <span aria-hidden="true" className="text-[var(--pod-accent-deep)]">
                <PodIcon icon={s.icon} size={17} />
              </span>
              {s.label}
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--pod-accent)]" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
