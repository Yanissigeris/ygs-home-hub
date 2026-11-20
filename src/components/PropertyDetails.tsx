import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import details from "@/data/property-details.json";

type Row = [string, string];
type Room = { name: string; dim: string; floor: string; note: string };
type LevelGroup = { level: string; rooms: Room[] };
type Money = { rows: Row[]; total: number | null } | null;
export type PropertyDetailsData = {
  levels: LevelGroup[];
  facts: Row[];
  near: string[];
  assessment: { year: string; rows: Row[]; total: number | null } | null;
  taxes: Money;
  expenses: Money;
  inclusions: string;
  exclusions: string;
  openHouses: { date: string; start: string; end: string }[];
};

type Lang = "fr" | "en";

const DATA = details as unknown as Record<string, Record<Lang, PropertyDetailsData>>;

export const getPropertyDetails = (id: string, lang: Lang): PropertyDetailsData | undefined => DATA[id]?.[lang];

/** Exemple de taux affiché par défaut dans la calculatrice (modifiable par le visiteur). */
const EXAMPLE_RATE = 4.5;

const copy = {
  fr: {
    rooms: "Pièces par étage",
    roomsGroup: "Choisir un étage",
    room: "Pièce",
    dim: "Dimensions",
    floor: "Plancher",
    details: "Détails",
    included: "Inclus",
    excluded: "Exclusions",
    calcTitle: "Combien coûterait votre paiement?",
    calcIntro:
      "Un ordre de grandeur pour bâtir votre budget. Votre prêteur confirmera le taux et le montant exact. Le taux affiché est un exemple, changez-le pour le vôtre.",
    price: "Prix",
    down: "Mise de fonds",
    rate: "Taux d'intérêt (exemple)",
    rateDown: "Baisser le taux",
    rateUp: "Monter le taux",
    amort: "Amortissement",
    years: (y: number) => `${y} ans`,
    freq: "Versements",
    monthly: "Mensuels",
    biweekly: "Aux 2 semaines",
    payMonthly: "Paiement hypothécaire par mois",
    payBiweekly: "Paiement hypothécaire aux 2 semaines",
    loan: "Prêt hypothécaire",
    insurance: "Assurance prêt incluse",
    none: "Aucune",
    withTaxes: "Avec les taxes, par mois",
    withTaxesFees: "Avec les taxes et les frais de copropriété, par mois",
    talk: "Parler à Yanis",
    talkHref: "/contact-yanis/",
    disclaimer:
      "Estimation seulement, à titre indicatif. Ne constitue pas une offre de financement. L'assurance prêt hypothécaire s'ajoute au prêt quand la mise de fonds est sous 20 %.",
    area: "Le secteur",
    openHouse: "Visite libre",
  },
  en: {
    rooms: "Rooms by floor",
    roomsGroup: "Choose a floor",
    room: "Room",
    dim: "Dimensions",
    floor: "Flooring",
    details: "Details",
    included: "Included",
    excluded: "Exclusions",
    calcTitle: "What would your payment be?",
    calcIntro:
      "A ballpark figure to build your budget. Your lender will confirm the rate and the exact amount. The rate shown is an example, so change it to yours.",
    price: "Price",
    down: "Down payment",
    rate: "Interest rate (example)",
    rateDown: "Lower the rate",
    rateUp: "Raise the rate",
    amort: "Amortization",
    years: (y: number) => `${y} years`,
    freq: "Payments",
    monthly: "Monthly",
    biweekly: "Every 2 weeks",
    payMonthly: "Mortgage payment per month",
    payBiweekly: "Mortgage payment every 2 weeks",
    loan: "Mortgage loan",
    insurance: "Mortgage insurance included",
    none: "None",
    withTaxes: "With taxes, per month",
    withTaxesFees: "With taxes and condo fees, per month",
    talk: "Talk to Yanis",
    talkHref: "/en/contact/",
    disclaimer:
      "Estimate only, for information. Not a financing offer. Mortgage default insurance is added to the loan when the down payment is under 20%.",
    area: "The area",
    openHouse: "Open house",
  },
};

const money = (n: number, lang: Lang) => {
  const v = Math.round(n);
  return lang === "fr"
    ? `${v.toLocaleString("fr-CA").replace(/[\u202f\u00a0]/g, " ")} $`
    : `$${v.toLocaleString("en-CA")}`;
};

const sentence = (s: string) => {
  const t = s.trim();
  if (!t) return t;
  const up = t.charAt(0).toUpperCase() + t.slice(1);
  return /[.!?]$/.test(up) ? up : `${up}.`;
};

