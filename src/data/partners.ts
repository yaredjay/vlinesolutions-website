/* ============================================================
   TECH PARTNERS / "Built on" logos.
   Drop real logo files in /public/logos/partners/ and set `logo`
   to the path (e.g. "/logos/partners/anthropic.svg"). Until then,
   the component renders a styled wordmark tile.
   ============================================================ */

export type Partner = { name: string; logo?: string };

export const builtOn: Partner[] = [
  { name: "Anthropic" }, // Claude
  { name: "OpenAI" },    // ChatGPT
  { name: "Google Cloud" },
  { name: "AWS" },
  { name: "Twilio" },
  { name: "Stripe" },
];

export const integrations: Partner[] = [
  { name: "HubSpot" },
  { name: "Salesforce" },
  { name: "QuickBooks" },
  { name: "Jobber" },
  { name: "ServiceTitan" },
  { name: "Calendly" },
  { name: "Google Calendar" },
  { name: "Monday.com" },
];
