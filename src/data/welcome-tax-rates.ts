/**
 * Quebec Welcome Tax (droits de mutation) brackets & municipality overrides.
 * Edit this single file to update rates across the entire site.
 */

export interface TaxBracket {
  /** Upper bound of the bracket (inclusive). Use Infinity for the last bracket. */
  max: number;
  /** Rate applied to the portion within this bracket */
  rate: number;
}

/**
 * Default Quebec grid for 2026 (Loi concernant les droits sur les mutations immobilières, art. 2,
 * thresholds indexed for 2026). Source: quebec.ca, droits sur les mutations immobilières.
 * A municipality may add higher rates (max 3 %) on the portion above 500 000 $.
 */
export const defaultBrackets: TaxBracket[] = [
  { max: 62_900, rate: 0.005 },
  { max: 315_000, rate: 0.01 },
  { max: Infinity, rate: 0.015 },
];

export interface Municipality {
  id: string;
  label: string;
  labelEn: string;
  /** If undefined, uses defaultBrackets */
  brackets?: TaxBracket[];
}

/** 2026 grids. Verified on each municipality's website (October 2026). */
export const municipalities: Municipality[] = [
  {
    // gatineau.ca, base d'imposition: grid in force from February 25, 2026
    id: "gatineau",
    label: "Gatineau",
    labelEn: "Gatineau",
    brackets: [
      { max: 62_900, rate: 0.005 },
      { max: 315_000, rate: 0.01 },
      { max: 500_000, rate: 0.015 },
      { max: Infinity, rate: 0.03 },
    ],
  },
  {
    // chelsea.ca, Taxation: by-law 1367-26, 3 % above 500 000 $
    id: "chelsea",
    label: "Chelsea",
    labelEn: "Chelsea",
    brackets: [
      { max: 62_900, rate: 0.005 },
      { max: 315_000, rate: 0.01 },
      { max: 500_000, rate: 0.015 },
      { max: Infinity, rate: 0.03 },
    ],
  },
  {
    // cantley.ca, Taxes et évaluations (2026)
    id: "cantley",
    label: "Cantley",
    labelEn: "Cantley",
    brackets: [
      { max: 62_900, rate: 0.005 },
      { max: 315_000, rate: 0.01 },
      { max: 500_000, rate: 0.015 },
      { max: 750_000, rate: 0.0225 },
      { max: Infinity, rate: 0.03 },
    ],
  },
  {
    // villelapeche.qc.ca, Taxation: by-law 19-780
    id: "la-peche",
    label: "La Pêche",
    labelEn: "La Pêche",
    brackets: [
      { max: 62_900, rate: 0.005 },
      { max: 315_000, rate: 0.01 },
      { max: 500_000, rate: 0.015 },
      { max: 750_000, rate: 0.02 },
      { max: 1_000_000, rate: 0.025 },
      { max: Infinity, rate: 0.03 },
    ],
  },
  {
    // val-des-monts.net, Droit de mutation: by-law 957-26
    id: "val-des-monts",
    label: "Val-des-Monts",
    labelEn: "Val-des-Monts",
    brackets: [
      { max: 62_900, rate: 0.005 },
      { max: 315_000, rate: 0.01 },
      { max: 500_000, rate: 0.015 },
      { max: Infinity, rate: 0.03 },
    ],
  },
  // Pontiac: 2026 grid not confirmed by an official source, left out until confirmed.
];

export interface BracketResult {
  from: number;
  to: number;
  rate: number;
  taxable: number;
  tax: number;
}

export function calculateWelcomeTax(
  price: number,
  municipality: Municipality,
): { total: number; breakdown: BracketResult[] } {
  const brackets = municipality.brackets ?? defaultBrackets;
  const breakdown: BracketResult[] = [];
  let remaining = price;
  let prevMax = 0;

  for (const bracket of brackets) {
    if (remaining <= 0) break;
    const bracketSize = bracket.max === Infinity ? remaining : bracket.max - prevMax;
    const taxable = Math.min(remaining, bracketSize);
    const tax = taxable * bracket.rate;
    breakdown.push({
      from: prevMax,
      to: prevMax + taxable,
      rate: bracket.rate,
      taxable,
      tax,
    });
    remaining -= taxable;
    prevMax = bracket.max === Infinity ? prevMax + taxable : bracket.max;
  }

  return {
    total: breakdown.reduce((s, b) => s + b.tax, 0),
    breakdown,
  };
}
