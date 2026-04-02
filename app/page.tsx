import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import LiveCounter from "@/components/sections/LiveCounter";
import DemoSection from "@/components/sections/DemoSection";
import WhatWeBuild from "@/components/sections/WhatWeBuild";
import Industries from "@/components/sections/Industries";
import Features from "@/components/sections/Features";
import TrustSignals from "@/components/sections/TrustSignals";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LiveCounter />
      <PainPoints />
      <DemoSection />
      <WhatWeBuild />
      <Industries />
      <Features />
      <TrustSignals />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
