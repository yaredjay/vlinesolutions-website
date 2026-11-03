import { NextResponse } from "next/server";

/**
 * Contact form delivery. Sends through Resend when RESEND_API_KEY is set
 * (CONTACT_TO defaults to info@vlinesolutions.com). Without a key the route
 * returns 503 so the form can tell the visitor to email directly instead of
 * pretending the message was delivered.
 */
export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = (await req.json()) as Record<string, string>;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name = "", email = "", organization = "", message = "", company_url = "" } = body;
  if (company_url) return NextResponse.json({ ok: true }); // honeypot
  if (!name.trim() || !email.trim() || !message.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "Name, a valid email and a message are required." }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ error: "Delivery is not configured." }, { status: 503 });

  const to = (process.env.CONTACT_TO ?? "info@vlinesolutions.com").split(",").map((s) => s.trim());
  const from = process.env.CONTACT_FROM ?? "V-Line Solutions <noreply@vlinesolutions.com>";
  const text = [`Name: ${name}`, `Email: ${email}`, `Organization: ${organization || "—"}`, "", message].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, reply_to: email, subject: `Website inquiry — ${name}${organization ? ` (${organization})` : ""}`, text }),
  });

  if (!res.ok) return NextResponse.json({ error: "Delivery failed." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
