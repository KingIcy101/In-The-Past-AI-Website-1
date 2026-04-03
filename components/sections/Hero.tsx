"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { IconRobot, IconPhone, IconPlay } from "@/components/ui/Icons";
import { useCalModal } from "@/contexts/CalModalContext";


const words = ["Call.", "Lead.", "Booking.", "Opportunity."];

const SCRIPT = [
  { role: "agent",  text: "Good afternoon, thank you for calling. How can I help?" },
  { role: "caller", text: "Hi, I need to book an appointment." },
  { role: "agent",  text: "Of course! What date works best for you?" },
  { role: "caller", text: "This Thursday if possible." },
  { role: "agent",  text: "Thursday at 2PM is available — shall I confirm?" },
  { role: "caller", text: "Yes please!" },
  { role: "agent",  text: "Done! You'll receive a confirmation SMS shortly." },
];

const BAR_HEIGHTS = [0.35, 0.55, 0.8, 1, 0.65, 0.4, 0.9, 0.6, 1, 0.45, 0.3, 0.85, 0.7, 0.95, 0.5, 1, 0.6, 0.75, 0.35, 0.7, 1, 0.5, 0.45, 0.9, 0.6, 0.8, 0.4, 0.55];

function PhoneMockup() {
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);
  const [timer, setTimer] = useState(0);
  const transcriptRef = useRef<HTMLDivElement>(null);

  // Tick call timer
  useEffect(() => {
    const t = setInterval(() => setTimer((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  // Advance conversation with typing indicator between each message
  useEffect(() => {
    if (visible >= SCRIPT.length) {
      // Restart after a pause
      const t = setTimeout(() => setVisible(0), 3200);
      return () => clearTimeout(t);
    }
    setTyping(true);
    const delay = visible === 0 ? 800 : 1600 + Math.random() * 600;
    const t = setTimeout(() => {
      setTyping(false);
      setVisible((v) => v + 1);
    }, delay);
    return () => clearTimeout(t);
  }, [visible]);

  // Auto-scroll transcript to bottom
  useEffect(() => {
    const el = transcriptRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [visible, typing]);

  const fmt = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div className="relative mx-auto" style={{ width: 248, height: 504 }}>
      {/* Outer ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-24px",
          borderRadius: 60,
          background: "radial-gradient(ellipse at 50% 50%, rgba(224,136,60,0.13) 0%, transparent 70%)",
          filter: "blur(16px)",
        }}
      />

      {/* Phone shell */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          borderRadius: 44,
          background: "linear-gradient(165deg, #1f1409 0%, #110b06 45%, #0a0703 100%)",
          border: "1.5px solid rgba(224,136,60,0.28)",
          boxShadow:
            "0 0 0 1px rgba(224,136,60,0.12), inset 0 1px 0 rgba(224,136,60,0.18), 0 32px 80px rgba(0,0,0,0.6)",
        }}
      >
        {/* Top edge highlight */}
        <div
          className="absolute top-0 left-10 right-10 h-px pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(224,136,60,0.45), transparent)" }}
        />

        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-3.5 pb-1">
          <span className="text-xs font-semibold" style={{ color: "#f2ece0", fontVariantNumeric: "tabular-nums" }}>
            9:41
          </span>
          {/* Dynamic island */}
          <div
            className="flex items-center justify-center gap-1.5 px-3"
            style={{
              height: 22,
              borderRadius: 11,
              background: "#060402",
              border: "1px solid rgba(224,136,60,0.1)",
            }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ background: "#4ade80" }}
            />
            <div
              className="w-3 h-3 rounded-full"
              style={{ border: "1.5px solid rgba(224,136,60,0.35)" }}
            />
          </div>
          {/* Battery / signal */}
          <div className="flex items-center gap-1">
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <rect x="0.5" y="0.5" width="11" height="7" rx="1.5" stroke="rgba(224,136,60,0.4)" />
              <rect x="12" y="2.5" width="1.5" height="3" rx="0.75" fill="rgba(224,136,60,0.4)" />
              <rect x="1.5" y="1.5" width="8" height="5" rx="1" fill="rgba(224,136,60,0.5)" />
            </svg>
          </div>
        </div>

        {/* Call header */}
        <div className="text-center pt-3 pb-2 px-4">
          <div className="relative mx-auto mb-2.5" style={{ width: 60, height: 60 }}>
            {/* Pulse rings */}
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full"
                animate={{ scale: [1, 1.55 + i * 0.25], opacity: [0.45, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.75, ease: "easeOut" }}
                style={{ border: "1px solid rgba(224,136,60,0.5)" }}
              />
            ))}
            <div
              className="w-full h-full rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(224,136,60,0.22), rgba(224,136,60,0.06))",
                border: "1.5px solid rgba(224,136,60,0.4)",
                boxShadow: "0 0 20px rgba(224,136,60,0.15), inset 0 1px 0 rgba(224,136,60,0.2)",
              }}
            >
              <IconRobot size={26} />
            </div>
          </div>

          <p
            className="text-[13px] font-bold tracking-tight"
            style={{ color: "#f2ece0", fontFamily: "var(--font-display)" }}
          >
            AI Receptionist
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-0.5">
            <motion.span
              className="w-1.5 h-1.5 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              style={{ background: "#4ade80" }}
            />
            <span
              className="text-xs font-semibold"
              style={{ color: "#4ade80", fontVariantNumeric: "tabular-nums" }}
            >
              {fmt(timer)}
            </span>
          </div>
        </div>

        {/* Waveform */}
        <div className="flex items-end justify-center gap-[2.5px] px-8 mb-2" style={{ height: 40 }}>
          {BAR_HEIGHTS.map((h, i) => (
            <motion.div
              key={i}
              className="rounded-full flex-shrink-0"
              style={{
                width: 3,
                background: `linear-gradient(to top, rgba(138,101,48,0.7), rgba(224,136,60,${0.45 + h * 0.55}))`,
              }}
              animate={{
                height: [
                  `${Math.max(4, h * 28)}px`,
                  `${Math.max(4, BAR_HEIGHTS[(i + 4) % BAR_HEIGHTS.length] * 38)}px`,
                  `${Math.max(4, BAR_HEIGHTS[(i + 9) % BAR_HEIGHTS.length] * 20)}px`,
                  `${Math.max(4, h * 28)}px`,
                ],
              }}
              transition={{
                duration: 0.9 + (i % 6) * 0.14,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.038,
              }}
            />
          ))}
        </div>

        {/* Divider */}
        <div
          className="mx-5 mb-2"
          style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(224,136,60,0.12), transparent)" }}
        />

        {/* Transcript */}
        <div
          ref={transcriptRef}
          className="px-3 pb-2 flex flex-col gap-1.5"
          style={{
            height: 192,
            overflowY: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <AnimatePresence initial={false}>
            {SCRIPT.slice(0, visible).map((l, i) => (
              <motion.div
                key={`msg-${i}`}
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`flex ${l.role === "caller" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="max-w-[82%] px-3 py-2 text-[11px] leading-relaxed"
                  style={
                    l.role === "agent"
                      ? {
                          background: "linear-gradient(135deg, rgba(224,136,60,0.2), rgba(224,136,60,0.1))",
                          color: "#f2ece0",
                          borderRadius: "14px 14px 14px 3px",
                          border: "1px solid rgba(224,136,60,0.15)",
                        }
                      : {
                          background: "rgba(255,255,255,0.08)",
                          color: "#d4c8b8",
                          borderRadius: "14px 14px 3px 14px",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }
                  }
                >
                  {l.text}
                </div>
              </motion.div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.18 }}
                className="flex justify-start"
              >
                <div
                  className="flex items-center gap-1 px-3 py-2"
                  style={{
                    background: "rgba(224,136,60,0.1)",
                    border: "1px solid rgba(224,136,60,0.12)",
                    borderRadius: "14px 14px 14px 3px",
                  }}
                >
                  {[0, 1, 2].map((d) => (
                    <motion.div
                      key={d}
                      className="w-1 h-1 rounded-full"
                      style={{ background: "rgba(224,136,60,0.65)" }}
                      animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 0.7, repeat: Infinity, delay: d * 0.16, ease: "easeInOut" }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* End call button */}
        <div className="absolute bottom-7 left-0 right-0 flex justify-center">
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              style={{ background: "rgba(220, 50, 50, 0.4)" }}
            />
            <div
              className="relative w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(210,45,45,0.95), rgba(160,30,30,0.95))",
                border: "1px solid rgba(240,100,100,0.3)",
                boxShadow: "0 4px 16px rgba(200,40,40,0.4)",
              }}
            >
              <span style={{ transform: "rotate(135deg)", display: "flex" }}>
                <IconPhone size={18} color="rgba(255,200,200,0.95)" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TypewriterWord() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx];
    if (!deleting && displayed.length < word.length) {
      const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
      return () => clearTimeout(t);
    } else if (!deleting && displayed.length === word.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    } else if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
      return () => clearTimeout(t);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % words.length);
    }
  }, [displayed, deleting, idx]);

  return (
    <span className="gradient-amber">
      {displayed}
      <span className="animate-blink" style={{ color: "#e0883c" }}>|</span>
    </span>
  );
}

export default function Hero() {
  const { open: openCal } = useCalModal();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.25, 0.8], [1, 1, 0]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const phoneScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
        ref={sectionRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(224,136,60,0.08) 0%, #0a0704 60%)" }}
      >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "linear-gradient(rgba(224,136,60,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(224,136,60,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: Copy — moves up + fades as user scrolls past hero */}
          <motion.div className="flex flex-col gap-8" style={{ y: textY, opacity: textOpacity }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 self-start"
            >
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: "#f2ece0" }}>
                AI Reception · Always On
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1
                className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight"
                style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}
              >
                Never Miss
                <br />
                Another{" "}
                <TypewriterWord />
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed max-w-lg"
              style={{ color: "#f2ece0" }}
            >
              Your AI receptionist picks up every call, books every appointment, and captures every lead —
              <span style={{ color: "#f2ece0" }}> 24 hours a day, 7 days a week, 365 days a year.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3"
            >
              <button
                onClick={openCal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer w-full sm:w-auto"
                style={{
                  background: "linear-gradient(135deg, #f0a050, #d07030, #a84820)",
                  color: "#0a0704",
                  boxShadow: "0 4px 24px rgba(224,136,60,0.3)",
                }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.transform = ""}
              >
                Book a Discovery Call →
              </button>
              <button
                onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer w-full sm:w-auto"
                style={{
                  background: "rgba(224,136,60,0.07)",
                  color: "#e0883c",
                  border: "1px solid rgba(224,136,60,0.2)",
                }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "rgba(224,136,60,0.12)"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "rgba(224,136,60,0.07)"}
              >
                <IconPlay size={14} /> Try the Demo
              </button>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 flex-wrap"
            >
              {[
                { val: "42,680+", label: "Calls" },
                { val: "13,820+", label: "Bookings" },
                { val: "250+", label: "Businesses" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  {i > 0 && <span style={{ color: "rgba(224,136,60,0.45)" }}>·</span>}
                  <span className="text-sm font-bold" style={{ color: "#e0883c" }}>{s.val}</span>
                  <span className="text-xs" style={{ color: "#f2ece0" }}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Phone mockup — moves slower than viewport (parallax depth) */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 3 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2, type: "spring", stiffness: 60 }}
            style={{ y: phoneY, scale: phoneScale }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              {/* Animated decorative rings */}
              {[300, 400, 500].map((s, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: s, height: s,
                    top: "50%", left: "50%",
                    x: "-50%", y: "-50%",
                    border: "1px solid rgba(224,136,60,0.07)",
                  }}
                  animate={{ scale: [1, 1.04, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3 + i * 1.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
                />
              ))}
              <PhoneMockup />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ color: "rgba(224,136,60,0.65)", fontSize: 20 }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}