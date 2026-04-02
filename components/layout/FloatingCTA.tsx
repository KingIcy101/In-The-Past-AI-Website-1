"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconCalendar, IconChat, IconLightning, IconClose, IconHourglass } from "@/components/ui/Icons";

const DEMO_URL = "https://intake-form-sigma.vercel.app";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(t);
  }, []);

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
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl p-4 w-52"
                style={{
                  background: "rgba(12,8,5,0.98)",
                  border: "1px solid rgba(224,136,60,0.2)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#e0883c" }}>
                  Get Started
                </p>
                {[
                  { label: "Book a Discovery Call", Icon: IconCalendar },
                  { label: "Talk to Us",             Icon: IconChat },
                  { label: "How It Works",           Icon: IconLightning },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 transition-all"
                    style={{ color: "#f2ece0" }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "rgba(224,136,60,0.1)"}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "transparent"}
                  >
                    <item.Icon size={16} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setExpanded(!expanded)}
            className="w-13 h-13 rounded-full flex items-center justify-center text-xl cursor-pointer relative"
            style={{
              width: 52,
              height: 52,
              background: "linear-gradient(135deg, #e0883c, #8a3c14)",
              boxShadow: "0 4px 24px rgba(224,136,60,0.35)",
            }}
          >
            <motion.span
              key={expanded ? "x" : "h"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              style={{ color: "#0a0704", fontWeight: 700, fontSize: 18 }}
            >
              {expanded ? <IconClose size={18} color="#0a0704" /> : <IconHourglass size={20} color="#0a0704" />}
            </motion.span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
