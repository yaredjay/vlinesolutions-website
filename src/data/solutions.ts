import type { LucideIcon } from "lucide-react";
import {
  Rocket, Settings, TrendingUp, Mic, GitBranch, MessageSquare,
  Database, Send, FileText,
} from "lucide-react";

/* THREE WAYS WE GROW YOUR BUSINESS — homepage + solutions pathways */
export const pathways = [
  {
    icon: Rocket,
    title: "Ready-to-Deploy AI",
    body: "Production-tested AI systems deployed in 48 hours. Receptionist, chatbot, voice agent, missed-call recovery, appointment booking.",
    tag: "Starting at $297/mo",
    cta: "See Products",
    href: "/solutions#pricing",
  },
  {
    icon: Settings,
    title: "Custom AI Solutions",
    body: "Tell us your biggest operational headache. We listen, architect, and build custom AI tailored to YOUR business. Any industry. Any workflow.",
    tag: "Custom quote in 24 hours",
    cta: "Tell Us What You Need",
    href: "/custom",
  },
  {
    icon: TrendingUp,
    title: "AI Growth Partnership",
    body: "Ongoing optimization, new automations, performance reporting, strategic consulting. We become your AI department — without the six-figure salary.",
    tag: "From $1,497/mo",
    cta: "Learn More",
    href: "/solutions#scale",
  },
];

/* COST COMPARISON */
export const costComparison = [
  { current: "Answering Service", currentCost: "$800–$3,000/mo", vline: "from $297/mo", save: "SAVE $500–$2,700/mo", kind: "save" as const },
  { current: "Full-Time Receptionist", currentCost: "$3,500/mo + benefits", vline: "from $297/mo", save: "SAVE $3,200+/mo", kind: "save" as const },
  { current: "Doing Nothing (missed calls)", currentCost: "$5K–$25K/mo lost", vline: "from $297/mo", save: "CAPTURE $4,700–$24,700/mo", kind: "capture" as const },
];

export type Plan = {
  id: string;
  name: string;
  price: string;
  period?: string;
  setup?: string;
  blurb: string;
  badge?: string;
  popular?: boolean;
  features: string[];
  anchor?: string;
  nudge?: string;
  cta: string;
  href: string;
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$297",
    period: "/month",
    setup: "+ $997 setup",
    blurb: "Perfect for businesses getting started with AI",
    features: [
      "AI website chatbot (24/7)",
      "Missed call text-back automation",
      "Lead capture dashboard",
      "Monthly performance report",
      "Email notifications for new leads",
      "5 FAQ responses configured",
      "Email support",
      "🛡️ 30-day money-back guarantee",
    ],
    anchor: "Human receptionist: $3,500/mo → V-Line: $297/mo",
    nudge: "⚡ Most businesses upgrade to Growth within 30 days",
    cta: "Get Started",
    href: "/contact?plan=starter",
  },
  {
    id: "growth",
    name: "Growth",
    price: "$697",
    period: "/month",
    setup: "+ $2,497 setup",
    blurb: "For businesses ready to never miss another dollar",
    badge: "🏆 Most Popular",
    popular: true,
    features: [
      "Everything in Starter",
      "AI appointment booking (Google Calendar sync)",
      "SMS follow-up sequences (3-message drip)",
      "AI phone receptionist (answers live calls 24/7)",
      "CRM integration (HubSpot, Salesforce, Jobber)",
      "Unlimited FAQ responses",
      "Bi-weekly optimization reports",
      "English + Spanish support",
      "Priority email + chat support",
      "🛡️ 30-day money-back guarantee",
    ],
    cta: "Get Started",
    href: "/contact?plan=growth",
  },
  {
    id: "scale",
    name: "Scale",
    price: "$1,497",
    period: "/month",
    setup: "+ $4,997 setup",
    blurb: "AI running your entire front office",
    badge: "🚀 Best value for 50+ calls/day",
    features: [
      "Everything in Growth",
      "AI voice agent (inbound + outbound)",
      "Database reactivation campaigns",
      "Advanced CRM integration",
      "Multi-location support",
      "Speed-to-lead (90-second callback)",
      "Outbound reminders (reduce no-shows 40%)",
      "Dedicated account manager",
      "Weekly strategy calls",
      "Additional languages available",
      "🛡️ 30-day money-back guarantee",
    ],
    anchor: "Replaces $8,500+/mo in staff costs",
    cta: "Get Started",
    href: "/contact?plan=scale",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    blurb: "Multi-location and organizations",
    features: [
      "Everything in Scale",
      "Custom workflow automation",
      "Custom API integrations",
      "Multi-agent AI systems",
      "White-label options",
      "Custom SLA guarantees",
      "Dedicated engineering team",
      "🛡️ Results guarantee",
    ],
    cta: "Contact Us",
    href: "/contact?plan=enterprise",
  },
];

