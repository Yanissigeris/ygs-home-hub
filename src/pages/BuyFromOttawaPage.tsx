import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GuideInlineCTA from "@/components/GuideInlineCTA";
import StickyGuideBanner from "@/components/StickyGuideBanner";
import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import CardGrid from "@/components/CardGrid";
import SectorLinks from "@/components/SectorLinks";
import InlineCTA from "@/components/InlineCTA";
import { MapPin, DollarSign, Home, FileText, Clock, Award, Shield } from "lucide-react";
import heroImg from "@/assets/hero-buy-from-ottawa.webp";

const advantages = [
  { icon: DollarSign, title: "Prix plus accessibles", text: "Les maisons unifamiliales et les condos coûtent souvent moins cher à Gatineau qu'à Ottawa. Au 2e trimestre 2026, le prix médian d'une unifamiliale était de 523 500 $ dans la RMR de Gatineau (APCIQ)." },
  { icon: MapPin, title: "Proximité d'Ottawa", text: "Les ponts (Champlain, Alexandra, du Portage) et les autobus de la STO relient les deux rives. Le centre-ville d'Ottawa est à environ 2 km de Hull et à environ 14 km du Vieux-Aylmer." },
  { icon: Home, title: "Plus d'espace", text: "Pour le même budget, vous obtenez souvent plus de pièces ou un plus grand terrain à Aylmer, au Plateau ou à Buckingham." },
  { icon: FileText, title: "Processus québécois", text: "Le processus d'achat au Québec a ses propres règles : promesse d'achat, notaire, droits de mutation (taxe de bienvenue) et taxes scolaires. Je vous guide étape par étape." },
];

const sectors = [
  { name: "Plateau / Aylmer", href: "/plateau-aylmer/", detail: "Maisons récentes et familiales, accès à Ottawa" },
  { name: "Hull", href: "/hull/", detail: "Condos et plex, près du centre-ville d'Ottawa" },
  { name: "Buckingham / Masson-Angers", href: "/buckingham-masson-angers/", detail: "Plus de terrain, prix plus accessibles" },
];


const faq = [
  { q: "Combien peut-on économiser en achetant à Gatineau?", a: "Ça dépend du secteur et du type de propriété. Deux repères officiels : le prix médian d'une unifamiliale était de 740 000 $ à Ottawa en août 2026 (Ottawa Real Estate Board). Dans la ville de Gatineau, il était de 508 000 $ au 2e trimestre 2026 (APCIQ). Ces chiffres ne portent ni sur la même période ni sur des maisons identiques. Pour comparer, je mets côte à côte des propriétés semblables et j'intègre les taxes municipales et scolaires." },
  { q: "Comment fonctionne l'achat quand je suis en Ontario?", a: "Vous pouvez travailler en Ontario et habiter Gatineau. Le processus d'achat se déroule au Québec : promesse d'achat, conditions d'inspection, signature chez le notaire. Si vous êtes représenté, votre courtier doit détenir un permis de l'OACIQ. Je vous accompagne à chaque étape." },
  { q: "Les taxes sont-elles plus élevées au Québec?", a: "Ça dépend de la taxe. À l'achat, vous payez la taxe de bienvenue : à Gatineau, environ 4 486 $ pour une propriété de 425 000 $ selon la grille 2026. Les taxes municipales et scolaires varient selon le secteur, et Ottawa et Gatineau ne les calculent pas de la même façon. Pour comparer, on regarde les comptes de taxes de propriétés semblables. L'impôt sur le revenu est aussi structuré différemment au Québec : on regarde le portrait complet ensemble." },
  { q: "Est-ce que je peux garder mon emploi et mon médecin de famille en Ontario?", a: "Pour l'emploi, oui : bien des résidents de Gatineau travaillent à Ottawa, sur place ou en mode hybride. Quant au médecin de famille, vérifiez avec votre clinique. Une fois résident du Québec, votre couverture publique relève de la RAMQ." },
  { q: "Et l'école des enfants, français ou anglais?", a: "Les deux options existent en Outaouais. Le Western Québec School Board a des écoles publiques anglophones à Aylmer et à Hull, et les écoles francophones sont présentes dans tous les secteurs. Les règles d'admissibilité au réseau anglophone s'appliquent. On en discute tôt dans le processus." },
  { q: "Quelle distance sépare Gatineau du centre-ville d'Ottawa?", a: "Par la route, le centre-ville d'Ottawa est à environ 2 km de l'hôtel de ville de Gatineau, à Hull. Comptez environ 9 km depuis le Plateau et 14 km depuis le Vieux-Aylmer, avec un temps de trajet qui dépend du pont et de l'heure. Les autobus de la STO et les pistes cyclables sont aussi des options. Le projet de tramway, lui, est en révision par Mobilité Infra Québec et son échéancier reste à confirmer." },
  { q: "Ai-je besoin d'une hypothèque québécoise?", a: "La plupart des prêteurs canadiens sont présents des deux côtés de la rivière, vous pouvez donc souvent garder votre banque actuelle. L'hypothèque est publiée au Québec par le notaire, selon le droit québécois. Je vous présente des courtiers hypothécaires qui traitent régulièrement des dossiers Ottawa-Gatineau." },
];

