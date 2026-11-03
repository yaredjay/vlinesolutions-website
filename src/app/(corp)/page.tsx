import { Hero } from "@/components/sections/Hero";
import { PathwayCards } from "@/components/sections/PathwayCards";
import { ProofBand } from "@/components/sections/ProofBand";
import { PlatformsPinned } from "@/components/sections/PlatformsPinned";
import { LogosMarquee } from "@/components/sections/LogosMarquee";
import { PastPerformance } from "@/components/sections/PastPerformance";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { CTA } from "@/components/sections/CTA";

/**
 * Homepage order follows the anatomy of credible systems integrators
 * (thesis → proof → platforms → clients → past performance → method →
 * who we are → call to action).
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <PathwayCards />
      <ProofBand />
      <PlatformsPinned />
      <LogosMarquee />
      <PastPerformance />
      <HowWeWork />
      <WhoWeAre />
      <CTA
        eyebrow="Engage"
        title="Bring us your hardest project."
        body="Government scale, startup pace. Tell us the constraint, the contract, the deadline."
        primary={{ label: "Start a conversation", href: "/contact" }}
        secondary={{ label: "See government credentials", href: "/government" }}
      />
    </>
  );
}
