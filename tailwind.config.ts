import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "var(--bg-base)",
          surface: "var(--bg-surface)",
          elevated: "var(--bg-elevated)",
        },
        fg: {
          primary: "var(--fg-primary)",
          secondary: "var(--fg-secondary)",
          muted: "var(--fg-muted)",
        },
        border: {
          subtle: "var(--border-subtle)",
          strong: "var(--border-strong)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          glow: "var(--accent-glow)",
          soft: "var(--accent-soft)",
        },
        // VLS Sport palette (light only)
        sp: {
          ink: "#0B1020",
          slate: "#3B4257",
          muted: "#6B7387",
          mist: "#F6F8FF",
          electric: "#2B5CFF",
          sky: "#00C2FF",
          volt: "#C8FF1A",
          flame: "#FF6A2C",
          magenta: "#FF3D8C",
          violet: "#7C4DFF",
          deep: "#0A1030",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        archivo: ["var(--font-archivo)", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-cyan":
          "radial-gradient(at 20% 20%, rgba(0,212,255,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(0,102,255,0.12) 0px, transparent 50%), radial-gradient(at 0% 80%, rgba(96,80,255,0.10) 0px, transparent 50%)",
      },
      animation: {
        "gradient-x": "gradient-x 18s ease infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marquee 40s linear infinite reverse",
        "sp-drift": "sp-drift 18s ease-in-out infinite",
        "sp-drift-reverse": "sp-drift 24s ease-in-out infinite reverse",
        "sp-float": "sp-float 7s ease-in-out infinite",
        "sp-bob": "sp-bob 9s ease-in-out infinite",
        "sp-spin": "sp-spin 60s linear infinite",
        "sp-whistle": "sp-whistle 8s ease-in-out infinite",
        "sp-pulse": "sp-pulse 2.4s ease-out infinite",
        "sp-nudge": "sp-nudge 1.6s ease-in-out infinite",
        "sp-shine": "sp-shine 9s ease-in-out infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-20px,0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", filter: "blur(28px)" },
          "50%": { opacity: "1", filter: "blur(36px)" },
        },
        shimmer: {
          "0%": { "background-position": "-200% 0" },
          "100%": { "background-position": "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "sp-drift": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-30px) scale(1.06)" },
          "66%": { transform: "translate(-30px,24px) scale(0.97)" },
        },
        "sp-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "sp-bob": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "sp-spin": { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
        "sp-whistle": {
          "0%, 100%": { transform: "rotate(-16deg) translateY(0)" },
          "50%": { transform: "rotate(-13deg) translateY(-12px)" },
        },
        "sp-pulse": {
          "0%": { transform: "scale(0.6)", opacity: "0.7" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        "sp-nudge": {
          "0%, 100%": { transform: "translateX(0)", opacity: "0.5" },
          "50%": { transform: "translateX(6px)", opacity: "1" },
        },
        "sp-shine": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