export const upsells = [
  { id: "priority", label: "Priority Setup", desc: "Live in 24 hours instead of 48", price: "+$297" },
  { id: "language", label: "Additional Language Pack", desc: "Mandarin, Vietnamese, Korean", price: "+$197/mo" },
  { id: "reviews", label: "AI Review Request System", desc: "Automated Google review requests", price: "+$97/mo" },
  { id: "intel", label: "Competitor Call Intelligence", desc: "Monthly mystery-shop report", price: "+$197/mo" },
];

export type Service = { icon: LucideIcon; title: string; body: string };

export const customServices: Service[] = [
  { icon: Mic, title: "Custom AI Voice Agents", body: "Trained on your scripts, services, pricing. Inbound and outbound. Natural conversation." },
  { icon: GitBranch, title: "Workflow Automation", body: "CRM to calendar to invoicing to follow-up. Zero manual steps." },
  { icon: MessageSquare, title: "AI Chatbots & Assistants", body: "Website, SMS, email, social. Qualifies leads and converts 24/7." },
  { icon: Database, title: "CRM & Data Integration", body: "Salesforce, HubSpot, QuickBooks, Monday.com, Jobber, ServiceTitan." },
  { icon: Send, title: "AI Outbound Campaigns", body: "Reactivate leads. Send reminders. Request reviews. All automated." },
  { icon: Settings, title: "Industry-Specific AI", body: "Healthcare intake. Legal screening. Maintenance dispatch. Restaurant ordering." },
];

export const whatWeBuild: Service[] = [
  { icon: Mic, title: "AI Voice Agents", body: "Answer calls, qualify leads, book appointments, dispatch techs. 24/7." },
  { icon: MessageSquare, title: "AI Chatbots & Assistants", body: "Website, SMS, email, social. Captures leads, closes sales." },
  { icon: GitBranch, title: "Workflow Automation", body: "Connect your tools. Automate everything. Zero manual steps." },
  { icon: FileText, title: "Document Intelligence", body: "Extract data from PDFs, invoices, forms, contracts in seconds." },
  { icon: Database, title: "CRM Automation", body: "Leads auto-scored, contacts auto-updated, follow-ups auto-sent." },
  { icon: Send, title: "AI Outbound", body: "Reactivate leads, send reminders, request reviews. Personalized. Automated." },
  { icon: Settings, title: "Custom Integrations", body: "QuickBooks, Salesforce, Monday.com, ServiceTitan, Shopify, 200+ more." },
  { icon: Rocket, title: "Industry-Specific AI", body: "Healthcare. Legal. Property management. Restaurant. Whatever you need." },
];

export const customExamples = [
  "Construction company needed AI to read blueprints and generate estimates → tripled bid volume.",
  "Property manager with 400 units needed automated maintenance dispatch → 3 coordinators reassigned to growth.",
  "Law firm needed 24/7 AI intake screening → recovered revenue in 60 days.",
  "Restaurant group needed AI catering quotes → new monthly revenue stream.",
];
