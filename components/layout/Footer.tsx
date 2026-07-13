import Link from "next/link";
import Image from "next/image";
import { SECTORS } from "@/lib/marketing/market-pods";

// Real multi-column footer (validation amendment 10 — sector links live here
// too). Only real links: five routes, product surfaces that exist, legal pages,
// contact email. No fabricated proof.
export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-hairline)] bg-[var(--color-canvas)]">
      <div className="container-wide grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="" width={30} height={30} className="object-contain" />
            <span className="font-[var(--font-display)] text-[1.05rem] text-[var(--color-ink)]">In The Past AI</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--color-ink-secondary)]">
            We start with the calls you miss, then build the operating system around them —
            follow-up, booking, reporting, and internal tools per industry.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">Industries</p>
          <ul className="mt-4 space-y-2.5">
            {SECTORS.map((s) => (
              <li key={s.slug} data-pod={s.slug}>
                <Link href={s.href} className="text-sm text-[var(--color-ink-secondary)] transition-colors hover:text-[var(--pod-accent-deep)]">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">Product</p>
          <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-ink-secondary)]">
            <li><Link href="/#demo" className="transition-colors hover:text-[var(--color-amber-deep)]">Hear the demo</Link></li>
            <li><Link href="/auto-repair-intake" className="transition-colors hover:text-[var(--color-amber-deep)]">Auto repair intake</Link></li>
            <li><Link href="/dental-intake" className="transition-colors hover:text-[var(--color-amber-deep)]">Dental intake</Link></li>
            <li><Link href="/client" className="transition-colors hover:text-[var(--color-amber-deep)]">Client portal</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">Company</p>
          <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-ink-secondary)]">
            <li><a href="mailto:hello@inthepast.ai" className="transition-colors hover:text-[var(--color-amber-deep)]">hello@inthepast.ai</a></li>
            <li><Link href="/privacy" className="transition-colors hover:text-[var(--color-amber-deep)]">Privacy</Link></li>
            <li><Link href="/terms" className="transition-colors hover:text-[var(--color-amber-deep)]">Terms</Link></li>
            <li><Link href="/subprocessors" className="transition-colors hover:text-[var(--color-amber-deep)]">Subprocessors</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--color-hairline)]">
        <div className="container-wide flex items-center justify-between py-5 text-xs text-[var(--color-ink-muted)]">
          <span>© 2026 In The Past AI</span>
          <span>Answer. Follow up. Operate.</span>
        </div>
      </div>
    </footer>
  );
}