const BuyFromOttawaPage = () => (
   <>
    <PageMeta title="Acheter à Gatineau depuis Ottawa" description="Vous habitez Ottawa et pensez acheter à Gatineau? Aylmer, Hull, Plateau : taxes, quartiers, avantages et accompagnement bilingue pour votre transition." ogImage="https://yanisgauthier.com/og/og-buyer.jpg" />
    <HeroSection
      overline="Acheter depuis Ottawa · Gatineau"
      title="Acheter à Gatineau depuis Ottawa"
      subtitle="Plus d'espace et des prix plus accessibles, sans vous éloigner du travail. Ce qu'il faut savoir avant de traverser la rivière."
      primaryCta={{ label: "Réserver une consultation", href: "/consultation-acheteur/" }}
      secondaryCta={{ label: "Voir les secteurs", href: "#secteurs" }}
      trustLine="Spécialiste en relocalisation Ottawa → Gatineau"
      heroBgImage={heroImg}
    />
<CardGrid
      overline="Les avantages"
      title="Pourquoi des résidents d'Ottawa choisissent Gatineau"
      items={advantages}
    />

    <InlineCTA
      text="Vous voulez savoir ce que votre budget permet de ce côté de la rivière? On regarde les secteurs et les prix ensemble."
      buttonLabel="Réserver un appel →"
      href="/contact-yanis/"
    />

    <SectorLinks
      id="secteurs"
      overline="Secteurs à considérer"
      title="Les quartiers que regardent les acheteurs d'Ottawa"
      sectors={sectors}
      background="alt"
    />

    <ContentBlock narrow>
      <SectionHeading overline="Expertise locale" title="Un courtier qui connaît les deux côtés de la rivière" />
      <p className="prose-body mt-5" style={{ lineHeight: 1.85 }}>
        Actif en immobilier en Outaouais depuis 2017, j'ai accompagné des ménages ontariens vers Gatineau : fonctionnaires fédéraux, professionnels de la santé, jeunes familles et retraités en quête d'un rythme plus calme. La transition tourne rarement uniquement autour du prix au pied carré. Elle touche la fiabilité du trajet, la scolarité dans la bonne langue, l'accès à un médecin, les standards de déneigement et la lecture concrète d'un compte de taxes québécois.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        Je connais les rues d'Aylmer où les inscriptions partent vite et les secteurs de Hull où le bâti ancien demande une inspection attentive. Au Plateau, je vérifie les servitudes inscrites au registre foncier avant une offre. Cette connaissance du terrain protège un acheteur de l'Ontario des hypothèses coûteuses.
      </p>
      <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
        Je coordonne aussi les acteurs de soutien : notaire québécois, courtier hypothécaire bilingue, inspecteur en bâtiment qui connaît les maisons anciennes de Hull et déménageurs habitués aux dossiers interprovinciaux. Vous n'avez pas à monter cette équipe seul depuis l'autre rive.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link to="/consultation-acheteur/">Réserver ma consultation</Link>
      </Button>
    </ContentBlock>

    <GuideInlineCTA
      guideType="buyer_guide"
      headline="Guide acheteur gratuit : acheter à Gatineau"
      text="Processus, budget, secteurs et conseils, tout dans un guide envoyé par courriel."
      ctaLabel="Recevoir le guide acheteur"
    />

    <CTASection
      dark
      title="Prêt à regarder Gatineau de plus près?"
      text="Réservez une consultation gratuite. On regarde ensemble les secteurs et les options qui correspondent à votre profil."
      buttons={[
        { label: "Réserver une consultation", href: "/consultation-acheteur/" },
        { label: "Voir Plateau et Aylmer", href: "/plateau-aylmer/", variant: "outline" },
      ]}
      trustLine="Je vous donne les chiffres et les options, vous décidez."
    />

    <FAQSection items={faq} />

    <StickyGuideBanner guideType="buyer_guide" label="Guide acheteur gratuit, recevez-le par courriel" />
  </>
);

export default BuyFromOttawaPage;
