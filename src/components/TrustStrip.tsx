import * as React from "react";

/* Inline SVG icons — avoids importing lucide-react in the critical path */
const AwardIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-accent"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
);
const MapPinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-accent"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-accent"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
);

const items = [
  { Icon: AwardIcon, text: "Club Platine RE/MAX · Temple de la renommée" },
  { Icon: MapPinIcon, text: "Spécialiste Gatineau · Aylmer · Hull · Outaouais" },
  { Icon: ShieldIcon, text: "Près de 9 ans d'expérience en Outaouais" },
];

const TrustStrip = React.forwardRef<HTMLElement>((_, ref) => (
  <section ref={ref} className="border-b border-border/40 bg-secondary/40">
    <div className="section-container py-5 sm:py-6">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-10 animate-fade-in">
        {items.map((item) => (
          <div key={item.text} className="flex items-center gap-2.5 text-[0.875rem] font-medium text-muted-foreground/65">
            <item.Icon />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
));

TrustStrip.displayName = "TrustStrip";

export default TrustStrip;
