import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { HowWeBuildTiles } from "@/components/sections/HowWeBuildTiles";
import { TextureLight } from "@/components/ui/TextureLight";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "An institutional technology firm engineered to build, secure, and deploy the digital infrastructure a nation runs on. Headquartered in Silicon Valley.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | V-Line Solutions",
    description:
      "An institutional technology firm engineered to build, secure, and deploy the digital infrastructure a nation runs on.",
    url: "https://vlinesolutions.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={
          <>
            <span className="gradient-text">A Technology</span>{" "}
            <span className="text-fg-primary">Partner</span>
          </>
        }
        description="We are an institutional technology firm engineered to build, secure, and deploy the digital infrastructure a nation runs on. We engineer the core digital public goods, including sovereign identity registries, national payment rails, automated treasuries, and secure data clouds, that form the structural foundation of modern statehood."
      >
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-fg-secondary md:text-lg">
          Headquartered in Silicon Valley, we combine the engineering velocity of a
          world-class product team with the absolute compliance rigor required by
          international development standards.
        </p>
      </PageHero>

      <HowWeBuildTiles />

      {/* Mission */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <TextureLight src="/textures/mesh-01.jpg" side="right" />
        <div className="container-edge relative">
          <Reveal>
            <p className="max-w-3xl font-display text-balance text-3xl font-medium leading-[1.15] tracking-tight md:text-5xl md:leading-[1.1]">
              <span className="text-fg-secondary">Our mission: </span>
              <span className="gradient-text">
                to execute flawless digital modernization that anchors national stability
                and earns absolute public trust.
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Let's get to work."
        body="Tell us about the program, the agency, or the operation. We'll respond fast, and direct."
        primary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
