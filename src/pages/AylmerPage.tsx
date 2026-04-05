import { useEffect } from "react";
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
import heroImg from "@/assets/hero-aylmer-gen.jpg";

/* ── FAQ data ── */
const faq = [
  {
    q: "Quel est le prix moyen d'une maison à Aylmer en 2026?",
    a: "Le prix médian pour une maison unifamiliale à Aylmer se situe autour de 567 000 $ en début 2026, avec des variations significatives selon le sous-secteur. Lucerne et Rivermead sont généralement plus chers (600 000 $ – 750 000 $), tandis que certaines rues de Breckenridge offrent encore des options sous les 500 000 $. Pour une estimation précise de votre propriété ou de votre budget cible, contactez-moi pour une analyse gratuite.",
  },
  {
    q: "Aylmer est-il bilingue? Mon enfant peut-il aller à une école anglophone?",
    a: "Aylmer est effectivement l'un des secteurs les plus bilingues de Gatineau. On y trouve des écoles francophones (Commission scolaire des Portages de l'Outaouais) et anglophones (Western Québec School Board). C'est un attrait majeur pour les familles d'Ottawa ou les fonctionnaires fédéraux qui souhaitent conserver un environnement anglophone tout en vivant au Québec.",
  },
  {
    q: "Combien de temps faut-il pour vendre une maison à Aylmer?",
    a: "En 2025-2026, les propriétés bien positionnées à Aylmer se vendent en moyenne entre 20 et 35 jours. Les maisons à Lucerne et Rivermead avec bonne présentation et prix juste partent souvent en moins de 15 jours avec offres multiples. Une propriété surévaluée peut rester 60-90 jours sur le marché, ce qui envoie un signal négatif aux acheteurs.",
  },
  {
    q: "Vaut-il mieux acheter à Aylmer ou à Ottawa?",
    a: "C'est une question que j'entends souvent. À budget égal, Aylmer offre généralement plus d'espace, une maison plus récente, et une qualité de vie comparable — voire supérieure pour les familles cherchant la nature. Les impôts fonciers sont différents (Québec vs Ontario), et les règles hypothécaires sont les mêmes. Le principal facteur est souvent la langue scolaire et l'accès au marché du travail. Je peux vous aider à comparer les deux options honnêtement.",
  },
  {
    q: "Est-ce que vous travaillez spécifiquement à Aylmer?",
    a: "Aylmer est l'un de mes secteurs principaux depuis presque 9 ans. Je connais les rues, les comparables récents, les micro-tendances par sous-secteur, et les attentes des acheteurs cibles pour chaque type de propriété. Cette connaissance locale se traduit directement en résultats — que vous vendiez ou achetiez.",
  },
];

/* ── Sub-sectors ── */
const subSectors = [
  {
    title: "Lucerne / Rivermead",
    text: "Secteur résidentiel prisé d'Aylmer. Maisons établies et rénovées, rues matures avec arbres, proximité du lac Deschênes et des pistes cyclables. Ambiance familiale avec un excellent accès au pont Champlain. Prix : 550 000 $ – 750 000 $.",
    tag: "Familles · Établi · Recherché",
  },
  {
    title: "Vieux-Aylmer",
    text: "Le cœur historique d'Aylmer. Propriétés de caractère, rues piétonnes, cafés, restaurants. Style de vie plus urbain et walkable. Clientèle mixte : professionnels, couples, retraités. Prix : 450 000 $ – 650 000 $.",
    tag: "Caractère · Walkable",
  },
  {
    title: "Aylmer nord / Breckenridge",
    text: "Secteur plus calme, lotissements récents, grandes cours, accès rapide à l'autoroute 50. Attire les jeunes familles qui cherchent plus d'espace à prix accessible. Prix : 480 000 $ – 620 000 $.",
    tag: "Espace · Récent · Accessible",
  },
  {
    title: "Bord de l'eau · Lac Deschênes",
    text: "Propriétés en bord de rivière et de lac, accès nautique, terrain plus grands. Marché de niche avec des propriétés exceptionnelles. Rareté = valeur stable à long terme. Prix : 700 000 $ – 1 200 000 $+",
    tag: "Prestige · Bord de l'eau",
  },
];

