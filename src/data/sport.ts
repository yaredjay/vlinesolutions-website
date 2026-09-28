import { clients } from "@/data/clients";

export const sportBrand = {
  name: "VLS Sport",
  poweredBy: "Powered by V-Line Solutions",
  tagline: "Officials for every game.",
  description:
    "VLS Sport staffs referees, umpires, scorekeepers and game-day crews for county parks and recreation departments, municipalities, schools and private leagues. Any sport your league runs, in all 50 states.",
  hq: "Campbell, CA",
};

export const sports = [
  "Basketball",
  "Soccer",
  "Futsal",
  "Flag football",
  "Volleyball",
  "Baseball",
  "Softball",
  "Lacrosse",
  "Pickleball",
  "Tennis",
  "Hockey",
  "Kickball",
  "Track & field",
  "Wrestling",
  "Swimming",
];

export type SportClient = { name: string; src?: string; width?: number; height?: number };

export const sportClients: SportClient[] = [
  ...clients.map((c) => ({ name: c.name, src: c.src, width: c.width, height: c.height })),
  { name: "Zog Sports" },
  { name: "City of Cupertino" },
];

export const serve = [
  {
    num: "01",
    title: ["Parks, rec &", "municipalities"],
    body: "A procurement-ready partner for recreation departments and government agencies. SAM.gov registered, cooperative purchasing ready.",
    ring: "from-white via-[rgba(43,92,255,0.5)] to-[rgba(0,194,255,0.6)]",
    glow: "rgba(0,194,255,0.18)",
    icon: "building",
    iconBg: "linear-gradient(120deg,#2B5CFF,#00C2FF)",
    iconColor: "#fff",
  },
  {
    num: "02",
    title: ["League", "organizers"],
    body: "Season-long support with consistent officials, scorekeeping and league administration for youth and adult programs.",
    ring: "from-white via-[rgba(139,227,59,0.6)] to-[rgba(0,194,255,0.6)]",
    glow: "rgba(200,255,26,0.25)",
    icon: "globe",
    iconBg: "linear-gradient(120deg,#8BE33B,#00C2FF)",
    iconColor: "#0B1020",
  },
  {
    num: "03",
    title: ["Tournaments &", "championships"],
    body: "Complete officiating for tournaments with full coordination, bracket-day scheduling and backup coverage.",
    ring: "from-white via-[rgba(255,106,44,0.55)] to-[rgba(124,77,255,0.6)]",
    glow: "rgba(255,106,44,0.16)",
    icon: "trophy",
    iconBg: "linear-gradient(120deg,#FF6A2C,#7C4DFF)",
    iconColor: "#fff",
  },
] as const;

export const officiating = [
  "Game day officials & referees",
  "League program management",
  "Sports facility operations staff",
  "Athletic event coordination",
  "Scorekeeping & statistics personnel",
  "Sports league administration",
  "Tournament & championship operations",
  "Youth & community recreation staffing",
];

export const steps = [
  { num: "01", color: "#2B5CFF", text: "Tell us the sport, level and schedule" },
  { num: "02", color: "#00A3CC", text: "We assign officials to your rulebook" },
  { num: "03", color: "#FF6A2C", text: "Game-day coverage with backups" },
  { num: "04", color: "#7C4DFF", text: "Scores, stats and post-season reporting" },
];

export const why = [
  { num: "01", title: "Fast booking", body: "One request, one point of contact. Crews confirmed for the whole schedule, not game by game." },
  { num: "02", title: "Backup coverage", body: "Standby officials for every slate so a no-show never becomes a forfeit." },
  { num: "03", title: "Vetted officials", body: "Background-checked, matched to your sport, level and rulebook." },
  { num: "04", title: "Fully insured", body: "Coverage in place for public venues and private leagues alike." },
  { num: "05", title: "Simple invoicing", body: "One invoice per season or event, ready for public-agency accounting." },
  { num: "06", title: "24/7 support", body: "A live game-day line for reschedules, weather calls and last-minute changes." },
];

/** Pins sit on each state's geometric center of the Albers USA map (975 x 610). */
export const pins = [
  { state: "California", x: 15.8, y: 47.7, hq: true },
  { state: "Ohio", x: 70.0, y: 43.0 },
  { state: "Maryland", x: 79.0, y: 44.4 },
  { state: "Virginia", x: 76.5, y: 50.0 },
  { state: "Hawaiʻi", x: 35.6, y: 88.1 },
  { state: "Florida", x: 73.6, y: 78.4 },
  { state: "Texas", x: 45.5, y: 72.2 },
  { state: "Massachusetts", x: 84.6, y: 32.1 },
  { state: "Kansas", x: 47.4, y: 50.6 },
];

export const coverageStates = [
  "California · HQ",
  "Ohio",
  "Maryland",
  "Virginia",
  "Florida",
  "Texas",
  "Massachusetts",
  "Kansas",
  "Hawaiʻi",
];

export const sportNav = [
  { label: "Officiating", href: "#serve" },
  { label: "Sports", href: "#sports" },
  { label: "Why VLS", href: "#why" },
  { label: "Coverage", href: "#coverage" },
  { label: "Become an official", href: "#become" },
];
