import { cn } from "@/lib/cn";

export function SportWordmark({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const dims = size === "lg" ? 34 : size === "sm" ? 26 : 30;
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)} aria-label="VLS Sport">
      <svg viewBox="0 0 32 32" width={dims} height={dims} fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="vls-mark" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2B5CFF" />
            <stop offset="1" stopColor="#00C2FF" />
          </linearGradient>
        </defs>
        <path d="M3 5 L11 27 L21 5 L25 5 L15 28 L9 28 L1 6 Z" fill="url(#vls-mark)" />
        <circle cx="26" cy="22" r="3" fill="#FF6A2C" />
      </svg>
      <span
        className={cn(
          "sp-cond leading-none",
          size === "lg" ? "text-[26px]" : size === "sm" ? "text-[20px]" : "text-[22px]"
        )}
      >
        VLS
        <span
          className={cn(
            "font-sans font-medium normal-case tracking-[-0.01em] text-sp-slate",
            size === "lg" ? "text-[19px]" : size === "sm" ? "text-[14px]" : "text-[16px]"
          )}
        >
          {" "}
          Sport
        </span>
      </span>
    </span>
  );
}
