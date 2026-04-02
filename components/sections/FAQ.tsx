"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal3D from "@/components/ui/ScrollReveal3D";

const DEMO_URL = "https://intake-form-sigma.vercel.app";

const faqs = [
  {
    q: "How long does setup take?",
    a: "Most clients are fully live within a matter of days. We handle everything — integrating with your phone, training the AI, and testing before we flip the switch. You don't need any technical knowledge.",
  },
  {
    q: "Does it integrate with my CRM?",
    a: "Yes. We natively integrate with HubSpot, Salesforce, GoHighLevel, and many others. Every call, lead, and booking is automatically logged so your team has the full picture without lifting a finger.",
  },
  {
    q: "Can I customize the AI's voice and script?",
    a: "Completely. We build a custom AI persona — name, voice style, tone, script, and response logic — that sounds like a natural extension of your brand. Callers won't know it's AI unless you tell them.",
  },
  {
    q: "What happens during after-hours or emergencies?",
    a: "The AI handles everything — capturing leads, answering questions, booking appointments. For genuine emergencies, it can be configured to call or text your on-call team member directly, with full context attached.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing is based on call volume and the features you need. We don't believe in cookie-cutter plans. Book a demo and we'll build a custom quote — no long-term contracts required.",
  },
];

function Item({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -22, rotateY: -6 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ transformPerspective: 900, borderBottom: "1px solid rgba(224,136,60,0.08)" }}
      className="cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-4 py-6">
        <h3
          className="text-base md:text-lg font-medium leading-snug"
          style={{ fontFamily: "var(--font-display)", color: open ? "#f2ece0" : "#b8a88a" }}
        >
          {q}
        </h3>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          className="text-xl flex-shrink-0 mt-0.5"
          style={{ color: "#e0883c" }}
        >
          +
        </motion.span>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm leading-relaxed pb-6" style={{ color: "#7a6e62" }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-28 px-6" style={{ background: "#080503" }}>
      <div className="max-w-3xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "rgba(224,136,60,0.6)" }}>
            Questions
          </p>
          <ScrollReveal3D
            as="h2"
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}
            lines={[
              { text: "The answers" },
              { text: "you need.", className: "gradient-amber" },
            ]}
          />
        </div>

        <div>
          {faqs.map((f, i) => (
            <Item key={f.q} {...f} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <p className="text-sm" style={{ color: "#4a3d35" }}>
            Still have questions?{" "}
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors"
              style={{ color: "#e0883c" }}
            >
              Talk to our team →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
