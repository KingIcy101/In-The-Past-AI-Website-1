// The five-stage operations progression — the homepage differentiator and the
// visible "human system" (Matt-test #1). Semantic <ol>; the connector track is
// decorative. Horizontal on desktop, vertical on mobile. Static (no motion),
// so it is reduced-motion-safe by construction.

const STAGES = [
  { n: "01", label: "Answer & capture", line: "Every call picked up, in English and Spanish, and captured — not sent to voicemail." },
  { n: "02", label: "Qualify & route", line: "Understand the caller, screen the request, and route emergencies and VIP leads correctly." },
  { n: "03", label: "Follow up & book", line: "Book against your real schedule, confirm, remind, and chase the leads that would slip." },
  { n: "04", label: "Operate & report", line: "An honest owner view of what the phone did — recovered calls, booked jobs, after-hours." },
  { n: "05", label: "Build internal tools", line: "Custom workflows and internal tools wired to how your business actually runs." },
];

export default function WorkflowProgression() {
  return (
    <ol className="relative grid gap-6 md:grid-cols-5 md:gap-4">
      {/* Decorative connector track (desktop). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px bg-[var(--color-hairline)] md:block"
      />
      {STAGES.map((s, i) => (
        <li key={s.n} className="relative">
          <div className="flex items-center gap-3 md:block">
            <span className="relative z-10 flex h-11 w-11 flex-none items-center justify-center rounded-full border border-[var(--color-hairline)] bg-[var(--color-canvas-raised)] font-[var(--font-display)] text-sm font-semibold text-[var(--color-amber-deep)]">
              {s.n}
            </span>
            <h3 className="text-[1.05rem] font-semibold text-[var(--color-ink)] md:mt-4">
              {s.label}
            </h3>
          </div>
          <p className="mt-2 pl-14 text-sm leading-relaxed text-[var(--color-ink-secondary)] md:pl-0">
            {s.line}
          </p>
          {i < STAGES.length - 1 && (
            <span aria-hidden="true" className="sr-only">
              then
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
