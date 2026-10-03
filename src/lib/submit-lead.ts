export interface LeadSubmission {
  name: string;
  email?: string;
  phone?: string;
  type: string;
  organization?: string;
  title?: string;
  notes?: string;
}

export const LEAD_ERROR_MESSAGE =
  "Sorry, we couldn't send your request. Please call us at (503) 755-8555 so we don't miss you.";

/** Returns true only when the lead was saved. */
export async function submitLead(lead: LeadSubmission): Promise<boolean> {
  try {
    const res = await fetch("/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    return res.ok;
  } catch {
    return false;
  }
}
