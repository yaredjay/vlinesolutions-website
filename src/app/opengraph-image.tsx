import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "V-Line Solutions — Custom AI That Grows Your Business.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#050608",
          color: "#f4f6fb",
          padding: "72px",
          position: "relative",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Glow background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(0,212,255,0.20) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 0% 100%, rgba(0,102,255,0.18) 0%, transparent 60%)",
          }}
        />

        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        {/* Top row: logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <svg width="48" height="48" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="og-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#00d4ff" />
                <stop offset="1" stopColor="#0066ff" />
              </linearGradient>
            </defs>
            <path d="M5 7 L12 24 L20 7 L23 7 L14 25 L10 25 L2 8 Z" fill="url(#og-grad)" />
            <circle cx="24" cy="20" r="2.5" fill="#00d4ff" />
          </svg>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 600, letterSpacing: "-0.01em" }}>
            <span>V-Line</span>
            <span style={{ color: "#7c8392", marginLeft: 8, fontWeight: 400 }}>Solutions</span>
          </div>
        </div>

        {/* Center: title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            marginTop: 40,
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 88,
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 1.02,
              maxWidth: 1000,
            }}
          >
            <span>Custom AI That</span>
            <span style={{ color: "#00d4ff" }}>Grows Your Business.</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 26,
              color: "#c7ccd6",
              maxWidth: 880,
              lineHeight: 1.35,
            }}
          >
            AI receptionists, chatbots, and automation deployed in 48 hours.
          </div>
        </div>

        {/* Bottom row: credentials */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 1,
            color: "#7c8392",
            fontSize: 20,
          }}
        >
          <div style={{ display: "flex", gap: 24 }}>
            <span>30-Day Money-Back</span>
            <span>·</span>
            <span>48-Hour Setup</span>
            <span>·</span>
            <span>24/7 AI Coverage</span>
          </div>
          <div style={{ display: "flex" }}>vlinesolutions.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
