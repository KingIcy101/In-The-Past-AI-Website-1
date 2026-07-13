"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useCalModal } from "@/contexts/CalModalContext";
import PodIcon from "@/components/marketing/PodIcon";
import { SECTORS, type MarketPod, type PodSlug } from "@/lib/marketing/market-pods";

// Industry page in ITP's OWN dark brand (bg #0a0704, cream text, Plus Jakarta),
// with a bright per-industry ACCENT tuned to pop on the dark canvas — so each
// page is psychologically tailored to its trade while staying one brand.
// Built ADDITIVELY: the homepage and existing sections are untouched.
const ACCENT: Record<PodSlug, { c: string; soft: string; line: string; glow: string; reads: string }> = {
  "auto-repair": { c: "#E8623A", soft: "rgba(232,98,58,0.10)", line: "rgba(232,98,58,0.22)", glow: "rgba(232,98,58,0.22)", reads: "Rugged, mechanical, get-it-done" },
  hvac:          { c: "#3FA9DE", soft: "rgba(63,169,222,0.10)", line: "rgba(63,169,222,0.22)", glow: "rgba(63,169,222,0.22)", reads: "Comfort, urgency, reliability" },
  dental:        { c: "#35BBA6", soft: "rgba(53,187,166,0.10)", line: "rgba(53,187,166,0.22)", glow: "rgba(53,187,166,0.22)", reads: "Clean, calm, clinical trust" },
  roofing:       { c: "#6E93C4", soft: "rgba(110,147,196,0.10)", line: "rgba(110,147,196,0.22)", glow: "rgba(110,147,196,0.22)", reads: "Solid, protective, storm-ready" },
  "med-spa":     { c: "#CE7DB8", soft: "rgba(206,125,184,0.10)", line: "rgba(206,125,184,0.22)", glow: "rgba(206,125,184,0.22)", reads: "Premium, discreet, aesthetic" },
};

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function PodPage({ pod }: { pod: MarketPod }) {
  const { open } = useCalModal();
  const a = ACCENT[pod.slug];
  const others = SECTORS.filter((s) => s.slug !== pod.slug);

  return (
    <div style={{ background: "#0a0704", color: "#f2ece0" }}>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        {/* industry accent glow */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[420px]" style={{ background: `radial-gradient(ellipse 60% 60% at 30% 0%, ${a.glow} 0%, transparent 70%)` }} />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 md:px-8">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: a.soft, border: `1px solid ${a.line}`, color: a.c }}>
                <PodIcon icon={pod.icon} size={22} />
              </span>
              <span className="text-[0.8rem] font-semibold uppercase tracking-[0.16em]" style={{ color: a.c }}>{pod.eyebrow}</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.25rem,5.5vw,3.85rem)] font-bold leading-[1.05]" style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}>
              {pod.headline}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed" style={{ color: "rgba(242,236,224,0.72)" }}>
              {pod.lead}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => open()}
                className="inline-flex min-h-[52px] items-center justify-center rounded-full px-7 text-[0.98rem] font-semibold transition-transform duration-150 hover:-translate-y-0.5"
                style={{ background: a.c, color: "#0a0704", boxShadow: `0 8px 30px ${a.glow}` }}
              >
                Book a discovery call →
              </button>
              <Link
                href="/#demo"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full px-7 text-[0.98rem] font-semibold transition-colors duration-150"
                style={{ border: `1px solid ${a.line}`, color: "#f2ece0" }}
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" aria-hidden><path d="M4 3.5v9l7-4.5-7-4.5z" /></svg>
                Hear it answer
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Pain model ── */}
      <section className="border-t" style={{ borderColor: "rgba(224,136,60,0.08)" }}>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 md:px-8">
          <Reveal>
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.16em]" style={{ color: a.c }}>What it costs you today</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold" style={{ fontFamily: "var(--font-display)" }}>The calls you&rsquo;re built to miss.</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pod.pains.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl p-6" style={{ background: "rgba(16,11,7,0.94)", border: "1px solid rgba(224,136,60,0.13)" }}>
                  <h3 className="text-[1.1rem] font-semibold" style={{ color: "#f2ece0" }}>{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(242,236,224,0.62)" }}>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Phone wedge ── */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24 md:px-8">
          <Reveal>
            <div>
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.16em]" style={{ color: a.c }}>Day one, the phone is handled</p>
              <h2 className="mt-3 text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>The wedge that pays for itself first.</h2>
              <p className="mt-5 max-w-lg leading-relaxed" style={{ color: "rgba(242,236,224,0.72)" }}>{pod.wedge.summary}</p>
              <p className="mt-5 rounded-xl px-4 py-3 text-sm leading-relaxed" style={{ background: a.soft, borderLeft: `2px solid ${a.c}`, color: "rgba(242,236,224,0.78)" }}>
                {pod.wedge.guardrail}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-3">
              {pod.wedge.points.map((pt) => (
                <li key={pt} className="flex items-start gap-3 rounded-xl px-4 py-3.5" style={{ background: "rgba(16,11,7,0.94)", border: "1px solid rgba(224,136,60,0.13)" }}>
                  <span aria-hidden className="mt-0.5" style={{ color: a.c }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.3" /><path d="M5.5 9.2l2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <span className="text-[0.95rem] leading-snug" style={{ color: "#f2ece0" }}>{pt}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Workflow story ── */}
      <section className="border-t" style={{ borderColor: "rgba(224,136,60,0.08)", background: "rgba(16,11,7,0.5)" }}>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 md:px-8">
          <Reveal>
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.16em]" style={{ color: a.c }}>The operations layer</p>
            <h2 className="mt-3 max-w-2xl text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>Then we build what comes after the call.</h2>
            <p className="mt-4 max-w-2xl leading-relaxed" style={{ color: "rgba(242,236,224,0.66)" }}>The receptionist proves the model. The value is the workflows and internal tools we build around it — shaped to how your business actually runs.</p>
          </Reveal>
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {pod.workflows.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <li className="flex h-full gap-4 rounded-2xl p-6" style={{ background: "rgba(16,11,7,0.94)", border: "1px solid rgba(224,136,60,0.13)" }}>
                  <span className="text-xl font-bold" style={{ fontFamily: "var(--font-display)", color: a.c }}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-[1.05rem] font-semibold" style={{ color: "#f2ece0" }}>{w.title}</h3>
                      <span className="rounded-full px-2 py-0.5 text-[0.66rem] font-semibold uppercase tracking-wide" style={w.status === "built" ? { background: a.soft, color: a.c } : { border: "1px solid rgba(224,136,60,0.2)", color: "rgba(242,236,224,0.5)" }}>
                        {w.status === "built" ? "Live now" : "We build it"}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(242,236,224,0.62)" }}>{w.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Proof ── */}
      <section className="border-t" style={{ borderColor: "rgba(224,136,60,0.08)" }}>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 md:px-8">
          <Reveal>
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.16em]" style={{ color: a.c }}>{pod.proof.kind === "live-client" ? "A live client, today" : "Real, callable proof"}</p>
            <div className="mt-4 max-w-3xl space-y-4">
              {pod.proof.lines.map((line) => (
                <p key={line} className="text-[1.15rem] leading-relaxed" style={{ color: "rgba(242,236,224,0.82)" }}>{line}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t" style={{ borderColor: "rgba(224,136,60,0.08)" }}>
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24 md:px-8">
          <Reveal>
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.16em]" style={{ color: a.c }}>Questions</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold" style={{ fontFamily: "var(--font-display)" }}>{pod.label} owners ask</h2>
          </Reveal>
          <div className="mt-8 divide-y" style={{ borderColor: "rgba(224,136,60,0.1)", borderTop: "1px solid rgba(224,136,60,0.1)", borderBottom: "1px solid rgba(224,136,60,0.1)" }}>
            {pod.faqs.map((f, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-[1.05rem] font-medium" style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}>{f.q}</span>
                    <span className="flex-none transition-transform group-open:rotate-45" style={{ color: a.c }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl leading-relaxed" style={{ color: "rgba(242,236,224,0.66)" }}>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA + cross-links ── */}
      <section className="border-t" style={{ borderColor: "rgba(224,136,60,0.08)", background: "rgba(16,11,7,0.5)" }}>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-8">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              See what it does for your {pod.label} operation.
            </h2>
            <p className="mx-auto mt-4 max-w-xl" style={{ color: "rgba(242,236,224,0.66)" }}>A short discovery call — hear the live demo, talk through your calls, and scope the right first step.</p>
            <div className="mt-8 flex justify-center">
              <button type="button" onClick={() => open()} className="inline-flex min-h-[52px] items-center justify-center rounded-full px-7 font-semibold transition-transform duration-150 hover:-translate-y-0.5" style={{ background: a.c, color: "#0a0704", boxShadow: `0 8px 30px ${a.glow}` }}>
                Book a discovery call →
              </button>
            </div>
            <div className="mt-10">
              <p className="mb-3 text-sm" style={{ color: "rgba(242,236,224,0.5)" }}>Other industries we build for:</p>
              <ul className="flex flex-wrap justify-center gap-2">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link href={s.href} className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition-colors" style={{ border: "1px solid rgba(224,136,60,0.16)", color: "#f2ece0", background: "rgba(16,11,7,0.6)" }}>
                      <span style={{ color: ACCENT[s.slug].c }}><PodIcon icon={s.icon} size={16} /></span>
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
