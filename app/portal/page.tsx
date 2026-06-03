import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Past AI Portal | In The Past AI",
  description: "Internal Past AI voice-agent operations portal.",
};

export default function PortalPage() {
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
        src="https://intake-form-sigma.vercel.app/ops"
        title="Past AI Operator Portal"
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
