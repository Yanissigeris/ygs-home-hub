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
    <section
      ref={ref}
      className="overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0E2630 0%, #112E3A 50%, #0E2630 100%)",
        borderTop: "1px solid rgba(168,138,90,.35)",
        borderBottom: "1px solid rgba(168,138,90,.25)",
        padding: "1.25rem 0",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,.06), inset 0 -1px 0 rgba(0,0,0,.3)",
      }}
    >
      <div className="relative group" style={{ maskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 4%, black 96%, transparent)" }}>
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap" style={{ animationDuration: "var(--marquee-speed, 15s)" }}>
          {/* Duplicate items twice for seamless loop */}
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center text-[.9rem] sm:text-[1rem] font-bold uppercase tracking-[.14em]"
              style={{
                color: "#FFFFFF",
                marginLeft: "clamp(1.75rem, 4vw, 2.75rem)",
                marginRight: "clamp(1.75rem, 4vw, 2.75rem)",
                textShadow: "0 1px 3px rgba(0,0,0,.7), 0 0 1px rgba(0,0,0,.5)",
              }}
            >
              <span
                className="mr-4 text-[13px]"
                style={{
                  color: "#D4AF6F",
                  textShadow: "0 0 10px rgba(212,175,111,.85), 0 0 4px rgba(212,175,111,.6)",
                }}
                aria-hidden="true"
              >
                ●
              </span>
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
