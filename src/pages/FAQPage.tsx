import PageMeta from "@/components/PageMeta";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import LinkedCardGrid from "@/components/LinkedCardGrid";
import { Book, Home, MapPin, Users, TrendingUp, Shield } from "lucide-react";
import heroImg from "@/assets/hero-faq.webp";

const sellerFaq = [
  { q: "Combien vaut ma propriété à Gatineau?", a: "La valeur dépend des ventes comparables récentes, de l'état de votre propriété et du secteur. Demandez une évaluation gratuite pour obtenir une estimation personnalisée." },
  { q: "Combien coûte un courtier immobilier?", a: "La commission est convenue ensemble avant de commencer. Tout est transparent — pas de surprise." },
  { q: "Faut-il rénover avant de vendre?", a: "Pas nécessairement. Certains investissements rapportent — peinture, désencombrement — d'autres sont du gaspillage. Je vous aide à faire le tri." },
  { q: "Combien de temps pour vendre à Gatineau?", a: "En moyenne 30 à 60 jours sur le marché, mais ça varie selon le secteur, le prix et la saison. Le bon prix dès le départ accélère tout." },
  { q: "Le printemps est-il le meilleur moment pour vendre?", a: "C'est souvent le plus actif, mais pas toujours le plus rentable. Moins de compétition en automne ou en hiver peut jouer en votre faveur." },
];

const buyerFaq = [
  { q: "Combien faut-il comme mise de fonds?", a: "5% minimum pour une résidence principale. Pour un plex occupé, 5% aussi. Pour un investissement pur, 20%." },
  { q: "Acheter à Gatineau ou Ottawa?", a: "Ça dépend de vos priorités. En général, les prix sont plus accessibles côté Gatineau, mais il faut considérer les taxes et les services." },
  { q: "Combien de temps prend un achat?", a: "60 à 90 jours en général du début de la recherche à la prise de possession." },
  { q: "Le processus est-il différent au Québec?", a: "Oui — promesse d'achat, inspection, notaire (pas d'avocat). Je vous guide à chaque étape." },
  { q: "Quels sont les frais à prévoir en plus du prix d'achat?", a: "Notaire (environ 1 500$), taxe de bienvenue, assurance titre optionnelle, et inspection pré-achat." },
];

const plexFaq = [
  { q: "Comment évaluer la valeur d'un plex?", a: "Approche des revenus (MRB), ventes comparables, état du bâtiment et potentiel d'optimisation des loyers." },
  { q: "Est-ce rentable d'acheter un plex à Gatineau?", a: "Oui, si l'analyse est bien faite. Les prix d'entrée sont encore accessibles et la demande locative est forte." },
  { q: "Qu'arrive-t-il aux locataires quand je vends?", a: "Les baux sont transférés au nouveau propriétaire. La loi protège les locataires — on gère la transition proprement." },
];

const militaryFaq = [
  { q: "Comment se passe une relocalisation militaire immobilière?", a: "On commence par comprendre votre calendrier et vos besoins. Ensuite, recherche ciblée, visites (virtuelles ou en personne) et accompagnement complet." },
  { q: "Travaillez-vous avec les programmes IRP/BGRS?", a: "Je connais les réalités de ces programmes et je m'adapte aux contraintes et délais qu'ils imposent." },
  { q: "Faut-il acheter ou louer lors d'une mutation?", a: "Ça dépend de la durée de votre affectation et de votre situation. On en discute ensemble pour trouver la meilleure option." },
];

const relatedResources = [
  { icon: Home, title: "Guide vendeur", text: "Tout pour vendre au meilleur prix.", cta: "Lire le guide", href: "/guide-vendeur-gatineau" },
  { icon: Users, title: "Guide acheteur", text: "Le processus d'achat au Québec.", cta: "Lire le guide", href: "/guide-acheteur-gatineau" },
  { icon: MapPin, title: "Guide relocalisation", text: "S'installer à Gatineau.", cta: "Lire le guide", href: "/guide-relocalisation-gatineau" },
  { icon: Shield, title: "Guide militaire", text: "Immobilier et mutations.", cta: "Lire le guide", href: "/guide-militaire-gatineau" },
  { icon: TrendingUp, title: "Investir en plex", text: "Analyse et stratégie.", cta: "Explorer", href: "/investir-plex-gatineau" },
  { icon: Book, title: "Premier achat", text: "Budget, processus et conseils.", cta: "Lire le guide", href: "/premier-achat-gatineau" },
];

const FAQPage = () => (
   <>
    <PageMeta title="FAQ — Questions fréquentes immobilier" description="Réponses aux questions fréquentes sur l'immobilier à Gatineau. Vendre, acheter, investir, relocalisation et plus." />
    <FaqJsonLd items={[...sellerFaq, ...buyerFaq, ...plexFaq, ...militaryFaq]} />
    <HeroSection
      overline="FAQ · YGS"
      title="Questions fréquentes"
      subtitle="Les réponses aux questions les plus courantes sur la vente, l'achat, l'investissement et la relocalisation immobilière à Gatineau."
      primaryCta={{ label: "Parler à Yanis", href: "/contact-yanis" }}
      secondaryCta={{ label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau" }}
      trustLine="Par Yanis Gauthier-Sigeris · Courtier immobilier, Gatineau"
      heroBgImage={heroImg}
    />

    <FAQSection title="Vendre à Gatineau" items={sellerFaq} />
    <FAQSection title="Acheter à Gatineau" items={buyerFaq} />
    <FAQSection title="Investir en plex" items={plexFaq} />
    <FAQSection title="Militaire et relocalisation" items={militaryFaq} />

    <LinkedCardGrid
      overline="Ressources"
      title="Guides et outils"
      items={relatedResources}
      columns={3}
      background="alt"
    />

    <CTASection
      dark
      title="Vous avez une question spécifique?"
      text="Contactez-moi directement — je vous donne une réponse claire et personnalisée."
      buttons={[
        { label: "Parler à Yanis", href: "/contact-yanis" },
        { label: "Évaluation gratuite", href: "/evaluation-gratuite-gatineau", variant: "outline" },
      ]}
      trustLine="Je vous donne les options, vous décidez."
    />
  </>
);

export default FAQPage;
