import type { Metadata } from "next";

// ZTA-835 validation amendment 7: /funnel is a legacy local page carrying
// placeholder testimonials and public pricing that contradict the "book a call"
// v1 decision. It is noindex-parked (kept working, not linked from the new nav
// or footer) until a separate approved pass rewrites it.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function FunnelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
