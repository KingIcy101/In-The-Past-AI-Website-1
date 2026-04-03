import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import FloatingNav from "@/components/layout/FloatingNav";
import FloatingCTA from "@/components/layout/FloatingCTA";
import VoiceWidget from "@/components/layout/VoiceWidget";
import CustomCursor from "@/components/ui/CustomCursor";
import AuraBackground from "@/components/ui/AuraBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "In The Past AI | AI Receptionists That Never Sleep",
  description:
    "24/7 AI receptionists that answer calls, book appointments, and capture leads. Voice agents, website chatbots, and internal automation — built for businesses that run on calls.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body>
        <ScrollProgress />
        <AuraBackground />
        <CustomCursor />
        <FloatingNav />
        <main>{children}</main>
        <FloatingCTA />
        <VoiceWidget />
      </body>
    </html>
  );
}
