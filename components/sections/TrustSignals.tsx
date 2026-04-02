"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(target: number, duration: number, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return val;
}

interface StatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sub?: string;
  custom?: string;
  index: number;
  sectionInView: boolean;
}

function BigStat({ value, suffix = "", prefix = "", label, sub, custom, index, sectionInView }: StatProps) {
  const count = useCountUp(value, 2500, sectionInView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 22 }}
      animate={sectionInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.85,
        delay: 0.2 + index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ transformPerspective: 900 }}
      className="text-center py-8 md:py-0"
    >
      <div
        className="font-bold leading-none tabular-nums"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 4rem)",
          background: "linear-gradient(135deg, #e0883c 0%, #f5a850 50%, #8a3c14 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {custom ?? `${prefix}${count.toLocaleString()}${suffix}`}
      </div>
      <p
        className="text-base font-semibold mt-3 uppercase tracking-wider"
        style={{ color: "#f2ece0", fontFamily: "var(--font-display)" }}
      >
        {label}
      </p>
      {sub && <p className="text-xs mt-1" style={{ color: "#4a3d35" }}>{sub}</p>}
    </motion.div>
  );
}

export default function TrustSignals() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#0a0704" }}
    >
      {/* Ambient glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(224,136,60,0.06) 0%, transparent 70%)",
        }}
      />

      {/* 3D fold-in container */}
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, rotateX: 14, y: 60, scale: 0.94 }}
        animate={sectionInView ? { opacity: 1, rotateX: 0, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformPerspective: 1200 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "rgba(224,136,60,0.5)" }}>
            By the numbers
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-0"
          style={{ borderTop: "1px solid rgba(224,136,60,0.08)", borderBottom: "1px solid rgba(224,136,60,0.08)" }}
        >
          {[
            { value: 42680, suffix: "+", label: "Calls Handled", sub: "and counting" },
            { value: 13820, suffix: "+", label: "Appointments Booked", sub: "confirmed & attended" },
            { value: 0,     label: "Avg Response Time", custom: "< 4s", sub: "every single time" },
          ].map((s, i) => (
            <div
              key={s.label}
              className="py-12 px-8"
              style={i < 2 ? { borderRight: "1px solid rgba(224,136,60,0.08)" } : {}}
            >
              <BigStat {...s} index={i} sectionInView={sectionInView} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm" style={{ color: "#4a3d35" }}>
            Across 250+ active deployments · Updated in real time
          </p>
        </div>
      </motion.div>
    </section>
  );
}
