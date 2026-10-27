import SectionHeading from "@/components/SectionHeading";

type Lang = "fr" | "en";

const copy: Record<Lang, { title: string; subtitle: string; steps: { title: string; text: string }[] }> = {
  fr: {
    title: "Comment je prépare votre évaluation",
    subtitle: "Chaque étape s'appuie sur des ventes conclues dans votre secteur, pas sur une moyenne de la ville.",
    steps: [
      {
        title: "Votre propriété d'abord",
        text: "Je pars des données de votre maison et de son évaluation municipale, puis de ce que vous me dites de son état et des travaux faits.",
      },
      {
        title: "Les ventes qui se comparent",
        text: "Je retiens les ventes récentes les plus proches de la vôtre, dans votre secteur et dans le même type de propriété.",
      },
      {
        title: "Les ajustements",
        text: "J'ajuste chaque vente, ligne par ligne, pour ce qui la distingue de votre maison, comme un garage ou un sous-sol fini.",
      },
      {
        title: "La concurrence",
        text: "Je regarde aussi les maisons à vendre autour de vous. Leurs prix demandés ne prouvent pas une valeur, mais ce sont elles que les acheteurs compareront à la vôtre.",
      },
      {
        title: "Trois prix d'affichage",
        text: "Vous recevez une fourchette de valeur et trois prix possibles, du plus compétitif au plus ambitieux. Je vous explique ce que chacun implique, et vous décidez.",
      },
    ],
  },
  en: {
    title: "How I prepare your valuation",
    subtitle: "Every step relies on closed sales in your area, not a citywide average.",
    steps: [
      {
        title: "Your property first",
        text: "I start from your home's data and its municipal assessment, then add what you tell me about its condition and the work done.",
      },
      {
        title: "The sales that compare",
        text: "I pick the recent sales closest to your home, in your area and of the same property type.",
      },
      {
        title: "Adjustments",
        text: "I adjust each sale, line by line, for what sets it apart from your home, such as a garage or a finished basement.",
      },
      {
        title: "The competition",
        text: "I also look at homes for sale around you. Their asking prices don't prove value, but they're the homes buyers will compare with yours.",
      },
      {
        title: "Three listing prices",
        text: "You get a value range and three possible listing prices, from the most competitive to the most ambitious. I explain what each one means for you, and you decide.",
      },
    ],
  },
};

const ValuationSteps = ({ lang }: { lang: Lang }) => {
  const c = copy[lang];
  return (
    <section className="bg-background pb-16 md:pb-20">
      <div className="section-container">
        <div className="max-w-3xl">
          <SectionHeading title={c.title} subtitle={c.subtitle} />
        </div>
        <ol className="mt-10 border-t border-border">
          {c.steps.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-border py-6 md:grid-cols-[3.5rem_1fr] md:gap-x-6">
              <span
                aria-hidden="true"
                className="row-span-2 text-[var(--gold-text)]"
                style={{ fontFamily: "var(--serif)", fontSize: "2rem", lineHeight: 1 }}
              >
                {i + 1}
              </span>
              <h3 className="text-foreground" style={{ fontFamily: "var(--serif)", fontSize: "1.375rem", lineHeight: 1.2 }}>
                {s.title}
              </h3>
              <p className="mt-2 max-w-[62ch] text-[0.9375rem] leading-[1.7] text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ValuationSteps;
