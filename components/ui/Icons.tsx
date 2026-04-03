// Central amber-colored SVG icon library
// All icons: stroke="#e0883c", strokeWidth=1.5, rounded caps, 32×32 viewBox

interface IconProps {
  size?: number;
  color?: string;
  opacity?: number;
}

const defaults = (p: IconProps) => ({
  stroke: p.color ?? "#e0883c",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
  opacity: p.opacity ?? 1,
});

export function IconPhone({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path
        d="M6 5h6l2 5-3 2a18 18 0 007 7l2-3 5 2v6c0 1-1 2-2 2C10 26 6 16 6 7c0-1 .9-2 2-2z"
        {...s}
      />
    </svg>
  );
}

export function IconRobot({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="6" y="12" width="20" height="14" rx="3" {...s} />
      <path d="M16 12V7M13 7h6" {...s} />
      <circle cx="16" cy="7" r="1.5" {...s} />
      <circle cx="11" cy="19" r="2" {...s} />
      <circle cx="21" cy="19" r="2" {...s} />
      <path d="M3 17h3M26 17h3" {...s} />
    </svg>
  );
}

export function IconCalendar({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="4" y="6" width="24" height="22" rx="3" {...s} />
      <path d="M4 13h24" {...s} />
      <path d="M11 4v5M21 4v5" {...s} />
      <circle cx="10" cy="20" r="1.2" fill="#e0883c" stroke="none" />
      <circle cx="16" cy="20" r="1.2" fill="#e0883c" stroke="none" />
      <circle cx="22" cy="20" r="1.2" fill="#e0883c" stroke="none" />
      <circle cx="10" cy="24" r="1.2" fill="#e0883c" stroke="none" />
      <circle cx="16" cy="24" r="1.2" fill="#e0883c" stroke="none" />
    </svg>
  );
}

export function IconChat({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M4 6h24a2 2 0 012 2v14a2 2 0 01-2 2H10l-6 4V8a2 2 0 012-2z" {...s} />
      <path d="M10 14h12M10 19h7" {...s} />
    </svg>
  );
}

export function IconLightning({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M18 3L6 18h10l-2 11 14-15H18L20 3z" {...s} />
    </svg>
  );
}

export function IconClock({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" {...s} />
      <path d="M16 9v7l4 3" {...s} />
    </svg>
  );
}

export function IconTarget({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" {...s} />
      <circle cx="16" cy="16" r="7" {...s} />
      <circle cx="16" cy="16" r="2.5" {...s} />
      <path d="M22 4l-2 6-6 2" {...s} />
    </svg>
  );
}

export function IconDatabase({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="9" rx="10" ry="4" {...s} />
      <path d="M6 9v7c0 2.2 4.5 4 10 4s10-1.8 10-4V9" {...s} />
      <path d="M6 16v7c0 2.2 4.5 4 10 4s10-1.8 10-4v-7" {...s} />
    </svg>
  );
}

export function IconSmartphone({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="8" y="2" width="16" height="28" rx="3" {...s} />
      <path d="M14 5h4" {...s} />
      <circle cx="16" cy="26" r="1.2" {...s} />
      <path d="M11 9h10M11 13h7" {...s} />
    </svg>
  );
}

export function IconMoon({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M27 20a12 12 0 01-15-15 10 10 0 1015 15z" {...s} />
      <circle cx="23" cy="7" r="1.2" fill="#e0883c" stroke="none" />
      <circle cx="27" cy="11" r="0.8" fill="#e0883c" stroke="none" />
      <circle cx="25" cy="4" r="0.6" fill="#e0883c" stroke="none" />
    </svg>
  );
}

export function IconBell({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 4a8 8 0 018 8v7l2 2H6l2-2v-7a8 8 0 018-8z" {...s} />
      <path d="M13 23a3 3 0 006 0" {...s} />
    </svg>
  );
}

export function IconBook({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M4 6h10a4 4 0 014 4v17a4 4 0 00-4-4H4V6z" {...s} />
      <path d="M28 6H18a4 4 0 00-4 4v17a4 4 0 014-4h10V6z" {...s} />
      <path d="M14 10v17" {...s} />
    </svg>
  );
}

export function IconPlug({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M12 4v8M20 4v8" {...s} />
      <rect x="8" y="12" width="16" height="7" rx="2" {...s} />
      <path d="M16 19v5M13 24h6" {...s} />
      <path d="M12 8h8" {...s} opacity="0.4" />
    </svg>
  );
}

export function IconBrain({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 28V14" {...s} />
      <path d="M16 14a7 7 0 010-10 5 5 0 015 5 4 4 0 014 4 5 5 0 01-5 5h-4z" {...s} />
      <path d="M16 14a7 7 0 000-10 5 5 0 00-5 5 4 4 0 00-4 4 5 5 0 005 5h4z" {...s} />
      <path d="M11 19a4 4 0 000 6h5M21 19a4 4 0 010 6h-5" {...s} />
    </svg>
  );
}

