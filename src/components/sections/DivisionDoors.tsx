"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

/**
 * The two doors on the corporate homepage: Technology stays in the dark
 * corporate shell, VLS Sport opens in its own bright world.
 */
export function DivisionDoors() {
  return (
    <section className="relative py-24 md:py-28">
      <div className="container-edge">
        <SectionHeader
          eyebrow="Two divisions"
          title="One company. Two ways in."
          description="Government technology delivered at startup speed, and a sports officiating division that staffs every game your league runs."
        />

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Technology door */}
          <StaggerItem>
            <Link
              href="/technology"
              className="group relative block min-h-[440px] overflow-hidden rounded-[2rem] border border-border-subtle bg-bg-surface/70 p-8 transition-transform duration-500 hover:-translate-y-1 md:p-10"
            >
              <div className="absolute inset-0 grid-bg-sm opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden />
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
                style={{ background: "radial-gradient(circle, rgba(var(--accent-glow),0.45), transparent 65%)" }}
              />
              <div className="relative flex h-full min-h-[376px] flex-col justify-between">
                <span className="inline-flex w-max items-center gap-2 rounded-full border border-border-subtle bg-bg-elevated/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-fg-secondary backdrop-blur-md">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
                  Technology
                </span>
                <div>
                  <h3 className="font-display text-4xl font-medium leading-[1.02] tracking-tightest md:text-5xl">
                    <span className="gradient-text">AI systems</span>
                    <br />
                    for the public sector.
                  </h3>
                  <p className="mt-4 max-w-md text-base text-fg-secondary md:text-lg">
                    Production-ready AI, automation, engineering, data and security for agencies and enterprise.
                  </p>
                  <span className="btn-primary mt-7 inline-flex text-sm">
                    Explore Technology <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </StaggerItem>

          {/* VLS Sport door */}
          <StaggerItem>
            <Link
              href="/sports"
              className="group relative block min-h-[440px] overflow-hidden rounded-[2rem] border border-white bg-white p-8 text-[#0B1020] shadow-[0_30px_80px_-20px_rgba(43,92,255,0.35)] transition-transform duration-500 hover:-translate-y-1 md:p-10"
            >
              <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(520px 320px at 100% 0%, rgba(0,194,255,0.35) 0%, rgba(0,194,255,0) 60%), radial-gradient(420px 320px at 0% 100%, rgba(200,255,26,0.45) 0%, rgba(200,255,26,0) 60%), linear-gradient(180deg,#FFFFFF,#F3F6FF)" }} />
              <div className="absolute -right-6 bottom-6 w-[46%] rotate-[6deg] rounded-[26px] p-[3px] shadow-[0_40px_100px_rgba(30,50,120,0.28)] transition-transform duration-700 group-hover:rotate-[3deg] md:w-[44%]" style={{ background: "linear-gradient(160deg,#FFFFFF 0%, rgba(43,92,255,0.6) 40%, rgba(255,61,140,0.5) 100%)" }}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[23px] bg-[#0A1030]">
                  <Image src="/sport/hero.webp" alt="VLS Sport officials" fill sizes="(min-width: 768px) 300px, 45vw" className="object-cover object-[50%_30%]" />
                </div>
              </div>
              <div className="relative flex h-full min-h-[376px] flex-col justify-between">
                <span className="inline-flex w-max items-center gap-2 rounded-full border border-white bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#3B4257] shadow-[0_8px_20px_rgba(30,50,120,0.10)]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2B5CFF]" />
                  VLS Sport
                </span>
                <div className="max-w-[55%]">
                  <h3 className="font-archivo text-4xl font-black uppercase leading-[0.9] tracking-[-0.035em] md:text-5xl" style={{ fontVariationSettings: "'wdth' 112" }}>
                    Officials
                    <br />
                    <span className="text-[#2B5CFF]">for every</span>
                    <br />
                    game.
                  </h3>
                  <p className="mt-4 text-base text-[#3B4257]">
                    Referees, umpires and game-day crews for parks &amp; rec, schools and leagues nationwide.
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0B1020] px-5 py-3 text-sm font-bold text-white">
                    <span className="h-2 w-2 rounded-full bg-[#C8FF1A]" />
                    Open VLS Sport <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </StaggerItem>
        </Stagger>

        <Reveal delay={0.15} className="mt-6">
          <Link
            href="/workforce"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-border-subtle bg-bg-surface/50 px-6 py-5 text-sm text-fg-secondary transition-colors hover:text-fg-primary"
          >
            <span>
              <span className="font-medium text-fg-primary">Workforce Solutions</span> · facilities, events, administrative, IT and skilled-trades staffing for agencies and enterprise.
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
