import { stripWebsiteProtocol } from "./website-utils";

export type SeedContact = {
  name: string;
  email: string;
  phone: string;
  type:
    | "placement-agent"
    | "executive-director"
    | "community"
    | "family"
    | "attorney"
    | "other";
  organization: string;
  title: string;
  notes: string;
  website: string;
  city: string;
  state: string;
  placementTargets: string;
  stage:
    | "new-lead"
    | "contacted"
    | "meeting-set"
    | "proposal"
    | "active-partner"
    | "inactive";
  lastContacted: string | null;
  nextFollowUp: string;
  score: number;
  starred: boolean;
  verified: boolean;
  verifiedDate: string | null;
};

const P = (
  partial: Omit<
    SeedContact,
    | "stage"
    | "lastContacted"
    | "nextFollowUp"
    | "score"
    | "starred"
    | "verified"
    | "verifiedDate"
    | "email"
    | "type"
    | "organization"
    | "title"
    | "placementTargets"
  > & {
    email?: string;
    type?: SeedContact["type"];
    organization?: string;
    title?: string;
    placementTargets?: string;
    stage?: SeedContact["stage"];
    score?: number;
    starred?: boolean;
    verified?: boolean;
    verifiedDate?: string | null;
    lastContacted?: string | null;
  }
): SeedContact => ({
  email: partial.email ?? "",
  type: partial.type ?? "placement-agent",
  title: partial.title ?? "",
  organization: partial.organization ?? partial.name,
  stage: partial.stage ?? "new-lead",
  lastContacted: partial.lastContacted ?? null,
  nextFollowUp: "",
  score: partial.score ?? 50,
  starred: partial.starred ?? false,
  verified: partial.verified ?? false,
  verifiedDate: partial.verifiedDate ?? null,
  name: partial.name,
  phone: partial.phone,
  website: partial.website ?? "",
  city: partial.city,
  state: partial.state,
  placementTargets: partial.placementTargets ?? "",
  notes: partial.notes ?? "",
});

/** New / updated rows — duplicates merge with legacy via website or primary phone */
export const USER_EXPANSION: SeedContact[] = [
  P({
    name: "1st CHOICE Advisory Services, Inc.",
    phone: "425-405-8252; 800-361-0138; 503-730-0442",
    website: "choiceadvisory.com",
    city: "Portland",
    state: "OR",
    placementTargets: "",
    notes:
      "Senior placement/referral; no-charge positioning stated publicly; serves multiple WA/OR markets; lead advisor: Liz Campbell.",
    title: "Lead advisor: Liz Campbell",
  }),
  P({
    name: "CarePatrol — Beaverton / NW Portland",
    organization: "CarePatrol",
    phone: "503-747-7492",
    website: "carepatrol.com/beaverton",
    city: "Beaverton",
    state: "OR",
    placementTargets: "",
    notes:
      "Senior placement/advisory; OSRAA directory lists service counties; advisor Benjamin Frogel; services at no cost.",
    title: "Advisor — Benjamin Frogel",
  }),
  P({
    name: "Kairos Senior Referral & Resources, LLC",
    phone: "971-266-9115",
    website: "kairossenior.com",
    city: "Portland",
    state: "OR",
    notes: "Senior placement/referral; Oregon-required disclosure/certificate referenced on site.",
  }),
  P({
    name: "NestRight Senior Referral Services",
    phone: "207-841-5352",
    website: "nestrightsenior.com",
    city: "Portland",
    state: "OR",
    notes: "Senior referral; serves OR and WA; lead advisor: Rebecca Loring.",
    title: "Lead advisor: Rebecca Loring",
  }),
  P({
    name: "Aging Guardians LLC",
    phone: "319-429-8611; 970-309-4822",
    website: "agingguardians.com",
    city: "Portland",
    state: "OR",
    notes:
      "Senior placement; Oregon registry listing via LTCR search snippets; brochure lists additional phone.",
  }),
  P({
    name: "A Home To Fit You",
    phone: "541-954-2602",
    website: "ahometofityou.com",
    city: "Eugene",
    state: "OR",
    placementTargets:
      "Independent living; assisted living; memory care; adult care home; nursing home",
    notes:
      "Serves Eugene/Springfield; OSRAA directory lists Lane County service; Retirement Connection / official site.",
  }),
  P({
    name: "Integrity Senior Living Advisors LLC",
    phone: "503-354-9635; 503-217-4097",
    website: "integritysenioradvisor.com",
    city: "Canby",
    state: "OR",
    placementTargets: "Assisted living; memory care; adult care homes",
    notes:
      "Disclosure address 358 NW 1st Ave STE 5 Canby; appears in OSRAA directory and Oregon LTCR search snippets.",
  }),
  P({
    name: "A Caring Choice Agency",
    phone: "360-910-2154; 360-521-6812",
    website: "acaringchoiceagency.com",
    city: "Vancouver",
    state: "WA",
    notes:
      "Senior referral/placement; free referrals positioning; ASRPWA directory; BBB profile available.",
  }),
  P({
    name: "Clark County Senior Resources",
    phone: "564-227-8847",
    website: "clarkcountyseniorresources.com",
    city: "Vancouver",
    state: "WA",
    notes:
      "Senior placement/advocacy; hours publicly listed; ASRPWA and Oregon LTCR search snippets; Vancouver/Portland-metro coverage.",
  }),
  P({
    name: "Calm Harbor Placements",
    phone: "206-619-3457",
    website: "calmharborplacements.com",
    city: "Issaquah",
    state: "WA",
    notes: "Elder placement services; Issaquah; contact page lists phone.",
  }),
  P({
    name: "CayCare, Inc.",
    phone: "253-414-7337; 253-777-3804; 844-582-7767",
    website: "caycare.com",
    city: "Puyallup",
    state: "WA",
    notes: "Care navigation/placement; multiple numbers publicly listed; RN support noted in directory materials.",
  }),
  P({
    name: "Boise Care Connections",
    email: "charity@boisecareconnections.com",
    phone: "208-917-3776",
    website: "boisecareconnections.com",
    city: "Boise",
    state: "ID",
    placementTargets:
      "Treasure Valley; independent living; assisted living; memory care; certified family homes",
    notes:
      "Nurse-led senior housing placement; no charge to families; lead advisors Charity Young, RN, BSN and Jennifer Smith (per official site).",
    title: "Charity Young, RN, BSN",
  }),
  P({
    name: "Grannie On The Move",
    phone: "208-820-4200",
    website: "grannieonthemove.com",
    city: "",
    state: "ID",
    notes: "Senior living coordination; site positions assistance as no cost.",
  }),
  P({
    name: "Gentle Hands Living Solutions",
    phone: "208-284-3933",
    website: "gentlehandsliving.com",
    city: "",
    state: "ID",
    notes:
      "Senior placement guidance (assisted living, memory care, certified family homes) per site.",
  }),
  P({
    name: "AgeWell Connections",
    phone: "208-244-0040",
    website: "agewellconnections.com",
    city: "Idaho Falls",
    state: "ID",
    notes: "Resource navigation and placement-related support; address and phone on site.",
  }),
];

