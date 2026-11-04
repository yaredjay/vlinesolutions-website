/**
 * VLS Sport lives at two addresses:
 *   - sports.vlinesolutions.com (its own host, served by the middleware rewrite)
 *   - vlinesolutions.com/sports  (the same pages under the corporate domain)
 *
 * Everything here must stay edge-safe: the middleware imports it.
 */

export const CORP_URL = "https://vlinesolutions.com";

/**
 * SPORT-ONLY MODE is off. vlinesolutions.com serves the corporate site at the
 * root; VLS Sport remains reachable at /sports and sports.vlinesolutions.com.
 * Set NEXT_PUBLIC_SPORT_ONLY=true to put the sport placeholder back at the root.
 */
const sportOnlyEnv = process.env.NEXT_PUBLIC_SPORT_ONLY;
export const SPORT_ONLY = sportOnlyEnv === "true";

/**
 * VLS Sport is a placeholder while the corporate site is finished. Until
 * NEXT_PUBLIC_SHOW_SPORT=true, the corporate navigation hides the brand
 * switcher and sport links; the /sports routes still resolve.
 */
export const SHOW_SPORT = process.env.NEXT_PUBLIC_SHOW_SPORT === "true";

export const SPORT_URL = SPORT_ONLY
  ? CORP_URL
  : process.env.NEXT_PUBLIC_SPORT_URL?.replace(/\/$/, "") ?? "https://sports.vlinesolutions.com";
export const SPORT_PATH = "/sports";

/** Corporate-only routes; on a sport host they send visitors to the sport homepage. */
export const CORP_ROUTES = ["/about", "/contact", "/government", "/technology"];

/** True when a request host is one of the VLS Sport hostnames (every host in sport-only mode). */
export function isSportHost(host: string | null | undefined): boolean {
  if (SPORT_ONLY) return true;
  const h = (host ?? "").toLowerCase().split(":")[0];
  if (!h) return false;
  try {
    if (h === new URL(SPORT_URL).hostname) return true;
  } catch {
    /* ignore a malformed env value */
  }
  return h.startsWith("sports.") || h.startsWith("vlssport.");
}

/** Join a sport-relative path ("/", "/request") onto the base for the current host. */
export function sportHref(base: string, path: string): string {
  if (path === "/" || path === "") return base || "/";
  if (path.startsWith("#")) return `${base || "/"}${path}`;
  return `${base}${path}`;
}
