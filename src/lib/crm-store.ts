import { websiteDedupeKey } from "./website-utils";
import {
  USER_EXPANSION,
  ASRPWA_ADVISOR_SEED,
  IDAHO_PLACEMENT_SEED,
  COMMUNITY_SEED,
  ATTORNEY_SEED,
  PARTNER_DIRECTORY_IMPORT,
  type SeedContact,
} from "./crm-seed-batches";

export type ContactType =
  | "placement-agent"
  | "executive-director"
  | "community"
  | "family"
  | "attorney"
  | "other";

export type PipelineStage =
  | "new-lead"
  | "contacted"
  | "meeting-set"
  | "proposal"
  | "active-partner"
  | "inactive";

export type TaskPriority = "low" | "medium" | "high";

export interface Contact {
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
  placementTargets: string;
  stage: PipelineStage;
  lastContacted: string | null;
  nextFollowUp: string | null;
  createdAt: string;
  score: number;
  starred: boolean;
  verified: boolean;
  verifiedDate: string | null;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
  contactId: string | null;
  priority: TaskPriority;
  createdAt: string;
}

const CONTACTS_KEY = "stg_crm_contacts";
const TASKS_KEY = "stg_crm_tasks";
const SEED_VERSION_KEY = "stg_crm_seed_version";
const CURRENT_SEED_VERSION = 7;

function mergePhones(a: string, b: string): string {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const part of `${a};${b}`.split(";")) {
    const t = part.trim();
    if (!t) continue;
    const key = t.replace(/\D/g, "");
    if (key.length < 10) continue;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(t);
  }
  return out.join("; ");
}

function preferCity(x: string, y: string): string {
  const bad = (s: string) => !s?.trim() || /^unspecified$/i.test(s.trim());
  const xt = (x || "").trim();
  const yt = (y || "").trim();
  if (bad(yt)) return xt || yt;
  if (bad(xt)) return yt || xt;
  if (/\bCounty\b/i.test(xt) && !/\bCounty\b/i.test(yt)) return yt;
  return xt || yt;
}

function mergeSeedContacts(existing: SeedContact, incoming: SeedContact): SeedContact {
  return {
    ...existing,
    name: incoming.name.length > existing.name.length ? incoming.name : existing.name,
    phone: mergePhones(existing.phone, incoming.phone),
    notes: [existing.notes, incoming.notes].filter(Boolean).join(" | "),
    placementTargets:
      (existing.placementTargets?.length ?? 0) >= (incoming.placementTargets?.length ?? 0)
        ? existing.placementTargets
        : incoming.placementTargets,
    website: existing.website || incoming.website,
    city: preferCity(existing.city, incoming.city),
    state: existing.state || incoming.state,
    email: existing.email || incoming.email,
    title: existing.title || incoming.title,
    organization:
      existing.organization.length > incoming.organization.length
        ? existing.organization
        : incoming.organization,
    type: existing.type,
    stage: existing.stage,
    lastContacted: existing.lastContacted ?? incoming.lastContacted,
    score: Math.max(existing.score, incoming.score),
    starred: existing.starred || incoming.starred,
    verified: existing.verified || incoming.verified,
    verifiedDate: existing.verifiedDate ?? incoming.verifiedDate,
    nextFollowUp: existing.nextFollowUp || incoming.nextFollowUp,
  };
}

function seedDedupeKey(c: SeedContact): string {
  const w = websiteDedupeKey(c.website);
  if (w) return `w:${w}`;
  const digits = (c.phone.split(";")[0] ?? "").replace(/\D/g, "");
  if (digits.length >= 10) return `p:${digits.slice(-10)}`;
  return `n:${c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 96)}`;
}

function dedupeSeedContacts(list: SeedContact[]): SeedContact[] {
  const map = new Map<string, SeedContact>();
  for (const c of list) {
    const k = seedDedupeKey(c);
    const ex = map.get(k);
    if (!ex) map.set(k, { ...c });
    else map.set(k, mergeSeedContacts(ex, c));
  }
  return [...map.values()];
}

function contactAsSeed(c: Contact): SeedContact {
  return {
    name: c.name,
    email: c.email,
    phone: c.phone,
    type: c.type,
    organization: c.organization,
    title: c.title,
    notes: c.notes,
    website: c.website ?? "",
    city: c.city ?? "",
    state: c.state ?? "",
    placementTargets: c.placementTargets ?? "",
    stage: c.stage,
    lastContacted: c.lastContacted,
    nextFollowUp: c.nextFollowUp ?? "",
    score: c.score,
    starred: c.starred,
    verified: c.verified ?? false,
    verifiedDate: c.verifiedDate ?? null,
  };
}

