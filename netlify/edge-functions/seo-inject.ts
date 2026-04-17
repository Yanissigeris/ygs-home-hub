import type { Context } from "https://edge.netlify.com"

type Meta = { title: string; description: string }

const META: Record<string, Meta> = {
  // ============ FR ROUTES ============
  '/': {
    title: 'Courtier immobilier Gatineau | Yanis Gauthier-Sigeris',
    description: 'Courtier immobilier à Gatineau-Outaouais depuis 9 ans. Vente, achat, plex, militaires. Approche éditoriale et données réelles. Consultation gratuite.',
  },
  '/proprietes': {
    title: 'Propriétés à vendre à Gatineau | Courtier YGS',
    description: 'Inscriptions actives à Gatineau, Aylmer, Hull et Outaouais. Maisons, condos et plex sélectionnés par Yanis Gauthier-Sigeris.',
  },
  '/vendre-ma-maison-gatineau': {
    title: 'Vendre sa maison à Gatineau | Courtier YGS',
    description: 'Vendez votre maison à Gatineau au meilleur prix avec un courtier local. Stratégie de mise en marché, photos pro et négociation rigoureuse.',
  },
  '/evaluation-gratuite-gatineau': {
    title: 'Évaluation gratuite maison Gatineau | YGS',
    description: 'Obtenez la valeur marchande réelle de votre propriété à Gatineau gratuitement. Analyse comparative basée sur des ventes récentes vérifiées.',
  },
  '/plan-vendeur-gatineau': {
    title: 'Plan vendeur Gatineau étape par étape | YGS',
    description: 'Le plan complet pour vendre votre maison à Gatineau : préparation, mise en marché, visites, négociation, notaire. Accompagnement de A à Z.',
  },
  '/guide-vendeur-gatineau': {
    title: 'Guide du vendeur immobilier Gatineau | YGS',
    description: 'Guide gratuit pour vendre votre propriété à Gatineau : prix, délais, frais, fiscalité, erreurs à éviter. Préparé par un courtier local.',
  },
  '/quand-vendre-a-gatineau': {
    title: 'Quand vendre sa maison à Gatineau ? | YGS',
    description: 'Le meilleur moment pour vendre à Gatineau selon la saison, le marché et votre situation. Analyse des tendances Outaouais par YGS.',
  },
  '/vendre-un-plex-a-gatineau': {
    title: 'Vendre un plex à Gatineau | Courtier spécialisé YGS',
    description: 'Vendre votre duplex, triplex ou quadruplex à Gatineau au meilleur prix. Évaluation par revenus, baux et acheteurs investisseurs qualifiés.',
  },
  '/acheter-a-gatineau': {
    title: 'Acheter une maison à Gatineau | Courtier YGS',
    description: 'Acheter à Gatineau-Outaouais avec un courtier local : maisons, condos, plex. Recherche ciblée, visites, négociation et accompagnement notaire.',
  },
  '/consultation-acheteur': {
    title: 'Consultation acheteur Gatineau gratuite | YGS',
    description: 'Consultation gratuite pour acheteurs à Gatineau : capacité d\'emprunt, quartiers, stratégie d\'offre. Sans engagement avec Yanis Gauthier-Sigeris.',
  },
  '/guide-acheteur-gatineau': {
    title: 'Guide de l\'acheteur Gatineau 2026 | YGS',
    description: 'Guide complet pour acheter à Gatineau : préapprobation, quartiers, inspection, offre d\'achat, taxe de bienvenue, frais notaire.',
  },
  '/premier-achat-gatineau': {
    title: 'Premier achat immobilier Gatineau | YGS',
    description: 'Acheter votre première maison à Gatineau : programmes RAP, CELIAPP, mise de fonds, taxe de bienvenue. Accompagnement complet.',
  },
  '/acheter-a-gatineau-depuis-ottawa': {
    title: 'Acheter à Gatineau depuis Ottawa | YGS',
    description: 'Quitter Ottawa pour Gatineau : économies, fiscalité, écoles, transport. Courtier bilingue spécialisé en relocalisation Ottawa-Gatineau.',
  },
  '/relocalisation-ottawa-gatineau': {
    title: 'Relocalisation Ottawa-Gatineau | Courtier YGS',
    description: 'Service complet de relocalisation Ottawa vers Gatineau : recherche, visites, comparatifs et accompagnement bilingue.',
  },
  '/relocalisation-montreal-gatineau': {
    title: 'Relocalisation Montréal-Gatineau | YGS',
    description: 'Déménager de Montréal à Gatineau : marché, quartiers, transport, qualité de vie. Accompagnement par un courtier local.',
  },
  '/guide-relocalisation-gatineau': {
    title: 'Guide de relocalisation à Gatineau | YGS',
    description: 'Guide gratuit pour relocaliser à Gatineau-Outaouais : choisir son secteur, école, transport, services. Conseils d\'un courtier local.',
  },
  '/quartiers-a-considerer-a-gatineau': {
    title: 'Quartiers à considérer à Gatineau | YGS',
    description: 'Les meilleurs quartiers de Gatineau-Outaouais : Aylmer, Hull, Plateau, Buckingham, Chelsea, Cantley. Comparatif et conseils par YGS.',
  },
  '/militaire-gatineau': {
    title: 'Courtier militaire Gatineau-Ottawa | YGS',
    description: 'Courtier immobilier pour militaires à Gatineau-Ottawa : mutation, IRP, BGRS. Service bilingue, accompagnement complet par YGS.',
  },
  '/relocalisation-militaire-gatineau': {
    title: 'Relocalisation militaire Gatineau | YGS',
    description: 'Service de relocalisation militaire à Gatineau-Ottawa : BGRS, IRP, délais, démarches. Courtier expérimenté avec familles militaires.',
  },
  '/acheter-comme-militaire-gatineau': {
    title: 'Acheter comme militaire à Gatineau | YGS',
    description: 'Acheter une maison à Gatineau lors d\'une mutation militaire : programme IRP, frais couverts, démarches BGRS. Courtier YGS.',
  },
  '/vendre-lors-dune-mutation-gatineau': {
    title: 'Vendre lors d\'une mutation militaire | YGS',
    description: 'Vendre rapidement lors d\'une mutation militaire à Gatineau-Ottawa : programme IRP, garantie HHT, délais courts. Accompagnement YGS.',
  },
  '/guide-militaire-gatineau': {
    title: 'Guide militaire immobilier Gatineau | YGS',
    description: 'Guide pour militaires en mutation à Gatineau-Ottawa : IRP, BGRS, HHT, frais remboursés, secteurs recommandés.',
  },
  '/investir-plex-gatineau': {
    title: 'Investir dans un plex à Gatineau | Courtier YGS',
    description: 'Acheter un plex à Gatineau-Outaouais avec un courtier spécialisé en investissement. Analyse de rentabilité, financement et secteurs.',
  },
  '/analyse-plex-gatineau': {
    title: 'Analyse de plex à Gatineau | Courtier YGS',
    description: 'Analyse de rentabilité de plex à Gatineau : revenus, dépenses, cap rate, cash flow. Outil et accompagnement par un courtier spécialisé.',
  },
  '/rapport-marche-gatineau': {
    title: 'Rapport du marché immobilier Gatineau | YGS',
    description: 'Rapport mensuel du marché immobilier à Gatineau-Outaouais : prix, ventes, délais, tendances. Analyse par secteur par YGS.',
  },
  '/plateau-aylmer': {
    title: 'Plateau Aylmer immobilier | Courtier YGS',
    description: 'Maisons à vendre au Plateau d\'Aylmer : marché, écoles, services. Courtier local Yanis Gauthier-Sigeris à Gatineau.',
  },
  '/hull': {
    title: 'Courtier immobilier Hull Gatineau | YGS',
    description: 'Acheter ou vendre à Hull, Gatineau. Marché du secteur Hull, prix, quartiers (Vieux-Hull, Wrightville, Val-Tétreau) avec un courtier local.',
  },
  '/buckingham-masson-angers': {
    title: 'Buckingham Masson-Angers immobilier | YGS',
    description: 'Maisons à vendre à Buckingham et Masson-Angers. Marché, écoles, transport. Courtier immobilier local YGS.',
  },
  '/gatineau': {
    title: 'Courtier immobilier secteur Gatineau | YGS',
    description: 'Acheter ou vendre dans le secteur Gatineau-Centre : marché, quartiers, prix moyens. Courtier local Yanis Gauthier-Sigeris.',
  },
  '/aylmer': {
    title: 'Courtier immobilier Aylmer Gatineau | YGS',
    description: 'Acheter ou vendre à Aylmer, Gatineau. Marché, secteurs (Plateau, Vieux-Aylmer, Lakeview), écoles bilingues. Courtier YGS.',
  },
  '/plateau': {
    title: 'Courtier immobilier Plateau Gatineau | YGS',
    description: 'Maisons à vendre sur le Plateau, Gatineau. Marché, services, transport vers Ottawa. Courtier immobilier local YGS.',
  },
  '/chelsea': {
    title: 'Courtier immobilier Chelsea Outaouais | YGS',
    description: 'Acheter ou vendre à Chelsea, Outaouais. Marché de villégiature, propriétés en nature, accès Ottawa. Courtier YGS.',
  },
  '/cantley': {
    title: 'Courtier immobilier Cantley Outaouais | YGS',
    description: 'Maisons à vendre à Cantley, Outaouais. Marché rural-résidentiel, terrains, écoles. Courtier immobilier local YGS.',
  },
  '/val-des-monts': {
    title: 'Courtier immobilier Val-des-Monts | YGS',
    description: 'Acheter ou vendre à Val-des-Monts, Outaouais. Lacs, chalets, propriétés rurales. Courtier local Yanis Gauthier-Sigeris.',
  },
  '/masson-angers': {
    title: 'Courtier immobilier Masson-Angers | YGS',
    description: 'Maisons à vendre à Masson-Angers, Gatineau. Marché, services, accès rivière. Courtier immobilier local YGS.',
  },
  '/pontiac': {
    title: 'Courtier immobilier Pontiac Outaouais | YGS',
    description: 'Acheter ou vendre dans Pontiac : Aylmer-Ouest, Luskville, Quyon. Propriétés rurales et bord de rivière. Courtier YGS.',
  },
  '/cote-dazur-gatineau': {
    title: 'Côte-d\'Azur Gatineau immobilier | YGS',
    description: 'Maisons à vendre à la Côte-d\'Azur, Gatineau. Quartier prisé, vues, services. Courtier immobilier local YGS.',
  },
  '/limbour': {
    title: 'Courtier immobilier Limbour Gatineau | YGS',
    description: 'Acheter ou vendre à Limbour, Gatineau. Marché, écoles, services du quartier. Courtier local Yanis Gauthier-Sigeris.',
  },
  '/ressources': {
    title: 'Ressources immobilières Gatineau | YGS',
    description: 'Calculateurs hypothécaires, taxe de bienvenue, guides PDF gratuits pour acheter ou vendre à Gatineau-Outaouais.',
  },
  '/blogue': {
    title: 'Blogue immobilier Gatineau-Outaouais | YGS',
    description: 'Conseils, analyses du marché et guides immobiliers pour Gatineau-Outaouais. Articles rédigés par Yanis Gauthier-Sigeris, courtier local.',
  },
  '/vivre-a-aylmer': {
    title: 'Vivre à Aylmer, Gatineau | Guide YGS',
    description: 'Guide complet pour vivre à Aylmer : quartiers, écoles bilingues, services, transport, qualité de vie. Par un courtier local.',
  },
  '/vivre-a-hull': {
    title: 'Vivre à Hull, Gatineau | Guide YGS',
    description: 'Guide pour vivre à Hull : quartiers (Vieux-Hull, Wrightville), services, transport, vie urbaine. Par YGS, courtier local.',
  },
  '/vivre-dans-le-plateau': {
    title: 'Vivre sur le Plateau, Gatineau | Guide YGS',
    description: 'Guide complet pour vivre sur le Plateau de Gatineau : écoles, parcs, services, transport. Conseils d\'un courtier local.',
  },
  '/faq': {
    title: 'FAQ immobilier Gatineau | Courtier YGS',
    description: 'Réponses aux questions fréquentes sur l\'achat, la vente et le marché immobilier à Gatineau-Outaouais. Par Yanis Gauthier-Sigeris.',
  },
  '/temoignages': {
    title: 'Témoignages clients | Courtier YGS Gatineau',
    description: 'Avis et témoignages de clients ayant acheté ou vendu avec Yanis Gauthier-Sigeris, courtier immobilier à Gatineau-Outaouais.',
  },
  '/merci': {
    title: 'Merci | Yanis Gauthier-Sigeris Courtier',
    description: 'Merci pour votre demande. Yanis Gauthier-Sigeris, courtier immobilier Gatineau-Outaouais, vous contactera sous peu.',
  },
  '/merci-evaluation': {
    title: 'Évaluation reçue | Courtier YGS Gatineau',
    description: 'Merci pour votre demande d\'évaluation gratuite. Vous recevrez votre analyse comparative pour votre propriété à Gatineau sous 48h.',
  },
  '/contact-yanis': {
    title: 'Contact Yanis Gauthier-Sigeris | Courtier Gatineau',
    description: 'Contactez Yanis Gauthier-Sigeris, courtier immobilier à Gatineau-Outaouais. Téléphone, courriel, consultation gratuite.',
  },
  '/courtier-immobilier-outaouais': {
    title: 'Courtier immobilier Outaouais | YGS',
    description: 'Courtier immobilier dans tout l\'Outaouais : Gatineau, Aylmer, Hull, Chelsea, Cantley, Buckingham. Service bilingue par YGS.',
  },
  '/vendre-maison-hull': {
    title: 'Vendre une maison à Hull, Gatineau | YGS',
    description: 'Vendre votre maison dans le secteur Hull au meilleur prix. Connaissance fine du marché, stratégie de mise en marché. Courtier YGS.',
  },
  '/vendre-maison-aylmer': {
    title: 'Vendre une maison à Aylmer, Gatineau | YGS',
    description: 'Vendre votre maison à Aylmer (Plateau, Vieux-Aylmer, Lakeview) avec un courtier local. Évaluation et stratégie sur mesure.',
  },
  '/evaluation-maison-hull': {
    title: 'Évaluation maison Hull gratuite | YGS',
    description: 'Évaluation gratuite de votre propriété dans le secteur Hull, Gatineau. Analyse comparative basée sur des ventes récentes.',
  },
  '/evaluation-maison-aylmer': {
    title: 'Évaluation maison Aylmer gratuite | YGS',
    description: 'Évaluation gratuite de votre propriété à Aylmer. Analyse comparative par secteur (Plateau, Vieux-Aylmer, Lakeview).',
  },
  '/combien-coute-un-courtier-immobilier-au-quebec': {
    title: 'Combien coûte un courtier immobilier au Québec ?',
    description: 'Frais d\'un courtier immobilier au Québec : pourcentages, taxes, négociation. Tout ce qu\'il faut savoir avant de vendre.',
  },
  '/comment-choisir-un-courtier-immobilier': {
    title: 'Comment choisir un courtier immobilier | YGS',
    description: 'Guide pour choisir le bon courtier immobilier au Québec : OACIQ, expérience, marketing, communication. Critères clés.',
  },
  '/verifier-un-courtier-immobilier-oaciq': {
    title: 'Vérifier un courtier OACIQ | YGS',
    description: 'Comment vérifier la licence OACIQ d\'un courtier immobilier au Québec. Étapes simples pour confirmer son statut.',
  },
  '/frais-de-courtage-immobilier-quebec': {
    title: 'Frais de courtage immobilier au Québec | YGS',
    description: 'Détail des frais de courtage immobilier au Québec : commission vendeur, partage acheteur, taxes. Explications transparentes.',
  },
  '/courtier-immobilier-ou-vendre-soi-meme': {
    title: 'Courtier ou vendre soi-même ? | YGS',
    description: 'Vendre avec un courtier ou par soi-même (DPS) : comparatif honnête des coûts, risques et résultats. Par YGS.',
  },
  '/politique-de-confidentialite': {
    title: 'Politique de confidentialité | Courtier YGS',
    description: 'Politique de confidentialité du site de Yanis Gauthier-Sigeris, courtier immobilier à Gatineau.',
  },
  '/conditions-utilisation': {
    title: 'Conditions d\'utilisation | Courtier YGS',
    description: 'Conditions d\'utilisation du site de Yanis Gauthier-Sigeris, courtier immobilier à Gatineau-Outaouais.',
  },

  // ============ EN ROUTES ============
  '/en': {
    title: 'Real Estate Agent Gatineau | Yanis Gauthier-Sigeris',
    description: 'Real estate broker in Gatineau-Outaouais for 9 years. Buying, selling, plex, military relocations. Bilingual service. Free consultation.',
  },
  '/en/properties': {
    title: 'Properties for Sale in Gatineau | YGS Realtor',
    description: 'Active listings in Gatineau, Aylmer, Hull and the Outaouais. Houses, condos and plexes curated by Yanis Gauthier-Sigeris.',
  },
  '/en/sell': {
    title: 'Sell Your Home in Gatineau | YGS Realtor',
    description: 'Sell your home in Gatineau-Outaouais at the best price with a local broker. Marketing strategy, pro photos, rigorous negotiation.',
  },
  '/en/home-valuation': {
    title: 'Free Home Valuation Gatineau | YGS',
    description: 'Get the real market value of your Gatineau property for free. Comparative analysis based on verified recent sales.',
  },
  '/en/seller-guide': {
    title: 'Seller Guide Gatineau-Outaouais | YGS',
    description: 'Free guide to selling your property in Gatineau: pricing, timing, fees, taxes, mistakes to avoid. By a local broker.',
  },
  '/en/buy': {
    title: 'Buy a Home in Gatineau | YGS Realtor',
    description: 'Buy in Gatineau-Outaouais with a local bilingual broker: houses, condos, plexes. Targeted search, negotiation, notary support.',
  },
  '/en/buyer-consultation': {
    title: 'Free Buyer Consultation Gatineau | YGS',
    description: 'Free buyer consultation in Gatineau: borrowing capacity, neighborhoods, offer strategy. No commitment with Yanis Gauthier-Sigeris.',
  },
  '/en/buyer-guide': {
    title: 'Buyer Guide Gatineau 2026 | YGS Realtor',
    description: 'Complete guide to buying in Gatineau: pre-approval, neighborhoods, inspection, offer, welcome tax, notary fees.',
  },
  '/en/first-time-buyer': {
    title: 'First-Time Home Buyer Gatineau | YGS',
    description: 'Buying your first home in Gatineau: HBP, FHSA, down payment, welcome tax. Full bilingual support by YGS.',
  },
  '/en/buy-from-ottawa': {
    title: 'Buy in Gatineau from Ottawa | YGS Realtor',
    description: 'Moving from Ottawa to Gatineau: savings, taxes, schools, commute. Bilingual broker specialized in Ottawa-Gatineau relocation.',
  },
  '/en/relocation': {
    title: 'Relocation to Gatineau-Outaouais | YGS',
    description: 'Full relocation service to Gatineau-Outaouais. Search, viewings, comparisons and bilingual support by Yanis Gauthier-Sigeris.',
  },
  '/en/relocation-guide': {
    title: 'Relocation Guide Gatineau | YGS Realtor',
    description: 'Free guide to relocating to Gatineau-Outaouais: choosing your area, school, transport, services. By a local broker.',
  },
  '/en/military': {
    title: 'Military Realtor Gatineau-Ottawa | YGS',
    description: 'Real estate broker for military families in Gatineau-Ottawa: postings, IRP, BGRS. Bilingual support by Yanis Gauthier-Sigeris.',
  },
  '/en/military-buyer': {
    title: 'Military Buyer Gatineau | YGS Realtor',
    description: 'Buying a home in Gatineau during a military posting: IRP program, covered fees, BGRS process. Bilingual broker.',
  },
  '/en/military-seller': {
    title: 'Military Seller Gatineau-Ottawa | YGS',
    description: 'Sell quickly during a military posting in Gatineau-Ottawa: IRP program, HHT guarantee, short timelines.',
  },
  '/en/military-guide': {
    title: 'Military Guide Real Estate Gatineau | YGS',
    description: 'Guide for military families posted to Gatineau-Ottawa: IRP, BGRS, HHT, reimbursed fees, recommended areas.',
  },
  '/en/plex': {
    title: 'Invest in a Plex in Gatineau | YGS',
    description: 'Buy a plex in Gatineau-Outaouais with a broker specialized in investment. Profitability analysis, financing, areas.',
  },
  '/en/plex-analysis': {
    title: 'Plex Analysis Gatineau | YGS Realtor',
    description: 'Plex profitability analysis in Gatineau: income, expenses, cap rate, cash flow. Tool and support by a specialized broker.',
  },
  '/en/neighborhoods': {
    title: 'Neighborhoods to Consider in Gatineau | YGS',
    description: 'Best neighborhoods in Gatineau-Outaouais: Aylmer, Hull, Plateau, Buckingham, Chelsea, Cantley. Comparison by YGS.',
  },
  '/en/plateau-aylmer': {
    title: 'Plateau Aylmer Real Estate | YGS Realtor',
    description: 'Homes for sale in Plateau Aylmer: market, schools, services. Local broker Yanis Gauthier-Sigeris in Gatineau.',
  },
  '/en/hull': {
    title: 'Real Estate Agent Hull Gatineau | YGS',
    description: 'Buy or sell in Hull, Gatineau. Hull market, prices, neighborhoods (Old Hull, Wrightville, Val-Tétreau) with a local broker.',
  },
  '/en/buckingham': {
    title: 'Buckingham Masson-Angers Real Estate | YGS',
    description: 'Homes for sale in Buckingham and Masson-Angers. Market, schools, transport. Local real estate broker YGS.',
  },
  '/en/when-to-sell': {
    title: 'When to Sell Your Home in Gatineau | YGS',
    description: 'The best time to sell in Gatineau by season, market and your situation. Outaouais trend analysis by YGS.',
  },
  '/en/seller-plan': {
    title: 'Seller Plan Gatineau Step-by-Step | YGS',
    description: 'Complete plan to sell your home in Gatineau: prep, marketing, viewings, negotiation, notary. Full support from A to Z.',
  },
  '/en/sell-plex': {
    title: 'Sell a Plex in Gatineau | YGS Realtor',
    description: 'Sell your duplex, triplex or fourplex in Gatineau at the best price. Income-based valuation, qualified investor buyers.',
  },
  '/en/montreal-relocation': {
    title: 'Montreal to Gatineau Relocation | YGS',
    description: 'Moving from Montreal to Gatineau: market, neighborhoods, transport, quality of life. Support by a local broker.',
  },
  '/en/market-report': {
    title: 'Gatineau Real Estate Market Report | YGS',
    description: 'Monthly real estate market report for Gatineau-Outaouais: prices, sales, days on market, trends. Analysis by area.',
  },
  '/en/resources': {
    title: 'Real Estate Resources Gatineau | YGS',
    description: 'Mortgage and welcome tax calculators, free PDF guides for buying or selling in Gatineau-Outaouais.',
  },
  '/en/blog': {
    title: 'Gatineau-Outaouais Real Estate Blog | YGS',
    description: 'Tips, market analysis and real estate guides for Gatineau-Outaouais. Articles by Yanis Gauthier-Sigeris, local broker.',
  },
  '/en/faq': {
    title: 'Real Estate FAQ Gatineau | YGS Realtor',
    description: 'Answers to frequent questions about buying, selling and the real estate market in Gatineau-Outaouais.',
  },
  '/en/testimonials': {
    title: 'Client Testimonials | YGS Gatineau',
    description: 'Reviews and testimonials from clients who bought or sold with Yanis Gauthier-Sigeris in Gatineau-Outaouais.',
  },
  '/en/contact': {
    title: 'Contact Yanis Gauthier-Sigeris | Gatineau',
    description: 'Contact Yanis Gauthier-Sigeris, real estate broker in Gatineau-Outaouais. Phone, email, free consultation.',
  },
  '/en/thank-you': {
    title: 'Thank You | YGS Gatineau Realtor',
    description: 'Thank you for your request. Yanis Gauthier-Sigeris, Gatineau-Outaouais real estate broker, will contact you shortly.',
  },
  '/en/thank-you-valuation': {
    title: 'Valuation Received | YGS Gatineau',
    description: 'Thank you for your free valuation request. You will receive your comparative analysis for your Gatineau property within 48h.',
  },
  '/en/living-aylmer': {
    title: 'Living in Aylmer, Gatineau | YGS Guide',
    description: 'Complete guide to living in Aylmer: neighborhoods, bilingual schools, services, transport, quality of life.',
  },
  '/en/living-hull': {
    title: 'Living in Hull, Gatineau | YGS Guide',
    description: 'Guide to living in Hull: neighborhoods (Old Hull, Wrightville), services, transport, urban life. By YGS.',
  },
  '/en/living-plateau': {
    title: 'Living on the Plateau, Gatineau | YGS Guide',
    description: 'Complete guide to living on the Plateau in Gatineau: schools, parks, services, transport. By a local broker.',
  },
  '/en/gatineau': {
    title: 'Real Estate Agent Gatineau Sector | YGS',
    description: 'Buy or sell in the Gatineau-Centre sector: market, neighborhoods, average prices. Local broker Yanis Gauthier-Sigeris.',
  },
  '/en/aylmer': {
    title: 'Real Estate Agent Aylmer Gatineau | YGS',
    description: 'Buy or sell in Aylmer, Gatineau. Market, sectors (Plateau, Old Aylmer, Lakeview), bilingual schools. Broker YGS.',
  },
  '/en/plateau': {
    title: 'Real Estate Agent Plateau Gatineau | YGS',
    description: 'Homes for sale on the Plateau, Gatineau. Market, services, transport to Ottawa. Local real estate broker YGS.',
  },
  '/en/chelsea': {
    title: 'Real Estate Agent Chelsea Outaouais | YGS',
    description: 'Buy or sell in Chelsea, Outaouais. Country market, nature properties, Ottawa access. Broker YGS.',
  },
  '/en/cantley': {
    title: 'Real Estate Agent Cantley Outaouais | YGS',
    description: 'Homes for sale in Cantley, Outaouais. Rural-residential market, lots, schools. Local real estate broker YGS.',
  },
  '/en/val-des-monts': {
    title: 'Real Estate Agent Val-des-Monts | YGS',
    description: 'Buy or sell in Val-des-Monts, Outaouais. Lakes, cottages, rural properties. Local broker Yanis Gauthier-Sigeris.',
  },
  '/en/masson-angers': {
    title: 'Real Estate Agent Masson-Angers | YGS',
    description: 'Homes for sale in Masson-Angers, Gatineau. Market, services, river access. Local real estate broker YGS.',
  },
  '/en/pontiac': {
    title: 'Real Estate Agent Pontiac Outaouais | YGS',
    description: 'Buy or sell in Pontiac: West Aylmer, Luskville, Quyon. Rural and waterfront properties. Broker YGS.',
  },
  '/en/cote-dazur': {
    title: 'Côte-d\'Azur Gatineau Real Estate | YGS',
    description: 'Homes for sale in Côte-d\'Azur, Gatineau. Sought-after neighborhood, views, services. Local broker YGS.',
  },
  '/en/limbour': {
    title: 'Real Estate Agent Limbour Gatineau | YGS',
    description: 'Buy or sell in Limbour, Gatineau. Market, schools, neighborhood services. Local broker Yanis Gauthier-Sigeris.',
  },
  '/en/military-relocation': {
    title: 'Military Relocation Gatineau-Ottawa | YGS',
    description: 'Military relocation service to Gatineau-Ottawa: BGRS, IRP, timelines, process. Broker experienced with military families.',
  },
  '/en/outaouais-real-estate-agent': {
    title: 'Outaouais Real Estate Agent | YGS',
    description: 'Real estate broker across the Outaouais: Gatineau, Aylmer, Hull, Chelsea, Cantley, Buckingham. Bilingual service by YGS.',
  },
  '/en/sell-house-hull': {
    title: 'Sell a House in Hull, Gatineau | YGS',
    description: 'Sell your house in the Hull sector at the best price. Deep market knowledge, marketing strategy. Broker YGS.',
  },
  '/en/sell-house-aylmer': {
    title: 'Sell a House in Aylmer, Gatineau | YGS',
    description: 'Sell your house in Aylmer (Plateau, Old Aylmer, Lakeview) with a local broker. Valuation and tailored strategy.',
  },
  '/en/home-valuation-hull': {
    title: 'Free Home Valuation Hull | YGS Realtor',
    description: 'Free valuation of your property in the Hull sector, Gatineau. Comparative analysis based on recent sales.',
  },
  '/en/home-valuation-aylmer': {
    title: 'Free Home Valuation Aylmer | YGS Realtor',
    description: 'Free valuation of your property in Aylmer. Comparative analysis by sector (Plateau, Old Aylmer, Lakeview).',
  },
  '/en/how-much-does-a-realtor-cost-in-quebec': {
    title: 'How Much Does a Realtor Cost in Quebec? | YGS',
    description: 'Realtor fees in Quebec: percentages, taxes, negotiation. Everything you need to know before selling.',
  },
  '/en/realtor-commission-quebec': {
    title: 'Realtor Commission in Quebec | YGS',
    description: 'Detail of realtor commissions in Quebec: seller commission, buyer split, taxes. Transparent explanations.',
  },
  '/en/how-to-choose-a-realtor': {
    title: 'How to Choose a Realtor in Quebec | YGS',
    description: 'Guide to choosing the right realtor in Quebec: OACIQ, experience, marketing, communication. Key criteria.',
  },
  '/en/oaciq-find-a-broker': {
    title: 'Verify a Realtor on OACIQ | YGS',
    description: 'How to verify a realtor\'s OACIQ licence in Quebec. Simple steps to confirm their status.',
  },
  '/en/realtor-vs-selling-by-owner-quebec': {
    title: 'Realtor vs Selling by Owner in Quebec | YGS',
    description: 'Selling with a realtor or by yourself (FSBO) in Quebec: honest comparison of costs, risks and results.',
  },
  '/en/privacy-policy': {
    title: 'Privacy Policy | YGS Gatineau Realtor',
    description: 'Privacy policy for Yanis Gauthier-Sigeris\' website, real estate broker in Gatineau-Outaouais.',
  },
  '/en/terms': {
    title: 'Terms of Use | YGS Gatineau Realtor',
    description: 'Terms of use for Yanis Gauthier-Sigeris\' website, real estate broker in Gatineau-Outaouais.',
  },
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export default async (request: Request, context: Context) => {
  const url = new URL(request.url)
  const path = url.pathname.replace(/\/$/, '') || '/'
  if (path.includes('.')) return context.next()

  const page = META[path]
  if (!page) return context.next()

  try {
    // Fetch index.html directly (bypasses SPA redirect rules in _redirects)
    const indexResponse = await fetch(new URL('/index.html', url.origin).toString())
    if (!indexResponse.ok) return context.next()

    let html = await indexResponse.text()

    const safeTitle = escapeHtml(page.title)
    const safeDesc = escapeHtml(page.description)

    html = html.replace(/<title>[^<]*<\/title>/, '<title>' + safeTitle + '</title>')
    html = html.replace(/name="description" content="[^"]*"/, 'name="description" content="' + safeDesc + '"')

    return new Response(html, {
      status: 200,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'public, max-age=300, s-maxage=300',
      },
    })
  } catch (err) {
    console.error('[seo-inject] failed for', path, err)
    return context.next()
  }
}
