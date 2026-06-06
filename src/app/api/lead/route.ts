import { NextResponse } from "next/server";
import { site } from "@/data/site";

/* ------------------------------------------------------------------
   Lead / quote / contact intake.
   Works with NO config (logs + returns ok). To enable real email
   delivery, set RESEND_API_KEY in your environment (Vercel) and a
   verified sender domain. Leads are delivered to site.formDeliveryEmail.
   ------------------------------------------------------------------ */

export async function POST(req: Request) {
  let payload: Record<string, unknown> = {};
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid body" }, { status: 400 });
  }

  const source = String(payload.source ?? "unknown");
  const summary = JSON.stringify(payload, null, 2);

  // Always log server-side so nothing is lost even without email config.
  console.log(`[lead:${source}]`, summary);

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL || "V-Line Solutions <onboarding@resend.dev>";

  if (apiKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [site.formDeliveryEmail],
          subject: `New ${source} lead — vlinesolutions.com`,
          text: summary,
        }),
      });
    } catch (err) {
      console.error("[lead] email send failed", err);
      // Don't fail the user — we've logged the lead.
    }
  }

  return NextResponse.json({ ok: true });
}
