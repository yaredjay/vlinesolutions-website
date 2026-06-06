"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ArrowRight, X } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { plans, upsells, type Plan } from "@/data/solutions";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Pricing() {
 const router = useRouter();
 const [modalPlan, setModalPlan] = useState<Plan | null>(null);

 const handleStart = (plan: Plan) => {
  if (plan.id === "enterprise") {
   router.push(plan.href);
   return;
  }
  setModalPlan(plan);
 };

 return (
  <section id="pricing" className="relative scroll-mt-28 py-24">
   <div className="container-edge">
    <SectionHeader eyebrow="Pricing" title="Plans That Pay For Themselves" description="Month-to-month. No contracts. Every plan backed by the 30-day money-back guarantee." />

    <div className="mt-16 grid gap-5 lg:grid-cols-4 lg:items-start">
     {plans.map((plan) => (
      <div
       key={plan.id}
       className={cn(
        "glass relative z-0 flex flex-col rounded-3xl p-7",
        plan.popular
         ? "z-10 border-2 border-cyan shadow-[0_40px_90px_-30px_rgba(10,102,255,0.45)] lg:-translate-y-3"
         : "card-hover"
       )}
      >
       {plan.popular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#0a66ff] to-[#4f6bff] px-4 py-1.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_28px_-8px_rgba(10,102,255,0.7)]">
         {plan.badge}
        </span>
       )}
       <p className="text-[1.0625rem] font-bold text-ink">{plan.name}</p>
       <div className="mt-3 flex items-end gap-1">
        <span className="text-4xl font-extrabold text-ink">{plan.price}</span>
        {plan.period && <span className="mb-1 text-body-sm text-ink-secondary">{plan.period}</span>}
       </div>
       {plan.setup && <p className="text-body-sm text-ink-muted">{plan.setup}</p>}
       {!plan.popular && plan.badge && <p className="mt-2 text-[0.8125rem] font-semibold text-cyan">{plan.badge}</p>}
       <p className="mt-3 text-body-sm text-ink-secondary">{plan.blurb}</p>

       <ul className="mt-6 flex-1 space-y-2.5">
        {plan.features.map((f) => (
         <li key={f} className="flex items-start gap-2.5 text-body-sm text-ink">
          <Check className="mt-1 h-4 w-4 shrink-0 text-money" />
          <span>{f}</span>
         </li>
        ))}
       </ul>

       {plan.anchor && <p className="mt-5 rounded-xl border border-line bg-surface px-3 py-2 text-[0.8125rem] text-ink-secondary">{plan.anchor}</p>}
       {plan.nudge && <p className="mt-3 text-[0.8125rem] font-medium text-warn">{plan.nudge}</p>}

       <button
        onClick={() => handleStart(plan)}
        className={cn("btn mt-6", plan.popular ? "btn-cyan" : "btn-primary")}
       >
        {plan.cta} <ArrowRight className="h-5 w-5" />
       </button>
      </div>
     ))}
    </div>

    <p className="mt-8 text-center text-body-sm text-ink-secondary">{site.availabilityNote}</p>
   </div>

   {/* Upsell modal */}
   <AnimatePresence>
    {modalPlan && <UpsellModal plan={modalPlan} onClose={() => setModalPlan(null)} onContinue={(href) => router.push(href)} />}
   </AnimatePresence>
  </section>
 );
}

function UpsellModal({ plan, onClose, onContinue }: { plan: Plan; onClose: () => void; onContinue: (href: string) => void }) {
 const [picked, setPicked] = useState<string[]>([]);
 const toggle = (id: string) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
 const go = () => {
  const q = picked.length ? `&addons=${picked.join(",")}` : "";
  onContinue(`${plan.href}${q}`);
 };
 return (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] flex items-center justify-center p-5">
   <div className="absolute inset-0 bg-bg/80 backdrop-blur-sm" onClick={onClose} />
   <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    className="glass-2 relative w-full max-w-lg rounded-3xl p-7"
   >
    <button onClick={onClose} aria-label="Close" className="absolute right-5 top-5 text-ink-muted hover:text-ink"><X className="h-5 w-5" /></button>
    <h3 className="text-2xl font-bold">Great choice — {plan.name}!</h3>
    <p className="mt-1 text-body-sm text-ink-secondary">Want to supercharge it?</p>
    <div className="mt-5 space-y-2.5">
     {upsells.map((u) => {
      const on = picked.includes(u.id);
      return (
       <button key={u.id} onClick={() => toggle(u.id)} className={cn("flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition-colors", on ? "border-cyan/50 bg-cyan/[0.06]" : "border-line bg-surface hover:border-line-hover")}>
        <span className={cn("grid h-6 w-6 shrink-0 place-items-center rounded-md border", on ? "border-cyan bg-cyan text-white" : "border-line")}>
         {on && <Check className="h-4 w-4" />}
        </span>
        <span className="flex-1">
         <span className="block font-semibold text-ink">{u.label}</span>
         <span className="block text-body-sm text-ink-secondary">{u.desc}</span>
        </span>
        <span className="font-bold text-cyan">{u.price}</span>
       </button>
      );
     })}
    </div>
    <button onClick={go} className="btn btn-primary btn-block mt-6">
     {picked.length ? "Add & Continue" : "Continue"} <ArrowRight className="h-5 w-5" />
    </button>
    <button onClick={go} className="mt-3 w-full text-center text-body-sm text-ink-muted hover:text-ink-secondary">No thanks, continue →</button>
   </motion.div>
  </motion.div>
 );
}
