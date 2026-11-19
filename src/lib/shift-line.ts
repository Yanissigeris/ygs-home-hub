// Ligne révélée par la Shift Card : type de propriété et année de construction,
// tirés tels quels des données d'inscription (aucune donnée inventée).
export function shiftLine(type: string, yearBuilt: string | undefined, lang: "fr" | "en"): string {
  if (!yearBuilt) return type;
  return `${type} · ${lang === "fr" ? "construction" : "built"} ${yearBuilt}`;
}
