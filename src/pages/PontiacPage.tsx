import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Users, Globe, TreePine, Waves, Bus, CheckCircle2, AlertTriangle } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import NeighborhoodJsonLd from "@/components/NeighborhoodJsonLd";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import HeroSection from "@/components/HeroSection";
import ContentBlock from "@/components/ContentBlock";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import RelatedPages from "@/components/RelatedPages";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import heroImg from "@/assets/hero-pontiac.webp";

const faq = [
  {
    q: "La municipalité de Pontiac, c'est la même chose que le Pontiac (MRC)?",
    a: "Non, et c'est une confusion très fréquente. La municipalité de Pontiac (secteurs Luskville, Breckenridge, Quyon) fait partie de la MRC des Collines-de-l'Outaouais et est incluse dans la Région de la capitale nationale. Plus vaste et beaucoup plus à l'ouest (Fort-Coulonge, Shawville, Campbell's Bay), la MRC Pontiac est hors de la RCN et forme un bassin de marché complètement différent. (Source : Wikipedia/Pontiac, Québec)",
  },
  {
    q: "Y a-t-il des écoles à Pontiac?",
    a: "La municipalité de Pontiac a des établissements scolaires primaires sur son territoire. Pour le secondaire et les services éducatifs spécialisés, les familles se dirigent généralement vers Gatineau. Pour les familles anglophones, le Western Quebec School Board a l'école primaire Onslow Elementary à Quyon, sous réserve de l'admissibilité à l'enseignement en anglais. Je vous recommande de vérifier directement auprès du centre de services scolaire et de la commission scolaire concernés pour confirmer la carte scolaire de la propriété qui vous intéresse.",
  },
  {
    q: "Pontiac est-il trop éloigné pour y habiter en travaillant à Ottawa ou Gatineau?",
    a: "Tout dépend de votre situation de travail. Depuis Luskville, le centre-ville d'Ottawa est à environ 35 km et le Vieux-Aylmer à environ 21 km par la route. Quyon, plus à l'ouest, est à environ 54 km du centre-ville d'Ottawa. Pour quelqu'un en télétravail à temps plein ou presque, Pontiac offre de grands terrains et une vie rurale. Si vous travaillez en présentiel tous les jours à Ottawa, c'est un trajet à peser sérieusement. Je vous aide à comparer selon votre situation.",
  },
  {
    q: "Pontiac est-il une bonne option pour les familles anglophones?",
    a: "Oui. Selon le recensement de 2016, environ 64 % des résidents sont bilingues et près de 39 % ont l'anglais comme langue maternelle. Pour l'école en anglais, le Western Quebec School Board a l'école Onslow Elementary à Quyon, sous réserve de l'admissibilité (certificat d'admissibilité).",
  },
];

