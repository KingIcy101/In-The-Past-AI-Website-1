import type { NextConfig } from "next";

const intakeAppOrigin = "https://intake-form-sigma.vercel.app";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(self), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // CSP: permissive on connect/media to allow Vapi's Livekit WebRTC infrastructure
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Allow the Past AI app origin so the same-origin-proxied client portal
      // (served at /client) can load its assetPrefix'd scripts/styles/fonts/images.
      `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${intakeAppOrigin}`,
      "connect-src *",
      "media-src * blob:",
      `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com ${intakeAppOrigin}`,
      `font-src 'self' https://fonts.gstatic.com ${intakeAppOrigin}`,
      `img-src 'self' data: blob: ${intakeAppOrigin}`,
      "frame-ancestors 'none'",
      `frame-src https://cal.com https://*.cal.com ${intakeAppOrigin}`,
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${intakeAppOrigin}/api/:path*`,
      },
      // Client portal served SAME-ORIGIN through www (not an iframe), so the
      // magic-link sign-in cookie lives on www and the portal works end-to-end
      // on the marketing domain. Assets load from the app via assetPrefix.
      { source: "/client", destination: `${intakeAppOrigin}/client` },
      { source: "/client/:path*", destination: `${intakeAppOrigin}/client/:path*` },
      { source: "/client-portal", destination: `${intakeAppOrigin}/client` },
      // Intake forms served SAME-ORIGIN too (the old <iframe> embeds died when
      // the app shipped frame-ancestors 'none' / X-Frame-Options DENY). The
      // app's intake page reads the pathname, so it accepts both spellings and
      // Matt's canonical marketing paths stay: /auto-repair-intake, /dental-intake.
      { source: "/intake", destination: `${intakeAppOrigin}/intake` },
      // Destination = the app's real route names; the browser URL keeps the
      // canonical www path, and the app's intake page detects the vertical
      // from that visible pathname (it accepts both spellings).
      { source: "/auto-repair-intake", destination: `${intakeAppOrigin}/intake-auto-repair` },
      { source: "/dental-intake", destination: `${intakeAppOrigin}/intake-dental` },
      // Pages the intake footer links to (A2P legal), plus the app manifest so
      // the console stays clean. Deliberately NOT /sw.js — registering the
      // app's service worker against the www scope would hijack the whole
      // marketing origin; its 404 fails safe.
      { source: "/opt-in", destination: `${intakeAppOrigin}/opt-in` },
      { source: "/messaging-policy", destination: `${intakeAppOrigin}/messaging-policy` },
      { source: "/manifest.webmanifest", destination: `${intakeAppOrigin}/manifest.webmanifest` },
      { source: "/icons/:path*", destination: `${intakeAppOrigin}/icons/:path*` },
    ];
  },

  async redirects() {
    return [
      // Canonical path names (Matt's spec). Old route names redirect to the
      // new ones so any existing links keep working.
      {
        source: "/intake-auto-repair",
        destination: "/auto-repair-intake",
        permanent: true,
      },
      {
        source: "/intake-dental",
        destination: "/dental-intake",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
