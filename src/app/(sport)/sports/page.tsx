import { SportHero } from "@/components/sport/SportHero";
import { SportClients } from "@/components/sport/SportClients";
import { SportServe } from "@/components/sport/SportServe";
import { SportSports } from "@/components/sport/SportSports";
import { SportGameDay } from "@/components/sport/SportGameDay";
import { SportWhy } from "@/components/sport/SportWhy";
import { SportCoverage } from "@/components/sport/SportCoverage";
import { SportBecome } from "@/components/sport/SportBecome";
import { SportFAQ } from "@/components/sport/SportFAQ";
import { SportStructuredData } from "@/components/sport/SportStructuredData";
import { sportFaqs } from "@/data/sport-pages";

export default function SportHomePage() {
  return (
    <>
      <SportStructuredData />
      <SportHero />
      <SportClients />
      <SportServe />
      <SportSports />
      <SportGameDay />
      <SportWhy />
      <SportCoverage />
      <SportFAQ
        items={sportFaqs}
        eyebrow="Questions leagues ask"
        title={<><span className="sp-outline">Straight</span><br /><span className="sp-grad-court">answers.</span></>}
        intro="How V-Line Sport staffs officials for parks and recreation departments, school districts, tournaments and private leagues."
      />
      <SportBecome />
    </>
  );
}
