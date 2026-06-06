import type { LucideIcon } from "lucide-react";
import {
  Wrench, HardHat, Stethoscope, Scale, Home, Scissors,
  Car, Dumbbell, UtensilsCrossed, Zap,
} from "lucide-react";

export type Industry = {
  slug: string;
  icon: LucideIcon;
  name: string;
  hook: string;
  headline: string;
  sub: string;
  pains: { stat: string; label: string }[];
  solutions: string[];
  testimonialIds: number[]; // references testimonials.ts (replace with real)
};

export const industries: Industry[] = [
  {
    slug: "hvac-plumbing",
    icon: Wrench,
    name: "HVAC & Plumbing",
    hook: "Never miss a $4,200 emergency call",
    headline: "Never Miss a $4,200 Emergency Call Again",
    sub: "When a pipe bursts at 2 AM, the company that answers wins the job. Make sure that's you.",
    pains: [
      { stat: "62%", label: "of after-hours calls go unanswered" },
      { stat: "$4,200", label: "average emergency job value lost to voicemail" },
      { stat: "8 of 10", label: "callers won't leave a message — they call the next shop" },
    ],
    solutions: [
      "AI answers every call instantly, day or night — qualifies the emergency and dispatches your on-call tech.",
      "Missed-call text-back recovers callers in seconds before they dial a competitor.",
      "Books non-urgent jobs straight to your calendar so your phone stops running your day.",
    ],
    testimonialIds: [1, 3],
  },
  {
    slug: "roofing-contractors",
    icon: HardHat,
    name: "Roofing & Contractors",
    hook: "From missed calls to $150K in closed jobs",
    headline: "$150K in 60 Days",
    sub: "Storm season floods your phones. AI captures every lead while you're on the roof.",
    pains: [
      { stat: "70%", label: "of leads call multiple contractors — first responder wins" },
      { stat: "$150K", label: "in jobs left on the table from slow follow-up" },
      { stat: "18+", label: "qualified jobs missed per season to voicemail" },
    ],
    solutions: [
      "AI captures and qualifies every storm-season lead 24/7 — no lead left on voicemail.",
      "Instant follow-up texts and reminders keep estimates moving to signed contracts.",
      "Database reactivation re-engages old quotes into new revenue.",
    ],
    testimonialIds: [9, 1],
  },
  {
    slug: "dental-medical",
    icon: Stethoscope,
    name: "Dental & Medical",
    hook: "95% fewer missed calls. 40% fewer no-shows.",
    headline: "95% Fewer Missed Calls. 40% Fewer No-Shows.",
    sub: "Your front desk is drowning. AI handles scheduling, reminders, and insurance questions so staff can focus on patients.",
    pains: [
      { stat: "35%", label: "of patient calls go to voicemail during busy hours" },
      { stat: "40%", label: "no-show rate without automated reminders" },
      { stat: "$200+", label: "lost per missed appointment slot" },
    ],
    solutions: [
      "AI answers, schedules, and confirms appointments — and handles routine insurance questions.",
      "Automated reminders cut no-shows by up to 40%.",
      "Anything clinical routes instantly to your team with full context.",
    ],
    testimonialIds: [2, 10],
  },
  {
    slug: "legal",
    icon: Scale,
    name: "Legal",
    hook: "$100K recovered in 60 days",
    headline: "$100K Recovered in 60 Days",
    sub: "Every missed intake call is a case walking to another firm. AI screens and books 24/7.",
    pains: [
      { stat: "42%", label: "of intake calls happen after hours" },
      { stat: "$100K", label: "in cases recoverable from missed-call capture" },
      { stat: "$2,800/mo", label: "spent on answering services that still miss calls" },
    ],
    solutions: [
      "24/7 AI intake screening qualifies callers and books consultations directly.",
      "Replaces costly answering services at a fraction of the price.",
      "Conflict-sensitive scripts route qualified matters to your attorneys instantly.",
    ],
    testimonialIds: [4, 7],
  },
  {
    slug: "real-estate",
    icon: Home,
    name: "Real Estate",
    hook: "AI answers inquiries while you're at showings",
    headline: "AI Answers Inquiries While You're at Showings",
    sub: "You can't pick up while you're with a client. Your AI can — and it qualifies the buyer.",
    pains: [
      { stat: "50%", label: "of buyer inquiries get no immediate response" },
      { stat: "5 min", label: "is the window before a lead goes cold" },
      { stat: "3x", label: "more conversions when leads are answered instantly" },
    ],
    solutions: [
      "AI answers listing inquiries instantly and qualifies buyers while you show.",
      "Books showings and callbacks straight to your calendar.",
      "Speed-to-lead callbacks reach new leads within 90 seconds.",
    ],
    testimonialIds: [7],
  },
  {
    slug: "salons-spas",
    icon: Scissors,
    name: "Salons & Spas",
    hook: "Fill every chair. Book every slot. 24/7.",
    headline: "Fill Every Chair. 24/7.",
    sub: "Your stylists can't answer the phone mid-cut. AI books while they work.",
    pains: [
      { stat: "60%", label: "of calls missed during peak service hours" },
      { stat: "20%", label: "of open slots go unfilled from missed bookings" },
      { stat: "$0", label: "earned from a chair that sits empty" },
    ],
    solutions: [
      "AI books, reschedules, and confirms appointments around the clock.",
      "Automated reminders reduce no-shows and fill cancellations.",
      "Waitlist automation fills last-minute openings instantly.",
    ],
    testimonialIds: [6],
  },
  {
    slug: "auto-repair",
    icon: Car,
    name: "Auto Repair",
    hook: "Stop losing customers to the shop that picks up",
    headline: "Stop Losing Customers to the Shop That Picks Up",
    sub: "When a driver needs help now, the shop that answers gets the car. Be that shop.",
    pains: [
      { stat: "55%", label: "of repair calls go unanswered during service hours" },
      { stat: "35%", label: "no-show rate on unconfirmed appointments" },
      { stat: "1st", label: "shop to answer usually wins the job" },
    ],
    solutions: [
      "AI answers every call and books service appointments instantly.",
      "Missed-call text-back recovers customers before they call the next shop.",
      "Confirmations and reminders cut no-shows dramatically.",
    ],
    testimonialIds: [5],
  },
  {
    slug: "fitness",
    icon: Dumbbell,
    name: "Fitness & Wellness",
    hook: "232% more trial signups",
    headline: "232% More Trial Signups",
    sub: "New Year rush brings 200+ calls. AI handles every one — and converts them to trials.",
    pains: [
      { stat: "200+", label: "calls during peak signup season" },
      { stat: "70%", label: "of inquiries lost when staff are on the floor" },
      { stat: "232%", label: "more trial signups with instant response" },
    ],
    solutions: [
      "AI answers membership inquiries and books trials 24/7.",
      "Automated follow-up converts trials into memberships.",
      "Handles class scheduling and FAQs without front-desk overload.",
    ],
    testimonialIds: [8],
  },
  {
    slug: "restaurants",
    icon: UtensilsCrossed,
    name: "Restaurants",
    hook: "Reservations booked. Catering quoted. While you cook.",
    headline: "Reservations Booked. Catering Quoted. While You Cook.",
    sub: "You can't answer the phone during dinner rush. AI takes reservations and quotes catering for you.",
    pains: [
      { stat: "Rush", label: "hours = the calls you can never answer" },
      { stat: "$8K/mo", label: "in catering inquiries lost to voicemail" },
      { stat: "100%", label: "of reservations should be captured — not missed" },
    ],
    solutions: [
      "AI books reservations and answers menu questions 24/7.",
      "Generates catering quotes from your menu and guest count, then books tastings.",
      "Routes large-party and event inquiries straight to management.",
    ],
    testimonialIds: [12],
  },
  {
    slug: "electrical",
    icon: Zap,
    name: "Electrical",
    hook: "Emergency dispatch at 2 AM. Automatically.",
    headline: "Emergency Dispatch at 2 AM. Automatically.",
    sub: "Power outages don't wait for business hours. Your AI qualifies the emergency and dispatches your on-call tech.",
    pains: [
      { stat: "2 AM", label: "is when emergency calls actually come in" },
      { stat: "60%", label: "of after-hours calls go to voicemail" },
      { stat: "$$$", label: "emergency premiums lost to slow response" },
    ],
    solutions: [
      "AI answers instantly, qualifies the emergency, and dispatches your on-call tech.",
      "Books standard electrical work directly to your schedule.",
      "Texts you full job context so nothing gets lost.",
    ],
    testimonialIds: [11],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
