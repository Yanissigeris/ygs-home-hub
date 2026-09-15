// Questions FAQ de la page d'accueil (FR et EN).
// FORMAT FIGÉ : chaînes à guillemets doubles, un objet par ligne, sans
// annotation de type ni `satisfies` — scripts/faq-extractor.mjs lit ce
// fichier par expression régulière pour injecter le FAQPage JSON-LD
// côté serveur dans scripts/prerender.mjs.

export const homeFaqFr = [
  { q: "Combien vaut ma maison à Gatineau?", a: "Je prépare une évaluation gratuite basée sur les comparables récents dans votre secteur — Aylmer, Hull, Plateau ou ailleurs en Outaouais. Vous recevez un rapport clair avec le prix de vente recommandé." },
  { q: "Comment choisir le bon courtier immobilier en Outaouais?", a: "Cherchez un courtier qui connaît votre secteur en profondeur, qui est transparent sur sa stratégie et qui vous donne les vrais chiffres. L'expérience locale, la disponibilité et l'approche humaine font toute la différence." },
  { q: "Quels sont les meilleurs quartiers pour acheter à Gatineau?", a: "Ça dépend de votre profil : Aylmer et le Plateau sont populaires auprès des familles, Hull attire les jeunes professionnels, et Chelsea ou Cantley séduisent ceux qui veulent la nature tout en restant proches de la ville." },
  { q: "Est-ce le bon moment pour vendre à Gatineau?", a: "Le marché immobilier en Outaouais reste actif. Une analyse de votre propriété permet de déterminer le meilleur timing et la stratégie de prix optimale pour maximiser votre résultat." },
];

export const homeFaqEn = [
  { q: "How much is my house worth in Gatineau?", a: "I prepare a free valuation based on recent comparables in your area — Aylmer, Hull, Plateau or elsewhere in Outaouais. You receive a clear report with the recommended listing price." },
  { q: "How do I choose the right real estate broker in Outaouais?", a: "Look for a broker with deep local knowledge, transparent strategy and real numbers. Local experience, availability and a human approach make all the difference." },
  { q: "What are the best neighbourhoods to buy in Gatineau?", a: "It depends on your profile: Aylmer and the Plateau are popular with families, Hull attracts young professionals, and Chelsea or Cantley appeal to those who want nature while staying close to the city." },
  { q: "Is now a good time to sell in Gatineau?", a: "The Outaouais real estate market remains active. A property analysis helps determine the best timing and optimal pricing strategy to maximize your result." },
];
