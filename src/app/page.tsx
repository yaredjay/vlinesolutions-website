import { Hero } from "@/components/home/Hero";
import { TrustedClients } from "@/components/home/TrustedClients";
import { PoweredBy } from "@/components/home/PoweredBy";
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

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedClients />
      <StatsTicker />
      <PainGrid />
      <div className="band-tint"><ThreeWays /></div>
      <div className="band-white"><RoiCalculator /></div>
      <Outcomes />
      <div className="band-tint"><HowItWorks /></div>
      <div className="band-white"><Results /></div>
      <div className="band-tint"><CostComparison /></div>
      <div className="band-white"><Testimonials /></div>
      <div className="band-tint"><IndustryStrip /></div>
      <div className="band-white"><PoweredBy /></div>
      <CustomPreview />
      <div className="band-tint"><BusinessValue /></div>
      <div className="band-white"><Guarantee /></div>
      <CTASection />
    </>
  );
}
