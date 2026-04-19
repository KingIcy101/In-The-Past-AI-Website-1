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

const INDUSTRIES = [
  "Dental Offices","Chiropractic","Law Firms","Real Estate",
  "Med Spas","Home Services","Any service business that runs on calls",
];

function scrollToBooking() {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
}

export default function FunnelPage() {
  return (
    <main style={{ background: "#0a0704", color: "#f2ece0", fontFamily: "var(--font-sans)" }}>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center px-6 pt-16 pb-20 text-center max-w-3xl mx-auto">
        <Image src="/logo.png" alt="In The Past AI" width={120} height={32} className="mb-10 opacity-90" priority />
        <h1 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(2.4rem,6vw,4rem)", fontWeight:800, lineHeight:1.1, letterSpacing:"-0.02em", color:"#f2ece0" }}>
          Never Miss a Call Again.
        </h1>
        <p className="mt-5 max-w-xl" style={{ fontSize:"clamp(1rem,2.2vw,1.2rem)", color:"#a39080", lineHeight:1.7 }}>
          Your AI receptionist answers 24/7 — during lunch, after-hours, when your team is busy.
          Books appointments, captures leads, handles FAQs.{" "}
          <span style={{ color:"#f2ece0" }}>Every call handled.</span>
        </p>
        <button onClick={scrollToBooking} className="mt-8 px-8 py-4 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{ background:"#e0883c", color:"#0a0704", fontFamily:"var(--font-display)", fontSize:"1.05rem", fontWeight:700 }}>
          Book Your Free Discovery Call →
        </button>
        <p className="mt-4 text-sm" style={{ color:"#7a6e62" }}>
          Live in 4–7 days &nbsp;·&nbsp; No long-term contracts &nbsp;·&nbsp; Cancel anytime
        </p>
      </section>

      {/* PAIN */}
      <section className="px-6 py-20" style={{ background:"#0d0905" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.5rem,3.5vw,2.2rem)", fontWeight:700, color:"#f2ece0" }}>
            Every missed call is revenue walking out the door.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PAIN_CARDS.map((card) => (
              <div key={card.title} className="rounded-2xl p-6" style={{ background:"#120c08", border:"1px solid rgba(224,136,60,0.12)" }}>
                <div className="w-2 h-2 rounded-full mb-4" style={{ background:"#e0883c" }} />
                <h3 className="mb-3 font-semibold" style={{ fontFamily:"var(--font-display)", color:"#f2ece0", fontSize:"1rem" }}>{card.title}</h3>
                <p style={{ color:"#7a6e62", fontSize:"0.9rem", lineHeight:1.7 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-14" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.5rem,3.5vw,2.2rem)", fontWeight:700, color:"#f2ece0" }}>
            Your AI receptionist is live in 4–7 days.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <div key={step.num} className="flex flex-col">
                <span style={{ fontFamily:"var(--font-display)", fontSize:"2.5rem", fontWeight:800, color:"rgba(224,136,60,0.25)", lineHeight:1 }}>{step.num}</span>
                <h3 className="mt-3 mb-2" style={{ fontFamily:"var(--font-display)", color:"#f2ece0", fontSize:"1rem", fontWeight:600 }}>{step.title}</h3>
                <p style={{ color:"#7a6e62", fontSize:"0.9rem", lineHeight:1.7 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="px-6 py-16 text-center" style={{ background:"#0d0905" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-10" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.4rem,3vw,2rem)", fontWeight:700, color:"#f2ece0" }}>
            Built for businesses that run on calls.
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((ind) => (
              <span key={ind} className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ background:"#120c08", border:"1px solid rgba(224,136,60,0.15)", color:"#a39080" }}>
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.5rem,3.5vw,2.2rem)", fontWeight:700, color:"#f2ece0" }}>
              Book your free 30-min discovery call.
            </h2>
            <p className="mt-3" style={{ color:"#7a6e62", fontSize:"0.95rem" }}>
              See exactly how it would work for your business. No pitch, no pressure.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ border:"1px solid rgba(224,136,60,0.12)", background:"#120c08" }}>
            <iframe src={`${CAL_URL}?theme=dark&layout=month_view`} width="100%" style={{ minHeight:600, border:"none" }} title="Book a discovery call" />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-16 text-center" style={{ background:"#0d0905", borderTop:"1px solid rgba(224,136,60,0.08)" }}>
        <p className="mb-6" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1.2rem,2.5vw,1.6rem)", fontWeight:700, color:"#f2ece0" }}>
          Ready to stop missing calls?
        </p>
        <button onClick={scrollToBooking} className="px-8 py-4 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{ background:"#e0883c", color:"#0a0704", fontFamily:"var(--font-display)", fontSize:"1rem", fontWeight:700 }}>
          Book Free Discovery Call →
        </button>
        <p className="mt-4 text-xs" style={{ color:"#7a6e62" }}>Live in 4–7 days · No long-term contracts · Cancel anytime</p>
      </section>

    </main>
  );
}