const PARTNER_DIR = "Partner directory import";

function normPhoneUs(raw: string): string {
  const t = raw.trim();
  if (!t) return "";
  const digits = t.replace(/\D/g, "");
  if (digits.length < 10) return t.replace(/[()]/g, " ").trim();
  const core =
    digits.length >= 11 && digits.startsWith("1")
      ? digits.slice(-10)
      : digits.slice(-10);
  return `${core.slice(0, 3)}-${core.slice(3, 6)}-${core.slice(6)}`;
}

/** User-supplied partner list; merges with existing rows via website / phone / name keys. */
const Q = (o: {
  name: string;
  category: string;
  city: string;
  state: string;
  phone: string;
  website: string;
  notes: string;
  type?: SeedContact["type"];
  organization?: string;
}): SeedContact => {
  const note = o.notes.trim()
    ? `${PARTNER_DIR} [${o.category}]. ${o.notes.trim()}`
    : `${PARTNER_DIR} [${o.category}].`;
  const inferred: SeedContact["type"] =
    o.category === "Placement"
      ? "placement-agent"
      : o.category === "Facility"
        ? "community"
        : "other";
  return P({
    name: o.name,
    type: o.type ?? inferred,
    organization: o.organization ?? o.name,
    city: o.city.trim(),
    state: o.state.trim(),
    phone: normPhoneUs(o.phone),
    website: o.website.trim() ? stripWebsiteProtocol(o.website) : "",
    notes: note,
  });
};

