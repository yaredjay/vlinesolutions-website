import { Hero } from "@/components/sections/Hero";
import { PathwayCards } from "@/components/sections/PathwayCards";
import { LogosMarquee } from "@/components/sections/LogosMarquee";
import { Stats } from "@/components/sections/Stats";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PathwayCards />
      <LogosMarquee />
      <Stats />
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
