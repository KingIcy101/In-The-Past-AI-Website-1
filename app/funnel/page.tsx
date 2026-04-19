"use client";

import Image from "next/image";

const CAL_URL = "https://cal.com/mateo-valdizan/discoverycall";

const PAIN_CARDS = [
  {
    title: "After-hours voicemail",
    body: "Leads call at 7pm. You're done for the day. They don't leave a message. They call your competitor.",
  },
  {
    title: "Lunch hour chaos",
    body: "Your team steps away. The phone rings. Nobody answers. That appointment never gets booked.",
  },
  {
    title: "Overflow calls",
    body: "You're on a call. Another one comes in. It goes to voicemail. That's two potential clients in one minute — gone.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Discovery Call (30 min)",
    body: "We learn your business, your FAQs, your booking process. You show us how calls work today.",
  },
  {
    num: "02",
    title: "We Build It",
    body: "Custom AI trained on your business. Integrated with your calendar in days, not weeks.",
  },
  {
    num: "03",
    title: "Go Live",
    body: "It answers every call, 24/7. You get a weekly summary of everything it handled.",
  },
];

// TODO: Replace with real testimonials before launch
const TESTIMONIALS = [
  {
    quote:
      "We used to miss 6–8 calls a week during lunch. Now every single one gets answered and booked automatically. First month paid for itself.",
    name: "Sarah M.",
    title: "Dental Office Owner",
  },
  {
    quote:
      "Our intake used to fall apart after hours. This thing qualifies callers, takes info, and schedules consults at 11pm. Game changer.",
    name: "James R.",
    title: "Personal Injury Attorney",
  },
  {
    quote:
      "Setup took less than a week. I was skeptical but it handled 40 calls in the first month without me touching anything.",
    name: "Priya K.",
    title: "Med Spa Owner",
  },
];

const VALUE_ITEMS = [
  "Custom AI trained on YOUR business (scripts, FAQs, objections)",
  "24/7 call answering — lunch, after-hours, overflow, weekends",
  "Calendar integration — books appointments live on the call",
  "Lead capture — every caller logged with name, number, intent",
  "Weekly performance report — calls handled, appointments booked",
  "30-day support — we tweak it until it is perfect",
];

const INDUSTRIES = [
  "Dental Offices",
  "Chiropractic",
  "Law Firms",
  "Real Estate",
  "Med Spas",
  "Home Services",
  "Any service business that runs on calls",
];

const TRUST_STATS = [
  { stat: "200+", label: "Calls handled for clients" },
  { stat: "4–7", label: "Day go-live" },
  { stat: "24/7", label: "Uptime guaranteed" },
  { stat: "0", label: "Long-term contracts" },
];

function scrollToBooking() {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
}

