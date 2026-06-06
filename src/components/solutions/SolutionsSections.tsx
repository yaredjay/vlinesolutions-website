"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { QuoteForm } from "@/components/shared/QuoteForm";
import { customServices, customExamples } from "@/data/solutions";

export function NeedDifferent() {
  return (
    <section className="relative py-24">
      <div className="container-edge">
        <SectionHeader
          eyebrow="Custom Builds"
          title="Need Something Different? We Build It."
          description="Every business has unique challenges. Tell us yours — we'll engineer the AI that solves it."
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
          {customExamples.map((ex) => (
            <StaggerItem key={ex}>
              <div className="glass card-hover flex h-full items-start gap-4 rounded-2xl p-6">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan" />
                <p className="text-[1.0625rem] leading-relaxed text-ink">{ex}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mt-10 text-center">
          <Link href="/custom" className="btn btn-cyan">What Do You Need Built? <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </div>
    </section>
  );
}

export function CustomServicesGrid() {
  return (
    <section className="relative py-24">
      <div className="container-edge">
        <SectionHeader eyebrow="Full-Service" title="Full-Service AI Automation" description="Whatever your business needs automated, we build it." />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {customServices.map((s) => (
            <StaggerItem key={s.title}>
              <div className="glass card-hover h-full rounded-3xl p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-surface text-cyan">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-body-sm leading-relaxed text-ink-secondary">{s.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mx-auto mt-14 max-w-3xl">
          <h3 className="text-center text-2xl font-bold">Tell Us What You Need — Custom Quote in 24 Hours</h3>
          <div className="mt-6">
            <QuoteForm source="solutions:custom-services" submitLabel="Get Custom Quote" />
          </div>
        </div>
      </div>
    </section>
  );
}
