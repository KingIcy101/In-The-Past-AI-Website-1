"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalModal({ isOpen, onClose }: CalModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          style={{ background: "rgba(10,7,4,0.85)", backdropFilter: "blur(8px)" }}
          onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
            style={{
              background: "#0E0B08",
              border: "1px solid rgba(224,136,60,0.15)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(224,136,60,0.08)",
              height: "min(85vh, 700px)",
            }}
          >
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ borderBottom: "1px solid rgba(224,136,60,0.1)" }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "rgba(224,136,60,0.6)" }}>
                  In The Past AI
                </p>
                <p className="text-sm font-semibold mt-0.5" style={{ color: "#f2ece0" }}>
                  Book a Discovery Call
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-150"
                style={{ background: "rgba(224,136,60,0.08)", color: "#e0883c" }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "rgba(224,136,60,0.16)"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "rgba(224,136,60,0.08)"}
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <iframe
              src="https://cal.com/randy-mendez/ai-receptionist-discovery?embed=true&theme=dark"
              className="w-full"
              style={{ height: "calc(100% - 61px)", border: "none" }}
              title="Book a Discovery Call"
              loading="eager"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
