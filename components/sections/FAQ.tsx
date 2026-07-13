"use client";

import { useCalModal } from "@/contexts/CalModalContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal3D from "@/components/ui/ScrollReveal3D";

const faqs = [
  {
    q: "How long does it take to get set up?",
    a: "Most clients are fully live within a few days. We handle everything — scripting, voice configuration, testing, and integration with your phone system. You don't need any technical knowledge. Just a 30-minute onboarding call and we take it from there.",
  },
  {
    q: "Will my callers know they're talking to AI?",
    a: "Only if you want them to. We build a custom AI persona — with a real name, natural voice, and a script trained on your business. Most callers assume they've reached a front desk team member. That said, we always recommend transparency, and we can configure the agent to disclose if asked.",
  },
  {
    q: "What happens with my phone number?",
    a: "We provide you with a new dedicated number for your AI receptionist. If needed, we can configure it to route calls to your existing line as well. Most clients simply start using the new number — it keeps things clean and gives you full control over when and how calls are handled.",
  },
  {
    q: "Does it integrate with my existing systems?",
    a: "Yes. We integrate with most major CRMs and scheduling tools — including GoHighLevel, HubSpot, Salesforce, and more. Every call, booking, and lead is automatically logged. If you use something less common, we'll figure it out during onboarding.",
  },
  {
    q: "Can I customize what the AI says?",
    a: "Completely. The script is built around your business — your services, pricing, FAQs, tone of voice, and how you want calls handled. We write the script, you review and approve it before anything goes live. Changes after launch are quick to implement.",
  },
  {
    q: "What happens when someone calls after hours or in an emergency?",
    a: "The AI keeps working — capturing leads, answering questions, and booking appointments regardless of the hour. For genuine emergencies, we can configure the agent to immediately call or text your on-call person with full context from the conversation.",
  },
  {
    q: "Will I have a dashboard to see everything?",
    a: "Yes. Every client gets access to a dedicated portal where you can view call logs, listen to recordings, see transcripts, track bookings, and monitor your AI agent's performance — all in one place. You'll always know exactly what your AI is doing and how it's performing.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing is based on call volume and the features your business needs. We offer tiered monthly plans starting at $750/month, with a one-time setup fee. Book a discovery call and we'll put together the right package for your situation.",
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
          className="text-lg md:text-xl font-medium leading-snug"
          style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}
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
            <p className="text-base leading-relaxed pb-6 italic" style={{ color: "#c4b49a" }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { open: openCal } = useCalModal();
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
          <p className="text-sm" style={{ color: "#f2ece0" }}>
            Still have questions?{" "}
            <button type="button" onClick={() => openCal()}
              className="underline transition-colors"
              style={{ color: "#e0883c" }}
            >
              Talk to our team →
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