export const PARTNER_DIRECTORY_IMPORT: SeedContact[] = [
  Q({
    name: "A Caring Choice Placement Agency",
    category: "Placement",
    city: "Vancouver",
    state: "WA",
    phone: "(360) 910-2154",
    website: "https://acaringchoiceagency.com",
    notes: "Owner: Claudia",
  }),
  Q({
    name: "Adult Placement Network",
    category: "Placement",
    city: "Lake Oswego",
    state: "OR",
    phone: "",
    website: "",
    notes: "",
  }),
  Q({
    name: "Care And Keeping LLC",
    category: "Home Care",
    city: "Beaverton",
    state: "OR",
    phone: "",
    website: "https://careandkeeping.com",
    notes: "Listed as home care in partner directory; also known as Care and Keeping (placement/senior services).",
    organization: "Care and Keeping LLC",
  }),
  Q({
    name: "Homestead Senior Placement",
    category: "Placement",
    city: "Vancouver",
    state: "WA",
    phone: "(503) 481-1955",
    website: "",
    notes: "",
  }),
  Q({
    name: "Providing Senior Living Moving",
    category: "Consultant",
    city: "Portland",
    state: "OR",
    phone: "",
    website: "",
    notes: "Senior living move / transition consulting.",
  }),
  Q({
    name: "Agape Senior Placement LLC",
    category: "Placement",
    city: "Vancouver",
    state: "WA",
    phone: "",
    website: "",
    notes:
      "Clark County / SW WA; no URL in source — kept separate from Seattle-area Agape Care Placement Agency (different site/phone).",
  }),
  Q({
    name: "Just Like Family Senior Placement",
    category: "Placement",
    city: "Happy Valley",
    state: "OR",
    phone: "(503) 984-6531",
    website: "",
    notes: "",
  }),
  Q({
    name: "Golden Placement Services LLC",
    category: "Placement",
    city: "Portland",
    state: "OR",
    phone: "(503) 723-7145",
    website: "https://goldenplacements.com",
    notes: "",
  }),
  Q({
    name: "Magnolia Senior Placement LLC",
    category: "Placement",
    city: "Camas",
    state: "WA",
    phone: "(360) 803-1420",
    website: "https://magnoliawa.com",
    notes: "",
  }),
  Q({
    name: "Oasis Senior Advisors — SW Washington",
    category: "Placement",
    city: "Vancouver",
    state: "WA",
    phone: "(360) 339-8710",
    website: "",
    notes:
      "Source: “Oasis Senior Advisors Portland” + Vancouver WA phone + oasissenioradvisors.com — no website path in source; keyed by phone to avoid merging Portland/Puget offices.",
    organization: "Oasis Senior Advisors",
  }),
  Q({
    name: "Helping Hands for Seniors",
    category: "Facility",
    city: "Portland",
    state: "OR",
    phone: "(503) 746-4740",
    website: "https://helpinghandspdx.com",
    notes: "Directory category Facility; operates as placement / referral.",
    type: "placement-agent",
    organization: "Helping Hands for Seniors",
  }),
  Q({
    name: "Clark County Senior Resources",
    category: "Organization",
    city: "Vancouver",
    state: "WA",
    phone: "(564) 227-8847",
    website: "https://clarkcountyseniorresources.com",
    notes: "",
    type: "placement-agent",
  }),
  Q({
    name: "Mt. Hood Senior Solutions",
    category: "Placement",
    city: "Gresham",
    state: "OR",
    phone: "",
    website: "https://mthoodseniorsolutions.com",
    notes: "",
  }),
  Q({
    name: "Freestone Senior Connect LLC",
    category: "Placement",
    city: "Oregon City",
    state: "OR",
    phone: "(425) 417-1610",
    website: "https://freestoneseniorconnect.com",
    notes: "Additional published number; merges with 425-691-8793 on same site.",
  }),
  Q({
    name: "Hand In Hand Senior Placement",
    category: "Placement",
    city: "West Linn",
    state: "OR",
    phone: "",
    website: "https://handinhandseniorplacement.com",
    notes: "",
  }),
  Q({
    name: "Senior Care with Family Values",
    category: "Home Care",
    city: "",
    state: "WA",
    phone: "(360) 984-7700",
    website: "",
    notes: "State inferred from 360 area code; confirm city.",
  }),
  Q({
    name: "PNW Aging Specialty Services",
    category: "Home Care",
    city: "Vancouver",
    state: "WA",
    phone: "(360) 883-3569",
    website: "",
    notes: "",
  }),
  Q({
    name: "AAADSW",
    category: "Organization",
    city: "Vancouver",
    state: "WA",
    phone: "(360) 735-5720",
    website: "",
    notes: "Area Agency on Aging / aging network partner; confirm full legal name and URL.",
  }),
  Q({
    name: "Elder Village Consulting",
    category: "Placement",
    city: "",
    state: "",
    phone: "(888) 410-0943",
    website: "",
    notes: "Toll-free / multi-market; verify local footprint.",
  }),
  Q({
    name: "Senior Placement Services LLC",
    category: "Placement",
    city: "",
    state: "",
    phone: "(205) 913-3902",
    website: "",
    notes: "Non-local area code; possible national call center — verify before outreach.",
  }),
  Q({
    name: "CarePatrol of Vancouver / SW Washington",
    category: "Placement",
    city: "Vancouver",
    state: "WA",
    phone: "(360) 907-9422",
    website: "https://carepatrol.com/vancouver-sw-washington",
    notes: "Same office as directory “CarePatrol of Vancouver” (carepatrol.com/vancouver).",
    organization: "CarePatrol",
  }),
  Q({
    name: "Senior Living Placements",
    category: "Placement",
    city: "",
    state: "CA",
    phone: "(310) 874-1155",
    website: "",
    notes: "Southern CA area code; likely non-local — verify.",
  }),
  Q({
    name: "Senior Helpers",
    category: "Home Care",
    city: "Vancouver",
    state: "WA",
    phone: "(360) 323-2769",
    website: "",
    notes: "",
  }),
  Q({
    name: "Neighborly Senior Placement",
    category: "Placement",
    city: "",
    state: "",
    phone: "(866) 744-1417",
    website: "",
    notes: "Toll-free franchise / network line.",
  }),
  Q({
    name: "Kairos Senior Referral & Resources, LLC",
    category: "Placement",
    city: "Portland",
    state: "OR",
    phone: "(971) 266-9115",
    website: "https://kairossenior.com",
    notes: "",
  }),
  Q({
    name: "Green Haven Home Care LLC",
    category: "Home Care",
    city: "Vancouver",
    state: "WA",
    phone: "(360) 719-2709",
    website: "",
    notes: "",
  }),
  Q({
    name: "Senior Placement Providers",
    category: "Facility",
    city: "",
    state: "",
    phone: "(888) 246-2901",
    website: "",
    notes: "Toll-free listing; directory marked Facility — likely referral network.",
    type: "other",
  }),
  Q({
    name: "Amada Senior Care",
    category: "Home Care",
    city: "Vancouver",
    state: "WA",
    phone: "(360) 952-3100",
    website: "",
    notes: "",
  }),
  Q({
    name: "Carelink Placement",
    category: "Placement",
    city: "Portland",
    state: "OR",
    phone: "(503) 878-2040",
    website: "",
    notes: "",
  }),
  Q({
    name: "Comfort Keepers",
    category: "Home Care",
    city: "Vancouver",
    state: "WA",
    phone: "(360) 218-2081",
    website: "",
    notes: "Franchise location; add territory-specific URL if known.",
  }),
  Q({
    name: "A & A Citizens Senior Placement",
    category: "Placement",
    city: "Vancouver",
    state: "WA",
    phone: "(360) 771-2048",
    website: "",
    notes: "",
  }),
  Q({
    name: "All About Seniors Inc",
    category: "Facility",
    city: "Milwaukie",
    state: "OR",
    phone: "(503) 659-1410",
    website: "https://allaboutseniorsinc.com",
    notes: "Directory category Facility; operates as placement agency.",
    type: "placement-agent",
  }),
  Q({
    name: "Assurety Senior Care",
    category: "Placement",
    city: "Vancouver",
    state: "WA",
    phone: "(360) 254-3278",
    website: "",
    notes: "",
  }),
  Q({
    name: "Elder Options",
    category: "Placement",
    city: "Vancouver",
    state: "WA",
    phone: "(360) 696-5920",
    website: "",
    notes: "",
  }),
  Q({
    name: "Care Solutions LLC",
    category: "Facility",
    city: "Portland",
    state: "OR",
    phone: "(503) 548-7312",
    website: "https://caresolutionsnw.com",
    notes: "Source label Care Solutions LLC Senior Living / Facility; core business is senior living advisory.",
    type: "placement-agent",
  }),
  Q({
    name: "Aging Well AFH LLC",
    category: "Facility",
    city: "Vancouver",
    state: "WA",
    phone: "(360) 883-3459",
    website: "",
    notes: "Adult family home.",
  }),
  Q({
    name: "Senior Connections",
    category: "Home Care",
    city: "Vancouver",
    state: "WA",
    phone: "(360) 253-4912",
    website: "",
    notes: "",
  }),
  Q({
    name: "Portland Senior Care Advisors",
    category: "Placement",
    city: "Lake Oswego",
    state: "OR",
    phone: "(503) 902-2591",
    website: "https://www.portlandseniorcareadvisors.com",
    notes: "",
  }),
  Q({
    name: "Precious Moments Adult Home Care LLC",
    category: "Home Care",
    city: "Vancouver",
    state: "WA",
    phone: "(360) 984-3914",
    website: "",
    notes: "",
  }),
  Q({
    name: "Angel Senior Care LLC — Adult Family Home",
    category: "Facility",
    city: "Vancouver",
    state: "WA",
    phone: "(360) 616-1759",
    website: "",
    notes: "",
  }),
  Q({
    name: "Home Instead",
    category: "Home Care",
    city: "Hillsboro",
    state: "OR",
    phone: "(971) 930-8626",
    website: "",
    notes: "Hillsboro / west metro franchise; add local URL if known.",
  }),
  Q({
    name: "Silver Age Advisors",
    category: "Placement",
    city: "Seattle",
    state: "WA",
    phone: "(206) 669-7191",
    website: "https://silveragecare.com",
    notes: "Source label Silver Age Senior Living Advisors; merges with ASRPWA listing.",
  }),
  Q({
    name: "Cohen Caregiving Support Company",
    category: "Home Care",
    city: "Tualatin",
    state: "OR",
    phone: "(503) 522-8320",
    website: "",
    notes: "",
  }),
  Q({
    name: "Aging Advisors",
    category: "Placement",
    city: "Lake Oswego",
    state: "OR",
    phone: "(503) 953-5827",
    website: "",
    notes: "",
  }),
  Q({
    name: "A Place To Call Home I",
    category: "Facility",
    city: "Vancouver",
    state: "WA",
    phone: "(360) 558-3750",
    website: "",
    notes: "Residential care / AFH style; verify license name.",
  }),
  Q({
    name: "Golden Age Home Care",
    category: "Home Care",
    city: "Battle Ground",
    state: "WA",
    phone: "(360) 723-0815",
    website: "",
    notes: "",
  }),
  Q({
    name: "Autumn of Life Senior Housing",
    category: "Facility",
    city: "Oak Grove",
    state: "OR",
    phone: "(503) 701-5054",
    website: "https://autumnoflife.net",
    notes: "Directory category Facility; registry lists as advisory / placement operator.",
    type: "placement-agent",
  }),
  Q({
    name: "Premier Senior Placement",
    category: "Placement",
    city: "",
    state: "PA",
    phone: "(610) 674-0278",
    website: "",
    notes: "Eastern PA area code — likely non-local; verify.",
  }),
  Q({
    name: "Integrity Senior Placement",
    category: "Placement",
    city: "",
    state: "AZ",
    phone: "(480) 271-7759",
    website: "",
    notes: "Not Integrity Senior Living Advisors (Canby, OR); AZ-area phone — separate org.",
  }),
  Q({
    name: "Assured Care Adult Family Home LLC",
    category: "Facility",
    city: "Vancouver",
    state: "WA",
    phone: "(360) 909-2737",
    website: "",
    notes: "",
  }),
  Q({
    name: "Dwell Care",
    category: "Home Care",
    city: "Portland",
    state: "OR",
    phone: "(503) 388-9650",
    website: "",
    notes: "",
  }),
  Q({
    name: "Sage Senior Care Advisors",
    category: "Placement",
    city: "Vancouver",
    state: "WA",
    phone: "(360) 349-8564",
    website: "",
    notes: "Not SAGE Senior Network (King/Snohomish); SW WA phone.",
  }),
  Q({
    name: "Lighthouse Adult and Senior Placement",
    category: "Placement",
    city: "Seattle",
    state: "WA",
    phone: "(206) 920-0000",
    website: "",
    notes: "",
  }),
];

