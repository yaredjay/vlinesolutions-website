import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: "var(--bg)", 2: "var(--bg-2)" },
        surface: { DEFAULT: "var(--surface)", 2: "var(--surface-2)" },
        ink: {
          DEFAULT: "var(--text)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        line: { DEFAULT: "var(--border)", hover: "var(--border-hover)" },
        cyan: { DEFAULT: "var(--cyan)" },
        purple: { DEFAULT: "var(--purple)" },
        money: { DEFAULT: "var(--green)" },
        gold: { DEFAULT: "var(--gold)" },
        warn: { DEFAULT: "var(--warning)" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "var(--font-inter)", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        // Readability-first scale
        "body": ["1.125rem", { lineHeight: "1.8" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.7" }],
      },
      animation: {
        float: "float 13s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "orb-drift": "orb-drift 20s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2.8s ease-in-out infinite",
      },
      backgroundImage: {
        "mesh-dark":
          "radial-gradient(at 15% 15%, rgba(0,212,255,0.10) 0px, transparent 45%), radial-gradient(at 85% 20%, rgba(124,58,237,0.10) 0px, transparent 45%), radial-gradient(at 50% 90%, rgba(0,212,255,0.06) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;
