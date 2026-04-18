/**
 * Central SEO map: route → { title, description }
 * Used by scripts/prerender.mjs to inject unique <title>, <meta description>,
 * and <link rel="canonical"> into a static HTML per route at build time.
 *
 * Keep titles ≤ 60 chars, descriptions ≤ 160 chars where possible.
 * The runtime <PageMeta> component still updates these client-side; this map
 * exists so search-engine crawlers see unique tags without executing JS.
 *
 * Blog routes (/blogue/:slug, /en/blog/:slug) are NOT listed here — they are
 * appended dynamically via getAllSeoRoutes() from blog-extractor.mjs.
 */

import { extractBlogPosts } from "./blog-extractor.mjs";

export const SITE_URL = "https://yanisgauthier.com";
export const DEFAULT_OG = `${SITE_URL}/og/og-default.jpg`;
const BLOG_OG = `${SITE_URL}/og/og-blog.jpg`;

/** @type {Record<string, { title: string; description: string; ogImage?: string }>} */
export const SEO_ROUTES = {
  // ───────────────────────── FR ─────────────────────────
  "/": {
    title: "YGS — Courtier immobilier Gatineau · Outaouais",
    description:
      "Courtier immobilier à Gatineau depuis 9 ans. Vendre, acheter ou investir en Outaouais — stratégie claire, chiffres honnêtes. Évaluation gratuite.",
  },
  "/proprietes": {
    title: "Propriétés à vendre · Gatineau et Outaouais | YGS",
    description:
      "Découvrez les propriétés à vendre en Outaouais : Aylmer, Hull, Plateau, Chelsea, Cantley. Inscriptions actuelles et nouveautés du marché.",
  },
  "/vendre-ma-maison-gatineau": {
    title: "Vendre ma maison à Gatineau | YGS Courtier immobilier",
    description:
      "Vendez votre propriété à Gatineau avec Yanis Gauthier-Sigeris : évaluation gratuite, stratégie de prix, mise en marché complète. 9 ans d'expérience en Outaouais.",
  },
  "/evaluation-gratuite-gatineau": {
    title: "Évaluation gratuite · Maison Gatineau | YGS",
    description:
      "Obtenez l'évaluation gratuite de votre propriété à Gatineau en 24-48h. Analyse comparative locale, ventes récentes, prix de mise en marché réaliste.",
  },
  "/plan-vendeur-gatineau": {
    title: "Plan vendeur · Vendre à Gatineau étape par étape | YGS",
    description:
      "Le plan complet pour vendre votre maison à Gatineau : préparation, prix, marketing, visites, négociation. Méthode claire et accompagnement personnalisé.",
  },
  "/guide-vendeur-gatineau": {
    title: "Guide du vendeur · Maison Gatineau | YGS",
    description:
      "Guide pratique pour vendre votre maison à Gatineau : préparation, fixation du prix, photos, visites, contre-offres. Conseils d'un courtier local.",
  },
  "/quand-vendre-a-gatineau": {
    title: "Quand vendre sa maison à Gatineau · Meilleur moment | YGS",
    description:
      "Quand vendre votre propriété à Gatineau ? Saisons, marché actuel, taux d'intérêt, situation personnelle — analyse pour choisir le bon moment.",
  },
  "/vendre-un-plex-a-gatineau": {
    title: "Vendre un plex à Gatineau · Stratégie investisseur | YGS",
    description:
      "Vendre votre plex à Gatineau (duplex, triplex, multi) : évaluation revenus-dépenses, ciblage investisseurs, maximisation du prix de vente.",
  },
  "/acheter-a-gatineau": {
    title: "Acheter une maison à Gatineau | YGS Courtier",
    description:
      "Acheter une propriété à Gatineau : consultation acheteur, recherche ciblée, visites, négociation, inspection. Accompagnement complet en Outaouais.",
  },
  "/consultation-acheteur": {
    title: "Consultation acheteur gratuite · Gatineau | YGS",
    description:
      "Consultation gratuite pour acheteurs à Gatineau : budget, préapprobation, secteurs, critères, processus. Démarrez votre projet sur des bases solides.",
  },
  "/guide-acheteur-gatineau": {
    title: "Guide de l'acheteur · Maison Gatineau | YGS",
    description:
      "Guide complet pour acheter à Gatineau : étapes, financement, frais, inspection, promesse d'achat. Tout ce qu'il faut savoir avant d'acheter.",
  },
  "/premier-achat-gatineau": {
    title: "Premier achat immobilier · Gatineau | YGS",
    description:
      "Premier achat à Gatineau : RAP, CELIAPP, mise de fonds, préapprobation, taxe de bienvenue. Accompagnement étape par étape pour primo-accédants.",
  },
  "/acheter-a-gatineau-depuis-ottawa": {
    title: "Acheter à Gatineau depuis Ottawa · Guide | YGS",
    description:
      "Vous habitez Ottawa et voulez acheter à Gatineau ? Différences fiscales, hypothèques, marché — tout pour franchir la rivière sereinement.",
  },
  "/relocalisation-ottawa-gatineau": {
    title: "Relocalisation Ottawa → Gatineau | YGS Courtier",
    description:
      "Déménager d'Ottawa vers Gatineau : secteurs, écoles, transport, fiscalité Québec vs Ontario. Service de relocalisation complet.",
  },
  "/relocalisation-montreal-gatineau": {
    title: "Relocalisation Montréal → Gatineau | YGS",
    description:
      "Déménager de Montréal à Gatineau : marché, secteurs, qualité de vie, distance avec Ottawa. Accompagnement complet pour votre relocalisation.",
  },
  "/guide-relocalisation-gatineau": {
    title: "Guide de relocalisation à Gatineau | YGS",
    description:
      "Guide pratique pour relocaliser à Gatineau : choisir un secteur, écoles, services, transport, démarches. Conseils d'un courtier local.",
  },
  "/quartiers-a-considerer-a-gatineau": {
    title: "Quartiers à considérer à Gatineau · Guide | YGS",
    description:
      "Comparatif des quartiers de Gatineau : Aylmer, Hull, Plateau, Buckingham, Masson-Angers. Profil, prix, ambiance, accès à Ottawa.",
  },
  "/militaire-gatineau": {
    title: "Militaires · Acheter ou vendre à Gatineau | YGS",
    description:
      "Service immobilier dédié aux militaires à Gatineau : mutations, IRP, BFC Petawawa, BFC Ottawa. Courtier qui comprend la réalité militaire.",
  },
  "/relocalisation-militaire-gatineau": {
    title: "Relocalisation militaire à Gatineau · IRP | YGS",
    description:
      "Mutation militaire vers Gatineau ou Ottawa : programme IRP, courtiers approuvés, processus accéléré. Accompagnement bilingue complet.",
  },
  "/acheter-comme-militaire-gatineau": {
    title: "Acheter comme militaire à Gatineau | YGS",
    description:
      "Acheter une maison à Gatineau lors d'une mutation militaire : IRP, indemnités, secteurs proches des bases, hypothèque adaptée.",
  },
  "/vendre-lors-dune-mutation-gatineau": {
    title: "Vendre lors d'une mutation militaire · Gatineau | YGS",
    description:
      "Vendre votre maison à Gatineau lors d'une mutation : délais serrés, GHRP, IRP, mise en marché accélérée. Service militaire dédié.",
  },
  "/guide-militaire-gatineau": {
    title: "Guide militaire · Immobilier Gatineau | YGS",
    description:
      "Guide complet pour militaires à Gatineau : IRP, GHRP, secteurs, écoles, services aux familles militaires. Tout pour bien s'installer.",
  },
  "/investir-plex-gatineau": {
    title: "Investir dans un plex à Gatineau | YGS",
    description:
      "Investir en plex à Gatineau : duplex, triplex, multi-logements. Analyse de rentabilité, secteurs porteurs, financement, gestion.",
  },
  "/analyse-plex-gatineau": {
    title: "Analyse de plex · Calculateur rentabilité Gatineau | YGS",
    description:
      "Analyse complète d'un plex à Gatineau : revenus, dépenses, cash-flow, TGA, ROI. Calculateur et expertise investisseur.",
  },
  "/rapport-marche-gatineau": {
    title: "Rapport du marché immobilier · Gatineau | YGS",
    description:
      "Rapport mensuel du marché immobilier à Gatineau : prix médians, délais de vente, inventaire, tendances par secteur.",
  },
  "/plateau-aylmer": {
    title: "Plateau de Aylmer · Quartier Gatineau | YGS",
    description:
      "Plateau de Aylmer : profil du quartier, prix, écoles, services, ambiance. Guide complet pour acheter ou vendre dans ce secteur recherché.",
  },
  "/hull": {
    title: "Courtier immobilier Hull · Gatineau | YGS",
    description:
      "Courtier immobilier Hull : marché du Vieux-Hull, condos, plex, proximité Ottawa. Acheter, vendre ou investir dans ce secteur central.",
  },
  "/buckingham-masson-angers": {
    title: "Buckingham et Masson-Angers · Immobilier | YGS",
    description:
      "Immobilier à Buckingham et Masson-Angers : secteurs paisibles à l'est de Gatineau, maisons familiales, terrains, prix accessibles.",
  },
  "/gatineau": {
    title: "Courtier immobilier Gatineau-centre | YGS",
    description:
      "Courtier immobilier dans le secteur Gatineau-centre : marché, écoles, services. Acheter, vendre ou évaluer avec un courtier local.",
  },
  "/aylmer": {
    title: "Courtier immobilier Aylmer · Gatineau | YGS",
    description:
      "Courtier immobilier Aylmer : marché actuel, secteurs, écoles, prix médians. Acheter, vendre ou faire évaluer votre propriété à Aylmer.",
  },
  "/plateau": {
    title: "Plateau de Hull · Quartier Gatineau | YGS",
    description:
      "Plateau de Hull à Gatineau : nouveau secteur, maisons récentes, services, écoles. Profil du quartier et opportunités immobilières.",
  },
  "/chelsea": {
    title: "Courtier immobilier Chelsea · Outaouais | YGS",
    description:
      "Courtier immobilier Chelsea : maisons de campagne, terrains boisés, proximité parc Gatineau. Marché et secteurs détaillés.",
  },
  "/cantley": {
    title: "Courtier immobilier Cantley · Outaouais | YGS",
    description:
      "Courtier immobilier Cantley : maisons sur grand terrain, ambiance rurale, accès rapide à Gatineau. Acheter ou vendre dans la région.",
  },
  "/val-des-monts": {
    title: "Courtier immobilier Val-des-Monts | YGS",
    description:
      "Courtier immobilier Val-des-Monts : chalets, bord de l'eau, maisons familiales en nature. Marché et opportunités en Outaouais.",
  },
  "/masson-angers": {
    title: "Courtier immobilier Masson-Angers · Gatineau | YGS",
    description:
      "Courtier immobilier Masson-Angers : secteur paisible, maisons familiales, terrains. Acheter ou vendre dans ce quartier de Gatineau.",
  },
  "/pontiac": {
    title: "Courtier immobilier Pontiac · Outaouais | YGS",
    description:
      "Courtier immobilier MRC Pontiac : grandes propriétés, fermettes, bord de l'eau. Marché immobilier rural à l'ouest de Gatineau.",
  },
  "/cote-dazur-gatineau": {
    title: "Côte-d'Azur · Quartier Gatineau | YGS",
    description:
      "Quartier Côte-d'Azur à Gatineau : profil, prix, services, écoles. Guide pour acheter ou vendre dans ce secteur recherché.",
  },
  "/limbour": {
    title: "Limbour · Quartier Gatineau | YGS",
    description:
      "Quartier Limbour à Gatineau : maisons familiales, écoles, services. Profil du secteur et opportunités immobilières actuelles.",
  },
  "/ressources": {
    title: "Ressources immobilières · Gatineau | YGS",
    description:
      "Calculateurs hypothécaires, taxe de bienvenue, guides d'achat et de vente. Outils gratuits pour acheteurs et vendeurs en Outaouais.",
  },
  "/blogue": {
    title: "Blogue immobilier · Gatineau et Outaouais | YGS",
    description:
      "Articles, conseils et analyses sur l'immobilier à Gatineau et en Outaouais : marché, secteurs, financement, fiscalité.",
  },
  "/vivre-a-aylmer": {
    title: "Vivre à Aylmer · Guide du quartier | YGS",
    description:
      "Vivre à Aylmer : ambiance, écoles, services, restaurants, transport vers Ottawa. Guide complet pour découvrir ce secteur de Gatineau.",
  },
  "/vivre-a-hull": {
    title: "Vivre à Hull · Guide du quartier | YGS",
    description:
      "Vivre à Hull : centre-ville dynamique, restaurants, parcs, accès Ottawa. Guide complet pour découvrir le secteur Hull de Gatineau.",
  },
  "/vivre-dans-le-plateau": {
    title: "Vivre dans le Plateau · Guide du quartier | YGS",
    description:
      "Vivre dans le Plateau de Hull : nouveau secteur, écoles, services, ambiance familiale. Guide complet de ce quartier de Gatineau.",
  },
  "/faq": {
    title: "FAQ · Questions courtier immobilier Gatineau | YGS",
    description:
      "Questions fréquentes sur l'achat, la vente et l'évaluation immobilière à Gatineau. Réponses claires d'un courtier local.",
  },
  "/temoignages": {
    title: "Témoignages clients · YGS Courtier Gatineau",
    description:
      "Témoignages de clients de Yanis Gauthier-Sigeris : vendeurs, acheteurs, investisseurs et militaires en Outaouais.",
  },
  "/contact-yanis": {
    title: "Contact Yanis Gauthier-Sigeris · Courtier Gatineau | YGS",
    description:
      "Contactez Yanis Gauthier-Sigeris, courtier immobilier à Gatineau. Téléphone, courriel, WhatsApp, formulaire. Réponse en 24h.",
  },
  "/merci": {
    title: "Merci · Demande reçue | YGS",
    description: "Merci pour votre message. Yanis vous recontacte rapidement.",
  },
  "/merci-evaluation": {
    title: "Merci · Évaluation demandée | YGS",
    description:
      "Merci pour votre demande d'évaluation. Yanis prépare votre analyse comparative et vous recontacte sous 24-48h.",
  },
  "/courtier-immobilier-outaouais": {
    title: "Courtier immobilier Outaouais · YGS",
    description:
      "Courtier immobilier en Outaouais : Gatineau, Aylmer, Hull, Chelsea, Cantley, Pontiac. Service complet pour vendre, acheter ou investir.",
  },
  "/vendre-maison-hull": {
    title: "Vendre une maison à Hull · Gatineau | YGS",
    description:
      "Vendez votre maison à Hull avec un courtier local : évaluation gratuite, stratégie de prix adaptée au marché central de Gatineau.",
  },
  "/vendre-maison-aylmer": {
    title: "Vendre une maison à Aylmer · Gatineau | YGS",
    description:
      "Vendez votre maison à Aylmer avec un courtier local : évaluation gratuite, mise en marché stratégique et accompagnement complet.",
  },
  "/evaluation-maison-hull": {
    title: "Évaluation gratuite maison Hull · Gatineau | YGS",
    description:
      "Évaluation gratuite de votre propriété à Hull en 24-48h. Analyse comparative basée sur les ventes récentes du secteur.",
  },
  "/evaluation-maison-aylmer": {
    title: "Évaluation gratuite maison Aylmer · Gatineau | YGS",
    description:
      "Évaluation gratuite de votre propriété à Aylmer en 24-48h. Analyse comparative basée sur les ventes récentes du secteur.",
  },
  "/combien-coute-un-courtier-immobilier-au-quebec": {
    title: "Combien coûte un courtier immobilier au Québec ? | YGS",
    description:
      "Combien coûte un courtier immobilier au Québec ? Commission, taxes, ce qui est inclus. Explication claire et transparente.",
  },
  "/comment-choisir-un-courtier-immobilier": {
    title: "Comment choisir un courtier immobilier · Guide | YGS",
    description:
      "Comment choisir un bon courtier immobilier au Québec ? Critères, questions à poser, OACIQ, expérience locale. Guide pratique.",
  },
  "/verifier-un-courtier-immobilier-oaciq": {
    title: "Vérifier un courtier sur l'OACIQ · Guide | YGS",
    description:
      "Comment vérifier qu'un courtier immobilier est bien inscrit à l'OACIQ ? Étapes, registre public, points à valider.",
  },
  "/frais-de-courtage-immobilier-quebec": {
    title: "Frais de courtage immobilier au Québec · Guide | YGS",
    description:
      "Frais de courtage immobilier au Québec : pourcentages, négociation, ce qui est inclus. Comprendre la commission avant de vendre.",
  },
  "/courtier-immobilier-ou-vendre-soi-meme": {
    title: "Courtier vs vendre soi-même · Comparaison | YGS",
    description:
      "Vendre avec un courtier ou par soi-même (DuProprio) ? Avantages, inconvénients, prix de vente, temps. Comparaison honnête.",
  },
  "/politique-de-confidentialite": {
    title: "Politique de confidentialité | YGS",
    description:
      "Politique de confidentialité de YGS : collecte, usage et protection de vos données personnelles. Conformité Loi 25.",
  },
  "/conditions-utilisation": {
    title: "Conditions d'utilisation | YGS",
    description: "Conditions d'utilisation du site yanisgauthier.com.",
  },

  // ───────────────────────── EN ─────────────────────────
  "/en": {
    title: "YGS — Real Estate Broker Gatineau · Outaouais",
    description:
      "Real estate broker in Gatineau with 9 years experience. Selling, buying or investing in Outaouais — clear strategy, honest numbers. Free home valuation.",
  },
  "/en/properties": {
    title: "Properties for sale · Gatineau and Outaouais | YGS",
    description:
      "Browse properties for sale in Outaouais: Aylmer, Hull, Plateau, Chelsea, Cantley. Current listings and new market opportunities.",
  },
  "/en/sell": {
    title: "Sell my house in Gatineau | YGS Real Estate",
    description:
      "Sell your home in Gatineau with Yanis Gauthier-Sigeris: free valuation, pricing strategy, full marketing. 9 years experience in Outaouais.",
  },
  "/en/home-valuation": {
    title: "Free home valuation · Gatineau | YGS",
    description:
      "Get a free valuation of your Gatineau property in 24-48h. Local comparative analysis, recent sales, realistic listing price.",
  },
  "/en/seller-plan": {
    title: "Seller plan · Sell in Gatineau step by step | YGS",
    description:
      "The complete plan to sell your home in Gatineau: prep, pricing, marketing, showings, negotiation. Clear method, personal guidance.",
  },
  "/en/seller-guide": {
    title: "Seller's guide · Gatineau homes | YGS",
    description:
      "Practical seller's guide for Gatineau: prep, pricing, photos, showings, counter-offers. Local broker advice.",
  },
  "/en/when-to-sell": {
    title: "When to sell your home in Gatineau · Best time | YGS",
    description:
      "When to sell in Gatineau? Seasons, current market, interest rates, personal situation — analysis to pick the right moment.",
  },
  "/en/sell-plex": {
    title: "Sell a plex in Gatineau · Investor strategy | YGS",
    description:
      "Sell your Gatineau plex (duplex, triplex, multi): income-expense valuation, investor targeting, price maximization.",
  },
  "/en/buy": {
    title: "Buy a home in Gatineau | YGS Real Estate Broker",
    description:
      "Buy a property in Gatineau: buyer consultation, focused search, showings, negotiation, inspection. Full guidance in Outaouais.",
  },
  "/en/buyer-consultation": {
    title: "Free buyer consultation · Gatineau | YGS",
    description:
      "Free consultation for buyers in Gatineau: budget, pre-approval, areas, criteria, process. Start your project on solid ground.",
  },
  "/en/buyer-guide": {
    title: "Buyer's guide · Gatineau homes | YGS",
    description:
      "Complete buyer's guide for Gatineau: steps, financing, fees, inspection, offer. Everything to know before buying.",
  },
  "/en/first-time-buyer": {
    title: "First-time home buyer · Gatineau | YGS",
    description:
      "First home in Gatineau: HBP, FHSA, down payment, pre-approval, welcome tax. Step-by-step guidance for first-time buyers.",
  },
  "/en/buy-from-ottawa": {
    title: "Buy in Gatineau from Ottawa · Guide | YGS",
    description:
      "Live in Ottawa and want to buy in Gatineau? Tax differences, mortgages, market — everything to cross the river smoothly.",
  },
  "/en/relocation": {
    title: "Relocation Ottawa → Gatineau | YGS Broker",
    description:
      "Moving from Ottawa to Gatineau: areas, schools, transport, Quebec vs Ontario taxes. Full relocation service.",
  },
  "/en/montreal-relocation": {
    title: "Relocation Montreal → Gatineau | YGS",
    description:
      "Moving from Montreal to Gatineau: market, areas, quality of life, distance to Ottawa. Complete relocation guidance.",
  },
  "/en/relocation-guide": {
    title: "Relocation guide · Gatineau | YGS",
    description:
      "Practical guide to relocate to Gatineau: choosing an area, schools, services, transport, paperwork. Local broker advice.",
  },
  "/en/neighborhoods": {
    title: "Gatineau neighborhoods to consider · Guide | YGS",
    description:
      "Compare Gatineau neighborhoods: Aylmer, Hull, Plateau, Buckingham, Masson-Angers. Profile, prices, vibe, access to Ottawa.",
  },
  "/en/military": {
    title: "Military · Buy or sell in Gatineau | YGS",
    description:
      "Real estate service for military in Gatineau: postings, IRP, CFB Petawawa, CFB Ottawa. A broker who understands military life.",
  },
  "/en/military-relocation": {
    title: "Military relocation to Gatineau · IRP | YGS",
    description:
      "Military posting to Gatineau or Ottawa: IRP program, approved brokers, expedited process. Full bilingual support.",
  },
  "/en/military-buyer": {
    title: "Buying as a military member in Gatineau | YGS",
    description:
      "Buy a home in Gatineau on a military posting: IRP, allowances, areas near bases, suitable mortgage.",
  },
  "/en/military-seller": {
    title: "Selling on military posting · Gatineau | YGS",
    description:
      "Sell your Gatineau home on a military posting: tight deadlines, GHRP, IRP, accelerated marketing. Dedicated military service.",
  },
  "/en/military-guide": {
    title: "Military guide · Gatineau real estate | YGS",
    description:
      "Complete guide for military in Gatineau: IRP, GHRP, areas, schools, services for military families. Everything to settle well.",
  },
  "/en/plex": {
    title: "Invest in a plex in Gatineau | YGS",
    description:
      "Plex investing in Gatineau: duplex, triplex, multi-unit. Profitability analysis, strong areas, financing, management.",
  },
  "/en/plex-analysis": {
    title: "Plex analysis · Profitability calculator Gatineau | YGS",
    description:
      "Full plex analysis in Gatineau: income, expenses, cash flow, GRM, ROI. Calculator and investor expertise.",
  },
  "/en/market-report": {
    title: "Gatineau real estate market report | YGS",
    description:
      "Monthly Gatineau real estate market report: median prices, days on market, inventory, trends by area.",
  },
  "/en/plateau-aylmer": {
    title: "Plateau de Aylmer · Gatineau neighborhood | YGS",
    description:
      "Plateau de Aylmer: neighborhood profile, prices, schools, services, vibe. Complete guide to buy or sell in this sought-after area.",
  },
  "/en/hull": {
    title: "Real Estate Broker Hull · Gatineau | YGS",
    description:
      "Real estate broker Hull: Old-Hull market, condos, plex, proximity to Ottawa. Buy, sell or invest in this central area.",
  },
  "/en/buckingham": {
    title: "Buckingham and Masson-Angers · Real estate | YGS",
    description:
      "Real estate in Buckingham and Masson-Angers: peaceful areas east of Gatineau, family homes, lots, accessible prices.",
  },
  "/en/gatineau": {
    title: "Real Estate Broker Gatineau-centre | YGS",
    description:
      "Real estate broker in central Gatineau: market, schools, services. Buy, sell or get a valuation with a local broker.",
  },
  "/en/aylmer": {
    title: "Real Estate Broker Aylmer · Gatineau | YGS",
    description:
      "Real estate broker Aylmer: current market, areas, schools, median prices. Buy, sell or get your Aylmer property valued.",
  },
  "/en/plateau": {
    title: "Plateau de Hull · Gatineau neighborhood | YGS",
    description:
      "Plateau de Hull in Gatineau: new area, recent homes, services, schools. Neighborhood profile and real estate opportunities.",
  },
  "/en/chelsea": {
    title: "Real Estate Broker Chelsea · Outaouais | YGS",
    description:
      "Real estate broker Chelsea: country homes, wooded lots, proximity to Gatineau Park. Detailed market and areas.",
  },
  "/en/cantley": {
    title: "Real Estate Broker Cantley · Outaouais | YGS",
    description:
      "Real estate broker Cantley: homes on large lots, rural feel, fast access to Gatineau. Buy or sell in the area.",
  },
  "/en/val-des-monts": {
    title: "Real Estate Broker Val-des-Monts | YGS",
    description:
      "Real estate broker Val-des-Monts: cottages, waterfront, family homes in nature. Market and opportunities in Outaouais.",
  },
  "/en/masson-angers": {
    title: "Real Estate Broker Masson-Angers · Gatineau | YGS",
    description:
      "Real estate broker Masson-Angers: peaceful area, family homes, lots. Buy or sell in this Gatineau neighborhood.",
  },
  "/en/pontiac": {
    title: "Real Estate Broker Pontiac · Outaouais | YGS",
    description:
      "Real estate broker MRC Pontiac: large properties, hobby farms, waterfront. Rural real estate market west of Gatineau.",
  },
  "/en/cote-dazur": {
    title: "Côte-d'Azur · Gatineau neighborhood | YGS",
    description:
      "Côte-d'Azur neighborhood in Gatineau: profile, prices, services, schools. Guide to buy or sell in this sought-after area.",
  },
  "/en/limbour": {
    title: "Limbour · Gatineau neighborhood | YGS",
    description:
      "Limbour neighborhood in Gatineau: family homes, schools, services. Area profile and current real estate opportunities.",
  },
  "/en/resources": {
    title: "Real estate resources · Gatineau | YGS",
    description:
      "Mortgage and welcome tax calculators, buyer and seller guides. Free tools for buyers and sellers in Outaouais.",
  },
  "/en/blog": {
    title: "Real estate blog · Gatineau and Outaouais | YGS",
    description:
      "Articles, advice and analysis on Gatineau and Outaouais real estate: market, areas, financing, taxation.",
  },
  "/en/living-aylmer": {
    title: "Living in Aylmer · Neighborhood guide | YGS",
    description:
      "Living in Aylmer: vibe, schools, services, restaurants, transit to Ottawa. Complete guide to discover this Gatineau area.",
  },
  "/en/living-hull": {
    title: "Living in Hull · Neighborhood guide | YGS",
    description:
      "Living in Hull: vibrant downtown, restaurants, parks, Ottawa access. Complete guide to discover the Hull area of Gatineau.",
  },
  "/en/living-plateau": {
    title: "Living in the Plateau · Neighborhood guide | YGS",
    description:
      "Living in the Plateau de Hull: new area, schools, services, family vibe. Complete guide to this Gatineau neighborhood.",
  },
  "/en/faq": {
    title: "FAQ · Real estate broker Gatineau | YGS",
    description:
      "Frequently asked questions about buying, selling and home valuation in Gatineau. Clear answers from a local broker.",
  },
  "/en/testimonials": {
    title: "Client testimonials · YGS Broker Gatineau",
    description:
      "Testimonials from Yanis Gauthier-Sigeris's clients: sellers, buyers, investors and military members in Outaouais.",
  },
  "/en/contact": {
    title: "Contact Yanis Gauthier-Sigeris · Gatineau Broker | YGS",
    description:
      "Contact Yanis Gauthier-Sigeris, real estate broker in Gatineau. Phone, email, WhatsApp, form. Reply within 24h.",
  },
  "/en/thank-you": {
    title: "Thank you · Message received | YGS",
    description: "Thanks for reaching out. Yanis will get back to you shortly.",
  },
  "/en/thank-you-valuation": {
    title: "Thank you · Valuation requested | YGS",
    description:
      "Thank you for your valuation request. Yanis is preparing your comparative analysis and will reply within 24-48h.",
  },
  "/en/outaouais-real-estate-agent": {
    title: "Real Estate Agent Outaouais · YGS",
    description:
      "Real estate agent in Outaouais: Gatineau, Aylmer, Hull, Chelsea, Cantley, Pontiac. Full service to sell, buy or invest.",
  },
  "/en/sell-house-hull": {
    title: "Sell a house in Hull · Gatineau | YGS",
    description:
      "Sell your Hull home with a local broker: free valuation, pricing strategy adapted to central Gatineau market.",
  },
  "/en/sell-house-aylmer": {
    title: "Sell a house in Aylmer · Gatineau | YGS",
    description:
      "Sell your Aylmer home with a local broker: free valuation, strategic marketing and complete guidance.",
  },
  "/en/home-valuation-hull": {
    title: "Free home valuation Hull · Gatineau | YGS",
    description:
      "Free valuation of your Hull property in 24-48h. Comparative analysis based on recent area sales.",
  },
  "/en/home-valuation-aylmer": {
    title: "Free home valuation Aylmer · Gatineau | YGS",
    description:
      "Free valuation of your Aylmer property in 24-48h. Comparative analysis based on recent area sales.",
  },
  "/en/how-much-does-a-realtor-cost-in-quebec": {
    title: "How much does a realtor cost in Quebec? | YGS",
    description:
      "How much does a realtor cost in Quebec? Commission, taxes, what's included. Clear and transparent explanation.",
  },
  "/en/realtor-commission-quebec": {
    title: "Realtor commission in Quebec · Guide | YGS",
    description:
      "Realtor commission in Quebec: percentages, negotiation, what's included. Understand the fee before selling.",
  },
  "/en/how-to-choose-a-realtor": {
    title: "How to choose a realtor · Guide | YGS",
    description:
      "How to choose a good realtor in Quebec? Criteria, questions to ask, OACIQ, local experience. Practical guide.",
  },
  "/en/oaciq-find-a-broker": {
    title: "Verify a realtor on OACIQ · Guide | YGS",
    description:
      "How to check a realtor is registered with OACIQ? Steps, public registry, points to validate.",
  },
  "/en/realtor-vs-selling-by-owner-quebec": {
    title: "Realtor vs selling by owner Quebec · Comparison | YGS",
    description:
      "Sell with a realtor or by owner (DuProprio) in Quebec? Pros, cons, sale price, time. Honest comparison.",
  },
  "/en/privacy-policy": {
    title: "Privacy policy | YGS",
    description:
      "YGS privacy policy: collection, use and protection of your personal data. Quebec Law 25 compliant.",
  },
  "/en/terms": {
    title: "Terms of use | YGS",
    description: "Terms of use for yanisgauthier.com.",
  },
};
