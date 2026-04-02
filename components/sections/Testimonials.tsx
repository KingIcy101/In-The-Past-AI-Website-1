"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    text: "We went from missing 30% of after-hours calls to booking more appointments than ever.",
    name: "Operations Manager",
    co: "Dental Group · Southeast US",
  },
  {
    text: "Our leads doubled in the first month. The AI qualifies better than our old intake form ever did.",
    name: "Managing Partner",
    co: "Personal Injury Firm · Texas",
  },
  {
    text: "Customers think it's a real person. More consistent than any receptionist we've ever had.",
    name: "Owner",
    co: "HVAC & Plumbing · Midwest",
  },
  {
    text: "Setup was seamless. The ROI was visible within the first week. Genuinely incredible.",
    name: "Practice Manager",
    co: "Medical Clinic · California",
  },
  {
    text: "After-hours bookings went up 60%. Money we were leaving on the table every night.",
    name: "Broker",
    co: "Real Estate Agency · Florida",
  },
  {
    text: "Our service calls get answered 24/7 now. Customer satisfaction scores jumped immediately.",
    name: "General Manager",
    co: "Home Services Co. · Ohio",
  },
  // Duplicate for seamless loop
  {
    text: "We went from missing 30% of after-hours calls to booking more appointments than ever.",
    name: "Operations Manager",
    co: "Dental Group · Southeast US",
  },
  {
    text: "Our leads doubled in the first month. The AI qualifies better than our old intake form ever did.",
    name: "Managing Partner",
    co: "Personal Injury Firm · Texas",
  },
  {
    text: "Customers think it's a real person. More consistent than any receptionist we've ever had.",
    name: "Owner",
    co: "HVAC & Plumbing · Midwest",
  },
  {
    text: "Setup was seamless. The ROI was visible within the first week. Genuinely incredible.",
    name: "Practice Manager",
    co: "Medical Clinic · California",
  },
  {
    text: "After-hours bookings went up 60%. Money we were leaving on the table every night.",
    name: "Broker",
    co: "Real Estate Agency · Florida",
  },
  {
    text: "Our service calls get answered 24/7 now. Customer satisfaction scores jumped immediately.",
    name: "General Manager",
    co: "Home Services Co. · Ohio",
  },
];

function QuoteCard({ q }: { q: typeof quotes[0] }) {
  return (
    <div
      className="flex-shrink-0 rounded-2xl p-6 flex flex-col gap-4"
      style={{
        width: 320,
        background: "rgba(18,12,8,0.8)",
        border: "1px solid rgba(224,136,60,0.1)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-5px) scale(1.02)";
        el.style.boxShadow = "0 12px 36px rgba(0,0,0,0.5), 0 0 24px rgba(224,136,60,0.08)";
        el.style.borderColor = "rgba(224,136,60,0.28)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "";
        el.style.boxShadow = "";
        el.style.borderColor = "rgba(224,136,60,0.1)";
      }}
    >
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ color: "#e0883c", fontSize: 12 }}>★</span>
        ))}
      </div>
      <p className="text-sm leading-relaxed flex-1" style={{ color: "#f2ece0" }}>
        &ldquo;{q.text}&rdquo;
      </p>
      <div style={{ borderTop: "1px solid rgba(224,136,60,0.08)", paddingTop: 12 }}>
        <p className="text-xs font-semibold" style={{ color: "#b8a88a", fontFamily: "var(--font-display)" }}>
          {q.name}
        </p>
        <p className="text-xs mt-0.5" style={{ color: "#4a3d35" }}>{q.co}</p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-28 overflow-hidden" style={{ background: "#0a0704" }}>
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
          style={{ color: "rgba(224,136,60,0.6)" }}
        >
          Client Stories
        </motion.p>
        <h2
          className="text-4xl md:text-5xl font-bold"
          style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}
        >
          <motion.span
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "block" }}
          >
            Results speak
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="gradient-amber"
            style={{ display: "block" }}
          >
            for themselves.
          </motion.span>
        </h2>
      </div>

      {/* Ticker row 1 — left */}
      <div className="ticker-wrap relative overflow-hidden mb-4">
        <div
          className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0a0704, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0a0704, transparent)" }}
        />
        <div className="flex gap-4 ticker" style={{ width: "max-content" }}>
          {quotes.map((q, i) => <QuoteCard key={i} q={q} />)}
        </div>
      </div>

      {/* Ticker row 2 — right (reverse) */}
      <div className="ticker-reverse-wrap relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0a0704, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0a0704, transparent)" }}
        />
        <div className="flex gap-4 ticker-reverse" style={{ width: "max-content" }}>
          {[...quotes].reverse().map((q, i) => <QuoteCard key={i} q={q} />)}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10">
        <p className="text-xs" style={{ color: "#3a2d25" }}>
          Identities kept anonymous at client request · All reviews verified
        </p>
      </div>
    </section>
  );
}
