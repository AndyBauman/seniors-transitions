import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySessionToken, COOKIE_NAME } from "@/lib/admin-auth";
import { CITY_SERVICE_SLUGS, SERVED_CITIES_BY_STATE } from "@/lib/site";

/** Former programmatic location states (no longer served). */
const DEPRECATED_LOCATION_STATES = new Set([
  "arizona",
  "california",
  "colorado",
  "florida",
  "texas",
  "new-york",
  "illinois",
  "ohio",
  "pennsylvania",
]);

const VALID_SERVICES = new Set<string>(CITY_SERVICE_SLUGS);

function isValidMetroLocationPath(pathname: string): boolean {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length < 2) return false;
  const [state, city, service] = parts;
  if (state !== "oregon" && state !== "washington") return false;
  const cities = SERVED_CITIES_BY_STATE[state];
  if (!cities?.includes(city)) return false;
  if (parts.length === 2) return true;
  if (parts.length === 3) return VALID_SERVICES.has(service);
  return false;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login") {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    if (await verifySessionToken(token)) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    const token = request.cookies.get(COOKIE_NAME)?.value;
    const valid = await verifySessionToken(token);
    if (!valid) {
      const login = new URL("/admin/login", request.url);
      login.searchParams.set("next", pathname + request.nextUrl.search);
      return NextResponse.redirect(login);
    }
  }

  const parts = pathname.split("/").filter(Boolean);
  if (parts.length >= 2) {
    const state = parts[0];
    if (DEPRECATED_LOCATION_STATES.has(state)) {
      return NextResponse.redirect(new URL("/for-families", request.url), 301);
    }
    if (state === "oregon" || state === "washington") {
      if (!isValidMetroLocationPath(pathname)) {
        return NextResponse.redirect(new URL("/for-families", request.url), 301);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin",
    "/admin/:path*",
    "/oregon/:path*",
    "/washington/:path*",
    "/arizona/:path*",
    "/california/:path*",
    "/colorado/:path*",
    "/florida/:path*",
    "/texas/:path*",
    "/new-york/:path*",
    "/illinois/:path*",
    "/ohio/:path*",
    "/pennsylvania/:path*",
  ],
};
