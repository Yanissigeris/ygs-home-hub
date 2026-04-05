import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { trackCTAClick } from "@/lib/analytics";

interface MarketContext2026Props {
  lang?: "fr" | "en";
}

const content = {
  fr: {
    eyebrow: "LE MARCHÉ EN 2026 · OUTAOUAIS",
    title: 'Ce que vous devez savoir<br/>sur le marché <em>maintenant</em>',
    intro: "Le marché immobilier en Outaouais en 2026 — expliqué clairement, sans jargon. Pour que vous décidiez avec les bons éléments.",
    cards: [
      {
        icon: "🏠",
        title: "Un bon moment pour vendre",
        body: "En 2026, le marché en Outaouais reste favorable aux vendeurs bien positionnés. L'offre de propriétés a augmenté par rapport aux années précédentes, ce qui signifie que la présentation et le prix juste font maintenant une vraie différence. Les propriétés bien préparées trouvent rapidement preneur.",
        source: "Source\u00a0: Chambre immobilière de l'Outaouais, 2026",
        cta: "Évaluation gratuite →",
        href: "/evaluation-gratuite-gatineau",
      },
      {
        icon: "🔑",
        title: "Plus de choix pour les acheteurs",
        body: "Les acheteurs ont accès à plus de propriétés en 2026 qu'en 2022-2024. Le retour à un marché plus équilibré offre davantage de temps pour analyser, visiter et négocier — tout en maintenant des conditions généralement favorables aux vendeurs sérieux.",
        source: "Source\u00a0: SCHL — Perspectives du marché, 2026",
        cta: "Explorer les propriétés →",
        href: "/proprietes",
      },
      {
        icon: "📊",
        title: "Investir en Outaouais — toujours pertinent",
        body: "Le marché locatif en Outaouais connaît une phase de rééquilibrage en 2025-2026. Les plex existants à loyers abordables maintiennent une forte demande. L'analyse rigoureuse du rendement réel est plus importante que jamais avant d'investir.",
        source: "Source\u00a0: SCHL — Rapport sur le marché locatif, 2025",
        cta: "Recevoir une analyse plex →",
        href: "/investir-plex-gatineau",
      },
    ],
    bottom: "Le marché varie selon le secteur, le type de propriété et votre situation. Contactez-moi pour une analyse adaptée à votre projet spécifique.",
    bottomCta: "Parler de mon projet →",
    bottomHref: "/contact-yanis",
  },
  en: {
    eyebrow: "THE 2026 MARKET · OUTAOUAIS",
    title: 'What you need to know<br/>about the market <em>now</em>',
    intro: "The Outaouais real estate market in 2026 — explained clearly, without jargon. So you can decide with the right information.",
    cards: [
      {
        icon: "🏠",
        title: "A good time to sell",
        body: "In 2026, the Outaouais market remains favourable for well-positioned sellers. Inventory has increased compared to previous years, which means presentation and the right price now make a real difference. Well-prepared properties sell quickly.",
        source: "Source: Gatineau Real Estate Board, 2026",
        cta: "Free valuation →",
        href: "/en/home-valuation",
      },
      {
        icon: "🔑",
        title: "More choice for buyers",
        body: "Buyers have access to more properties in 2026 than in 2022-2024. The return to a more balanced market allows more time to analyze, visit and negotiate — while maintaining generally favourable conditions for serious sellers.",
        source: "Source: CMHC — Housing Market Outlook, 2026",
        cta: "Browse properties →",
        href: "/en/properties",
      },
      {
        icon: "📊",
        title: "Investing in Outaouais — still relevant",
        body: "The Outaouais rental market is rebalancing in 2025-2026. Existing plexes with affordable rents maintain strong demand. A rigorous analysis of actual returns is more important than ever before investing.",
        source: "Source: CMHC — Rental Market Report, 2025",
        cta: "Get a plex analysis →",
        href: "/en/plex",
      },
    ],
    bottom: "The market varies by area, property type and your situation. Contact me for an analysis tailored to your specific project.",
    bottomCta: "Discuss my project →",
    bottomHref: "/en/contact",
  },
};

const MarketContext2026 = React.forwardRef<HTMLElement, MarketContext2026Props>(({ lang = "fr" }, ref) => {
  const c = content[lang];

  return (
    <section ref={ref} className="py-16 md:py-24" style={{ background: "hsl(var(--ink))" }}>
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="inline-block mb-4"
            style={{ fontSize: ".7rem", fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", color: "hsl(var(--gold))" }}
          >
            {c.eyebrow}
          </span>
          <h2
            className="font-serif text-white"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", lineHeight: 1.2 }}
            dangerouslySetInnerHTML={{ __html: c.title }}
          />
          <p className="mx-auto mt-4" style={{ fontSize: ".9rem", color: "rgba(255,255,255,.55)", maxWidth: 560, lineHeight: 1.7 }}>
            {c.intro}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {c.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="text-left rounded-md p-6 flex flex-col"
              style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}
            >
              <span style={{ fontSize: "1.4rem" }} aria-hidden="true">{card.icon}</span>
              <h3 className="font-serif text-white mt-3" style={{ fontSize: "1.2rem" }}>{card.title}</h3>
              <p className="mt-3 flex-1" style={{ fontSize: ".84rem", color: "rgba(255,255,255,.55)", lineHeight: 1.8 }}>
                {card.body}
              </p>
              <p className="mt-3" style={{ fontSize: ".66rem", color: "rgba(255,255,255,.3)", fontStyle: "italic" }}>
                {card.source}
              </p>
              <Link
                to={card.href}
                onClick={() => trackCTAClick(card.cta, "market-2026")}
                className="mt-4 inline-block"
                style={{ fontSize: ".75rem", fontWeight: 600, letterSpacing: ".08em", textTransform: "uppercase", color: "hsl(var(--gold))" }}
              >
                {card.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <p className="mx-auto" style={{ fontSize: ".78rem", color: "rgba(255,255,255,.4)", maxWidth: 520 }}>
            {c.bottom}
          </p>
          <Link
            to={c.bottomHref}
            onClick={() => trackCTAClick(c.bottomCta, "market-2026-bottom")}
            className="inline-flex items-center justify-center mt-5 px-8 py-3 rounded-sm font-medium text-sm transition-colors"
            style={{ background: "hsl(var(--gold))", color: "#fff" }}
          >
            {c.bottomCta}
          </Link>
        </div>
      </div>
    </section>
  );
});

MarketContext2026.displayName = "MarketContext2026";
export default MarketContext2026;
