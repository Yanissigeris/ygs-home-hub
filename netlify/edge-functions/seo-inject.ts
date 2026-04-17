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
