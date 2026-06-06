# Image / Logo Drop-In Guide

Drop files into the folders below and they appear automatically on the next
build/deploy — **no code changes needed** (the site detects them server-side).
SVG is preferred; PNG and WEBP also work. Use the **exact filenames** listed.

---

## 1. AI partner logos → `public/logos/partners/`
Shown in the "Built on enterprise-grade AI" band. Transparent SVG, ~any size.

| Brand | Filename |
|---|---|
| Anthropic (Claude) | `anthropic.svg` |
| OpenAI (ChatGPT) | `openai.svg` |
| Google Cloud | `google-cloud.svg` |
| AWS | `aws.svg` |
| Twilio | `twilio.svg` |
| Stripe | `stripe.svg` |

> Get official, license-cleared logos from each brand's press/brand page.

## 2. Integration logos → `public/logos/integrations/`
Shown in the "Works With the Tools You Already Use" section.

| Tool | Filename |
|---|---|
| HubSpot | `hubspot.svg` |
| Salesforce | `salesforce.svg` |
| QuickBooks | `quickbooks.svg` |
| Jobber | `jobber.svg` |
| ServiceTitan | `servicetitan.svg` |
| Calendly | `calendly.svg` |
| Google Calendar | `google-calendar.svg` |
| Monday.com | `monday.svg` |

## 3. Product mockups → `public/images/`
Shown in the "See It In Action" section (inside browser frames). Until added,
clean skeleton UIs render in their place. **16:10 ratio**, ~1600×1000px, PNG/WEBP.

| Screenshot | Filename |
|---|---|
| Dashboard | `dashboard.png` |
| Chat UI | `chat.png` |
| Analytics | `analytics.png` |

## 4. Abstract 3D / AI visuals → `public/images/`
Optional hero/section accents (no people). Transparent PNG/WEBP recommended.

| Visual | Filename |
|---|---|
| Hero AI render/orb | `ai-visual.png` |

---

### How to add real client logos to the homepage "Trusted by" strip
Those already use the files in `public/logos/` (`dod.png`, `us-air-force.png`,
etc.). Add more by dropping a logo there and adding an entry in
`src/data/clients.ts`.
