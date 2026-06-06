"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stars } from "@/components/shared/Stars";
import { testimonials as allTestimonials, type Testimonial } from "@/data/testimonials";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function Testimonials({ items }: { items?: Testimonial[] }) {
  const data = items ?? allTestimonials;
  const [perPage, setPerPage] = useState(3);
  const [page, setPage] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const hovering = useRef(false);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setPerPage(w < 768 ? 1 : w < 1024 ? 2 : 3);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const pages = Math.max(1, Math.ceil(data.length / perPage));
  useEffect(() => {
    if (page > pages - 1) setPage(0);
  }, [pages, page]);

  useEffect(() => {
    const id = setInterval(() => {
      if (!hovering.current) setPage((p) => (p + 1) % pages);
    }, 5000);
    return () => clearInterval(id);
  }, [pages]);

  const showRating = site.proof.rating && site.proof.reviewCount;

  return (
    <section className="relative py-24">
      <div className="container-edge">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description={showRating ? undefined : "How working with V-Line Solutions feels for the businesses we serve."}
        />
        {showRating && (
          <p className="mt-4 flex items-center justify-center gap-2 text-center text-body-sm text-ink-secondary">
            <Stars rating={site.proof.rating!} />
            {site.proof.rating} out of 5 based on {site.proof.reviewCount!.toLocaleString()}+ businesses
          </p>
        )}

        <div
          className="mt-12 overflow-hidden"
          onMouseEnter={() => (hovering.current = true)}
          onMouseLeave={() => (hovering.current = false)}
        >
          <div
            ref={trackRef}
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {data.map((t) => (
              <div key={t.id} className="shrink-0 px-2.5" style={{ width: `${100 / perPage}%` }}>
                <Card t={t} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn("h-2 rounded-full transition-all", i === page ? "w-7 bg-cyan" : "w-2 bg-line-hover")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="glass flex h-full flex-col rounded-3xl p-7">
      <Stars rating={t.rating} />
      <blockquote className="mt-4 flex-1 text-[1.0625rem] leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</blockquote>
      <figcaption className="mt-6 border-t border-line pt-4">
        <p className="font-semibold text-ink">{t.name}</p>
        <p className="text-body-sm text-ink-secondary">{t.title}, {t.company}</p>
        <span className="mt-2 inline-block rounded-full border border-line bg-surface px-2.5 py-1 text-[0.8125rem] text-ink-muted">{t.industry}</span>
      </figcaption>
    </figure>
  );
}
