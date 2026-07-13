"use client";

import Link from "next/link";
import PodIcon from "@/components/marketing/PodIcon";
import { SECTORS, type PodSlug } from "@/lib/marketing/market-pods";

// Small aesthetic sector buttons (Matt's ask) — dark-brand, one per industry,
// each with its own accent dot. Additive; links to the five industry pages.
const DOT: Record<PodSlug, string> = {
  "auto-repair": "#E8623A",
  hvac: "#3FA9DE",
  dental: "#35BBA6",
  roofing: "#6E93C4",
  "med-spa": "#CE7DB8",
};

export default function SectorButtons({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap justify-center gap-2.5 ${className}`}>
      {SECTORS.map((s) => (
        <li key={s.slug}>
          <Link
            href={s.href}
            className="group inline-flex min-h-[44px] items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-150 hover:-translate-y-0.5"
            style={{
              background: "rgba(16,11,7,0.9)",
              border: "1px solid rgba(224,136,60,0.16)",
              color: "#f2ece0",
            }}
          >
            <span style={{ color: DOT[s.slug] }}>
              <PodIcon icon={s.icon} size={17} />
            </span>
            {s.label}
            <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ background: DOT[s.slug] }} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
