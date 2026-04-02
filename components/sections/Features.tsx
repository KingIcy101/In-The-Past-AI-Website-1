"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal3D from "@/components/ui/ScrollReveal3D";
import {
  IconClock, IconTarget, IconCalendar, IconDatabase,
  IconSmartphone, IconMoon, IconChat, IconBell, IconBook,
} from "@/components/ui/Icons";

const FEATURES = [
  {
    id: "01", Icon: IconClock,
    title: "24/7 Call Handling",
    short: "Every call. Every hour.",
    desc: "Every inbound call answered in under 4 seconds — day, night, weekends, and holidays. Your AI receptionist never clocks out, never puts callers on hold, never has a bad day.",
    stat: "< 4s", statLabel: "avg answer time",
    points: ["Zero missed calls, guaranteed", "No hold times — ever", "Consistent quality 24/7", "Instant call logging & recording"],
  },
  {
    id: "02", Icon: IconTarget,
    title: "Smart Lead Qualification",
    short: "Sort the serious from the curious.",
    desc: "The AI asks the right questions, scores each lead in real-time, and routes only qualified prospects to your team — or books them directly into your calendar without human involvement.",
    stat: "3×", statLabel: "more qualified leads",
    points: ["Custom qualification criteria", "Instant lead scoring", "Auto-routing by priority", "Full lead profile sent to CRM"],
  },
  {
    id: "03", Icon: IconCalendar,
    title: "Appointment Booking",
    short: "From call to calendar in seconds.",
    desc: "Live calendar integration means the AI books appointments during the call itself — no callbacks, no email chains, no double bookings, no human required at any step.",
    stat: "94%", statLabel: "booking success rate",
    points: ["Real-time calendar sync", "Eliminates double bookings", "Confirmation SMS sent instantly", "Handles reschedules & cancellations"],
  },
  {
    id: "04", Icon: IconDatabase,
    title: "CRM Auto-Updates",
    short: "Every detail, captured automatically.",
    desc: "Every call, contact, note, and outcome logged to your CRM automatically. HubSpot, Salesforce, GoHighLevel — complete records with zero manual entry from your team.",
    stat: "100%", statLabel: "calls logged automatically",
    points: ["HubSpot & Salesforce ready", "Custom field mapping", "Full call transcripts included", "Pipeline & deal updates"],
  },
  {
    id: "05", Icon: IconSmartphone,
    title: "Live Call Transfers",
    short: "Urgent calls never wait.",
    desc: "When a caller needs a human, your AI warm-transfers instantly — briefing your team with full caller context before they even pick up, so the handoff feels seamless.",
    stat: "< 8s", statLabel: "avg transfer time",
    points: ["Instant warm transfers", "Full caller context briefed ahead", "Priority routing rules", "After-hours escalation paths"],
  },
  {
    id: "06", Icon: IconMoon,
    title: "After-Hours Coverage",
    short: "Midnight calls, handled.",
    desc: "After 6PM your AI doesn't slow down. It captures every lead, qualifies every caller, and books every appointment while your team sleeps — so nothing falls through the cracks.",
    stat: "38%", statLabel: "of leads arrive after hours",
    points: ["Overnight & weekend call handling", "Same quality experience 24/7", "Holiday auto-mode", "Morning lead summary reports"],
  },
  {
    id: "07", Icon: IconChat,
    title: "Website Chat Widget",
    short: "Turn visitors into clients.",
    desc: "A smart AI chat widget on your website qualifies visitors, answers questions, and books appointments automatically — without any human in the loop, even at 3AM.",
    stat: "4×", statLabel: "more website conversions",
    points: ["Instant visitor engagement", "Lead capture & qualification", "Seamless booking flow", "Fully branded to your site"],
  },
  {
    id: "08", Icon: IconBell,
    title: "Real-Time Alerts",
    short: "Know the moment it matters.",
    desc: "New bookings, hot leads, and urgent calls trigger instant Slack or Teams notifications — so your team stays in the loop without babysitting a dashboard all day.",
    stat: "< 30s", statLabel: "notification speed",
    points: ["Slack & Teams integrations", "Custom alert triggers", "New booking notifications", "Hot lead escalation alerts"],
  },
  {
    id: "09", Icon: IconBook,
    title: "Custom Knowledge Base",
    short: "Your AI. Your brand. Your rules.",
    desc: "Train your AI on your exact services, pricing, FAQs, and tone of voice. It responds exactly as you would — just faster, more consistently, and always available.",
    stat: "100%", statLabel: "on-brand responses",
    points: ["Custom scripts & pricing data", "Brand voice training", "Full FAQ automation", "Continuous refinement over time"],
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const feat = FEATURES[active];

  return (
    <section className="py-28 px-6" style={{ background: "#080503" }}>
      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "rgba(224,136,60,0.6)" }}>
            Features
          </p>
          <ScrollReveal3D
            as="h2"
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}
            lines={[
              { text: "Everything you need." },
              { text: "Nothing you don\u2019t.", className: "gradient-amber" },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-3 lg:gap-5 items-start">

          {/* ── Left: selector list ── */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: "rgba(10,7,4,0.7)", border: "1px solid rgba(224,136,60,0.08)" }}
          >
            {FEATURES.map((f, i) => (
              <button
                key={f.id}
                onClick={() => setActive(i)}
                className="w-full text-left flex items-center gap-3 px-4 py-3 transition-all duration-200 relative"
                style={{
                  borderBottom: i < FEATURES.length - 1 ? "1px solid rgba(224,136,60,0.06)" : "none",
                  background: active === i ? "rgba(224,136,60,0.08)" : "transparent",
                }}
              >
                {/* Active bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-200 rounded-r"
                  style={{ background: active === i ? "#e0883c" : "transparent" }}
                />

                <span
                  className="text-[9px] font-bold w-5 flex-shrink-0"
                  style={{ color: active === i ? "#e0883c" : "rgba(224,136,60,0.22)" }}
                >
                  {f.id}
                </span>

                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={{ background: active === i ? "rgba(224,136,60,0.14)" : "transparent" }}
                >
                  <f.Icon size={13} color={active === i ? "#e0883c" : "#4a3d35"} />
                </div>

                <div className="flex-1 min-w-0">
                  <p
                    className="text-xs font-semibold truncate transition-colors duration-200"
                    style={{ color: active === i ? "#f2ece0" : "#7a6e62" }}
                  >
                    {f.title}
                  </p>
                  {active === i && (
                    <p className="text-[10px] mt-0.5 truncate" style={{ color: "rgba(224,136,60,0.5)" }}>
                      {f.short}
                    </p>
                  )}
                </div>

                {active === i && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="flex-shrink-0">
                    <path d="M2 5h6M5 2l3 3-3 3" stroke="#e0883c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* ── Right: detail panel ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="rounded-2xl p-8 lg:p-10 sticky top-28"
              style={{
                background: "linear-gradient(140deg, rgba(224,136,60,0.09) 0%, rgba(10,7,4,0.97) 55%)",
                border: "1px solid rgba(224,136,60,0.18)",
                minHeight: 400,
              }}
            >
              {/* Icon + stat */}
              <div className="flex items-start justify-between mb-8">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "rgba(224,136,60,0.1)",
                    border: "1px solid rgba(224,136,60,0.22)",
                    boxShadow: "0 0 24px rgba(224,136,60,0.08)",
                  }}
                >
                  <feat.Icon size={26} />
                </div>
                <div className="text-right">
                  <div
                    className="font-bold gradient-amber leading-none"
                    style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 2.8vw, 2.4rem)" }}
                  >
                    {feat.stat}
                  </div>
                  <div className="text-[10px] mt-1 uppercase tracking-wider" style={{ color: "#7a6e62" }}>
                    {feat.statLabel}
                  </div>
                </div>
              </div>

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] mb-2" style={{ color: "rgba(224,136,60,0.4)" }}>
                Feature {feat.id}
              </p>

              <h3
                className="text-2xl md:text-3xl font-bold mb-4 leading-tight"
                style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}
              >
                {feat.title}
              </h3>

              <p className="text-sm leading-relaxed mb-8" style={{ color: "#7a6e62", maxWidth: "52ch" }}>
                {feat.desc}
              </p>

              {/* Proof points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {feat.points.map((p) => (
                  <div key={p} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: "#e0883c" }} />
                    <span className="text-xs leading-relaxed" style={{ color: "#b8a88a" }}>{p}</span>
                  </div>
                ))}
              </div>

              {/* Progress dots */}
              <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(224,136,60,0.08)" }}>
                <div className="flex items-center gap-1.5">
                  {FEATURES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className="transition-all duration-300"
                      style={{
                        height: 3,
                        borderRadius: 2,
                        width: active === i ? 22 : 6,
                        background: active === i ? "#e0883c" : "rgba(224,136,60,0.18)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