function mergeNotesForStorage(a: string, b: string): string {
  const at = (a ?? "").trim();
  const bt = (b ?? "").trim();
  if (!bt) return at;
  if (!at) return bt;
  if (at.includes(bt) || bt.includes(at)) return at.length >= bt.length ? at : bt;
  return `${at} | ${bt}`;
}

function mergeStorageContactWithCanonical(existing: Contact, seed: SeedContact): Contact {
  return {
    ...existing,
    name: seed.name.length > existing.name.length ? seed.name : existing.name,
    phone: mergePhones(existing.phone, seed.phone),
    notes: mergeNotesForStorage(existing.notes, seed.notes),
    email: existing.email || seed.email,
    website: existing.website || seed.website,
    city: preferCity(existing.city, seed.city),
    state: existing.state || seed.state,
    placementTargets:
      (existing.placementTargets?.length ?? 0) >= (seed.placementTargets?.length ?? 0)
        ? existing.placementTargets
        : seed.placementTargets,
    title: existing.title || seed.title,
    organization:
      existing.organization.length >= seed.organization.length
        ? existing.organization
        : seed.organization,
    verified: existing.verified || seed.verified,
    verifiedDate: existing.verifiedDate ?? seed.verifiedDate,
  };
}

function mergeCanonicalIntoExistingContacts(
  canonical: SeedContact[],
  daysFromNow: (n: number) => string,
  existingList: Contact[]
): Contact[] {
  const keyToIndex = new Map<string, number>();
  existingList.forEach((c, i) => {
    const k = seedDedupeKey(contactAsSeed(c));
    if (!keyToIndex.has(k)) keyToIndex.set(k, i);
  });

  const out = [...existingList];
  const defaultFollowUp = daysFromNow(7);

  for (const seed of canonical) {
    const k = seedDedupeKey(seed);
    const idx = keyToIndex.get(k);
    if (idx !== undefined) {
      out[idx] = mergeStorageContactWithCanonical(out[idx], seed);
    } else {
      const fresh: Contact = {
        ...seed,
        id: generateId(),
        createdAt: new Date().toISOString(),
        nextFollowUp: seed.nextFollowUp?.trim() ? seed.nextFollowUp : defaultFollowUp,
      };
      keyToIndex.set(k, out.length);
      out.push(fresh);
    }
  }

  return out;
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}

// --- Contacts ---

export function getContacts(): Contact[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(CONTACTS_KEY);
  if (!data) return [];
  const contacts: Contact[] = JSON.parse(data);
  return contacts.map((c) => ({
    ...c,
    website: c.website ?? "",
    city: c.city ?? "",
    state: c.state ?? "",
    placementTargets: c.placementTargets ?? "",
    verified: c.verified ?? false,
    verifiedDate: c.verifiedDate ?? null,
  }));
}

export function getContactsByType(type: ContactType): Contact[] {
  return getContacts().filter((c) => c.type === type);
}

export function getContact(id: string): Contact | undefined {
  return getContacts().find((c) => c.id === id);
}

export function saveContact(contact: Omit<Contact, "id" | "createdAt">): Contact {
  const contacts = getContacts();
  const newContact: Contact = {
    ...contact,
    id: generateId(),
    createdAt: new Date().toISOString(),
  };
  contacts.push(newContact);
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  return newContact;
}

export function updateContact(id: string, updates: Partial<Contact>): Contact | null {
  const contacts = getContacts();
  const idx = contacts.findIndex((c) => c.id === id);
  if (idx === -1) return null;
  contacts[idx] = { ...contacts[idx], ...updates };
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  return contacts[idx];
}

export function deleteContact(id: string): void {
  const contacts = getContacts().filter((c) => c.id !== id);
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
}

// --- Tasks ---

