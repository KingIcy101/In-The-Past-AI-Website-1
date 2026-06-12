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
