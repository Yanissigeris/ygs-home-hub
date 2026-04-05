import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TreePine, Mountain } from "lucide-react";
import heroImg from "@/assets/hero-chelsea-gen.jpg";

const ChelseaPage = () => (
  <NeighborhoodTemplate
    seoTitle="Courtier immobilier Chelsea · Outaouais | YGS"
    metaDesc="Courtier immobilier à Chelsea, Outaouais. Village pittoresque aux portes du parc de la Gatineau — accompagnement achat et vente par un courtier local."
    jsonLd={{ name: "Chelsea", description: "Courtier immobilier à Chelsea. Village pittoresque, parc de la Gatineau, nature et tranquillité.", lat: 45.5200, lng: -75.7870, url: "/chelsea" }}
    hero={{ overline: "Guide de quartier · Chelsea", title: "Vivre, acheter ou vendre à Chelsea", subtitle: "Village pittoresque aux portes du parc de la Gatineau — nature, tranquillité et accès rapide à Ottawa.", image: heroImg }}
    trustSpecialty="Spécialiste Chelsea et environs"
    lifestyle={{ image: heroImg, imageAlt: "Village de Chelsea, Outaouais", title: "Pourquoi Chelsea séduit autant", subtitle: "Un village unique en Outaouais où nature, art et communauté cohabitent à 20 minutes d'Ottawa." }}
    reasons={[
      "Accès direct au parc de la Gatineau — ski, randonnée, vélo toute l'année",
      "Village artistique avec galeries, cafés et marché fermier reconnu",
      "Écoles primaires et secondaires francophones et anglophones à proximité",
      "Grands terrains boisés et propriétés de caractère sur des lots privés",
      "20-30 minutes d'Ottawa via la route 5 — trajet fluide hors pointe",
    ]}
    profilesTitle="Chelsea est idéal pour…"
    profiles={[
      { icon: Users, title: "Familles en quête de nature", text: "Grands terrains, parc de la Gatineau à deux pas, communauté soudée." },
      { icon: Home, title: "Acheteurs de propriétés de caractère", text: "Maisons sur grands lots boisés, chalets quatre-saisons et résidences uniques." },
      { icon: TreePine, title: "Amateurs de plein air", text: "Ski de fond, randonnée, vélo et lac — style de vie actif toute l'année." },
      { icon: Mountain, title: "Professionnels en télétravail", text: "Cadre de vie exceptionnel avec connexion internet haute vitesse disponible." },
    ]}
    inlineCta={{ text: "Vous êtes propriétaire à Chelsea? Découvrez combien vaut votre propriété.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau" }}
    faq={{
      title: "Questions sur Chelsea",
      items: [
        { q: "Chelsea est-il loin d'Ottawa?", a: "Non — environ 20-30 minutes par la route 5. C'est plus rapide que bien des banlieues d'Ottawa." },
        { q: "Y a-t-il des écoles à Chelsea?", a: "Oui, écoles primaires francophones et anglophones. Pour le secondaire, options à Gatineau à 15 minutes." },
        { q: "Quel type de propriétés trouve-t-on à Chelsea?", a: "Maisons unifamiliales sur grands terrains, chalets, propriétés de luxe et quelques maisons de ville. Peu de condos." },
        { q: "Pourquoi travailler avec un courtier immobilier à Chelsea?", a: "Chelsea est un marché distinct avec ses propres comparables et ses réalités (zonage, puits, fosses septiques, terrains boisés). Un courtier local vous évite les surprises et maximise votre résultat." },
        { q: "Combien coûte une maison à Chelsea?", a: "Les prix varient selon le type de propriété et la taille du terrain. Contactez-moi pour une analyse basée sur les ventes récentes dans votre secteur de Chelsea." },
        { q: "Chelsea est-il un bon investissement immobilier?", a: "Oui — la demande reste forte et l'offre limitée. Les propriétés à Chelsea conservent bien leur valeur grâce à l'emplacement unique près du parc de la Gatineau." },
        { q: "Peut-on avoir Internet haute vitesse à Chelsea?", a: "Oui, plusieurs fournisseurs offrent maintenant la fibre optique ou un service haute vitesse dans la plupart des secteurs de Chelsea." },
        { q: "Comment vendre une maison à Chelsea?", a: "Évaluation réaliste, positionnement stratégique et mise en marché ciblée — incluant les acheteurs d'Ottawa qui cherchent la nature. Je vous accompagne de A à Z." },
        { q: "Y a-t-il des taxes municipales élevées à Chelsea?", a: "Les taxes à Chelsea sont comparables à celles de Gatineau, avec des services adaptés au milieu semi-rural. Je peux vous fournir les chiffres exacts pour une propriété." },
        { q: "Comment obtenir une évaluation de maison à Chelsea?", a: "Je prépare une évaluation gratuite basée sur les ventes comparables récentes dans votre secteur. C'est confidentiel et sans engagement." },
      ],
    }}
    sectors={{ list: [
      { name: "Cantley", href: "/cantley", detail: "Rural, grands terrains, collines" },
      { name: "Aylmer", href: "/aylmer", detail: "Lac Deschênes, quartiers établis" },
      { name: "Plateau", href: "/plateau", detail: "Familles, développements récents" },
    ]}}
    related={{ pages: [
      { title: "Vendre ma maison à Chelsea", text: "Stratégie de vente adaptée au marché de Chelsea.", href: "/vendre-ma-maison-gatineau" },
      { title: "Évaluation maison Chelsea", text: "Combien vaut votre propriété à Chelsea?", href: "/evaluation-gratuite-gatineau" },
      { title: "Vivre à Chelsea", text: "Style de vie, nature et communauté.", href: "/blogue/vivre-chelsea-style-de-vie" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau" },
      { title: "Premier achat", text: "Budget, mise de fonds et conseils.", href: "/premier-achat-immobilier-gatineau" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit — acheter à Chelsea", text: "Processus, budget et conseils pour acheter dans le secteur — dans un guide envoyé par courriel.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit — recevez-le par courriel" }}
    cta={{ title: "Acheteur ou vendeur à Chelsea?", text: "Je connais Chelsea par cœur — parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }, { label: "Réserver une consultation", href: "/consultation-acheteur", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default ChelseaPage;
