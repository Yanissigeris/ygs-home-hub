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
import heroImg from "@/assets/hero-aylmer-photo.webp";

/* ── FAQ data ── */
const faq = [
  {
    q: "Combien vaut une maison à Aylmer?",
    a: "Au 3e trimestre 2026, le prix médian d'une unifamiliale à Aylmer était de 530 000 $, et celui d'une copropriété de 305 000 $ (APCIQ, données Centris). Les prix varient ensuite selon le sous-secteur, le type de propriété et l'état. Contactez-moi pour une analyse comparative gratuite basée sur les ventes récentes dans votre rue.",
  },
  {
    q: "Aylmer est-il bilingue? Mon enfant peut-il aller à une école anglophone?",
    a: "Aylmer est l'un des secteurs les plus bilingues de Gatineau. On y trouve des écoles francophones (Centre de services scolaire des Portages-de-l'Outaouais) et anglophones (Western Québec School Board). L'accès à l'école publique anglaise demande un certificat d'admissibilité. C'est un attrait majeur pour les familles d'Ottawa ou les fonctionnaires fédéraux qui souhaitent conserver un environnement anglophone tout en vivant au Québec.",
  },
  {
    q: "Combien de temps faut-il pour vendre une maison à Aylmer?",
    a: "Le marché d'Aylmer reste actif, une propriété bien positionnée et correctement évaluée attire rapidement les acheteurs sérieux. Le délai dépend du prix, du sous-secteur et de la présentation. Contactez-moi pour une lecture réaliste de votre situation.",
  },
  {
    q: "Vaut-il mieux acheter à Aylmer ou à Ottawa?",
    a: "À budget égal, Aylmer offre généralement plus d'espace et une maison plus récente. Pour les familles qui cherchent la nature, la qualité de vie y est comparable. Les impôts fonciers sont différents (Québec vs Ontario), et les règles hypothécaires sont les mêmes. Le principal facteur est souvent la langue scolaire et l'accès au marché du travail. Je peux vous aider à comparer les deux options selon votre situation.",
  },
  {
    q: "Est-ce que vous travaillez spécifiquement à Aylmer?",
    a: "Aylmer est l'un de mes secteurs principaux depuis plus de 9 ans. Je connais les rues, les comparables récents, les micro-tendances par sous-secteur, et les attentes des acheteurs cibles pour chaque type de propriété. Cette connaissance du terrain sert autant à la vente qu'à l'achat.",
  },
];

/* ── Sub-sectors ── */
const subSectors = [
  {
    title: "Vieux-Aylmer",
    text: "Le cœur historique d'Aylmer. Propriétés de caractère, rue Principale animée, cafés et restaurants. Style de vie plus urbain et walkable.",
    tag: "Caractère · Walkable",
  },
  {
    title: "Aylmer nord",
    text: "Secteur plus calme, lotissements récents, grandes cours, accès au boulevard des Allumettières. Attire les jeunes familles qui cherchent plus d'espace à prix accessible.",
    tag: "Espace · Récent · Accessible",
  },
  {
    title: "Bord de l'eau",
    text: "Propriétés au bord de la rivière des Outaouais, avec accès nautique et terrains plus grands. Marché de niche, avec peu de propriétés offertes à la fois.",
    tag: "Prestige · Bord de l'eau",
  },
];

/* ── Buyer checklist columns ── */
const buyerCols = [
  {
    title: "Avant de visiter",
    items: [
      "Obtenez votre préapprobation hypothécaire",
      "Définissez votre secteur prioritaire (Vieux-Aylmer, Aylmer nord, bord de l'eau)",
      "Vérifiez la proximité des écoles souhaitées",
      "Regardez les ventes récentes de votre sous-secteur avant de faire une offre",
      "Prévoyez un budget pour l'inspection",
    ],
  },
  {
    title: "Sur le marché",
    items: [
      "Une unifamiliale s'est vendue en 25 jours en moyenne à Aylmer au 3e trimestre 2026, contre 34 pour la région (APCIQ)",
      "Quand une propriété est bien placée, visitez vite",
      "L'inspection pré-offre est une option à considérer",
      "Faites-vous préapprouver avant de visiter",
    ],
  },
  {
    title: "Spécificités Québec",
    items: [
      "Promesse d'achat (pas d'offre d'achat comme en Ontario)",
      "Notaire obligatoire pour la transaction",
      "Taxe de bienvenue à prévoir (droits de mutation)",
      "Inspection en bâtiment recommandée",
      "Garantie légale de qualité incluse par défaut",
    ],
  },
];

