import { cn } from "@/lib/cn";

export function Logo({ className, mark = false }: { className?: string; mark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)} aria-label="V-Line Solutions">
      <span className="relative inline-flex h-7 w-7 items-center justify-center">
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="vls-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="currentColor" stopOpacity="0.95" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.55" />
            </linearGradient>
          </defs>
          <path
            d="M3 5 L11 27 L21 5 L25 5 L15 28 L9 28 L1 6 Z"
            fill="url(#vls-grad)"
          />
          <circle cx="26" cy="22" r="3" fill="currentColor" opacity="0.9" />
        </svg>
      </span>
      {!mark && (
        <span className="text-[15px] font-semibold tracking-tight">
          V-Line<span className="text-fg-muted font-normal"> Solutions</span>
        </span>
      )}
    </span>
  );
}