export default function FunnelPage() {
  return (
    <main style={{ background: "#0a0704", color: "#f2ece0", fontFamily: "var(--font-sans)" }}>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.55s ease forwards; }
        .fade-up-1 { animation-delay: 0.05s; }
        .fade-up-2 { animation-delay: 0.15s; }
        .fade-up-3 { animation-delay: 0.25s; }
        .fade-up-4 { animation-delay: 0.35s; }
        .fade-up-5 { animation-delay: 0.45s; }
        .fade-up-6 { animation-delay: 0.55s; }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-16 pb-20 text-center max-w-3xl mx-auto overflow-hidden">
        {/* Radial gradient behind headline */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "400px",
            background: "radial-gradient(ellipse at center, rgba(224,136,60,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <Image src="/logo.png" alt="In The Past AI" width={120} height={32} className="mb-10 opacity-90" priority />
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.4rem,6vw,4rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#f2ece0",
            position: "relative",
          }}
        >
          Never Miss a Call Again.
        </h1>
        <p className="mt-5 max-w-xl" style={{ fontSize: "clamp(1rem,2.2vw,1.2rem)", color: "#a39080", lineHeight: 1.7 }}>
          We build you a custom AI receptionist trained on your business. It answers every call 24/7, books appointments,
          and captures leads — while you focus on doing the work.{" "}
          <span style={{ color: "#f2ece0" }}>Live in 4–7 days.</span>
        </p>
        <button
          onClick={scrollToBooking}
          className="mt-8 px-8 py-4 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{
            background: "#e0883c",
            color: "#0a0704",
            fontFamily: "var(--font-display)",
            fontSize: "1.05rem",
            fontWeight: 700,
          }}
        >
          Book Your Free 30-Min Strategy Call →
        </button>
        <p className="mt-4 text-sm" style={{ color: "#7a6e62" }}>
          No credit card &nbsp;·&nbsp; No commitment &nbsp;·&nbsp; Just a conversation
        </p>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(224,136,60,0.2)", borderBottom: "1px solid rgba(224,136,60,0.2)", background: "#0d0905" }}>
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-5">
            {TRUST_STATS.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    color: "#e0883c",
                    lineHeight: 1.1,
                  }}
                >
                  {item.stat}
                </span>
                <span style={{ fontSize: "0.78rem", color: "#7a6e62", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PAIN ──────────────────────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ background: "#0d0905" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem,3.5vw,2.2rem)",
              fontWeight: 700,
              color: "#f2ece0",
            }}
          >
            Every missed call is revenue walking out the door.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PAIN_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-6"
                style={{ background: "#120c08", border: "1px solid rgba(224,136,60,0.12)" }}
              >
                {/* Red dot — signals danger/loss */}
                <div className="w-2 h-2 rounded-full mb-4" style={{ background: "#c0392b" }} />
                <h3
                  className="mb-3 font-semibold"
                  style={{ fontFamily: "var(--font-display)", color: "#f2ece0", fontSize: "1rem" }}
                >
                  {card.title}
                </h3>
                <p style={{ color: "#7a6e62", fontSize: "0.9rem", lineHeight: 1.7 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ──────────────────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-center mb-14"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem,3.5vw,2.2rem)",
              fontWeight: 700,
              color: "#f2ece0",
            }}
          >
            Business owners love it.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className="rounded-2xl p-6 flex flex-col"
                style={{
                  background: "#120c08",
                  border: "1px solid rgba(224,136,60,0.12)",
                  borderLeft: "3px solid #e0883c",
                  // Stagger: first card slightly higher on desktop
                  marginTop: i === 0 ? undefined : undefined,
                }}
              >
                {/* 5 stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} style={{ color: "#e0883c", fontSize: "0.9rem" }}>★</span>
                  ))}
                </div>
                <p
                  className="flex-1"
                  style={{ color: "#a39080", fontSize: "0.9rem", lineHeight: 1.75, fontStyle: "italic" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <p style={{ color: "#f2ece0", fontSize: "0.88rem", fontWeight: 600 }}>{t.name}</p>
                  <p style={{ color: "#7a6e62", fontSize: "0.8rem", marginTop: 2 }}>{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ background: "#0d0905" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-center mb-14"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem,3.5vw,2.2rem)",
              fontWeight: 700,
              color: "#f2ece0",
            }}
          >
            Your AI receptionist is live in 4–7 days.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.num} className="flex flex-col">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.5rem",
                    fontWeight: 800,
                    color: "rgba(224,136,60,0.25)",
                    lineHeight: 1,
                  }}
                >
                  {step.num}
                </span>
                <h3
                  className="mt-3 mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "#f2ece0", fontSize: "1rem", fontWeight: 600 }}
                >
                  {step.title}
                </h3>
                <p style={{ color: "#7a6e62", fontSize: "0.9rem", lineHeight: 1.7 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUE STACK ───────────────────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem,3.5vw,2.2rem)",
              fontWeight: 700,
              color: "#f2ece0",
            }}
          >
            Everything included. Nothing held back.
          </h2>
          <div className="flex flex-col gap-4">
            {VALUE_ITEMS.map((item, i) => (
              <div
                key={item}
                className={`flex items-start gap-4 fade-up fade-up-${i + 1}`}
                style={{ opacity: 0 }}
              >
                <span
                  style={{
                    color: "#e0883c",
                    fontSize: "1.1rem",
                    lineHeight: 1.5,
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                >
                  ✓
                </span>
                <p style={{ color: "#a39080", fontSize: "0.95rem", lineHeight: 1.65 }}>{item}</p>
              </div>
            ))}
          </div>

          {/* Pricing line */}
          <div
            className="mt-10 pt-8 text-center"
            style={{ borderTop: "1px solid rgba(224,136,60,0.15)" }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#f2ece0",
              }}
            >
              One-time setup:{" "}
              <span style={{ color: "#e0883c" }}>$4,950</span>
              {" "}·{" "}
              Then{" "}
              <span style={{ color: "#e0883c" }}>$850/mo</span>
            </p>
            <p className="mt-2" style={{ color: "#7a6e62", fontSize: "0.85rem" }}>
              Most clients recover setup cost in their first 2 bookings.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ──────────────────────────────────────────────────── */}
      <section className="px-6 py-16 text-center" style={{ background: "#0d0905" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="mb-10"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.4rem,3vw,2rem)",
              fontWeight: 700,
              color: "#f2ece0",
            }}
          >
            Built for businesses that run on calls.
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((ind) => (
              <span
                key={ind}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: "#120c08",
                  border: "1px solid rgba(224,136,60,0.15)",
                  color: "#a39080",
                }}
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── RISK REVERSAL ─────────────────────────────────────────────────── */}
      <section className="px-6 pt-20 pb-8">
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-2xl p-8 text-center"
            style={{
              background: "#120c08",
              border: "1px solid rgba(224,136,60,0.3)",
              boxShadow: "0 0 32px rgba(224,136,60,0.07)",
            }}
          >
            <p style={{ fontSize: "2rem", marginBottom: 12 }}>🛡️</p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.1rem,2.5vw,1.4rem)",
                fontWeight: 700,
                color: "#f2ece0",
                lineHeight: 1.35,
              }}
            >
              If you are not live in 7 days, your first month is free.
            </h3>
            <p className="mt-4" style={{ color: "#7a6e62", fontSize: "0.9rem", lineHeight: 1.7 }}>
              We have never missed that window. But if we do, you do not pay until it is working.
            </p>
          </div>
        </div>
      </section>

      {/* ── URGENCY ───────────────────────────────────────────────────────── */}
      <div className="px-6 pt-6 pb-2 text-center">
        <p style={{ color: "#7a6e62", fontSize: "0.85rem", fontStyle: "italic" }}>
          We only onboard 5 new clients per month to ensure quality.
        </p>
      </div>

      {/* ── BOOKING ───────────────────────────────────────────────────────── */}
      <section id="booking" className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem,3.5vw,2.2rem)",
                fontWeight: 700,
                color: "#f2ece0",
              }}
            >
              Book your free 30-min strategy call.
            </h2>
            <p className="mt-3" style={{ color: "#7a6e62", fontSize: "0.95rem" }}>
              See exactly how it would work for your business. No pitch, no pressure.
            </p>
          </div>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(224,136,60,0.12)", background: "#120c08" }}
          >
            <iframe
              src={`${CAL_URL}?theme=dark&layout=month_view`}
              width="100%"
              style={{ minHeight: 600, border: "none" }}
              title="Book a discovery call"
            />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section
        className="px-6 py-16 text-center"
        style={{ background: "#0d0905", borderTop: "1px solid rgba(224,136,60,0.08)" }}
      >
        <p
          className="mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.2rem,2.5vw,1.6rem)",
            fontWeight: 700,
            color: "#f2ece0",
          }}
        >
          Ready to stop missing calls?
        </p>
        <button
          onClick={scrollToBooking}
          className="px-8 py-4 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{
            background: "#e0883c",
            color: "#0a0704",
            fontFamily: "var(--font-display)",
            fontSize: "1rem",
            fontWeight: 700,
          }}
        >
          Book Your Free 30-Min Strategy Call →
        </button>
        <p className="mt-4 text-xs" style={{ color: "#7a6e62" }}>
          No credit card &nbsp;·&nbsp; No commitment &nbsp;·&nbsp; Just a conversation
        </p>
      </section>

    </main>
  );
}