/* ── Seller steps ── */
const sellerSteps = [
  { title: "Analyse comparative de marché", text: "Comparables récents par secteur, par rue, par type de propriété." },
  { title: "Estimation juste et documentée", text: "Pas d'inflation pour gagner votre confiance, la vérité du marché." },
  { title: "Préparation et photos pro", text: "Photographe professionnel inclus. Home staging conseillé si utile." },
  { title: "Mise en marché ciblée", text: "Centris, sites web, réseaux sociaux, réseau de courtiers." },
  { title: "Gestion des offres", text: "Stratégie de réponse, contre-offres, conditions, je vous guide." },
  { title: "Jusqu'au notaire", text: "Accompagnement complet jusqu'à la remise des clés." },
];

/* ── Lifestyle cards ── */
const lifestyleCards = [
  { icon: "🌿", title: "Nature à deux pas", text: "Le parc de la Gatineau et la rivière des Outaouais sont tout près, et des pistes cyclables mènent à Ottawa par le pont Champlain. La nature est accessible sans quitter les rues résidentielles." },
  { icon: "🛒", title: "Services complets", text: "Commerces de proximité, grandes surfaces (IGA, Maxi), restaurants, cliniques médicales, bibliothèque. Vieux-Aylmer offre boutiques locales et terrasses animées l'été. Tout sans quitter le secteur." },
  { icon: "🏫", title: "Écoles francophones et anglophones", text: "Secteur particulièrement bien desservi pour les familles bilingues. Écoles francophones (Centre de services scolaire des Portages-de-l'Outaouais), écoles anglophones (Western Québec). Un atout majeur pour les familles d'Ottawa qui relocalisent." },
];


/* ── Related pages ── */
const related = [
  { title: "Hull", text: "Urbain, culture, condos et plex.", href: "/hull/" },
  { title: "Gatineau centre", text: "Résidentiel, services, abordable.", href: "/gatineau/" },
  { title: "Chelsea", text: "Village artistique, parc de la Gatineau.", href: "/chelsea/" },
  { title: "Cantley", text: "Nature, campagne, familles.", href: "/cantley/" },
];


