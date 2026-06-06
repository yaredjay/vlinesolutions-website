"use client";

import { Check, Minus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const cols = ["Starter", "Growth", "Scale", "Enterprise"];

const rows: { feature: string; values: (string | boolean)[] }[] = [
  { feature: "AI website chatbot (24/7)", values: [true, true, true, true] },
  { feature: "Missed-call text-back", values: [true, true, true, true] },
  { feature: "Lead capture dashboard", values: [true, true, true, true] },
  { feature: "AI appointment booking", values: [false, true, true, true] },
  { feature: "SMS follow-up sequences", values: [false, true, true, true] },
  { feature: "AI phone receptionist", values: [false, true, true, true] },
  { feature: "CRM integration", values: [false, "Standard", "Advanced", "Custom"] },
  { feature: "AI voice agent (in + outbound)", values: [false, false, true, true] },
  { feature: "Database reactivation", values: [false, false, true, true] },
  { feature: "Multi-location support", values: [false, false, true, true] },
  { feature: "Speed-to-lead callback", values: [false, false, true, true] },
  { feature: "Languages", values: ["English", "EN + ES", "EN + ES +", "Custom"] },
  { feature: "Reporting", values: ["Monthly", "Bi-weekly", "Weekly", "Custom"] },
  { feature: "Support", values: ["Email", "Priority", "Dedicated AM", "Eng team"] },
  { feature: "Dedicated account manager", values: [false, false, true, true] },
  { feature: "30-day money-back guarantee", values: [true, true, true, true] },
];

function Cell({ v }: { v: string | boolean }) {
  if (v === true) return <Check className="mx-auto h-5 w-5 text-money" />;
  if (v === false) return <Minus className="mx-auto h-5 w-5 text-ink-muted/40" />;
  return <span className="text-body-sm text-ink">{v}</span>;
}

export function ComparisonTable() {
  return (
    <section className="relative py-24">
      <div className="container-edge">
        <SectionHeader eyebrow="Compare" title="Every Feature, Side by Side" />
        <div className="mt-12 overflow-x-auto rounded-3xl border border-line">
          <table className="w-full min-w-[680px] border-collapse text-center">
            <thead>
              <tr className="bg-bg-2/60">
                <th className="sticky left-0 z-10 bg-bg-2/90 p-4 text-left text-[0.95rem] font-semibold text-ink-secondary">Feature</th>
                {cols.map((c) => (
                  <th key={c} className={`p-4 text-[1rem] font-bold ${c === "Growth" ? "text-cyan" : "text-ink"}`}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.feature} className={i % 2 ? "bg-surface/40" : ""}>
                  <td className="sticky left-0 z-10 bg-bg p-4 text-left text-body-sm text-ink">{r.feature}</td>
                  {r.values.map((v, j) => (
                    <td key={j} className="p-4"><Cell v={v} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
