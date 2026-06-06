import { Hero } from "@/components/home/Hero";
import {
  StatsTicker, ThreeWays, Outcomes, HowItWorks, Results,
  BusinessValue, CustomPreview, ClientLogos,
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
      <StatsTicker />
      <PainGrid />
      <ThreeWays />
      <RoiCalculator />
      <Outcomes />
      <HowItWorks />
      <Results />
      <CostComparison />
      <Testimonials />
      <IndustryStrip />
      <CustomPreview />
      <BusinessValue />
      <ClientLogos />
      <Guarantee />
      <CTASection />
    </>
  );
}
