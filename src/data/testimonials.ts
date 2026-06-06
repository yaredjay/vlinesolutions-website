/* ============================================================
   TESTIMONIALS — ⚠️ SAMPLE / ILLUSTRATIVE CONTENT ⚠️

   These are PLACEHOLDERS that demonstrate layout and tone.
   Before launch, REPLACE every entry with a real, written-consent
   client testimonial. Do not publish these as real customer
   statements — fabricated testimonials violate FTC 16 CFR Part 465
   and erode trust with the owners you're selling to.

   When you have real reviews, also set site.proof.rating and
   site.proof.reviewCount in site.ts so the aggregate rating shows.
   ============================================================ */

export type Testimonial = {
  id: number;
  rating: number; // out of 5
  quote: string;
  name: string;
  title: string;
  company: string;
  industry: string;
  sample: boolean;
};

export const testimonials: Testimonial[] = [
  { id: 1, rating: 5, quote: "We were losing 15–20 calls a day. The AI picked up every single one from day one. First month we booked $23,000 in jobs we would have lost.", name: "Mike R.", title: "Owner", company: "Summit HVAC Services", industry: "HVAC", sample: true },
  { id: 2, rating: 5, quote: "I was skeptical about AI answering our phones. Then I saw the dashboard — 47 leads captured in the first week that would have gone to voicemail. We closed 12 of them.", name: "Sarah K.", title: "Office Manager", company: "Precision Dental Group", industry: "Dental", sample: true },
  { id: 3, rating: 5, quote: "Our after-hours calls used to go nowhere. Now the AI books emergency appointments at 2 AM and texts us the details. $14,000 in weekend revenue last month alone.", name: "David M.", title: "Owner", company: "Rapid Response Plumbing", industry: "Plumbing", sample: true },
  { id: 4, rating: 5, quote: "We replaced our $2,800/month answering service with V-Line. Better responses, 24/7 coverage, saving $2,300 a month.", name: "Jennifer L.", title: "Managing Partner", company: "Westfield Law Group", industry: "Legal", sample: true },
  { id: 5, rating: 4.5, quote: "The missed-call text-back alone paid for the entire service. Customers text back immediately and book online. No-show rate dropped 35% in the first month.", name: "Carlos A.", title: "Owner", company: "Elite Auto Repair", industry: "Auto Repair", sample: true },
  { id: 6, rating: 5, quote: "We went from missing 60% of our calls to missing zero. Our stylists are fully booked for the first time in three years.", name: "Amanda T.", title: "Owner", company: "Luxe Hair Studio", industry: "Salon", sample: true },
  { id: 7, rating: 5, quote: "V-Line set up our AI in two days. Our old IT company took three months for a basic phone tree. The AI actually understands what callers are asking.", name: "Robert J.", title: "Broker", company: "Pacific Coast Realty", industry: "Real Estate", sample: true },
  { id: 8, rating: 5, quote: "Our gym gets 200+ calls during New Year rush. This year the AI handled every single one and trial signups went up 180%.", name: "Maria S.", title: "General Manager", company: "Iron Peak Fitness", industry: "Fitness", sample: true },
  { id: 9, rating: 5, quote: "The database reactivation campaign generated $47,000 in reactivated revenue from people we hadn't talked to in 18 months.", name: "James W.", title: "Owner", company: "Guardian Roofing", industry: "Roofing", sample: true },
  { id: 10, rating: 5, quote: "My front desk was drowning. Now the AI handles scheduling, insurance questions, and reminders. Staff finally has time to focus on patients.", name: "Dr. Lisa P.", title: "Owner", company: "Bright Smile Family Dentistry", industry: "Dental", sample: true },
  { id: 11, rating: 5, quote: "When someone calls at midnight with a power outage, the AI picks up instantly, qualifies the emergency, and dispatches our on-call tech.", name: "Tony F.", title: "Owner", company: "Volt Electric Services", industry: "Electrical", sample: true },
  { id: 12, rating: 4.5, quote: "The custom AI handles catering inquiries, provides quotes based on our menu and guest count, and books tastings. $8,000/month in new catering revenue.", name: "Priya N.", title: "Operations Director", company: "Saffron Kitchen", industry: "Restaurant", sample: true },
  { id: 13, rating: 5, quote: "We asked V-Line to automate our entire estimating process. The AI reads blueprints, calculates materials, and generates quotes in minutes instead of days. We tripled our bid volume.", name: "Mark D.", title: "VP Operations", company: "Apex Construction Group", industry: "Custom AI", sample: true },
  { id: 14, rating: 5, quote: "Our property management company handles 400 units. V-Line built AI that processes maintenance requests, dispatches vendors, and updates tenants automatically. What took 3 coordinators now runs itself.", name: "Rachel H.", title: "COO", company: "Pinnacle Property Management", industry: "Custom AI", sample: true },
];

export const getTestimonials = (ids: number[]) =>
  ids.map((id) => testimonials.find((t) => t.id === id)).filter(Boolean) as Testimonial[];
