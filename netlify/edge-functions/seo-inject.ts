export default async (request: Request) => {
  const ua = request.headers.get('user-agent') || ''
  const isCrawler = /googlebot|bingbot|facebookexternalhit|twitterbot|linkedinbot|whatsapp|slackbot|curl/i.test(ua)
  if (!isCrawler) return

  const url = new URL(request.url)
  const path = url.pathname.replace(/\/$/, '') || '/'

  const meta: Record<string, { title: string; description: string }> = {
    '/': { title: 'Courtier immobilier Gatineau | Yanis Gauthier-Sigeris — YGS', description: 'Courtier immobilier à Gatineau depuis 9 ans. Vendre, acheter ou investir en Outaouais — stratégie claire, chiffres honnêtes. Évaluation gratuite.' },
    '/vendre-ma-maison-gatineau': { title: 'Vendre sa maison à Gatineau | Courtier YGS', description: 'Vendez votre maison à Gatineau avec Yanis Gauthier-Sigeris. Évaluation gratuite, stratégie de prix, mise en marché complète. 9 ans d\'expérience.' },
    '/evaluation-gratuite-gatineau': { title: 'Évaluation gratuite de maison à Gatineau | YGS', description: 'Obtenez une évaluation gratuite de votre propriété à Gatineau. Basée sur les comparables réels de votre secteur. Sans engagement.' },
    '/investir-plex-gatineau': { title: 'Investir dans un plex à Gatineau | YGS Immobilier', description: 'Achetez un duplex ou triplex à Gatineau avec un courtier spécialisé. Analyse de rentabilité, marché locatif Outaouais, accompagnement complet.' },
    '/acheter-a-gatineau': { title: 'Acheter une maison à Gatineau | Courtier YGS', description: 'Achetez une maison à Gatineau avec Yanis Gauthier-Sigeris. Accompagnement complet : recherche, offre, inspection, notaire. Expertise Outaouais.' },
    '/premier-achat-gatineau': { title: 'Premier achat immobilier à Gatineau | Guide YGS', description: 'Guide complet pour votre premier achat à Gatineau. Mise de fonds, RAP, CELIAPP, pré-approbation, processus au Québec.' },
    '/relocalisation-ottawa-gatineau': { title: 'Déménager d\'Ottawa à Gatineau | Courtier YGS', description: 'Vous déménagez d\'Ottawa à Gatineau? Courtier bilingue spécialisé en relocalisation Outaouais.' },
    '/militaire-gatineau': { title: 'Courtier immobilier militaire Gatineau | YGS', description: 'Mutation militaire à Gatineau? Courtier spécialisé IRP/BGRS, délais serrés, processus québécois.' },
    '/courtier-immobilier-outaouais': { title: 'Courtier immobilier Outaouais | Yanis Gauthier-Sigeris', description: 'Courtier immobilier en Outaouais avec 9 ans d\'expérience. Hall of Fame RE/MAX.' },
    '/aylmer': { title: 'Courtier immobilier Aylmer Gatineau | YGS', description: 'Achetez ou vendez à Aylmer avec un courtier local. Lac Deschênes, parc de la Gatineau, 10 min d\'Ottawa.' },
    '/hull': { title: 'Courtier immobilier Hull Gatineau | YGS', description: 'Achetez ou vendez à Hull avec un courtier local. Secteur urbain, projet Zibi, proximité Ottawa.' },
    '/plateau': { title: 'Courtier immobilier Plateau Gatineau | YGS', description: 'Achetez ou vendez dans le Plateau à Gatineau. Quartier familial calme, accès autoroute 50.' },
    '/chelsea': { title: 'Courtier immobilier Chelsea Québec | YGS', description: 'Achetez ou vendez à Chelsea. Village aux portes du parc de la Gatineau, 20 min d\'Ottawa.' },
    '/cantley': { title: 'Courtier immobilier Cantley Outaouais | YGS', description: 'Achetez ou vendez à Cantley. Grands terrains, nature à 20 min de Gatineau.' },
    '/blogue': { title: 'Blogue immobilier Gatineau | Conseils YGS', description: 'Conseils immobiliers pour Gatineau et l\'Outaouais. Marché, vente, achat, investissement plex, relocalisation.' },
    '/contact-yanis': { title: 'Contacter Yanis Gauthier-Sigeris | Courtier Gatineau', description: 'Contactez Yanis Gauthier-Sigeris, courtier immobilier à Gatineau. Téléphone, courriel, ou formulaire.' },

    '/en': { title: 'Real Estate Broker Gatineau | Yanis Gauthier-Sigeris — YGS', description: 'Real estate broker in Gatineau with 9 years of experience. Sell, buy or invest in the Outaouais — clear strategy, honest numbers. Free valuation.' },
    '/en/sell': { title: 'Sell your home in Gatineau | YGS Broker', description: 'Sell your home in Gatineau with Yanis Gauthier-Sigeris. Free valuation, pricing strategy, full marketing. 9 years of experience.' },
    '/en/home-valuation': { title: 'Free Home Valuation in Gatineau | YGS', description: 'Get a free valuation of your Gatineau property. Based on real comparables in your area. No commitment.' },
    '/en/plex': { title: 'Invest in a plex in Gatineau | YGS Real Estate', description: 'Buy a duplex or triplex in Gatineau with a specialized broker. Return analysis, Outaouais rental market, full support.' },
    '/en/buy': { title: 'Buy a home in Gatineau | YGS Broker', description: 'Buy a home in Gatineau with Yanis Gauthier-Sigeris. Full support: search, offer, inspection, notary. Outaouais expertise.' },
    '/en/first-time-buyer': { title: 'First-time home buyer in Gatineau | YGS Guide', description: 'Complete guide for your first purchase in Gatineau. Down payment, HBP, FHSA, pre-approval, Quebec process.' },
    '/en/relocation': { title: 'Relocating from Ottawa to Gatineau | YGS Broker', description: 'Moving from Ottawa to Gatineau? Bilingual broker specialized in Outaouais relocation.' },
    '/en/military': { title: 'Military Real Estate Broker Gatineau | YGS', description: 'Military posting to Gatineau? Broker specialized in IRP/BGRS, tight deadlines, Quebec process.' },
    '/en/outaouais-real-estate-agent': { title: 'Outaouais Real Estate Broker | Yanis Gauthier-Sigeris', description: 'Real estate broker in the Outaouais with 9 years of experience. RE/MAX Hall of Fame.' },
    '/en/aylmer': { title: 'Real Estate Broker Aylmer Gatineau | YGS', description: 'Buy or sell in Aylmer with a local broker. Lake Deschênes, Gatineau Park, 10 min from Ottawa.' },
    '/en/hull': { title: 'Real Estate Broker Hull Gatineau | YGS', description: 'Buy or sell in Hull with a local broker. Urban sector, Zibi project, proximity to Ottawa.' },
    '/en/plateau': { title: 'Real Estate Broker Plateau Gatineau | YGS', description: 'Buy or sell in the Plateau in Gatineau. Quiet family neighborhood, Highway 50 access.' },
    '/en/chelsea': { title: 'Real Estate Broker Chelsea Quebec | YGS', description: 'Buy or sell in Chelsea. Village at the gates of Gatineau Park, 20 min from Ottawa.' },
    '/en/cantley': { title: 'Real Estate Broker Cantley Outaouais | YGS', description: 'Buy or sell in Cantley. Large lots, nature 20 min from Gatineau.' },
    '/en/blog': { title: 'Gatineau Real Estate Blog | YGS Tips', description: 'Real estate tips for Gatineau and the Outaouais. Market, selling, buying, plex investment, relocation.' },
    '/en/contact': { title: 'Contact Yanis Gauthier-Sigeris | Gatineau Broker', description: 'Contact Yanis Gauthier-Sigeris, real estate broker in Gatineau. Phone, email, or form.' },
  }

  const page = meta[path]
  if (!page) return

  const response = await fetch(request)
  let html = await response.text()
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
  html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${page.description}$2`)
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url.origin}${path}$2`)

  return new Response(html, {
    headers: { 'content-type': 'text/html; charset=utf-8' },
  })
}
