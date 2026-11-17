/**
 * One landing page per sport: /officials/<slug>.
 * Every line here is a service description, not a claim of past performance.
 */
export type SportPage = {
  slug: string;
  name: string;
  /** What the officials are called in this sport. */
  officials: string;
  /** Headline noun, e.g. "Basketball referees". */
  headline: string;
  intro: string;
  crew: string[];
  formats: string[];
  levels: string[];
  faqs: { q: string; a: string }[];
};

const commonLevels = ["Youth leagues", "Adult recreation", "School districts", "Parks and recreation", "Tournaments and championships"];

export const sportPages: SportPage[] = [
  {
    slug: "basketball",
    name: "Basketball",
    officials: "referees",
    headline: "Basketball referees",
    intro:
      "Two- and three-person crews for youth, adult rec, school and tournament basketball. Officials are matched to your rulebook (NFHS, FIBA or house rules), your age groups and your gym schedule, with scorekeepers and clock operators available for the same slate.",
    crew: ["Floor referees (2- or 3-person crews)", "Scorekeepers and clock operators", "Site supervisors for multi-court days", "Tournament assignors"],
    formats: ["Full-court 5v5", "3x3 and half-court", "Youth modified rules", "Tournament brackets and pool play"],
    levels: commonLevels,
    faqs: [
      { q: "Do you provide scorekeepers and clock operators with the referees?", a: "Yes. Table crews can be scheduled on the same request as the floor officials, so one booking covers the whole gym." },
      { q: "Can officials work multiple courts in one facility?", a: "Yes. For multi-court days we assign a site supervisor who manages rotations, breaks and backups across courts." },
    ],
  },
  {
    slug: "soccer",
    name: "Soccer",
    officials: "referees",
    headline: "Soccer referees",
    intro:
      "Center referees and assistant referees for 11v11, small-sided and futsal-adjacent formats. Crews are built for your field count and age brackets, from U8 build-out lines to adult open divisions, with weather-call and reschedule support on game day.",
    crew: ["Center referees", "Assistant referees (ARs)", "Fourth officials for finals", "Field marshals and assignors"],
    formats: ["11v11", "9v9 and 7v7", "Small-sided and build-out line", "Round-robin and knockout tournaments"],
    levels: commonLevels,
    faqs: [
      { q: "Do you staff three-person crews for every match?", a: "We staff to your competition rules: single-referee for small-sided youth matches, three-person crews for full-field and playoff matches." },
      { q: "What happens when weather delays a slate?", a: "Your game-day line reaches a live coordinator who reassigns crews to the new kickoff times and confirms coverage back to you." },
    ],
  },
  {
    slug: "futsal",
    name: "Futsal",
    officials: "referees",
    headline: "Futsal referees",
    intro:
      "Two-referee crews with timekeepers for indoor futsal leagues and tournaments. Officials are briefed on your accumulated-foul rules, flying substitutions and stopped-clock conventions before the first whistle.",
    crew: ["First and second referees", "Timekeepers and third officials", "Tournament table staff"],
    formats: ["5v5 indoor futsal", "Youth academy sessions", "Adult indoor leagues", "Weekend tournaments"],
    levels: commonLevels,
    faqs: [
      { q: "Can the same crew work a full evening of back-to-back matches?", a: "Yes. We schedule crews in blocks with planned rotation so quality holds through the last match of the night." },
    ],
  },
  {
    slug: "flag-football",
    name: "Flag football",
    officials: "referees",
    headline: "Flag football referees",
    intro:
      "Crews for 5v5, 7v7 and youth flag formats, trained on no-contact enforcement, flag-guarding, rushing counts and your league's specific blitz and run-zone rules. Available for recreation departments, school programs and adult leagues.",
    crew: ["Referees and back judges", "Down and clock operators", "Site supervisors"],
    formats: ["5v5 and 7v7 flag", "Youth co-ed", "Adult competitive and recreational", "Tournament brackets"],
    levels: commonLevels,
    faqs: [
      { q: "Are officials familiar with different flag rule sets?", a: "Yes. We confirm your rule set during intake and brief the crew on it, including rush counts, no-run zones and overtime formats." },
    ],
  },
  {
    slug: "volleyball",
    name: "Volleyball",
    officials: "referees",
    headline: "Volleyball referees",
    intro:
      "First and second referees, line judges and scorers for indoor and grass volleyball. Crews are matched to your format, from youth developmental play to adult competitive leagues and multi-court tournaments.",
    crew: ["First referees (up)", "Second referees (down)", "Line judges", "Scorers and libero trackers"],
    formats: ["Indoor 6v6", "Grass and sand doubles or fours", "Co-ed recreation", "Tournament pool play"],
    levels: commonLevels,
    faqs: [
      { q: "Do you provide scorers for tournaments?", a: "Yes. Scorers and libero trackers can be booked with the officiating crew for every court." },
    ],
  },
  {
    slug: "baseball",
    name: "Baseball",
    officials: "umpires",
    headline: "Baseball umpires",
    intro:
      "Plate and base umpires for youth, school and adult baseball. Crews are assigned by level, with two-umpire systems for regular season and larger crews for playoffs and championships, and pitch-count and time-limit rules confirmed in advance.",
    crew: ["Plate umpires", "Base umpires", "Umpire-in-chief for tournaments", "Official scorers"],
    formats: ["Youth and little league", "High school and travel", "Adult amateur", "Tournaments and showcases"],
    levels: commonLevels,
    faqs: [
      { q: "How many umpires do you assign per game?", a: "Two for most regular-season games, with three- or four-umpire crews available for playoffs and championship games." },
    ],
  },
  {
    slug: "softball",
    name: "Softball",
    officials: "umpires",
    headline: "Softball umpires",
    intro:
      "Umpires for slow-pitch and fast-pitch softball across recreation, school and adult leagues. Crews work your specific league rules, including pitch arc, mercy rules, courtesy runners and time limits, with backups on call for doubleheaders and tournament days.",
    crew: ["Plate umpires", "Base umpires", "Tournament umpire-in-chief", "Scorekeepers"],
    formats: ["Slow-pitch", "Fast-pitch", "Co-ed recreation", "Weekend tournaments"],
    levels: commonLevels,
    faqs: [
      { q: "Can umpires work both slow-pitch and fast-pitch?", a: "We assign by format. Fast-pitch crews are selected for that pace and strike zone; slow-pitch crews for arc and co-ed rule sets." },
    ],
  },
  {
    slug: "lacrosse",
    name: "Lacrosse",
    officials: "officials",
    headline: "Lacrosse officials",
    intro:
      "Officiating crews for boys', girls', youth and adult lacrosse, with rule sets confirmed per division (contact levels, stick checks, shot clocks where used). Timers and scorers are available for the same booking.",
    crew: ["Field officials (2- or 3-person crews)", "Timers and scorers", "Tournament assignors"],
    formats: ["Field lacrosse", "Youth small-sided", "Box and indoor where offered", "Tournaments"],
    levels: commonLevels,
    faqs: [
      { q: "Do you officiate both boys' and girls' rule sets?", a: "Yes. Crews are assigned to the rule set they are trained on, and your intake confirms which divisions you run." },
    ],
  },
  {
    slug: "pickleball",
    name: "Pickleball",
    officials: "referees",
    headline: "Pickleball referees",
    intro:
      "Referees and line judges for pickleball leagues, ladders and tournaments. Crews handle scoring calls, serve and kitchen faults, timeouts and medal-round protocols so your event runs on schedule.",
    crew: ["Match referees", "Line judges for medal rounds", "Tournament desk staff"],
    formats: ["Singles and doubles", "Round-robin leagues", "Bracketed tournaments", "Community recreation play"],
    levels: ["Adult recreation", "Senior programs", "Parks and recreation", "Tournaments and championships"],
    faqs: [
      { q: "Do community leagues need referees?", a: "Many run self-officiated pool play and bring in referees for playoffs and medal matches. We staff either model." },
    ],
  },
  {
    slug: "tennis",
    name: "Tennis",
    officials: "officials",
    headline: "Tennis officials",
    intro:
      "Chair umpires, roving officials and line crews for school, parks and community tennis events. Officials manage scoring disputes, code of conduct and timing across multiple courts.",
    crew: ["Chair umpires for finals", "Roving officials across courts", "Line judges", "Tournament desk staff"],
    formats: ["Team tennis", "Junior and adult tournaments", "School dual matches", "Community ladders"],
    levels: ["School districts", "Parks and recreation", "Adult recreation", "Tournaments and championships"],
    faqs: [
      { q: "Can one official cover several courts?", a: "Yes. Roving officials are the standard model for pool play; chair umpires are added for semifinals and finals." },
    ],
  },
  {
    slug: "hockey",
    name: "Hockey",
    officials: "officials",
    headline: "Hockey officials",
    intro:
      "Referees and linespersons for ice, roller and floor hockey programs, with scorekeepers and penalty-box attendants available for the same slate. Crews are assigned by level and checking rules.",
    crew: ["Referees", "Linespersons", "Scorekeepers and timekeepers", "Penalty box attendants"],
    formats: ["Youth and adult ice hockey", "Roller and inline", "Floor and street hockey programs", "Tournaments"],
    levels: commonLevels,
    faqs: [
      { q: "Do you provide off-ice officials too?", a: "Yes. Scorekeepers, timekeepers and penalty box attendants can be booked alongside the on-ice crew." },
    ],
  },
  {
    slug: "kickball",
    name: "Kickball",
    officials: "referees",
    headline: "Kickball referees",
    intro:
      "Referees and base umpires for adult social leagues, corporate events and youth recreation kickball. Crews keep games moving, manage house rules and bring a consistent standard to social-league play.",
    crew: ["Head referees", "Base umpires", "League coordinators"],
    formats: ["Adult social leagues", "Co-ed recreation", "Corporate and community events", "Youth programs"],
    levels: ["Adult recreation", "Parks and recreation", "Youth leagues", "Private leagues and events"],
    faqs: [
      { q: "Do social leagues really need officials?", a: "Officials keep social leagues fun and fair: faster games, fewer disputes and a consistent rule set from week to week." },
    ],
  },
  {
    slug: "track-and-field",
    name: "Track & field",
    officials: "officials",
    headline: "Track and field officials",
    intro:
      "Starters, timers, field-event judges and clerks for school meets, youth club meets and community races. We staff the full meet, from the clerk of course to the finish line and field pits.",
    crew: ["Starters", "Timers and finish-line crews", "Field event judges", "Clerks of course and marshals"],
    formats: ["Dual and invitational meets", "Youth club meets", "Community fun runs and relays", "Championship meets"],
    levels: ["School districts", "Youth clubs", "Parks and recreation", "Championship meets"],
    faqs: [
      { q: "Can you staff a full invitational meet?", a: "Yes. Tell us the event schedule and we build the officials roster around it, including field-event judges and finish-line crews." },
    ],
  },
  {
    slug: "wrestling",
    name: "Wrestling",
    officials: "referees",
    headline: "Wrestling referees",
    intro:
      "Mat officials, assistant referees and table workers for school duals, youth tournaments and club events. Crews are assigned by style (folkstyle, freestyle, Greco) and age group.",
    crew: ["Mat referees", "Assistant referees", "Table workers and timekeepers", "Head official for tournaments"],
    formats: ["Dual meets", "Multi-mat tournaments", "Youth club events", "Championship brackets"],
    levels: ["School districts", "Youth clubs", "Parks and recreation", "Tournaments and championships"],
    faqs: [
      { q: "Do you staff multi-mat tournaments?", a: "Yes. We staff each mat with a referee and table crew and assign a head official to run the tournament floor." },
    ],
  },
  {
    slug: "swimming",
    name: "Swimming",
    officials: "officials",
    headline: "Swimming officials",
    intro:
      "Stroke and turn judges, starters, timers and meet referees for school, club and summer-league swim meets. Crews are briefed on your meet format and timing system before warm-ups.",
    crew: ["Meet referees", "Starters", "Stroke and turn judges", "Timers and clerks of course"],
    formats: ["Dual meets", "Summer league", "Invitationals", "Championship meets"],
    levels: ["School districts", "Summer leagues", "Parks and recreation", "Championship meets"],
    faqs: [
      { q: "Can you provide timers as well as judges?", a: "Yes. Timers, clerks of course and judges are scheduled together so the meet is fully staffed." },
    ],
  },
];

