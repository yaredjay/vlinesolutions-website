"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { staffingModels, workforceStandards } from "@/data/services";

/** How an engagement is staffed, and what every placement carries. */
export function StaffingModels() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="container-edge">
        <Reveal>
          <h2 className="max-w-3xl font-display text-balance text-4xl font-medium leading-[1.05] tracking-tightest md:text-5xl">
            <span className="gradient-text">Fill a seat, build a team, or hand us the function.</span>
          </h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {staffingModels.map((m) => (
            <StaggerItem
              key={m.title}
              className="liquid overflow-hidden rounded-3xl p-7 md:p-8"
              data-liquid
            >
              <div className="absolute inset-0 grid-bg-sm opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
              <h3 className="relative font-display text-2xl font-medium tracking-tight">{m.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-fg-secondary">{m.body}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1}>
          <div className="relative mt-8 overflow-hidden rounded-3xl glass p-7 md:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(60% 80% at 100% 0%, rgba(var(--accent-glow),0.16), transparent 60%)",
              }}
            />
            <div className="relative grid gap-8 md:grid-cols-12">
              <p className="font-display text-2xl font-medium leading-snug tracking-tight md:col-span-5 md:text-3xl">
                What every placement carries, whatever the role.
              </p>
              <ul className="grid gap-3 md:col-span-7">
                {workforceStandards.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-fg-secondary">
                    <span className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