/* ── Buyer checklist columns ── */
const buyerCols = [
  {
    title: "Avant de visiter",
    items: [
      "Obtenez votre préapprobation hypothécaire",
      "Définissez votre secteur prioritaire (Plateau vs Vieux-Aylmer)",
      "Vérifiez la proximité des écoles souhaitées",
      "Comprenez le marché actuel (vendeur = offres rapides)",
      "Prévoyez un budget pour l'inspection",
    ],
  },
  {
    title: "Sur le marché",
    items: [
      "Les bonnes propriétés partent en 10-20 jours",
      "Les offres multiples sont fréquentes sur le Plateau",
      "Une visite rapide peut faire la différence",
      "L'inspection pré-offre est une option à considérer",
      "Prévoyez 5-10% au-dessus du prix demandé en zone compétitive",
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
  { title: "Estimation juste et documentée", text: "Pas d'inflation pour gagner votre confiance — la vérité du marché." },
  { title: "Préparation et photos pro", text: "Photographe professionnel inclus. Home staging conseillé si utile." },
  { title: "Mise en marché ciblée", text: "Centris, sites web, réseaux sociaux, réseau de courtiers." },
  { title: "Gestion des offres", text: "Stratégie de réponse, contre-offres, conditions — je vous guide." },
  { title: "Jusqu'au notaire", text: "Accompagnement complet jusqu'à la remise des clés." },
];

/* ── Lifestyle cards ── */
const lifestyleCards = [
  { icon: "🌿", title: "Nature à deux pas", text: "Lac Beauchamp (plage, canot, sentiers), rivière des Outaouais, pistes cyclables vers Ottawa via le pont Champlain. Aylmer est l'une des rares zones urbaines avec un lac public en plein cœur du quartier résidentiel." },
  { icon: "🛒", title: "Services complets", text: "Commerces de proximité, grandes surfaces (IGA, Maxi), restaurants, cliniques médicales, bibliothèque. Vieux-Aylmer offre boutiques locales et terrasses animées l'été. Tout sans quitter le secteur." },
  { icon: "🏫", title: "Écoles francophones et anglophones", text: "Secteur particulièrement bien desservi pour les familles bilingues. Écoles francophones (CS des Portages), écoles anglophones (Western Québec), CPE nombreux. Un atout majeur pour les familles d'Ottawa qui relocalisent." },
];

/* ── Key facts ── */
const keyFacts = [
  { icon: "🏠", label: "Prix médian — maisons", value: "567 000 $", trend: "↑ 3% vs l'an dernier" },
  { icon: "⏱", label: "Délai moyen de vente", value: "28 jours" },
  { icon: "📊", label: "Type de marché", value: "Vendeur", note: "(favorise le vendeur bien positionné)" },
  { icon: "👥", label: "Population approximative", value: "~50 000 hab." },
];

/* ── Related pages ── */
const related = [
  { title: "Hull", text: "Urbain, culture, condos et plex.", href: "/hull" },
  { title: "Gatineau centre", text: "Résidentiel, services, abordable.", href: "/gatineau" },
  { title: "Chelsea", text: "Village artistique, parc de la Gatineau.", href: "/chelsea" },
  { title: "Cantley", text: "Nature, campagne, familles.", href: "/cantley" },
];

/* ── FAQPage JSON-LD injector ── */
const FAQPageJsonLd = ({ items }: { items: { q: string; a: string }[] }) => {
  useEffect(() => {
    const prev = document.getElementById("ygs-faqpage-jsonld");
    if (prev) prev.remove();
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((i) => ({
        "@type": "Question",
        name: i.q,
        acceptedAnswer: { "@type": "Answer", text: i.a },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "ygs-faqpage-jsonld";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.getElementById("ygs-faqpage-jsonld")?.remove(); };
  }, [items]);
  return null;
};

const AylmerPage = () => (
  <>
    <PageMeta
      title="Courtier immobilier Aylmer Gatineau | YGS — Yanis Gauthier-Sigeris"
      description="Yanis Gauthier-Sigeris, courtier immobilier spécialisé à Aylmer, Gatineau. Maisons unifamiliales, condos, secteur Plateau. Évaluation gratuite, connaissance locale approfondie."
    />
    <NeighborhoodJsonLd
      name="Aylmer"
      description="Courtier immobilier spécialisé à Aylmer, Gatineau. Lac Deschênes, quartiers familiaux, écoles et communauté."
      lat={45.3945}
      lng={-75.8486}
      url="/aylmer"
    />
    <FAQPageJsonLd items={faq} />

    {/* ═══ HERO ═══ */}
    <HeroSection
      overline="AYLMER · GATINEAU (QUÉBEC)"
      title="Courtier immobilier à Aylmer — votre spécialiste local"
      subtitle="Aylmer est l'un des secteurs les plus recherchés de Gatineau. Familles bilingues, lacs, parcs, maisons récentes — et un marché compétitif qui récompense les acheteurs bien préparés et les vendeurs bien positionnés."
      primaryCta={{ label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau" }}
      secondaryCta={{ label: "Voir les propriétés à Aylmer →", href: "/proprietes?secteur=aylmer" }}
      heroBgImage={heroImg}
    />

    {/* ═══ SECTION 1 — PORTRAIT DU SECTEUR ═══ */}
    <section className="section-padding bg-secondary/20">
      <div className="section-container grid gap-12 lg:grid-cols-5 lg:items-start">
        {/* Left — text (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <p className="label-overline">POURQUOI AYLMER</p>
          <h2>Ce qui rend Aylmer unique en Outaouais</h2>
          <p className="prose-body mt-5">
            Aylmer est le secteur ouest de Gatineau, bordé par la rivière des Outaouais et le lac Beauchamp. C'est le choix numéro un des familles bilingues qui veulent la qualité de vie de la banlieue sans s'éloigner d'Ottawa. Les maisons y sont en moyenne plus récentes qu'à Hull ou au centre de Gatineau, avec des cours plus grandes et des rues tranquilles.
          </p>
          <p className="prose-body">
            Le secteur du Plateau-du-Lac-Beauchamp est particulièrement prisé — des maisons deux étages construites entre 2000 et 2020, proches des parcs, des écoles francophones et anglophones, et du Parc du Lac-Beauchamp. Vieux-Aylmer offre quant à lui un charme patrimonial distinct, avec des propriétés de caractère, des commerces de proximité et une ambiance de village préservée.
          </p>
          <p className="prose-body">
            Pour les acheteurs en provenance d'Ottawa, Aylmer représente souvent un gain immédiat en espace et en qualité de vie pour le même budget — ou moins. Pour les vendeurs, c'est un marché où la présentation et le positionnement au bon prix font toute la différence entre une vente rapide et une propriété qui stagne.
          </p>
        </div>

        {/* Right — key facts card (2 cols) */}
        <div className="lg:col-span-2">
          <div className="rounded-md border border-border bg-background p-6 space-y-5">
            <h3 className="font-serif text-lg font-semibold text-foreground">Aylmer en chiffres</h3>
            {keyFacts.map((f) => (
              <div key={f.label} className="space-y-0.5">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <span>{f.icon}</span> {f.label}
                </p>
                <p className="text-lg font-semibold text-foreground">{f.value}</p>
                {f.trend && <p className="text-xs text-accent">{f.trend}</p>}
                {f.note && <p className="text-xs text-muted-foreground">{f.note}</p>}
              </div>
            ))}
            <p className="text-[0.7rem] text-muted-foreground/60 pt-2 border-t border-border">
              Données indicatives basées sur les ventes récentes. Mise à jour mensuelle.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ═══ SECTION 2 — SOUS-SECTEURS ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <p className="label-overline">LES SOUS-SECTEURS D'AYLMER</p>
        <h2 className="mt-3">Choisir le bon quartier à Aylmer</h2>
        <p className="prose-body mt-4 max-w-2xl">
          Aylmer n'est pas homogène. Chaque sous-secteur a sa personnalité, son profil d'acheteur et ses prix. Voici ce qu'il faut savoir avant de chercher.
        </p>
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

    {/* ═══ SECTION 3 — ACHETER À AYLMER ═══ */}
    <section className="section-padding bg-secondary/20">
      <div className="section-container">
        <p className="label-overline">GUIDE ACHETEUR</p>
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
            <Link to="/consultation-acheteur">Réserver une consultation →</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ═══ SECTION 4 — VENDRE À AYLMER ═══ */}
    <section className="section-padding bg-background">
      <div className="section-container grid gap-12 lg:grid-cols-2 lg:items-start">
        {/* Left — body */}
        <div className="space-y-4">
          <p className="label-overline">GUIDE VENDEUR</p>
          <h2>Vendre votre propriété à Aylmer au meilleur prix</h2>
          <p className="prose-body mt-5">
            Le marché d'Aylmer favorise les vendeurs bien positionnés. Une propriété correctement évaluée et bien mise en marché se vend généralement en moins de 30 jours, souvent avec plusieurs offres. Mais « bien positionné » ne signifie pas « le plus cher » — cela signifie le prix juste, la bonne présentation, et la bonne stratégie.
          </p>
          <p className="prose-body">
            Les acheteurs à Aylmer sont exigeants. Ils comparent activement les propriétés, font des offres rapidement sur les coups de cœur, et passent leur chemin sur les maisons surévaluées ou mal présentées. Un courtier qui connaît les comparables récents par rue — pas juste par secteur — fait une différence réelle sur votre prix final.
          </p>
          <p className="prose-body">
            Ce que j'apporte concrètement : une évaluation basée sur les vraies ventes récentes dans votre micro-secteur, des photos professionnelles, une stratégie de prix définie avec vous, et une mise en marché ciblée pour atteindre les acheteurs sérieux — incluant les relocalisateurs d'Ottawa qui cherchent activement à Aylmer.
          </p>
          <Button className="mt-4" size="lg" asChild>
            <Link to="/evaluation-maison-aylmer">Évaluation gratuite de votre propriété →</Link>
          </Button>
        </div>

        {/* Right — steps */}
        <div className="space-y-2">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-6">Mon plan vendeur — Aylmer</h3>
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
    <section className="section-padding bg-secondary/20">
      <div className="section-container">
        <p className="label-overline">VIVRE À AYLMER</p>
        <h2 className="mt-3">La vie quotidienne à Aylmer</h2>
        <p className="prose-body mt-4 max-w-2xl">
          Ce que les chiffres ne disent pas sur Aylmer — la qualité de vie réelle au quotidien.
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
    <FAQSection title="Questions fréquentes — Aylmer" items={faq} />

    {/* ═══ SECTION 7 — CTA FINAL ═══ */}
    <CTASection
      dark
      title="Prêt à passer à l'étape suivante?"
      text="Que vous vendiez votre maison à Aylmer ou que vous cherchiez à acheter dans ce secteur — je suis votre courtier local."
      buttons={[
        { label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau" },
        { label: "Me contacter →", href: "/contact", variant: "outline" },
      ]}
      trustLine="« Je vous donne les chiffres et les options, vous décidez. »"
    />

    {/* ═══ RELATED ═══ */}
    <RelatedPages
      overline="Explorer d'autres secteurs"
      title="Découvrir"
      pages={[
        ...related,
        { title: "Propriétés à Aylmer", text: "Voir les inscriptions en cours.", href: "/proprietes?secteur=aylmer" },
        { title: "Relocalisation Ottawa → Gatineau", text: "Guide complet pour traverser la rivière.", href: "/relocalisation" },
      ]}
      background="alt"
    />

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Guide acheteur gratuit — acheter à Aylmer"
      text="Processus, budget et conseils pour acheter dans le secteur — dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide acheteur"
    />

    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit — recevez-le par courriel" />
  </>
);

export default AylmerPage;
