/** Date shown on blog listing cards: the update date when an article was
 *  refreshed after publication (so a Q3 analysis never reads as published in May),
 *  otherwise the publication date. */
export function listingDate(
  post: { publishDate: string; updatedDate?: string },
  locale: "fr-CA" | "en-CA",
  month: "long" | "short",
): { iso: string; label: string } {
  const updated = post.updatedDate && post.updatedDate > post.publishDate ? post.updatedDate : null;
  const iso = updated ?? post.publishDate;
  const date = new Date(`${iso}T12:00:00`).toLocaleDateString(locale, { year: "numeric", month, day: "numeric" });
  const prefix = updated ? (locale === "fr-CA" ? "Mis à jour le " : "Updated ") : "";
  return { iso, label: prefix + date };
}
