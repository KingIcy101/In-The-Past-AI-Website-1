// Pod-native line icons that inherit `currentColor` (so they take the pod
// accent or ink from their context — no hardcoded amber/dark fills like the
// legacy Icons.tsx). 24×24, 1.6 stroke, rounded.
import type { MarketPod } from "@/lib/marketing/market-pods";

type Props = { size?: number; className?: string };

const svg = (size: number, className: string | undefined, children: React.ReactNode) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export function AutoIcon({ size = 24, className }: Props) {
  return svg(size, className, (
    <>
      <path d="M5 13l1.6-4.2A2 2 0 0 1 8.5 7.5h7a2 2 0 0 1 1.9 1.3L19 13" />
      <path d="M3.5 13h17a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1V14a1 1 0 0 1 1-1z" />
      <circle cx="7" cy="18.5" r="1.6" />
      <circle cx="17" cy="18.5" r="1.6" />
    </>
  ));
}

export function HvacIcon({ size = 24, className }: Props) {
  return svg(size, className, (
    <>
      <path d="M12 3v13.2" />
      <circle cx="12" cy="18.5" r="2.5" />
      <path d="M12 3a2 2 0 0 1 2 2v11.5a2 2 0 1 1-4 0V5a2 2 0 0 1 2-2z" />
      <path d="M16 7h3M16 10.5h3" />
    </>
  ));
}

export function DentalIcon({ size = 24, className }: Props) {
  return svg(size, className, (
    <>
      <path d="M12 4.5c-2.4-1.6-6-1.3-6 2.6 0 3.2 1 5.4 1.7 8.4.4 1.6.6 3.5 1.8 3.5 1.1 0 1-2.2 1.5-3.6.2-.6.6-1 1-1s.8.4 1 1c.5 1.4.4 3.6 1.5 3.6 1.2 0 1.4-1.9 1.8-3.5.7-3 1.7-5.2 1.7-8.4 0-3.9-3.6-4.2-6-2.6z" />
    </>
  ));
}

export function RoofingIcon({ size = 24, className }: Props) {
  return svg(size, className, (
    <>
      <path d="M3 12l9-6.5L21 12" />
      <path d="M5.5 10.5V19h13v-8.5" />
      <path d="M10 19v-4.5h4V19" />
    </>
  ));
}

export function MedSpaIcon({ size = 24, className }: Props) {
  return svg(size, className, (
    <>
      <path d="M12 3.5c.6 2.7 1.8 3.9 4.5 4.5-2.7.6-3.9 1.8-4.5 4.5-.6-2.7-1.8-3.9-4.5-4.5 2.7-.6 3.9-1.8 4.5-4.5z" />
      <path d="M17.5 14c.3 1.4.9 2 2.3 2.3-1.4.3-2 .9-2.3 2.3-.3-1.4-.9-2-2.3-2.3 1.4-.3 2-.9 2.3-2.3z" />
    </>
  ));
}

export function LawIcon({ size = 24, className }: Props) {
  return svg(size, className, (
    <>
      <path d="M12 4v16" />
      <path d="M7 20h10" />
      <path d="M5 7h14" />
      <path d="M7 7l-2.5 5a2.6 2.6 0 0 0 5 0L7 7z" />
      <path d="M17 7l-2.5 5a2.6 2.6 0 0 0 5 0L17 7z" />
    </>
  ));
}

const MAP: Record<MarketPod["icon"], (p: Props) => React.ReactElement> = {
  auto: AutoIcon,
  hvac: HvacIcon,
  dental: DentalIcon,
  roofing: RoofingIcon,
  medspa: MedSpaIcon,
  law: LawIcon,
};

export default function PodIcon({ icon, size = 24, className }: Props & { icon: MarketPod["icon"] }) {
  const Cmp = MAP[icon];
  return <Cmp size={size} className={className} />;
}
