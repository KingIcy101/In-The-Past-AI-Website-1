"use client";
import { useRef, useState } from "react";
import Vapi from "@vapi-ai/web";

const KEY = process.env.NEXT_PUBLIC_VAPI_KEY!;
const AID = "ed8bf625-bb0b-4813-8a4b-726cb5fc4dc4";

export default function VeraTest() {
  const vapiRef = useRef<InstanceType<typeof Vapi> | null>(null);
  const [log, setLog] = useState<string[]>([]);
  const add = (msg: string) => setLog(p => [...p, `${new Date().toISOString().slice(11,19)} ${msg}`]);

  const start = async () => {
    const v = new Vapi(KEY);
    vapiRef.current = v;
    v.on("call-start", () => {
      add("call-start fired");
      add(`isMuted: ${v.isMuted()}`);
      v.setMuted(false);
      add(`isMuted after setMuted(false): ${v.isMuted()}`);
    });
    v.on("call-end", () => add("call-end"));
    v.on("speech-start", () => add("speech-start (Vera speaking)"));
    v.on("speech-end", () => add("speech-end"));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    v.on("message", (m: any) => add(`msg: ${m.type} | role:${m.role} | type:${m.transcriptType} | text:${String(m.transcript||'').slice(0,40)}`));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    v.on("error", (e: any) => add(`ERROR: ${JSON.stringify(e)}`));
    add("calling vapi.start...");
    try {
      await v.start(AID);
      add("vapi.start resolved");
    } catch(e) {
      add(`start ERROR: ${e}`);
    }
  };

  const stop = () => { vapiRef.current?.stop(); add("stopped"); };
  const mute = () => { vapiRef.current?.setMuted(true); add("muted"); };
  const unmute = () => { vapiRef.current?.setMuted(false); add("unmuted"); };

  return (
    <div style={{ fontFamily: "monospace", padding: 24, background: "#0a0704", color: "#f2ece0", minHeight: "100vh" }}>
      <h1 style={{ color: "#e0883c", marginBottom: 16 }}>Vera SDK Test</h1>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <button onClick={start} style={{ padding: "8px 16px", background: "#e0883c", color: "#000", border: "none", cursor: "pointer" }}>Start Call</button>
        <button onClick={unmute} style={{ padding: "8px 16px", background: "#4ade80", color: "#000", border: "none", cursor: "pointer" }}>Force Unmute</button>
        <button onClick={mute} style={{ padding: "8px 16px", background: "#666", color: "#fff", border: "none", cursor: "pointer" }}>Mute</button>
        <button onClick={stop} style={{ padding: "8px 16px", background: "#ff4444", color: "#fff", border: "none", cursor: "pointer" }}>Stop</button>
      </div>
      <div style={{ background: "#1a1208", padding: 12, borderRadius: 8, fontSize: 12, lineHeight: 1.6, maxHeight: 500, overflowY: "auto" }}>
        {log.length === 0 ? <span style={{ color: "#666" }}>Waiting for events...</span> : log.map((l, i) => <div key={i}>{l}</div>)}
      </div>
    </div>
  );
}
