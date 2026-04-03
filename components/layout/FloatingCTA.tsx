"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconCalendar, IconChat, IconLightning, IconClose, IconHourglass } from "@/components/ui/Icons";

const INTAKE_URL = "https://intake-form-sigma.vercel.app";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const ITEMS = [
  {
    label: "Book a Discovery Call",
    sub: "See if it's right for your business",
    Icon: IconCalendar,
    action: () => window.open(INTAKE_URL, "_blank"),
  },
  {
    label: "Hear Vera Live",
    sub: "Talk to an AI receptionist right now",
    Icon: IconChat,
    action: () => scrollTo("demo"),
  },
  {
    label: "How It Works",
    sub: "Setup takes less than a week",
    Icon: IconLightning,
    action: () => scrollTo("how-it-works"),
  },
];

export default function FloatingCTA() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(t);
  }, []);

  const handleItem = (action: () => void) => {
    action();
    setExpanded(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl overflow-hidden"
                style={{
                  width: 240,
                  background: "rgba(18,12,7,0.98)",
                  border: "1px solid rgba(224,136,60,0.2)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.75), 0 0 40px rgba(224,136,60,0.05)",
                }}
              >
                <div className="px-4 pt-4 pb-2">
                  <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "#e0883c" }}>
                    Get Started
                  </p>
                </div>

                <div className="px-2 pb-3">
                  {ITEMS.map((item, i) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      onClick={() => handleItem(item.action)}
                      className="w-full flex items-start gap-3 px-3 py-3 rounded-xl mb-0.5 text-left cursor-pointer transition-all"
                      style={{ background: "transparent" }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "rgba(224,136,60,0.08)"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "transparent"}
                    >
                      <div
                        className="flex items-center justify-center rounded-lg flex-shrink-0 mt-0.5"
                        style={{ width: 30, height: 30, background: "rgba(224,136,60,0.1)", border: "1px solid rgba(224,136,60,0.15)" }}
                      >
                        <item.Icon size={14} color="#e0883c" />
                      </div>
                      <div>
                        <p className="font-semibold leading-tight" style={{ color: "#f2ece0", fontSize: 13 }}>{item.label}</p>
                        <p className="mt-0.5 leading-snug" style={{ color: "#9a8878", fontSize: 11 }}>{item.sub}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setExpanded(!expanded)}
            className="rounded-full flex items-center justify-center cursor-pointer relative"
            style={{
              width: 52,
              height: 52,
              background: "linear-gradient(135deg, #f09040, #c05818, #8a3c14)",
              boxShadow: "0 4px 24px rgba(224,136,60,0.38)",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={expanded ? "x" : "h"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {expanded ? <IconClose size={18} color="#0a0704" /> : <IconHourglass size={20} color="#0a0704" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
