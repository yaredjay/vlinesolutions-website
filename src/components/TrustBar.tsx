import { trustBarItems, site } from "@/data/site";

export function TrustBar() {
  // Prepend real, verified proof IF set in site.proof (otherwise honest claims only).
  const items: string[] = [];
  if (site.proof.businessesServed) items.push(`${site.proof.businessesServed.toLocaleString()}+ Businesses Served`);
  if (site.proof.rating) items.push(`⭐ ${site.proof.rating}/5 Rating`);
  items.push(...trustBarItems);

  return (
    <div className="border-t border-line bg-bg-2/80 backdrop-blur-md">
      <div className="container-edge">
        <div
          className="no-scrollbar flex items-center gap-2.5 overflow-x-auto py-2 text-[0.8125rem] font-medium tracking-[0.01em] text-ink-secondary"
          aria-label="Trust highlights"
        >
          {items.map((item, i) => (
            <span key={item} className="flex shrink-0 items-center gap-2.5 whitespace-nowrap">
              {i > 0 && <span className="text-ink-muted/50">•</span>}
              <span className={item.includes("Guarantee") || item.includes("Money") ? "text-money" : undefined}>
                {item}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
