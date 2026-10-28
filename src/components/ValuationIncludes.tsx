import SectionHeading from "@/components/SectionHeading";
import { CheckCircle2 } from "lucide-react";

type Lang = "fr" | "en";

const copy: Record<Lang, { overline: string; title: string; preview: string; example: string; sub: string; low: string; mid: string; high: string; amounts: [string, string, string]; foot: string }> = {
  fr: {
    overline: "Ce que vous recevez",
    title: "Votre évaluation inclut",
    preview: "Aperçu illustratif",
    example: "Exemple",
    sub: "À quoi ressemblent vos trois prix d'affichage",
    low: "Prix plus compétitif",
    mid: "Recommandé",
    high: "Ambitieux",
    amounts: ["559 900 $", "569 900 $", "589 900 $"],
    foot: "Exemple illustratif, montants fictifs. Votre analyse personnalisée sera basée sur les ventes comparables récentes de votre secteur.",
  },
  en: {
    overline: "What you receive",
    title: "Your valuation includes",
    preview: "Illustrative preview",
    example: "Example",
    sub: "What your three listing prices look like",
    low: "More competitive price",
    mid: "Recommended",
    high: "Ambitious",
    amounts: ["$559,900", "$569,900", "$589,900"],
    foot: "Illustrative example, fictional amounts. Your personalized analysis will be based on recent comparable sales in your area.",
  },
};

/** "Votre évaluation inclut" section with the illustrative three-price range (FR and EN valuation pages). */
const ValuationIncludes = ({ lang, benefits }: { lang: Lang; benefits: string[] }) => {
  const t = copy[lang];
  return (
    <>
      {/* ── Votre évaluation inclut — 2 cols + widget fourchette ── */}
      <section className="bg-background py-16 md:py-20">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <SectionHeading overline={t.overline} title={t.title} />
              <ul className="mt-8 space-y-4">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-accent" />
                    <span className="text-[1rem] text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget fourchette de valeur (statique, illustratif) */}
            <div className="bg-[var(--ink)] text-[var(--cream)] rounded-lg p-6 md:p-8 border border-[var(--gold)]/30 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <p
                  className="text-[11px] uppercase tracking-[0.14em] text-[var(--gold)]"
                  style={{ fontFamily: "var(--sans)" }}
                >
                  {t.preview}
                </p>
                <span
                  className="text-[10px] uppercase tracking-[0.14em] px-2 py-0.5 rounded-full border border-[var(--gold)]/40 text-[var(--cream)]/70"
                  style={{ fontFamily: "var(--sans)" }}
                >
                  {t.example}
                </span>
              </div>
              <p
                className="mt-2 text-[var(--cream)]/85 text-[0.9375rem]"
                style={{ fontFamily: "var(--sans)" }}
              >
                {t.sub}
              </p>

              <div className="relative mt-10 mb-2">
                {/* ligne reliant les 3 dots */}
                <div className="absolute left-[6%] right-[6%] top-[5px] h-px" style={{ backgroundColor: "rgba(168, 138, 90, 0.5)" }} aria-hidden="true" />
                <div className="relative grid grid-cols-3 gap-2">
                  <div className="flex flex-col items-center text-center">
                    <span className="block w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(168, 138, 90, 0.4)" }} aria-hidden="true" />
                    <span className="mt-4 text-[var(--cream)] whitespace-nowrap" style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", lineHeight: 1.1 }}>
                      {t.amounts[0]}
                    </span>
                    <span className="mt-2 text-[11px] uppercase tracking-[0.12em] text-[var(--cream)]/70" style={{ fontFamily: "var(--sans)" }}>
                      {t.low}
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className="block w-3 h-3 rounded-full bg-[var(--gold)] -mt-0.5" aria-hidden="true" />
                    <span className="mt-4 text-[var(--gold)] whitespace-nowrap" style={{ fontFamily: "var(--serif)", fontSize: "1.75rem", lineHeight: 1.1 }}>
                      {t.amounts[1]}
                    </span>
                    <span className="mt-2 text-[11px] uppercase tracking-[0.12em] text-[var(--cream)]/70" style={{ fontFamily: "var(--sans)" }}>
                      {t.mid}
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <span className="block w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(168, 138, 90, 0.4)" }} aria-hidden="true" />
                    <span className="mt-4 text-[var(--cream)] whitespace-nowrap" style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", lineHeight: 1.1 }}>
                      {t.amounts[2]}
                    </span>
                    <span className="mt-2 text-[11px] uppercase tracking-[0.12em] text-[var(--cream)]/70" style={{ fontFamily: "var(--sans)" }}>
                      {t.high}
                    </span>
                  </div>
                </div>
              </div>

              <p
                className="mt-8 text-[12px] leading-[1.5] text-[var(--cream)]/60"
                style={{ fontFamily: "var(--sans)" }}
              >
                {t.foot}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ValuationIncludes;
