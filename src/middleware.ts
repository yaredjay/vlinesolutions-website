import { NextResponse, type NextRequest } from "next/server";
import { CORP_ROUTES, isSportHost, SPORT_PATH } from "@/lib/sport";

/**
 * On the VLS Sport host, serve the /sports route group at the root:
 *   sports.vlinesolutions.com/           -> /sports
 *   sports.vlinesolutions.com/request    -> /sports/request
 * and keep URLs clean by redirecting any /sports/* on that host to the bare path.
 * Corporate-only routes on a sport host go to the sport homepage.
 * The corporate host is untouched: vlinesolutions.com/sports keeps working as well.
 * (In SPORT_ONLY mode every host counts as a sport host; see lib/sport.ts.)
 */
export function middleware(req: NextRequest) {
  const host = req.headers.get("host");
  if (!isSportHost(host)) return NextResponse.next();

  const { pathname } = req.nextUrl;

  // Generated metadata images (og/twitter) are addressed by their real path; never redirect or rewrite them.
  if (/\/(opengraph|twitter)-image/.test(pathname)) return NextResponse.next();

  if (pathname === SPORT_PATH || pathname.startsWith(`${SPORT_PATH}/`)) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.slice(SPORT_PATH.length) || "/";
    return NextResponse.redirect(url, 308);
  }

  if (CORP_ROUTES.some((r) => pathname === r || pathname.startsWith(`${r}/`))) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url, 307);
  }

  const url = req.nextUrl.clone();
  url.pathname = pathname === "/" ? SPORT_PATH : `${SPORT_PATH}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!_next/|api/|logos/|sport/|icon\\.svg|apple-icon|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)",
  ],
};
