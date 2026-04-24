import * as React from "react";

const items = [
  "Hall of Fame RE/MAX",
  "Club Platine RE/MAX",
  "Club 100% RE/MAX",
  "Gatineau · Aylmer · Hull",
  "Service bilingue FR/EN",
  "Équipe Marty Waite",
  "Près de 9 ans d'expérience",
  "5★ Google + Facebook",
];

const AwardsMarquee = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="overflow-hidden" style={{ background: "var(--ink)", borderTop: "1px solid rgba(255,255,255,.12)", borderBottom: "1px solid rgba(255,255,255,.08)", padding: "1.15rem 0" }}>
      <div className="relative group" style={{ maskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)" }}>
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap" style={{ animationDuration: "var(--marquee-speed, 15s)" }}>
          {/* Duplicate items twice for seamless loop */}
          {[...items, ...items].map((item, i) => (
            <span key={i} className="inline-flex items-center text-[.85rem] sm:text-[.95rem] font-bold uppercase tracking-[.14em]" style={{ color: "rgba(255,255,255,.98)", marginLeft: "clamp(1.75rem, 4vw, 2.75rem)", marginRight: "clamp(1.75rem, 4vw, 2.75rem)", textShadow: "0 1px 2px rgba(0,0,0,.4)" }}>
              <span className="mr-4 text-[12px]" style={{ color: "var(--gold)", textShadow: "0 0 8px rgba(168,138,90,.6)" }} aria-hidden="true">●</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
});

AwardsMarquee.displayName = "AwardsMarquee";
export default AwardsMarquee;