const AylmerPage = () => (
  <>
    <PageMeta
  title="Courtier immobilier Aylmer Gatineau | Yanis Gauthier-Sigeris (YGS)"
  description="Yanis Gauthier-Sigeris, courtier immobilier à Aylmer, Gatineau. Maisons unifamiliales, condos, plex. Évaluation gratuite, connaissance locale approfondie."
  ogImage="https://yanisgauthier.com/og/og-aylmer.jpg" />
    <NeighborhoodJsonLd
      name="Aylmer"
      description="Courtier immobilier à Aylmer, Gatineau. Quartiers familiaux, écoles, parcs et vie communautaire."
      lat={45.3945}
      lng={-75.8486}
      url="/aylmer/"
    />
    

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="AYLMER · GATINEAU (QUÉBEC)"
      title="Votre courtier immobilier à Aylmer"
      subtitle="Aylmer est un secteur bilingue, avec des parcs et beaucoup de maisons récentes. Au 3e trimestre 2026, une unifamiliale s'y est vendue en 25 jours en moyenne (APCIQ)."
      primaryCta={{ label: "Évaluation gratuite →", href: "/evaluation-maison-aylmer/" }}
      secondaryCta={{ label: "Voir les propriétés à Aylmer →", href: "/proprietes?secteur=aylmer" }}
      heroBgImage={heroImg}
      photoCredit={{ text: "Photo : Veillg1, CC BY-SA 4.0, Wikimedia Commons (recadrée)", href: "https://commons.wikimedia.org/wiki/File:Gatineau_(Qu%C3%A9bec)-Marina_d%27Aylmer-Vue_du_bout_des_jet%C3%A9es_et_de_la_rivi%C3%A8re_des_Outaouais-2023-05-26.jpg" }}
    />

    {/* ═══ SECTION 1 — PORTRAIT DU SECTEUR ═══ */}
    <section className="section-padding bg-[var(--cream)]">
      <div className="section-container grid gap-12 lg:grid-cols-5 lg:items-start">
        {/* Left — text (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <h2>Ce qui distingue Aylmer en Outaouais</h2>
          <p className="prose-body mt-5">
            Aylmer est le secteur ouest de Gatineau, bordé par la rivière des Outaouais. On y vit en banlieue sans s'éloigner d'Ottawa. Les maisons y sont en moyenne plus récentes qu'à Hull ou au centre de Gatineau, avec des cours plus grandes et des rues tranquilles.
          </p>
          <p className="prose-body">
            On y trouve des écoles francophones et anglophones, et plusieurs rues matures près des parcs. Le Vieux-Aylmer a un cachet patrimonial, avec des propriétés de caractère et des commerces de proximité dans une ambiance de village.
          </p>
          <p className="prose-body">
            Pour les acheteurs en provenance d'Ottawa, Aylmer représente souvent un gain immédiat en espace et en qualité de vie pour le même budget, ou moins. Côté vendeur, la présentation et un prix aligné sur les ventes récentes décident si la maison part vite ou si elle reste sur le marché.
          </p>
        </div>

        {/* Right — CTA facts card (2 cols) */}
        <div className="lg:col-span-2">
          <div className="rounded-md border border-border bg-background p-6 space-y-5">
            <h3 className="font-serif text-lg font-semibold text-foreground">Combien vaut une propriété ici?</h3>
            <p className="text-[0.88rem] text-muted-foreground leading-relaxed">
              Les prix varient selon le secteur précis, le type de propriété, l'état, et les ventes récentes dans votre rue. La seule façon d'obtenir un chiffre fiable, c'est une analyse comparative basée sur les vrais comparables actuels.
            </p>
            <Button className="w-full" size="lg" asChild>
              <Link to="/evaluation-maison-aylmer/">Obtenir les vrais chiffres →</Link>
            </Button>
            <p className="text-[0.72rem] text-muted-foreground italic text-center">
              Gratuit · Sans engagement · Réponse personnalisée
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ═══ REGARD TERRAIN : mots de Yanis, entrevue du 6 nov. 2026 ═══ */}
    <section className="section-padding bg-background border-b border-border/60">
      <div className="section-container max-w-3xl space-y-4">
        <h2>Le marché d'Aylmer, vu du terrain</h2>
          <p className="prose-body mt-5">
            Sur le terrain, je vois un marché plus équilibré à Aylmer. Il y a plus de propriétés à vendre, et les acheteurs prennent leur temps. La négociation a donc un peu plus de place qu'avant.
          </p>
          <p className="prose-body">
            Pour un vendeur, ça demande d'accepter la nouvelle réalité du marché et de s'y ajuster dès la mise en vente.
          </p>
          <p className="prose-body">
            La question qu'on me pose le plus en ce moment, c'est quand le marché va reprendre. Je ne peux pas vous donner de date. Trop d'éléments jouent en même temps, comme les taux d'intérêt, l'économie en général, le prix des maisons et l'incertitude sur les emplois. À Gatineau, tout près d'Ottawa, beaucoup de gens travaillent au fédéral, et il y a eu plusieurs coupures.
          </p>
          <p className="prose-body">
            On me dit souvent aussi qu'Aylmer est surtout anglophone. À mon avis, c'est plutôt un bon moitié-moitié.
          </p>
          <p className="text-[0.8125rem] text-muted-foreground pt-2">
            <Link to="/contact-yanis/" className="underline underline-offset-2 hover:text-foreground">Yanis Gauthier-Sigeris</Link>, courtier immobilier · novembre 2026
          </p>
      </div>
    </section>

    {/* ═══ SECTION 2 — SOUS-SECTEURS ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <h2 className="mt-3">Choisir le bon quartier à Aylmer</h2>
        <p className="prose-body mt-4 max-w-2xl">
          Aylmer n'est pas homogène. Chaque sous-secteur a sa personnalité, son profil d'acheteur et ses prix. Voici ce qu'il faut savoir avant de chercher.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

    {/* ═══ SECTION 3 — ACHETER À AYLMER ═══ */}
    <section className="section-padding bg-[var(--cream)]">
      <div className="section-container">
        <h2 className="mt-3">Ce que vous devez savoir avant d'acheter à Aylmer</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {buyerCols.map((col) => (
            <div key={col.title} className="space-y-4">
              <h3 className="font-semibold text-foreground">{col.title}</h3>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-accent" />
                    <span className="text-[0.9375rem] text-muted-foreground leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="prose-body mb-4">Première visite à Aylmer? Je vous guide secteur par secteur.</p>
          <Button size="lg" asChild>
            <Link to="/consultation-acheteur/">Réserver une consultation →</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ═══ SECTION 4 — VENDRE À AYLMER ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container grid gap-12 lg:grid-cols-2 lg:items-start">
        {/* Left — body */}
        <div className="space-y-4">
          <h2>Vendre votre propriété à Aylmer au bon prix</h2>
          <p className="prose-body mt-5">
            Au 3e trimestre 2026, le prix médian d'une unifamiliale à Aylmer était de 530 000 $, en baisse de 5 %, et les ventes ont reculé de 23 % (APCIQ). Une propriété bien positionnée se vend quand même. Bien positionné veut dire au juste prix et avec une présentation soignée, pas forcément au prix le plus haut.
          </p>
          <p className="prose-body">
            Les acheteurs à Aylmer sont exigeants. Ils comparent activement les propriétés, font des offres rapidement sur les coups de cœur, et passent leur chemin sur les maisons surévaluées ou mal présentées. Un courtier qui connaît les comparables récents par rue, pas juste par secteur, fait une différence réelle sur votre prix final.
          </p>
          <p className="prose-body">
            Ce que j'apporte concrètement : une évaluation basée sur les ventes récentes de votre micro-secteur, des photos professionnelles et une stratégie de prix définie avec vous. Ensuite, une mise en marché qui rejoint les acheteurs sérieux, y compris ceux d'Ottawa qui cherchent à Aylmer.
          </p>
          <Button className="mt-4" size="lg" asChild>
            <Link to="/evaluation-maison-aylmer/">Évaluation gratuite de votre propriété →</Link>
          </Button>
        </div>

        {/* Right — steps */}
        <div className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-6">Mon plan vendeur, Aylmer</h3>
          {sellerSteps.map((s, i) => (
            <div key={s.title} className="flex gap-4 items-start py-4 border-b border-border last:border-0">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-semibold text-sm shrink-0">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-foreground text-[0.9375rem]">{s.title}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SECTION 5 — VIE À AYLMER ═══ */}
    <section className="section-padding bg-[var(--cream)]">
      <div className="section-container">
        <h2 className="mt-3">La vie quotidienne à Aylmer</h2>
        <p className="prose-body mt-4 max-w-2xl">
          Ce que les chiffres ne disent pas sur Aylmer : la vie de tous les jours.
        </p>
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
    <FAQSection title="Questions fréquentes sur Aylmer" items={faq} updated={{ date: "2026-11-04", source: "Chiffres de marché : APCIQ, 3e trimestre 2026" }} />

    {/* ═══ SECTION 7 — CTA FINAL ═══ */}
    <CTASection
      dark
      title="Prêt à passer à l'étape suivante?"
      text="Pour vendre votre maison à Aylmer ou acheter dans le secteur, je suis votre courtier local."
      buttons={[
        { label: "Évaluation gratuite →", href: "/evaluation-maison-aylmer/" },
        { label: "Me contacter →", href: "/contact-yanis/", variant: "outline" },
      ]}
      trustLine="« Je vous donne les chiffres et les options, vous décidez. »"
    />

    {/* ═══ RELATED ═══ */}
    <RelatedPages
      overline="Explorer d'autres secteurs"
      title="Découvrir"
      pages={[
        ...related,
        { title: "Vivre à Aylmer : le guide", text: "Quotidien, écoles, parcs et vie de quartier.", href: "/vivre-a-aylmer/" },
        { title: "Propriétés à Aylmer", text: "Voir les inscriptions en cours.", href: "/proprietes/" },
        { title: "Relocalisation Ottawa → Gatineau", text: "Guide complet pour traverser la rivière.", href: "/relocalisation-ottawa-gatineau/" },
      ]}
      background="alt"
    />

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Guide acheteur gratuit : acheter à Aylmer"
      text="Processus, budget et conseils pour acheter dans le secteur, dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide acheteur"
    />

    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit, recevez-le par courriel" />
  </>
);

export default AylmerPage;
