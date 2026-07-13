"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import FloatingNav from "@/components/layout/FloatingNav";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Footer from "@/components/layout/Footer";
import VoiceWidget from "@/components/layout/VoiceWidget";
import CustomCursor from "@/components/ui/CustomCursor";
import AuraBackground from "@/components/ui/AuraBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { CalModalProvider } from "@/contexts/CalModalContext";

const EMBED_ROUTE_PREFIXES = [
  "/intake",
  "/intake-auto-repair",
  "/portal",
  "/ops",
];

function isEmbedRoute(pathname: string) {
  return EMBED_ROUTE_PREFIXES.some(route => pathname === route || pathname.startsWith(`${route}/`));
}

export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (isEmbedRoute(pathname)) {
    return <main>{children}</main>;
  }

  return (
    <CalModalProvider>
      <ScrollProgress />
      <AuraBackground />
      <CustomCursor />
      <FloatingNav />
      <main>{children}</main>
      <FloatingCTA />
      <Footer />
      <VoiceWidget />
    </CalModalProvider>
  );
}
