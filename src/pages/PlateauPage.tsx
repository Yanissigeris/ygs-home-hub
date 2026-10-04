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
    hero={{ overline: "Courtier immobilier · Plateau, Gatineau", title: "Courtier immobilier dans le Plateau, à Gatineau", subtitle: "Acheter ou vendre dans le Plateau, côté Hull comme côté Aylmer, avec un courtier qui travaille dans le quartier.", image: heroImg }}
    trustSpecialty="Courtier actif dans le Plateau"
    lifestyle={{ image: heroImg, imageAlt: "Le Plateau, Gatineau", title: "Où se trouve le Plateau à Gatineau?", subtitle: "Le Plateau s'étend à l'ouest du boulevard Saint-Raymond jusqu'au chemin Vanier, entre le parc de la Gatineau au nord et le boulevard des Allumettières au sud. Comme repère, le boulevard de l'Europe sépare les adresses du secteur Hull, à l'est, de celles du secteur Aylmer, à l'ouest." }}
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
        a: "Les deux. Du boulevard Saint-Raymond jusqu'au boulevard de l'Europe, les adresses du Plateau sont dans le secteur Hull. À l'ouest du boulevard de l'Europe, jusqu'au chemin Vanier, elles sont dans le secteur Aylmer. C'est le même quartier, séparé par une limite administrative.",
        detail: "Pour un vendeur, ce détail compte : les ventes comparables les plus fiables sont celles du même côté du boulevard de l'Europe, et de préférence de la même rue.",
      },
      {
        q: "Quel type de propriétés trouve-t-on dans le Plateau?",
        a: "Surtout des maisons unifamiliales construites depuis la fin des années 1990, avec aussi des maisons de ville et des condos dans les développements plus récents. La proximité du parc de la Gatineau fait partie de l'attrait du quartier.",
        detail: "Les prix varient selon le type de propriété, l'année de construction et la rue. Pour un chiffre fiable sur votre propriété, je prépare une évaluation à partir des ventes comparables récentes de votre secteur.",
      },
      {
        q: "Aylmer, Hull ou Plateau : lequel choisir?",
        a: "Ça dépend de ce qui compte le plus pour vous. Si vous cherchez une maison récente près du parc de la Gatineau, le Plateau est un bon point de départ. Aylmer offre des quartiers plus établis, alors que Hull convient mieux à ceux qui veulent la vie urbaine près des ponts.",
        detail: "J'ai préparé un comparatif détaillé des trois secteurs. Vous le trouverez dans la section « À lire aussi », plus bas sur cette page.",
      },
    ]}
    profilesTitle="Pour qui le Plateau est un bon choix"
    profiles={[
      { icon: Users, title: "Familles", text: "Maisons récentes avec cour et écoles primaires dans le quartier." },
      { icon: Home, title: "Premiers acheteurs", text: "Maisons de ville et condos récents, une porte d'entrée dans le quartier." },
      { icon: TrendingUp, title: "Acheteurs qui veulent du récent", text: "Constructions récentes, souvent moins de rénovations majeures à prévoir." },
      { icon: MapPin, title: "Travailleurs d'Ottawa", text: "Accès par le boulevard des Allumettières vers les ponts." },
    ]}
    inlineCta={{ text: "Propriétaire dans le Plateau? Découvrez combien vaut votre propriété.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau/" }}
    brokerPerspective={{
      title: "Mon regard sur le Plateau",
      observation: "En février 2026, j'ai aidé un premier acheteur à acheter sa propriété dans le Plateau. J'ai conclu d'autres transactions dans le quartier, dont une vente rapide rue du Chinook, côté Hull.",
      dataPoint: "7, rue du Chinook : vendue en une semaine, à 945 000 $ (avril 2026).",
      takeaway: "Mon conseil aux propriétaires du Plateau : votre prix se décide avec les ventes récentes de votre côté du quartier et de votre rue, pas avec une moyenne de tout le secteur.",
    }}
    faq={{
      title: "Questions sur le Plateau",
      items: [
        { q: "Le Plateau est-il un bon quartier pour les familles?", a: "Oui, si vous cherchez une maison récente : le quartier compte trois écoles primaires et touche au parc de la Gatineau. Votre budget et votre trajet quotidien pèsent aussi dans la décision." },
        { q: "Le Plateau est-il proche d'Ottawa?", a: "Le Plateau est à l'ouest du centre-ville de Hull. On rejoint Ottawa par le boulevard des Allumettières et les ponts, et le temps de trajet varie selon l'heure et la destination." },
        { q: "Quelles écoles desservent le Plateau?", a: "Au primaire, le CSSPO compte l'École du Plateau, l'École des Deux-Ruisseaux et l'École du Grand-Héron dans le quartier. Pour le secondaire, l'École secondaire de la Cité est sur le boulevard du Plateau et l'École secondaire Mont-Bleu est à proximité. L'école attribuée dépend de l'adresse : vérifiez auprès du CSSPO." },
        { q: "Quel est le prix d'une maison dans le Plateau?", a: "Ça dépend du type de propriété, de l'année de construction et du côté du quartier. Le chiffre utile pour vous vient des ventes récentes comparables à votre propriété, dans votre partie du Plateau." },
        { q: "Y a-t-il des condos et des maisons de ville dans le Plateau?", a: "Oui, surtout dans les développements plus récents. C'est souvent la porte d'entrée des premiers acheteurs dans le quartier." },
        { q: "Le transport en commun dessert-il le Plateau?", a: "Oui, par des lignes d'autobus de la STO. Le Rapibus, lui, ne se rend pas au Plateau : son terminus ouest est la station Taché-UQO." },
        { q: "Pourquoi choisir un courtier qui connaît le Plateau?", a: "Parce que le prix se joue à l'échelle de la rue et du côté du quartier. Un courtier actif dans le secteur connaît les ventes récentes et les acheteurs qui cherchent. Ça vous aide à acheter au bon prix ou à vendre au bon moment." },
        { q: "Comment obtenir une évaluation de ma maison dans le Plateau?", a: "Je prépare une évaluation gratuite basée sur les ventes comparables récentes de votre secteur. C'est confidentiel et sans engagement." },
      ],
    }}
    sectors={{ list: [
      { name: "Aylmer", href: "/aylmer/", detail: "Familles, quartiers établis" },
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
    cta={{ title: "Acheteur ou vendeur dans le Plateau?", text: "Écrivez-moi, côté Hull ou côté Aylmer, et on regarde votre projet ensemble.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau/" }, { label: "Réserver une consultation", href: "/consultation-acheteur/", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default PlateauPage;
