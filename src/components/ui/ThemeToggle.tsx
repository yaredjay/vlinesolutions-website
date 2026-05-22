"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-9 w-[64px] items-center rounded-full p-1 transition-colors",
        "border border-border-subtle bg-bg-surface/60 backdrop-blur-md",
        "hover:border-border-strong",
        className
      )}
    >
      <span
        className={cn(
          "absolute left-1 top-1 grid h-7 w-7 place-items-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]",
          "bg-bg-elevated shadow-[0_4px_20px_-4px_rgba(0,0,0,0.35)]",
          isDark ? "translate-x-[28px]" : "translate-x-0"
        )}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-accent" aria-hidden />
        ) : (
          <Sun className="h-3.5 w-3.5 text-accent" aria-hidden />
        )}
      </span>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
