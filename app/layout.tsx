import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/layout/SiteShell";

// Editorial serif for headings — the decisive break from the geometric-sans
// AI-SaaS look, next/font self-hosted (no new external host / CSP change).
const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.inthepast.ai"),
  title: {
    default: "In The Past AI | AI operations for local businesses",
    template: "%s | In The Past AI",
  },
  description:
    "We start by answering every call, then build the follow-up, booking, reporting, and internal tools your business actually runs on — for auto repair, HVAC, dental, roofing, and med spas.",
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  openGraph: {
    title: "In The Past AI | AI operations for local businesses",
    description:
      "Start with the calls you miss. Build the operating system around them — follow-up, booking, reporting, and custom internal tools per industry.",
    url: "https://www.inthepast.ai",
    siteName: "In The Past AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
