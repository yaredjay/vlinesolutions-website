import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SportLink } from "@/components/sport/SportBase";
import { SportFAQ } from "@/components/sport/SportFAQ";
import { DepthReveal } from "@/components/sport/motion/ScrollFx";
import { breadcrumb, faqPage, JsonLd, sportGraphBase } from "@/components/sport/SportStructuredData";
import { sportBrand, steps } from "@/data/sport";
import { getSportPage, sportPages } from "@/data/sport-pages";
import { SPORT_URL } from "@/lib/sport";

export function generateStaticParams() {
  return sportPages.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = getSportPage(params.slug);
  if (!page) return {};
  const title = `${page.headline} for leagues, schools & tournaments`;
  const description = `Hire ${page.name.toLowerCase()} ${page.officials} from ${sportBrand.name}: vetted crews matched to your rulebook, backups on every slate, scorekeeping and reporting. Parks & rec, schools, tournaments and private leagues in all 50 states.`;
  const url = `${SPORT_URL}/officials/${page.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} — ${sportBrand.name}`, description, url, type: "website" },
    twitter: { card: "summary_large_image", title: `${title} — ${sportBrand.name}`, description },
  };
}

export default function SportOfficialsPage({ params }: { params: { slug: string } }) {
  const page = getSportPage(params.slug);
  if (!page) notFound();
  const url = `${SPORT_URL}/officials/${page.slug}`;
  const related = sportPages.filter((p) => p.slug !== page.slug).slice(0, 6);
  const faqs = [
    ...page.faqs,
    { q: `How fast can you staff ${page.name.toLowerCase()} ${page.officials}?`, a: "Send the sport, level, schedule and venues in one request. We confirm crews for the full schedule and keep standby officials on every slate." },
    { q: `Do you work with parks and recreation departments for ${page.name.toLowerCase()}?`, a: `Yes. ${sportBrand.name} is a division of V-Line Solutions LLC, SAM.gov registered and cooperative-purchasing ready, with one invoice per season or event.` },
  ];

  const graph = [
    ...sportGraphBase(),
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: `${page.headline} for leagues, schools and tournaments`,
      serviceType: `${page.name} officiating`,
      description: page.intro,
      provider: { "@id": `${SPORT_URL}/#organization` },
      areaServed: { "@type": "Country", name: "United States" },
      audience: { "@type": "Audience", audienceType: page.levels.join(", ") },
      availableChannel: { "@type": "ServiceChannel", serviceUrl: `${SPORT_URL}/request` },
      hasOfferCatalog: { "@type": "OfferCatalog", name: `${page.name} crew roles`, itemListElement: page.crew.map((c) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: c } })) },
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: `${page.headline} — ${sportBrand.name}`,
      isPartOf: { "@id": `${SPORT_URL}/#website` },
      about: { "@id": `${url}#service` },
      inLanguage: "en-US",
    },
    breadcrumb([
      { name: sportBrand.name, url: SPORT_URL },
      { name: "Officials by sport", url: `${SPORT_URL}/#sports` },
      { name: page.headline, url },
    ]),
    faqPage(faqs, `${url}#faq`),
  ];

  return (
    <>
      <JsonLd graph={graph} />

      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F6F8FF 100%)" }}>
        <div aria-hidden className="pointer-events-none absolute -left-40 -top-32 h-[560px] w-[700px] rounded-full blur-[60px] animate-sp-drift" style={{ background: "radial-gradient(circle at 40% 40%, rgba(43,92,255,0.4) 0%, rgba(0,194,255,0.3) 40%, rgba(0,194,255,0) 70%)" }} />
        <div aria-hidden className="pointer-events-none absolute -right-32 top-32 h-[600px] w-[700px] rounded-full blur-[70px]" style={{ background: "radial-gradient(circle at 50% 50%, rgba(200,255,26,0.4) 0%, rgba(124,77,255,0.2) 45%, rgba(124,77,255,0) 72%)" }} />
        <div className="container-edge relative pb-14 pt-36 md:pb-20 md:pt-44">
          <nav aria-label="Breadcrumb" className="mb-6 text-[13px] text-sp-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li><SportLink href="/" className="hover:text-sp-ink">{sportBrand.name}</SportLink></li>
              <li aria-hidden>/</li>
              <li><SportLink href="/#sports" className="hover:text-sp-ink">Officials by sport</SportLink></li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-sp-ink">{page.name}</li>
            </ol>
          </nav>
          <div className="grid gap-8 md:grid-cols-12 md:gap-6">
            <div className="flex flex-col gap-5 md:col-span-7">
              <span className="sp-eyebrow text-sp-electric">{page.name} · Officials staffing</span>
              <h1 className="sp-display text-[clamp(36px,10.2vw,84px)] md:text-[72px] lg:text-[84px]">
                <span className="text-sp-ink">{page.headline.split(" ")[0]}</span>
                <br />
                <span className="sp-outline !whitespace-normal">{page.headline.split(" ").slice(1).join(" ")}</span>
                <br />
                <span className="sp-grad-court">staffed.</span>
              </h1>
              <p className="max-w-[640px] text-base leading-relaxed text-[#1F2740] md:text-[19px]">{page.intro}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <SportLink href="/request" className="sp-btn-primary justify-center">
                  Request {page.name.toLowerCase()} {page.officials}
                  <span aria-hidden className="grid h-7 w-7 place-items-center rounded-full bg-sp-volt text-sp-ink"><ArrowRight className="h-4 w-4" /></span>
                </SportLink>
                <SportLink href="/request#become" className="sp-btn-ghost justify-center">Join the roster</SportLink>
              </div>
            </div>
            <div className="sp-stage grid gap-3 md:col-span-5 md:content-start">
              <DepthReveal className="rounded-3xl border border-white bg-white/90 p-6 shadow-[0_20px_60px_rgba(30,50,120,0.10)] backdrop-blur-md">
                <span className="sp-eyebrow text-sp-muted">Crew roles</span>
                <ul className="mt-3 flex flex-col gap-2">
                  {page.crew.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-[15px] font-semibold text-sp-ink">
                      <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full" style={{ background: "linear-gradient(120deg,#2B5CFF,#00C2FF)" }}><Check className="h-2.5 w-2.5 text-white" strokeWidth={3.5} /></span>
                      {c}
                    </li>
                  ))}
                </ul>
              </DepthReveal>
              <DepthReveal delay={0.08} className="rounded-3xl border border-white bg-white/90 p-6 shadow-[0_20px_60px_rgba(30,50,120,0.10)] backdrop-blur-md">
                <span className="sp-eyebrow text-sp-muted">Formats and levels</span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[...page.formats, ...page.levels].map((f) => (
                    <span key={f} className="rounded-xl border border-sp-ink/[0.06] bg-sp-mist px-3 py-2 text-[13px] font-semibold">{f}</span>
                  ))}
                </div>
              </DepthReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24" aria-labelledby="how-title">
        <div className="container-edge">
          <Reveal className="flex flex-col gap-3">
            <span className="sp-eyebrow text-sp-flame">How it works</span>
            <h2 id="how-title" className="sp-display text-[32px] sm:text-[44px] md:text-[56px]">
              One request.
              <br className="md:hidden" /> <span className="sp-grad-heat">Whole season.</span>
            </h2>
          </Reveal>
          <div className="sp-stage mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {steps.map((s, i) => (
              <DepthReveal key={s.num} delay={i * 0.06} className="flex flex-col gap-2 rounded-2xl border border-sp-ink/[0.05] bg-[#F3F6FF] p-5">
                <span className="sp-cond text-[22px]" style={{ color: s.color }}>{s.num}</span>
                <span className="text-[15px] leading-snug text-sp-slate">{s.text}</span>
              </DepthReveal>
            ))}
          </div>
        </div>
      </section>

      <SportFAQ
        items={faqs}
        eyebrow={`${page.name} questions`}
        title={<><span className="sp-outline">Before the</span><br /><span className="sp-grad-court">first whistle.</span></>}
      />

      <section className="bg-sp-mist py-12 md:py-16" aria-labelledby="related-title">
        <div className="container-edge">
          <h2 id="related-title" className="sp-eyebrow text-sp-muted">More officials by sport</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {related.map((r) => (
              <SportLink key={r.slug} href={`/officials/${r.slug}`} className="sp-cond rounded-xl border border-white bg-white/80 px-4 py-3 text-[18px] text-sp-ink shadow-[0_8px_20px_rgba(30,50,120,0.08)] transition-transform hover:-translate-y-0.5">
                {r.name}
              </SportLink>
            ))}
            <SportLink href="/#sports" className="sp-cond rounded-xl border-[1.5px] border-dashed border-sp-electric/60 bg-sp-electric/[0.06] px-4 py-3 text-[18px] text-sp-electric">All sports</SportLink>
          </div>
        </div>
      </section>
    </>
  );
}
