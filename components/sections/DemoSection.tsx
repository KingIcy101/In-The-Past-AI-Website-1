"use client";

import { useCalModal } from "@/contexts/CalModalContext";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Vapi from "@vapi-ai/web";
import { IconPhone, IconChat, IconCalendar, IconRobot, IconCheck, IconRefresh, IconPlay } from "@/components/ui/Icons";

const DEMO_URL = "https://intake-form-sigma.vercel.app";
const VERA_ASSISTANT_ID = "ed8bf625-bb0b-4813-8a4b-726cb5fc4dc4";

// ── Live Voice Panel (Vera) ─────────────────────────────────
function VoicePanel() {
  const vapiRef = useRef<InstanceType<typeof Vapi> | null>(null);
  const [status, setStatus] = useState<"idle" | "connecting" | "active" | "ending">("idle");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const callCountRef = useRef(0);
  const lastCallEndRef = useRef(0);
  const [callSeconds, setCallSeconds] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // No Vapi init on mount — lazy init on first click only
  const initVapi = () => {
    const key = process.env.NEXT_PUBLIC_VAPI_KEY;
    if (!key || vapiRef.current) return vapiRef.current;
    const instance = new Vapi(key);
    instance.on("call-start", () => {
      setStatus("active");
      setCallSeconds(0);
      timerRef.current = setInterval(() => setCallSeconds((s) => s + 1), 1000);
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
    vapiRef.current = instance;
    return instance;
  };

  const handleCall = async () => {
    if (status === "active") {
      const vapi = vapiRef.current;
      if (vapi) { setStatus("ending"); lastCallEndRef.current = Date.now(); vapi.stop(); }
      return;
    }
    if (status === "idle") {
      if (callCountRef.current >= 3) return;
      if (Date.now() - lastCallEndRef.current < 30_000) return;
      const vapi = initVapi();
      if (!vapi) return;
      callCountRef.current += 1;
      setStatus("connecting");
      try { await vapi.start(VERA_ASSISTANT_ID); try { vapi.setMuted(false); } catch {} } catch { callCountRef.current -= 1; setStatus("idle"); }
    }
  };

  const isActive = status === "active";
  const busy = status === "connecting" || status === "ending";

  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Header — Vera identity */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(224,136,60,0.18), rgba(224,136,60,0.05))",
              border: "1px solid rgba(224,136,60,0.3)",
              boxShadow: "0 0 20px rgba(224,136,60,0.08)",
            }}
          >
            <IconRobot size={36} />
          </div>
          <div
            className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center"
            style={{ background: "#0d0906", border: "1.5px solid rgba(10,7,4,0.9)" }}
          >
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{ background: "#4ade80" }}
              animate={{ opacity: [1, 0.4, 1], scale: [1, 0.85, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
        <div>
          <p
            className="font-bold text-xl"
            style={{ color: "#f2ece0", fontFamily: "var(--font-display)" }}
          >
            Vera
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80" }} />
            <p className="text-sm font-medium" style={{ color: "#4ade80" }}>
              Available now — no wait
            </p>
          </div>
        </div>
      </div>

      {/* Body — idle vs active */}
      <AnimatePresence mode="wait">
        {!isActive ? (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex flex-col justify-between"
          >
            <div>
              <p
                className="text-2xl font-bold mb-3 leading-snug"
                style={{ color: "#f2ece0", fontFamily: "var(--font-display)" }}
              >
                Talk to your AI receptionist — right now.
              </p>
              <p className="text-base mb-5 leading-relaxed" style={{ color: "#f2ece0" }}>
                Vera answers like a real team member. Ask her anything — hours, pricing, availability — or pretend to be a customer calling in.
              </p>
              <div className="space-y-2.5">
                {[
                  "Books appointments on the spot",
                  "Qualifies leads in real-time",
                  "Handles objections naturally",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#e0883c" }}
                    />
                    <span className="text-base" style={{ color: "#f2ece0" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats strip */}
            <div
              className="flex gap-6 pt-4 mt-3"
              style={{ borderTop: "1px solid rgba(224,136,60,0.1)" }}
            >
              {[
                { val: "< 4s", label: "Pickup time" },
                { val: "24/7", label: "Always live" },
                { val: "100%", label: "Calls answered" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="font-bold text-lg"
                    style={{ color: "#e0883c", fontFamily: "var(--font-display)" }}
                  >
                    {s.val}
                  </p>
                  <p className="text-sm mt-0.5" style={{ color: "#f2ece0" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex flex-col items-center justify-center gap-5"
          >
            <div className="flex items-center gap-2">
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ background: "#4ade80" }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
              <p className="text-sm font-semibold" style={{ color: "#f2ece0" }}>
                Connected to Vera
              </p>
            </div>

            {/* Live waveform */}
            <div className="flex items-end gap-1" style={{ height: 50 }}>
              {[0.3, 0.65, 1, 0.5, 0.8, 0.4, 0.9, 0.55, 0.75, 0.35].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-1.5 rounded-full"
                  style={{ background: `rgba(224,136,60,${0.35 + h * 0.65})` }}
                  animate={{
                    height: isSpeaking
                      ? [`${h * 42}px`, `${Math.max(6, (1 - h) * 38 + 6)}px`]
                      : ["6px", "10px"],
                  }}
                  transition={{
                    duration: isSpeaking ? 0.25 + (i % 3) * 0.08 : 1.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: i * 0.04,
                  }}
                />
              ))}
            </div>

            <p className="text-xs text-center" style={{ color: "#f2ece0" }}>
              Speak naturally — Vera is listening
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <motion.button
        whileHover={!busy ? { scale: 1.03, boxShadow: "0 8px 36px rgba(224,136,60,0.45)" } : {}}
        whileTap={!busy ? { scale: 0.97 } : {}}
        onClick={handleCall}
        disabled={busy}
        className="w-full py-5 rounded-2xl font-bold cursor-pointer transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden"
        style={{
          background: isActive
            ? "rgba(220,50,50,0.12)"
            : "linear-gradient(135deg, #f0a050, #d07030, #a84820)",
          color: isActive ? "#ff8888" : "#0a0704",
          border: isActive ? "1px solid rgba(220,50,50,0.25)" : "none",
          boxShadow: isActive ? "none" : "0 6px 32px rgba(224,136,60,0.38)",
          fontSize: "1.1rem",
          letterSpacing: "0.01em",
        }}
      >
        {!isActive && !busy && (
          <motion.div
            className="absolute inset-0 rounded-2xl"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }}
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
          />
        )}
        <span className="relative flex items-center justify-center gap-3">
          {status === "idle" && (
            <>
              <motion.span
                className="w-3 h-3 rounded-full"
                style={{ background: "#0a0704", opacity: 0.7 }}
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
              Call Vera Now
            </>
          )}
          {status === "connecting" && <>Connecting to Vera...</>}
          {status === "active" && (
              <span className="flex items-center gap-2">
                End Call
                <span className="font-mono text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.12)", color: callSeconds >= 150 ? "#ff9999" : "#0a0704" }}>
                  {`${Math.floor((180 - callSeconds) / 60)}:${String(Math.max(0, (180 - callSeconds) % 60)).padStart(2, "0")}`}
                </span>
              </span>
            )}
          {status === "ending" && <>Ending...</>}
        </span>
      </motion.button>
    </div>
  );
}

// ── Chat Demo ────────────────────────────────────────────────
const chatScript = [
  { who: "user",  text: "What are your hours?" },
  { who: "bot",   text: "We're open Mon–Fri 8am–6pm, but our AI answers calls 24/7!" },
  { who: "user",  text: "Can I book a Saturday appointment?" },
  { who: "bot",   text: "Absolutely — I can book you for any Saturday 9am–2pm. Want me to check availability now?" },
  { who: "user",  text: "Yes please" },
  { who: "bot",   text: "This Saturday at 10am is open. Shall I confirm that for you?" },
];

function ChatPanel() {
  const [msgs, setMsgs] = useState(0);
  const [typing, setTyping] = useState(false);

  const start = () => {
    setMsgs(0);
    let i = 0;
    const show = () => {
      if (i >= chatScript.length) return;
      if (chatScript[i].who === "bot") {
        setTyping(true);
        setTimeout(() => {
          setTyping(false);
          i++;
          setMsgs(i);
          setTimeout(show, 1500);
        }, 1000);
      } else {
        i++;
        setMsgs(i);
        setTimeout(show, 1000);
      }
    };
    setTimeout(show, 400);
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(224,136,60,0.1)", border: "1px solid rgba(224,136,60,0.2)" }}
        >
          <IconChat size={18} />
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: "#f2ece0", fontFamily: "var(--font-display)" }}>Website Chat</p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <p className="text-sm font-medium" style={{ color: "#4ade80" }}>AI online · Instant replies</p>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-2 min-h-[180px]">
        {msgs === 0 && (
          <div className="flex items-center justify-center h-full">
            <p className="text-base" style={{ color: "#f2ece0" }}>Tap to start the chat demo</p>
          </div>
        )}
        {chatScript.slice(0, msgs).map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className={`flex ${m.who === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className="max-w-[85%] px-3 py-2 rounded-xl text-xs leading-relaxed"
              style={
                m.who === "bot"
                  ? { background: "rgba(224,136,60,0.12)", color: "#f2ece0" }
                  : { background: "rgba(255,255,255,0.06)", color: "#f2ece0" }
              }
            >
              {m.text}
            </div>
          </motion.div>
        ))}
        {typing && (
          <div className="flex gap-1 items-center px-3 py-2 rounded-xl w-14" style={{ background: "rgba(224,136,60,0.12)" }}>
            {[0, 0.2, 0.4].map((d) => (
              <div key={d} className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: "#e0883c", animationDelay: `${d}s` }} />
            ))}
          </div>
        )}
      </div>

      <button
        onClick={start}
        className="w-full py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all"
        style={{
          background: msgs > 0 ? "rgba(224,136,60,0.08)" : "linear-gradient(135deg, #f0a050, #d07030, #a84820)",
          color: msgs > 0 ? "#e0883c" : "#0a0704",
          border: msgs > 0 ? "1px solid rgba(224,136,60,0.2)" : "none",
        }}
      >
        <span className="flex items-center justify-center gap-2">
          {msgs > 0 ? <><IconRefresh size={14} /> Replay</> : <><IconPlay size={14} /> Start Chat</>}
        </span>
      </button>
    </div>
  );
}

// ── Booking Demo ─────────────────────────────────────────────
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const slots = ["9:00", "11:00", "1:00", "3:00", "5:00"];

function BookingPanel() {
  const [sel, setSel] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const booked = new Set(["Mon-9:00", "Wed-11:00", "Thu-3:00", "Fri-1:00"]);

  const pick = (d: string, s: string) => {
    const key = `${d}-${s}`;
    if (booked.has(key)) return;
    setSel(key);
    setConfirmed(false);
    setTimeout(() => setConfirmed(true), 700);
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(224,136,60,0.1)", border: "1px solid rgba(224,136,60,0.2)" }}
        >
          <IconCalendar size={18} />
        </div>
        <div>
          <p className="text-base font-bold" style={{ color: "#f2ece0", fontFamily: "var(--font-display)" }}>Smart Booking</p>
          <p className="text-base" style={{ color: "#f2ece0" }}>AI confirms instantly · No back-and-forth</p>
        </div>
      </div>

      <div className="overflow-x-auto flex-1">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="pb-2 text-left" style={{ color: "#6a5a48" }} />
              {days.map((d) => (
                <th key={d} className="pb-3 text-center font-semibold text-base" style={{ color: "#f2ece0" }}>{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slots.map((s) => (
              <tr key={s}>
                <td className="pr-3 py-2.5 text-right whitespace-nowrap font-medium" style={{ color: "#f2ece0", fontSize: "0.95rem" }}>{s}</td>
                {days.map((d) => {
                  const key = `${d}-${s}`;
                  const isBooked = booked.has(key);
                  const isSel = sel === key;
                  return (
                    <td key={d} className="py-2 px-1">
                      <button
                        onClick={() => pick(d, s)}
                        disabled={isBooked}
                        className="w-full py-2.5 rounded-lg transition-all duration-150 cursor-pointer"
                        style={{
                          background: isSel
                            ? "linear-gradient(135deg, #f0a050, #d07030, #a84820)"
                            : isBooked
                            ? "rgba(255,255,255,0.02)"
                            : "rgba(224,136,60,0.07)",
                          color: isSel ? "#0a0704" : isBooked ? "#5a4a38" : "#e0883c",
                          border: isSel ? "none" : `1px solid ${isBooked ? "rgba(255,255,255,0.04)" : "rgba(224,136,60,0.12)"}`,
                          fontWeight: isSel ? "700" : "400",
                          cursor: isBooked ? "default" : "pointer",
                          fontSize: "14px",
                        }}
                      >
                        {isBooked ? "—" : "Open"}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {sel && confirmed && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="px-4 py-3 rounded-xl text-xs"
            style={{ background: "rgba(224,136,60,0.1)", border: "1px solid rgba(224,136,60,0.25)", color: "#f2ece0" }}
          >
            <span className="inline-flex items-center gap-1.5"><IconCheck size={13} /> Booked! {sel.replace("-", " at ")} — Confirmation sent.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main ─────────────────────────────────────────────────────
const panels = [
  { id: "voice", Icon: IconPhone,    label: "Voice Agent", component: VoicePanel },
  { id: "chat",  Icon: IconChat,     label: "Web Chat",    component: ChatPanel },
  { id: "book",  Icon: IconCalendar, label: "Booking",     component: BookingPanel },
];

export default function DemoSection() {
  const { open: openCal } = useCalModal();
  const [active, setActive] = useState("voice");
  const activePanel = panels.find((p) => p.id === active)!;
  const Panel = activePanel.component;

  return (
    <section id="demo" className="py-28 px-6" style={{ background: "#0a0704" }}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "rgba(224,136,60,0.6)" }}>
            Interactive Demo
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "#f2ece0" }}
          >
            See it work.
            <br />
            <span className="gradient-amber">Right now.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-1 flex lg:flex-col gap-2">
            {panels.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium text-left transition-all cursor-pointer"
                style={{
                  background: active === p.id ? "rgba(224,136,60,0.12)" : "transparent",
                  color: active === p.id ? "#f2ece0" : "#f2ece0",
                  border: active === p.id ? "1px solid rgba(224,136,60,0.25)" : "1px solid transparent",
                }}
              >
                <p.Icon size={15} />
                {p.label}
              </button>
            ))}
            <div className="hidden lg:block mt-auto pt-8">
              <button
                onClick={() => openCal()}
                className="block text-xs text-center px-4 py-3 rounded-xl cursor-pointer transition-all"
                style={{
                  background: "linear-gradient(135deg, #f0a050, #d07030, #a84820)",
                  color: "#0a0704",
                  fontWeight: 700,
                }}
              >
                Book Live Demo →
              </button>
            </div>
          </div>

          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl p-6 md:p-8 min-h-[380px] flex flex-col"
                style={{
                  background: "rgba(18,12,8,0.8)",
                  border: "1px solid rgba(224,136,60,0.12)",
                }}
              >
                <Panel />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="lg:hidden mt-6 text-center">
          <button
            onClick={() => openCal()}
            className="inline-block px-8 py-3.5 rounded-full text-sm font-semibold cursor-pointer"
            style={{ background: "linear-gradient(135deg, #f0a050, #d07030, #a84820)", color: "#0a0704" }}
          >
            Book a Live Demo →
          </button>
        </div>
      </div>
    </section>
  );
}
