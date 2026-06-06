/* ------------------------------------------------------------------
   V-LINE AI CONSULTANT — conversation engine (scripted state machine)
   The closer. Guides every visitor to: a captured lead, a page visit,
   or a started assessment. Honest framing, real guarantee, real math.
   ------------------------------------------------------------------ */

export type Ctx = {
  industry?: string;
  callsPerDay?: number;
  missAnswer?: string;
  freeText?: string;
};

export type Action =
  | { type: "node"; node: string }
  | { type: "link"; href: string; label: string }
  | { type: "lead" }
  | { type: "close" };

export type Option = { label: string; action: Action };

export type NodeResult = {
  messages: string[];
  options?: Option[];
  input?: { kind: "text" | "number"; placeholder: string; next: (value: string, ctx: Ctx) => string };
};

const money = (n: number) => "$" + Math.round(n).toLocaleString();

/* miss severity → fraction of missed calls that are truly lost revenue */
const lostFraction: Record<string, number> = {
  voicemail: 0.5,
  lose: 0.75,
  callback: 0.35,
  service: 0.2,
};

function lossMath(ctx: Ctx) {
  const calls = ctx.callsPerDay ?? 20;
  const missRate = 0.4; // conservative industry assumption
  const missedPerMonth = Math.round(calls * 30 * missRate);
  const frac = lostFraction[ctx.missAnswer ?? "voicemail"] ?? 0.5;
  const avgJob = 300; // conservative assumed job value
  const lostRevenue = missedPerMonth * frac * avgJob;
  return { missedPerMonth, lostRevenue };
}