/** Major Idaho senior placement / advisory lines (franchise + local); merges by website/phone. */
export const IDAHO_PLACEMENT_SEED: SeedContact[] = [
  P({
    name: "CarePatrol of The Treasure Valley",
    organization: "CarePatrol",
    phone: "208-944-7770",
    website: "carepatrol.com/the-treasure-valley",
    city: "Boise",
    state: "ID",
    placementTargets:
      "Boise, Nampa, Meridian, Eagle, Kuna, Caldwell, Mountain Home; IL, AL, memory care, nursing, in-home, respite",
    title: "Brooke Thomsen — Certified Senior Advisor",
    notes:
      "No-cost senior care advisory; official CarePatrol Treasure Valley territory (carepatrol.com/the-treasure-valley).",
  }),
  P({
    name: "CarePatrol of Northern Idaho",
    organization: "CarePatrol",
    phone: "208-418-1144",
    website: "carepatrol.com/northern-idaho",
    city: "Coeur d'Alene",
    state: "ID",
    placementTargets: "North Idaho / Inland Northwest; IL, AL, memory care, nursing, in-home, respite",
    title: "Jaymie Bickford — Certified Senior Advisor (CSA)",
    notes:
      "No-cost advisory; Coeur d'Alene–based territory per CarePatrol Northern Idaho site.",
  }),
  P({
    name: "Oasis Senior Advisors — SW Idaho",
    organization: "Oasis Senior Advisors",
    phone: "208-261-1307; 208-229-4070",
    website: "oasissenioradvisors.com/locations/sw-idaho",
    city: "Boise",
    state: "ID",
    placementTargets:
      "Boise, Meridian, Nampa, Caldwell, Eagle, Kuna, Star, Middleton, Emmett, Garden City, Greenleaf, Notus, Letha",
    title: "Jennifer Smith — Senior Living Advisor",
    notes:
      "Free senior living referral / placement for SW Idaho (oasissenioradvisors.com/locations/sw-idaho); secondary listing phone 208-229-4070 (directory).",
  }),
  P({
    name: "Eden Senior Care",
    phone: "208-586-1478",
    website: "edenseniorcare.net",
    city: "Boise",
    state: "ID",
    placementTargets: "Assisted living; memory care; independent living; certified family homes",
    notes:
      "Free placement / senior living advisory; Boise-based (edenseniorcare.net).",
  }),
];