const h2Style = { fontFamily: "var(--display)", fontSize: "clamp(1.5rem, 2.4vw, 2rem)", color: "var(--ink)" } as const;
const MUTED = "#4A5475";
const LINE = "rgba(0,14,53,.12)";

/* ---------- Visite libre ---------- */

const formatOpenHouse = (o: { date: string; start: string; end: string }, lang: Lang) => {
  const [y, m, d] = o.date.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  if (lang === "fr") {
    const day = date.toLocaleDateString("fr-CA", { weekday: "long", day: "numeric", month: "long" });
    const h = (t: string) => {
      const [hh, mm] = t.split(":");
      return mm === "00" ? `${Number(hh)} h` : `${Number(hh)} h ${mm}`;
    };
    return `${day}, de ${h(o.start)} à ${h(o.end)}`;
  }
  const day = date.toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric" });
  const h = (t: string) => {
    const [hh, mm] = t.split(":").map(Number);
    const hr = hh % 12 || 12;
    return mm ? `${hr}:${String(mm).padStart(2, "0")}` : `${hr}`;
  };
  const suffix = Number(o.end.split(":")[0]) >= 12 ? "p.m." : "a.m.";
  return `${day}, ${h(o.start)} to ${h(o.end)} ${suffix}`;
};

const todayIso = () => {
  const n = new Date();
  return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`;
};

export const OpenHouseBadge = ({ id, lang }: { id: string; lang: Lang }) => {
  const d = getPropertyDetails(id, lang);
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => setToday(todayIso()), []);
  const next = d?.openHouses.find((o) => !today || o.date >= today);
  if (!next) return null;
  return (
    <span
      className="inline-flex items-center rounded-full bg-white px-3 py-1 text-[13px] font-semibold"
      style={{ color: "var(--ink)" }}
    >
      {copy[lang].openHouse} {formatOpenHouse(next, lang)}
    </span>
  );
};

/* ---------- Calculatrice ---------- */

const insurancePremium = (downPct: number) => (downPct < 10 ? 0.04 : downPct < 15 ? 0.031 : downPct < 20 ? 0.028 : 0);

const Pill = ({ on, onClick, children, dark }: { on: boolean; onClick: () => void; children: React.ReactNode; dark?: boolean }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={on}
    className="min-h-[44px] rounded-full border px-4 text-[14px] font-semibold transition-colors"
    style={
      dark
        ? on
          ? { background: "#FFFFFF", color: "var(--ink)", borderColor: "#FFFFFF" }
          : { background: "transparent", color: "#FFFFFF", borderColor: "rgba(255,255,255,.4)" }
        : on
          ? { background: "var(--ink)", color: "#FFFFFF", borderColor: "var(--ink)" }
          : { background: "transparent", color: "var(--ink)", borderColor: "rgba(0,14,53,.2)" }
    }
  >
    {children}
  </button>
);

export const MortgageCalculator = ({
  price,
  priceLabel,
  monthlyTaxes,
  monthlyFees,
  lang,
}: {
  price: number;
  priceLabel: string;
  monthlyTaxes: number;
  monthlyFees: number;
  lang: Lang;
}) => {
  const c = copy[lang];
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(EXAMPLE_RATE);
  const [years, setYears] = useState(25);
  const [freq, setFreq] = useState<"m" | "b">("m");

  const r = useMemo(() => {
    const downAmt = (price * down) / 100;
    const base = price - downAmt;
    const prem = insurancePremium(down);
    const insurance = base * prem;
    const loan = base + insurance;
    const perYear = freq === "m" ? 12 : 26;
    // Taux canadien : intérêt composé semestriellement.
    const i = Math.pow(1 + rate / 200, 2 / perYear) - 1;
    const pay = (loan * i) / (1 - Math.pow(1 + i, -years * perYear));
    const monthly = freq === "m" ? pay : (pay * 26) / 12;
    return { downAmt, insurance, prem, loan, pay, monthly };
  }, [price, down, rate, years, freq]);

  const label = "text-[13px] font-semibold";
  const labelColor = { color: "rgba(255,255,255,.78)" };

  return (
    <div id="calculatrice" className="mt-14 scroll-mt-28 rounded-[24px] p-6 text-white md:p-10" style={{ background: "var(--ink)" }}>
      <h2 style={{ ...h2Style, color: "#FFFFFF" }}>{c.calcTitle}</h2>
      <p className="mt-3 max-w-[600px] text-[15px]" style={{ lineHeight: 1.7, color: "rgba(255,255,255,.82)" }}>
        {c.calcIntro}
      </p>

      <div className="mt-7 flex flex-wrap gap-8">
        <div className="flex min-w-0 flex-[999_1_320px] flex-col gap-6">
          <div>
            <p className={label} style={labelColor}>{c.price}</p>
            <p className="mt-1 text-[22px] font-bold tabular-nums">{priceLabel}</p>
          </div>
          <div>
            <p className={label} style={labelColor}>
              {c.down} · {money(r.downAmt, lang)}
            </p>
            <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label={c.down}>
              {[10, 15, 20, 25].map((p) => (
                <Pill key={p} dark on={p === down} onClick={() => setDown(p)}>
                  {lang === "fr" ? `${p} %` : `${p}%`}
                </Pill>
              ))}
            </div>
          </div>
          <div>
            <p className={label} style={labelColor}>{c.rate}</p>
            <div className="mt-2 flex items-center gap-2.5">
              <button
                type="button"
                aria-label={c.rateDown}
                onClick={() => setRate((v) => Math.max(0.5, Math.round((v - 0.1) * 100) / 100))}
                className="h-11 w-11 rounded-full border text-[20px]"
                style={{ borderColor: "rgba(255,255,255,.4)" }}
              >
                −
              </button>
              <span className="min-w-[84px] text-center text-[22px] font-bold tabular-nums" aria-live="polite">
                {lang === "fr" ? `${rate.toFixed(2).replace(".", ",")} %` : `${rate.toFixed(2)}%`}
              </span>
              <button
                type="button"
                aria-label={c.rateUp}
                onClick={() => setRate((v) => Math.min(12, Math.round((v + 0.1) * 100) / 100))}
                className="h-11 w-11 rounded-full border text-[20px]"
                style={{ borderColor: "rgba(255,255,255,.4)" }}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div>
              <p className={label} style={labelColor}>{c.amort}</p>
              <div className="mt-2 flex gap-2" role="group" aria-label={c.amort}>
                {[25, 30].map((y) => (
                  <Pill key={y} dark on={y === years} onClick={() => setYears(y)}>
                    {c.years(y)}
                  </Pill>
                ))}
              </div>
            </div>
            <div>
              <p className={label} style={labelColor}>{c.freq}</p>
              <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label={c.freq}>
                <Pill dark on={freq === "m"} onClick={() => setFreq("m")}>{c.monthly}</Pill>
                <Pill dark on={freq === "b"} onClick={() => setFreq("b")}>{c.biweekly}</Pill>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-0 flex-[1_1_280px] rounded-[20px] bg-white p-6" style={{ color: "var(--ink)" }}>
          <p className="text-[13px] font-semibold" style={{ color: MUTED }}>
            {freq === "m" ? c.payMonthly : c.payBiweekly}
          </p>
          <p
            className="mt-1.5 tabular-nums"
            aria-live="polite"
            style={{ fontFamily: "var(--display)", fontSize: "44px", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.02em" }}
          >
            {money(r.pay, lang)}
          </p>
          <dl className="mt-5 border-t text-[14px]" style={{ borderColor: LINE }}>
            <div className="flex justify-between gap-3 py-2.5">
              <dt style={{ color: MUTED }}>{c.loan}</dt>
              <dd className="font-semibold tabular-nums">{money(r.loan, lang)}</dd>
            </div>
            <div className="flex justify-between gap-3 border-t py-2.5" style={{ borderColor: "rgba(0,14,53,.08)" }}>
              <dt style={{ color: MUTED }}>{c.insurance}</dt>
              <dd className="font-semibold tabular-nums">{r.prem ? money(r.insurance, lang) : c.none}</dd>
            </div>
            {monthlyTaxes > 0 && (
              <div className="flex justify-between gap-3 border-t py-2.5" style={{ borderColor: "rgba(0,14,53,.08)" }}>
                <dt style={{ color: MUTED }}>{monthlyFees > 0 ? c.withTaxesFees : c.withTaxes}</dt>
                <dd className="font-semibold tabular-nums">{money(r.monthly + monthlyTaxes + monthlyFees, lang)}</dd>
              </div>
            )}
          </dl>
          <Button asChild size="lg" className="mt-4 w-full">
            <a href={c.talkHref}>{c.talk}</a>
          </Button>
        </div>
      </div>
      <p className="mt-5 text-[12px]" style={{ lineHeight: 1.6, color: "rgba(255,255,255,.7)" }}>
        {c.disclaimer}
      </p>
    </div>
  );
};

/* ---------- Sections ---------- */

const PropertyDetailsSections = ({
  id,
  lang,
  price,
  priceLabel,
  showCalculator,
}: {
  id: string;
  lang: Lang;
  price: number;
  priceLabel: string;
  showCalculator: boolean;
}) => {
  const c = copy[lang];
  const d = getPropertyDetails(id, lang);
  const [level, setLevel] = useState(0);
  if (!d) return null;

  const roomCount = d.levels.reduce((n, l) => n + l.rooms.length, 0);
  const taxTotal = d.taxes?.total ?? 0;
  const feesTotal = d.expenses?.total ?? 0;
  const current = d.levels[Math.min(level, d.levels.length - 1)];
  const hasFloor = d.levels.some((l) => l.rooms.some((r) => r.floor));

  return (
    <>
      {roomCount > 0 && current && (
        <>
          <h2 className="mt-12" style={h2Style}>{c.rooms}</h2>
          {d.levels.length > 1 && (
            <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label={c.roomsGroup}>
              {d.levels.map((l, k) => (
                <Pill key={l.level} on={k === level} onClick={() => setLevel(k)}>
                  {l.level} · {l.rooms.length}
                </Pill>
              ))}
            </div>
          )}
          <div className="mt-4 overflow-x-auto rounded-[20px] bg-white">
            <table className="w-full min-w-[460px] border-collapse text-[15px]" style={{ color: "var(--ink)" }}>
              <caption className="sr-only">{`${c.rooms} · ${current.level}`}</caption>
              <thead>
                <tr className="text-left text-[13px]" style={{ color: MUTED }}>
                  <th scope="col" className="px-5 py-4 font-semibold">{c.room}</th>
                  <th scope="col" className="px-5 py-4 font-semibold">{c.dim}</th>
                  {hasFloor && <th scope="col" className="px-5 py-4 font-semibold">{c.floor}</th>}
                </tr>
              </thead>
              <tbody>
                {current.rooms.map((r, k) => (
                  <tr key={`${r.name}-${k}`} className="border-t" style={{ borderColor: "rgba(0,14,53,.08)" }}>
                    <td className="px-5 py-3.5 font-semibold">
                      {r.name}
                      {r.note && <span className="block text-[13px] font-normal" style={{ color: MUTED }}>{sentence(r.note).replace(/\.$/, "")}</span>}
                    </td>
                    <td className="px-5 py-3.5 tabular-nums">{r.dim}</td>
                    {hasFloor && <td className="px-5 py-3.5" style={{ color: MUTED }}>{r.floor}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {(d.facts.length > 0 || d.inclusions || d.exclusions) && (
        <>
          <h2 className="mt-12" style={h2Style}>{c.details}</h2>
          {d.facts.length > 0 && (
            <dl className="mt-4 grid gap-x-10 md:grid-cols-2">
              {d.facts.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 border-t py-3 text-[15px]" style={{ borderColor: LINE }}>
                  <dt style={{ color: MUTED }}>{label}</dt>
                  <dd className="text-right font-semibold" style={{ color: "var(--ink)" }}>{value}</dd>
                </div>
              ))}
            </dl>
          )}
          {d.inclusions && (
            <p className="mt-6 text-[15px]" style={{ lineHeight: 1.75, color: "var(--ink)" }}>
              <span className="font-semibold">{lang === "fr" ? `${c.included} : ` : `${c.included}: `}</span>
              {sentence(d.inclusions)}
            </p>
          )}
          {d.exclusions && (
            <p className="mt-2 text-[15px]" style={{ lineHeight: 1.75, color: MUTED }}>
              <span className="font-semibold" style={{ color: "var(--ink)" }}>{lang === "fr" ? `${c.excluded} : ` : `${c.excluded}: `}</span>
              {sentence(d.exclusions)}
            </p>
          )}
        </>
      )}

      {showCalculator && price > 0 && (
        <MortgageCalculator
          price={price}
          priceLabel={priceLabel}
          monthlyTaxes={taxTotal / 12}
          monthlyFees={feesTotal / 12}
          lang={lang}
        />
      )}

      {d.near.length > 0 && (
        <>
          <h2 className="mt-14" style={h2Style}>{c.area}</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {d.near.map((n) => (
              <li key={n} className="rounded-full border px-3.5 py-1.5 text-[14px]" style={{ borderColor: "rgba(0,14,53,.18)", color: "var(--ink)" }}>
                {n}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default PropertyDetailsSections;
