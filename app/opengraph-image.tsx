import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "In The Past AI — AI Receptionists That Never Sleep";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0E0B08",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Amber glow */}
        <div style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "300px",
          background: "radial-gradient(ellipse at center top, rgba(212,148,74,0.25) 0%, transparent 70%)",
          display: "flex",
        }} />

        {/* Badge */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(212,148,74,0.1)",
          border: "1px solid rgba(212,148,74,0.3)",
          borderRadius: "100px",
          padding: "8px 20px",
          marginBottom: "32px",
        }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", display: "flex" }} />
          <span style={{ color: "#D4944A", fontSize: "16px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            AI Voice Receptionist
          </span>
        </div>

        {/* Headline */}
        <div style={{
          fontSize: "72px",
          fontWeight: 800,
          color: "#F2E8D6",
          textAlign: "center",
          lineHeight: 1.1,
          marginBottom: "24px",
          maxWidth: "900px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          Never Miss a Call.{" "}
          <span style={{ color: "#D4944A" }}>Never Lose a Lead.</span>
        </div>

        {/* Subtext */}
        <div style={{
          fontSize: "24px",
          color: "rgba(242,232,214,0.65)",
          textAlign: "center",
          maxWidth: "700px",
          lineHeight: 1.5,
          marginBottom: "48px",
          display: "flex",
        }}>
          AI receptionists that answer 24/7, book appointments, and capture every lead — live within days.
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: "60px" }}>
          {[["< 4s", "Pickup time"], ["24/7", "Always live"], ["100%", "Calls answered"]].map(([val, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <span style={{ fontSize: "36px", fontWeight: 800, color: "#D4944A" }}>{val}</span>
              <span style={{ fontSize: "16px", color: "rgba(242,232,214,0.5)" }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div style={{
          position: "absolute",
          bottom: "40px",
          right: "60px",
          fontSize: "18px",
          color: "rgba(212,148,74,0.5)",
          display: "flex",
        }}>
          inthepast.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
