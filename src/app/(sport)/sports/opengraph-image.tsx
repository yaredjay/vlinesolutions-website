import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "VLS Sport — Officials for every game. Powered by V-Line Solutions.";
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
          background: "linear-gradient(180deg, #FFFFFF 0%, #F3F6FF 100%)",
          color: "#0B1020",
          padding: "64px 72px",
          position: "relative",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div style={{ position: "absolute", left: 640, top: -220, width: 720, height: 560, borderRadius: 999, background: "radial-gradient(circle at 40% 40%, rgba(43,92,255,0.45) 0%, rgba(0,194,255,0.28) 40%, rgba(0,194,255,0) 70%)" }} />
        <div style={{ position: "absolute", left: -220, top: 300, width: 600, height: 500, borderRadius: 999, background: "radial-gradient(circle, rgba(124,77,255,0.3) 0%, rgba(255,61,140,0.14) 45%, rgba(255,61,140,0) 72%)" }} />
        <div style={{ position: "absolute", left: 560, top: 420, width: 520, height: 400, borderRadius: 999, background: "radial-gradient(circle, rgba(200,255,26,0.5) 0%, rgba(139,227,59,0) 68%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(to right, rgba(11,16,32,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,16,32,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse at center, black 20%, transparent 72%)" }} />

        <div style={{ display: "flex", alignItems: "center", gap: 14, position: "relative" }}>
          <svg width="40" height="40" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#2B5CFF" />
                <stop offset="1" stopColor="#00C2FF" />
              </linearGradient>
            </defs>
            <path d="M3 5 L11 27 L21 5 L25 5 L15 28 L9 28 L1 6 Z" fill="url(#g)" />
            <circle cx="26" cy="22" r="3" fill="#FF6A2C" />
          </svg>
          <div style={{ display: "flex", alignItems: "baseline", fontSize: 34, fontWeight: 800, letterSpacing: "0.04em" }}>
            <span>VLS</span>
            <span style={{ color: "#5B6480", marginLeft: 10, fontWeight: 500, fontSize: 26, letterSpacing: 0 }}>Sport</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, position: "relative" }}>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 108, fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.92, textTransform: "uppercase" }}>
            <span>Officials for</span>
            <span style={{ display: "flex" }}>
              <span style={{ color: "#2B5CFF" }}>every game.</span>
            </span>
          </div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 26, color: "#1F2740", maxWidth: 900, lineHeight: 1.35 }}>
            Referees, umpires, scorekeepers and game-day crews for parks &amp; rec, schools and leagues. Any sport. All 50 states.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", fontSize: 20, color: "#3B4257" }}>
          <div style={{ display: "flex", gap: 12 }}>
            {["SAM.gov Registered", "Small Business", "Nationwide"].map((t) => (
              <div key={t} style={{ display: "flex", padding: "10px 16px", borderRadius: 999, background: "#FFFFFF", border: "1px solid rgba(11,16,32,0.08)", fontWeight: 600 }}>
                {t}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 18px 10px 12px", borderRadius: 999, background: "#0B1020", color: "#FFFFFF", fontWeight: 600 }}>
            <div style={{ width: 10, height: 10, borderRadius: 999, background: "#C8FF1A" }} />
            Powered by V-Line Solutions
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
