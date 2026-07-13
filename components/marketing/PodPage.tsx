import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/marketing/SectionHeading";
import CtaRow from "@/components/marketing/CtaRow";
import PodIcon from "@/components/marketing/PodIcon";
import FAQAccordion from "@/components/marketing/FAQAccordion";
import CallFlowArt from "@/components/marketing/CallFlowArt";
import { SECTORS, type MarketPod } from "@/lib/marketing/market-pods";

// One native industry-page template driven by the rich per-pod registry. The
// STRUCTURE is shared (like any consulting firm's service pages); the CONTENT
// is deeply industry-native (pains, wedge, workflows, proof, FAQs written per
// trade), and the pod accent recolors the whole page via the data-pod wrapper.
export default function PodPage({ pod }: { pod: MarketPod }) {
  const others = SECTORS.filter((s) => s.slug !== pod.slug);

  return (
    <div data-pod={pod.slug}>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--pod-accent-tint)] text-[var(--pod-accent-deep)]">
                  <PodIcon icon={pod.icon} size={20} />
                </span>
                <p className="eyebrow">{pod.eyebrow}</p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.06] text-[var(--color-ink)]">
                {pod.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-[clamp(1.05rem,1.5vw,1.25rem)] leading-relaxed text-[var(--color-ink-secondary)]">
                {pod.lead}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <CtaRow className="mt-8" demoHref="/#demo" />
            </Reveal>
          </div>
          <Reveal delay={0.1} className="hidden lg:block">
            <CallFlowArt className="w-full" />
          </Reveal>
        </div>
      </section>

      {/* ── Pain model ── */}
      <section className="border-y border-[var(--color-hairline)] bg-[var(--color-canvas-raised)]">
        <div className="container-page py-16 md:py-24">
          <Reveal>
            <SectionHeading eyebrow="What it costs you today" title="The calls you're built to miss." />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pod.pains.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-6">
                  <h3 className="text-[1.1rem] font-semibold text-[var(--color-ink)]">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-secondary)]">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Phone wedge ── */}
      <section className="scroll-mt-24">
        <div className="container-page grid gap-12 py-16 md:py-24 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div>
              <p className="eyebrow">Day one, the phone is handled</p>
              <h2 className="mt-3 text-[clamp(2rem,4vw,2.75rem)] leading-tight text-[var(--color-ink)]">
                The wedge that pays for itself first.
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-[var(--color-ink-secondary)]">{pod.wedge.summary}</p>
              <p className="mt-5 rounded-[var(--radius-md)] border-l-2 border-[var(--pod-accent)] bg-[var(--pod-accent-tint)] px-4 py-3 text-sm leading-relaxed text-[var(--color-ink-secondary)]">
                {pod.wedge.guardrail}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-3">
              {pod.wedge.points.map((pt) => (
                <li
                  key={pt}
                  className="flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-canvas-raised)] px-4 py-3.5"
                >
                  <span aria-hidden="true" className="mt-0.5 text-[var(--pod-accent-deep)]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.3" />
                      <path d="M5.5 9.2l2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[0.95rem] leading-snug text-[var(--color-ink)]">{pt}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Workflow story / internal tools ── */}
      <section className="border-y border-[var(--color-hairline)] bg-[var(--color-canvas-raised)]">
        <div className="container-page py-16 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="The operations layer"
              title="Then we build what comes after the call."
              lead="The receptionist proves the model. The value is the workflows and internal tools we build around it — shaped to how your business actually runs."
            />
          </Reveal>
          <ol className="mt-10 grid gap-4 md:grid-cols-2">
            {pod.workflows.map((w, i) => (
              <Reveal as="li" key={w.title} delay={i * 0.05}>
                <div className="flex h-full gap-4 rounded-[var(--radius-md)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] p-6">
                  <span className="font-[var(--font-display)] text-xl text-[var(--pod-accent-deep)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-[1.05rem] font-semibold text-[var(--color-ink)]">{w.title}</h3>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[0.68rem] font-semibold uppercase tracking-wide ${
                          w.status === "built"
                            ? "bg-[var(--pod-accent-tint)] text-[var(--pod-accent-deep)]"
                            : "border border-[var(--color-hairline)] text-[var(--color-ink-muted)]"
                        }`}
                      >
                        {w.status === "built" ? "Shipped" : "We build it"}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-secondary)]">{w.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
          <p className="mt-6 text-sm text-[var(--color-ink-muted)]">
            “Shipped” runs in our product today. “We build it” is scoped and built with you — we never show a tool we haven&rsquo;t built.
          </p>
        </div>
      </section>

      {/* ── Honest proof ── */}
      <section data-pod={pod.slug} className="bg-[var(--color-ink-invert)] text-[var(--color-paper-on-dark)]">
        <div className="container-page py-16 md:py-24">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--pod-accent)" }}>
              {pod.proof.kind === "live-client" ? "A live client, today" : "Real, callable proof"}
            </p>
            <div className="mt-4 max-w-3xl space-y-4">
              {pod.proof.lines.map((line) => (
                <p key={line} className="text-[1.15rem] leading-relaxed text-white/80">
                  {line}
                </p>
              ))}
            </div>
            <p className="mt-8 text-sm text-white/45">
              We don&rsquo;t publish customer logos, testimonials, or metrics we can&rsquo;t verify — when we have them and permission to share, they&rsquo;ll be here.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="scroll-mt-24">
        <div className="container-page py-16 md:py-24">
          <Reveal>
            <SectionHeading eyebrow="Questions" title={`${pod.label} owners ask`} />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10 max-w-3xl">
              <FAQAccordion items={pod.faqs} idBase={`${pod.slug}-faq`} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA + cross-links ── */}
      <section className="border-t border-[var(--color-hairline)] bg-[var(--color-canvas-raised)]">
        <div className="container-page py-20 text-center md:py-24">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,4vw,2.9rem)] leading-tight text-[var(--color-ink)]">
              See what it does for your {pod.label} operation.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-ink-secondary)]">
              A short discovery call — hear the live demo, talk through your calls, and scope the right first step.
            </p>
            <div className="mt-8 flex justify-center">
              <CtaRow demoHref="/#demo" />
            </div>
            <div className="mt-10">
              <p className="mb-3 text-sm text-[var(--color-ink-muted)]">Other industries we build for:</p>
              <ul className="flex flex-wrap justify-center gap-2">
                {others.map((s) => (
                  <li key={s.slug} data-pod={s.slug}>
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-hairline)] bg-[var(--color-canvas)] px-3.5 py-2 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--pod-accent)] hover:bg-[var(--pod-accent-tint)]"
                    >
                      <span className="text-[var(--pod-accent-deep)]">
                        <PodIcon icon={s.icon} size={16} />
                      </span>
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
