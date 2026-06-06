import { cn } from "@/lib/cn";

export function Logo({ className, mark = false, tone = "dark" }: { className?: string; mark?: boolean; tone?: "dark" | "light" }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)} aria-label="V-Line Solutions">
      <span className="relative inline-flex h-8 w-8 items-center justify-center">
        <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="vls-mark" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#00d4ff" />
              <stop offset="1" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          <rect width="32" height="32" rx="8" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
          <path d="M6 8 L13 24 L20 8 L23 8 L14.5 25 L11.5 25 L3 9 Z" fill="url(#vls-mark)" />
          <circle cx="24" cy="20" r="2.4" fill="#00d4ff" />
        </svg>
      </span>
      {!mark && (
        <span className={cn("text-[17px] font-bold tracking-tight", tone === "light" ? "text-white" : "text-ink")}>
          V-Line<span className={cn("font-medium", tone === "light" ? "text-white/60" : "text-ink-secondary")}> Solutions</span>
        </span>
      )}
    </span>
  );
}