export const nodes: Record<string, (ctx: Ctx) => NodeResult> = {
  start: () => ({
    messages: [
      "Hey there 👋",
      "I'm V-Line's AI consultant. I help business owners figure out exactly where AI can save them time and make them money.",
      "Quick question — what would help your business most right now?",
    ],
    options: [
      { label: "Capture more leads & calls", action: { type: "node", node: "A1" } },
      { label: "Automate repetitive tasks", action: { type: "node", node: "B1" } },
      { label: "Save time and cut costs", action: { type: "node", node: "C1" } },
      { label: "I have something specific", action: { type: "node", node: "D1" } },
      { label: "Just exploring", action: { type: "node", node: "E1" } },
    ],
  }),

  /* ---------------- PATH A: leads & calls ---------------- */
  A1: () => ({
    messages: ["Lead capture is one of our biggest impact areas. What type of business do you run?"],
    options: [
      "HVAC / Plumbing", "Roofing / Contractor", "Dental / Medical", "Legal",
      "Real Estate", "Salon / Spa", "Auto Repair", "Other",
    ].map((label) => ({ label, action: { type: "node", node: "A2" } as Action })),
  }),
  A2: () => ({
    messages: [
      "Got it. In your world, the business that answers first usually wins the job.",
      "How many calls or inquiries do you get per day — roughly?",
    ],
    input: {
      kind: "number",
      placeholder: "e.g. 20",
      next: (value, ctx) => {
        ctx.callsPerDay = Math.max(1, parseInt(value.replace(/\D/g, ""), 10) || 20);
        return "A3";
      },
    },
  }),
  A3: () => ({
    messages: ["And when you miss one — what usually happens?"],
    options: [
      { label: "Goes to voicemail", action: { type: "node", node: "A4:voicemail" } },
      { label: "We lose them", action: { type: "node", node: "A4:lose" } },
      { label: "We call back later", action: { type: "node", node: "A4:callback" } },
      { label: "Answering service", action: { type: "node", node: "A4:service" } },
    ],
  }),
  A4: (ctx) => {
    const { missedPerMonth, lostRevenue } = lossMath(ctx);
    return {
      messages: [
        `Here's the rough math: at about ${ctx.callsPerDay} calls/day you're likely missing ~${missedPerMonth} calls a month.`,
        `Even at a conservative $300/job, that's around ${money(lostRevenue)}/month — roughly ${money(lostRevenue * 12)}/year — that could be walking out the door.`,
        "We fix that, usually within 48 hours: AI answers every call, qualifies leads, and books appointments 24/7. Plans start at $297/mo — less than one recovered job.",
        "And everything comes with a 30-day money-back guarantee. See results or pay nothing. 🛡️",
      ],
      options: [
        { label: "Sounds good — how do I start?", action: { type: "lead" } },
        { label: "What does the AI do exactly?", action: { type: "node", node: "A_what" } },
        { label: "How much?", action: { type: "node", node: "A_price" } },
        { label: "I need more than call answering", action: { type: "node", node: "B1" } },
      ],
    };
  },
  A_what: () => ({
    messages: [
      "Your AI receptionist answers live calls in about 0.4 seconds, understands what callers need, answers questions in your brand voice, and books appointments straight to your calendar.",
      "Anything it can't handle transfers to your team with full context — so callers never repeat themselves.",
    ],
    options: [
      { label: "Get started", action: { type: "lead" } },
      { label: "See plans & pricing", action: { type: "link", href: "/solutions#pricing", label: "See pricing" } },
    ],
  }),
  A_price: () => ({
    messages: [
      "Three core plans: Starter $297/mo, Growth $697/mo (most popular), and Scale $1,497/mo for high call volume.",
      "All month-to-month, no contracts, all backed by the 30-day money-back guarantee.",
    ],
    options: [
      { label: "Get started", action: { type: "lead" } },
      { label: "Compare plans", action: { type: "link", href: "/solutions#pricing", label: "Compare plans" } },
    ],
  }),

  /* ---------------- PATH B: automate tasks ---------------- */
  B1: () => ({
    messages: [
      "Smart. Most clients start here — their team is buried in work AI should handle.",
      "What eats the most time in your day?",
    ],
    input: {
      kind: "text",
      placeholder: "e.g. scheduling, data entry, follow-ups…",
      next: (value, ctx) => {
        ctx.freeText = value;
        return "B2";
      },
    },
  }),
  B2: () => ({
    messages: [
      "That's exactly the kind of workflow we build custom AI for. We've automated similar work across dozens of industries.",
      "Custom builds typically deploy in under 30 days, with a full money-back guarantee.",
      "Want us to put together a custom quote? Free, 24-hour turnaround, no obligation.",
    ],
    options: [
      { label: "Yes, get me a quote", action: { type: "lead" } },
      { label: "What can you automate?", action: { type: "link", href: "/custom", label: "What we build" } },
      { label: "What's your guarantee?", action: { type: "node", node: "guarantee" } },
    ],
  }),

  /* ---------------- PATH C: save time / cut costs ---------------- */
  C1: () => ({
    messages: ["Where's the biggest time or money drain right now?"],
    options: [
      { label: "Answering phones", action: { type: "node", node: "A1" } },
      { label: "Data entry & admin", action: { type: "node", node: "B1" } },
      { label: "Following up with leads", action: { type: "node", node: "B1" } },
      { label: "Juggling tools", action: { type: "node", node: "B1" } },
    ],
  }),

  /* ---------------- PATH D: something specific ---------------- */
  D1: () => ({
    messages: ["Tell me what you're thinking — as much or as little detail as you like. I'll tell you if we can build it."],
    input: {
      kind: "text",
      placeholder: "Describe what you want to automate…",
      next: (value, ctx) => {
        ctx.freeText = value;
        return "D2";
      },
    },
  }),
  D2: () => ({
    messages: [
      "That's buildable — we've done similar work. A project like this typically runs a custom quote and deploys in a few weeks.",
      "Want a detailed quote? Our engineering team reviews and responds within 24 hours.",
    ],
    options: [
      { label: "Yes, get me a quote", action: { type: "lead" } },
      { label: "Tell me about your process", action: { type: "node", node: "D_process" } },
      { label: "What's your guarantee?", action: { type: "node", node: "guarantee" } },
    ],
  }),
  D_process: () => ({
    messages: [
      "Simple: 1) You describe the problem. 2) We architect the solution and you approve before we build. 3) We build & deploy in ~30 days. 4) You see results — or you don't pay.",
    ],
    options: [
      { label: "Get my custom quote", action: { type: "lead" } },
      { label: "See examples", action: { type: "link", href: "/custom", label: "Custom AI" } },
    ],
  }),

  /* ---------------- PATH E: just exploring ---------------- */
  E1: () => ({
    messages: ["No pressure! Worth checking out while you're here:"],
    options: [
      { label: "Calculate what I'm losing", action: { type: "link", href: "/#roi", label: "ROI calculator" } },
      { label: "See industry solutions", action: { type: "link", href: "/industries", label: "Industries" } },
      { label: "Take the free assessment", action: { type: "link", href: "/assessment", label: "Assessment" } },
      { label: "I'll come back", action: { type: "node", node: "E_bye" } },
    ],
  }),
  E_bye: () => ({
    messages: ["All good! Everything comes with a 30-day money-back guarantee — zero risk whenever you're ready. 🛡️"],
    options: [{ label: "Actually, let's talk", action: { type: "lead" } }],
  }),

  /* ---------------- shared ---------------- */
  guarantee: () => ({
    messages: [
      "We don't ask you to trust us — we ask you to test us.",
      "30-day money-back guarantee, no long-term contracts, and we agree on success metrics before we build. If it doesn't deliver, you don't pay.",
    ],
    options: [
      { label: "Get started", action: { type: "lead" } },
      { label: "See pricing", action: { type: "link", href: "/solutions#pricing", label: "Pricing" } },
    ],
  }),
};

