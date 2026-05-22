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
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
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
      },
    },
  },
  plugins: [],
};
export default config;