export function IconRocket({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 4C10 4 6 10 6 18h5l-4 8h18l-4-8h5c0-8-4-14-10-14z" {...s} />
      <path d="M12 18a4 4 0 008 0" {...s} />
      <circle cx="16" cy="12" r="2" {...s} />
    </svg>
  );
}

export function IconCheckCircle({ size = 20, color, opacity }: IconProps) {
  const s = defaults({ color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="8" {...s} />
      <path d="M7 10l2 2 4-4" {...s} />
    </svg>
  );
}

export function IconCheck({ size = 16, color, opacity }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8l3 3 7-7" stroke={color ?? "#e0883c"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity={opacity} />
    </svg>
  );
}

export function IconArrowRight({ size = 16, color, opacity }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 5l4 3-4 3" stroke={color ?? "#e0883c"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={opacity} />
    </svg>
  );
}

export function IconArrowDown({ size = 20, color, opacity }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M10 4v12M5 11l5 5 5-5" stroke={color ?? "#e0883c"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={opacity} />
    </svg>
  );
}

export function IconRefresh({ size = 16, color, opacity }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 8a6 6 0 1011-4" stroke={color ?? "#e0883c"} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 4l-2-2 2-2" stroke={color ?? "#e0883c"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity={opacity} />
    </svg>
  );
}

export function IconPlay({ size = 16, color, opacity }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M4 3l10 5-10 5V3z" stroke={color ?? "#e0883c"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill={color ?? "#e0883c"} fillOpacity="0.2" opacity={opacity} />
    </svg>
  );
}

export function IconClose({ size = 16, color, opacity }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M4 4l8 8M12 4l-8 8" stroke={color ?? "#e0883c"} strokeWidth="1.5" strokeLinecap="round" opacity={opacity} />
    </svg>
  );
}

export function IconHourglass({ size = 20, color, opacity }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <path d="M4 2h12M4 18h12" stroke={color ?? "#e0883c"} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 2v3l5 5-5 5v3" stroke={color ?? "#e0883c"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 2v3l-5 5 5 5v3" stroke={color ?? "#e0883c"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Industries (reused from Industries.tsx — centralised here)
export function IconTooth({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ size, color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M10 4C7 4 4 7 4 11c0 2.5 1 5 2 8l1 5c.5 2 1.5 4 3 4s2-1.5 2.5-3.5L13 22h6l.5 2.5C20 26.5 21 28 22.5 28s2.5-2 3-4l1-5c1-3 2-5.5 2-8 0-4-3-7-6-7-1.5 0-3 .5-4 1.5-.5.5-1 1-2 1s-1.5-.5-2-1C13.5 4.5 11.5 4 10 4z" {...s} />
    </svg>
  );
}

export function IconScales({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ size, color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 4v24M10 28h12" {...s} />
      <path d="M8 8l-4 9h8l-4-9z" {...s} />
      <path d="M24 8l-4 9h8l-4-9z" {...s} />
      <path d="M8 8h16" {...s} />
    </svg>
  );
}

export function IconMedicalCross({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ size, color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="4" y="4" width="24" height="24" rx="4" {...s} />
      <path d="M16 10v12M10 16h12" strokeWidth="2" stroke={color ?? "#e0883c"} strokeLinecap="round" />
    </svg>
  );
}

export function IconHomeWrench({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ size, color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M4 14L16 4l12 10v14a2 2 0 01-2 2H6a2 2 0 01-2-2V14z" {...s} />
      <path d="M12 28V20h8v8" {...s} />
      <circle cx="23" cy="22" r="4" {...s} fill="#0a0704" />
      <path d="M21 22h4M23 20v4" strokeWidth="1.2" stroke={color ?? "#e0883c"} strokeLinecap="round" />
    </svg>
  );
}

export function IconBuilding({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ size, color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect x="4" y="6" width="14" height="22" rx="1" {...s} />
      <rect x="18" y="14" width="10" height="14" rx="1" {...s} />
      <path d="M8 10h2M8 14h2M8 18h2M8 22h2" {...s} opacity="0.6" />
      <path d="M21 18h2M21 22h2" {...s} opacity="0.6" />
      <path d="M4 28h24" {...s} />
    </svg>
  );
}

export function IconCar({ size = 32, color, opacity }: IconProps) {
  const s = defaults({ size, color, opacity });
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M6 16l3-7h14l3 7" {...s} />
      <rect x="2" y="16" width="28" height="9" rx="3" {...s} />
      <circle cx="9" cy="25" r="3" {...s} fill="#0a0704" />
      <circle cx="23" cy="25" r="3" {...s} fill="#0a0704" />
      <path d="M6 20h4M22 20h4" strokeWidth="1.2" stroke={color ?? "#e0883c"} strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}
