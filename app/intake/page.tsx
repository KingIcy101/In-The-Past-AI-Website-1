import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Past AI Intake | In The Past AI",
  description: "Start your AI receptionist build with the Past AI intake form.",
};

export default function IntakePage() {
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
        src="https://intake-form-sigma.vercel.app/intake"
        title="Past AI Intake Form"
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
