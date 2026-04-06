import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import NeighborhoodJsonLd from "@/components/NeighborhoodJsonLd";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import RelatedPages from "@/components/RelatedPages";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import heroImg from "@/assets/hero-hull-gen.webp";

/* ── FAQ data ── */
const faq = [
  {
    q: "Quel est le prix d'un condo à Hull en 2026?",
    a: "Le prix médian d'un condo à Hull se situe autour de 299 000 $ en 2026, avec une fourchette large selon la localisation et les finitions. Un studio dans le Vieux-Hull peut se trouver autour de 200 000 $, tandis qu'un condo 2 chambres avec vue sur la rivière dans le secteur Zibi peut dépasser 450 000 $. Pour une analyse précise selon votre budget et vos besoins, contactez-moi.",
  },
  {
    q: "Le projet Zibi — est-ce une bonne opportunité d'achat?",
    a: "Zibi est un projet ambitieux qui transforme l'ancienne usine Domtar sur l'Île de Hull et l'Île Chaudière. Les premières phases sont livrées et les suivantes sont en cours. C'est un secteur à fort potentiel de valorisation, mais les prix des neufs sont élevés. Les propriétés dans les secteurs adjacents (Vieux-Hull, Wrightville) bénéficient souvent de l'effet de valorisation à des prix plus accessibles. Je peux vous aider à évaluer les options selon votre profil.",
  },
  {
    q: "Est-ce rentable d'acheter un plex à Hull?",
    a: "Hull offre les meilleures conditions pour l'investissement locatif en Outaouais : faible vacance, forte demande, bonne valorisation. Mais « rentable » dépend du prix d'acquisition, des loyers en place, de l'état de la propriété et de votre financement. Je fais des analyses de rendement honnêtes — avec les vrais chiffres. Si un plex ne passe pas le test, je vous le dis clairement.",
  },
  {
    q: "Hull est-il sécuritaire?",
    a: "Hull a une réputation historique qui ne reflète plus la réalité de plusieurs secteurs. Le Vieux-Hull et l'Île de Hull se sont considérablement transformés. Comme toute ville, certains secteurs sont plus calmes que d'autres. Lors de votre recherche, je vous dirige vers les rues et micro-secteurs qui correspondent à vos attentes en termes de style de vie et de sécurité.",
  },
];

/* ── Sub-sectors ── */
const subSectors = [
  {
    title: "Vieux-Hull",
    text: "Le cœur historique avec le Sentier culturel, les murales, les restaurants de la rue Laramée et du boulevard Fournier. Architecture de caractère, immeubles à revenus anciens, vie de quartier animée. Idéal pour les investisseurs et les acheteurs qui cherchent l'authenticité urbaine.",
    tag: "Caractère · Investissement",
  },
  {
    title: "Île de Hull — Projet Zibi",
    text: "Le futur de Hull. Condos neufs, architecture moderne, vue sur la rivière, à deux pas du Musée canadien de l'histoire. Clientèle : jeunes professionnels, couples sans enfants, fonctionnaires fédéraux. Prix en hausse rapide.",
    tag: "Neuf · Premium · Vue",
  },
  {
    title: "Wrightville / Val-Tétreau",
    text: "Secteur central en transition. Bungalows des années 60-80, terrains plus grands, prix encore accessibles. Fort potentiel de valorisation avec la ligne de tramway Gatineau-Ottawa en développement. Attire les investisseurs visionnaires.",
    tag: "Valeur · Potentiel · Tramway",
  },
  {
    title: "Lac Leamy",
    text: "Le secteur premium de Hull. Près du Casino et du Spa Nordik, condos haut de gamme, maisons avec vue sur le lac. Clientèle aisée, tourisme d'affaires, location court terme lucrative. Marché de niche.",
    tag: "Premium · Lac · Casino",
  },
];

/* ── Investment stats ── */
const investStats = [
  { number: "~1.9%", label: "Taux d'inoccupation", note: "Parmi les plus bas au Québec" },
  { number: "35 j.", label: "Délai moyen de vente — plex", note: "Liquidité supérieure à la moyenne" },
  { number: "↑ 9%", label: "Hausse prix plexs — 1 an", note: "Valorisation soutenue" },
];

/* ── Lifestyle cards ── */
const lifestyleCards = [
  { icon: "🎨", title: "Culture et vie urbaine", text: "Musée canadien de l'histoire (l'un des plus visités du Canada), Casino du Lac-Leamy, Sentier culturel avec murales et galeries, bars et restaurants du Vieux-Hull, festival Gatineau en Feu. Hull offre une vie culturelle rare pour une ville de cette taille." },
  { icon: "🌉", title: "Ottawa à 5 minutes", text: "Pont Alexandra, pont des Chaudières, pont Portage — trois accès directs vers le centre d'Ottawa. Pour les fonctionnaires fédéraux ou les professionnels qui travaillent en Ontario, Hull est souvent le meilleur compromis : qualité de vie Québec, accessibilité Ontario." },
  { icon: "🌊", title: "Nature et eau en ville", text: "Parc Leamy (plage, sentiers, sports nautiques), Parc Jacques-Cartier (Winterlude, Fête du Canada), promenade riveraine en développement avec Zibi. Hull est rare : une ville dense avec accès direct à l'eau." },
];

