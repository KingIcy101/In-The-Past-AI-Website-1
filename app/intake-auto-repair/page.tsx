import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Repair AI Receptionist Intake | In The Past AI",
  description: "Auto repair shop intake for building a Past AI phone receptionist.",
};

export default function AutoRepairIntakePage() {
  return (
    <div
      className="intake-embed-shell"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "#0f0b08",
      }}
    >
      <iframe
        src="https://intake-form-sigma.vercel.app/intake-auto-repair"
        title="Past AI Auto Repair Intake Form"
        style={{
          width: "100%",
          height: "100%",
          border: 0,
          display: "block",
        }}
        allow="clipboard-write"
      />
    </div>
  );
}
