import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, MapPin, Coffee } from "lucide-react";
import heroImg from "@/assets/hero-aylmer-gen.jpg";

const AylmerPage = () => (
  <NeighborhoodTemplate
    seoTitle="Courtier immobilier Aylmer · Gatineau"
    metaDesc="Courtier immobilier à Aylmer, Gatineau. Lac Deschênes, quartiers familiaux, écoles bilingues — accompagnement achat et vente par un courtier local."
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
    inlineCta={{ text: "Vous êtes propriétaire à Aylmer? Découvrez combien vaut votre propriété.", label: "Obtenir ma valeur →", href: "/evaluation-maison-aylmer" }}
    faq={{
      title: "Questions sur Aylmer",
      items: [
        { q: "Quel est le prix moyen d'une maison à Aylmer?", a: "Ça varie selon le quartier et le type de propriété. Contactez-moi pour une analyse à jour basée sur les ventes récentes dans votre secteur d'Aylmer." },
        { q: "Aylmer est-il bon pour les familles?", a: "Absolument. Écoles bilingues, parcs, lac Deschênes, communauté soudée — c'est l'un des meilleurs secteurs familiaux de l'Outaouais." },
        { q: "Combien de temps pour se rendre à Ottawa depuis Aylmer?", a: "15-25 minutes en voiture selon l'heure. Accès par le pont Champlain et les pistes cyclables." },
        { q: "Pourquoi choisir un courtier immobilier à Aylmer?", a: "Un courtier qui connaît Aylmer en profondeur comprend les micro-marchés, la valeur réelle par rue et les attentes des acheteurs locaux et d'Ottawa. Ça fait toute la différence dans le résultat." },
        { q: "Quels sont les meilleurs quartiers d'Aylmer pour acheter?", a: "Le Vieux-Aylmer pour le charme et la vie de quartier, Plateau d'Aylmer pour les maisons neuves, et les rues près du lac pour les propriétés de caractère. Chaque secteur a son profil." },
        { q: "Comment se passe l'achat d'une maison à Aylmer?", a: "Définition du budget, recherche ciblée dans les rues qui correspondent à vos besoins, offre d'achat, inspection, financement et notaire. Je vous accompagne à chaque étape." },
        { q: "Est-ce que les prix montent à Aylmer?", a: "Aylmer reste un secteur très demandé en Outaouais. Les tendances varient selon le type de propriété — une analyse personnalisée vous donnera un portrait exact." },
        { q: "Peut-on trouver un bungalow abordable à Aylmer?", a: "Oui, certains secteurs offrent encore des bungalows à des prix compétitifs, mais il faut agir vite. Une stratégie d'achat ciblée fait la différence." },
        { q: "Y a-t-il des condos à Aylmer?", a: "Oui, on trouve des condos dans le Vieux-Aylmer et dans certains projets récents. C'est une option intéressante pour les premiers acheteurs ou les retraités." },
        { q: "Comment obtenir une évaluation de maison à Aylmer?", a: "Je prépare une évaluation gratuite basée sur les ventes récentes dans votre rue et votre quartier. C'est confidentiel, sans engagement, et vous recevez un rapport clair." },
      ],
    }}
    sectors={{ list: [
      { name: "Chelsea", href: "/chelsea", detail: "Village artistique, parc de la Gatineau" },
      { name: "Plateau", href: "/plateau", detail: "Développements récents, familles" },
      { name: "Hull", href: "/hull", detail: "Urbain, culture, condos" },
    ]}}
    related={{ pages: [
      { title: "Vivre à Aylmer — le guide", text: "Mode de vie, lac, communauté.", href: "/vivre-a-aylmer" },
      { title: "Vendre à Aylmer", text: "Stratégie de vente adaptée à Aylmer.", href: "/vendre-maison-aylmer" },
      { title: "Évaluation maison Aylmer", text: "Combien vaut votre propriété à Aylmer?", href: "/evaluation-maison-aylmer" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau" },
      { title: "Blogue immobilier", text: "Articles et conseils locaux.", href: "/blogue" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit — acheter à Aylmer", text: "Processus, budget et conseils pour acheter dans le secteur — dans un guide envoyé par courriel.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit — recevez-le par courriel" }}
    cta={{ title: "Acheteur ou vendeur à Aylmer?", text: "Je connais Aylmer par cœur — parlons de votre projet.", buttons: [{ label: "Évaluation maison Aylmer", href: "/evaluation-maison-aylmer" }, { label: "Réserver une consultation", href: "/consultation-acheteur", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default AylmerPage;
