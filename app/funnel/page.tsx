"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const CAL_URL = "https://cal.com/randy-mendez/ai-receptionist-discovery";

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
  { label: "Dental Offices",           icon: "🦷" },
  { label: "Chiropractic",             icon: "🦴" },
  { label: "Law Firms",                icon: "⚖️" },
  { label: "Real Estate",              icon: "🏠" },
  { label: "Med Spas",                 icon: "💆" },
  { label: "Home Services",            icon: "🔧" },
  { label: "Auto Body Shops",          icon: "🚗" },
  { label: "Physical Therapy",         icon: "🏃" },
  { label: "Veterinary Clinics",       icon: "🐾" },
  { label: "Insurance Agencies",       icon: "🛡️" },
  { label: "Roofing & HVAC",           icon: "🏗️" },
  { label: "Financial Advisors",       icon: "📊" },
  { label: "Plastic Surgery",          icon: "✨" },
  { label: "Staffing Agencies",        icon: "👥" },
  { label: "Any call-driven business", icon: "📞" },
];

const TRUST_STATS = [
  { stat: "200+", label: "Calls handled for clients" },
  { stat: "4–7",  label: "Day go-live" },
  { stat: "24/7", label: "Uptime guaranteed" },
  { stat: "0",    label: "Long-term contracts" },
];

const TRANSCRIPT = [
  { from: "caller", text: "Hi, I need to book a dental cleaning." },
  { from: "ai",     text: "Of course! I have Tuesday at 2pm or Thursday at 10am available. Which works better for you?" },
  { from: "caller", text: "Thursday works." },
  { from: "ai",     text: "Perfect. Can I get your name and a callback number in case we need to reach you?" },
  { from: "caller", text: "Sure, it is Mike, 555-0192." },
  { from: "ai",     text: "All set, Mike! You are booked for Thursday at 10am. You will get a confirmation text shortly. Is there anything else I can help with?" },
];

const BOOKINGS = [
  { name: "Marcus T.",    city: "Dallas",  min: 4  },
  { name: "Sarah K.",     city: "Phoenix", min: 7  },
  { name: "David R.",     city: "Atlanta", min: 11 },
  { name: "Jennifer M.",  city: "Denver",  min: 3  },
];

function scrollToBooking() {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
}

