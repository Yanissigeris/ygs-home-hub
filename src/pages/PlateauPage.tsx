import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import SEO from "@/components/SEO";
import { Users, Home, TrendingUp, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-plateau.webp";

const PlateauPage = () => (
  <>
    <SEO title="Courtier immobilier Plateau Gatineau | YGS" description="Achetez ou vendez dans le Plateau à Gatineau. Quartier familial calme, accès autoroute 50." canonical="https://yanisgauthier.com/plateau" hreflangFr="https://yanisgauthier.com/plateau" hreflangEn="https://yanisgauthier.com/en/plateau" />
    <NeighborhoodTemplate
    seoTitle="Plateau — Guide de quartier Gatineau"
    metaDesc="Vivre, acheter ou vendre dans le Plateau à Gatineau. Maisons neuves, familles, parcs et accès rapide à Ottawa via le pont Champlain."
    ogImage="https://yanisgauthier.com/og/og-plateau.jpg"
    jsonLd={{ name: "Plateau", description: "Courtier immobilier dans le Plateau, Gatineau. Maisons neuves, quartier familial.", lat: 45.3850, lng: -75.8000, url: "/plateau" }}
    hero={{ overline: "Guide de quartier · Plateau", title: "Vivre, acheter ou vendre dans le Plateau", subtitle: "Maisons neuves, quartier familial en plein essor et accès rapide à Ottawa — le Plateau a tout pour plaire.", image: heroImg }}
    trustSpecialty="Spécialiste Plateau et environs"
    lifestyle={{ image: heroImg, imageAlt: "Le Plateau, Gatineau", title: "Pourquoi le Plateau est si populaire", subtitle: "L'un des secteurs les plus dynamiques de Gatineau pour les jeunes familles." }}
    reasons={[
      "Constructions neuves et récentes — maisons modernes et écoénergétiques",
      "Quartier familial avec parcs, sentiers et terrains de jeux",
      "Écoles primaires et secondaires à proximité",
      "Accès rapide à Ottawa via le pont Champlain — 15-20 minutes",
      "Proximité du parc de la Gatineau pour le plein air",
    ]}
    profilesTitle="Le Plateau est idéal pour…"
    profiles={[
      { icon: Users, title: "Jeunes familles", text: "Maisons neuves avec garage, cour et proximité des écoles." },
      { icon: Home, title: "Premiers acheteurs", text: "Constructions récentes à des prix compétitifs." },
      { icon: TrendingUp, title: "Acheteurs en quête de neuf", text: "Développements récents avec garantie de maison neuve." },
      { icon: MapPin, title: "Navetteurs Ottawa", text: "Trajet fluide vers Ottawa via le pont Champlain." },
    ]}
    inlineCta={{ text: "Propriétaire dans le Plateau? Découvrez combien vaut votre propriété.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau" }}
    faq={{
      title: "Questions sur le Plateau",
      items: [
        { q: "Le Plateau est-il bon pour les familles?", a: "Excellent. Maisons neuves, parcs, écoles et communauté jeune — c'est l'un des secteurs les plus prisés des familles en Outaouais." },
        { q: "Le Plateau est-il proche d'Ottawa?", a: "Oui — 15-20 minutes via le pont Champlain. Accès direct par le boulevard des Allumettières." },
        { q: "Les prix augmentent-ils dans le Plateau?", a: "Oui, le secteur est en forte demande. Les propriétés se vendent rapidement, surtout les maisons récentes avec garage." },
        { q: "Pourquoi choisir un courtier immobilier dans le Plateau?", a: "Un courtier local connaît les développements, les prix par rue et les tendances du marché dans le Plateau. Ça vous aide à acheter au bon prix ou vendre au meilleur moment." },
        { q: "Quel est le prix moyen d'une maison dans le Plateau?", a: "Ça dépend du type de propriété et de l'année de construction. Contactez-moi pour une analyse basée sur les ventes récentes dans votre secteur du Plateau." },
        { q: "Y a-t-il des maisons neuves disponibles dans le Plateau?", a: "Oui, plusieurs constructeurs offrent des maisons neuves avec garantie. Je peux vous guider vers les projets qui correspondent à votre budget." },
        { q: "Le Plateau est-il bon pour un premier achat?", a: "Très bon — les constructions récentes offrent un excellent rapport qualité-prix, et le secteur est bien desservi en écoles et services." },
        { q: "Comment obtenir une évaluation de maison dans le Plateau?", a: "Je prépare une évaluation gratuite basée sur les ventes comparables récentes dans votre rue. C'est confidentiel et sans engagement." },
        { q: "Y a-t-il des condos dans le Plateau?", a: "Oui, on trouve des condos et des maisons de ville, surtout dans les développements récents. C'est une option populaire pour les premiers acheteurs." },
        { q: "Quels services sont disponibles dans le Plateau?", a: "Écoles primaires et secondaires, parcs, épiceries, pharmacies et accès rapide aux centres commerciaux de Gatineau. Le secteur est complet pour les familles." },
      ],
    }}
    sectors={{ list: [
      { name: "Aylmer", href: "/aylmer", detail: "Lac Deschênes, quartiers établis" },
      { name: "Chelsea", href: "/chelsea", detail: "Village, parc de la Gatineau" },
      { name: "Hull", href: "/hull", detail: "Urbain, culture, condos" },
    ]}}
    related={{ pages: [
      { title: "Vivre dans le Plateau", text: "Guide de vie dans le secteur.", href: "/vivre-dans-le-plateau" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau" },
      { title: "Vendre à Gatineau", text: "Stratégie et accompagnement.", href: "/vendre-ma-maison-gatineau" },
      { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau" },
      { title: "Blogue immobilier", text: "Articles et conseils locaux.", href: "/blogue" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit — acheter dans le Plateau", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit — recevez-le par courriel" }}
    cta={{ title: "Acheteur ou vendeur dans le Plateau?", text: "Je connais le Plateau par cœur — parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }, { label: "Réserver une consultation", href: "/consultation-acheteur", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
    />
  </>
);

export default PlateauPage;
