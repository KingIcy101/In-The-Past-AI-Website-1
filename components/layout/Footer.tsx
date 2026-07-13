export default function Footer() {
  return (
    <>
      <style>{`
        .footer-link { color: #7a6e62; text-decoration: none; transition: color 0.15s; }
        .footer-link:hover { color: #D4944A; }
      `}</style>
      <footer style={{ backgroundColor: "#0E0B08", borderTop: "1px solid rgba(224,136,60,0.1)" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "1.5rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", color: "#7a6e62" }}>
          <span>© 2026 In The Past AI</span>
          <nav style={{ display: "flex", gap: "1.5rem" }}>
            <a href="/terms" className="footer-link">Terms</a>
            <a href="/privacy" className="footer-link">Privacy Policy</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