export function getSportPage(slug: string) {
  return sportPages.find((s) => s.slug === slug);
}

/** Shared FAQ for the home page and the FAQPage schema. Every answer restates a service term already on the site. */
export const sportFaqs = [
  {
    q: "What does V-Line Sport do?",
    a: "V-Line Sport is a sports officials staffing company. We supply referees, umpires, scorekeepers, league administrators and game-day crews to parks and recreation departments, municipalities, school districts, tournaments and private leagues, in all 50 states.",
  },
  {
    q: "Which sports can you staff officials for?",
    a: "Basketball, soccer, futsal, flag football, volleyball, baseball, softball, lacrosse, pickleball, tennis, hockey, kickball, track and field, wrestling and swimming. If your league runs a sport that is not listed, tell us and we will build the crew.",
  },
  {
    q: "How do I request referees or umpires for a season?",
    a: "Send one request with the sport, level, schedule and venues. We assign officials to your rulebook, confirm crews for the whole schedule, provide backups for every slate, and report scores and stats after each game day.",
  },
  {
    q: "Do you provide backup officials?",
    a: "Yes. Standby officials are scheduled for every slate so a no-show never becomes a forfeit, and a live game-day line handles reschedules and weather calls.",
  },
  {
    q: "Are your officials vetted and insured?",
    a: "Officials are background-checked and matched to your sport, level and rulebook, and coverage is in place for public venues and private leagues alike.",
  },
  {
    q: "Can a city or county contract with V-Line Sport?",
    a: "Yes. V-Line Sport is a division of V-Line Solutions LLC, which is SAM.gov registered and a small business, and is set up for cooperative purchasing. Invoicing is one invoice per season or event, ready for public-agency accounting.",
  },
  {
    q: "Where do you operate?",
    a: "Officials are available in all 50 states, with crews on the ground today in California, Ohio, Maryland, Virginia, Florida, Texas, Massachusetts, Kansas and Hawaiʻi.",
  },
  {
    q: "How do I become an official with V-Line Sport?",
    a: "Apply to the roster through the request page. Tell us your sports, certifications and availability, and we match you to games near you.",
  },
];
