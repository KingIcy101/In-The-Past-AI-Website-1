"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useCalModal } from "@/contexts/CalModalContext";
import { SECTORS } from "@/lib/marketing/market-pods";
import PodIcon from "@/components/marketing/PodIcon";

// Route-aware site header (replaces the homepage-anchor-only FloatingNav —
// validation amendment 1). Section links resolve to the homepage from any
// route (`/#services` off-home), and Industries is a real menu of five <Link>s
// so nav never becomes a silent no-op on a pod page.
const SECTION_LINKS = [
  { label: "How we work", hash: "#how-we-work" },
  { label: "Demo", hash: "#demo" },
  { label: "FAQ", hash: "#faq" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { open: openCal } = useCalModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Menus close via the nav Links' own onClick handlers and via
  // outside-click / Escape below — fully event-driven, no route-change effect.
  const closeMenus = () => {
    setMobileOpen(false);
    setIndustriesOpen(false);
  };

  // Close the Industries menu on outside-click / Escape.
  useEffect(() => {
    if (!industriesOpen) return;
    const onDoc = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setIndustriesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIndustriesOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [industriesOpen]);

  // Section links: smooth-scroll on home, navigate to /#hash from a pod page.
  const goSection = (hash: string) => {
    setMobileOpen(false);
    if (onHome) {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push(`/${hash}`);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-b border-[var(--color-hairline)] bg-[color-mix(in_srgb,var(--color-canvas)_92%,transparent)] shadow-[var(--shadow-sm)] backdrop-blur-md"
          : "border-b border-transparent bg-[color-mix(in_srgb,var(--color-canvas)_70%,transparent)] backdrop-blur-sm"
      }`}
    >
      <div className="container-wide flex h-[68px] items-center justify-between">
        <Link href="/" className="flex flex-shrink-0 items-center gap-2.5">
          <Image src="/logo.png" alt="" width={34} height={34} className="object-contain" />
          <span className="flex flex-col leading-none">
            <span className="font-[var(--font-display)] text-[1.05rem] font-medium text-[var(--color-ink)]">
              In The Past AI
            </span>
            <span className="mt-0.5 hidden text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-muted)] sm:block">
              AI operations for local business
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              aria-expanded={industriesOpen}
              aria-controls="industries-menu"
              onClick={() => setIndustriesOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-[var(--radius-sm)] px-3.5 py-2 text-[0.95rem] font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-amber-deep)]"
            >
              Industries
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className={`transition-transform ${industriesOpen ? "rotate-180" : ""}`}>
                <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {industriesOpen && (
              <div
                id="industries-menu"
                className="absolute left-0 top-[calc(100%+8px)] w-64 rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-canvas-raised)] p-2 shadow-[var(--shadow-lg)]"
              >
                {SECTORS.map((s) => (
                  <Link
                    key={s.slug}
                    href={s.href}
                    data-pod={s.slug}
                    aria-current={pathname === s.href ? "page" : undefined}
                    onClick={closeMenus}
                    className="flex items-center gap-3 rounded-[var(--radius-sm)] px-3 py-2.5 text-sm text-[var(--color-ink)] transition-colors hover:bg-[var(--pod-accent-tint)]"
                  >
                    <span className="text-[var(--pod-accent-deep)]">
                      <PodIcon icon={s.icon} size={18} />
                    </span>
                    {s.name ?? s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {SECTION_LINKS.map((l) => (
            <button
              key={l.label}
              type="button"
              onClick={() => goSection(l.hash)}
              className="rounded-[var(--radius-sm)] px-3.5 py-2 text-[0.95rem] font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-amber-deep)]"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => openCal()}
            className="hidden min-h-[44px] items-center gap-1.5 rounded-[var(--radius-pill)] bg-[var(--color-amber)] px-5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-amber-deep)] sm:inline-flex"
          >
            Book a call
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-5 bg-[var(--color-ink)] transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-[var(--color-ink)] transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-[var(--color-ink)] transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile disclosure */}
      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-[var(--color-hairline)] bg-[var(--color-canvas)] md:hidden">
          <div className="container-wide flex flex-col gap-1 py-3">
            <p className="px-2 pt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
              Industries
            </p>
            {SECTORS.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                data-pod={s.slug}
                onClick={closeMenus}
                className="flex min-h-[44px] items-center gap-3 rounded-[var(--radius-sm)] px-3 text-[var(--color-ink)] hover:bg-[var(--pod-accent-tint)]"
              >
                <span className="text-[var(--pod-accent-deep)]">
                  <PodIcon icon={s.icon} size={18} />
                </span>
                {s.name ?? s.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-[var(--color-hairline)]" />
            {SECTION_LINKS.map((l) => (
              <button
                key={l.label}
                type="button"
                onClick={() => goSection(l.hash)}
                className="flex min-h-[44px] items-center rounded-[var(--radius-sm)] px-3 text-left text-[var(--color-ink)] hover:bg-[var(--color-canvas-sunken)]"
              >
                {l.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => { setMobileOpen(false); openCal(); }}
              className="mt-2 flex min-h-[48px] items-center justify-center rounded-[var(--radius-pill)] bg-[var(--color-amber)] px-5 font-semibold text-white"
            >
              Book a discovery call
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
