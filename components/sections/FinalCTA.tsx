"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconCheck } from "@/components/ui/Icons";
import MagneticButton from "@/components/ui/MagneticButton";
import ScrollReveal3D from "@/components/ui/ScrollReveal3D";
import CalModal from "@/components/ui/CalModal";

export default function FinalCTA() {
  const [calOpen, setCalOpen] = useState(false);

  return (
    <>
      <CalModal isOpen={calOpen} onClose={() => setCalOpen(false)} />

      <section
        className="relative py-36 px-6 overflow-hidden"
        style={{ background: "#0a0704" }}
      >
        {/* Massive background text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-bold gradient-amber opacity-[0.04] leading-none text-center"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4rem, 22vw, 22rem)",
              whiteSpace: "nowrap",
            }}
          >
            ANSWER
          </span>
        </div>

        {/* Amber glow top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(224,136,60,0.4), transparent)" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] mb-6"
            style={{ color: "rgba(224,136,60,0.6)" }}
          >
            Ready to start?
          </motion.p>

          <ScrollReveal3D
            as="h2"
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
            style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}
            delay={0.08}
            lines={[
              { text: "Stop losing calls." },
              { text: "Start booking more.", className: "gradient-amber" },
            ]}
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
            style={{ color: "#f2ece0" }}
          >
            Join 250+ businesses that never miss a call, never lose a lead,
            and never stop booking — even while they sleep.
            <br />
            <span style={{ color: "#f2ece0" }}>Live within days. Built around your business.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            {/* Primary — magnetic + shine */}
            <MagneticButton>
              <button
                onClick={() => setCalOpen(true)}
                className="btn-shine px-7 py-4 rounded-full text-sm font-semibold cursor-pointer inline-block"
                style={{
                  background: "linear-gradient(135deg, #f0a050, #d07030, #a84820)",
                  color: "#0a0704",
                  boxShadow: "0 4px 24px rgba(224,136,60,0.3)",
                }}
              >
                Book a Discovery Call →
              </button>
            </MagneticButton>

            {/* Secondary buttons */}
            {[
              { label: "Talk to Our Team" },
              { label: "See How It Works" },
            ].map((btn) => (
              <button
                key={btn.label}
                onClick={() => setCalOpen(true)}
                className="px-7 py-4 rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 inline-block"
                style={{
                  background: "rgba(224,136,60,0.07)",
                  color: "#e0883c",
                  border: "1px solid rgba(224,136,60,0.2)",
                }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.transform = ""}
              >
                {btn.label}
              </button>
            ))}
          </motion.div>

          {/* Guarantee chips */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.36 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {["Live within days", "White-glove setup included", "Dedicated support", "Built for your industry"].map((chip) => (
              <span key={chip} className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "#f2ece0" }}>
                <IconCheck size={13} /> {chip}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-center mt-28">
          <div className="sep mb-8 max-w-3xl mx-auto" />
          <p className="text-sm" style={{ color: "#f2ece0" }}>
            © {new Date().getFullYear()} In The Past AI · AI-powered reception for modern businesses
          </p>
        </div>
      </section>
    </>
  );
}