const ASRPWA_NOTE =
  "Senior Housing Advisor listing — ASRPWA directory (https://asrpwa.org/member-list).";

/**
 * Washington ASRP primary members: enriches existing rows by website/phone merge, adds missing advisors.
 */
export const ASRPWA_ADVISOR_SEED: SeedContact[] = [
  P({
    name: "1st CHOICE Advisory Services, Inc.",
    email: "lizm@choiceadvisory.com",
    phone: "425-405-8252",
    website: "choiceadvisory.com",
    city: "Portland",
    state: "OR",
    placementTargets: "King and Snohomish County, WA",
    title: "Lead advisor: Liz Campbell",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "A Caring Choice Placement Agency",
    email: "claudia@acaringchoiceagency.com",
    phone: "360-910-2154",
    website: "acaringchoiceagency.com",
    city: "Vancouver",
    state: "WA",
    placementTargets: "Clark County, WA",
    title: "Claudia Belindian",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "Clark County Senior Resources",
    email: "shannon@clarkcountysr.com",
    phone: "564-227-8847",
    website: "clarkcountyseniorresources.com",
    city: "Vancouver",
    state: "WA",
    placementTargets: "Greater Seattle (per ASRPWA listing); Vancouver / Portland metro focus",
    title: "Shannon Calles",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "Calm Harbor Placements",
    email: "nancy@calmharborplacements.com",
    phone: "206-619-3457",
    website: "calmharborplacements.com",
    city: "Issaquah",
    state: "WA",
    placementTargets: "Pierce, King, Kitsap, Spokane Counties",
    title: "Nancy Haberman, RN",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "CayCare, Inc.",
    email: "lisa@caycare.com",
    phone: "253-414-7337",
    website: "caycare.com",
    city: "Puyallup",
    state: "WA",
    placementTargets: "Vancouver, WA (La Center–Washougal); Portland metro",
    title: "Lisa Doyle, RN",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "1st Place Senior Housing",
    email: "linda@1stplaceseniorhousing.com",
    phone: "425-446-9943",
    website: "1stplaceseniorhousing.com",
    city: "Vancouver",
    state: "WA",
    placementTargets: "Clark County, WA",
    title: "Linda Asaif",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "A1 Senior Advisors",
    email: "A1CareAdvisors@gmail.com",
    phone: "425-324-5592",
    website: "a1seniorcareadvisors.com",
    city: "Seattle",
    state: "WA",
    placementTargets: "Western Washington",
    title: "Tibi Botocan",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "Agape Care Placement Agency",
    email: "agapecareplacementagency@gmail.com",
    phone: "425-540-6178",
    website: "agapecareplacementagency.com",
    city: "Seattle",
    state: "WA",
    placementTargets: "Greater Seattle; King and Snohomish Counties",
    title: "Santa K Tekleyes",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "Alderwood Senior Care Advisory",
    email: "alderwoodscas@gmail.com",
    phone: "206-475-1551",
    website: "ascas.net",
    city: "Mount Vernon",
    state: "WA",
    placementTargets: "Skagit, Whatcom and Snohomish Counties",
    title: "Jessica Straw",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "Almost There Senior Care",
    email: "donna@almostthereseniorcare.com",
    phone: "360-420-3385",
    website: "almostthereseniorcare.com",
    city: "Seattle",
    state: "WA",
    placementTargets: "Greater Seattle",
    title: "Donna Backman",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "Always Best Care — Seattle",
    organization: "Always Best Care",
    email: "SCave@abc-seniors.com",
    phone: "206-922-3795",
    website: "alwaysbestcare.com/seattle",
    city: "Bellevue",
    state: "WA",
    placementTargets: "Eastside / King County",
    title: "Sarah Cave",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "BWC Senior Living Placement",
    email: "tonya@bwcseniorplacement.com",
    phone: "206-412-3554",
    website: "bwcseniorplacement.com",
    city: "Bellevue",
    state: "WA",
    placementTargets: "East King County",
    title: "Tonya Hilson",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "Concierge Care Advisors",
    email: "mary@conciergecareadvisors.com",
    phone: "425-802-6613",
    website: "conciergecareadvisors.com",
    city: "Seattle",
    state: "WA",
    placementTargets: "Seattle to Bellingham",
    title: "Mary Cordova",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "Dedicated Care Solutions",
    email: "greg@dedicatedcaresolutions.com",
    phone: "425-737-3865",
    website: "dedicatedcaresolutions.com",
    city: "Everett",
    state: "WA",
    placementTargets: "King, Snohomish and Skagit Counties",
    title: "Greg Cranford",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "Flourish Senior Advisement",
    email: "kris@flourishadvisement.com",
    phone: "425-359-9232",
    website: "flourishsenioradvisement.com",
    city: "Seattle",
    state: "WA",
    placementTargets: "North King and South Snohomish Counties",
    title: "Kris Kirwan",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "Forever Care Services, LLC",
    email: "adrienne@forevercareservices.com",
    phone: "206-383-2001",
    website: "forevercareservices.com",
    city: "Seattle",
    state: "WA",
    placementTargets: "Greater Seattle",
    title: "Adrienne Miller",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "Moving With Simplicity",
    email: "melissa@movingwithsimplicity.com",
    phone: "425-321-3277",
    website: "movingwithsimplicity.com",
    city: "Seattle",
    state: "WA",
    placementTargets: "King, Pierce, Snohomish, Skagit, Thurston Counties",
    title: "Melissa Schmalenberger",
    notes: `${ASRPWA_NOTE} Senior move management / downsizing; confirm placement scope as needed.`,
  }),
  P({
    name: "Next Step Transitions Family Advisory",
    email: "david@nextsteptransitions.com",
    phone: "206-849-3511",
    website: "nextsteptransitions.com",
    city: "Seattle",
    state: "WA",
    placementTargets: "Puget Sound",
    title: "David Haack",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "Oasis Senior Advisors — Puget Sound",
    organization: "Oasis Senior Advisors",
    email: "RYoung@youroasisadvisor.com",
    phone: "888-418-1170",
    website: "oasissenioradvisors.com/puget-sound",
    city: "Seattle",
    state: "WA",
    placementTargets: "King County, WA",
    title: "Robert Young",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "Options for Seniors",
    email: "heidi@optionsforseniors.com",
    phone: "425-827-0894",
    website: "optionsforseniors.com",
    city: "Seattle",
    state: "WA",
    placementTargets: "Western Washington",
    title: "Heidi Sheldon",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "Pinnacle Senior Placements",
    email: "daphne@pinnacleseniorplacements.com",
    phone: "206-375-4002",
    website: "pinnacleseniorplacements.com",
    city: "Seattle",
    state: "WA",
    placementTargets: "Seattle area",
    title: "Daphne Davis",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "Revive Senior Solutions",
    email: "reviveseniorsoln@gmail.com",
    phone: "206-458-0583",
    website: "reviveseniorsoln.com",
    city: "Seattle",
    state: "WA",
    placementTargets: "South Snohomish and North King Counties",
    title: "Raminder Nijjar",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "SAGE Senior Network",
    email: "jessica@sageseniornetwork.com",
    phone: "425-667-9719",
    website: "sageseniornetwork.com",
    city: "Bothell",
    state: "WA",
    placementTargets: "King and Snohomish Counties",
    title: "Jessica Seavers",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "Senior Care Authority — Eastside",
    organization: "Senior Care Authority",
    email: "veronica@seniorcareauthority.com",
    phone: "206-888-7206",
    website:
      "seniorcareauthority.com/locations/eastside-king-co-and-surrounding-areas",
    city: "Bellevue",
    state: "WA",
    placementTargets: "Greater South Puget Sound; Eastside King County",
    title: "Veronica Griffiths",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "Senior Housing Advisory Services",
    email: "april@pnwsenioradvisor.com",
    phone: "253-448-3370",
    website: "seniorhousingadvisoryservices.com",
    city: "Tacoma",
    state: "WA",
    placementTargets: "Greater Seattle / South Sound",
    title: "April Sage",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "Senior Placement Services (CarePatrol)",
    organization: "CarePatrol",
    email: "SPierard@carepatrol.com",
    phone: "206-799-5618",
    website: "carepatrol.com/seattle",
    city: "Seattle",
    state: "WA",
    placementTargets: "Greater Puget Sound; Wenatchee",
    title: "Shane Pierard",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "Silver Age Advisors",
    email: "info@silveragecare.com",
    phone: "206-669-7191",
    website: "silveragecare.com",
    city: "Seattle",
    state: "WA",
    placementTargets: "King and Snohomish Counties",
    title: "Abby Durr",
    notes: ASRPWA_NOTE,
  }),
  P({
    name: "The Right Place Senior Options",
    email: "lisa@trpso.com",
    phone: "206-604-5571",
    website: "trpso.com",
    city: "Seattle",
    state: "WA",
    placementTargets: "Puget Sound",
    title: "Lisa Satin",
    notes: ASRPWA_NOTE,
  }),
];

