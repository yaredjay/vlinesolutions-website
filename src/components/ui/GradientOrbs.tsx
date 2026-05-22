import { cn } from "@/lib/cn";

export function GradientOrbs({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "intense" | "subtle";
}) {
  const baseOpacity = variant === "intense" ? "opacity-80" : variant === "subtle" ? "opacity-30" : "opacity-50";
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className={cn(
          "orb -left-32 top-[-10%] h-[480px] w-[480px] animate-float-slow",
          baseOpacity
        )}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(var(--accent-glow),0.45) 0%, rgba(var(--accent-glow),0.18) 35%, transparent 70%)",
        }}
      />
      <div
        className={cn(
          "orb right-[-10%] top-[15%] h-[560px] w-[560px] animate-float-slow",
          baseOpacity
        )}
        style={{
          animationDelay: "-4s",
          background:
            "radial-gradient(circle at 50% 50%, rgba(96,80,255,0.30) 0%, rgba(96,80,255,0.10) 40%, transparent 70%)",
        }}
      />
      <div
        className={cn(
          "orb left-1/3 bottom-[-15%] h-[500px] w-[500px] animate-float-slow",
          baseOpacity
        )}
        style={{
          animationDelay: "-9s",
          background:
            "radial-gradient(circle at 50% 50%, rgba(var(--accent-glow),0.30) 0%, rgba(var(--accent-glow),0.08) 45%, transparent 75%)",
        }}
      />
    </div>
  );
}
