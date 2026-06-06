import { Hero } from "@/components/home/Hero";
import { TrustedClients } from "@/components/home/TrustedClients";
import { PoweredBy } from "@/components/home/PoweredBy";
import { Integrations } from "@/components/home/Integrations";
import { Showcase, type Shot } from "@/components/home/Showcase";
import {
  StatsTicker, ThreeWays, Outcomes, HowItWorks, Results,
  BusinessValue, CustomPreview,
} from "@/components/home/StaticSections";
import { PainGrid } from "@/components/home/PainGrid";
import { RoiCalculator } from "@/components/home/RoiCalculator";
import { CostComparison } from "@/components/shared/CostComparison";
import { Testimonials } from "@/components/shared/Testimonials";
import { IndustryStrip } from "@/components/shared/IndustryStrip";
import { Guarantee } from "@/components/shared/Guarantee";
import { CTASection } from "@/components/shared/CTASection";
import { builtOn, integrations } from "@/data/partners";
import { resolveLogo, resolveAsset } from "@/lib/asset";

export default function HomePage() {
  const partners = builtOn.map((p) => ({ ...p, logo: resolveLogo("partners", p.slug) }));
  const integ = integrations.map((p) => ({ ...p, logo: resolveLogo("integrations", p.slug) }));

  const shots: Shot[] = [
    { title: "AI receptionist dashboard", sub: "Every call, lead, and booking in one clean view.", kind: "dashboard", img: resolveAsset("/images/dashboard.png", "/images/dashboard.webp", "/images/dashboard.jpg") },
    { title: "Chat that books appointments", sub: "Qualifies and schedules 24/7 — in your brand voice.", kind: "chat", img: resolveAsset("/images/chat.png", "/images/chat.webp", "/images/chat.jpg") },
    { title: "Calls, leads & revenue analytics", sub: "See exactly what your AI captures, in real time.", kind: "analytics", img: resolveAsset("/images/analytics.png", "/images/analytics.webp", "/images/analytics.jpg") },
  ];

  return (
    <>
      <Hero />
      <TrustedClients />
      <StatsTicker />
      <PainGrid />
      <div className="band-tint"><ThreeWays /></div>
      <div className="band-white"><Showcase shots={shots} /></div>
      <div className="band-tint"><RoiCalculator /></div>
      <Outcomes />
      <div className="band-tint"><HowItWorks /></div>
      <div className="band-white"><Results /></div>
      <div className="band-tint"><CostComparison /></div>
      <div className="band-white"><Testimonials /></div>
      <div className="band-tint"><IndustryStrip /></div>
      <div className="band-white"><Integrations items={integ} /></div>
      <div className="band-tint"><PoweredBy partners={partners} /></div>
      <CustomPreview />
      <div className="band-tint"><BusinessValue /></div>
      <div className="band-white"><Guarantee /></div>
      <CTASection />
    </>
  );
}
