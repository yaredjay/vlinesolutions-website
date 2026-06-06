import type { LucideIcon } from "lucide-react";
import {
  PhoneMissed, Clock, Users, MessageCircle, Compass, Wrench,
  Phone, CalendarCheck, DollarSign,
} from "lucide-react";

/* STATS TICKER — industry facts (illustrative; cite sources before launch) */
export const tickerStats = [
  "62% of business calls go unanswered",
  "80% of callers won't leave voicemail",
  "$252K lost annually per contractor",
  "AI answers in 0.4 seconds",
  "97% cheaper than a human receptionist",
  "Businesses using AI capture 3x more leads",
  "Average client saves 10–40 hours/week",
];

/* WHAT'S HOLDING YOUR BUSINESS BACK */
export type PainCard = {
  icon: LucideIcon;
  title: string;
  expanded: string;
  cta: string;
  href: string;
};

export const painCards: PainCard[] = [
  {
    icon: PhoneMissed,
    title: "I'm Missing Calls and Losing Leads",
    expanded:
      "Our AI answers every call, texts back missed calls instantly, and captures every lead 24/7. Most clients see results in the first 48 hours.",
    cta: "Fix This",
    href: "/solutions",
  },
  {
    icon: Clock,
    title: "My Team Wastes Hours on Repetitive Tasks",
    expanded:
      "We automate data entry, scheduling, invoicing, follow-ups, and reporting. Your team gets their time back for growth-driving work.",
    cta: "Fix This",
    href: "/custom",
  },
  {
    icon: Users,
    title: "I Can't Scale Without Hiring More People",
    expanded:
      "AI handles the work of 3–5 employees without salary, benefits, or management overhead. Scale output without scaling headcount.",
    cta: "Fix This",
    href: "/solutions",
  },
  {
    icon: MessageCircle,
    title: "My Customer Follow-Up Is Inconsistent",
    expanded:
      "Automated SMS, email, and voice follow-ups that go out on time, every time. Reactivate dead leads and reduce no-shows by 40%.",
    cta: "Fix This",
    href: "/solutions",
  },
  {
    icon: Compass,
    title: "I Need to Modernize But Don't Know Where to Start",
    expanded:
      "We start with a free AI assessment of your operations. We identify the 3 highest-impact automations and build them first. No tech knowledge required.",
    cta: "Get Free Assessment",
    href: "/assessment",
  },
  {
    icon: Wrench,
    title: "I Have a Specific Problem No One Has Solved",
    expanded:
      "That's our specialty. Custom AI built for YOUR exact workflow. Describe the problem — we architect the solution. If it doesn't work, you don't pay.",
    cta: "Tell Us About It",
    href: "/custom",
  },
];

/* SAVE TIME / MAKE MONEY / GROW */
export const outcomes = [
  {
    label: "Save Time",
    value: 10,
    suffix: "x",
    body: "Our clients save 10–40 hours per week by automating tasks that eat their day. That's a full employee's workweek — reclaimed.",
  },
  {
    label: "Make Money",
    value: 23,
    prefix: "$",
    suffix: "K",
    body: "Average additional monthly revenue captured by businesses using V-Line AI in their first 90 days.",
  },
  {
    label: "Grow Smarter",
    value: 3,
    suffix: "x",
    body: "Scale output 3x without adding headcount. AI handles the volume. Your team handles strategy.",
  },
];

/* HOW IT WORKS */
export const steps = [
  {
    icon: Phone,
    title: "Customer Calls",
    body: "Day or night, your AI receptionist answers instantly. No hold music. No voicemail. No missed opportunities.",
  },
  {
    icon: CalendarCheck,
    title: "AI Qualifies & Books",
    body: "Understands what they need, answers questions, and books the appointment directly on your calendar.",
  },
  {
    icon: DollarSign,
    title: "You Get Paid",
    body: "Show up to a pre-qualified, pre-booked appointment. Close the deal. Collect the check.",
  },
];

/* RESULTS — illustrative industry case studies. Replace with real, attributable client results before launch. */
export const resultCards = [
  { label: "HVAC Company", body: "CPL dropped from $93 → $37. Sales 9 → 26/month. 45 days." },
  { label: "Roofing Contractor", body: "$150K revenue. 18 jobs closed. 60 days." },
  { label: "Law Firm", body: "$100K recovered in 60 days from missed-call recovery." },
  { label: "Dental Office", body: "95% fewer missed calls. 40% fewer no-shows." },
];

/* BUILD BUSINESS VALUE */
export const businessValue = [
  "Documented AI workflows signal operational maturity to investors and acquirers.",
  "Automated revenue capture means your business grows without your daily presence.",
  "Every AI system we deploy becomes a permanent asset on your balance sheet — not an expense.",
];

/* GUARANTEE */
export const guarantees = [
  { icon: "🛡️", title: "30-Day Money-Back", body: "Don't see results in 30 days? Full refund. Setup, monthly, everything. No questions." },
  { icon: "📋", title: "No Contracts", body: "Month-to-month. No annual commitments. No cancellation fees." },
  { icon: "📊", title: "Results Defined Upfront", body: "Before we build, we agree on success metrics. Then we measure together." },
];
