export const formatSector = (city: string): string =>
  (city.match(/\(([^—)]+)/)?.[1] ?? city).trim();
