import { cn } from "@/lib/cn";

export function Whistle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-4 w-4", className)} fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
      <path d="M22 26h32a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H38" />
      <circle cx="24" cy="40" r="14" />
      <path d="M24 34v6l5 3" />
    </svg>
  );
}

export function Pin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 40" className={cn("h-10 w-[30px]", className)} aria-hidden="true">
      <defs>
        <linearGradient id="sp-pin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2B5CFF" />
          <stop offset="1" stopColor="#00C2FF" />
        </linearGradient>
      </defs>
      <path d="M15 39C15 39 28 24 28 14A13 13 0 0 0 2 14C2 24 15 39 15 39Z" fill="url(#sp-pin)" />
      <circle cx="15" cy="14" r="5" fill="#fff" />
    </svg>
  );
}
