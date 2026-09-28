import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SportLink } from "@/components/sport/SportBase";
import { SportRequestForm } from "@/components/sport/SportRequestForm";
import { officiating, sports } from "@/data/sport";
import { site } from "@/data/site";
import { SPORT_URL } from "@/lib/sport";

export const metadata: Metadata = {
  title: "Request officials",
  description:
    "Request referees, umpires, scorekeepers and game-day crews from VLS Sport for your season, tournament or league. Officials available in all 50 states.",
  alternates: { canonical: `${SPORT_URL}/request` },
};

const levels = ["Youth", "Adult rec", "School districts", "Tournaments", "Championships"];

export default function RequestOfficialsPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F6F8FF 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute -left-40 -top-32 h-[560px] w-[700px] rounded-full blur-[60px] animate-sp-drift" style={{ background: "radial-gradient(circle at 40% 40%, rgba(200,255,26,0.5) 0%, rgba(0,194,255,0.3) 40%, rgba(0,194,255,0) 70%)" }} />
        <div aria-hidden className="pointer-events-none absolute -right-32 top-32 h-[600px] w-[700px] rounded-full blur-[70px]" style={{ background: "radial-gradient(circle at 50% 50%, rgba(43,92,255,0.45) 0%, rgba(124,77,255,0.25) 45%, rgba(124,77,255,0) 72%)" }} />
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(800px 500px at 25% 50%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 70%)" }} />

        <div className="container-edge relative grid gap-10 pb-16 pt-40 md:grid-cols-12 md:gap-6 md:pb-24 md:pt-48">
          <div className="flex flex-col gap-5 md:col-span-7">
            <span className="sp-eyebrow text-sp-electric">Request officials</span>
            <h1 className="sp-display text-[54px] md:text-[76px] lg:text-[84px]">
              <span className="sp-outline">Sports</span>
              <br />
              <span className="sp-outline">officials,</span>
              <br />
              <span className="sp-grad-court">staffed.</span>
            </h1>
            <p className="max-w-[620px] text-base leading-relaxed text-[#1F2740] md:text-[19px]">
              Referees, umpires, scorekeepers, league administrators and tournament crews for parks and recreation
              departments, municipalities, school districts and private leagues. One partner, every sport, all 50 states.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#request" className="sp-btn-primary justify-center">
                Get a quote
              </a>
              <a href="#become" className="sp-btn-ghost justify-center">
                Become an official
              </a>
            </div>
          </div>

          <div className="relative mx-auto h-[380px] w-[300px] md:col-span-5 md:h-[420px] md:w-full">
            <Reveal className="absolute right-0 top-0 h-[300px] w-[220px] rotate-[5deg] overflow-hidden rounded-[30px] bg-sp-deep shadow-[0_40px_100px_rgba(30,50,120,0.3)] md:-top-8 md:h-[400px] md:w-[300px]">
              <Image src="/sport/softball.webp" alt="Softball umpire signaling safe on a community diamond" fill sizes="300px" className="object-cover object-[50%_30%]" />
            </Reveal>
            <Reveal delay={0.12} className="absolute left-0 top-[100px] h-[240px] w-[180px] -rotate-6 overflow-hidden rounded-[26px] bg-sp-deep shadow-[0_40px_100px_rgba(30,50,120,0.3)] md:left-5 md:top-[120px] md:h-[300px] md:w-[240px]">
              <Image src="/sport/flag-football.webp" alt="Flag football referee signaling a touchdown on a community field" fill sizes="240px" className="object-cover object-[50%_12%]" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* gradient ticker */}
      <div className="overflow-hidden py-4" style={{ background: "linear-gradient(90deg, #2B5CFF, #00C2FF 40%, #C8FF1A 70%, #FF7A45)" }}>
        <div className="flex w-max animate-marquee">
          {[0, 1].map((k) => (
            <div key={k} className="flex" aria-hidden={k === 1}>
              {sports.map((s) => (
                <span key={s} className="sp-cond inline-flex items-center gap-5 whitespace-nowrap px-5 text-[20px] text-sp-ink md:text-[26px]">
                  {s}
                  <span className="h-2 w-2 rounded-full bg-sp-ink" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="bg-white py-16 md:py-24">
        <div className="container-edge grid gap-8 md:grid-cols-12 md:gap-6">
          <Reveal className="flex flex-col gap-4 md:col-span-5">
            <span className="sp-eyebrow text-sp-flame">What we staff</span>
            <h2 className="sp-display text-[44px] md:text-[56px]">
              <span className="sp-grad-heat">Everything</span>
              <br />
              <span className="sp-outline">around</span>
              <br />
              <span className="sp-outline">the game.</span>
            </h2>
            <p className="text-[15px] leading-relaxed text-sp-slate md:text-base">
              Officials are the headline. The same bench covers scorekeeping, league administration, facility operations and tournament crews, so one request covers the whole season.
            </p>
            <div className="flex flex-wrap gap-2">
              {levels.map((l) => (
                <span key={l} className="rounded-xl border border-sp-ink/[0.06] bg-sp-mist px-3.5 py-2.5 text-[13px] font-semibold">
                  {l}
                </span>
              ))}
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 md:col-span-7">
            {officiating.map((o, i) => (
              <Reveal key={o} delay={i * 0.04} className="flex items-center gap-3.5 rounded-[18px] border border-white bg-white/90 px-5 py-4 shadow-[0_14px_40px_rgba(30,50,120,0.10)]">
                <span className="sp-cond shrink-0 text-[20px] text-sp-electric">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[15px] font-semibold">{o}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="request" className="bg-sp-mist py-12 md:py-16">
        <div className="container-edge grid gap-5 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-7">
            <SportRequestForm />
          </div>
          <div id="become" className="flex flex-col gap-5 md:col-span-5">
            <Reveal className="relative flex flex-1 flex-col justify-between gap-8 overflow-hidden rounded-[32px] p-7 text-white shadow-[0_40px_100px_rgba(43,92,255,0.3)] md:p-9" style={{ background: "radial-gradient(400px 300px at 90% 10%, rgba(200,255,26,0.7) 0%, rgba(200,255,26,0) 60%), linear-gradient(140deg, #2B5CFF 0%, #3A2FD8 55%, #7C4DFF 100%)" }}>
              <div aria-hidden className="sp-display pointer-events-none absolute -bottom-8 -right-4 select-none text-[200px] leading-none text-white/[0.08]">REF</div>
              <div className="relative flex flex-col gap-3">
                <span className="sp-eyebrow text-sp-volt">For officials</span>
                <h2 className="sp-display text-[44px] text-white md:text-[56px]">
                  Become an
                  <br />
                  official.
                </h2>
                <p className="text-[15px] leading-relaxed text-white/90">
                  Join the VLS roster. Tell us your sports, certifications and availability. We match you to games near you.
                </p>
              </div>
              <a href="#request" className="sp-btn-white relative w-max">
                Apply to the roster <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col gap-2 rounded-3xl border border-sp-ink/[0.06] bg-white p-6 shadow-[0_20px_50px_rgba(30,50,120,0.08)] md:p-7">
              <span className="sp-eyebrow text-sp-muted">Direct lines</span>
              <a href={site.phoneHref} className="text-[22px] font-bold">
                {site.phone}
              </a>
              <a href={site.emailHref} className="text-base">
                {site.email}
              </a>
              <span className="text-[13px] text-sp-muted">HQ · Campbell, CA</span>
              <SportLink href="/" className="mt-2 inline-flex items-center gap-2 text-[13px] font-semibold text-sp-electric">
                Back to VLS Sport <ArrowRight className="h-3.5 w-3.5" />
              </SportLink>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
