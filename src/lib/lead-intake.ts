import type { ContactType } from "./crm-store";

/** Text columns are `not null` in Supabase; a null here makes the insert fail. */
const TEXT_COLUMNS = [
  "name",
  "email",
  "phone",
  "type",
  "organization",
  "title",
  "notes",
  "website",
  "city",
  "state",
  "placement_targets",
  "stage",
] as const;

const PUBLIC_TYPES = new Set<ContactType>([
  "family",
  "placement-agent",
  "community",
  "attorney",
  "other",
]);

const MAX_FIELD = 200;
const MAX_PHONE = 50;
const MAX_NOTES = 5000;

export function blankNullText(
  row: Record<string, unknown>
): Record<string, unknown> {
  const out = { ...row };
  for (const key of TEXT_COLUMNS) {
    if (key in out && out[key] == null) out[key] = "";
  }
  return out;
}

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function todayInPortland(): string {
  return new Date().toLocaleDateString("en-CA", {
    timeZone: "America/Los_Angeles",
  });
}

/**
 * Builds the row for a website form submission. Only lead fields are accepted;
 * stage, score, and verification are fixed so visitors can't set them.
 * Returns null when there is no name or no way to reach the person.
 */
export function toPublicLead(
  body: Record<string, unknown>
): Record<string, unknown> | null {
  const name = text(body.name, MAX_FIELD);
  const email = text(body.email, MAX_FIELD);
  const phone = text(body.phone, MAX_PHONE);
  if (!name || (!email && !phone)) return null;

  const requestedType = text(body.type, MAX_FIELD);
  const isKnownType = PUBLIC_TYPES.has(requestedType as ContactType);
  const notes = [
    text(body.notes, MAX_NOTES),
    requestedType && !isKnownType ? `[Type: ${requestedType}]` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return {
    name,
    email,
    phone,
    type: isKnownType ? requestedType : "other",
    organization: text(body.organization, MAX_FIELD),
    title: text(body.title, MAX_FIELD),
    notes,
    stage: "new-lead",
    score: 50,
    starred: false,
    verified: false,
    next_follow_up: todayInPortland(),
  };
}
