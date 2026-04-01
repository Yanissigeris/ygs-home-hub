import { useState, useMemo } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { municipalities, calculateWelcomeTax } from "@/data/welcome-tax-rates";

const t = {
  fr: {
    title: "Calculateur de taxe de bienvenue",
    price: "Prix d'achat",
    municipality: "Municipalité",
    result: "Taxe de bienvenue estimée",
    breakdown: "Détail par tranche",
    bracket: "Tranche",
    rate: "Taux",
    tax: "Taxe",
    disclaimer:
      "Ce calcul est une estimation seulement. Vérifiez les montants finaux avec la municipalité et votre notaire.",
  },
  en: {
    title: "Welcome Tax Calculator",
    price: "Purchase Price",
    municipality: "Municipality",
    result: "Estimated Welcome Tax",
    breakdown: "Breakdown by Bracket",
    bracket: "Bracket",
    rate: "Rate",
    tax: "Tax",
    disclaimer:
      "This is an estimate only. Please verify final amounts with the municipality and your notary.",
  },
};

function fmt(n: number) {
  return n.toLocaleString("fr-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });
}

function fmtPct(n: number) {
  return (n * 100).toFixed(1) + " %";
}

const WelcomeTaxCalculator = () => {
  const lang = useLanguage();
  const l = t[lang];

  const [price, setPrice] = useState(450000);
  const [muniId, setMuniId] = useState("gatineau");

  const muni = municipalities.find((m) => m.id === muniId) ?? municipalities[0];

  const result = useMemo(() => {
    if (price <= 0) return null;
    return calculateWelcomeTax(price, muni);
  }, [price, muni]);

  return (
    <div className="bg-card rounded-[var(--card-radius)] border border-border shadow-[var(--card-shadow)] p-6 sm:p-8">
      <h3 className="mb-6">{l.title}</h3>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Price */}
        <div className="space-y-1.5">
          <Label>{l.price}</Label>
          <Input type="number" min={0} step={1000} value={price} onChange={(e) => setPrice(Number(e.target.value))} />
        </div>

        {/* Municipality */}
        <div className="space-y-1.5">
          <Label>{l.municipality}</Label>
          <select
            value={muniId}
            onChange={(e) => setMuniId(e.target.value)}
            className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-[0.9375rem] text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/20 focus-visible:border-primary/30"
          >
            {municipalities.map((m) => (
              <option key={m.id} value={m.id}>
                {lang === "en" ? m.labelEn : m.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="mt-8 space-y-4">
          {/* Total */}
          <div className="rounded-xl bg-primary/[0.04] border border-primary/10 p-4">
            <p className="text-[0.8125rem] text-muted-foreground">{l.result}</p>
            <p className="mt-1 font-heading text-[1.75rem] font-bold text-foreground leading-tight">{fmt(result.total)}</p>
          </div>

          {/* Breakdown table */}
          <div className="rounded-xl bg-secondary/40 border border-border p-4 overflow-x-auto">
            <p className="text-[0.8125rem] font-semibold text-foreground mb-3">{l.breakdown}</p>
            <table className="w-full text-[0.8125rem]">
              <thead>
                <tr className="text-muted-foreground border-b border-border">
                  <th className="text-left pb-2 font-medium">{l.bracket}</th>
                  <th className="text-right pb-2 font-medium">{l.rate}</th>
                  <th className="text-right pb-2 font-medium">{l.tax}</th>
                </tr>
              </thead>
              <tbody>
                {result.breakdown.map((b, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="py-1.5 text-foreground">
                      {fmt(b.from)} — {fmt(b.to)}
                    </td>
                    <td className="py-1.5 text-right text-muted-foreground">{fmtPct(b.rate)}</td>
                    <td className="py-1.5 text-right font-medium text-foreground">{fmt(b.tax)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Disclaimer */}
          <p className="text-[0.75rem] leading-relaxed text-muted-foreground/70 italic">{l.disclaimer}</p>
        </div>
      )}
    </div>
  );
};

export default WelcomeTaxCalculator;