function C(p: {
  name: string;
  organization?: string;
  phone: string;
  website: string;
  city: string;
  state: string;
  notes: string;
  title?: string;
}): SeedContact {
  return P({
    ...p,
    type: "community",
    organization: p.organization ?? p.name,
    title: p.title ?? "Community",
    placementTargets: "",
  });
}

export const COMMUNITY_SEED: SeedContact[] = [
  C({
    name: "Aegis Living Bellevue at Overlake",
    organization: "Aegis Living",
    phone: "425-223-3454",
    website: "aegisliving.com/locations/aegis-living-bellevue-overlake-wa",
    city: "Bellevue",
    state: "WA",
    notes: "Assisted living; WHCA facility finder lists address and on-site contact.",
  }),
  C({
    name: "Silverado Bellevue Memory Care Community",
    organization: "Silverado",
    phone: "425-559-9115",
    website: "silverado.com/locations/bellevue",
    city: "Bellevue",
    state: "WA",
    notes: "Memory care; WHCA facility finder lists address and phone.",
  }),
  C({
    name: "Van Vista Assisted Living",
    organization: "KPS Inc.",
    phone: "360-750-4665",
    website: "kpsinc.net/properties",
    city: "Vancouver",
    state: "WA",
    notes: "Assisted living; WHCA lists address and executive director.",
  }),
  C({
    name: "Spokane Memory Care",
    organization: "Senior Services of America",
    phone: "509-904-1245",
    website: "seniorservicesofamerica.com/senior-living/wa/spokane/spokane-memory-care-at-south-hill",
    city: "Spokane",
    state: "WA",
    notes: "Memory care; WHCA facility finder lists address and phone.",
  }),
  C({
    name: "Chandler House",
    phone: "509-248-1007",
    website: "chandler-house.com",
    city: "Yakima",
    state: "WA",
    notes: "Assisted living; WHCA lists address and executive director.",
  }),
  C({
    name: "Avamere at Sandy",
    phone: "503-668-4199",
    website: "avamereatsandy.com",
    city: "Sandy",
    state: "OR",
    notes: "OHCA: memory care / residential care facility; bed counts listed.",
  }),
  C({
    name: "Touchmark at Mount Bachelor Village",
    organization: "Touchmark",
    phone: "541-383-1414",
    website: "touchmark.com/senior-living/or/bend/mount-bachelor-village",
    city: "Bend",
    state: "OR",
    notes: "OHCA: memory care / residential care facility.",
  }),
  C({
    name: "Prestige Senior Living High Desert",
    organization: "Prestige Care",
    phone: "541-312-2003",
    website: "prestigecare.com/locations/prestige-senior-living-high-desert",
    city: "Bend",
    state: "OR",
    notes: "OHCA: assisted living with beds.",
  }),
  C({
    name: "Arcadia Senior Living",
    phone: "503-206-8930",
    website: "arcadiaretirement.com",
    city: "Portland",
    state: "OR",
    notes: "Retirement Connection directory: address, phone, website.",
  }),
  C({
    name: "The Springs at Tanasbourne",
    organization: "The Springs Living",
    phone: "503-629-5500",
    website: "thespringsliving.com/senior-living/hillsboro/oregon/tanasbourne",
    city: "Hillsboro",
    state: "OR",
    notes: "Community page: address, phone, office hours.",
  }),
  C({
    name: "Brookdale Boise Parkcenter",
    organization: "Brookdale",
    phone: "208-338-5600",
    website: "brookdale.com/en/communities/brookdale-boise-parkcenter-al.html",
    city: "Boise",
    state: "ID",
    notes: "Community page: address and direct phone.",
  }),
  C({
    name: "Touchmark at Meadow Lake Village",
    organization: "Touchmark",
    phone: "208-888-2277",
    website: "touchmark.com/senior-living/id/meridian/meadow-lake-village",
    city: "Meridian",
    state: "ID",
    notes: "Community page: address and phone.",
  }),
  C({
    name: "Orchard Ridge Senior Living",
    phone: "208-664-8119",
    website: "theorchardcda.org",
    city: "Coeur d'Alene",
    state: "ID",
    notes: "Nonprofit campus; assisted living and memory care among options.",
  }),
  C({
    name: "Heritage Assisted Living of Twin Falls",
    phone: "208-738-9136",
    website: "heritagetf.com",
    city: "Twin Falls",
    state: "ID",
    notes: "Contact section: address and phone.",
  }),
  C({
    name: "The Gables of Ammon",
    phone: "208-542-3400",
    website: "thegablesofammon.com",
    city: "Ammon",
    state: "ID",
    notes: "Assisted living & memory care; site lists address and phone.",
  }),
];

