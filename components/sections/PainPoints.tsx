"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal3D from "@/components/ui/ScrollReveal3D";

const pain = [
  {
    stat: "31%",
    emphasis: "Of callers never call back",
    detail:
      "When someone hits voicemail, nearly one in three immediately dials a competitor. That's business you'll never get a second chance to win.",
    aside: "Gone. Permanently.",
  },
  {
    stat: "47%",
    emphasis: "Of business calls happen after hours",
    detail:
      "While your team is off the clock, almost half your calls are going to voicemail. Your competitors' AI agents are answering every single one.",
    aside: "While you sleep.",
  },
  {
    stat: "$52K+",
    emphasis: "In annual revenue lost per business",
    detail:
      "The average business loses over $52,000 a year to missed calls and uncontacted leads. That's a full hire, a full ad budget, or a year of growth — gone.",
    aside: "Every. Year.",
  },
];

function PainRow({ item, index }: { item: typeof pain[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reverse = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-16 py-16 md:py-20`}
      style={{ borderBottom: "1px solid rgba(224,136,60,0.06)" }}
    >
      {/* Huge number — 3D perspective scale-up */}
      <div className="flex-1 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.65, y: 50, rotateX: 30 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-bold leading-none gradient-amber"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(5rem, 14vw, 11rem)",
            transformPerspective: 900,
          }}
        >
          {item.stat}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-sm mt-3 font-medium uppercase tracking-widest"
          style={{ color: "rgba(224,136,60,0.4)" }}
        >
          {item.aside}
        </motion.p>
      </div>

      {/* Text */}
      <div className="flex-1 max-w-md">
        <motion.div
          initial={{ opacity: 0, x: reverse ? -28 : 28, rotateY: reverse ? -8 : 8 }}
          animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformPerspective: 800 }}
        >
          <div
            className="w-10 h-px mb-5"
            style={{ background: "rgba(224,136,60,0.4)" }}
          />
          <h3
            className="text-2xl md:text-3xl font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}
          >
            {item.emphasis}
          </h3>
          <p className="text-base leading-relaxed" style={{ color: "#7a6e62" }}>
            {item.detail}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function PainPoints() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#0a0704" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="pt-20 pb-4">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "rgba(224,136,60,0.5)" }}
          >
            The problem
          </p>
        </div>

        <ScrollReveal3D
          as="h2"
          className="text-4xl md:text-5xl font-bold leading-tight mb-2"
          style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}
          lines={[
            { text: "Every missed call" },
            { text: "costs you money.", className: "gradient-amber" },
          ]}
        />
        <p className="text-base mb-0" style={{ color: "#7a6e62" }}>
          The numbers don&apos;t lie.
        </p>

        <div>
          {pain.map((item, i) => (
            <PainRow key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
