"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { industries } from "@/data/industries";
import { cn } from "@/lib/cn";

const missOptions = [
  { id: "voicemail", label: "Goes to voicemail" },
  { id: "service", label: "Answering service ($800–$2K/mo)" },
  { id: "nothing", label: "Nothing — we lose them" },
  { id: "callback", label: "We try to call back later" },
];

const headaches = [
  "Missing calls", "No-shows", "No follow-up",
  "Staff overwhelmed", "After-hours gaps", "Manual data entry",
];

type Answers = {
  industry?: string;
  calls: number;
  miss?: string;
  headaches: string[];
  jobValue: number;
};

const lostFrac: Record<string, number> = { voicemail: 0.5, service: 0.25, nothing: 0.75, callback: 0.35 };

export function Assessment() {
  const [step, setStep] = useState(0); // 0-4 questions, 5 results
  const [a, setA] = useState<Answers>({ calls: 20, headaches: [], jobValue: 500 });
  const [sent, setSent] = useState(false);
  const total = 5;

  const result = useMemo(() => {
    const missedPerMonth = Math.round(a.calls * 0.4 * 30);
    const frac = lostFrac[a.miss ?? "voicemail"] ?? 0.5;
    const monthlyLoss = Math.round(missedPerMonth * frac * a.jobValue);
    const plan = a.calls >= 50 ? "Scale" : a.calls >= 15 ? "Growth" : "Starter";
    const planCost = plan === "Scale" ? 1497 : plan === "Growth" ? 697 : 297;
    const roi = monthlyLoss > 0 ? Math.max(1, Math.round((monthlyLoss * 0.5) / planCost)) : 0;
    const annual = monthlyLoss * 12;
    const recover = Math.round(monthlyLoss * 0.25);
    return { missedPerMonth, monthlyLoss, plan, roi, annual, recover };
  }, [a]);

  const next = () => setStep((s) => Math.min(total, s + 1));
  const back = () => setStep((s) => Math.max(0, s - 1));

  const fmt = (n: number) => "$" + n.toLocaleString();

  const toggleHeadache = (h: string) =>
    setA((prev) => ({ ...prev, headaches: prev.headaches.includes(h) ? prev.headaches.filter((x) => x !== h) : [...prev.headaches, h] }));

  async function submitReport(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      await fetch("/api/lead", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "assessment", answers: a, result }),
      }).catch(() => {});
    } finally {
      setSent(true);
    }
  }

  const progress = Math.min(100, (step / total) * 100);

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress */}
      <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-surface">
        <motion.div className="h-full rounded-full bg-cyan" animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
      </div>

      <div className="glass rounded-3xl p-7 md:p-10">
        <AnimatePresence mode="wait">
          {step < total ? (
            <motion.div key={step} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
              {step === 0 && (
                <Question title="What industry are you in?">
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {[...industries.map((i) => i.name), "Other"].map((name) => (
                      <button key={name} onClick={() => { setA({ ...a, industry: name }); next(); }}
                        className={cn("rounded-xl border p-3 text-[0.95rem] font-medium transition-colors", a.industry === name ? "border-cyan bg-cyan/[0.08] text-cyan" : "border-line bg-surface text-ink hover:border-line-hover")}>
                        {name}
                      </button>
                    ))}
                  </div>
                </Question>
              )}

              {step === 1 && (
                <Question title="How many customer calls or inquiries per day?">
                  <p className="text-center text-5xl font-extrabold text-cyan">{a.calls}{a.calls >= 100 ? "+" : ""}</p>
                  <input type="range" min={5} max={100} step={1} value={a.calls} onChange={(e) => setA({ ...a, calls: Number(e.target.value) })} className="mt-6 w-full accent-cyan" aria-label="Calls per day" />
                  <NextBtn onClick={next} />
                </Question>
              )}

              {step === 2 && (
                <Question title="What happens when you miss a call?">
                  <div className="grid gap-2.5">
                    {missOptions.map((m) => (
                      <button key={m.id} onClick={() => { setA({ ...a, miss: m.id }); next(); }}
                        className={cn("rounded-xl border p-4 text-left text-[1rem] font-medium transition-colors", a.miss === m.id ? "border-cyan bg-cyan/[0.08] text-cyan" : "border-line bg-surface text-ink hover:border-line-hover")}>
                        {m.label}
                      </button>
                    ))}
                  </div>
                </Question>
              )}

              {step === 3 && (
                <Question title="What's your biggest headache?" hint="Select all that apply">
                  <div className="grid grid-cols-2 gap-2.5">
                    {headaches.map((h) => {
                      const on = a.headaches.includes(h);
                      return (
                        <button key={h} onClick={() => toggleHeadache(h)}
                          className={cn("flex items-center gap-2 rounded-xl border p-3 text-left text-[0.95rem] font-medium transition-colors", on ? "border-cyan bg-cyan/[0.08] text-cyan" : "border-line bg-surface text-ink hover:border-line-hover")}>
                          <span className={cn("grid h-5 w-5 shrink-0 place-items-center rounded border", on ? "border-cyan bg-cyan text-[#021318]" : "border-line")}>{on && <Check className="h-3.5 w-3.5" />}</span>
                          {h}
                        </button>
                      );
                    })}
                  </div>
                  <NextBtn onClick={next} disabled={a.headaches.length === 0} />
                </Question>
              )}

              {step === 4 && (
                <Question title="Average job or service value?">
                  <p className="text-center text-5xl font-extrabold text-cyan">{fmt(a.jobValue)}</p>
                  <input type="range" min={50} max={10000} step={50} value={a.jobValue} onChange={(e) => setA({ ...a, jobValue: Number(e.target.value) })} className="mt-6 w-full accent-cyan" aria-label="Average job value" />
                  <NextBtn onClick={next} label="See My Results" />
                </Question>
              )}

              {step > 0 && (
                <button onClick={back} className="mt-6 inline-flex items-center gap-1.5 text-body-sm text-ink-muted hover:text-ink">
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div key="results" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-3xs font-semibold uppercase tracking-[0.2em] text-cyan">Your Results</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Stat label="Monthly missed calls" value={`${result.missedPerMonth}`} />
                <Stat label="Estimated monthly loss" value={`${fmt(result.monthlyLoss)}`} warn />
                <Stat label="Recommended plan" value={result.plan} />
                <Stat label="Projected 90-day ROI" value={`${result.roi}x`} money />
              </div>
              <div className="mt-3 rounded-2xl border border-money/25 bg-money/[0.07] p-5 text-center">
                <p className="text-body-sm text-ink-secondary">Annual recoverable revenue</p>
                <p className="money text-3xl">{fmt(result.annual)}</p>
              </div>
              <p className="mt-4 rounded-xl border border-line bg-surface p-4 text-center text-body-sm text-ink-secondary">
                Try it risk-free. If our AI doesn&apos;t recover at least <span className="money">{fmt(result.recover)}</span> in 30 days, you pay nothing.
              </p>

              {sent ? (
                <div className="mt-6 rounded-2xl border border-line bg-surface p-6 text-center">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-money/15 text-money"><Check className="h-6 w-6" /></span>
                  <p className="mt-3 font-semibold text-ink">Report sent! Our team will follow up shortly.</p>
                  <Link href="/solutions#pricing" className="btn btn-primary btn-block mt-4">Get Started With {result.plan} <ArrowRight className="h-5 w-5" /></Link>
                </div>
              ) : (
                <form onSubmit={submitReport} className="mt-6 grid gap-3">
                  <p className="text-[1.0625rem] font-semibold text-ink">Get your full report:</p>
                  <input name="name" required placeholder="Name" className="as-field" />
                  <input name="email" type="email" required placeholder="Email" className="as-field" />
                  <input name="phone" type="tel" required placeholder="Phone" className="as-field" />
                  <input name="business" placeholder="Business Name" className="as-field" />
                  <button type="submit" className="btn btn-primary btn-block">Send My Report <ArrowRight className="h-5 w-5" /></button>
                </form>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .as-field {
          width: 100%; border-radius: 0.85rem; border: 1px solid var(--border);
          background: rgba(255,255,255,0.03); padding: 0.7rem 0.9rem; font-size: 1rem;
          color: var(--text); outline: none; transition: border-color 0.2s;
        }
        .as-field::placeholder { color: var(--text-muted); }
        .as-field:focus { border-color: rgba(0,212,255,0.5); }
      `}</style>
    </div>
  );
}

function Question({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-bold leading-snug">{title}</h2>
      {hint && <p className="mt-1 text-body-sm text-ink-muted">{hint}</p>}
      <div className="mt-6">{children}</div>
    </div>
  );
}

function NextBtn({ onClick, disabled, label = "Continue" }: { onClick: () => void; disabled?: boolean; label?: string }) {
  return (
    <button onClick={onClick} disabled={disabled} className="btn btn-primary btn-block mt-7 disabled:opacity-50">
      {label} <ArrowRight className="h-5 w-5" />
    </button>
  );
}

function Stat({ label, value, warn, money }: { label: string; value: string; warn?: boolean; money?: boolean }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-5">
      <p className="text-body-sm text-ink-secondary">{label}</p>
      <p className={cn("mt-1 text-2xl font-extrabold", warn ? "text-warn" : money ? "money" : "text-ink")}>{value}</p>
    </div>
  );
}
