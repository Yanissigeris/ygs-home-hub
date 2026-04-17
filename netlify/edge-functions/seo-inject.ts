import type { Context } from "https://edge.netlify.com"

export default async (request: Request, context: Context) => {
  const url = new URL(request.url)
  const path = url.pathname.replace(/\/$/, '') || '/'
  if (path.includes('.')) return context.next()

  const meta: Record<string, { title: string; description: string }> = {
    '/': { title: 'Courtier immobilier Gatineau | Yanis Gauthier-Sigeris — YGS', description: 'Courtier immobilier à Gatineau depuis 9 ans. Vendre, acheter ou investir en Outaouais — stratégie claire, chiffres honnêtes. Évaluation gratuite.' },
    '/vendre-ma-maison-gatineau': { title: 'Vendre sa maison à Gatineau | Courtier YGS', description: 'Vendez votre maison à Gatineau avec Yanis Gauthier-Sigeris. Évaluation gratuite, stratégie de prix, mise en marché complète.' },
    '/evaluation-gratuite-gatineau': { title: 'Évaluation gratuite de maison à Gatineau | YGS', description: 'Obtenez une évaluation gratuite de votre propriété à Gatineau. Basée sur les comparables réels. Sans engagement.' },
    '/investir-plex-gatineau': { title: 'Investir dans un plex à Gatineau | YGS Immobilier', description: 'Achetez un duplex ou triplex à Gatineau avec un courtier spécialisé. Analyse de rentabilité, marché locatif Outaouais.' },
    '/acheter-a-gatineau': { title: 'Acheter une maison à Gatineau | Courtier YGS', description: 'Achetez une maison à Gatineau. Accompagnement complet : recherche, offre, inspection, notaire. Expertise Outaouais.' },
    '/aylmer': { title: 'Courtier immobilier Aylmer Gatineau | YGS', description: 'Achetez ou vendez à Aylmer. Lac Deschênes, parc de la Gatineau, 10 min d\'Ottawa.' },
    '/hull': { title: 'Courtier immobilier Hull Gatineau | YGS', description: 'Achetez ou vendez à Hull. Secteur urbain, projet Zibi, proximité Ottawa.' },
    '/plateau': { title: 'Courtier immobilier Plateau Gatineau | YGS', description: 'Achetez ou vendez dans le Plateau à Gatineau. Quartier familial calme.' },
    '/chelsea': { title: 'Courtier immobilier Chelsea Québec | YGS', description: 'Achetez ou vendez à Chelsea. Village aux portes du parc de la Gatineau.' },
    '/cantley': { title: 'Courtier immobilier Cantley Outaouais | YGS', description: 'Achetez ou vendez à Cantley. Grands terrains, nature à 20 min de Gatineau.' },
    '/blogue': { title: 'Blogue immobilier Gatineau | Conseils YGS', description: 'Conseils immobiliers pour Gatineau et l\'Outaouais.' },
    '/contact-yanis': { title: 'Contacter Yanis Gauthier-Sigeris | Courtier Gatineau', description: 'Contactez Yanis Gauthier-Sigeris, courtier immobilier à Gatineau.' },
  }

  const response = await context.next()
  const contentType = response.headers.get('content-type') || ''
  if (!contentType.includes('text/html')) return response

  const page = meta[path]
  if (!page) return response

  let html = await response.text()
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
  html = html.replace(/(<meta name="description" content=")[^"]*"/, `$1${page.description}"`)
  html = html.replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url.origin}${path}"`)

  return new Response(html, {
    status: response.status,
    headers: response.headers,
  })
}
