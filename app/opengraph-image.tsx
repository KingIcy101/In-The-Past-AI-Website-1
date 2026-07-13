import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "In The Past AI — AI operations for local businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Repositioned OG (validation amendment 5): operations-consultancy frame on the
// light editorial canvas, no absolute "100% Calls answered" claim.
export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#F7F4EF",
          padding: "88px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "28px",
          }}
        >
          <span
            style={{
              color: "#B25E1B",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            AI operations for local businesses
          </span>
        </div>

        <div
          style={{
            fontSize: "68px",
            fontWeight: 600,
            color: "#1A1712",
            lineHeight: 1.08,
            marginBottom: "28px",
            maxWidth: "980px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          Start with the calls you miss. Build the system around them.
        </div>

        <div
          style={{
            fontSize: "26px",
            color: "#5B5347",
            maxWidth: "860px",
            lineHeight: 1.5,
            display: "flex",
          }}
        >
          Answer, follow up, book, report, and build the internal tools your business runs on — for auto repair, HVAC, dental, roofing, and med spas.
        </div>

        <div style={{ display: "flex", gap: "12px", marginTop: "44px" }}>
          {["Auto Repair", "HVAC", "Dental", "Roofing", "Med Spa"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                border: "1px solid #E4DDD1",
                background: "#FFFFFF",
                borderRadius: "100px",
                padding: "10px 20px",
                fontSize: "20px",
                color: "#1A1712",
              }}
            >
              {label}
            </div>
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "44px",
            right: "64px",
            fontSize: "20px",
            color: "#8A8073",
            display: "flex",
          }}
        >
          inthepast.ai
        </div>
      </div>
    ),
    { ...size },
  );
}