export function getTasks(): Task[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(TASKS_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveTask(task: Omit<Task, "id" | "createdAt">): Task {
  const tasks = getTasks();
  const newTask: Task = {
    ...task,
    id: generateId(),
    createdAt: new Date().toISOString(),
  };
  tasks.push(newTask);
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  return newTask;
}

export function updateTask(id: string, updates: Partial<Task>): Task | null {
  const tasks = getTasks();
  const idx = tasks.findIndex((t) => t.id === id);
  if (idx === -1) return null;
  tasks[idx] = { ...tasks[idx], ...updates };
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  return tasks[idx];
}

export function deleteTask(id: string): void {
  const tasks = getTasks().filter((t) => t.id !== id);
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

// --- Seed Data ---

function buildCanonicalSeedRows(
  daysAgo: (n: number) => string,
  daysFromNow: (n: number) => string
): SeedContact[] {
  // =========================================================
  // Real Oregon & SW Washington Placement Agents
  // =========================================================
  const placementAgents: Contact[] = [
    // --- Portland Metro ---
    {
      id: generateId(), name: "Adult Placement Network", email: "", phone: "503-659-2029; 503-684-4455",
      type: "placement-agent", organization: "Adult Placement Network", title: "Referral & Placement Agency",
      website: "adultplacementnetwork.com", city: "Lake Oswego", state: "OR",
      placementTargets: "Independent living; assisted living; adult care homes; memory care; skilled care; hospice",
      notes: "No-cost referral & placement; serves Portland metro; PO Box 1106 Lake Oswego",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(3), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "All About Seniors Inc", email: "", phone: "503-659-1410",
      type: "placement-agent", organization: "All About Seniors Inc", title: "Placement Agency",
      website: "allaboutseniorsinc.com", city: "Milwaukie", state: "OR",
      placementTargets: "",
      notes: "PO Box address; phone verified via Oregon registry + official contact page",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(3), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "A Graceful Transition", email: "", phone: "971-378-3474",
      type: "placement-agent", organization: "A Graceful Transition", title: "Placement Advisor",
      website: "agracefultransition.com", city: "Portland", state: "OR",
      placementTargets: "Independent living; assisted living; memory care; adult care home; skilled nursing/rehab",
      notes: "Hours Mon–Fri 9am–5pm; no-cost referrals/tours messaging",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(4), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Assisted Living Locators SW Portland", email: "", phone: "503-610-9226",
      type: "placement-agent", organization: "Assisted Living Locators", title: "Lead Advisor – Peter A. Wilhelm",
      website: "assistedlivinglocators.com/care-advisor/swportland", city: "Portland", state: "OR",
      placementTargets: "",
      notes: "Listed in Oregon DHS registry; also listed in county housing resources; lead advisor Peter A. Wilhelm",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(4), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Autumn of Life Senior Housing", email: "", phone: "503-701-5054",
      type: "placement-agent", organization: "Autumn of Life Senior Housing and Advisory Services", title: "CEO",
      website: "autumnoflife.net", city: "Oak Grove", state: "OR",
      placementTargets: "",
      notes: "Oregon registry city Oak Grove; additional address appears in local directory; CEO name on contact page",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(5), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Care and Keeping LLC", email: "", phone: "971-330-4743; 503-444-8696",
      type: "placement-agent", organization: "Care and Keeping LLC", title: "Placement Advisor",
      website: "careandkeeping.com", city: "Portland", state: "OR",
      placementTargets: "Independent living; assisted living; memory care; adult care home",
      notes: "Direct + office numbers; serves Portland metro & SW Washington per official site",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(5), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Care Solutions LLC", email: "", phone: "503-548-7312",
      type: "placement-agent", organization: "Care Solutions LLC", title: "Placement Advisor",
      website: "caresolutionsnw.com", city: "Portland", state: "OR",
      placementTargets: "Assisted living; memory/dementia care; adult care homes",
      notes: "No-cost placement/advisory language on site; also listed in Oregon registry",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(5), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "CarePatrol of NE Portland", email: "", phone: "971-357-1705",
      type: "placement-agent", organization: "CarePatrol", title: "Advisor – Michelle Kominsky",
      website: "carepatrol.com/northeast-portland", city: "Portland", state: "OR",
      placementTargets: "Assisted living; memory care; independent living",
      notes: "Services at no cost; registry corroboration",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(6), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "CarePatrol of Beaverton", email: "", phone: "503-747-7492",
      type: "placement-agent", organization: "CarePatrol", title: "Advisor – Benjamin Frogel",
      website: "carepatrol.com/beaverton", city: "Beaverton", state: "OR",
      placementTargets: "Assisted living; memory care; independent living; nursing homes; home care",
      notes: "Services at no cost; registry corroboration",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(6), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "CarePatrol of Portland South", email: "", phone: "503-885-3383",
      type: "placement-agent", organization: "CarePatrol", title: "Advisor",
      website: "carepatrol.com", city: "Happy Valley", state: "OR",
      placementTargets: "Senior care options (general)",
      notes: "Registry lists CarePatrol of Portland with this phone/location; local directory corroborates phone",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(6), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Helping Hands for Seniors", email: "", phone: "503-746-4740; 503-477-6547",
      type: "placement-agent", organization: "Helping Hands for Seniors", title: "Placement Agency",
      website: "helpinghandspdx.com", city: "Clackamas", state: "OR",
      placementTargets: "Assisted living; memory care; adult care homes; hospice",
      notes: "Official contact page lists address + hours Mon–Sun 9am–9pm; registry corroboration",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(7), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Mt. Hood Senior Solutions", email: "", phone: "971-757-5142; 360-947-1278",
      type: "placement-agent", organization: "Mt. Hood Senior Solutions", title: "Placement Agency",
      website: "mthoodseniorsolutions.com", city: "Gresham", state: "OR",
      placementTargets: "Assisted living; memory care; independent living; residential care",
      notes: "Site lists address 376 NE 219th Ave; no-cost placement services; OR/WA phones",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(7), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Oasis Senior Advisors Portland", email: "", phone: "503-348-2822",
      type: "placement-agent", organization: "Oasis Senior Advisors", title: "Local Advisor",
      website: "oasissenioradvisors.com/locations/portland-mid-valley", city: "Sandy", state: "OR",
      placementTargets: "",
      notes: "Direct page blocked in session; local directory lists Sandy address + phone; OSRAA directory corroborates",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(7), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Right Fit Senior Living Solutions", email: "", phone: "503-830-3268",
      type: "placement-agent", organization: "Right Fit Senior Living Solutions", title: "Owner – Sarah Harwood",
      website: "rightfitsenior.com", city: "West Linn", state: "OR",
      placementTargets: "Assisted living; memory care; adult care homes",
      notes: "Disclosure PDF lists address 19095 Nixon Ave and owner Sarah Harwood; ODHS registration listed",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(8), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Golden Placement Services LLC", email: "", phone: "503-926-2111; 503-723-7145",
      type: "placement-agent", organization: "Golden Placement Services LLC", title: "Placement Agency",
      website: "goldenplacements.com", city: "Milwaukie", state: "OR",
      placementTargets: "Assisted living; residential care; memory care; adult care homes",
      notes: "Disclosure form lists address 6615 SE Charles St Milwaukie; registered with Oregon DHS; Mon–Fri 8–5 hours",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(8), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Integrity Senior Living Advisors", email: "", phone: "503-354-9635; 503-217-4097",
      type: "placement-agent", organization: "Integrity Senior Living Advisors LLC", title: "Advisor",
      website: "integritysenioradvisor.com", city: "Canby", state: "OR",
      placementTargets: "Assisted living; memory care; adult care homes",
      notes: "Disclosure page lists address 358 NW 1st Ave STE 5 Canby; Oregon referral registration number",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(9), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Best Senior Living Alternatives", email: "", phone: "503-577-4292",
      type: "placement-agent", organization: "Best Senior Living Alternatives", title: "Placement Agency",
      website: "bestseniorlivingalternatives.com", city: "Beaverton", state: "OR",
      placementTargets: "",
      notes: "Listed in Oregon DHS registry",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(9), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Senior Living Solutions", email: "", phone: "503-522-0959",
      type: "placement-agent", organization: "Senior Living Solutions", title: "Placement Agency",
      website: "", city: "Tigard", state: "OR",
      placementTargets: "",
      notes: "Listed in Oregon DHS registry; website not listed",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(10), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Amen16 Referral Agency", email: "", phone: "971-485-9066",
      type: "placement-agent", organization: "Amen16 Referral Agency", title: "Referral Agency",
      website: "", city: "Hillsboro", state: "OR",
      placementTargets: "",
      notes: "Listed in Oregon DHS registry; website not listed",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(10), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Compassion Placement", email: "", phone: "503-381-4197",
      type: "placement-agent", organization: "Compassion Placement", title: "Placement Agency",
      website: "compassion-placement.com", city: "Lake Oswego", state: "OR",
      placementTargets: "",
      notes: "Listed in Oregon DHS registry",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(10), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Connect Senior Services LLC", email: "", phone: "503-949-6520",
      type: "placement-agent", organization: "Connect Senior Services LLC", title: "Placement Agency",
      website: "", city: "Beaverton", state: "OR",
      placementTargets: "",
      notes: "Listed in Oregon DHS registry; website not listed",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(11), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Freestone Senior Connect LLC", email: "", phone: "425-691-8793",
      type: "placement-agent", organization: "Freestone Senior Connect LLC", title: "Placement Agency",
      website: "freestoneseniorconnect.com", city: "Oregon City", state: "OR",
      placementTargets: "",
      notes: "Listed in Oregon DHS registry",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(11), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Hand In Hand Senior Placement", email: "", phone: "503-484-7994; 503-655-2186",
      type: "placement-agent", organization: "Hand In Hand Senior Placement Agency", title: "Placement Agency",
      website: "handinhandseniorplacement.com", city: "West Linn", state: "OR",
      placementTargets: "",
      notes: "Cell listed in Oregon registry; directory lists office line",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(12), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },

    // --- Salem / Mid-Valley ---
    {
      id: generateId(), name: "Silver Linings Senior Care Advisors", email: "", phone: "503-508-3093",
      type: "placement-agent", organization: "Silver Linings Senior Care Advisors", title: "Advisor",
      website: "silverliningsseniorcareadvisors.com", city: "Salem", state: "OR",
      placementTargets: "",
      notes: "Phone/city listed in Oregon DHS registry",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(12), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "All Things Senior Care Advisors", email: "", phone: "971-209-8413; 503-930-5795; 503-422-3776",
      type: "placement-agent", organization: "All Things Senior Care Advisors", title: "Advisor",
      website: "allthingssenior.net", city: "Salem", state: "OR",
      placementTargets: "Assisted living; memory care; independent living; adult care homes",
      notes: "Multiple numbers listed in Oregon registry; public descriptions emphasize tours/assistance",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(13), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Assisted Living Solutions LLC", email: "", phone: "503-949-5707",
      type: "placement-agent", organization: "Assisted Living Solutions LLC", title: "Placement Agency",
      website: "ALsolutions.org", city: "Keizer", state: "OR",
      placementTargets: "",
      notes: "Listed in Oregon DHS registry",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(13), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Senior One Source", email: "", phone: "503-420-9011; 541-632-3504; 541-241-6661",
      type: "placement-agent", organization: "Senior One Source", title: "Placement Agency",
      website: "senioronesource.net", city: "Monmouth", state: "OR",
      placementTargets: "Broad senior living options (general)",
      notes: "Contact page lists region numbers including Corvallis/Albany and Bend/Redmond; county directory lists Monmouth PO Box",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(14), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },

    // --- Coast ---
    {
      id: generateId(), name: "Aging Wisely with Heartfelt Hands", email: "", phone: "541-265-8530",
      type: "placement-agent", organization: "Aging Wisely with Heartfelt Hands Inc", title: "Placement Agency",
      website: "agingwiselyoregon.org", city: "Newport", state: "OR",
      placementTargets: "",
      notes: "Listed in Oregon DHS registry",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(14), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },

    // --- Eugene / Southern Oregon ---
    {
      id: generateId(), name: "Adult Living Solutions", email: "", phone: "541-685-1533; 540-446-6537",
      type: "placement-agent", organization: "Adult Living Solutions", title: "Placement Agency",
      website: "adultlivingsolutions.com", city: "Veneta", state: "OR",
      placementTargets: "Adult care/placement into senior communities (general)",
      notes: "Official site: free consultation; mailing PO Box 576 Veneta",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(15), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "A Home To Fit You", email: "", phone: "541-954-2602",
      type: "placement-agent", organization: "A Home To Fit You", title: "Placement Advisor",
      website: "ahometofityou.com", city: "Eugene", state: "OR",
      placementTargets: "Independent living; assisted living; memory care; adult care home; nursing home",
      notes: "Site states serving Eugene/Springfield; phone and Eugene location shown",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(15), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Willow Care Consulting", email: "", phone: "541-852-3311",
      type: "placement-agent", organization: "Willow Care Consulting", title: "Owner / Consultant",
      website: "willowcareconsulting.com", city: "Eugene", state: "OR",
      placementTargets: "",
      notes: "Site states FREE consulting for Eugene/Springfield; owner named",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(16), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Senior Living 911", email: "", phone: "541-658-0686",
      type: "placement-agent", organization: "Senior Living 911", title: "Placement Agency",
      website: "seniorliving911.com", city: "Eugene", state: "OR",
      placementTargets: "",
      notes: "Contact page lists PO Box 24525 Eugene and hours Mon–Sun 9am–7pm",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(16), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },

    // --- SW Washington ---
    {
      id: generateId(), name: "CarePatrol of Vancouver/SW WA", email: "", phone: "360-907-9422",
      type: "placement-agent", organization: "CarePatrol", title: "Advisor – Heather Ashby",
      website: "carepatrol.com/vancouver-sw-washington", city: "Vancouver", state: "WA",
      placementTargets: "Assisted living; memory care; independent living; nursing homes; home care",
      notes: "Services at no cost",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(7), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Senior Placement Resources LLC", email: "", phone: "360-608-7808",
      type: "placement-agent", organization: "Senior Placement Resources LLC", title: "Advisor",
      website: "senior-placementresources.com", city: "Vancouver", state: "WA",
      placementTargets: "Retirement community; assisted living; adult family home",
      notes: "Official contact page lists advisor name, hours, and Portland/Vancouver coverage",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(8), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "A Caring Choice Placement Agency", email: "", phone: "360-910-2154",
      type: "placement-agent", organization: "A Caring Choice Placement Agency", title: "Placement Agency",
      website: "acaringchoiceagency.com", city: "Clark County", state: "WA",
      placementTargets: "",
      notes: "Listed in ASRPWA directory for Clark County; lead name listed",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(9), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Clark County Senior Resources", email: "", phone: "564-227-8847",
      type: "placement-agent", organization: "Clark County Senior Resources", title: "Placement Agency",
      website: "clarkcountyseniorresources.com", city: "Vancouver area", state: "WA",
      placementTargets: "",
      notes: "ASRPWA directory describes Vancouver/Portland-metro service coverage",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(10), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "Magnolia Senior Placement LLC", email: "", phone: "360-803-1420; 360-600-6026",
      type: "placement-agent", organization: "Magnolia Senior Placement LLC", title: "Placement Agency",
      website: "magnoliawa.com", city: "Vancouver area", state: "WA",
      placementTargets: "Adult family homes; assisted living; nursing homes; independent living",
      notes: "Official site lists 360-803-1420; directory listing shows 360-600-6026; treat official as primary",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(10), createdAt: daysAgo(0),
      score: 50, starred: false, verified: false, verifiedDate: null,
    },
  ];

  // =========================================================
  // Other sample contacts (executive directors, communities, etc.)
  // =========================================================
  const otherContacts: Contact[] = [
    {
      id: generateId(), name: "Robert Chen", email: "rchen@maplegroveAL.com", phone: "503-555-2301",
      type: "executive-director", organization: "Maple Grove Assisted Living", title: "Executive Director",
      website: "", city: "Lake Oswego", state: "OR",
      placementTargets: "",
      notes: "32-unit AL in Lake Oswego. Open to accepting our referrals. Tours welcomed.",
      stage: "active-partner", lastContacted: daysAgo(8), nextFollowUp: daysFromNow(6), createdAt: daysAgo(60),
      score: 85, starred: true, verified: true, verifiedDate: daysAgo(8),
    },
    {
      id: generateId(), name: "Linda Tran", email: "ltran@evergreenmc.com", phone: "503-555-2302",
      type: "executive-director", organization: "Evergreen Memory Care", title: "Director of Operations",
      website: "", city: "Portland", state: "OR",
      placementTargets: "",
      notes: "Specializes in memory care. Has current availability. Quick move-ins OK.",
      stage: "active-partner", lastContacted: daysAgo(22), nextFollowUp: daysFromNow(1), createdAt: daysAgo(45),
      score: 80, starred: false, verified: true, verifiedDate: daysAgo(22),
    },
    {
      id: generateId(), name: "Mark Johnson", email: "mjohnson@silverleafsenior.com", phone: "503-555-2303",
      type: "executive-director", organization: "Silver Leaf Senior Living", title: "Executive Director",
      website: "", city: "Portland", state: "OR",
      placementTargets: "",
      notes: "Large campus, IL/AL/MC. Met at OSLA conference. Interested in partnership.",
      stage: "meeting-set", lastContacted: daysAgo(3), nextFollowUp: daysFromNow(4), createdAt: daysAgo(10),
      score: 72, starred: false, verified: true, verifiedDate: daysAgo(3),
    },
    {
      id: generateId(), name: "Sunrise of Portland", email: "admissions@sunriseportland.com", phone: "503-555-3401",
      type: "community", organization: "Sunrise Senior Living", title: "Admissions Coordinator",
      website: "", city: "Portland", state: "OR",
      placementTargets: "",
      notes: "National chain. Portland location has 60 units. Accepts Medicaid waivers.",
      stage: "active-partner", lastContacted: daysAgo(14), nextFollowUp: daysFromNow(7), createdAt: daysAgo(100),
      score: 90, starred: true, verified: true, verifiedDate: daysAgo(14),
    },
    {
      id: generateId(), name: "Brookdale Beaverton", email: "community@brookdalebeaverton.com", phone: "503-555-3402",
      type: "community", organization: "Brookdale Senior Living", title: "Community Relations",
      website: "", city: "Beaverton", state: "OR",
      placementTargets: "",
      notes: "IL/AL community. Good reputation. Waitlist for some units.",
      stage: "active-partner", lastContacted: daysAgo(30), nextFollowUp: daysAgo(2), createdAt: daysAgo(80),
      score: 78, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "The Springs at Lake Oswego", email: "info@springslakeoswego.com", phone: "503-555-3403",
      type: "community", organization: "The Springs Living", title: "Sales Director",
      website: "", city: "Lake Oswego", state: "OR",
      placementTargets: "",
      notes: "Upscale community. Higher price point. Great for families with budget.",
      stage: "contacted", lastContacted: daysAgo(7), nextFollowUp: daysFromNow(14), createdAt: daysAgo(20),
      score: 70, starred: false, verified: true, verifiedDate: daysAgo(7),
    },
    {
      id: generateId(), name: "Patricia Williams", email: "pwilliams@gmail.com", phone: "503-555-4501",
      type: "family", organization: "", title: "Daughter of client",
      website: "", city: "Beaverton", state: "OR",
      placementTargets: "",
      notes: "Mom needs AL. Home in Beaverton, 3BR, needs minor work. Motivated.",
      stage: "new-lead", lastContacted: null, nextFollowUp: daysFromNow(0), createdAt: daysAgo(1),
      score: 85, starred: false, verified: false, verifiedDate: null,
    },
    {
      id: generateId(), name: "James Wilson", email: "jwilson@law-nw.com", phone: "503-555-5601",
      type: "attorney", organization: "Northwest Elder Law", title: "Elder Law Attorney",
      website: "", city: "Portland", state: "OR",
      placementTargets: "",
      notes: "Handles Medicaid planning. Refers families with real estate needs.",
      stage: "active-partner", lastContacted: daysAgo(10), nextFollowUp: daysFromNow(11), createdAt: daysAgo(70),
      score: 82, starred: false, verified: true, verifiedDate: daysAgo(10),
    },
  ];

  const stripForSeed = (c: Contact): SeedContact => {
    const { id, createdAt, ...rest } = c;
    return {
      ...rest,
      nextFollowUp: c.nextFollowUp ?? "",
    };
  };

  return dedupeSeedContacts([
    ...placementAgents.map(stripForSeed),
    ...USER_EXPANSION,
    ...ASRPWA_ADVISOR_SEED,
    ...IDAHO_PLACEMENT_SEED,
    ...COMMUNITY_SEED,
    ...ATTORNEY_SEED,
    ...PARTNER_DIRECTORY_IMPORT,
    ...otherContacts.map(stripForSeed),
  ]);
}

export function seedIfEmpty(): void {
  if (typeof window === "undefined") return;
  const versionStr = localStorage.getItem(SEED_VERSION_KEY);
  const parsedVersion = versionStr ? parseInt(versionStr, 10) : 0;
  if (parsedVersion >= CURRENT_SEED_VERSION) return;

  const today = new Date();
  const daysAgo = (n: number) => {
    const d = new Date(today);
    d.setDate(d.getDate() - n);
    return d.toISOString().split("T")[0];
  };
  const daysFromNow = (n: number) => {
    const d = new Date(today);
    d.setDate(d.getDate() + n);
    return d.toISOString().split("T")[0];
  };

  const canonical = buildCanonicalSeedRows(daysAgo, daysFromNow);
  const existing = getContacts();

  if (existing.length === 0) {
    const sampleContacts: Contact[] = canonical.map((row, i) => ({
      ...row,
      id: generateId(),
      createdAt: daysAgo((i % 90) + 1),
      nextFollowUp: row.nextFollowUp?.trim()
        ? row.nextFollowUp
        : daysFromNow((i % 18) + 2),
    }));

    localStorage.setItem(CONTACTS_KEY, JSON.stringify(sampleContacts));

    const findContactId = (needle: string) =>
      sampleContacts.find((c) => c.name.includes(needle))?.id ?? null;

    const sampleTasks: Task[] = [
      {
        id: generateId(),
        title: "Call Patricia Williams — new family lead",
        description: "Mom needs AL placement. Home in Beaverton. Reach out ASAP.",
        dueDate: daysFromNow(0),
        completed: false,
        contactId: findContactId("Patricia Williams"),
        priority: "high",
        createdAt: daysAgo(1),
      },
      {
        id: generateId(),
        title: "Re-engage Brookdale Beaverton",
        description: "Last contact was 30 days ago. Check on availability and pricing updates.",
        dueDate: daysAgo(2),
        completed: false,
        contactId: findContactId("Brookdale Beaverton"),
        priority: "high",
        createdAt: daysAgo(5),
      },
      {
        id: generateId(),
        title: "Begin outreach to Portland metro placement agents",
        description: "Prioritize verified placement partners; use networks column for placement focus.",
        dueDate: daysFromNow(1),
        completed: false,
        contactId: null,
        priority: "high",
        createdAt: daysAgo(0),
      },
      {
        id: generateId(),
        title: "Verify info for CarePatrol agencies",
        description: "Multiple CarePatrol territories (NE Portland, Beaverton, Portland South, Vancouver). Confirm advisors and phones.",
        dueDate: daysFromNow(3),
        completed: false,
        contactId: null,
        priority: "medium",
        createdAt: daysAgo(0),
      },
      {
        id: generateId(),
        title: "Tour at Silver Leaf with Mark Johnson",
        description: "Walk the campus. Discuss referral process.",
        dueDate: daysFromNow(4),
        completed: false,
        contactId: findContactId("Silver Leaf"),
        priority: "medium",
        createdAt: daysAgo(1),
      },
    ];

    localStorage.setItem(TASKS_KEY, JSON.stringify(sampleTasks));
  } else {
    const merged = mergeCanonicalIntoExistingContacts(
      canonical,
      daysFromNow,
      existing
    );
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(merged));
  }

  localStorage.setItem(SEED_VERSION_KEY, String(CURRENT_SEED_VERSION));
}

/**
 * Re-merge canonical directory rows from this app bundle into localStorage.
 * Run after a deploy (or any time) to pick up new seed data without clearing the CRM.
 * Preserves contact IDs and tasks; adds new orgs; enriches matches by website/phone/name key.
 */
export function syncDirectoryContactsFromBundle(): {
  previousCount: number;
  nextCount: number;
} {
  if (typeof window === "undefined") {
    return { previousCount: 0, nextCount: 0 };
  }
  const today = new Date();
  const daysAgo = (n: number) => {
    const d = new Date(today);
    d.setDate(d.getDate() - n);
    return d.toISOString().split("T")[0];
  };
  const daysFromNow = (n: number) => {
    const d = new Date(today);
    d.setDate(d.getDate() + n);
    return d.toISOString().split("T")[0];
  };
  const canonical = buildCanonicalSeedRows(daysAgo, daysFromNow);
  const existing = getContacts();
  const merged = mergeCanonicalIntoExistingContacts(
    canonical,
    daysFromNow,
    existing
  );
  localStorage.setItem(CONTACTS_KEY, JSON.stringify(merged));
  localStorage.setItem(SEED_VERSION_KEY, String(CURRENT_SEED_VERSION));
  return { previousCount: existing.length, nextCount: merged.length };
}

export function getCrmSeedVersion(): number {
  return CURRENT_SEED_VERSION;
}

/** Stable key for matching a contact across devices (website → phone → name). */
export function contactDedupeKey(contact: Contact): string {
  return seedDedupeKey(contactAsSeed(contact));
}

// --- Helpers ---

export const CONTACT_TYPE_LABELS: Record<ContactType, string> = {
  "placement-agent": "Placement Agent",
  "executive-director": "Executive Director",
  community: "Community",
  family: "Family",
  attorney: "Attorney",
  other: "Other",
};

export const STAGE_LABELS: Record<PipelineStage, string> = {
  "new-lead": "New Lead",
  contacted: "Contacted",
  "meeting-set": "Meeting Set",
  proposal: "Proposal",
  "active-partner": "Active Partner",
  inactive: "Inactive",
};

export const STAGE_COLORS: Record<PipelineStage, string> = {
  "new-lead": "bg-blue-500",
  contacted: "bg-yellow-500",
  "meeting-set": "bg-purple-500",
  proposal: "bg-orange-500",
  "active-partner": "bg-green-500",
  inactive: "bg-gray-500",
};

export function getDaysSince(dateStr: string | null): number | null {
  if (!dateStr) return null;
  const diff = Date.now() - new Date(dateStr).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export function isOverdue(dateStr: string | null): boolean {
  if (!dateStr) return false;
  return new Date(dateStr) < new Date(new Date().toISOString().split("T")[0]);
}
