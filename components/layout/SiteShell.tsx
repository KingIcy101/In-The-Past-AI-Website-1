"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import SiteNav from "@/components/layout/SiteNav";
import Footer from "@/components/layout/Footer";
import VoiceWidget from "@/components/layout/VoiceWidget";
import { CalModalProvider } from "@/contexts/CalModalContext";

// Embed routes (intake/portal/ops wrappers) render bare — no marketing chrome.
const EMBED_ROUTE_PREFIXES = ["/intake", "/intake-auto-repair", "/portal", "/ops"];

function isEmbedRoute(pathname: string) {
  return EMBED_ROUTE_PREFIXES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}

// Streamlined shell (validation amendment 4): route-aware SiteNav, real footer,
// and exactly ONE persistent floating action (the Vera voice widget). The
// custom cursor, aura orbs, scroll-progress bar, and second floating CTA are
// removed with the dark theme.
export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (isEmbedRoute(pathname)) {
    return <main>{children}</main>;
  }

  return (
    <CalModalProvider>
      <SiteNav />
      <main className="pt-[68px]">{children}</main>
      <Footer />
      <VoiceWidget />
    </CalModalProvider>
  );
}
