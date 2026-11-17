import { headers } from "next/headers";
import { site } from "@/data/site";
import { coverageStates, sportBrand, sports, why } from "@/data/sport";
import { sportFaqs, sportPages } from "@/data/sport-pages";
import { isSportHost, SPORT_ONLY, SPORT_URL } from "@/lib/sport";

export const dynamic = "force-dynamic";

/**
 * llms.txt: a plain-language summary for AI assistants and answer engines,
 * following the llmstxt.org convention. Served per host; the sport domain
 * describes V-Line Sport, the corporate domain points to its own pages.
 */
export function GET() {
  const host = headers().get("host");
  const onSportHost = SPORT_ONLY || isSportHost(host);

  const body = onSportHost
    ? `# ${sportBrand.name}

> ${sportBrand.description}

${sportBrand.name} (formerly VLS Sport) is the sports officiating division of ${site.legalName}, a SAM.gov-registered small business. It supplies referees, umpires, scorekeepers, league administrators and game-day crews to parks and recreation departments, municipalities, school districts, tournaments and private leagues. Officials are available in all 50 states; crews are on the ground today in ${coverageStates.map((s) => s.replace(" · HQ", "")).join(", ")}.

## What we staff
${sports.map((s) => `- ${s} officials: ${SPORT_URL}/officials/${sportPages.find((p) => p.name === s)?.slug ?? ""}`).join("\n")}

## Why leagues choose ${sportBrand.name}
${why.map((w) => `- ${w.title}: ${w.body}`).join("\n")}

## How it works
1. Tell us the sport, level and schedule
2. We assign officials to your rulebook
3. Game-day coverage with backups
4. Scores, stats and post-season reporting

## Key pages
- Home: ${SPORT_URL}
- Request officials (quote form): ${SPORT_URL}/request
- Become an official: ${SPORT_URL}/request#become
- Sitemap: ${SPORT_URL}/sitemap.xml

## Frequently asked
${sportFaqs.map((f) => `- Q: ${f.q}\n  A: ${f.a}`).join("\n")}

## Contact
- Phone: ${site.phone}
- Email: ${site.email}
- Parent company: ${site.legalName}, https://vlinesolutions.com
`
    : `# ${site.name}

> ${site.description}

${site.bio}

## Key pages
- Home: https://vlinesolutions.com
- Technology: https://vlinesolutions.com/technology
- Government: https://vlinesolutions.com/government
- About: https://vlinesolutions.com/about
- Contact: https://vlinesolutions.com/contact

## Contact
- Phone: ${site.phone}
- Email: ${site.email}
`;

  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
