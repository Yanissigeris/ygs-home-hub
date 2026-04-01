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

/** Default Quebec brackets (2024–2025) */
export const defaultBrackets: TaxBracket[] = [
  { max: 58_900, rate: 0.005 },
  { max: 294_600, rate: 0.01 },
  { max: 500_000, rate: 0.015 },
  { max: 1_000_000, rate: 0.02 },
  { max: Infinity, rate: 0.025 },
];

export interface Municipality {
  id: string;
  label: string;
  labelEn: string;
  /** If undefined, uses defaultBrackets */
  brackets?: TaxBracket[];
}

export const municipalities: Municipality[] = [
  { id: "gatineau", label: "Gatineau", labelEn: "Gatineau" },
  { id: "chelsea", label: "Chelsea", labelEn: "Chelsea" },
  { id: "cantley", label: "Cantley", labelEn: "Cantley" },
  { id: "pontiac", label: "Pontiac", labelEn: "Pontiac" },
  { id: "la-peche", label: "La Pêche", labelEn: "La Pêche" },
  { id: "val-des-monts", label: "Val-des-Monts", labelEn: "Val-des-Monts" },
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
