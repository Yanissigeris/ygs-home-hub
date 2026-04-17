import type { Context } from "https://edge.netlify.com"

export default async (request: Request, context: Context) => {
  const url = new URL(request.url)
  const path = url.pathname.replace(/\/$/, '') || '/'
  if (path.includes('.')) return context.next()

  const meta: Record<string, { title: string; description: string }> = {
    '/': { title: 'Courtier immobilier Gatineau | Yanis Gauthier-Sigeris', description: 'Courtier immobilier à Gatineau depuis 9 ans.' },
    '/vendre-ma-maison-gatineau': { title: 'Vendre sa maison à Gatineau | Courtier YGS', description: 'Vendez votre maison à Gatineau avec Yanis Gauthier-Sigeris.' },
    '/investir-plex-gatineau': { title: 'Investir dans un plex à Gatineau | YGS', description: 'Achetez un plex à Gatineau avec un courtier spécialisé.' },
    '/aylmer': { title: 'Courtier immobilier Aylmer | YGS', description: 'Achetez ou vendez à Aylmer, Gatineau.' },
    '/hull': { title: 'Courtier immobilier Hull | YGS', description: 'Achetez ou vendez à Hull, Gatineau.' },
    '/blogue': { title: 'Blogue immobilier Gatineau | YGS', description: 'Conseils immobiliers pour Gatineau.' },
  }

  const page = meta[path]
  if (!page) return context.next()

  // Fetch index.html directly (bypasses SPA redirect rules in _redirects)
  const indexResponse = await fetch(new URL('/index.html', url.origin).toString())
  let html = await indexResponse.text()

  html = html.replace(/<title>[^<]+<\/title>/, '<title>' + page.title + '</title>')
  html = html.replace(/name="description" content="[^"]*"/, 'name="description" content="' + page.description + '"')

  return new Response(html, {
    status: 200,
    headers: { 'content-type': 'text/html; charset=utf-8' },
  })
}
