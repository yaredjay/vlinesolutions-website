"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * The portfolio switcher shared by both sites: one tap between
 * V-Line Solutions (corporate) and VLS Sport (officiating).
 */
export function BrandSwitcher({
  active,
  corpHref,
  sportHref,
  tone = "auto",
  className,
}: {
  active: "corp" | "sport";
  corpHref: string;
  sportHref: string;
  tone?: "auto" | "light";
  className?: string;
}) {
  const light = tone === "light";
  const items = [
    { key: "corp", label: "V-Line Solutions", href: corpHref },
    { key: "sport", label: "VLS Sport", href: sportHref },
  ] as const;

  return (
    <div
      role="navigation"
      aria-label="Brands"
      className={cn(
        "inline-flex items-center rounded-full p-1 text-[11px] font-semibold uppercase tracking-[0.12em] backdrop-blur-md",
        light
          ? "border border-white bg-white/80 text-sp-slate shadow-[0_8px_24px_rgba(30,50,120,0.10)]"
          : "border border-border-subtle bg-bg-surface/70 text-fg-secondary",
        className
      )}
    >
      {items.map((item) => {
        const isActive = item.key === active;
        return (
          <Link
            key={item.key}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "rounded-full px-3 py-1.5 transition-colors",
              isActive
                ? light
                  ? "bg-sp-ink text-white"
                  : "bg-fg-primary text-bg-base"
                : light
                  ? "hover:text-sp-ink"
                  : "hover:text-fg-primary"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
