import { Star, StarHalf } from "lucide-react";

export function Stars({ rating = 5, className }: { rating?: number; className?: string }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <div className={`flex items-center gap-0.5 ${className ?? ""}`} aria-label={`${rating} out of 5`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
      ))}
      {half && <StarHalf className="h-4 w-4 fill-gold text-gold" />}
    </div>
  );
}