const PontiacPage = () => {
  useEffect(() => {
    const prev = document.getElementById("ygs-pontiac-agent-jsonld");
    if (prev) prev.remove();
    const schema = {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: "Yanis Gauthier-Sigeris (YGS)",
      url: "https://yanisgauthier.com",
      areaServed: { "@type": "Place", name: "Pontiac, MRC des Collines-de-l'Outaouais, Québec, Canada" },
      description: "Courtier immobilier spécialisé dans la municipalité de Pontiac, Outaouais. Luskville, Breckenridge, Quyon.",
      telephone: "+18192103044",
      address: { "@type": "PostalAddress", streetAddress: "216 chemin d'Aylmer", addressLocality: "Gatineau", addressRegion: "QC", postalCode: "J9H 1A4", addressCountry: "CA" },
    };
    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = "ygs-pontiac-agent-jsonld";
    s.textContent = JSON.stringify(schema);
    document.head.appendChild(s);
    return () => { document.getElementById("ygs-pontiac-agent-jsonld")?.remove(); };
  }, []);

  return (
    <>
      <PageMeta
        title="Courtier immobilier Pontiac Outaouais | Luskville & Breckenridge | YGS"
        description="Achetez ou vendez dans la municipalité de Pontiac, Outaouais. Luskville, Breckenridge, Quyon. Grands terrains, rivière des Outaouais, bilingue. Courtier local : Yanis Gauthier-Sigeris." ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg" />
      <NeighborhoodJsonLd name="Pontiac" description="Courtier immobilier dans la municipalité de Pontiac. Luskville, Breckenridge, Quyon." lat={45.58} lng={-76.12} url="/pontiac/" />
      <ServiceJsonLd name="Courtier immobilier Pontiac" description="Services immobiliers dans la municipalité de Pontiac, Outaouais" url="/pontiac/" serviceType="Real Estate Brokerage" areaServed={["Pontiac", "Luskville", "Breckenridge", "Quyon"]} />

      {/* HERO */}
      <HeroSection
        overline="PONTIAC · OUTAOUAIS · RÉGION DE LA CAPITALE NATIONALE"
        title="Courtier immobilier à Pontiac, entre la rivière des Outaouais et le parc de la Gatineau"
        subtitle="La municipalité de Pontiac s'étend entre la rivière des Outaouais, la rivière Quyon et les collines du parc de la Gatineau. Dans la Région de la capitale nationale, c'est un grand territoire rural et bilingue, encore abordable. Les acheteurs qui veulent beaucoup d'espace sont souvent surpris par ce qu'ils y trouvent."
        primaryCta={{ label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau/" }}
        secondaryCta={{ label: "Me parler de mon projet →", href: "/contact-yanis/" }}
        heroBgImage={heroImg}
      />

      {/* SECTION 1 — Précision importante */}
      <ContentBlock background="alt" padSize="md">
        <div className="max-w-[44rem] mx-auto">
          <div className="border-l-[3px] border-accent bg-background rounded-sm px-5 py-4">
            <p className="text-[0.88rem] text-muted-foreground leading-relaxed">
              <AlertTriangle size={14} className="inline mr-1.5 text-accent -mt-0.5" />
              <strong>À ne pas confondre</strong> : la municipalité de Pontiac (secteur Luskville, Breckenridge, Quyon) fait partie de la MRC des Collines-de-l'Outaouais et de la Région de la capitale nationale. Elle est distincte de la MRC Pontiac, un territoire beaucoup plus à l'ouest, non inclus dans la capitale nationale. Yanis Gauthier-Sigeris couvre la municipalité de Pontiac (Collines-de-l'Outaouais).
            </p>
          </div>
        </div>
      </ContentBlock>

      {/* SECTION 2 — Portrait */}
      <ContentBlock>
        <h2 className="mb-8">La municipalité de Pontiac, des faits vérifiés</h2>
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          <div className="md:col-span-3 space-y-5 text-[0.9375rem] text-muted-foreground leading-relaxed">
            <p>La municipalité de Pontiac a été créée en 1975 par la fusion de quatre municipalités : North Onslow, South Onslow, Quyon et Eardley. Elle fait partie de la MRC des Collines-de-l'Outaouais et est incluse dans la Région de la capitale nationale du Canada. Son territoire couvre une superficie d'environ 503&nbsp;km² sur la rive nord de la rivière des Outaouais. <span className="text-xs italic">(Source : Wikipedia/Pontiac, Québec, et Municipalité de Pontiac)</span></p>
            <p>La municipalité de Pontiac est l'une des communautés les plus bilingues de la région. Selon le recensement de 2016, environ 64&nbsp;% des résidents parlent les deux langues officielles, avec le français comme langue maternelle à 55,5&nbsp;% et l'anglais à 38,6&nbsp;%. C'est un environnement naturellement bilingue qui attire les familles francophones et anglophones. <span className="text-xs italic">(Source : Wikipedia/Pontiac, Québec, Recensement 2016)</span></p>
            <p>Une grande partie du territoire de la municipalité de Pontiac est incluse dans le parc de la Gatineau, géré par la Commission de la capitale nationale. Cette réalité détermine en grande partie le caractère du territoire : peu d'urbanisation et beaucoup de nature, avec une offre résidentielle limitée qui soutient la valeur des propriétés existantes. <span className="text-xs italic">(Source : Wikipedia/Pontiac, Québec)</span></p>
          </div>
          <div className="md:col-span-2">
            <div className="border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-serif text-lg text-foreground">Pontiac, faits clés</h3>
              <div className="w-8 h-0.5 bg-accent" />
              <div className="space-y-4 text-[0.875rem]">
                {[
                  { icon: MapPin, label: "Situation", value: "MRC des Collines-de-l'Outaouais · Région de la capitale nationale" },
                  { icon: Users, label: "Population", value: "6 142 habitants (Recensement 2021)", source: "(Source : Statistique Canada, 2021)" },
                  { icon: Globe, label: "Bilinguisme", value: "~64 % de résidents bilingues · FR 55,5 % · EN 38,6 %", source: "(Source : Recensement 2016)" },
                  { icon: TreePine, label: "Nature", value: "Parc de la Gatineau sur une grande partie du territoire", source: "(Source : Commission de la capitale nationale)" },
                ].map((f) => (
                  <div key={f.label} className="flex gap-3">
                    <f.icon size={16} className="shrink-0 text-accent mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">{f.label}</div>
                      <div className="text-muted-foreground">{f.value}</div>
                      {f.source && <div className="text-xs italic text-muted-foreground/70">{f.source}</div>}
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/evaluation-gratuite-gatineau/" className="block w-full mt-4 text-center bg-accent text-accent-foreground rounded-md py-2.5 text-[0.875rem] font-medium hover:bg-accent/90 transition-colors">
                Obtenir les vrais chiffres →
              </Link>
            </div>
          </div>
        </div>
      </ContentBlock>

      {/* SECTION 3 — Secteurs */}
      <ContentBlock background="alt">
        <h2 className="mb-3">Les communautés de la municipalité de Pontiac</h2>
        <p className="text-[0.9rem] text-muted-foreground mb-8">La municipalité de Pontiac regroupe plusieurs communautés distinctes, chacune avec son caractère propre. Voici les principales que je dessers.</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { name: "Luskville", text: "La communauté la plus proche de Gatineau et de Chelsea, donc souvent le choix des acheteurs qui veulent rester à distance raisonnable des services urbains. Luskville s'adosse aux collines du parc de la Gatineau, avec des propriétés souvent sur de grands terrains boisés. Le sentier des chutes de Luskville part du village même.", tag: "Proximité Gatineau · Nature · Sentiers" },
            { name: "Breckenridge", text: "Situé en bordure de la rivière des Outaouais, Breckenridge compte des maisons unifamiliales sur grands terrains, souvent avec vue sur la rivière ou accès direct à l'eau. Il convient aux acheteurs qui veulent vivre au bord de l'eau dans un cadre rural.", tag: "Bord de l'eau · Rivière des Outaouais · Rural" },
            { name: "Quyon", text: "Le village historique de Pontiac, fondé en 1848. Quyon est le secteur le plus rural et le plus éloigné de Gatineau. La vie communautaire y reste forte, autour de l'agriculture et des activités locales. Un bon choix pour les acheteurs qui veulent s'éloigner de la ville.", tag: "Village historique · Rural · Communauté forte" },
          ].map((s) => (
            <div key={s.name} className="bg-background border border-border rounded-lg p-6 space-y-3">
              <h3 className="font-serif text-lg text-foreground">{s.name}</h3>
              <p className="text-[0.875rem] text-muted-foreground leading-relaxed">{s.text}</p>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[var(--gold-text)]">{s.tag}</span>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* SECTION 4 — Ce qui attire les acheteurs */}
      <ContentBlock>
        <h2 className="mb-8">Ce que l'on trouve à Pontiac qu'on ne trouve nulle part ailleurs dans la région</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: TreePine, title: "Le parc de la Gatineau dans votre cour", text: "Une grande partie du territoire de Pontiac est incluse dans le parc de la Gatineau (360 km² de forêts, lacs et rivières, créé en 1938). Le sentier des chutes de Luskville est directement accessible depuis le secteur Luskville. Les résidents ont accès à des centaines de kilomètres de sentiers de randonnée, de ski de fond et de raquettes. (Source : Commission de la capitale nationale)" },
            { icon: Waves, title: "La rivière des Outaouais en façade", text: "La municipalité de Pontiac longe la rive nord de la rivière des Outaouais. Plusieurs propriétés de Breckenridge offrent un accès direct à la rivière ou une vue sur l'eau. La rivière des Outaouais est navigable et poissonneuse, et c'est l'une des plus grandes rivières du Canada. Pour une propriété résidentielle, c'est un atout rare." },
            { icon: Bus, title: "Transcollines : connexion urbaine", text: "La municipalité de Pontiac est desservie par Transcollines, le service de transport en commun qui relie les municipalités des Collines-de-l'Outaouais à Gatineau, avec correspondance vers le réseau de la STO. Un lien avec la ville qui rend Pontiac plus accessible qu'on pourrait le croire pour ceux qui combinent télétravail et déplacements occasionnels. (Source : Municipalité de Pontiac / Transcollines)" },
          ].map((c) => (
            <div key={c.title} className="bg-card border border-border rounded-lg p-6 space-y-3">
              <c.icon size={24} className="text-accent" />
              <h3 className="font-serif text-lg text-foreground">{c.title}</h3>
              <p className="text-[0.875rem] text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </ContentBlock>

      {/* SECTION 5 — Ce qu'il faut savoir */}
      <ContentBlock background="alt" narrow>
        <h2 className="mb-6">Ce qu'il faut savoir avant d'acheter à Pontiac</h2>
        <div className="space-y-4 text-[0.9375rem] text-muted-foreground leading-relaxed">
          <p>Pontiac est une municipalité rurale. Plusieurs réalités importantes à comprendre avant de faire une offre&nbsp;:</p>
          <p>La grande majorité des propriétés fonctionnent avec puits artésien et fosse septique. Faites inspecter ces systèmes au complet avant l'achat. Un système en fin de vie représente une grosse dépense à prévoir.</p>
          <p>Les services sur place sont limités. Pontiac n'a pas de grandes surfaces, de cliniques spécialisées ou d'hôpital. Pour ces besoins, on se dirige vers Gatineau (le Vieux-Aylmer est à environ 21 km de Luskville et 41 km de Quyon par la route) ou Ottawa. Les résidents vivent avec cette réalité et en font le calcul lors de leur décision.</p>
          <p>Le zonage à Pontiac est influencé par les règlements de la MRC des Collines-de-l'Outaouais et par les exigences de la Commission de la capitale nationale pour les zones adjacentes au parc de la Gatineau. Avant tout projet de construction ou de rénovation majeure, vérifiez le zonage auprès de la municipalité.</p>
          <p>Le marché immobilier de Pontiac est un marché de niche. Les transactions sont moins fréquentes qu'à Gatineau ou Aylmer, ce qui signifie que l'évaluation précise des comparables est encore plus importante. Je connais ce secteur et je surveille les ventes qui y sont conclues.</p>
        </div>
      </ContentBlock>

      {/* SECTION 6 — Market context 2026 */}
      <ContentBlock narrow>
        <div className="border border-border rounded-lg p-6 space-y-4">
          <h3 className="font-serif text-lg text-foreground">Pontiac en 2026</h3>
          <div className="space-y-3.5">
            {[
              "Pontiac attire un profil d'acheteur spécifique : familles en télétravail, amoureux de la nature, personnes qui cherchent l'espace vrai dans la RCN. La demande pour ce profil reste constante.",
              "Au 2e trimestre 2026, 535 unifamiliales étaient en vigueur dans la périphérie de Gatineau, qui inclut Pontiac, soit 13 % de plus qu'un an plus tôt (APCIQ). Les acheteurs y ont plus de choix.",
              "Les transactions à Pontiac sont moins fréquentes que dans les secteurs urbains, ce qui rend l'évaluation plus délicate. Un courtier qui suit ce marché de près vous aide à fixer le bon prix.",
            ].map((p) => (
              <div key={p} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="shrink-0 text-accent mt-0.5" />
                <span className="text-[0.9rem] text-muted-foreground">{p}</span>
              </div>
            ))}
          </div>
          <Link to="/evaluation-gratuite-gatineau/" className="block w-full mt-2 text-center bg-accent text-accent-foreground rounded-md py-2.5 text-[0.875rem] font-medium hover:bg-accent/90 transition-colors">
            Obtenir les vrais chiffres →
          </Link>
          <p className="text-center text-xs text-muted-foreground">Gratuit · Sans engagement · Réponse personnalisée</p>
        </div>
      </ContentBlock>

      {/* SECTION 7 — FAQ */}
      <FAQSection title="Questions fréquentes sur Pontiac, Outaouais" items={faq} />

      {/* Guide CTA */}
      <GuideInlineCTA
        guideType="buyer_guide"
        headline="Guide acheteur gratuit : acheter dans le Pontiac"
        text="Processus, budget et conseils pour acheter dans le secteur."
        ctaLabel="Recevoir le guide acheteur"
      />

      {/* Related Links */}
      <RelatedPages
        overline="Explorer d'autres secteurs desservis"
        title="Secteurs à proximité"
        pages={[
          { title: "Chelsea", text: "Village, Parc de la Gatineau.", href: "/chelsea/" },
          { title: "Cantley", text: "Grands terrains, familles.", href: "/cantley/" },
          { title: "Aylmer", text: "Lac Deschênes, quartiers familiaux.", href: "/aylmer/" },
          { title: "Val-des-Monts", text: "Lacs et chalets en nature.", href: "/val-des-monts/" },
        ]}
        background="alt"
      />

      {/* CTA Final */}
      <CTASection
        dark
        overline="VOTRE PROJET À PONTIAC"
        title="Pontiac est un marché que peu de courtiers connaissent bien"
        text="Je couvre la municipalité de Pontiac depuis 2017. Je connais les secteurs, les comparables, et les réalités pratiques, puits, fosses, zonage, accès. Si vous avez un projet ici, je suis votre courtier local."
        buttons={[
          { label: "Évaluation gratuite →", href: "/evaluation-gratuite-gatineau/" },
          { label: "Me contacter →", href: "/contact-yanis/", variant: "outline" },
        ]}
        trustLine="« Je vous donne les chiffres et les options, vous décidez. »"
      />

      <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit, recevez-le par courriel" />
    </>
  );
};

export default PontiacPage;