function Law(p: {
  name: string;
  phone: string;
  website: string;
  city: string;
  state: string;
  notes: string;
}): SeedContact {
  return P({
    ...p,
    type: "attorney",
    title: "Elder law",
    organization: p.name,
    placementTargets: "",
  });
}

export const ATTORNEY_SEED: SeedContact[] = [
  Law({
    name: "The Elder Law Firm (Davis Pagnano McNeil & Vigna, LLP)",
    phone: "503-452-5050",
    website: "theelderlawfirm.com",
    city: "Portland",
    state: "OR",
    notes: "Elder law firm; contact page: address, phone, hours.",
  }),
  Law({
    name: "Law Office of Eric M. Kearney, LLC",
    phone: "503-205-7051",
    website: "ericmkearney.com",
    city: "Portland",
    state: "OR",
    notes: "Elder law including guardianship / Medicaid / special needs; contact block on site.",
  }),
  Law({
    name: "Law Offices of Nay & Friedenberg LLC",
    phone: "503-245-0894",
    website: "naylaw.com",
    city: "Portland",
    state: "OR",
    notes: "Estate planning, probate, elder law; site header lists phone.",
  }),
  Law({
    name: "Oregon Elder Law",
    phone: "503-284-6778",
    website: "oregonelderlaw.com",
    city: "",
    state: "OR",
    notes: "Site header lists phone; office location not captured in accessible page text.",
  }),
  Law({
    name: "Evergreen Elder Law",
    phone: "509-325-5222",
    website: "evergreenelderlaw.com",
    city: "Spokane",
    state: "WA",
    notes: "Site header lists phone; Spokane office referenced on page.",
  }),
  Law({
    name: "Brothers Henderson Durkin, P.S.",
    phone: "206-324-4300",
    website: "bhdlaw.com/individuals-and-families/elder-law",
    city: "Seattle",
    state: "WA",
    notes: "Firm elder-law page: phone and contact email.",
  }),
  Law({
    name: "Hickman Menashe, P.S.",
    phone: "425-744-5658; 425-570-2280",
    website: "hickmanmenashe.com/firm-overview",
    city: "Lynnwood",
    state: "WA",
    notes: "Firm overview: main phone + second line; Bellevue office noted.",
  }),
  Law({
    name: "PWP Elder Law",
    phone: "360-696-2069",
    website: "pwpelderlaw.com/what-we-can-do-for-you/elder-law",
    city: "Vancouver",
    state: "WA",
    notes: "Elder law page lists phone for consultation.",
  }),
  Law({
    name: "McCool Law, PLLC",
    phone: "208-963-8100",
    website: "mccoollaw.org",
    city: "Boise",
    state: "ID",
    notes: "Header lists phone/email; elder-law practice described.",
  }),
  Law({
    name: "Wright Law Offices, PLLC",
    phone: "208-523-4433",
    website: "wrightlawidaho.com/elder-law",
    city: "Idaho Falls",
    state: "ID",
    notes: "Contact block: phone and Idaho Falls address.",
  }),
  Law({
    name: "Coyle & Eyman Elder Law",
    phone: "208-765-3595",
    website: "cwelp.com/contact-us",
    city: "Coeur d'Alene",
    state: "ID",
    notes: "Contact page: phone, address, business hours.",
  }),
  Law({
    name: "Twin Falls Estate Planning",
    phone: "208-733-7200",
    website: "twinfallsestateplanning.com",
    city: "Twin Falls",
    state: "ID",
    notes: "Homepage snippet lists phone; practice includes elder law.",
  }),
];
