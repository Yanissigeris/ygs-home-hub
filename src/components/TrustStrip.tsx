import * as React from "react";

const itemsFr = [
  { text: "Spécialiste Gatineau · Aylmer · Hull · Outaouais" },
  { text: "Près de 9 ans d'expérience" },
  { text: "Service bilingue · Approche transparente" },
];

const itemsEn = [
  { text: "Gatineau · Aylmer · Hull · Outaouais specialist" },
  { text: "Nearly 9 years of experience" },
  { text: "Bilingual service · Transparent approach" },
];

interface TrustStripProps { lang?: "fr" | "en"; }

const TrustStrip = React.forwardRef<HTMLElement, TrustStripProps>(({ lang = "fr" }, ref) => {
  const items = lang === "en" ? itemsEn : itemsFr;
  return (
    <section ref={ref} style={{ background: "var(--cream)", borderBottom: "1px solid var(--border, #dde5e9)" }}>
      <div className="section-container" style={{ padding: "1.1rem 2.5rem" }}>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-0">
          {items.map((item, i) => (
            <React.Fragment key={item.text}>
              {i > 0 && <div className="hidden sm:block mx-5" style={{ width: "1px", height: "18px", background: "hsl(var(--border))" }} />}
              <div className="flex items-center gap-2.5 text-[.78rem] font-medium" style={{ color: "var(--ink)" }}>
                <span className="shrink-0 w-[5px] h-[5px] rounded-full" style={{ background: "var(--gold)" }} aria-hidden="true" />
                <span>{item.text}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
});

TrustStrip.displayName = "TrustStrip";
export default TrustStrip;
