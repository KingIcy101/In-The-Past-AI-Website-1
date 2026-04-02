"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IconPlug, IconBrain, IconRocket } from "@/components/ui/Icons";
import MagneticButton from "@/components/ui/MagneticButton";
import ScrollReveal3D from "@/components/ui/ScrollReveal3D";

const DEMO_URL = "https://intake-form-sigma.vercel.app";

const steps = [
  {
    n: "01",
    Icon: IconPlug,
    title: "Connect",
    sub: "We wire into your existing stack",
    desc: "We integrate with your phone number, CRM, and calendar. No technical setup on your end — we handle everything within 24 hours.",
    chips: ["Any phone number", "HubSpot / Salesforce", "Google Calendar", "Calendly"],
  },
  {
    n: "02",
    Icon: IconBrain,
    title: "Train",
    sub: "We teach it your business",
    desc: "Your AI learns your services, pricing, scripts, and brand voice. We run test calls and refine until it sounds exactly right.",
    chips: ["Custom scripts", "Your brand voice", "Industry-specific knowledge", "Test & refine"],
  },
  {
    n: "03",
    Icon: IconRocket,
    title: "Launch",
    sub: "Go live. Stay live. Grow.",
    desc: "Flip the switch. Your AI goes live with 24/7 coverage. Monitor every call, booking, and lead through your real-time dashboard.",
    chips: ["Real-time dashboard", "Call recordings", "Ongoing optimization", "Human oversight"],
  },
];

function StepRow({ step }: { step: typeof steps[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="grid grid-cols-1 md:grid-cols-[60px_1fr] gap-6 md:gap-10"
    >
      <div className="flex items-start justify-start">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
          style={{
            background: "linear-gradient(135deg, rgba(224,136,60,0.15), rgba(12,8,5,0.95))",
            border: "1.5px solid rgba(224,136,60,0.35)",
          }}
        >
          <step.Icon size={24} />
        </motion.div>
      </div>

      <div className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-bold" style={{ color: "rgba(224,136,60,0.5)" }}>{step.n}</span>
          <div className="w-6 h-px" style={{ background: "rgba(224,136,60,0.3)" }} />
          <span className="text-xs" style={{ color: "#7a6e62" }}>{step.sub}</span>
        </div>
        <h3
          className="text-2xl md:text-3xl font-bold mb-3"
          style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}
        >
          {step.title}
        </h3>
        <p className="text-base leading-relaxed mb-5" style={{ color: "#7a6e62" }}>
          {step.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {step.chips.map((c) => (
            <span
              key={c}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: "rgba(224,136,60,0.07)",
                border: "1px solid rgba(224,136,60,0.15)",
                color: "#b8a88a",
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section className="py-28 px-6" style={{ background: "#080503" }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "rgba(224,136,60,0.6)" }}>
            How It Works
          </p>
          <ScrollReveal3D
            as="h2"
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}
            lines={[
              { text: "Live in" },
              { text: "days, not weeks.", className: "gradient-amber" },
            ]}
          />
        </div>

        <div className="relative">
          {/* Animated connecting line */}
          <motion.div
            className="absolute left-7 top-0 w-px hidden md:block origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              bottom: 0,
              background: "linear-gradient(to bottom, rgba(224,136,60,0.4) 0%, rgba(224,136,60,0.05) 100%)",
            }}
          />
          <div className="space-y-12">
            {steps.map((step) => <StepRow key={step.n} step={step} />)}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <MagneticButton>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #e0883c, #8a3c14)",
                color: "#0a0704",
                boxShadow: "0 4px 24px rgba(224,136,60,0.25)",
              }}
            >
              Book a Discovery Call →
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
