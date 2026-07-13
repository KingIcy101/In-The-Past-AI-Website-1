"use client";

import { useState, useEffect, useRef } from "react";
import Vapi from "@vapi-ai/web";
import { motion, AnimatePresence } from "framer-motion";
import VeraModal from "./VeraModal";

const PHRASES = [
  "Talk to a live AI receptionist.",
  "Ask it anything a customer would.",
  "Hear how it answers, right now.",
  "It answers in English or Spanish.",
  "No wait — it's live.",
];

export default function VoiceWidget() {
  const vapiRef = useRef<InstanceType<typeof Vapi> | null>(null);
  const [show, setShow] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [tooltipVisible, setTooltipVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 4000);
    return () => clearTimeout(t);
  }, []);

  // Cycle phrases every 4s
  useEffect(() => {
    if (modalOpen) return;
    const t = setInterval(() => {
      setTooltipVisible(false);
      setTimeout(() => {
        setPhraseIdx((i) => (i + 1) % PHRASES.length);
        setTooltipVisible(true);
      }, 300);
    }, 4000);
    return () => clearInterval(t);
  }, [modalOpen]);

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2"
          >
            {/* Cycling tooltip */}
            <AnimatePresence>
              {!modalOpen && tooltipVisible && (
                <motion.div
                  key={phraseIdx}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{
                    background: "var(--color-canvas-raised)",
                    color: "var(--color-ink)",
                    border: "1px solid var(--color-hairline)",
                    boxShadow: "var(--shadow-md)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {PHRASES[phraseIdx]}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setModalOpen(true)}
              aria-label="Talk to Vera"
              className="flex items-center gap-2.5 px-4 py-3 rounded-full text-sm font-semibold cursor-pointer"
              style={{
                background: "var(--color-amber)",
                color: "#ffffff",
                boxShadow: "var(--shadow-md)",
              }}
            >
              {/* Voice agent icon */}
              <span className="flex items-center justify-center flex-shrink-0" style={{ width: 20, height: 20 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="8" cy="7.5" r="0.9" fill="currentColor"/>
                  <circle cx="12" cy="7.5" r="0.9" fill="currentColor"/>
                  <path d="M8.2 9.5 Q10 11 11.8 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                  <path d="M3.5 6.5 Q2.5 8 3.5 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.7"/>
                  <path d="M16.5 6.5 Q17.5 8 16.5 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.7"/>
                  <path d="M7 13 Q10 15.5 13 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
                  <line x1="10" y1="13" x2="10" y2="15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </span>
              <span>Talk to Vera</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {modalOpen && (
        <VeraModal
          open={modalOpen}
          onClose={() => {
            if (vapiRef.current) {
              try { vapiRef.current.stop(); } catch {}
              vapiRef.current = null;
            }
            setModalOpen(false);
          }}
          vapiRef={vapiRef}
        />
      )}
    </>
  );
}
