import blogMarket from "@/assets/blog/blog-market-2025.jpg";
import blogWhenToSell from "@/assets/blog/blog-when-to-sell.jpg";
import blogFirstTimeBuyer from "@/assets/blog/blog-first-time-buyer.jpg";
import blogOttawaGatineau from "@/assets/blog/blog-ottawa-gatineau.jpg";
import blogPlexInvestment from "@/assets/blog/blog-plex-investment.jpg";
import blogNeighborhoods from "@/assets/blog/blog-neighborhoods.jpg";
import blogMilitary from "@/assets/blog/blog-military.jpg";

export interface BlogPost {
  slug: string;
  slugEn: string;
  title: string;
  titleEn: string;
  seoTitle: string;
  seoTitleEn: string;
  metaDescription: string;
  metaDescriptionEn: string;
  excerpt: string;
  excerptEn: string;
  category: string;
  categoryEn: string;
  featuredImage?: string;
  publishDate: string;
  published: boolean;
  featured?: boolean;
  body: string;
  bodyEn: string;
}

/**
 * Blog posts collection — add new posts here.
 * They will automatically appear on /blogue and /en/blog.
 * Set `published: true` to make a post visible.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "marche-immobilier-gatineau-2025",
    featuredImage: blogMarket,
    slugEn: "gatineau-real-estate-market-2025",
    title: "Le marché immobilier à Gatineau en 2025 : ce que les chiffres révèlent",
    titleEn: "Gatineau Real Estate Market in 2025: What the Numbers Reveal",
    seoTitle: "Marché immobilier Gatineau 2025 · Analyse et tendances | YGS",
    seoTitleEn: "Gatineau Real Estate Market 2025 · Analysis & Trends | YGS",
    metaDescription: "Analyse des tendances de prix, des volumes de ventes et des secteurs les plus actifs à Gatineau et en Outaouais en 2025.",
    metaDescriptionEn: "Price trends, sales volume, and the most active neighborhoods in Gatineau and the Outaouais in 2025.",
    excerpt: "Analyse des tendances de prix, des volumes de ventes et des secteurs les plus actifs en Outaouais cette année.",
    excerptEn: "Price trends, sales volume, and the most active neighborhoods in the Outaouais region this year.",
    category: "Marché",
    categoryEn: "Market",
    publishDate: "2025-01-15",
    published: true,
    featured: true,
    body: `## Le marché immobilier à Gatineau en 2025

Le marché immobilier de Gatineau continue d'évoluer rapidement. Après plusieurs années de croissance soutenue, 2025 présente des tendances intéressantes pour les acheteurs comme pour les vendeurs.

### Tendances des prix

Les prix médians dans les secteurs les plus recherchés de Gatineau — Aylmer, le Plateau et Hull — continuent de refléter une demande soutenue. Le marché de l'Outaouais bénéficie toujours de son avantage concurrentiel par rapport à Ottawa, attirant des acheteurs ontariens en quête de valeur.

### Volume des ventes

Le volume des transactions reste solide, avec une activité particulièrement forte dans le segment des propriétés unifamiliales et des plex d'investissement. Les secteurs de Buckingham et Masson-Angers gagnent aussi en popularité grâce à des prix d'entrée plus accessibles.

### Secteurs à surveiller

- **Aylmer** : Demande constante pour les familles, proximité des parcs et des écoles réputées.
- **Hull** : Revitalisation du centre-ville, proximité immédiate d'Ottawa.
- **Plateau** : Quartier en pleine expansion, populaire auprès des jeunes professionnels.
- **Buckingham / Masson-Angers** : Prix d'entrée attractifs, potentiel de croissance.

### Ce que cela signifie pour vous

Que vous pensiez vendre ou acheter, comprendre ces tendances vous donne un avantage stratégique. Une évaluation gratuite de votre propriété vous permettra de voir exactement où vous vous situez dans ce marché.`,
    bodyEn: `## Gatineau Real Estate Market in 2025

Gatineau's real estate market continues to evolve rapidly. After several years of sustained growth, 2025 presents interesting trends for both buyers and sellers.

### Price Trends

Median prices in Gatineau's most sought-after areas — Aylmer, Plateau, and Hull — continue to reflect strong demand. The Outaouais market still benefits from its competitive advantage over Ottawa, attracting Ontario buyers seeking value.

### Sales Volume

Transaction volume remains solid, with particularly strong activity in the single-family home and investment plex segments. Buckingham and Masson-Angers are also gaining popularity thanks to more accessible entry prices.

### Areas to Watch

- **Aylmer**: Consistent demand from families, close to parks and reputable schools.
- **Hull**: Downtown revitalization, immediate proximity to Ottawa.
- **Plateau**: Rapidly expanding neighborhood, popular with young professionals.
- **Buckingham / Masson-Angers**: Attractive entry prices with growth potential.

### What This Means for You

Whether you're thinking of selling or buying, understanding these trends gives you a strategic advantage. A free home valuation will show you exactly where you stand in this market.`,
  },
  {
    slug: "quand-vendre-sa-maison-gatineau",
    featuredImage: blogWhenToSell,
    slugEn: "best-time-to-sell-gatineau",
    title: "Quand vendre sa maison à Gatineau pour maximiser son prix?",
    titleEn: "When Is the Best Time to Sell in Gatineau?",
    seoTitle: "Quand vendre sa maison à Gatineau? · Meilleur moment | YGS",
    seoTitleEn: "Best Time to Sell Your Home in Gatineau | YGS",
    metaDescription: "Découvrez le meilleur moment de l'année pour vendre votre propriété à Gatineau et maximiser votre prix de vente.",
    metaDescriptionEn: "Discover the best time of year to sell your property in Gatineau and maximize your sale price.",
    excerpt: "Le meilleur moment de l'année pour inscrire votre propriété, selon les données locales.",
    excerptEn: "The optimal listing window based on local market data and seasonal trends.",
    category: "Vendeurs",
    categoryEn: "Sellers",
    publishDate: "2025-02-10",
    published: true,
    body: `## Quand vendre sa maison à Gatineau?

Le timing peut faire une différence significative sur le prix de vente de votre propriété à Gatineau. Voici ce que les données locales révèlent.

### Le printemps : la saison classique

Historiquement, le printemps (mars à juin) est la période la plus active du marché immobilier en Outaouais. Les acheteurs sont motivés, l'inventaire augmente et les propriétés bien présentées se vendent rapidement.

### L'automne : une fenêtre sous-estimée

La période de septembre à novembre offre souvent moins de compétition entre vendeurs, ce qui peut jouer en votre faveur. Les acheteurs actifs à cette période sont généralement plus sérieux et motivés.

### Facteurs locaux à considérer

- **Le cycle de mutation militaire** : Les familles militaires relocalisées à la base de Gatineau cherchent activement entre avril et août.
- **La rentrée scolaire** : Les familles avec enfants préfèrent s'installer avant septembre.
- **Les taux d'intérêt** : L'évolution des taux influence directement le pouvoir d'achat des acquéreurs.

### Mon conseil

Il n'y a pas de « mauvais » moment pour vendre si votre propriété est bien préparée et bien positionnée. Une stratégie de mise en marché adaptée au contexte saisonnier fera la différence.`,
    bodyEn: `## When Is the Best Time to Sell in Gatineau?

Timing can make a significant difference in your property's sale price in Gatineau. Here's what local data reveals.

### Spring: The Classic Season

Historically, spring (March to June) is the most active period in the Outaouais real estate market. Buyers are motivated, inventory increases, and well-presented properties sell quickly.

### Fall: An Underrated Window

The September to November period often offers less competition among sellers, which can work in your favor. Buyers active during this time are generally more serious and motivated.

### Local Factors to Consider

- **Military posting cycle**: Military families relocating to the Gatineau base actively search between April and August.
- **Back to school**: Families with children prefer to settle before September.
- **Interest rates**: Rate changes directly impact buyers' purchasing power.

### My Advice

There's no "bad" time to sell if your property is well-prepared and well-positioned. A marketing strategy adapted to the seasonal context will make the difference.`,
  },
  {
    slug: "premier-achat-gatineau-guide",
    featuredImage: blogFirstTimeBuyer,
    slugEn: "first-time-buyer-gatineau-guide",
    title: "Premier achat à Gatineau : les étapes essentielles",
    titleEn: "First-Time Buyer in Gatineau: Essential Steps",
    seoTitle: "Premier achat immobilier Gatineau · Guide complet | YGS",
    seoTitleEn: "First-Time Home Buyer Gatineau · Complete Guide | YGS",
    metaDescription: "Mise de fonds, préqualification, inspection — tout ce qu'un premier acheteur doit savoir pour acheter à Gatineau.",
    metaDescriptionEn: "Down payment, pre-approval, inspection — everything a first-time buyer needs to know about buying in Gatineau.",
    excerpt: "Mise de fonds, préqualification, inspection — tout ce qu'un premier acheteur doit savoir en Outaouais.",
    excerptEn: "Down payment, pre-approval, inspection — everything a first-time buyer needs to know.",
    category: "Acheteurs",
    categoryEn: "Buyers",
    publishDate: "2025-03-05",
    published: true,
    body: `## Premier achat à Gatineau : par où commencer?

Acheter sa première propriété est une étape importante. À Gatineau, le marché offre des opportunités intéressantes pour les premiers acheteurs, mais une bonne préparation est essentielle.

### 1. Établir votre budget

Avant de visiter des propriétés, déterminez votre capacité d'emprunt. Une préqualification hypothécaire vous donnera une idée claire de votre budget. À Gatineau, les prix d'entrée sont souvent plus accessibles qu'à Ottawa, ce qui représente un avantage pour les premiers acheteurs.

### 2. La mise de fonds

Au Canada, la mise de fonds minimale est de 5% pour une propriété de moins de 500 000 $. Plusieurs programmes d'aide existent, incluant le RAP (Régime d'accession à la propriété) et le CELIAPP.

### 3. Choisir le bon quartier

Gatineau offre une diversité de quartiers, chacun avec son caractère. Aylmer pour les familles, Hull pour la proximité d'Ottawa, le Plateau pour les jeunes professionnels, Buckingham pour un cadre plus rural.

### 4. L'inspection préachat

Ne sautez jamais l'inspection. C'est votre filet de sécurité. Un inspecteur qualifié identifiera les problèmes potentiels avant que vous ne vous engagiez.

### 5. L'accompagnement d'un courtier

Un courtier immobilier qui connaît le marché local peut vous faire économiser temps et argent. Il négociera en votre nom et vous guidera à travers chaque étape du processus.`,
    bodyEn: `## First-Time Buyer in Gatineau: Where to Start?

Buying your first property is a major milestone. In Gatineau, the market offers interesting opportunities for first-time buyers, but good preparation is essential.

### 1. Establish Your Budget

Before visiting properties, determine your borrowing capacity. A mortgage pre-approval will give you a clear picture of your budget. In Gatineau, entry prices are often more accessible than in Ottawa, which is an advantage for first-time buyers.

### 2. Down Payment

In Canada, the minimum down payment is 5% for properties under $500,000. Several assistance programs exist, including the HBP (Home Buyers' Plan) and the FHSA.

### 3. Choosing the Right Neighborhood

Gatineau offers diverse neighborhoods, each with its own character. Aylmer for families, Hull for Ottawa proximity, Plateau for young professionals, Buckingham for a more rural setting.

### 4. Pre-Purchase Inspection

Never skip the inspection. It's your safety net. A qualified inspector will identify potential issues before you commit.

### 5. Working with a Broker

A real estate broker who knows the local market can save you time and money. They'll negotiate on your behalf and guide you through every step of the process.`,
  },
  {
    slug: "demenager-ottawa-gatineau-guide",
    featuredImage: blogOttawaGatineau,
    slugEn: "moving-ottawa-to-gatineau-guide",
    title: "Déménager d'Ottawa à Gatineau : guide complet",
    titleEn: "Moving from Ottawa to Gatineau: Complete Guide",
    seoTitle: "Déménager d'Ottawa à Gatineau · Guide relocalisation | YGS",
    seoTitleEn: "Moving Ottawa to Gatineau · Relocation Guide | YGS",
    metaDescription: "Tout ce qu'il faut savoir pour déménager d'Ottawa à Gatineau : impôts, écoles, quartiers, accès et style de vie.",
    metaDescriptionEn: "Everything you need to know about moving from Ottawa to Gatineau: taxes, schools, neighborhoods, access, and lifestyle.",
    excerpt: "Impôts, écoles, quartiers, accès — tout pour planifier une relocalisation réussie.",
    excerptEn: "Taxes, schools, neighborhoods, commute — everything you need to plan a smooth relocation.",
    category: "Relocalisation",
    categoryEn: "Relocation",
    publishDate: "2025-03-20",
    published: true,
    body: `## Déménager d'Ottawa à Gatineau : tout ce que vous devez savoir

De plus en plus de familles et de professionnels font le saut de l'Ontario au Québec pour profiter des avantages de Gatineau. Voici un guide pour vous y préparer.

### Avantages financiers

- **Prix immobiliers** : Les propriétés à Gatineau sont généralement 15-25% moins chères qu'à Ottawa pour des caractéristiques comparables.
- **Services de garde** : Les garderies subventionnées du Québec représentent une économie importante pour les familles.
- **Immatriculation** : Les plaques d'immatriculation sont moins chères au Québec.

### Points à considérer

- **Impôts** : Le Québec a un taux d'imposition provincial plus élevé, mais les déductions et crédits d'impôt compensent souvent la différence.
- **Langue** : Le français est la langue officielle au Québec, mais Gatineau est une ville bilingue dans la pratique.
- **Système scolaire** : Les écoles publiques sont en français, mais il existe des options anglophones.

### Les meilleurs quartiers pour les relocalisés

- **Aylmer** : Ambiance familiale, accès facile à Ottawa via le pont Champlain.
- **Hull** : Le plus proche d'Ottawa, idéal pour les navetteurs.
- **Plateau** : Développement récent, écoles neuves, sentiment de communauté.

### Votre trajet quotidien

De la plupart des quartiers de Gatineau, le centre-ville d'Ottawa est accessible en 15-30 minutes. Le réseau de transport en commun inter-provincial (STO et OC Transpo) facilite les déplacements.`,
    bodyEn: `## Moving from Ottawa to Gatineau: Everything You Need to Know

More and more families and professionals are making the leap from Ontario to Quebec to take advantage of what Gatineau has to offer. Here's a guide to help you prepare.

### Financial Advantages

- **Property prices**: Homes in Gatineau are generally 15-25% less expensive than in Ottawa for comparable features.
- **Childcare**: Quebec's subsidized daycare program represents significant savings for families.
- **Vehicle registration**: License plates are cheaper in Quebec.

### Points to Consider

- **Taxes**: Quebec has a higher provincial tax rate, but deductions and tax credits often offset the difference.
- **Language**: French is Quebec's official language, but Gatineau is a bilingual city in practice.
- **School system**: Public schools are in French, but English options are available.

### Best Neighborhoods for Relocators

- **Aylmer**: Family-friendly atmosphere, easy access to Ottawa via the Champlain Bridge.
- **Hull**: Closest to Ottawa, ideal for commuters.
- **Plateau**: Recent development, new schools, sense of community.

### Your Daily Commute

From most Gatineau neighborhoods, downtown Ottawa is accessible in 15-30 minutes. The inter-provincial transit network (STO and OC Transpo) makes commuting convenient.`,
  },
  {
    slug: "investir-plex-gatineau-rentable",
    slugEn: "investing-plex-gatineau-worth-it",
    title: "Investir dans un plex à Gatineau : est-ce encore rentable?",
    titleEn: "Investing in a Plex in Gatineau: Is It Still Worth It?",
    seoTitle: "Investir plex Gatineau · Analyse de rentabilité | YGS",
    seoTitleEn: "Investing in a Plex Gatineau · ROI Analysis | YGS",
    metaDescription: "Analyse de rendement, secteurs à surveiller et erreurs à éviter pour les investisseurs en plex à Gatineau.",
    metaDescriptionEn: "ROI analysis, neighborhoods to watch, and common mistakes investors should avoid when buying a plex in Gatineau.",
    excerpt: "Analyse de rendement, secteurs à surveiller et erreurs à éviter pour les investisseurs.",
    excerptEn: "ROI analysis, neighborhoods to watch, and common mistakes investors should avoid.",
    category: "Investissement",
    categoryEn: "Investment",
    publishDate: "2025-04-02",
    published: true,
    body: `## Investir dans un plex à Gatineau : est-ce encore rentable?

L'investissement immobilier multi-logements reste une stratégie populaire en Outaouais. Mais avec l'évolution des prix et des taux d'intérêt, est-ce que les chiffres fonctionnent encore?

### L'attrait du plex à Gatineau

Gatineau offre un environnement favorable à l'investissement locatif. La demande locative est forte, alimentée par la proximité d'Ottawa, la présence de la fonction publique fédérale et un bassin d'étudiants.

### Analyser la rentabilité

Avant d'investir, une analyse rigoureuse est essentielle :
- **Ratio prix/loyers** : Comparez le prix d'achat aux revenus locatifs annuels.
- **Cash-flow** : Après les dépenses (hypothèque, taxes, assurances, entretien), reste-t-il un flux de trésorerie positif?
- **Taux de capitalisation** : Visez un taux de cap d'au moins 4-5% pour un investissement solide.

### Secteurs à surveiller

- **Hull** : Fort potentiel locatif grâce à la proximité d'Ottawa et la revitalisation du centre-ville.
- **Gatineau centre** : Prix d'achat encore accessibles avec des loyers en hausse.
- **Buckingham** : Marché émergent avec des prix d'entrée bas.

### Erreurs à éviter

1. Ne pas faire d'inspection approfondie
2. Sous-estimer les coûts de rénovation
3. Ignorer le marché locatif local
4. Ne pas vérifier la conformité du bâtiment

### Mon approche

Je vous aide à analyser chaque opportunité avec rigueur — revenus, dépenses, potentiel d'appréciation — pour que votre investissement soit un succès.`,
    bodyEn: `## Investing in a Plex in Gatineau: Is It Still Worth It?

Multi-unit real estate investment remains a popular strategy in the Outaouais. But with evolving prices and interest rates, do the numbers still work?

### The Appeal of Plex Investing in Gatineau

Gatineau offers a favorable environment for rental investment. Rental demand is strong, fueled by proximity to Ottawa, the federal public service, and a student population.

### Analyzing Profitability

Before investing, a rigorous analysis is essential:
- **Price-to-rent ratio**: Compare the purchase price to annual rental income.
- **Cash flow**: After expenses (mortgage, taxes, insurance, maintenance), is there positive cash flow?
- **Cap rate**: Aim for a cap rate of at least 4-5% for a solid investment.

### Areas to Watch

- **Hull**: Strong rental potential thanks to Ottawa proximity and downtown revitalization.
- **Gatineau Centre**: Still accessible purchase prices with rising rents.
- **Buckingham**: Emerging market with low entry prices.

### Mistakes to Avoid

1. Skipping a thorough inspection
2. Underestimating renovation costs
3. Ignoring the local rental market
4. Not verifying building compliance

### My Approach

I help you analyze each opportunity rigorously — income, expenses, appreciation potential — so your investment is a success.`,
  },
  {
    slug: "aylmer-hull-plateau-quel-quartier-choisir",
    slugEn: "aylmer-hull-plateau-which-neighborhood",
    title: "Aylmer, Hull ou Plateau : quel quartier choisir?",
    titleEn: "Aylmer, Hull, or Plateau: Which Neighborhood Is Right for You?",
    seoTitle: "Aylmer, Hull ou Plateau · Comparatif quartiers Gatineau | YGS",
    seoTitleEn: "Aylmer, Hull or Plateau · Gatineau Neighborhoods Compared | YGS",
    metaDescription: "Comparatif des quartiers les plus recherchés de Gatineau : Aylmer, Hull, Plateau. Quel secteur correspond à votre profil?",
    metaDescriptionEn: "Comparing Gatineau's most popular neighborhoods: Aylmer, Hull, Plateau. Which area matches your profile?",
    excerpt: "Comparatif des secteurs les plus recherchés de Gatineau selon votre profil et votre budget.",
    excerptEn: "Comparing Gatineau's most popular areas based on your profile and budget.",
    category: "Quartiers",
    categoryEn: "Neighborhoods",
    publishDate: "2025-04-18",
    published: true,
    body: `## Aylmer, Hull ou Plateau : quel quartier choisir?

Gatineau offre une diversité de quartiers, chacun avec son propre caractère. Voici un comparatif pour vous aider à trouver celui qui correspond le mieux à votre style de vie.

### Aylmer

**Idéal pour** : Les familles, les amoureux de la nature
- Accès au lac Deschênes et au parc de la Gatineau
- Écoles réputées (francophones et anglophones)
- Ambiance de village avec commerces de proximité
- Prix médian plus élevé mais excellent rapport qualité-prix

### Hull

**Idéal pour** : Les navetteurs vers Ottawa, les jeunes professionnels
- Le quartier le plus proche d'Ottawa (5-10 min du centre-ville)
- Revitalisation en cours avec nouveaux commerces et restaurants
- Accès au Musée canadien de l'histoire et à la rivière des Outaouais
- Prix encore accessibles avec un fort potentiel d'appréciation

### Plateau

**Idéal pour** : Les jeunes familles, les premiers acheteurs
- Développement récent avec infrastructures modernes
- Écoles neuves et parcs aménagés
- Sentiment de communauté fort
- Prix d'entrée plus bas, idéal pour un premier achat

### Comment choisir?

Le meilleur quartier dépend de vos priorités : proximité du travail, écoles, budget, style de vie. Je vous accompagne dans cette réflexion pour trouver le secteur qui vous convient parfaitement.`,
    bodyEn: `## Aylmer, Hull, or Plateau: Which Neighborhood Is Right for You?

Gatineau offers a diversity of neighborhoods, each with its own character. Here's a comparison to help you find the one that best matches your lifestyle.

### Aylmer

**Ideal for**: Families, nature lovers
- Access to Lake Deschênes and Gatineau Park
- Reputable schools (French and English)
- Village atmosphere with local shops
- Higher median price but excellent value

### Hull

**Ideal for**: Ottawa commuters, young professionals
- Closest neighborhood to Ottawa (5-10 min from downtown)
- Ongoing revitalization with new shops and restaurants
- Access to the Canadian Museum of History and the Ottawa River
- Still accessible prices with strong appreciation potential

### Plateau

**Ideal for**: Young families, first-time buyers
- Recent development with modern infrastructure
- New schools and landscaped parks
- Strong sense of community
- Lower entry prices, ideal for a first purchase

### How to Choose?

The best neighborhood depends on your priorities: proximity to work, schools, budget, lifestyle. I'll guide you through this decision to find the area that suits you perfectly.`,
  },
  {
    slug: "mutation-militaire-gatineau",
    slugEn: "military-posting-gatineau",
    title: "Mutation militaire à Gatineau : ce que vous devez savoir",
    titleEn: "Military Posting to Gatineau: What You Need to Know",
    seoTitle: "Mutation militaire Gatineau · Guide IRP/BGRS | YGS",
    seoTitleEn: "Military Posting Gatineau · IRP/BGRS Guide | YGS",
    metaDescription: "Guide complet pour les militaires affectés à Gatineau : programme IRP/BGRS, marché local et conseils pratiques.",
    metaDescriptionEn: "Complete guide for military members posted to Gatineau: IRP/BGRS program, local market, and practical tips.",
    excerpt: "Programme IRP/BGRS, marché local et conseils pratiques pour les membres des forces.",
    excerptEn: "IRP/BGRS program, local market insights, and practical tips for CAF members.",
    category: "Militaire",
    categoryEn: "Military",
    publishDate: "2025-05-01",
    published: true,
    body: `## Mutation militaire à Gatineau : ce que vous devez savoir

Si vous êtes un membre des Forces armées canadiennes affecté à la région de Gatineau, ce guide vous aidera à préparer votre relocalisation immobilière.

### Le programme IRP/BGRS

Le Programme de réinstallation intégrée (PRI) couvre plusieurs aspects de votre déménagement :
- Frais de déplacement pour visites de recherche de logement
- Frais juridiques et de clôture pour l'achat/vente
- Assistance pour la vente de votre propriété actuelle

### Pourquoi Gatineau?

Gatineau offre plusieurs avantages pour les militaires :
- **Proximité des bases** : Accès facile aux installations militaires de la région de la capitale nationale.
- **Coût de la vie** : Plus abordable qu'Ottawa pour des propriétés comparables.
- **Garderies** : Accès au réseau de garderies subventionnées du Québec.
- **Qualité de vie** : Nature, parcs, espaces verts et communauté accueillante.

### Conseils pratiques

1. **Commencez tôt** : Dès la confirmation de votre mutation, contactez un courtier local.
2. **Visite de recherche** : Profitez de votre visite DRA pour explorer les quartiers.
3. **Documentation** : Gardez tous vos reçus et documents pour le remboursement IRP.
4. **Timing** : Le marché est plus compétitif au printemps — planifiez en conséquence.

### Mon expertise militaire

J'accompagne régulièrement des familles militaires dans leur relocalisation à Gatineau. Je connais le processus IRP et je m'assure que la transition se fait en douceur.`,
    bodyEn: `## Military Posting to Gatineau: What You Need to Know

If you're a Canadian Armed Forces member posted to the Gatineau area, this guide will help you prepare for your real estate relocation.

### The IRP/BGRS Program

The Integrated Relocation Program (IRP) covers several aspects of your move:
- Travel costs for house-hunting trips
- Legal and closing fees for buying/selling
- Assistance with selling your current property

### Why Gatineau?

Gatineau offers several advantages for military members:
- **Base proximity**: Easy access to military installations in the National Capital Region.
- **Cost of living**: More affordable than Ottawa for comparable properties.
- **Childcare**: Access to Quebec's subsidized daycare network.
- **Quality of life**: Nature, parks, green spaces, and a welcoming community.

### Practical Tips

1. **Start early**: As soon as your posting is confirmed, contact a local broker.
2. **House-hunting trip**: Use your DIT visit to explore neighborhoods.
3. **Documentation**: Keep all receipts and documents for IRP reimbursement.
4. **Timing**: The market is more competitive in spring — plan accordingly.

### My Military Expertise

I regularly help military families with their relocation to Gatineau. I know the IRP process and ensure a smooth transition.`,
  },
];

/** Get all published posts, sorted by date (newest first) */
export const getPublishedPosts = (lang: "fr" | "en" = "fr") =>
  blogPosts
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

/** Get the featured post */
export const getFeaturedPost = () =>
  blogPosts.find((p) => p.published && p.featured) ?? blogPosts.find((p) => p.published);

/** Get a post by slug */
export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug || p.slugEn === slug);

/** Get unique categories */
export const getCategories = (lang: "fr" | "en" = "fr") => {
  const posts = getPublishedPosts(lang);
  const cats = new Set(posts.map((p) => (lang === "en" ? p.categoryEn : p.category)));
  return Array.from(cats);
};