/* Objection detection on free-text. Returns a node id to inject, or null. */
export function detectObjection(text: string): string | null {
  const t = text.toLowerCase();
  if (/(expensive|too much|cost too|afford|pricey|cheap)/.test(t)) return "obj_cost";
  if (/(answering service|already have|we have someone|receptionist)/.test(t)) return "obj_service";
  if (/(not sure|maybe|think about|later|unsure)/.test(t)) return "obj_unsure";
  if (/(trust|worried|scary|risky|nervous|skeptic)/.test(t)) return "obj_trust";
  return null;
}

export const objectionNodes: Record<string, NodeResult> = {
  obj_cost: {
    messages: [
      "Totally fair. Here's the thing — most clients recover the cost with a single saved job. Plans start at $297/mo, and there's a 30-day money-back guarantee, so the downside is zero.",
    ],
    options: [
      { label: "Show me the math", action: { type: "node", node: "A1" } },
      { label: "See pricing", action: { type: "link", href: "/solutions#pricing", label: "Pricing" } },
    ],
  },
  obj_service: {
    messages: [
      "Answering services run $800–$3,000/mo, still miss calls, and can't book appointments. Our AI answers instantly, books straight to your calendar, and starts at $297/mo.",
    ],
    options: [
      { label: "Compare them", action: { type: "link", href: "/solutions", label: "Compare" } },
      { label: "Get started", action: { type: "lead" } },
    ],
  },
  obj_unsure: {
    messages: [
      "No rush. The free 60-second assessment shows exactly how much revenue you're leaving on the table — no commitment.",
    ],
    options: [
      { label: "Take the assessment", action: { type: "link", href: "/assessment", label: "Assessment" } },
      { label: "Ask me something", action: { type: "node", node: "start" } },
    ],
  },
  obj_trust: {
    messages: [
      "Makes sense. The AI is trained on YOUR business, a human transfer is always available, and you get full dashboard visibility into every call and lead. Plus the 30-day money-back guarantee.",
    ],
    options: [
      { label: "Okay, let's talk", action: { type: "lead" } },
      { label: "How it works", action: { type: "node", node: "D_process" } },
    ],
  },
};
