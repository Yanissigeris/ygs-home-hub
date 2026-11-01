import SectionHeading from "@/components/SectionHeading";

type Lang = "fr" | "en";

interface Option {
  use: string;
  title: string;
  text: string;
  mine?: boolean;
}

const copy: Record<Lang, { title: string; subtitle: string; options: Option[] }> = {
  fr: {
    title: "Quatre façons d'estimer la valeur de votre maison",
    subtitle:
      "Pour fixer un prix de vente à Gatineau, l'outil le plus utile reste l'analyse des ventes comparables récentes de votre secteur. Les trois autres options répondent à d'autres besoins.",
    options: [
      {
        use: "Pour vos taxes",
        title: "L'évaluation municipale",
        text: "Elle sert d'abord à calculer vos taxes municipales et scolaires. Sa valeur est fixée à une date passée : le rôle 2024-2026 de Gatineau reflète le marché du 1er juillet 2022, et celui qui entre en vigueur en 2027 reflète le 1er juillet 2025. Bon repère, rarement un prix de vente.",
      },
      {
        use: "Pour un ordre de grandeur",
        title: "Les estimations en ligne",
        text: "Un algorithme compare votre adresse aux données publiques. C'est rapide et ça donne un ordre de grandeur. Il ne voit ni l'intérieur ni les rénovations faites, et l'écart peut être grand dans un secteur où peu de maisons se vendent.",
      },
      {
        use: "Quand un rapport signé est exigé",
        title: "L'évaluateur agréé",
        text: "Membre de l'Ordre des évaluateurs agréés du Québec, il signe un rapport d'évaluation formel. Vous en avez besoin quand un prêteur ou un tribunal exige un rapport signé. Ce service est payant.",
      },
      {
        use: "Pour vendre",
        title: "L'analyse du courtier",
        text: "C'est ce que je prépare pour vous. Je compare votre propriété aux ventes récentes de votre secteur, puis j'ajuste selon ce qui distingue votre maison, comme son état ou sa superficie. Vous recevez une fourchette de prix réaliste et mon avis sur le positionnement. C'est gratuit et sans engagement, mais ce n'est pas un rapport d'évaluateur agréé.",
        mine: true,
      },
    ],
  },
  en: {
    title: "Four ways to estimate your home's value",
    subtitle:
      "To set a selling price in Gatineau, the most useful tool is an analysis of recent comparable sales in your area. The other three options answer different needs.",
    options: [
      {
        use: "For your taxes",
        title: "Municipal assessment",
        text: "It's mainly used to calculate your municipal and school taxes. Its value is set at a past date: Gatineau's 2024-2026 roll reflects the market on July 1, 2022, and the roll taking effect in 2027 reflects July 1, 2025. A good benchmark, rarely a selling price.",
      },
      {
        use: "For a ballpark",
        title: "Online estimates",
        text: "An algorithm compares your address with public data. It's fast and gives you a ballpark. It can't see inside the house or the work you've done, and it can miss by a lot in areas where few homes sell.",
      },
      {
        use: "When a signed report is required",
        title: "Chartered appraiser",
        text: "A member of the Ordre des évaluateurs agréés du Québec, the chartered appraiser signs a formal appraisal report. You need one when a lender or a court requires a signed report. It's a paid service.",
      },
      {
        use: "For selling",
        title: "The broker's analysis",
        text: "This is what I prepare for you. I compare your property with recent sales in your area, then adjust for what sets your home apart, such as its condition or size. You get a realistic price range and my advice on positioning. It's free with no commitment, though it isn't a chartered appraiser's report.",
        mine: true,
      },
    ],
  },
};

const ValuationOptions = ({ lang }: { lang: Lang }) => {
  const c = copy[lang];
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="section-container">
        <div className="max-w-3xl">
          <SectionHeading title={c.title} subtitle={c.subtitle} />
        </div>
        <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {c.options.map((o) => (
            <div
              key={o.title}
              className={o.mine ? "border-t-[3px] border-[var(--gold-text)] pt-5" : "border-t border-border pt-5"}
            >
              <p
                className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--gold-text)]"
                style={{ fontFamily: "var(--sans)" }}
              >
                {o.use}
              </p>
              <h3
                className="mt-3 text-foreground"
                style={{ fontFamily: "var(--sans)", fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.25, letterSpacing: "-0.01em" }}
              >
                {o.title}
              </h3>
              <p className="mt-3 text-[0.9375rem] leading-[1.7] text-muted-foreground">
                {o.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuationOptions;
