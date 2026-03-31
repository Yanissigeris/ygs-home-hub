import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, MapPin, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-aylmer.webp";

const AylmerPage = () => (
  <NeighborhoodTemplate
    seoTitle="Aylmer — Guide de quartier Gatineau | YGS"
    metaDesc="Vivre, acheter ou vendre à Aylmer, Gatineau. Lac Deschênes, parc de la Gatineau, écoles bilingues et communauté — guide complet par un courtier local."
    jsonLd={{ name: "Aylmer", description: "Courtier immobilier spécialisé à Aylmer, Gatineau. Lac Deschênes, quartiers familiaux, écoles et communauté.", lat: 45.3945, lng: -75.8486, url: "/aylmer" }}
    hero={{ overline: "Guide de quartier · Aylmer", title: "Vivre, acheter ou vendre à Aylmer", subtitle: "Lac Deschênes, parcs, écoles et communauté — Aylmer offre un cadre de vie exceptionnel à deux pas d'Ottawa.", image: heroImg }}
    trustSpecialty="Spécialiste Aylmer et environs"
    lifestyle={{ image: heroImg, imageAlt: "Vie à Aylmer, Gatineau", title: "Pourquoi Aylmer est si populaire" }}
    reasons={[
      "Quartiers familiaux avec accès au lac Deschênes et à la plage municipale",
      "Proximité du parc de la Gatineau — randonnée, ski, vélo toute l'année",
      "Écoles réputées françaises et anglaises, garderies et services bilingues",
      "Communauté établie avec charme de petite ville et marché fermier local",
      "Accès rapide à Ottawa par le pont Champlain — 15-25 minutes du centre-ville",
    ]}
    profilesTitle="Aylmer est idéal pour…"
    profiles={[
      { icon: Users, title: "Familles établies", text: "Quartiers matures, grandes propriétés et communauté soudée." },
      { icon: Home, title: "Acheteurs de revente", text: "Propriétés avec caractère et potentiel de rénovation dans un secteur prisé." },
      { icon: MapPin, title: "Amateurs de nature", text: "Lac Deschênes, parc de la Gatineau et sentiers à deux pas." },
      { icon: Coffee, title: "Vie de quartier", text: "Restaurants, cafés, boutiques et marché local à distance de marche." },
    ]}
    inlineCta={{ text: "Vous êtes propriétaire à Aylmer? Découvrez combien vaut votre propriété.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau" }}
    faq={{
      title: "Questions sur Aylmer",
      items: [
        { q: "Quel est le prix moyen d'une maison à Aylmer?", a: "Ça varie selon le quartier et le type de propriété. Contactez-moi pour une analyse à jour basée sur les ventes récentes." },
        { q: "Aylmer est-il bon pour les familles?", a: "Absolument. Écoles bilingues, parcs, lac, communauté soudée — c'est l'un des meilleurs secteurs familiaux de l'Outaouais." },
        { q: "Combien de temps pour se rendre à Ottawa depuis Aylmer?", a: "15-25 minutes en voiture selon l'heure. Accès par le pont Champlain et les pistes cyclables." },
      ],
    }}
    sectors={{ list: [
      { name: "Chelsea", href: "/chelsea", detail: "Village artistique, parc de la Gatineau" },
      { name: "Plateau", href: "/plateau", detail: "Développements récents, familles" },
      { name: "Hull", href: "/hull", detail: "Urbain, culture, condos" },
    ]}}
    related={{ pages: [
      { title: "Vivre à Aylmer — le guide", text: "Mode de vie, lac, communauté.", href: "/vivre-a-aylmer" },
      { title: "Guide acheteur", text: "Le processus d'achat au Québec.", href: "/guide-acheteur-gatineau" },
      { title: "Premier achat", text: "Budget, mise de fonds et conseils.", href: "/premier-achat-gatineau" },
      { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit — acheter à Aylmer", text: "Processus, budget et conseils pour acheter dans le secteur — dans un guide envoyé par courriel.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit — recevez-le par courriel" }}
    cta={{ title: "Acheteur ou vendeur à Aylmer?", text: "Je connais Aylmer par cœur — parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }, { label: "Réserver une consultation", href: "/consultation-acheteur", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default AylmerPage;
