/* ============================================================
   TECH PARTNERS / INTEGRATIONS
   Drop real logo files in the folders below and they auto-appear
   (svg preferred, png/webp also detected). Until then a styled
   wordmark tile renders. Filenames must match `slug`.

     AI partners      → /public/logos/partners/<slug>.svg
     Integrations     → /public/logos/integrations/<slug>.svg
   ============================================================ */

export type Partner = { name: string; slug: string; logo?: string };

export const builtOn: Partner[] = [
  { name: "Anthropic", slug: "anthropic" },     // Claude
  { name: "OpenAI", slug: "openai" },           // ChatGPT
  { name: "Google Cloud", slug: "google-cloud" },
  { name: "AWS", slug: "aws" },
  { name: "Twilio", slug: "twilio" },
  { name: "Stripe", slug: "stripe" },
];

export const integrations: Partner[] = [
  { name: "HubSpot", slug: "hubspot" },
  { name: "Salesforce", slug: "salesforce" },
  { name: "QuickBooks", slug: "quickbooks" },
  { name: "Jobber", slug: "jobber" },
  { name: "ServiceTitan", slug: "servicetitan" },
  { name: "Calendly", slug: "calendly" },
  { name: "Google Calendar", slug: "google-calendar" },
  { name: "Monday.com", slug: "monday" },
];
