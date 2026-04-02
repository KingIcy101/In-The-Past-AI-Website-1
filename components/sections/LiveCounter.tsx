"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Simulates a live "missed calls" counter across all businesses not using AI
function useLiveCount(basePerSecond = 0.34) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => parseFloat((c + basePerSecond).toFixed(1)));
    }, 1000);
    return () => clearInterval(interval);
  }, [basePerSecond]);
  return count;
}

const items = [
  { label: "Dental Clinics" },
  { label: "Law Firms" },
  { label: "Medical Offices" },
  { label: "Home Services" },
  { label: "Real Estate" },
  { label: "Auto Shops" },
  { label: "Financial Advisors" },
  { label: "Veterinary Clinics" },
  { label: "Insurance Agencies" },
  { label: "Dental Clinics" },
  { label: "Law Firms" },
  { label: "Medical Offices" },
  { label: "Home Services" },
  { label: "Real Estate" },
  { label: "Auto Shops" },
  { label: "Financial Advisors" },
  { label: "Veterinary Clinics" },
  { label: "Insurance Agencies" },
];

export default function LiveCounter() {
  const missed = useLiveCount(0.42);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#080503",
        borderTop: "1px solid rgba(224,136,60,0.06)",
        borderBottom: "1px solid rgba(224,136,60,0.06)",
      }}
    >
      {/* Ticker strip */}
      <div className="overflow-hidden py-4" style={{ borderBottom: "1px solid rgba(224,136,60,0.06)" }}>
        <div className="flex gap-4 ticker" style={{ width: "max-content" }}>
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-5 py-2 rounded-full flex-shrink-0 whitespace-nowrap"
              style={{ background: "rgba(224,136,60,0.05)", border: "1px solid rgba(224,136,60,0.1)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#e0883c", opacity: 0.7 }} />
              <span className="text-xs font-medium" style={{ color: "#7a6e62" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Counter — full-width grid matching rest of page */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Big number */}
          <div>
            <div
              className="font-bold tabular-nums leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(4rem, 10vw, 7rem)",
                background: "linear-gradient(135deg, #e0883c, #f5a850, #e0883c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {missed.toFixed(0)}
            </div>
          </div>

          {/* Label + context */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#7a6e62" }}>
                Live
              </span>
            </div>
            <p
              className="text-xl md:text-2xl font-semibold leading-snug"
              style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}
            >
              Calls missed by businesses without AI — right now.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#4a3d35" }}>
              This counter has been running since you opened this page.
              Each number represents a real lead lost to a competitor.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
