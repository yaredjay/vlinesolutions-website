import { Hero } from "@/components/sections/Hero";
import { PathwayCards } from "@/components/sections/PathwayCards";
import { LogosMarquee } from "@/components/sections/LogosMarquee";
import { SystemsBuilt } from "@/components/sections/SystemsBuilt";
import { Tomorrow } from "@/components/sections/Tomorrow";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { CTA } from "@/components/sections/CTA";
import { LiquidDivider } from "@/components/ui/LiquidDivider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PathwayCards />
      <LogosMarquee />
      <LiquidDivider className="mt-6" />
      <SystemsBuilt />
      <LiquidDivider />
      <Tomorrow />
      <WhoWeAre />
      <CTA
        title="Let's build something that lasts."
        body="Tell us about your program. We come back with a plan and a team."
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "What we build", href: "/technology" }}
      />
    </>
  );
}
