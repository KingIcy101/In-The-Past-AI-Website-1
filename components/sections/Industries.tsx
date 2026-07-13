"use client";

import { useCalModal } from "@/contexts/CalModalContext";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconTooth, IconScales, IconMedicalCross, IconHomeWrench, IconBuilding, IconCar } from "@/components/ui/Icons";
import ScrollReveal3D from "@/components/ui/ScrollReveal3D";

const industries = [
  {
    Icon: IconTooth,
    name: "Dental Clinics",
    tagline: "Fill every chair. Miss no patient.",
    desc: "AI handles appointment reminders, insurance queries, and new patient bookings around the clock. Cut no-shows by up to 40%.",
  },
  {
    Icon: IconScales,
    name: "Law Firms",
    tagline: "Every case starts with a call.",
    desc: "Capture leads after hours, qualify potential clients instantly, and schedule consultations automatically. Never let a case walk away.",
  },
  {
    Icon: IconMedicalCross,
    name: "Medical Practices",
    tagline: "Patients can't wait on hold.",
    desc: "Handle high call volumes without adding staff. Intelligent intake, appointment management, and after-hours coverage — always available.",
  },
  {
    Icon: IconHomeWrench,
    name: "Home Services",
    tagline: "Emergencies don't respect business hours.",
    desc: "Never miss an emergency call. Book jobs, dispatch crews, and follow up on quotes automatically — even at 2am on a Sunday.",
  },
  {
    Icon: IconBuilding,
    name: "Real Estate",
    tagline: "The market moves fast. So does your AI.",
    desc: "Qualify buyers and sellers, schedule showings, and capture leads from open houses around the clock. Stay ahead of the competition.",
  },
  {
    Icon: IconCar,
    name: "Auto Shops",
    tagline: "Keep your bays full year-round.",
    desc: "Handle appointment bookings, service reminders, and customer follow-ups automatically. More repeat business, less phone tag.",
  },
];

function FlipCard({ ind, index }: { ind: typeof industries[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: "1100px", height: 290 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          position: "relative",
        }}
      >

        {/* ── FRONT FACE ─────────────────────────────── */}
        <div
          style={{
            position: "absolute", inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            borderRadius: 16,
            background: "rgba(16,11,7,0.94)",
            border: "1px solid rgba(224,136,60,0.13)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            padding: 32,
          }}
        >
          {/* Pulsing icon */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px rgba(224,136,60,0)",
                "0 0 22px rgba(224,136,60,0.22)",
                "0 0 0px rgba(224,136,60,0)",
              ],
            }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: index * 0.35 }}
            style={{
              width: 60, height: 60,
              borderRadius: 17,
              background: "rgba(224,136,60,0.08)",
              border: "1px solid rgba(224,136,60,0.18)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <ind.Icon size={30} />
          </motion.div>

          {/* Industry name */}
          <p style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.2rem",
            color: "#f2ece0",
            textAlign: "center",
            lineHeight: 1.2,
          }}>
            {ind.name}
          </p>

          {/* Flip hint */}
          <p style={{
            fontSize: "0.85rem",
            color: "rgba(224,136,60,0.6)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginTop: 4,
          }}>
            hover to reveal
          </p>

          {/* Bottom amber line that lights up on hover */}
          <motion.div
            animate={{ opacity: flipped ? 0 : 1, scaleX: flipped ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              bottom: 0,
              left: "20%",
              right: "20%",
              height: 1,
              background: "linear-gradient(90deg, transparent, rgba(224,136,60,0.25), transparent)",
              borderRadius: 1,
            }}
          />
        </div>

        {/* ── BACK FACE ──────────────────────────────── */}
        <div
          style={{
            position: "absolute", inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: 16,
            background: "linear-gradient(140deg, rgba(224,136,60,0.13) 0%, rgba(10,7,4,0.97) 60%)",
            border: "1px solid rgba(224,136,60,0.26)",
            boxShadow: "0 0 40px rgba(224,136,60,0.06) inset",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "22px 24px 20px",
          }}
        >
          {/* Icon + name row */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 13 }}>
              <div style={{
                width: 36, height: 36,
                borderRadius: 10,
                background: "rgba(224,136,60,0.12)",
                border: "1px solid rgba(224,136,60,0.24)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <ind.Icon size={18} />
              </div>
              <p style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#f2ece0",
              }}>
                {ind.name}
              </p>
            </div>

            {/* Tagline */}
            <p style={{
              fontSize: "0.85rem",
              fontWeight: 600,
              fontStyle: "italic",
              color: "#e0883c",
              marginBottom: 10,
              lineHeight: 1.45,
            }}>
              &ldquo;{ind.tagline}&rdquo;
            </p>

            {/* Divider */}
            <div style={{
              height: 1,
              background: "rgba(224,136,60,0.12)",
              marginBottom: 10,
            }} />

            {/* Description */}
            <p style={{ fontSize: "0.85rem", color: "#f2ece0", lineHeight: 1.65 }}>
              {ind.desc}
            </p>
          </div>

          {/* CTA */}
          <p style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "rgba(224,136,60,0.85)",
          }}>
            AI voice + chat →
          </p>
        </div>

      </motion.div>
    </motion.div>
  );
}

export default function Industries() {
  const { open: openCal } = useCalModal();
  return (
    <section id="industries" className="py-28" style={{ background: "#0a0704" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "rgba(224,136,60,0.6)" }}>
            Industries We Power
          </p>
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
            <ScrollReveal3D
              as="h2"
              className="text-4xl md:text-5xl font-bold leading-tight shrink-0"
              style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}
              lines={[
                { text: "Built for your" },
                { text: "industry.", className: "gradient-amber" },
              ]}
            />
            <p className="text-sm leading-relaxed max-w-sm md:pb-1" style={{ color: "#f2ece0" }}>
              Our AI knows your business — your terms, your workflows, your customers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <FlipCard key={ind.name} ind={ind} index={i} />
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div
          className="mt-10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            background: "linear-gradient(135deg, rgba(224,136,60,0.12) 0%, rgba(10,7,4,0.97) 60%)",
            border: "1px solid rgba(224,136,60,0.22)",
            boxShadow: "0 0 60px rgba(224,136,60,0.06) inset",
          }}
        >
          <div>
            <p
              className="text-2xl md:text-3xl font-bold mb-3 leading-snug"
              style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}
            >
              We build voice agents for{" "}
              <span className="gradient-amber">any industry.</span>
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#f2ece0", maxWidth: "52ch" }}>
              Don&apos;t see yours above? We&apos;ve built for dozens of verticals. If your business runs on calls, we can automate it.
            </p>
          </div>
          <button
            onClick={() => openCal()}
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-all duration-200 whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg, #f0a050, #d07030, #a84820)",
              color: "#0a0704",
              boxShadow: "0 4px 24px rgba(224,136,60,0.3)",
            }}
          >
            Schedule a Call →
          </button>
        </div>
      </div>
    </section>
  );
}
