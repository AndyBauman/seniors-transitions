import type { Contact, ContactType, PipelineStage } from "./crm-store";

export interface DbContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: ContactType;
  organization: string;
  title: string;
  notes: string;
  website: string;
  city: string;
  state: string;
  placement_targets: string;
  stage: PipelineStage;
  last_contacted: string | null;
  next_follow_up: string | null;
  created_at: string;
  score: number;
  starred: boolean;
  verified: boolean;
  verified_date: string | null;
}

function dbToContact(row: DbContact): Contact {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    type: row.type,
    organization: row.organization,
    title: row.title,
    notes: row.notes,
    website: row.website ?? "",
    city: row.city ?? "",
    state: row.state ?? "",
    placementTargets: row.placement_targets ?? "",
    stage: row.stage,
    lastContacted: row.last_contacted,
    nextFollowUp: row.next_follow_up,
    createdAt: row.created_at,
    score: row.score,
    starred: row.starred,
    verified: row.verified ?? false,
    verifiedDate: row.verified_date,
  };
}

function contactToDb(
  c: Partial<Contact>
): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  if (c.name !== undefined) out.name = c.name;
  if (c.email !== undefined) out.email = c.email;
  if (c.phone !== undefined) out.phone = c.phone;
  if (c.type !== undefined) out.type = c.type;
  if (c.organization !== undefined) out.organization = c.organization;
  if (c.title !== undefined) out.title = c.title;
  if (c.notes !== undefined) out.notes = c.notes;
  if (c.website !== undefined) out.website = c.website;
  if (c.city !== undefined) out.city = c.city;
  if (c.state !== undefined) out.state = c.state;
  if (c.placementTargets !== undefined)
    out.placement_targets = c.placementTargets;
  if (c.stage !== undefined) out.stage = c.stage;
  if (c.lastContacted !== undefined) out.last_contacted = c.lastContacted;
  if (c.nextFollowUp !== undefined) out.next_follow_up = c.nextFollowUp;
  if (c.score !== undefined) out.score = c.score;
  if (c.starred !== undefined) out.starred = c.starred;
  if (c.verified !== undefined) out.verified = c.verified;
  if (c.verifiedDate !== undefined) out.verified_date = c.verifiedDate;
  return out;
}

export async function fetchContacts(): Promise<Contact[]> {
  const res = await fetch("/api/contacts");
  if (!res.ok) throw new Error(`Failed to fetch contacts: ${res.status}`);
  const rows: DbContact[] = await res.json();
  return rows.map(dbToContact);
}

export async function fetchContact(id: string): Promise<Contact | null> {
  const res = await fetch(`/api/contacts/${id}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to fetch contact: ${res.status}`);
  const row: DbContact = await res.json();
  return dbToContact(row);
}

export async function apiSaveContact(
  contact: Omit<Contact, "id" | "createdAt">
): Promise<Contact> {
  const res = await fetch("/api/contacts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactToDb(contact)),
  });
  if (!res.ok) throw new Error(`Failed to save contact: ${res.status}`);
  const row: DbContact = await res.json();
  return dbToContact(row);
}

export async function apiUpdateContact(
  id: string,
  updates: Partial<Contact>
): Promise<Contact> {
  const res = await fetch(`/api/contacts/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactToDb(updates)),
  });
  if (!res.ok) throw new Error(`Failed to update contact: ${res.status}`);
  const row: DbContact = await res.json();
  return dbToContact(row);
}

export async function apiDeleteContact(id: string): Promise<void> {
  const res = await fetch(`/api/contacts/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error(`Failed to delete contact: ${res.status}`);
}

export async function apiSeedContacts(): Promise<{
  seeded: boolean;
  count: number;
}> {
  const res = await fetch("/api/contacts/seed", { method: "POST" });
  if (!res.ok) throw new Error(`Seed failed: ${res.status}`);
  return res.json();
}

/**
 * Check if the API is available (Supabase configured).
 * Returns true if server-side persistence is working.
 */
export async function isApiAvailable(): Promise<boolean> {
  try {
    const res = await fetch("/api/contacts", { method: "GET" });
    return res.ok;
  } catch {
    return false;
  }
}
