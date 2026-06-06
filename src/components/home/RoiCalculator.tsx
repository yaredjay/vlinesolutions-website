"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { GradientOrbs } from "@/components/ui/GradientOrbs";

const AI_COST = 497;

function Slider({
  label, min, max, step, value, onChange, format,
}: {
  label: string; min: number; max: number; step: number; value: number;
  onChange: (n: number) => void; format: (n: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-[1.0625rem] font-medium text-ink">{label}</label>
        <span className="text-lg font-bold text-cyan">{format(value)}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full outline-none"
        style={{ background: `linear-gradient(to right, var(--cyan) ${pct}%, rgba(255,255,255,0.1) ${pct}%)` }}
      />
    </div>
  );
}

export function RoiCalculator() {
  const [calls, setCalls] = useState(20);
  const [missPct, setMissPct] = useState(40);
  const [avgJob, setAvgJob] = useState(500);

  const { missed, lost, roi } = useMemo(() => {
    const missed = Math.round(calls * (missPct / 100) * 30);
    const lost = missed * avgJob;
    const roi = lost > 0 ? Math.max(1, Math.round(lost / AI_COST)) : 0;
    return { missed, lost, roi };
  }, [calls, missPct, avgJob]);

  const fmt = (n: number) => "$" + n.toLocaleString();

  return (
    <section id="roi" className="relative scroll-mt-28 overflow-hidden py-24">
      <GradientOrbs className="opacity-60" />
      <div className="container-edge relative">
        <SectionHeader eyebrow="ROI Calculator" title="Calculate Your Missed Revenue" description="Move the sliders. See the math. Make the decision." />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
          <Reveal className="glass rounded-3xl p-8">
            <div className="space-y-8">
              <Slider label="Calls per day" min={5} max={100} step={1} value={calls} onChange={setCalls} format={(n) => `${n}`} />
              <Slider label="Calls you miss" min={10} max={80} step={5} value={missPct} onChange={setMissPct} format={(n) => `${n}%`} />
              <Slider label="Average job value" min={100} max={10000} step={50} value={avgJob} onChange={setAvgJob} format={fmt} />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="glass-2 relative overflow-hidden rounded-3xl p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-50 blur-3xl" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.4), transparent 70%)" }} />
            <div className="relative space-y-5">
              <Row label="Missed calls per month" value={`${missed}`} />
              <Row label="Revenue at risk" value={`${fmt(lost)}/mo`} accent />
              <Row label="V-Line AI cost" value={`${fmt(AI_COST)}/mo`} />
              <div className="rounded-2xl border border-money/30 bg-money/[0.08] p-5 text-center">
                <p className="text-3xs uppercase tracking-[0.2em] text-money">Your Return</p>
                <p className="mt-1 text-[3rem] font-extrabold leading-none money">{roi}x</p>
                <p className="mt-2 text-body-sm text-ink-secondary">
                  You&apos;re leaving <span className="money">{fmt(lost)}</span> on the table every month.
                </p>
              </div>
              <Link href="/solutions" className="btn btn-primary btn-block">
                Stop Losing Money <ArrowRight className="h-5 w-5" />
              </Link>
              <p className="text-center text-[0.8125rem] text-ink-muted">
                Estimate assumes each missed call is a potential job at your average value.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-line pb-4">
      <span className="text-[1.0625rem] text-ink-secondary">{label}</span>
      <span className={accent ? "text-xl font-bold text-ink" : "text-lg font-semibold text-ink"}>{value}</span>
    </div>
  );
}
