/** Normalize stored website (no protocol) for display / matching */
export function stripWebsiteProtocol(raw: string): string {
  return raw.trim().replace(/^https?:\/\//i, "").replace(/^www\./i, "");
}

/** Build safe href for links */
export function websiteHref(raw: string): string {
  const t = raw.trim();
  if (!t) return "#";
  if (/^https?:\/\//i.test(t)) return t;
  return `https://${t}`;
}

/** Host + path for deduplication (lowercase) */
export function websiteDedupeKey(raw: string): string {
  const s = stripWebsiteProtocol(raw).toLowerCase();
  if (!s) return "";
  const [host, ...rest] = s.split("/");
  const path = rest.join("/").replace(/\/+$/, "");
  return path ? `${host}/${path}` : host;
}
