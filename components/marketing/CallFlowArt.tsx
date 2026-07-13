// Code-drawn operational illustration for the hero — a stylized call flowing
// into a captured, routed, booked record. Process art, not a stock photo and
// not a fabricated product screenshot (design packet §11). Inherits currentColor
// via the surrounding pod scope; decorative only.
export default function CallFlowArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 360"
      className={className}
      role="img"
      aria-label="An incoming call being answered, captured, and booked into a schedule."
    >
      <defs>
        <linearGradient id="cf-fade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--pod-accent)" stopOpacity="0.14" />
          <stop offset="1" stopColor="var(--pod-accent)" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* Canvas card */}
      <rect x="8" y="8" width="404" height="344" rx="16" fill="var(--color-canvas-raised)" stroke="var(--color-hairline)" />
      <rect x="8" y="8" width="404" height="344" rx="16" fill="url(#cf-fade)" />

      {/* Incoming call chip */}
      <g>
        <rect x="30" y="34" width="150" height="46" rx="10" fill="var(--pod-accent-tint)" stroke="var(--color-hairline)" />
        <circle cx="53" cy="57" r="12" fill="var(--color-canvas-raised)" stroke="var(--pod-accent)" />
        <path d="M48 53h4l1.5 3.5-2 1.3a8 8 0 004 4l1.3-2 3.5 1.5v4c0 .6-.5 1-1 1-6 0-10-6-10-11 0-.6.5-1 1.2-1z" fill="var(--pod-accent-deep)" />
        <rect x="72" y="48" width="90" height="7" rx="3.5" fill="var(--color-ink)" opacity="0.75" />
        <rect x="72" y="61" width="60" height="6" rx="3" fill="var(--color-ink-muted)" />
      </g>

      {/* Flow connector */}
      <path d="M105 82 v22 h150 v18" fill="none" stroke="var(--color-hairline)" strokeWidth="2" />
      <circle cx="105" cy="104" r="3" fill="var(--pod-accent)" />

      {/* Captured / routed rows */}
      <g>
        <rect x="30" y="118" width="360" height="66" rx="12" fill="var(--color-canvas)" stroke="var(--color-hairline)" />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(0 ${i * 18})`}>
            <circle cx="50" cy="140" r="4.5" fill="none" stroke="var(--pod-accent)" strokeWidth="1.6" />
            <path d="M47.7 140l1.7 1.7 3-3.4" fill="none" stroke="var(--pod-accent-deep)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="66" y="136" width={[180, 150, 120][i]} height="7" rx="3.5" fill="var(--color-ink)" opacity={0.62 - i * 0.12} />
          </g>
        ))}
      </g>

      {/* Booked into schedule */}
      <path d="M210 184 v20" fill="none" stroke="var(--color-hairline)" strokeWidth="2" />
      <g>
        <rect x="30" y="212" width="360" height="112" rx="12" fill="var(--color-canvas-raised)" stroke="var(--color-hairline)" />
        <rect x="30" y="212" width="360" height="30" rx="12" fill="var(--pod-accent-tint)" />
        <rect x="46" y="223" width="70" height="8" rx="4" fill="var(--pod-accent-deep)" />
        {/* schedule grid */}
        {[0, 1, 2, 3, 4].map((c) => (
          <line key={c} x1={46 + c * 66} y1="252" x2={46 + c * 66} y2="312" stroke="var(--color-hairline)" />
        ))}
        {[0, 1, 2].map((r) => (
          <line key={r} x1="46" y1={252 + r * 20} x2="376" y2={252 + r * 20} stroke="var(--color-hairline)" />
        ))}
        {/* booked slot */}
        <rect x="114" y="254" width="62" height="17" rx="4" fill="var(--pod-accent)" opacity="0.85" />
        <rect x="180" y="274" width="62" height="17" rx="4" fill="var(--pod-accent)" opacity="0.5" />
        <rect x="246" y="294" width="62" height="16" rx="4" fill="var(--color-amber)" opacity="0.55" />
      </g>
    </svg>
  );
}
