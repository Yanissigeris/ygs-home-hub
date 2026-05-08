import NeighborhoodTemplate from "@/components/NeighborhoodTemplate";
import { Users, Home, TreePine, Mountain } from "lucide-react";
import heroImg from "@/assets/hero-val-des-monts-gen.webp";

const ValDesMontsPage = () => (
  <NeighborhoodTemplate
    seoTitle="Val-des-Monts — Immobilier et guide de quartier"
    metaDesc="Vivre, acheter ou vendre à Val-des-Monts. Lacs, chalets, grands terrains et nature sauvage — à 30 minutes de Gatineau."
    ogImage="https://yanisgauthier.com/og/og-val-des-monts.jpg"
    jsonLd={{ name: "Val-des-Monts", description: "Courtier immobilier à Val-des-Monts. Lacs, chalets et propriétés de villégiature en Outaouais.", lat: 45.5000, lng: -75.6500, url: "/val-des-monts" }}
    hero={{ overline: "Guide de quartier · Val-des-Monts", title: "Vivre, acheter ou vendre à Val-des-Monts", subtitle: "Lacs cristallins, terrains boisés et tranquillité — la municipalité de villégiature de l'Outaouais. Plus de 200 lacs, à 30-40 minutes de Gatineau et 45 minutes d'Ottawa.", image: heroImg }}
    trustSpecialty="Spécialiste Val-des-Monts et environs"
    lifestyle={{ image: heroImg, imageAlt: "Lac à Val-des-Monts", title: "Pourquoi Val-des-Monts est unique", subtitle: "Val-des-Monts attire trois types d'acheteurs : ceux qui cherchent une résidence principale en pleine nature, ceux qui veulent un chalet quatre-saisons pour les fins de semaine, et ceux qui investissent dans une propriété de villégiature. Les grands lacs comme McGregor, Saint-Pierre et Achigan dominent la demande. C'est l'un des rares secteurs de l'Outaouais où on peut vivre les pieds dans l'eau à moins de 30 minutes du centre-ville d'Ottawa." }}
    reasons={[
      "Plus de 200 lacs — accès privé à un lac pour beaucoup de propriétés",
      "Propriétés entre 200 000 $ et 750 000 $+ selon le type, l'accès au lac et le sous-secteur (données Centris, mai 2026)",
      "Lacs principaux : McGregor, Saint-Pierre, Achigan, Barnes — chacun avec sa dynamique de marché propre",
      "Terrains de 2 à 50+ acres — intimité totale en pleine nature",
      "Chalets quatre-saisons, résidences permanentes et propriétés de luxe bord de lac",
      "Village de Perkins comme centre de services (épicerie, école primaire, services de proximité)",
      "27 minutes du pont Macdonald-Cartier pour accéder au centre-ville d'Ottawa",
      "30-40 minutes du centre de Gatineau — accès aux services hospitaliers et commerciaux",
      "Marché actif avec demande soutenue : environ 77 unifamiliales et 6 chalets disponibles sur Centris en mai 2026",
    ]}
    profilesTitle="Val-des-Monts est idéal pour…"
    profiles={[
      { icon: TreePine, title: "Amateurs de lac et nature", text: "Quai privé, kayak, baignade et feux de camp. Les grands lacs comme McGregor et Saint-Pierre offrent les meilleures conditions pour la vie nautique quatre saisons." },
      { icon: Home, title: "Chercheurs de chalet", text: "Du chalet rustique 200 000 $ au bord de lac luxueux 750 000 $+. Les chalets quatre-saisons sont les plus demandés depuis le télétravail." },
      { icon: Users, title: "Familles en quête d'espace", text: "Grands terrains de 2 acres et plus, école primaire à Perkins, communauté tissée serrée. Pas d'école secondaire dans Val-des-Monts — il faut prévoir le transport vers Buckingham ou Gatineau." },
      { icon: Mountain, title: "Télétravailleurs et retraités", text: "Cadre de vie exceptionnel avec Internet haute vitesse disponible dans la majorité des secteurs. À 27 minutes d'Ottawa pour les rencontres en présentiel ponctuelles." },
    ]}
    inlineCta={{ text: "Vous possédez un chalet à Val-des-Monts? Découvrez sa valeur actuelle.", label: "Obtenir ma valeur →", href: "/evaluation-gratuite-gatineau" }}
    faq={{
      title: "Questions sur Val-des-Monts",
      items: [
        { q: "Val-des-Monts est-il accessible à l'année?", a: "Oui, la majorité des routes principales sont entretenues à l'année. Certains chemins privés en bord de lac peuvent nécessiter du déneigement supplémentaire ou un véhicule 4×4 pour les accès les plus reculés." },
        { q: "Quel est le prix d'une propriété à Val-des-Monts en 2026?", a: "Selon les inscriptions actives sur Centris en mai 2026, les propriétés se vendent généralement entre 200 000 $ pour un chalet rustique avec accès lac et 750 000 $+ pour une résidence quatre-saisons en bord de lac. Les prix dépendent fortement du lac, de l'orientation et du type de propriété." },
        { q: "Quels sont les principaux lacs de Val-des-Monts?", a: "Les plus connus sont McGregor, Saint-Pierre, Achigan et Barnes. Chaque lac a sa propre dynamique : McGregor pour les propriétés haut de gamme et navigation, Saint-Pierre pour les chalets familiaux, Achigan pour la pêche, Barnes pour la tranquillité." },
        { q: "Peut-on habiter à Val-des-Monts à l'année?", a: "Absolument. De plus en plus de résidents permanents s'y installent depuis 2020, attirés par le télétravail et la qualité de vie. La municipalité a investi dans l'Internet haute vitesse pour soutenir cette tendance." },
        { q: "Y a-t-il des écoles à Val-des-Monts?", a: "Oui pour le primaire (école à Perkins notamment). Pour le secondaire, les élèves doivent généralement se rendre à Buckingham ou dans le secteur de Gatineau. C'est un facteur à considérer pour les familles avec ados." },
        { q: "Combien de temps prend une vente à Val-des-Monts?", a: "Variable selon le type. Les propriétés en bord de lac McGregor ou Saint-Pierre bien préparées partent souvent en 30-60 jours en saison forte (printemps-été). Les chalets rustiques ou propriétés sans accès lac peuvent prendre 60-120 jours." },
      ],
    }}
    sectors={{ list: [
      { name: "Cantley", href: "/cantley", detail: "Rural, collines, grands terrains — voisin sud de Val-des-Monts" },
      { name: "Chelsea", href: "/chelsea", detail: "Village, parc de la Gatineau — alternative haut de gamme côté ouest" },
      { name: "Buckingham", href: "/buckingham-masson-angers", detail: "Abordable, rivière, nature — avec école secondaire" },
    ]}}
    related={{ pages: [
      { title: "Vendre mon chalet à Val-des-Monts", text: "Stratégie de vente pour propriétés de villégiature.", href: "/vendre-ma-maison-gatineau" },
      { title: "Évaluation chalet Val-des-Monts", text: "Combien vaut votre chalet ou terrain?", href: "/evaluation-gratuite-gatineau" },
      { title: "Acheter à Gatineau", text: "Guide acheteur complet.", href: "/acheter-a-gatineau" },
      { title: "Premier achat", text: "Budget, mise de fonds et conseils.", href: "/premier-achat-gatineau" },
      { title: "Plex et investissement", text: "Analyse pour investisseurs.", href: "/investir-plex-gatineau" },
      { title: "Quartiers de l'Outaouais", text: "Comparez tous les secteurs.", href: "/quartiers-a-considerer-a-gatineau" },
    ]}}
    guide={{ type: "buyer_guide", headline: "Guide acheteur gratuit — acheter à Val-des-Monts", text: "Processus, budget et conseils pour acheter dans le secteur.", ctaLabel: "Recevoir le guide acheteur", stickyLabel: "Guide acheteur gratuit — recevez-le par courriel" }}
    brokerPerspective={{
      observation: "Ce que je vois à Val-des-Monts en ce moment : la demande reste forte pour les bord de lac, mais les chalets rustiques se vendent moins vite qu'avant. Mes acheteurs sont surtout des familles d'Ottawa-Gatineau qui cherchent une résidence principale en pleine nature, ou des couples 45-65 ans qui veulent un chalet quatre-saisons pour préparer leur retraite. Le télétravail a vraiment changé la donne — ce qui était une propriété de fin de semaine avant 2020 devient maintenant une résidence principale pour beaucoup de mes clients.",
      dataPoint: "Sur les ventes que je conclus à Val-des-Monts, les bord de lac McGregor et Saint-Pierre bien préparés partent en 30-60 jours en saison forte. Les chalets rustiques ou propriétés sans accès lac direct prennent souvent 60-120 jours, et les vendeurs doivent être plus patients ou ajuster leur prix.",
      takeaway: "Mon conseil aux propriétaires de Val-des-Monts qui pensent vendre : le timing et la préparation comptent énormément. Inscris ta propriété au printemps idéalement, prépare-la pour les photos l'été précédent si possible, et sois réaliste sur le prix selon le type de lac et l'accès. Une propriété sur McGregor ne se compare pas à une sans accès lac — fais-toi évaluer correctement avant d'inscrire."
    }}
    cta={{ title: "Acheteur ou vendeur à Val-des-Monts?", text: "Je connais le secteur — parlons de votre projet.", buttons: [{ label: "Obtenir ma valeur", href: "/evaluation-gratuite-gatineau" }, { label: "Réserver une consultation", href: "/consultation-acheteur", variant: "outline" }], trustLine: "Je vous donne les chiffres et les options, vous décidez." }}
  />
);

export default ValDesMontsPage;
