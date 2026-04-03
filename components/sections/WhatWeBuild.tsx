"use client";

import { useCalModal } from "@/contexts/CalModalContext";
import { motion } from "framer-motion";
import {
  IconPhone, IconLightning, IconTarget, IconCalendar,
  IconSmartphone, IconMoon, IconDatabase, IconChat, IconRobot,
  IconCheck,
} from "@/components/ui/Icons";
import TiltCard from "@/components/ui/TiltCard";
import ScrollReveal3D from "@/components/ui/ScrollReveal3D";

const primaryFeatures = [
  { Icon: IconLightning, label: "Answers in under 4 seconds" },
  { Icon: IconTarget,    label: "Qualifies every lead automatically" },
  { Icon: IconCalendar,  label: "Books direct to your calendar" },
  { Icon: IconSmartphone,label: "Transfers urgent calls instantly" },
  { Icon: IconDatabase,  label: "Logs everything to your CRM" },
  { Icon: IconMoon,      label: "Never off. Never unavailable." },
];

const secondary = [
  {
    Icon: IconChat,
    title: "Website Chatbots",
    desc: "Smart AI widgets that engage visitors instantly and turn browsers into booked appointments — 24/7, no human needed.",
    points: ["Instant visitor engagement", "Lead capture & qualification", "Seamless appointment booking"],
  },
  {
    Icon: IconRobot,
    title: "Internal Chatbots",
    desc: "AI assistants trained on your business knowledge — helping your team answer questions, follow SOPs, and work faster.",
    points: ["Slack & Teams integration", "Custom knowledge base", "HR & onboarding support"],
  },
];

export default function WhatWeBuild() {
  const { open: openCal } = useCalModal();
  return (
    <section id="services" className="py-28 px-6" style={{ background: "#080503" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16 mb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "rgba(224,136,60,0.6)" }}>
              What We Build
            </p>
            <ScrollReveal3D
              as="h2"
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}
              lines={[
                { text: "Three tools." },
                { text: "One agency.", className: "gradient-amber" },
              ]}
            />
          </div>
          <p className="text-base max-w-sm md:pb-1" style={{ color: "#f2ece0" }}>
            Everything your business needs to handle communications at scale — without adding headcount.
          </p>
        </div>

        {/* Primary card — full width with 3D perspective entry + tilt */}
        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformPerspective: 1000 }}
          className="mb-5"
        >
          <TiltCard
            className="rounded-2xl p-5 md:p-10 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(224,136,60,0.1) 0%, rgba(12,8,5,0.98) 60%)",
              border: "1px solid rgba(224,136,60,0.2)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(224,136,60,0.07) 0%, transparent 70%)",
                filter: "blur(40px)",
                transform: "translate(20%, -20%)",
              }}
            />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "linear-gradient(135deg, #f0a050, #d07030, #a84820)", color: "#0a0704" }}
                  >
                    Primary Service
                  </span>
                </div>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(224,136,60,0.1)", border: "1px solid rgba(224,136,60,0.2)" }}
                >
                  <IconPhone size={28} />
                </div>
                <h3
                  className="text-3xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}
                >
                  Voice Agents
                </h3>
                <p className="text-base leading-relaxed mb-6" style={{ color: "#f2ece0" }}>
                  24/7 AI phone agents that answer every call, qualify leads, book appointments, and follow up — indistinguishable from a real receptionist.
                </p>
                <button type="button" onClick={() => openCal()}
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: "#e0883c" }}
                >
                  See it in action
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 4l4 3-4 3" stroke="#e0883c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <div className="space-y-3">
                {primaryFeatures.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(224,136,60,0.08)" }}
                    >
                      <Icon size={14} />
                    </div>
                    <span className="text-sm" style={{ color: "#f2ece0" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Two secondary cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {secondary.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60, rotateX: 18 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformPerspective: 900 }}
            >
              <TiltCard
                className="rounded-2xl p-7"
                style={{ background: "rgba(18,12,8,0.8)", border: "1px solid rgba(224,136,60,0.1)" }}
                maxTilt={8}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(224,136,60,0.08)", border: "1px solid rgba(224,136,60,0.15)" }}
                >
                  <card.Icon size={24} />
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}
                >
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "#f2ece0" }}>
                  {card.desc}
                </p>
                <ul className="space-y-2">
                  {card.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm" style={{ color: "#f2ece0" }}>
                      <IconCheck size={14} />
                      {p}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
