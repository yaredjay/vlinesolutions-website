/** A thin lens of light between sections; lit by LiquidLights on scroll. */
export function LiquidDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`container-edge ${className}`} aria-hidden>
      <div data-liquid className="liquid-divider" />
    </div>
  );
}
