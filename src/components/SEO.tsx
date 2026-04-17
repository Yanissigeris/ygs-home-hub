import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  canonical: string
  hreflangFr?: string
  hreflangEn?: string
  lang?: string
}

export default function SEO({ title, description, canonical, hreflangFr, hreflangEn, lang = 'fr' }: SEOProps) {
  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {hreflangFr && <link rel="alternate" hreflang="fr-CA" href={hreflangFr} />}
      {hreflangEn && <link rel="alternate" hreflang="en-CA" href={hreflangEn} />}
      <link rel="alternate" hreflang="x-default" href={hreflangFr || canonical} />
    </Helmet>
  )
}