export default function FunnelPage() {
  const [scrolled,        setScrolled]        = useState(false);
  const [transcriptCount, setTranscriptCount] = useState(0);
  const [barFilled,       setBarFilled]       = useState(false);
  const [toastIndex,      setToastIndex]      = useState(0);
  const [toastVisible,    setToastVisible]    = useState(false);

  // 1 — Sticky top bar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 2 — Transcript animation (0.4s between messages)
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    TRANSCRIPT.forEach((_, i) => {
      timers.push(setTimeout(() => setTranscriptCount(i + 1), 600 + i * 400));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  // 3 — Spot counter bar fill
  useEffect(() => {
    const t = setTimeout(() => setBarFilled(true), 400);
    return () => clearTimeout(t);
  }, []);

  // 5 — Booking toast cycle (show 4s, hide 4s, repeat)
  useEffect(() => {
    let idx = 0;
    let showTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const show = () => {
      setToastIndex(idx % BOOKINGS.length);
      setToastVisible(true);
      hideTimer = setTimeout(() => {
        setToastVisible(false);
        idx++;
        showTimer = setTimeout(show, 4000);
      }, 4000);
    };

    showTimer = setTimeout(show, 3000);
    return () => { clearTimeout(showTimer); clearTimeout(hideTimer); };
  }, []);

  const booking = BOOKINGS[toastIndex];

  return (
    <main style={{ background: "#0a0704", color: "#f2ece0", fontFamily: "var(--font-sans)" }}>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up   { animation: fadeUp 0.55s ease forwards; }
        .fade-up-1 { animation-delay: 0.05s; }
        .fade-up-2 { animation-delay: 0.15s; }
        .fade-up-3 { animation-delay: 0.25s; }
        .fade-up-4 { animation-delay: 0.35s; }
        .fade-up-5 { animation-delay: 0.45s; }
        .fade-up-6 { animation-delay: 0.55s; }

        @keyframes ctaPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(224,136,60,0); }
          50%       { box-shadow: 0 0 24px 8px rgba(224,136,60,0.36); }
        }
        .cta-pulse { animation: ctaPulse 2.5s ease-in-out infinite; }

        @keyframes msgFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .msg-in { animation: msgFadeIn 0.28s ease forwards; }
      `}</style>

      {/* ── STICKY TOP BAR ───────────────────────────────────────────────── */}
      <div
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-8 py-3"
        style={{
          background: "#0d0905",
          borderBottom: "1px solid rgba(224,136,60,0.22)",
          transform: scrolled ? "translateY(0)" : "translateY(-100%)",
          opacity: scrolled ? 1 : 0,
          transition: "transform 0.3s ease, opacity 0.3s ease",
        }}
      >
        <span style={{ color: "#a39080", fontSize: "0.9rem" }}>
          Your AI receptionist is one call away.
        </span>
        <button
          onClick={scrollToBooking}
          className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 hover:opacity-90 active:scale-95"
          style={{ background: "#e0883c", color: "#0a0704", fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          Book Now →
        </button>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-16 pb-20 text-center max-w-3xl mx-auto overflow-hidden">
        <div
          aria-hidden
          style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px", height: "400px",
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
          className="mt-8 px-8 py-4 rounded-xl cta-pulse transition-all duration-200 hover:opacity-90 active:scale-95"
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
        <p className="mt-4 text-sm" style={{ color: "#9a8e84" }}>
          No credit card &nbsp;·&nbsp; No commitment &nbsp;·&nbsp; Just a conversation
        </p>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────────────────── */}
      <div style={{ borderTop: "1px solid rgba(224,136,60,0.2)", borderBottom: "1px solid rgba(224,136,60,0.2)", background: "#0d0905" }}>
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-5">
            {TRUST_STATS.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center">
                <span style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 800, color: "#e0883c", lineHeight: 1.1 }}>
                  {item.stat}
                </span>
                <span style={{ fontSize: "0.9rem", color: "#9a8e84", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>
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
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3.5vw,2.2rem)", fontWeight: 700, color: "#f2ece0" }}
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
                <div className="w-2 h-2 rounded-full mb-4" style={{ background: "#c0392b" }} />
                <h3 className="mb-3 font-semibold" style={{ fontFamily: "var(--font-display)", color: "#f2ece0", fontSize: "1rem" }}>
                  {card.title}
                </h3>
                <p style={{ color: "#9a8e84", fontSize: "0.9rem", lineHeight: 1.7 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE TRANSCRIPT ───────────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ background: "#0a0704" }}>
        <div className="max-w-md mx-auto">
          <p
            className="text-center mb-2"
            style={{ color: "#5a5050", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}
          >
            Real conversation. Real results.
          </p>
          <h2
            className="text-center mb-10"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 700, color: "#f2ece0" }}
          >
            Hear it in action.
          </h2>
          <div
            className="rounded-2xl p-5 flex flex-col gap-3"
            style={{ background: "#0d0905", border: "1px solid rgba(224,136,60,0.1)", minHeight: 300 }}
          >
            {TRANSCRIPT.slice(0, transcriptCount).map((msg, i) => (
              <div key={i} className={`flex msg-in ${msg.from === "caller" ? "justify-end" : "justify-start"}`}>
                <div
                  className="rounded-2xl px-4 py-2.5"
                  style={{
                    maxWidth: "80%",
                    ...(msg.from === "ai"
                      ? { background: "#1a1108", borderBottomLeftRadius: 4 }
                      : { background: "#100d08", border: "1px solid rgba(224,136,60,0.13)", borderBottomRightRadius: 4 }),
                  }}
                >
                  {msg.from === "ai" && (
                    <p style={{ fontSize: "0.62rem", color: "#e0883c", marginBottom: 4, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em" }}>
                      AI Receptionist
                    </p>
                  )}
                  <p style={{ color: msg.from === "ai" ? "#d4c8bc" : "#8a8078", fontSize: "0.875rem", lineHeight: 1.55 }}>
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}
            {transcriptCount > 0 && transcriptCount < TRANSCRIPT.length && (
              <div className="flex justify-start">
                <div className="rounded-2xl px-4 py-2" style={{ background: "#1a1108", borderBottomLeftRadius: 4 }}>
                  <span style={{ color: "#e0883c", fontSize: "1rem", letterSpacing: "0.1em" }}>•••</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ──────────────────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-center mb-14"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3.5vw,2.2rem)", fontWeight: 700, color: "#f2ece0" }}
          >
            Business owners love it.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-6 flex flex-col"
                style={{ background: "#120c08", border: "1px solid rgba(224,136,60,0.12)", borderLeft: "3px solid #e0883c" }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} style={{ color: "#e0883c", fontSize: "0.9rem" }}>★</span>
                  ))}
                </div>
                <p className="flex-1" style={{ color: "#a39080", fontSize: "0.9rem", lineHeight: 1.75, fontStyle: "italic" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <p style={{ color: "#f2ece0", fontSize: "0.9rem", fontWeight: 600 }}>{t.name}</p>
                  <p style={{ color: "#9a8e84", fontSize: "0.875rem", marginTop: 2 }}>{t.title}</p>
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
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3.5vw,2.2rem)", fontWeight: 700, color: "#f2ece0" }}
          >
            Your AI receptionist is live in 4–7 days.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.num} className="flex flex-col">
                <span style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", fontWeight: 800, color: "rgba(224,136,60,0.25)", lineHeight: 1 }}>
                  {step.num}
                </span>
                <h3 className="mt-3 mb-2" style={{ fontFamily: "var(--font-display)", color: "#f2ece0", fontSize: "1rem", fontWeight: 600 }}>
                  {step.title}
                </h3>
                <p style={{ color: "#9a8e84", fontSize: "0.9rem", lineHeight: 1.7 }}>{step.body}</p>
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
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3.5vw,2.2rem)", fontWeight: 700, color: "#f2ece0" }}
          >
            Everything included. Nothing held back.
          </h2>
          <div className="flex flex-col gap-4">
            {VALUE_ITEMS.map((item, i) => (
              <div key={item} className={`flex items-start gap-4 fade-up fade-up-${i + 1}`} style={{ opacity: 0 }}>
                <span style={{ color: "#e0883c", fontSize: "1.1rem", lineHeight: 1.5, flexShrink: 0, marginTop: 1 }}>✓</span>
                <p style={{ color: "#a39080", fontSize: "0.95rem", lineHeight: 1.65 }}>{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 text-center" style={{ borderTop: "1px solid rgba(224,136,60,0.15)" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, color: "#f2ece0" }}>
              One-time setup: <span style={{ color: "#e0883c" }}>$4,950</span>
              {" "}·{" "}
              Then <span style={{ color: "#e0883c" }}>$850/mo</span>
            </p>
            <p className="mt-2" style={{ color: "#9a8e84", fontSize: "0.9rem" }}>
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
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 700, color: "#f2ece0" }}
          >
            Built for businesses that run on calls.
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((ind) => (
              <span
                key={ind.label}
                className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-200 hover:border-orange-400/40"
                style={{ background: "#120c08", border: "1px solid rgba(224,136,60,0.18)", color: "#d4c8be" }}
              >
                <span>{ind.icon}</span>
                {ind.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── URGENCY ───────────────────────────────────────────────────────── */}
      <div className="px-6 pt-6 pb-2 text-center">
        <p style={{ color: "#9a8e84", fontSize: "0.9rem", fontStyle: "italic" }}>
          We only onboard 10 new clients at a time to ensure we personally work with each one.
        </p>
      </div>

      {/* ── SPOT COUNTER ──────────────────────────────────────────────────── */}
      <div className="px-6 py-10 flex justify-center">
        <div className="w-full max-w-md text-center">
          <p style={{ fontFamily: "var(--font-display)", color: "#f2ece0", fontSize: "0.95rem", fontWeight: 600, marginBottom: 10 }}>
            7 of 10 spots filled for May
          </p>
          <div
            className="rounded-full overflow-hidden"
            style={{ height: 8, background: "rgba(224,136,60,0.12)", border: "1px solid rgba(224,136,60,0.15)" }}
          >
            <div
              style={{
                height: "100%",
                width: barFilled ? "70%" : "0%",
                background: "linear-gradient(90deg, #c06420, #e0883c)",
                borderRadius: 9999,
                transition: "width 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
          </div>
          <p className="mt-3" style={{ color: "#7a7068", fontSize: "0.82rem", lineHeight: 1.6 }}>
            3 spots remaining — we limit intake to ensure personal attention for every client.
          </p>
        </div>
      </div>

      {/* ── BOOKING ───────────────────────────────────────────────────────── */}
      <section id="booking" className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3.5vw,2.2rem)", fontWeight: 700, color: "#f2ece0" }}>
              Book your free 30-min strategy call.
            </h2>
            <p className="mt-3" style={{ color: "#9a8e84", fontSize: "0.95rem" }}>
              See exactly how it would work for your business. No pitch, no pressure.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(224,136,60,0.12)", background: "#120c08" }}>
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
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem,2.5vw,1.6rem)", fontWeight: 700, color: "#f2ece0" }}
        >
          Ready to stop missing calls?
        </p>
        <button
          onClick={scrollToBooking}
          className="px-8 py-4 rounded-xl cta-pulse transition-all duration-200 hover:opacity-90 active:scale-95"
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
        <p className="mt-4 text-xs" style={{ color: "#9a8e84" }}>
          No credit card &nbsp;·&nbsp; No commitment &nbsp;·&nbsp; Just a conversation
        </p>
      </section>

      {/* ── BOOKING TOAST ─────────────────────────────────────────────────── */}
      <div
        style={{
          position: "fixed",
          bottom: 24,
          left: 24,
          zIndex: 50,
          transform: toastVisible ? "translateX(0)" : "translateX(-130%)",
          opacity: toastVisible ? 1 : 0,
          transition: "transform 0.35s ease, opacity 0.35s ease",
          pointerEvents: "none",
        }}
      >
        <div
          className="flex items-start gap-3 rounded-xl px-4 py-3"
          style={{
            background: "#1a1108",
            border: "1px solid rgba(224,136,60,0.18)",
            borderLeft: "3px solid #e0883c",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            maxWidth: 280,
          }}
        >
          <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: 1 }}>🔔</span>
          <div>
            <p style={{ color: "#f2ece0", fontSize: "0.82rem", fontWeight: 600, lineHeight: 1.4 }}>
              {booking.name} from {booking.city} just booked a call
            </p>
            <p style={{ color: "#6a6058", fontSize: "0.74rem", marginTop: 2 }}>
              {booking.min} min ago
            </p>
          </div>
        </div>
      </div>

    </main>
  );
}
