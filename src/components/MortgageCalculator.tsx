import { useState, useMemo } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useLanguage } from "@/contexts/LanguageContext";

const t = {
  fr: {
    title: "Calculateur hypothécaire",
    price: "Prix de la propriété",
    down: "Mise de fonds",
    rate: "Taux d'intérêt (%)",
    amort: "Amortissement (années)",
    freq: "Fréquence de paiement",
    monthly: "Mensuel",
    biweekly: "Aux 2 semaines",
    weekly: "Hebdomadaire",
    result: "Paiement estimé",
    totalMortgage: "Montant hypothéqué",
    totalInterest: "Intérêts totaux",
    totalCost: "Coût total",
    dollar: "$",
    percent: "%",
  },
  en: {
    title: "Mortgage Calculator",
    price: "Home Price",
    down: "Down Payment",
    rate: "Interest Rate (%)",
    amort: "Amortization (years)",
    freq: "Payment Frequency",
    monthly: "Monthly",
    biweekly: "Bi-weekly",
    weekly: "Weekly",
    result: "Estimated Payment",
    totalMortgage: "Mortgage Amount",
    totalInterest: "Total Interest",
    totalCost: "Total Cost",
    dollar: "$",
    percent: "%",
  },
};

type Freq = "monthly" | "biweekly" | "weekly";

const freqPayments: Record<Freq, number> = {
  monthly: 12,
  biweekly: 26,
  weekly: 52,
};

function fmt(n: number) {
  return n.toLocaleString("fr-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });
}

const MortgageCalculator = () => {
  const lang = useLanguage();
  const l = t[lang];

  const [price, setPrice] = useState(450000);
  const [downRaw, setDownRaw] = useState(90000);
  const [downMode, setDownMode] = useState<"$" | "%">("$");
  const [rate, setRate] = useState(4.5);
  const [amort, setAmort] = useState(25);
  const [freq, setFreq] = useState<Freq>("monthly");

  const downPayment = downMode === "%" ? price * (downRaw / 100) : downRaw;
  const principal = Math.max(price - downPayment, 0);

  const result = useMemo(() => {
    if (principal <= 0 || rate <= 0 || amort <= 0) return null;

    const periodsPerYear = freqPayments[freq];
    const totalPeriods = amort * periodsPerYear;

    // Canadian mortgage: semi-annual compounding → periodic rate
    const semiAnnualRate = rate / 100 / 2;
    const periodicRate = Math.pow(1 + semiAnnualRate, 2 / periodsPerYear) - 1;

    const payment =
      (principal * periodicRate * Math.pow(1 + periodicRate, totalPeriods)) /
      (Math.pow(1 + periodicRate, totalPeriods) - 1);

    const totalCost = payment * totalPeriods;
    const totalInterest = totalCost - principal;

    return { payment, totalCost, totalInterest, principal };
  }, [principal, rate, amort, freq]);

  const freqOptions: { value: Freq; label: string }[] = [
    { value: "monthly", label: l.monthly },
    { value: "biweekly", label: l.biweekly },
    { value: "weekly", label: l.weekly },
  ];

  return (
    <div className="bg-card rounded-[var(--card-radius)] border border-border shadow-[var(--card-shadow)] p-6 sm:p-8">
      <h3 className="mb-6">{l.title}</h3>

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Price */}
        <div className="space-y-1.5">
          <Label>{l.price}</Label>
          <Input type="number" min={0} step={1000} value={price} onChange={(e) => setPrice(Number(e.target.value))} />
        </div>

        {/* Down payment */}
        <div className="space-y-1.5">
          <Label>{l.down}</Label>
          <div className="flex gap-2">
            <Input
              type="number"
              min={0}
              step={downMode === "%" ? 1 : 1000}
              value={downRaw}
              onChange={(e) => setDownRaw(Number(e.target.value))}
              className="flex-1"
            />
            <button
              type="button"
              onClick={() => {
                if (downMode === "$") {
                  setDownMode("%");
                  setDownRaw(price > 0 ? Math.round((downRaw / price) * 100) : 20);
                } else {
                  setDownMode("$");
                  setDownRaw(Math.round(price * (downRaw / 100)));
                }
              }}
              className="h-12 w-12 shrink-0 rounded-xl border border-input bg-secondary/40 text-[0.875rem] font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {downMode}
            </button>
          </div>
          <Slider
            min={downMode === "%" ? 0 : 0}
            max={downMode === "%" ? 100 : price}
            step={downMode === "%" ? 1 : 1000}
            value={[downRaw]}
            onValueChange={([v]) => setDownRaw(v)}
            className="mt-2"
          />
          <p className="text-[0.75rem] text-muted-foreground">
            {downMode === "%" ? fmt(downPayment) : `${price > 0 ? Math.round((downRaw / price) * 100) : 0} %`}
          </p>
        </div>

        {/* Rate */}
        <div className="space-y-1.5">
          <Label>{l.rate}</Label>
          <Input type="number" min={0} max={20} step={0.05} value={rate} onChange={(e) => setRate(Number(e.target.value))} />
        </div>

        {/* Amort */}
        <div className="space-y-1.5">
          <Label>{l.amort}</Label>
          <Input type="number" min={1} max={30} step={1} value={amort} onChange={(e) => setAmort(Number(e.target.value))} />
        </div>

        {/* Frequency */}
        <div className="space-y-1.5 sm:col-span-2">
          <Label>{l.freq}</Label>
          <div className="flex flex-wrap gap-2">
            {freqOptions.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => setFreq(o.value)}
                className={`h-10 rounded-[0.625rem] border px-4 text-[0.8125rem] font-medium transition-colors ${
                  freq === o.value
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-secondary/30 text-foreground hover:bg-secondary/60"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-primary/[0.04] border border-primary/10 p-4">
            <p className="text-[0.8125rem] text-muted-foreground">{l.result}</p>
            <p className="mt-1 font-heading text-[1.75rem] font-bold text-foreground leading-tight">{fmt(result.payment)}</p>
          </div>
          <div className="rounded-xl bg-secondary/40 border border-border p-4 space-y-2">
            <div className="flex justify-between text-[0.875rem]">
              <span className="text-muted-foreground">{l.totalMortgage}</span>
              <span className="font-medium text-foreground">{fmt(result.principal)}</span>
            </div>
            <div className="flex justify-between text-[0.875rem]">
              <span className="text-muted-foreground">{l.totalInterest}</span>
              <span className="font-medium text-foreground">{fmt(result.totalInterest)}</span>
            </div>
            <div className="flex justify-between text-[0.875rem] border-t border-border pt-2">
              <span className="text-muted-foreground">{l.totalCost}</span>
              <span className="font-semibold text-foreground">{fmt(result.totalCost)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MortgageCalculator;
