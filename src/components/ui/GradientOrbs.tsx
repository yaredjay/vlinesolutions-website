import { cn } from "@/lib/cn";

export function GradientOrbs({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className="orb -left-32 top-[-12%] h-[460px] w-[460px] animate-orb-drift"
        style={{ opacity: 0.6, background: "radial-gradient(circle at 50% 50%, rgba(10,102,255,0.18) 0%, rgba(10,102,255,0.06) 42%, transparent 72%)" }}
      />
      <div
        className="orb right-[-12%] top-[8%] h-[540px] w-[540px] animate-orb-drift"
        style={{ animationDelay: "-6s", opacity: 0.55, background: "radial-gradient(circle at 50% 50%, rgba(79,107,255,0.16) 0%, rgba(79,107,255,0.05) 46%, transparent 74%)" }}
      />
      <div
        className="orb left-1/3 bottom-[-18%] h-[500px] w-[500px] animate-orb-drift"
        style={{ animationDelay: "-11s", opacity: 0.5, background: "radial-gradient(circle at 50% 50%, rgba(10,102,255,0.14) 0%, rgba(10,102,255,0.04) 50%, transparent 76%)" }}
      />
    </div>
  );
}
