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

function seedDedupeKey(c: SeedContact): string {
  const w = websiteDedupeKey(c.website);
  if (w) return `w:${w}`;
  const digits = (c.phone.split(";")[0] ?? "").replace(/\D/g, "");
  if (digits.length >= 10) return `p:${digits.slice(-10)}`;
  return `n:${c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 96)}`;
}

function mergeSeedContacts(
  existing: SeedContact,
  incoming: SeedContact
): SeedContact {
  return {
    ...existing,
    name:
      incoming.name.length > existing.name.length ? incoming.name : existing.name,
    phone: mergePhones(existing.phone, incoming.phone),
    notes: [existing.notes, incoming.notes].filter(Boolean).join(" | "),
    placementTargets:
      (existing.placementTargets?.length ?? 0) >=
      (incoming.placementTargets?.length ?? 0)
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

function daysAgo(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().split("T")[0];
}

function daysFromNow(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().split("T")[0];
}

function rawPlacementAgents(): SeedContact[] {
  const strip = (c: {
    name: string;
    email: string;
    phone: string;
    type: SeedContact["type"];
    organization: string;
    title: string;
    notes: string;
    website: string;
    city: string;
    state: string;
    placementTargets: string;
    stage: SeedContact["stage"];
    lastContacted: string | null;
    nextFollowUp: string;
    score: number;
    starred: boolean;
    verified: boolean;
    verifiedDate: string | null;
  }): SeedContact => c;

  return [
    strip({
      name: "Adult Placement Network",
      email: "",
      phone: "503-659-2029; 503-684-4455",
      type: "placement-agent",
      organization: "Adult Placement Network",
      title: "Referral & Placement Agency",
      website: "adultplacementnetwork.com",
      city: "Lake Oswego",
      state: "OR",
      placementTargets:
        "Independent living; assisted living; adult care homes; memory care; skilled care; hospice",
      notes:
        "No-cost referral & placement; serves Portland metro; PO Box 1106 Lake Oswego",
      stage: "new-lead",
      lastContacted: null,
      nextFollowUp: daysFromNow(3),
      score: 50,
      starred: false,
      verified: false,
      verifiedDate: null,
    }),
    strip({
      name: "All About Seniors Inc",
      email: "",
      phone: "503-659-1410",
      type: "placement-agent",
      organization: "All About Seniors Inc",
      title: "Placement Agency",
      website: "allaboutseniorsinc.com",
      city: "Milwaukie",
      state: "OR",
      placementTargets: "",
      notes:
        "PO Box address; phone verified via Oregon registry + official contact page",
      stage: "new-lead",
      lastContacted: null,
      nextFollowUp: daysFromNow(3),
      score: 50,
      starred: false,
      verified: false,
      verifiedDate: null,
    }),
  ];
}

function rawOtherContacts(): SeedContact[] {
  return [
    {
      name: "Robert Chen",
      email: "rchen@maplegroveAL.com",
      phone: "503-555-2301",
      type: "executive-director",
      organization: "Maple Grove Assisted Living",
      title: "Executive Director",
      website: "",
      city: "Lake Oswego",
      state: "OR",
      placementTargets: "",
      notes:
        "32-unit AL in Lake Oswego. Open to accepting our referrals. Tours welcomed.",
      stage: "active-partner",
      lastContacted: daysAgo(8),
      nextFollowUp: daysFromNow(6),
      score: 85,
      starred: true,
      verified: true,
      verifiedDate: daysAgo(8),
    },
    {
      name: "Linda Tran",
      email: "ltran@evergreenmc.com",
      phone: "503-555-2302",
      type: "executive-director",
      organization: "Evergreen Memory Care",
      title: "Director of Operations",
      website: "",
      city: "Portland",
      state: "OR",
      placementTargets: "",
      notes:
        "Specializes in memory care. Has current availability. Quick move-ins OK.",
      stage: "active-partner",
      lastContacted: daysAgo(22),
      nextFollowUp: daysFromNow(1),
      score: 80,
      starred: false,
      verified: true,
      verifiedDate: daysAgo(22),
    },
    {
      name: "Mark Johnson",
      email: "mjohnson@silverleafsenior.com",
      phone: "503-555-2303",
      type: "executive-director",
      organization: "Silver Leaf Senior Living",
      title: "Executive Director",
      website: "",
      city: "Portland",
      state: "OR",
      placementTargets: "",
      notes:
        "Large campus, IL/AL/MC. Met at OSLA conference. Interested in partnership.",
      stage: "meeting-set",
      lastContacted: daysAgo(3),
      nextFollowUp: daysFromNow(4),
      score: 72,
      starred: false,
      verified: true,
      verifiedDate: daysAgo(3),
    },
    {
      name: "Sunrise of Portland",
      email: "admissions@sunriseportland.com",
      phone: "503-555-3401",
      type: "community",
      organization: "Sunrise Senior Living",
      title: "Admissions Coordinator",
      website: "",
      city: "Portland",
      state: "OR",
      placementTargets: "",
      notes:
        "National chain. Portland location has 60 units. Accepts Medicaid waivers.",
      stage: "active-partner",
      lastContacted: daysAgo(14),
      nextFollowUp: daysFromNow(7),
      score: 90,
      starred: true,
      verified: true,
      verifiedDate: daysAgo(14),
    },
    {
      name: "Brookdale Beaverton",
      email: "community@brookdalebeaverton.com",
      phone: "503-555-3402",
      type: "community",
      organization: "Brookdale Senior Living",
      title: "Community Relations",
      website: "",
      city: "Beaverton",
      state: "OR",
      placementTargets: "",
      notes: "IL/AL community. Good reputation. Waitlist for some units.",
      stage: "active-partner",
      lastContacted: daysAgo(30),
      nextFollowUp: daysAgo(2),
      score: 78,
      starred: false,
      verified: false,
      verifiedDate: null,
    },
    {
      name: "The Springs at Lake Oswego",
      email: "info@springslakeoswego.com",
      phone: "503-555-3403",
      type: "community",
      organization: "The Springs Living",
      title: "Sales Director",
      website: "",
      city: "Lake Oswego",
      state: "OR",
      placementTargets: "",
      notes:
        "Upscale community. Higher price point. Great for families with budget.",
      stage: "contacted",
      lastContacted: daysAgo(7),
      nextFollowUp: daysFromNow(14),
      score: 70,
      starred: false,
      verified: true,
      verifiedDate: daysAgo(7),
    },
    {
      name: "Patricia Williams",
      email: "pwilliams@gmail.com",
      phone: "503-555-4501",
      type: "family",
      organization: "",
      title: "Daughter of client",
      website: "",
      city: "Beaverton",
      state: "OR",
      placementTargets: "",
      notes:
        "Mom needs AL. Home in Beaverton, 3BR, needs minor work. Motivated.",
      stage: "new-lead",
      lastContacted: null,
      nextFollowUp: daysFromNow(0),
      score: 85,
      starred: false,
      verified: false,
      verifiedDate: null,
    },
    {
      name: "James Wilson",
      email: "jwilson@law-nw.com",
      phone: "503-555-5601",
      type: "attorney",
      organization: "Northwest Elder Law",
      title: "Elder Law Attorney",
      website: "",
      city: "Portland",
      state: "OR",
      placementTargets: "",
      notes:
        "Handles Medicaid planning. Refers families with real estate needs.",
      stage: "active-partner",
      lastContacted: daysAgo(10),
      nextFollowUp: daysFromNow(11),
      score: 82,
      starred: false,
      verified: true,
      verifiedDate: daysAgo(10),
    },
  ];
}

/**
 * Build all seed contacts in snake_case format ready for Supabase insert.
 */
export function buildCanonicalSeedContacts() {
  const agents = rawPlacementAgents();
  const others = rawOtherContacts();

  const canonical = dedupeSeedContacts([
    ...agents,
    ...USER_EXPANSION,
    ...ASRPWA_ADVISOR_SEED,
    ...IDAHO_PLACEMENT_SEED,
    ...COMMUNITY_SEED,
    ...ATTORNEY_SEED,
    ...PARTNER_DIRECTORY_IMPORT,
    ...others,
  ]);

  return canonical.map((c, i) => ({
    name: c.name,
    email: c.email,
    phone: c.phone,
    type: c.type,
    organization: c.organization,
    title: c.title,
    notes: c.notes,
    website: c.website,
    city: c.city,
    state: c.state,
    placement_targets: c.placementTargets,
    stage: c.stage,
    last_contacted: c.lastContacted || null,
    next_follow_up: c.nextFollowUp?.trim() || daysFromNow((i % 18) + 2),
    score: c.score,
    starred: c.starred,
    verified: c.verified,
    verified_date: c.verifiedDate || null,
  }));
}
