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
    <section ref={ref} className="overflow-hidden" style={{ background: "var(--ink)", borderTop: "1px solid rgba(255,255,255,.05)", padding: ".9rem 0" }}>
      <div className="relative group" style={{ maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)" }}>
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap" style={{ animationDuration: "var(--marquee-speed, 15s)" }}>
          {/* Duplicate items twice for seamless loop */}
          {[...items, ...items].map((item, i) => (
            <span key={i} className="inline-flex items-center text-[.7rem] sm:text-[.78rem] font-semibold uppercase tracking-[.12em]" style={{ color: "rgba(255,255,255,.85)", marginLeft: "clamp(1.25rem, 3vw, 2rem)", marginRight: "clamp(1.25rem, 3vw, 2rem)" }}>
              <span className="mr-4 text-[10px]" style={{ color: "var(--gold)" }} aria-hidden="true">●</span>
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
