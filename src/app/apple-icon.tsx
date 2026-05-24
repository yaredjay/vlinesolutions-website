import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #050608 0%, #0a0d14 60%, #0f131c 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 30% 25%, rgba(0,212,255,0.30), transparent 60%)",
          }}
        />
        <svg width="120" height="120" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#00d4ff" />
              <stop offset="1" stopColor="#0066ff" />
            </linearGradient>
          </defs>
          <path d="M5 7 L12 24 L20 7 L23 7 L14 25 L10 25 L2 8 Z" fill="url(#g)" />
          <circle cx="24" cy="20" r="2.5" fill="#00d4ff" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
