import { SportHero } from "@/components/sport/SportHero";
import { SportClients } from "@/components/sport/SportClients";
import { SportServe } from "@/components/sport/SportServe";
import { SportSports } from "@/components/sport/SportSports";
import { SportGameDay } from "@/components/sport/SportGameDay";
import { SportWhy } from "@/components/sport/SportWhy";
import { SportCoverage } from "@/components/sport/SportCoverage";
import { SportBecome } from "@/components/sport/SportBecome";

export default function SportHomePage() {
  return (
    <>
      <SportHero />
      <SportClients />
      <SportServe />
      <SportSports />
      <SportGameDay />
      <SportWhy />
      <SportCoverage />
      <SportBecome />
    </>
  );
}
