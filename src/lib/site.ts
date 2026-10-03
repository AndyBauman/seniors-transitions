/**
 * Canonical site URL — set NEXT_PUBLIC_SITE_URL in production if the domain differs.
 */
export const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL ?? "https://seniors-transitions.com").replace(
    /\/$/,
    "",
  );

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/SeniorTransitionsGroup",
  linkedin: "https://www.linkedin.com/company/senior-transitions-group",
  instagram: "https://www.instagram.com/seniortransitionsgroup",
} as const;

/** Portland–Vancouver metro: indexed city slugs only (state slug → city slugs). */
export const SERVED_CITIES_BY_STATE: Record<string, string[]> = {
  oregon: [
    "portland",
    "beaverton",
    "lake-oswego",
    "tigard",
    "gresham",
    "hillsboro",
    "west-linn",
    "oregon-city",
  ],
  washington: ["vancouver", "camas"],
};

export const CITY_SERVICE_SLUGS = [
  "senior-move-manager",
  "help-parents-downsize",
  "move-to-assisted-living",
  "move-to-memory-care",
  "estate-cleanout",
  "downsizing-services-for-seniors",
  "emergency-senior-move",
] as const;

export type CityServiceSlug = (typeof CITY_SERVICE_SLUGS)[number];

/** Unique local insight by city slug (Portland–Vancouver metro only). */
export const CITY_LOCAL_INSIGHTS: Partial<Record<string, string>> = {
  portland:
    "Portland families often coordinate moves across the east and west sides of the metro—balancing proximity to adult children in suburbs like Beaverton or Lake Oswego with access to assisted living and memory care along the I-5 and 217 corridors. We routinely align tour schedules with OHSU or Providence discharge timelines and Clark County families visiting from Washington.",
  vancouver:
    "Vancouver and Clark County families frequently compare communities on both sides of the Columbia River. We help weigh Washington vs. Oregon options for care licensing, VA benefits routing, and drive time for family visits—while keeping move-in dates realistic when a parent is transitioning from home or hospital in Southwest Washington.",
};

/** Public routes for sitemap (no /admin). */
export const STATIC_SITEMAP_PATHS: string[] = [
  "/",
  "/about",
  "/contact",
  "/services",
  "/services/placement",
  "/services/real-estate",
  "/services/transition",
  "/for-families",
  "/for-communities",
  "/for-placement-agents",
  "/for-professionals",
  "/help-my-parent-move",
  "/choosing-senior-living",
  "/choosing-senior-living/questions-to-ask-on-tour",
  "/choosing-senior-living/assisted-living-vs-memory-care",
  "/choosing-senior-living/independent-vs-assisted-living",
  "/choosing-senior-living/what-is-a-ccrc",
  "/choosing-senior-living/what-to-bring",
  "/resources",
  "/resources/signs-parent-needs-assisted-living",
  "/resources/managing-guilt-moving-parent",
  "/resources/downsizing-checklist",
  "/resources/how-to-help-parent-downsize",
  "/partners",
  "/partners/placement-agents",
  "/partners/senior-living-communities",
  "/partners/real-estate-agents",
  "/partners/elder-law-attorneys",
  "/partner-with-us",
  "/refer",
  "/free-consultation",
  "/free-family-consultation",
  "/privacy",
  "/terms",
];
