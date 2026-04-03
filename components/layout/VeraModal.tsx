"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Vapi from "@vapi-ai/web";

const VERA_ASSISTANT_ID = "ed8bf625-bb0b-4813-8a4b-726cb5fc4dc4";
const MAX_DURATION = 180;

type Status = "idle" | "connecting" | "active" | "ending";

interface Message {
  role: "user" | "assistant";
  text: string;
}

export default function VeraModal({
  open,
  onClose,
  vapiRef,
}: {
  open: boolean;
  onClose: () => void;
  vapiRef: React.MutableRefObject<InstanceType<typeof Vapi> | null>;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [callSeconds, setCallSeconds] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [partialText, setPartialText] = useState("");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const callCountRef = useRef(0);
  const lastCallEndRef = useRef(0);

  const isActive = status === "active";
  const busy = status === "connecting" || status === "ending";
  const remaining = MAX_DURATION - callSeconds;
  const pct = Math.min(100, (callSeconds / MAX_DURATION) * 100);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, partialText]);

  const initVapi = () => {
    const key = process.env.NEXT_PUBLIC_VAPI_KEY;
    if (!key || vapiRef.current) return vapiRef.current;
    const instance = new Vapi(key);

    instance.on("call-start", () => {
      setStatus("active");
      setCallSeconds(0);
      setMessages([]);
      timerRef.current = setInterval(() => setCallSeconds((s) => s + 1), 1000);
      // Daily.co starts with audio muted — force unmute at multiple intervals
      [0, 300, 800, 1500].forEach(ms => {
        setTimeout(() => { try { instance.setMuted(false); } catch {} }, ms);
      });
    });
    instance.on("call-end", () => {
      setStatus("idle");
      setIsSpeaking(false);
      setCallSeconds(0);
      lastCallEndRef.current = Date.now();
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    });
    instance.on("speech-start", () => setIsSpeaking(true));
    instance.on("speech-end", () => setIsSpeaking(false));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    instance.on("message", (msg: any) => {
      if (msg.type === "transcript") {
        if (msg.transcriptType === "partial") {
          if (msg.role === "user") setPartialText(msg.transcript || "");
        } else if (msg.transcriptType === "final" && msg.transcript?.trim()) {
          const role = msg.role === "assistant" ? "assistant" : "user";
          setMessages((prev) => [...prev, { role, text: msg.transcript.trim() }]);
          setPartialText("");
        }
      }
      if (msg.type === "conversation-update" && Array.isArray(msg.conversation)) {
        const mapped: Message[] = msg.conversation
          .filter((m: { role: string; content?: string }) => m.role !== "system" && m.content?.trim())
          .map((m: { role: string; content: string }) => ({
            role: m.role === "assistant" ? "assistant" : "user",
            text: m.content.trim(),
          }));
        if (mapped.length > messages.length) setMessages(mapped);
      }
    });

    instance.on("error", (e: unknown) => {
      const msg = e instanceof Error ? e.message : String(e);
      if (msg.toLowerCase().includes("mic") || msg.toLowerCase().includes("audio") || msg.toLowerCase().includes("permission")) {
        setMessages(prev => [...prev, { role: "assistant", text: "Mic error: " + msg + ". Check your browser mic permissions." }]);
      }
      setStatus("idle");
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    });

    vapiRef.current = instance;
    return instance;
  };

  useEffect(() => {
    return () => {
      if (vapiRef.current) vapiRef.current.stop();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleCall = async () => {
    if (status === "active") {
      const vapi = vapiRef.current;
      if (vapi) { setStatus("ending"); lastCallEndRef.current = Date.now(); vapi.stop(); }
      return;
    }
    if (status === "idle") {
      if (callCountRef.current >= 3) return;
      if (Date.now() - lastCallEndRef.current < 30_000) return;

      // Check mic permission state without acquiring (avoids race with Vapi)
      try {
        const result = await navigator.permissions.query({ name: "microphone" as PermissionName });
        if (result.state === "denied") {
          setMessages([{ role: "assistant", text: "Microphone is blocked. Click the lock icon in your browser address bar → Site settings → Microphone → Allow, then refresh and try again." }]);
          return;
        }
      } catch { /* permissions API not supported — proceed and let Vapi handle it */ }

      const vapi = initVapi();
      if (!vapi) return;
      callCountRef.current += 1;
      setStatus("connecting");
      try {
        await vapi.start(VERA_ASSISTANT_ID);
        try { vapi.setMuted(false); } catch {}
      } catch (err) {
        callCountRef.current -= 1;
        setStatus("idle");
        const msg = String(err).toLowerCase();
        if (msg.includes("mic") || msg.includes("audio") || msg.includes("permission") || msg.includes("device")) {
          setMessages([{ role: "assistant", text: "Couldn't access your microphone. Please allow mic access in your browser and try again." }]);
        }
      }
    }
  };

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="vera-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
          style={{ backdropFilter: "blur(14px)", background: "rgba(6,4,2,0.82)" }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            key="vera-card"
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 20 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="w-full flex flex-col"
            style={{
              maxWidth: 440,
              width: "100%",
              background: "linear-gradient(160deg, #14110e 0%, #0e0b08 60%, #0a0704 100%)",
              border: "1px solid rgba(224,136,60,0.18)",
              borderRadius: 22,
              boxShadow: "0 40px 100px rgba(0,0,0,0.75), 0 0 80px rgba(224,136,60,0.05)",
              overflow: "hidden",
            }}
          >
            {/* Progress bar */}
            {isActive && (
              <div className="h-0.5 w-full" style={{ background: "rgba(224,136,60,0.08)" }}>
                <motion.div
                  className="h-full"
                  style={{
                    width: `${pct}%`,
                    background: remaining <= 30
                      ? "linear-gradient(90deg, #e0883c, #ff6060)"
                      : "linear-gradient(90deg, #e0883c, #f5a850)",
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            )}

            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-5">
              <div className="flex items-center gap-4">
                {/* Icon — headset/voice AI */}
                <div
                  className="flex items-center justify-center rounded-2xl flex-shrink-0"
                  style={{
                    width: 56, height: 56,
                    background: "linear-gradient(145deg, #f5a050, #d06820, #8a3c14)",
                    boxShadow: isActive
                      ? "0 0 24px rgba(224,136,60,0.6), 0 4px 16px rgba(0,0,0,0.4)"
                      : "0 4px 16px rgba(0,0,0,0.3)",
                    transition: "box-shadow 0.4s",
                  }}
                >
                  {/* Headset icon — clearly a voice AI */}
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <path d="M3 11a9 9 0 0 1 18 0" stroke="rgba(10,7,4,0.85)" strokeWidth="2" strokeLinecap="round"/>
                    <rect x="2" y="11" width="4" height="7" rx="2" fill="rgba(10,7,4,0.85)"/>
                    <rect x="18" y="11" width="4" height="7" rx="2" fill="rgba(10,7,4,0.85)"/>
                    <path d="M21 18v1a3 3 0 0 1-3 3h-3" stroke="rgba(10,7,4,0.85)" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="14.5" cy="22" r="1.5" fill="rgba(10,7,4,0.85)"/>
                  </svg>
                </div>

                <div>
                  <p className="font-bold leading-tight" style={{ color: "#f2ece0", fontSize: 18 }}>Vera</p>
                  <div className="flex items-center gap-2 mt-1">
                    {isActive ? (
                      <>
                        <motion.span
                          className="inline-block w-2 h-2 rounded-full"
                          style={{ background: "#4ade80" }}
                          animate={{ opacity: [1, 0.4, 1] }}
                          transition={{ duration: 1.4, repeat: Infinity }}
                        />
                        <span style={{ color: "#c4b49a", fontSize: 14 }}>Live · {fmt(callSeconds)}</span>
                      </>
                    ) : (
                      <span style={{ color: "#c4b49a", fontSize: 14 }}>AI Receptionist · In The Past AI</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {isActive && remaining <= 60 && (
                  <span className="font-semibold px-2.5 py-1 rounded-full" style={{ background: "rgba(255,80,80,0.12)", color: "#ff8888", fontSize: 13 }}>
                    {fmt(remaining)}
                  </span>
                )}
                  <button
                    onClick={onClose}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer"
                    style={{ background: "rgba(255,255,255,0.06)", color: "#9a8878", fontSize: 15 }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"; (e.currentTarget as HTMLElement).style.color = "#f2ece0"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.color = "#9a8878"; }}
                  >
                    ✕
                  </button>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "rgba(224,136,60,0.1)", marginInline: 24 }} />

            {/* Body */}
            <div
              ref={scrollRef}
              className="overflow-y-auto px-6 py-5 space-y-3"
              style={{ minHeight: 180, maxHeight: "40vh" }}
            >
              {/* Idle state */}
              {messages.length === 0 && status === "idle" && (
                <div className="flex flex-col items-center justify-center gap-4 py-6">
                  {/* Pulse ring */}
                  <div className="relative flex items-center justify-center">
                    <motion.div
                      className="absolute rounded-full"
                      style={{ width: 64, height: 64, border: "1px solid rgba(224,136,60,0.25)" }}
                      animate={{ scale: [1, 1.25], opacity: [0.5, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                    />
                    <motion.div
                      className="absolute rounded-full"
                      style={{ width: 64, height: 64, border: "1px solid rgba(224,136,60,0.15)" }}
                      animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                    />
                    <div
                      className="relative rounded-full flex items-center justify-center"
                      style={{ width: 64, height: 64, background: "rgba(224,136,60,0.1)", border: "1px solid rgba(224,136,60,0.2)" }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" stroke="#e0883c" strokeWidth="1.8" fill="none"/>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="#e0883c" strokeWidth="1.8" strokeLinecap="round"/>
                        <line x1="12" y1="19" x2="12" y2="22" stroke="#e0883c" strokeWidth="1.8" strokeLinecap="round"/>
                        <line x1="8" y1="22" x2="16" y2="22" stroke="#e0883c" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <p className="font-bold" style={{ color: "#f2ece0", fontSize: 18 }}>Hear what you&apos;re missing</p>
                    <p style={{ color: "#c4b49a", fontSize: 15, lineHeight: 1.55 }}>
                      This is a live voice call — right in your browser.<br/>
                      Ask Vera about pricing, setup, or how it works for your industry.
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-2 pt-1" style={{ color: "#9a8878", fontSize: 13 }}>
                    <span>Speak naturally</span>
                    <span style={{ color: "#4a3a2a" }}>·</span>
                    <span>Real-time replies</span>
                    <span style={{ color: "#4a3a2a" }}>·</span>
                    <span>No account needed</span>
                  </div>
                </div>
              )}

              {/* Connecting */}
              {messages.length === 0 && status === "connecting" && (
                <div className="flex flex-col items-center justify-center gap-4 py-12">
                  <div className="flex items-end gap-2" style={{ height: 28 }}>
                    {[0, 0.15, 0.3].map((d) => (
                      <motion.div
                        key={d}
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: "#e0883c" }}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: d }}
                      />
                    ))}
                  </div>
                  <p style={{ color: "#c4b49a", fontSize: 15 }}>Connecting to Vera...</p>
                </div>
              )}

              {/* Messages */}
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[80%] px-4 py-3"
                    style={{
                      fontSize: 14,
                      lineHeight: 1.55,
                      borderRadius: m.role === "assistant" ? "4px 16px 16px 16px" : "16px 4px 16px 16px",
                      ...(m.role === "assistant"
                        ? { background: "rgba(224,136,60,0.1)", color: "#f2ece0", border: "1px solid rgba(224,136,60,0.12)" }
                        : { background: "rgba(255,255,255,0.07)", color: "#e0d8d0" }),
                    }}
                  >
                    <p className="font-semibold mb-1" style={{ color: m.role === "assistant" ? "#e0883c" : "#9a8878", fontSize: 12 }}>
                      {m.role === "assistant" ? "Vera" : "You"}
                    </p>
                    {m.text}
                  </div>
                </motion.div>
              ))}

              {/* Partial */}
              {partialText && (
                <div className="flex justify-end">
                  <div
                    className="max-w-[80%] px-4 py-3 opacity-50"
                    style={{ fontSize: 14, background: "rgba(255,255,255,0.05)", color: "#e0d8d0", borderRadius: "16px 4px 16px 16px" }}
                  >
                    {partialText}
                  </div>
                </div>
              )}

              {/* Vera speaking */}
              {isActive && isSpeaking && (
                <div className="flex justify-start">
                  <div
                    className="px-4 py-3 flex items-end gap-1"
                    style={{ background: "rgba(224,136,60,0.08)", borderRadius: "4px 16px 16px 16px", border: "1px solid rgba(224,136,60,0.12)" }}
                  >
                    {[0, 0.1, 0.2].map((d) => (
                      <motion.div
                        key={d}
                        className="w-1.5 rounded-full"
                        style={{ background: "#e0883c" }}
                        animate={{ height: ["5px", "16px", "5px"] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: d }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 pb-6 pt-4" style={{ borderTop: "1px solid rgba(224,136,60,0.08)" }}>
              {/* Waveform */}
              {isActive && (
                <div className="flex items-end justify-center gap-0.5 mb-4" style={{ height: 28 }}>
                    {[0.4,0.7,1,0.5,0.8,0.45,0.9,0.6,0.75,0.35,0.85,0.55,0.65,0.4,0.8].map((h, i) => (
                      <motion.div
                        key={i}
                        className="rounded-full flex-shrink-0"
                        style={{
                          width: 3,
                          background: `rgba(224,136,60,${isSpeaking ? 0.4 + h * 0.55 : 0.18})`,
                        }}
                        animate={{
                          height: isSpeaking
                            ? [`${h * 26}px`, `${Math.max(3, (1 - h) * 20 + 3)}px`]
                            : ["3px", "5px"],
                        }}
                        transition={{ duration: isSpeaking ? 0.18 + (i % 4) * 0.06 : 1.8, repeat: Infinity, repeatType: "reverse", delay: i * 0.025 }}
                      />
                    ))}
                  </div>
              )}

              <motion.button
                whileHover={!busy ? { scale: 1.02 } : {}}
                whileTap={!busy ? { scale: 0.97 } : {}}
                onClick={handleCall}
                disabled={busy}
                className="w-full rounded-xl font-semibold cursor-pointer transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  padding: "15px 24px",
                  fontSize: 16,
                  background: isActive
                    ? "rgba(220,50,50,0.1)"
                    : "linear-gradient(135deg, #f09040, #c05818, #8a3c14)",
                  color: isActive ? "#ff8888" : "#0a0704",
                  border: isActive ? "1px solid rgba(220,50,50,0.25)" : "none",
                  boxShadow: isActive ? "none" : "0 0 24px rgba(224,136,60,0.4), 0 4px 16px rgba(0,0,0,0.3)",
                }}
              >
                {status === "idle" && "Call Vera Now"}
                {status === "connecting" && "Connecting..."}
                {status === "active" && "End Call"}
                {status === "ending" && "Ending..."}
              </motion.button>

              {!isActive && (
                <p className="text-center mt-3" style={{ color: "#7a6a5a", fontSize: 13 }}>
                  3 min demo · No signup required · Works in your browser
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
