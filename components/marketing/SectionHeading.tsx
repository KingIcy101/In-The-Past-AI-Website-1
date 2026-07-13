import type { ReactNode } from "react";

// Shared editorial section header: uppercase accent eyebrow + Fraunces H2 + lead.
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`${alignCls} ${align === "center" ? "max-w-2xl" : "max-w-3xl"} ${className}`}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="text-[clamp(2rem,4vw,3rem)] leading-[1.1] text-[var(--color-ink)]">{title}</h2>
      {lead ? (
        <p className="mt-4 text-[clamp(1.05rem,1.5vw,1.2rem)] leading-relaxed text-[var(--color-ink-secondary)]">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
