import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TrendingUp, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-plateau.webp";

// Title and meta description are published from src/data/seo-routes.json (route "/plateau").
// seoTitle / metaDesc below are fallbacks only and are kept identical in intent.
const PlateauPage = () => (
  <NeighborhoodTemplate
    seoTitle="Courtier immobilier Plateau · Gatineau | Yanis Gauthier"
    metaDesc="Yanis Gauthier-Sigeris, courtier immobilier RE/MAX, plus de 300 transactions en Outaouais. Acheter ou vendre dans le Plateau à Gatineau, évaluation gratuite."
    ogImage="https://yanisgauthier.com/og/og-neighborhoods.jpg"
    jsonLd={{ name: "Plateau", description: "Yanis Gauthier-Sigeris, courtier immobilier RE/MAX, plus de 300 transactions en Outaouais. Acheter ou vendre dans le Plateau à Gatineau, évaluation gratuite.", lat: 45.4405, lng: -75.7797, url: "/plateau/" }}
    hero={{ overline: "Courtier immobilier · Plateau, Gatineau", title: "Courtier immobilier dans le Plateau, à Gatineau", subtitle: "J'accompagne les acheteurs et les vendeurs du Plateau, côté Hull comme côté Aylmer. Je vous donne les chiffres et les options, vous décidez.", image: heroImg }}
    trustSpecialty="Courtier actif dans le Plateau"
    lifestyle={{ image: heroImg, imageAlt: "Le Plateau, Gatineau", title: "Où se trouve le Plateau à Gatineau?", subtitle: "Le Plateau s'étend à l'ouest du boulevard Saint-Raymond jusqu'au chemin Vanier, entre le parc de la Gatineau au nord et le boulevard des Allumettières au sud. Le boulevard de l'Europe sert de repère : à l'est, les adresses sont dans le secteur Hull; à l'ouest, dans le secteur Aylmer." }}
    reasons={[
      "Quartier développé surtout depuis la fin des années 1990 (le boulevard du Plateau a été officialisé en 1997)",
      "Surtout des maisons unifamiliales récentes, avec aussi des maisons de ville et des condos",
      "En bordure du parc de la Gatineau, avec accès aux sentiers",
      "Écoles primaires du CSSPO dans le quartier : École du Plateau, École des Deux-Ruisseaux, École du Grand-Héron",
      "École secondaire de la Cité sur le boulevard du Plateau, École secondaire Mont-Bleu à proximité",
      "Accès à Ottawa par le boulevard des Allumettières, avec un temps de trajet qui varie selon l'heure et la destination",
      "Desservi par des lignes d'autobus de la STO",
    ]}
    answers={[
      {
        q: "Le Plateau est-il dans le secteur Hull ou Aylmer?",
        a: "Les deux. Entre le boulevard Saint-Raymond et le boulevard de l'Europe, les adresses du Plateau sont dans le secteur Hull. Entre le boulevard de l'Europe et le chemin Vanier, elles sont dans le secteur Aylmer. C'est le même quartier, séparé par une limite administrative.",
        detail: "Pour un vendeur, ce détail compte : je compare toujours une propriété avec des ventes récentes du même côté du boulevard de l'Europe et, idéalement, de la même rue. Une moyenne de tout le Plateau donnerait un prix moins précis.",
      },
      {
        q: "Quel type de propriétés trouve-t-on dans le Plateau?",
        a: "Surtout des maisons unifamiliales construites depuis la fin des années 1990, avec aussi des maisons de ville et des condos dans les développements plus récents. La proximité du parc de la Gatineau fait partie de l'attrait du quartier.",
        detail: "Les prix varient selon le type de propriété, l'année de construction et la rue. Plutôt que de vous donner une moyenne de quartier, je prépare une évaluation à partir des ventes comparables récentes de votre secteur.",
      },
      {
        q: "Aylmer, Hull ou Plateau : lequel choisir?",
        a: "Ça dépend de ce qui compte le plus pour vous. Le Plateau attire ceux qui veulent une maison récente près du parc de la Gatineau. Aylmer offre le lac Deschênes et des quartiers plus établis, alors que Hull convient à ceux qui veulent la vie urbaine près des ponts.",
        detail: "J'ai préparé un comparatif détaillé des trois secteurs. Vous le trouverez dans la section « À lire aussi », plus bas sur cette page.",
      },
    ]}
    profilesTitle="Le Plateau convient bien aux…"
    profiles={[
      { icon: Users, title: "Familles", text: "Maisons récentes avec cour et écoles primaires dans le quartier." },
      { icon: Home, title: "Premiers acheteurs", text: "Maisons de ville et condos récents, une porte d'entrée dans le quartier." },
      { icon: TrendingUp, title: "Acheteurs qui veulent du récent", text: "Constructions récentes, souvent moins de rénovations majeures à prévoir." },
      { icon: MapPin, title: "Travailleurs d'Ottawa", text: "Accès par le boulevard des Allumettières vers les ponts." },
    ]}
    inlineCta={{ text: "Propriétaire dans le Plateau? Découvrez combien vaut votre propriété.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau/" }}
    brokerPerspective={{
      title: "Mon regard sur le Plateau",
      observation: "J'accompagne des acheteurs et des vendeurs des deux côtés du boulevard de l'Europe, dans le secteur Hull comme dans le secteur Aylmer. En février 2026, j'ai aidé un premier acheteur à acheter sa propriété dans le Plateau.",
      dataPoint: "7, rue du Chinook : vendue en une semaine, à 945 000 $ (avril 2026).",
      takeaway: "Mon conseil aux propriétaires du Plateau : votre prix se décide avec les ventes récentes de votre côté du quartier et de votre rue, pas avec une moyenne de tout le secteur.",
    }}
    faq={{
      title: "Questions sur le Plateau",
      items: [
        { q: "Le Plateau est-il un bon quartier pour les familles?", a: "Pour beaucoup de familles, oui : maisons récentes, écoles primaires dans le quartier et accès direct au parc de la Gatineau. Le bon choix dépend aussi de votre budget et de votre trajet quotidien." },
        { q: "Le Plateau est-il proche d'Ottawa?", a: "Le Plateau est à l'ouest du centre-ville de Hull. On rejoint Ottawa par le boulevard des Allumettières et les ponts, et le temps de trajet varie selon l'heure et la destination. Donnez-moi votre adresse de travail et je vous aide à comparer les options." },
        { q: "Quelles écoles desservent le Plateau?", a: "Au primaire, le CSSPO compte l'École du Plateau, l'École des Deux-Ruisseaux et l'École du Grand-Héron dans le quartier. Au secondaire, l'École secondaire de la Cité est sur le boulevard du Plateau et l'École secondaire Mont-Bleu est à proximité. L'école attribuée dépend de l'adresse : vérifiez auprès du CSSPO." },
        { q: "Quel est le prix d'une maison dans le Plateau?", a: "Ça dépend du type de propriété, de l'année de construction et du côté du quartier. Contactez-moi pour une analyse basée sur les ventes récentes de votre secteur du Plateau." },
        { q: "Y a-t-il des condos et des maisons de ville dans le Plateau?", a: "Oui, surtout dans les développements plus récents. C'est souvent la porte d'entrée des premiers acheteurs dans le quartier." },
        { q: "Le transport en commun dessert-il le Plateau?", a: "Oui, par des lignes d'autobus de la STO. Le Rapibus, lui, ne se rend pas au Plateau : son terminus ouest est la station Taché-UQO." },
        { q: "Pourquoi choisir un courtier qui connaît le Plateau?", a: "Parce que le prix se joue à l'échelle de la rue et du côté du quartier. Un courtier actif dans le secteur connaît les ventes récentes et les acheteurs qui cherchent. Ça vous aide à acheter au bon prix ou à vendre au bon moment." },
        { q: "Comment obtenir une évaluation de ma maison dans le Plateau?", a: "Je prépare une évaluation gratuite basée sur les ventes comparables récentes de votre secteur. C'est confidentiel et sans engagement." },
      ],
    }}
    sectors={{ list: [
      { name: "Aylmer", href: "/aylmer/", detail: "Lac Deschênes, quartiers établis" },
      { name: "Hull", href: "/hull/", detail: "Urbain, culture, condos" },
      { name: "Chelsea", href: "/chelsea/", detail: "Village, parc de la Gatineau" },
    ]}}
    related={{ pages: [
      { title: "Aylmer, Hull ou Plateau?", text: "Comparatif des trois secteurs.", href: "/blogue/aylmer-hull-plateau-quel-quartier-choisir/" },
      { title: "Vivre dans le Plateau", text: "Le quotidien dans le quartier.", href: "/vivre-dans-le-plateau/" },
      { title: "Évaluation gratuite", text: "Combien vaut votre propriété?", href: "/evaluation-gratuite-gatineau/" },
      { title: "Vendre à Gatineau", text: "Stratégie et accompagnement.", href: "/vendre-ma-maison-gatineau/" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau/" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau/" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit : acheter dans le Plateau", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit, recevez-le par courriel" }}
    cta={{ title: "Acheteur ou vendeur dans le Plateau?", text: "Parlons de votre projet. Je connais le quartier, des deux côtés du boulevard de l'Europe.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau/" }, { label: "Réserver une consultation", href: "/consultation-acheteur/", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default PlateauPage;
