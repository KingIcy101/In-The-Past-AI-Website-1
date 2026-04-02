"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPhone, IconChat, IconCalendar, IconRobot, IconCheck, IconRefresh, IconPlay } from "@/components/ui/Icons";

const DEMO_URL = "https://intake-form-sigma.vercel.app";

// ── Voice Demo ───────────────────────────────────────────────
const script = [
  { who: "caller", text: "Hi, I need to reschedule my appointment for next Tuesday." },
  { who: "ai",     text: "Of course! I have your file. We have openings at 10am or 3pm Tuesday — which works?" },
  { who: "caller", text: "10am please." },
  { who: "ai",     text: "Done! Tuesday at 10am is confirmed. I've sent a text with the details." },
];

function VoicePanel() {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(0);

  const start = () => {
    setPlaying(true);
    setVisible(0);
    let i = 0;
    const show = () => {
      if (i >= script.length) return;
      i++;
      setVisible(i);
      setTimeout(show, 1800);
    };
    setTimeout(show, 600);
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex items-center gap-3 mb-2">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(224,136,60,0.1)", border: "1px solid rgba(224,136,60,0.2)" }}
        >
          <IconPhone size={18} />
</div>
        <div>
          <p className="text-sm font-semibold" style={{ color: "#f2ece0", fontFamily: "var(--font-display)" }}>Voice Agent</p>
          <p className="text-xs" style={{ color: "#7a6e62" }}>Real call · Real response · Real booking</p>
        </div>
      </div>

      {/* Waveform */}
      {playing && (
        <div className="flex items-center gap-0.5 h-10">
          {Array.from({ length: 28 }).map((_, i) => (
            <div
              key={i}
              className="wave-bar rounded-full flex-1"
              style={{
                maxWidth: 5,
                height: "100%",
                background: "linear-gradient(to top, #8a3c14, #e0883c)",
                animationDelay: `${i * 0.07}s`,
                animationDuration: `${0.7 + (i % 4) * 0.2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Transcript */}
      <div className="flex-1 space-y-2 overflow-hidden min-h-[180px]">
        {!playing && (
          <div className="flex items-center justify-center h-full" style={{ color: "#3a2d25" }}>
            <p className="text-sm">Tap to start the demo call</p>
          </div>
        )}
        <AnimatePresence>
          {script.slice(0, visible).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${line.who === "caller" ? "justify-end" : "justify-start"}`}
            >
              {line.who === "ai" && (
                <span className="mr-2 mt-0.5 flex-shrink-0"><IconRobot size={14} /></span>
              )}
              <div
                className="max-w-[85%] px-3 py-2 rounded-xl text-xs leading-relaxed"
                style={
                  line.who === "ai"
                    ? { background: "rgba(224,136,60,0.12)", color: "#f2ece0" }
                    : { background: "rgba(255,255,255,0.06)", color: "#b8a88a" }
                }
              >
                {line.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <button
        onClick={start}
        className="w-full py-3 rounded-xl text-sm font-semibold cursor-pointer transition-all"
        style={{
          background: playing ? "rgba(224,136,60,0.08)" : "linear-gradient(135deg, #e0883c, #8a3c14)",
          color: playing ? "#e0883c" : "#0a0704",
          border: playing ? "1px solid rgba(224,136,60,0.2)" : "none",
        }}
      >
        <span className="flex items-center justify-center gap-2">
          {playing ? <><IconRefresh size={14} /> Replay</> : <><IconPlay size={14} /> Start Call</>}
        </span>
      </button>
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
            <p className="text-xs" style={{ color: "#4caf70" }}>AI online · Instant replies</p>
          </div>
        </div>
      </div>

      <div className="flex-1 space-y-2 min-h-[180px]">
        {msgs === 0 && (
          <div className="flex items-center justify-center h-full" style={{ color: "#3a2d25" }}>
            <p className="text-sm">Tap to start the chat demo</p>
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
                  : { background: "rgba(255,255,255,0.06)", color: "#b8a88a" }
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
          background: msgs > 0 ? "rgba(224,136,60,0.08)" : "linear-gradient(135deg, #e0883c, #8a3c14)",
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
          <p className="text-sm font-semibold" style={{ color: "#f2ece0", fontFamily: "var(--font-display)" }}>Smart Booking</p>
          <p className="text-xs" style={{ color: "#7a6e62" }}>AI confirms instantly · No back-and-forth</p>
        </div>
      </div>

      {/* Calendar */}
      <div className="overflow-x-auto flex-1">
        <table className="w-full text-xs">
          <thead>
            <tr>
              <th className="pb-2 text-left" style={{ color: "#3a2d25" }} />
              {days.map((d) => (
                <th key={d} className="pb-2 text-center font-medium" style={{ color: "#7a6e62" }}>{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slots.map((s) => (
              <tr key={s}>
                <td className="pr-2 py-1 text-right whitespace-nowrap" style={{ color: "#3a2d25" }}>{s}</td>
                {days.map((d) => {
                  const key = `${d}-${s}`;
                  const isBooked = booked.has(key);
                  const isSel = sel === key;
                  return (
                    <td key={d} className="py-1 px-0.5">
                      <button
                        onClick={() => pick(d, s)}
                        disabled={isBooked}
                        className="w-full py-1 rounded-lg transition-all duration-150 cursor-pointer"
                        style={{
                          background: isSel
                            ? "linear-gradient(135deg, #e0883c, #8a3c14)"
                            : isBooked
                            ? "rgba(255,255,255,0.02)"
                            : "rgba(224,136,60,0.07)",
                          color: isSel ? "#0a0704" : isBooked ? "#2a1f18" : "#e0883c",
                          border: isSel ? "none" : `1px solid ${isBooked ? "rgba(255,255,255,0.04)" : "rgba(224,136,60,0.12)"}`,
                          fontWeight: isSel ? "700" : "400",
                          cursor: isBooked ? "default" : "pointer",
                          fontSize: "10px",
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
  const [active, setActive] = useState("voice");
  const activePanel = panels.find((p) => p.id === active)!;
  const Panel = activePanel.component;

  return (
    <section id="demo" className="py-28 px-6" style={{ background: "#0a0704" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
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
          {/* Sidebar tab selector */}
          <div className="lg:col-span-1 flex lg:flex-col gap-2">
            {panels.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium text-left transition-all cursor-pointer"
                style={{
                  background: active === p.id ? "rgba(224,136,60,0.12)" : "transparent",
                  color: active === p.id ? "#f2ece0" : "#7a6e62",
                  border: active === p.id ? "1px solid rgba(224,136,60,0.25)" : "1px solid transparent",
                }}
              >
                <p.Icon size={15} />
                {p.label}
              </button>
            ))}
            <div className="hidden lg:block mt-auto pt-8">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs text-center px-4 py-3 rounded-xl cursor-pointer transition-all"
                style={{
                  background: "linear-gradient(135deg, #e0883c, #8a3c14)",
                  color: "#0a0704",
                  fontWeight: 700,
                }}
              >
                Book Live Demo →
              </a>
            </div>
          </div>

          {/* Demo panel */}
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

        {/* Mobile CTA */}
        <div className="lg:hidden mt-6 text-center">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 rounded-full text-sm font-semibold cursor-pointer"
            style={{ background: "linear-gradient(135deg, #e0883c, #8a3c14)", color: "#0a0704" }}
          >
            Book a Live Demo →
          </a>
        </div>
      </div>
    </section>
  );
}
