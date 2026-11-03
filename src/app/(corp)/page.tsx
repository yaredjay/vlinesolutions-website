import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { PathwayCards } from "@/components/sections/PathwayCards";
import { LogosMarquee } from "@/components/sections/LogosMarquee";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <PathwayCards />
      <LogosMarquee />
      <WhoWeAre />
      <CTA
        eyebrow="Engage"
        title="Let's build something that lasts."
        body="Tell us about your program and we'll help you find the right path."
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "Government credentials", href: "/government" }}
      />
    </>
  );
}
