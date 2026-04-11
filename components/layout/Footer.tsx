import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0E0B08",
        borderTop: "1px solid rgba(224,136,60,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "1.5rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "13px",
          color: "#7a6e62",
        }}
      >
        <span>© 2026 In The Past AI</span>
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          <Link
            href="/terms"
            style={{ color: "#7a6e62", textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#D4944A")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#7a6e62")
            }
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            style={{ color: "#7a6e62", textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#D4944A")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#7a6e62")
            }
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
