"use client";

import { useCalModal } from "@/contexts/CalModalContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { label: "Services",   href: "#services" },
  { label: "Demo",       href: "#demo" },
  { label: "Industries", href: "#industries" },
  { label: "FAQ",        href: "#faq" },
];

export default function FloatingNav() {
  const { open: openCal } = useCalModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scroll = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? "rgba(10,7,4,0.97)" : "rgba(10,7,4,0.82)",
          borderBottom: `1px solid ${scrolled ? "rgba(224,136,60,0.18)" : "rgba(224,136,60,0.09)"}`,
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.55)" : "none",
          transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-[70px]">

            {/* Logo */}
            <a href="/" className="flex items-center gap-3 flex-shrink-0">
              <Image src="/logo.png" alt="In The Past AI" width={44} height={44} className="object-contain" />
              <div className="flex flex-col leading-none">
                <span
                  className="text-base font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}
                >
                  In The Past AI
                </span>
                <span
                  className="text-xs font-medium tracking-[0.12em] uppercase hidden sm:block"
                  style={{ color: "rgba(224,136,60,0.55)" }}
                >
                  Any Industry · Always On
                </span>
              </div>
            </a>

            {/* Center links */}
            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <button
                  key={l.label}
                  onClick={() => scroll(l.href)}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 cursor-pointer"
                  style={{ color: "#f2ece0" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#f2ece0";
                    (e.currentTarget as HTMLElement).style.background = "rgba(224,136,60,0.07)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#f2ece0";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  {l.label}
                </button>
              ))}
            </nav>

            {/* Right: CTA */}
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => openCal()}
                className="btn-shine nav-cta-glow hidden xs:inline-flex sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold cursor-pointer transition-transform duration-200 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #f5aa60, #e07830, #b05020)",
                  color: "#2a1206",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px) scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "";
                }}
              >
                Book a Discovery Call <span style={{ opacity: 0.75 }}>→</span>
              </button>

              {/* Mobile toggle */}
              <button
                className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <span style={{ width: 20, height: 1.5, background: "#e0883c", display: "block", transition: "all 0.2s", transform: mobileOpen ? "rotate(45deg) translate(2px, 2px)" : "" }} />
                <span style={{ width: 20, height: 1.5, background: "#e0883c", display: "block", opacity: mobileOpen ? 0 : 1, transition: "all 0.2s" }} />
                <span style={{ width: 20, height: 1.5, background: "#e0883c", display: "block", transition: "all 0.2s", transform: mobileOpen ? "rotate(-45deg) translate(2px, -2px)" : "" }} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              style={{
                overflow: "hidden",
                borderTop: "1px solid rgba(224,136,60,0.1)",
                background: "rgba(10,7,4,0.99)",
              }}
            >
              <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col gap-1">
                {links.map((l) => (
                  <button
                    key={l.label}
                    onClick={() => scroll(l.href)}
                    className="px-4 py-3 rounded-xl text-sm text-left cursor-pointer transition-all"
                    style={{ color: "#f2ece0" }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "rgba(224,136,60,0.08)"}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "transparent"}
                  >
                    {l.label}
                  </button>
                ))}
                <button type="button" onClick={() => openCal()}
                  className="btn-shine nav-cta-glow mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-center cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #f5aa60, #e07830, #b05020)",
                    color: "#2a1206",
                  }}
                >
                  Book a Discovery Call
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

    </>
  );
}

function HourglassMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M4 2h12M4 18h12" stroke="#e0883c" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 2v3l5 5-5 5v3" stroke="#e0883c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 2v3l-5 5 5 5v3" stroke="#e0883c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="10" r="1.5" fill="#e0883c" opacity="0.8" />
    </svg>
  );
}
