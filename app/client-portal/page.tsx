import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Portal | In The Past AI",
  description:
    "Sign in to your Past AI client portal — see every call, booking, and confirmation your AI receptionist handles.",
};

// Matt's canonical path: inthepast.ai/client-portal. Embeds the app's /client
// route — the shop-owner portal (NOT /portal, which is an operator-portal alias).
export default function ClientPortalPage() {
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
        src="https://intake-form-sigma.vercel.app/client"
        title="Past AI Client Portal"
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
