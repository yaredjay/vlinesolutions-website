"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <div className="glass-2 border-t border-line px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="flex items-center justify-between gap-3">
          <div className="leading-tight">
            <p className="text-[0.8125rem] text-ink-secondary">AI Solutions</p>
            <p className="text-[0.95rem] font-bold text-ink">From $297/mo</p>
          </div>
          <Link href="/solutions#pricing" className="btn btn-primary h-11 px-5 text-[0.95rem]">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
