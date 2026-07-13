import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/marketing/SectionHeading";
import SectorButtons from "@/components/marketing/SectorButtons";
import WorkflowProgression from "@/components/marketing/WorkflowProgression";
import CtaRow from "@/components/marketing/CtaRow";
import CallFlowArt from "@/components/marketing/CallFlowArt";
import FAQAccordion from "@/components/marketing/FAQAccordion";

const HOME_FAQS = [
  {
    q: "Is this just an AI receptionist?",
    a: "The phone is where we start — it's the fastest thing to fix and the easiest to prove. But the receptionist is the wedge, not the whole offer. We build the follow-up, booking, reporting, and custom internal tools your business actually runs on, per industry.",
  },
  {
    q: "Do you work in my industry?",
    a: "We focus on five: auto repair and body shops, HVAC and home services, dental practices, roofing and exteriors, and med spas. Each gets a build shaped to how that business actually operates — not a generic template.",
  },
  {
    q: "Does it replace the software I already use?",
    a: "No. It works alongside the system you already run and books on our own engine from day one. A deeper integration into your software is a step we scope with you — never a claim we make before it's built.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on what we build with you, so we start with a short discovery call to understand your operation and scope the right first step. Book a call and we'll walk through it.",
  },
  {
    q: "How fast can we go live?",
    a: "The phone agent is the quickest win — typically live within days of a kickoff, once we've configured it to your hours, services, and call rules. The broader workflows come in stages after the receptionist proves itself.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── 1. Hero: category + audience + outcome ── */}
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <p className="eyebrow">AI operations for local businesses</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.04] text-[var(--color-ink)]">
                Start with the calls you miss.
                <br />
                <span className="italic text-[var(--color-amber-deep)]">Build the system</span> around them.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-[clamp(1.1rem,1.6vw,1.3rem)] leading-relaxed text-[var(--color-ink-secondary)]">
                We answer every call in English and Spanish, day and night — then build the
                follow-up, booking, reporting, and internal tools your business actually runs
                on. The phone is where we start, not the whole story.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <CtaRow className="mt-8" />
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-sm text-[var(--color-ink-muted)]">
                A real shop runs a live bilingual agent today. Hear the same voice on the demo.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="hidden lg:block">
            <CallFlowArt className="w-full" />
          </Reveal>
        </div>

        {/* Sector buttons — the primary "choose your world" affordance under the hero */}
        <div className="container-page pb-14">
          <Reveal>
            <p className="mb-3 text-sm font-medium text-[var(--color-ink-muted)]">Built for:</p>
            <SectorButtons variant="chips" />
          </Reveal>
        </div>
      </section>

      {/* ── 2. The operations progression — the differentiator ── */}
      <section className="border-y border-[var(--color-hairline)] bg-[var(--color-canvas-raised)]">
        <div className="container-page py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="How the whole thing works"
              title="A receptionist is step one. The operating system is the point."
              lead="Most vendors stop at answering the phone. We treat that as the entry point to the workflows that actually move a local business."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12">
              <WorkflowProgression />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 3. Industries (sector cards, native pain each) ── */}
      <section id="industries" className="scroll-mt-24">
        <div className="container-page py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Five industries, built natively"
              title="Send an owner the page that sounds like their business."
              lead="Each industry gets a build shaped to how it actually operates — the pains, the emergencies, the follow-up, and the internal tools that matter in that trade."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10">
              <SectorButtons variant="cards" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4. Phone wedge + live demo ── */}
      <section id="demo" className="scroll-mt-24 border-y border-[var(--color-hairline)] bg-[var(--color-canvas-raised)]">
        <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="eyebrow">The wedge, honestly</p>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] leading-tight text-[var(--color-ink)]">
                Hear it answer a call.
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-[var(--color-ink-secondary)]">
                Vera is a live voice agent, not a video. Tap the widget in the corner and talk to
                it the way a customer would — it answers on the first ring, captures the details,
                and never invents an answer it wasn&rsquo;t given.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Answers 24/7 in English and Spanish, on the first ring.",
                  "Books, reschedules, and captures every caller into your portal.",
                  "Routes what it shouldn't handle to a person — no guessing, no fake promises.",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-[var(--color-ink-secondary)]">
                    <span aria-hidden="true" className="mt-1 text-[var(--color-amber-deep)]">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.4" />
                        <path d="M5.5 9.2l2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-amber-tint)] text-[var(--color-amber-deep)]">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M6 4h4l1.5 4-2.2 1.4a12 12 0 005.3 5.3L16 16.5 20 18v4c0 .8-.7 1.5-1.5 1.4C10 22.5 5.5 15 5.5 6.5 5.5 5.2 6.7 4 8 4z" fill="currentColor" />
                </svg>
              </div>
              <p className="mt-5 font-[var(--font-display)] text-xl text-[var(--color-ink)]">Talk to Vera</p>
              <p className="mt-2 text-sm text-[var(--color-ink-secondary)]">
                Use the &ldquo;Talk to Vera&rdquo; widget in the corner to start a live call — available now, no wait.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5. How we work ── */}
      <section id="how-we-work" className="scroll-mt-24">
        <div className="container-page py-16 md:py-24">
          <Reveal>
            <SectionHeading eyebrow="How we engage" title="Three steps to live, then we keep building." />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Connect", b: "A short discovery call to learn how your business actually runs — your calls, your schedule, your rules." },
              { n: "02", t: "Train", b: "We configure the agent to your hours, services, pricing, and call handling, and prove it on real test calls before it goes live." },
              { n: "03", t: "Launch & expand", b: "The phone goes live — typically within days — then we build the follow-up, reporting, and internal tools around it in stages." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <div className="h-full rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-canvas-raised)] p-6">
                  <span className="font-[var(--font-display)] text-2xl text-[var(--color-amber-deep)]">{s.n}</span>
                  <h3 className="mt-3 text-[1.15rem] font-semibold text-[var(--color-ink)]">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-secondary)]">{s.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Honest proof (one dark moment) ── */}
      <section data-pod="auto-repair" className="bg-[var(--color-ink-invert)] text-[var(--color-paper-on-dark)]">
        <div className="container-page py-16 md:py-24">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--color-amber)" }}>Real proof, not stock photos</p>
            <h2 className="mt-3 max-w-2xl text-[clamp(2rem,4vw,2.75rem)] leading-tight text-[var(--color-paper-on-dark)]">
              A live agent in a real shop. A callable demo. Real product surfaces.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { t: "A live client, today", b: "A real auto shop runs a bilingual agent in production — our flagship reference, not a mockup." },
              { t: "A demo you can call", b: "Vera is a live voice agent anyone can talk to right now — the honest way to judge the product." },
              { t: "Real product, shown on a call", b: "The client portal, intake forms, and reporting are shipped software we walk through — never a faked screenshot." },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.06}>
                <div className="h-full rounded-[var(--radius-md)] border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-[1.1rem] font-semibold text-[var(--color-paper-on-dark)]">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-white/50">
            We don&rsquo;t publish customer logos, testimonials, or headline metrics we can&rsquo;t verify. When we have
            them and permission to share, they&rsquo;ll be here.
          </p>
        </div>
      </section>

      {/* ── 7. FAQ ── */}
      <section id="faq" className="scroll-mt-24">
        <div className="container-page py-16 md:py-24">
          <Reveal>
            <SectionHeading eyebrow="Questions" title="What owners ask first." />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10 max-w-3xl">
              <FAQAccordion items={HOME_FAQS} idBase="home-faq" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 8. Final CTA ── */}
      <section className="border-t border-[var(--color-hairline)] bg-[var(--color-canvas-raised)]">
        <div className="container-page py-20 text-center md:py-28">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-[clamp(2rem,4.5vw,3.25rem)] leading-tight text-[var(--color-ink)]">
              Let&rsquo;s find the calls you&rsquo;re losing — then build what comes after.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[var(--color-ink-secondary)]">
              A short discovery call, no pressure. We&rsquo;ll show you the live demo, talk through your
              operation, and scope the right first step.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaRow />
            </div>
            <p className="mt-6 text-sm text-[var(--color-ink-muted)]">
              Or explore a specific industry:{" "}
              <Link href="/auto-repair" className="text-[var(--color-amber-deep)] underline underline-offset-4">
                Auto Repair
              </Link>
              {", "}
              <Link href="/hvac" className="text-[var(--color-amber-deep)] underline underline-offset-4">HVAC</Link>
              {", "}
              <Link href="/dental" className="text-[var(--color-amber-deep)] underline underline-offset-4">Dental</Link>
              {", "}
              <Link href="/roofing" className="text-[var(--color-amber-deep)] underline underline-offset-4">Roofing</Link>
              {", "}
              <Link href="/med-spa" className="text-[var(--color-amber-deep)] underline underline-offset-4">Med Spa</Link>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
