import fs from "node:fs";
import path from "node:path";

/* Server-only: returns the public path if a real file exists, else undefined.
   Lets components render a placeholder until you drop the real asset in
   /public — then it auto-appears on the next build, no code change. */
export function resolveAsset(...candidates: string[]): string | undefined {
  for (const c of candidates) {
    const rel = c.replace(/^\//, "");
    try {
      if (fs.existsSync(path.join(process.cwd(), "public", rel))) return c;
    } catch {
      /* ignore */
    }
  }
  return undefined;
}

/* Resolve a logo by slug, trying svg then png then webp. */
export function resolveLogo(dir: string, slug: string): string | undefined {
  return resolveAsset(
    `/logos/${dir}/${slug}.svg`,
    `/logos/${dir}/${slug}.png`,
    `/logos/${dir}/${slug}.webp`
  );
}