/* ── Related pages ── */
const related = [
  { title: "Aylmer", text: "Lac Deschênes, familles, bilingue.", href: "/aylmer" },
  { title: "Gatineau centre", text: "Résidentiel, services, abordable.", href: "/gatineau" },
  { title: "Chelsea", text: "Village artistique, parc de la Gatineau.", href: "/chelsea" },
  { title: "Cantley", text: "Nature, campagne, familles.", href: "/cantley" },
];

const HullPage = () => (
  <>
    <PageMeta
      title="Courtier immobilier Hull Gatineau | YGS"
      description="Courtier immobilier spécialisé à Hull, Gatineau. Condos, plexs, maisons près d'Ottawa. Projet Zibi, Île de Hull, Vieux-Hull. Évaluation gratuite."
    />
    <NeighborhoodJsonLd
      name="Hull"
      description="Courtier immobilier spécialisé à Hull, Gatineau. Condos, plexs, maisons près d'Ottawa. Projet Zibi, Île de Hull, Vieux-Hull."
      lat={45.4283}
      lng={-75.7140}
      url="/hull"
    />
    

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="HULL · GATINEAU (QUÉBEC)"
      title="Courtier immobilier à Hull — au cœur de l'Outaouais urbain"
      subtitle="Hull est le secteur le plus dynamique de Gatineau. À deux pas d'Ottawa, en pleine transformation avec le projet Zibi, Hull attire autant les professionnels que les investisseurs. Condos modernes, plexs rentables, maisons de caractère — c'est le secteur où tout se passe."
      primaryCta={{ label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Voir les propriétés à Hull →", href: "/proprietes?secteur=hull" }}
      heroBgImage={heroImg}
    />

    {/* ═══ SECTION 1 — PORTRAIT DU SECTEUR ═══ */}
    <section className="section-padding bg-secondary/20">
      <div className="section-container grid gap-12 lg:grid-cols-5 lg:items-start">
        <div className="lg:col-span-3 space-y-4">
          <p className="label-overline">POURQUOI HULL</p>
          <h2>Hull : le secteur qui se réinvente</h2>
          <p className="prose-body mt-5">
            Hull est le secteur historique de Gatineau, situé directement en face d'Ottawa, de l'autre côté de la rivière des Outaouais. C'est le quartier le plus urbain de la ville, avec la plus forte densité de condos, de plexs, de restaurants et de commerces. Pour les travailleurs du fédéral, c'est souvent le choix numéro un — on traverse le pont et on est au centre d'Ottawa en 10 minutes.
          </p>
          <p className="prose-body">
            Le projet Zibi, en cours de développement sur l'Île de Hull et l'île Chaudière, est en train de transformer le secteur. Condos neufs haut de gamme, espaces publics riverains, bureaux fédéraux — c'est le plus grand projet immobilier mixte de l'Outaouais depuis des décennies. Les acheteurs qui se positionnent maintenant dans les secteurs adjacents bénéficient de l'effet de valorisation de ce développement.
          </p>
          <p className="prose-body">
            Pour les investisseurs, Hull offre les meilleurs rendements locatifs de Gatineau. Le taux d'inoccupation y est historiquement bas (sous 2%), les locataires sont nombreux (étudiants, fonctionnaires, jeunes professionnels), et les plexs se vendent encore à des prix permettant un cash flow positif si bien analysés.
          </p>
        </div>

        {/* Right — Key facts card */}
        <div className="lg:col-span-2">
          <div className="rounded-md border border-border bg-background p-6 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">Hull en chiffres</h3>
            <div className="space-y-3">
              {[
                { label: "Prix médian condos", value: "299 000 $", badge: "↑ 7%" },
                { label: "Prix médian maisons", value: "498 000 $", badge: "↑ 6%" },
                { label: "Délai moyen", value: "21 jours", badge: null },
                { label: "Marché", value: "Vendeur", badge: null },
                { label: "Taux inoccupation locatif", value: "~1.9%", badge: null },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between border-b border-border pb-2 last:border-0 last:pb-0">
                  <span className="text-[0.85rem] text-muted-foreground">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground text-[0.9375rem]">{item.value}</span>
                    {item.badge && (
                      <span className="text-xs font-medium text-accent">{item.badge}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ═══ SECTION 2 — SOUS-SECTEURS ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <p className="label-overline">LES SECTEURS DE HULL</p>
        <h2 className="mt-3">Hull n'est pas un seul quartier</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {subSectors.map((s) => (
            <div key={s.title} className="rounded-md border border-border bg-background p-6 space-y-3 hover:-translate-y-0.5 transition-transform">
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">{s.text}</p>
              <span className="inline-block text-xs font-medium text-accent">{s.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 3 — INVESTIR À HULL ═══ */}
    <section className="section-padding bg-secondary/20">
      <div className="section-container">
        <p className="label-overline">INVESTISSEMENT LOCATIF</p>
        <h2 className="mt-3">Pourquoi les investisseurs choisissent Hull</h2>
        <p className="prose-body mt-4 max-w-2xl">
          Hull est le secteur numéro un de Gatineau pour l'investissement locatif. Voici pourquoi les chiffres parlent d'eux-mêmes.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {investStats.map((s) => (
            <div key={s.label} className="rounded-md border border-border bg-background p-6 text-center space-y-2">
              <p className="text-3xl font-serif font-bold text-foreground">{s.number}</p>
              <p className="font-semibold text-foreground text-[0.9375rem]">{s.label}</p>
              <p className="text-sm text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>
        <p className="prose-body mt-8 max-w-2xl">
          Un duplex ou triplex bien analysé à Hull peut offrir un rendement brut de 5 à 7%, selon l'état de la propriété, le loyer en place, et la stratégie d'acquisition. Mais les erreurs sont coûteuses — capex ignoré, loyers en dessous du marché, zonage mal compris. C'est exactement là que j'interviens : l'analyse honnête avant la décision.
        </p>
        <div className="mt-6">
          <Button size="lg" asChild>
            <Link to="/investir-plex-gatineau">Recevoir une analyse plex gratuite →</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ═══ SECTION 4 — ACHETER / VENDRE ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <h2>Acheter ou vendre à Hull — ce qu'il faut savoir</h2>
        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          {/* Acheteurs */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">Acheteurs</h3>
            <p className="prose-body">
              Hull est un marché rapide. Les condos bien positionnés partent en moins de 2 semaines. Pour les maisons et les plexs, la fenêtre est un peu plus large mais reste courte. Préparez votre préapprobation avant de commencer à visiter.
            </p>
            <p className="prose-body">
              Les acheteurs d'Ottawa qui découvrent Hull sont souvent surpris : pour le même budget qu'un condo 1 chambre à Centretown, on peut avoir un condo 2 chambres avec vue sur la rivière à Hull. Le pont en 5 minutes de voiture ou de vélo compense largement.
            </p>
          </div>
          {/* Vendeurs */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">Vendeurs</h3>
            <p className="prose-body">
              Le marché de Hull favorise les vendeurs depuis plusieurs années consécutives. Mais la différence entre une bonne vente et une excellente vente se joue dans les détails : le bon prix au départ, une présentation soignée, et une mise en marché qui cible aussi les acheteurs de la rive ontarienne.
            </p>
            <p className="prose-body">
              Si vous vendez un plex, l'analyse de rendement que je présente aux acheteurs-investisseurs peut justifier un prix plus élevé — si les chiffres le permettent.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ═══ SECTION 5 — VIE À HULL ═══ */}
    <section className="section-padding bg-secondary/20">
      <div className="section-container">
        <p className="label-overline">VIVRE À HULL</p>
        <h2 className="mt-3">Ce qu'on ne vous dit pas sur Hull</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {lifestyleCards.map((c) => (
            <div key={c.title} className="rounded-md border border-border bg-background p-6 space-y-3">
              <span className="text-2xl">{c.icon}</span>
              <h3 className="font-semibold text-foreground">{c.title}</h3>
              <p className="text-[0.9375rem] text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 6 — FAQ ═══ */}
    <FAQSection title="Questions fréquentes — Hull" items={faq} />

    {/* ═══ SECTION 7 — CTA FINAL ═══ */}
    <CTASection
      dark
      title="Votre projet à Hull — par où commencer?"
      text="Achat, vente, investissement locatif — Hull est un secteur que je connais depuis presque 9 ans. Parlons de votre projet."
      buttons={[
        { label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau" },
        { label: "Analyser un plex →", href: "/investir-plex-gatineau", variant: "outline" },
      ]}
      trustLine="« Je vous donne les chiffres et les options, vous décidez. »"
    />

    {/* ═══ RELATED ═══ */}
    <RelatedPages
      overline="Explorer d'autres secteurs"
      title="Découvrir"
      pages={related}
      background="alt"
    />

    <GuideInlineCTA
      guideType="investor_guide"
      headline="Guide investisseur gratuit — plex à Hull"
      text="Rendement, fiscalité et stratégie d'investissement — dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide investisseur"
    />

    <StickyGuideBanner guideType="investor_guide" label="Guide investisseur gratuit — recevez-le par courriel" />
  </>
);

export default HullPage;
