'use client';

import { motion } from 'framer-motion';
import PhoneMockup from './PhoneMockup';
import CTA from './CTA';
import TrustBar from './TrustBar';

export default function HeroSection() {
  const stagger = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1 },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[radial-gradient(ellipse_at_center,#0A0A0A_0%,#000000_75%)]">
      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #F5F5F5 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <div className="flex-1 max-w-xl lg:max-w-none">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-medium">
                Trusted by 200+ businesses
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="text-text-primary text-[36px] sm:text-[56px] font-bold tracking-tight leading-[1.1] mb-6"
            >
              Every{' '}
              <span className="text-accent">Missed Call</span>
              <br />
              Is a Lost Customer
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="text-text-secondary text-[17px] sm:text-[20px] leading-relaxed max-w-lg mb-8"
            >
              In The Past AI is a voice receptionist that answers every call,
              24/7 — booking appointments, answering questions, and never
              letting a customer slip away.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <CTA />
            </motion.div>

            {/* Trust Bar */}
            <TrustBar />
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex-shrink-0">
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  );
}
