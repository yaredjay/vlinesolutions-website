/**
 * VLS Sport lives at two addresses:
 *   - sports.vlinesolutions.com (its own host, served by the middleware rewrite)
 *   - vlinesolutions.com/sports  (the same pages under the corporate domain)
 *
 * Everything here must stay edge-safe: the middleware imports it.
 */

export const CORP_URL = "https://vlinesolutions.com";
export const SPORT_URL =
  process.env.NEXT_PUBLIC_SPORT_URL?.replace(/\/$/, "") ?? "https://sports.vlinesolutions.com";
export const SPORT_PATH = "/sports";

/** True when a request host is one of the VLS Sport hostnames. */
export function isSportHost(host: string | null | undefined): boolean {
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
