const COOKIE_NAME = "stg_admin_session";
const MAX_AGE_SEC = 60 * 60 * 24 * 7; // 7 days

function toBase64Url(str: string): string {
  const b = typeof Buffer !== "undefined"
    ? Buffer.from(str, "utf8").toString("base64")
    : btoa(str);
  return b.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(s: string): string {
  const pad = s.length % 4 === 0 ? "" : "=".repeat(4 - (s.length % 4));
  const b = s.replace(/-/g, "+").replace(/_/g, "/") + pad;
  if (typeof Buffer !== "undefined") {
    return Buffer.from(b, "base64").toString("utf8");
  }
  return atob(b);
}

async function hmacHex(secret: string, message: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let x = 0;
  for (let i = 0; i < a.length; i++) x |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return x === 0;
}

export function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD ?? "Robinson";
}

export function getSessionSecret(): string {
  return process.env.ADMIN_SESSION_SECRET ?? getAdminPassword();
}

export async function createSessionToken(): Promise<string> {
  const exp = Math.floor(Date.now() / 1000) + MAX_AGE_SEC;
  const payload = JSON.stringify({ exp });
  const secret = getSessionSecret();
  const sig = await hmacHex(secret, payload);
  return `${toBase64Url(payload)}.${sig}`;
}

export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const lastDot = token.lastIndexOf(".");
  if (lastDot <= 0) return false;
  const payloadPart = token.slice(0, lastDot);
  const sig = token.slice(lastDot + 1);
  let payload: string;
  try {
    payload = fromBase64Url(payloadPart);
  } catch {
    return false;
  }
  const secret = getSessionSecret();
  const expected = await hmacHex(secret, payload);
  if (!timingSafeEqual(expected, sig)) return false;
  try {
    const data = JSON.parse(payload) as { exp?: number };
    return typeof data.exp === "number" && data.exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

export { COOKIE_NAME, MAX_AGE_SEC };
