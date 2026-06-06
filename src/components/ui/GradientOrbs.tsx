import { cn } from "@/lib/cn";

export function GradientOrbs({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className="orb -left-32 top-[-12%] h-[460px] w-[460px] animate-orb-drift"
        style={{
          opacity: 0.5,
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.35) 0%, rgba(0,212,255,0.10) 40%, transparent 70%)",
        }}
      />
      <div
        className="orb right-[-12%] top-[10%] h-[540px] w-[540px] animate-orb-drift"
        style={{
          animationDelay: "-6s",
          opacity: 0.45,
          background:
            "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.30) 0%, rgba(124,58,237,0.08) 45%, transparent 72%)",
        }}
      />
      <div
        className="orb left-1/3 bottom-[-18%] h-[500px] w-[500px] animate-orb-drift"
        style={{
          animationDelay: "-11s",
          opacity: 0.4,
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,212,255,0.25) 0%, rgba(0,212,255,0.06) 48%, transparent 75%)",
        }}
      />
    </div>
  );
}
