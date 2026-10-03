import { SITE_URL } from "./site";

interface LeadSummary {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: string;
  notes: string;
}

/**
 * Emails a new-lead alert through Resend. Does nothing unless RESEND_API_KEY
 * and LEAD_ALERT_TO are set. `onboarding@resend.dev` only delivers to the
 * Resend account owner; set LEAD_ALERT_FROM once a sending domain is verified.
 */
export async function sendLeadAlert(lead: LeadSummary): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = (process.env.LEAD_ALERT_TO ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (!apiKey || to.length === 0) return;

  const from = process.env.LEAD_ALERT_FROM ?? "STG Leads <onboarding@resend.dev>";
  const body = [
    `Name: ${lead.name}`,
    `Phone: ${lead.phone || "—"}`,
    `Email: ${lead.email || "—"}`,
    `Type: ${lead.type}`,
    "",
    lead.notes || "(no message)",
    "",
    `Open in CRM: ${SITE_URL}/admin/contacts/${lead.id}`,
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `new-lead/${lead.id}`,
      },
      body: JSON.stringify({
        from,
        to,
        subject: `New lead: ${lead.name}`,
        text: body,
        ...(lead.email ? { reply_to: lead.email } : {}),
      }),
    });
    if (!res.ok) {
      console.error("Lead alert failed", res.status, await res.text());
    }
  } catch (err) {
    console.error("Lead alert failed", err);
  }
}
