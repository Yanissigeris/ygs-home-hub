import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Bath, BedDouble, CalendarDays, ChevronDown, House, LandPlot, LayoutGrid, ListChecks, Receipt, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Property } from "@/data/properties";
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
    bedrooms: "Chambres",
    bathrooms: "Salles de bain",
    area: "Superficie habitable",
    lot: "Terrain",
    year: "Construction",
    features: "Caractéristiques",
    type: "Type",
    yearBuilt: "Année de construction",
    lotSize: "Terrain",
    mls: "No Centris",
    near: "À proximité",
    rooms: "Détails des pièces",
    roomsSummary: (n: number, l: number) => `${n} pièces sur ${l} ${l > 1 ? "niveaux" : "niveau"}`,
    roomsGroup: "Choisir un niveau",
    room: "Pièce",
    dim: "Dimensions",
    floor: "Plancher",
    incl: "Inclus et exclus",
    included: "Inclus",
    excluded: "Exclus",
    costs: "Évaluation, taxes et frais",
    taxesSummary: (t: string) => `Taxes de ${t} par année`,
    calcTitle: "Calculatrice hypothécaire",
    calcIntro: "Un ordre de grandeur pour votre budget. Votre prêteur confirmera le taux et le montant exact.",
    price: "Prix de la propriété",
    down: "Mise de fonds",
    downMode: "Entrer la mise de fonds en",
    minDown: (m: string) => `Mise de fonds minimale pour ce prix : ${m}.`,
    rate: "Taux d'intérêt (exemple)",
    amort: "Amortissement",
    years: (y: number) => `${y} ans`,
    freq: "Fréquence des versements",
    monthly: "Mensuelle",
    biweekly: "Aux 2 semaines",
    weekly: "Hebdomadaire",
    pay: { m: "Paiement par mois", b: "Paiement aux 2 semaines", w: "Paiement par semaine" },
    loan: "Montant hypothécaire",
    insurance: "Assurance prêt incluse",
    none: "Aucune",
    withTaxes: "Avec les taxes, par mois",
    withTaxesFees: "Avec les taxes et les frais de copropriété, par mois",
    talk: "Parler à Yanis",
    talkHref: "/contact-yanis/",
    disclaimer:
      "Estimation seulement, à titre indicatif. Ne constitue pas une offre de financement. Le taux est un exemple. L'assurance prêt hypothécaire s'ajoute au prêt quand la mise de fonds est sous 20 %.",
    openHouse: "Visite libre",
  },
  en: {
    bedrooms: "Bedrooms",
    bathrooms: "Bathrooms",
    area: "Living area",
    lot: "Lot",
    year: "Built",
    features: "Features",
    type: "Type",
    yearBuilt: "Year built",
    lotSize: "Lot",
    mls: "Centris no.",
    near: "Nearby",
    rooms: "Room details",
    roomsSummary: (n: number, l: number) => `${n} rooms on ${l} ${l > 1 ? "levels" : "level"}`,
    roomsGroup: "Choose a level",
    room: "Room",
    dim: "Dimensions",
    floor: "Flooring",
    incl: "Inclusions and exclusions",
    included: "Included",
    excluded: "Excluded",
    costs: "Assessment, taxes and fees",
    taxesSummary: (t: string) => `Taxes of ${t} a year`,
    calcTitle: "Mortgage calculator",
    calcIntro: "A ballpark figure for your budget. Your lender will confirm the rate and the exact amount.",
    price: "Property price",
    down: "Down payment",
    downMode: "Enter the down payment in",
    minDown: (m: string) => `Minimum down payment for this price: ${m}.`,
    rate: "Interest rate (example)",
    amort: "Amortization",
    years: (y: number) => `${y} years`,
    freq: "Payment frequency",
    monthly: "Monthly",
    biweekly: "Every 2 weeks",
    weekly: "Weekly",
    pay: { m: "Payment per month", b: "Payment every 2 weeks", w: "Payment per week" },
    loan: "Mortgage amount",
    insurance: "Mortgage insurance included",
    none: "None",
    withTaxes: "With taxes, per month",
    withTaxesFees: "With taxes and condo fees, per month",
    talk: "Talk to Yanis",
    talkHref: "/en/contact/",
    disclaimer:
      "Estimate only, for information. Not a financing offer. The rate is an example. Mortgage default insurance is added to the loan when the down payment is under 20%.",
    openHouse: "Open house",
  },
};

const INK = "var(--ink)";
const MUTED = "#4A5475";
const LINE = "rgba(0,14,53,.12)";

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

const has = (v?: string) => Boolean(v && v.trim() && v.trim() !== "—");

/* ---------- Bandeau des chiffres clés ---------- */

export const StatBand = ({ property, lang }: { property: Property; lang: Lang }) => {
  const c = copy[lang];
  const baths =
    has(property.powderRooms) && property.powderRooms !== "0" ? `${property.bathrooms} + ${property.powderRooms}` : property.bathrooms;
  const items = [
    { icon: BedDouble, value: property.bedrooms, label: c.bedrooms },
    { icon: Bath, value: baths, label: c.bathrooms },
    { icon: Ruler, value: property.area, label: c.area },
    { icon: LandPlot, value: property.lotSize, label: c.lot },
    { icon: CalendarDays, value: property.yearBuilt, label: c.year },
  ]
    .filter((i) => has(i.value))
    .slice(0, 4);
  if (!items.length) return null;
  return (
    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[20px] bg-[rgba(0,14,53,.08)] sm:grid-cols-4">
      {items.map(({ icon: Icon, value, label }) => (
        <li key={label} className="flex items-center gap-3 bg-white px-4 py-5 sm:px-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full" style={{ background: "var(--cream)" }}>
            <Icon size={20} strokeWidth={1.75} aria-hidden="true" style={{ color: INK }} />
          </span>
          <span className="min-w-0">
            <span className="block text-[18px] font-semibold leading-tight tabular-nums" style={{ color: INK }}>{value}</span>
            <span className="block text-[13px]" style={{ color: MUTED }}>{label}</span>
          </span>
        </li>
      ))}
    </ul>
  );
};

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
    <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-[13px] font-semibold" style={{ color: INK }}>
      {copy[lang].openHouse} {formatOpenHouse(next, lang)}
    </span>
  );
};

/* ---------- Sections repliables ---------- */

const Section = ({
  icon: Icon,
  title,
  summary,
  open,
  children,
}: {
  icon: typeof House;
  title: string;
  summary?: string;
  open?: boolean;
  children: ReactNode;
}) => (
  <details open={open} className="group rounded-[20px] border bg-white" style={{ borderColor: LINE }}>
    <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-5 md:px-6 [&::-webkit-details-marker]:hidden">
      <Icon size={22} strokeWidth={1.75} aria-hidden="true" className="shrink-0" style={{ color: INK }} />
      <span className="min-w-0 flex-1">
        <span className="block text-[17px] font-semibold" style={{ color: INK }}>{title}</span>
        {summary && <span className="mt-0.5 block truncate text-[14px]" style={{ color: MUTED }}>{summary}</span>}
      </span>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ background: "var(--cream)" }}>
        <ChevronDown size={18} aria-hidden="true" className="transition-transform group-open:rotate-180" style={{ color: INK }} />
      </span>
    </summary>
    <div className="px-5 pb-6 md:px-6">{children}</div>
  </details>
);

const Rows = ({ rows }: { rows: Row[] }) => (
  <dl className="grid grid-cols-[minmax(0,1fr)] gap-x-10 md:grid-cols-[repeat(2,minmax(0,1fr))]">
    {rows.map(([label, value]) => (
      <div key={label} className="flex justify-between gap-4 border-t py-3 text-[15px]" style={{ borderColor: LINE }}>
        <dt className="shrink-0 whitespace-nowrap" style={{ color: MUTED }}>{label}</dt>
        <dd className="text-right font-semibold" style={{ color: INK }}>{value}</dd>
      </div>
    ))}
  </dl>
);

const Pill = ({ on, onClick, children }: { on: boolean; onClick: () => void; children: ReactNode }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={on}
    className="min-h-[44px] rounded-full border px-4 text-[14px] font-semibold transition-colors"
    style={on ? { background: INK, color: "#FFFFFF", borderColor: INK } : { background: "transparent", color: INK, borderColor: "rgba(0,14,53,.2)" }}
  >
    {children}
  </button>
);

export const PropertySections = ({ property, lang }: { property: Property; lang: Lang }) => {
  const c = copy[lang];
  const d = getPropertyDetails(property.id, lang);
  const [level, setLevel] = useState(0);

  const features = (
    [
      [c.type, property.type],
      [c.yearBuilt, property.yearBuilt ?? ""],
      [c.lotSize, property.lotSize ?? ""],
      ...((d?.facts ?? []) as Row[]),
      [c.near, d?.near.join(", ") ?? ""],
      [c.mls, property.mls ?? ""],
    ] as Row[]
  ).filter(([, v]) => has(v));

  const levels = d?.levels ?? [];
  const roomCount = levels.reduce((n, l) => n + l.rooms.length, 0);
  const current = levels[Math.min(level, Math.max(levels.length - 1, 0))];
  const hasFloor = levels.some((l) => l.rooms.some((r) => r.floor));

  const fixMoney = (v: string) => (lang === "en" ? v.replace(/\$\s+/g, "$") : v);
  const costRows: Row[] = [];
  if (d?.taxes?.total) {
    costRows.push(...d.taxes.rows.map(([l, v]) => [lang === "fr" ? `Taxes ${l.charAt(0).toLowerCase()}${l.slice(1)}` : `${l} taxes`, fixMoney(v)] as Row));
  }
  if (d?.assessment?.total) {
    costRows.push([lang === "fr" ? `Évaluation municipale (${d.assessment.year})` : `Municipal assessment (${d.assessment.year})`, money(d.assessment.total, lang)]);
  }
  if (d?.expenses?.rows) {
    costRows.push(...d.expenses.rows.filter(([l]) => !/^total$/i.test(l)).map(([l, v]) => [l, fixMoney(v)] as Row));
  }

  const inclPreview = d?.inclusions ? sentence(d.inclusions).replace(/\.$/, "") : "";

  return (
    <div className="mt-10 flex flex-col gap-3">
      <Section icon={House} title={c.features} summary={[property.type, property.yearBuilt].filter(has).join(" · ")} open>
        <Rows rows={features} />
      </Section>

      {roomCount > 0 && current && (
        <Section icon={LayoutGrid} title={c.rooms} summary={c.roomsSummary(roomCount, levels.length)}>
          {levels.length > 1 && (
            <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label={c.roomsGroup}>
              {levels.map((l, k) => (
                <Pill key={l.level} on={k === level} onClick={() => setLevel(k)}>
                  {l.level} · {l.rooms.length}
                </Pill>
              ))}
            </div>
          )}
          {levels.map((lv, li) => (
          <div key={lv.level} className="overflow-x-auto" hidden={li !== Math.min(level, levels.length - 1)}>
            <table className="w-full border-collapse text-[15px]" style={{ color: INK }}>
              <caption className="sr-only">{`${c.rooms} · ${lv.level}`}</caption>
              <thead>
                <tr className="text-left text-[13px]" style={{ color: MUTED }}>
                  <th scope="col" className="py-3 pr-4 font-semibold">{c.room}</th>
                  <th scope="col" className="py-3 pr-4 font-semibold">{c.dim}</th>
                  {hasFloor && <th scope="col" className="py-3 font-semibold">{c.floor}</th>}
                </tr>
              </thead>
              <tbody>
                {lv.rooms.map((r, k) => (
                  <tr key={`${r.name}-${k}`} className="border-t" style={{ borderColor: LINE }}>
                    <td className="py-3 pr-4 font-semibold">
                      {r.name}
                      {r.note && (
                        <span className="block text-[13px] font-normal" style={{ color: MUTED }}>
                          {sentence(r.note).replace(/\.$/, "")}
                        </span>
                      )}
                    </td>
                    <td className="py-3 pr-4 tabular-nums">{r.dim}</td>
                    {hasFloor && <td className="py-3" style={{ color: MUTED }}>{r.floor}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          ))}
        </Section>
      )}

      {(d?.inclusions || d?.exclusions) && (
        <Section icon={ListChecks} title={c.incl} summary={inclPreview}>
          {d?.inclusions && (
            <p className="text-[15px]" style={{ lineHeight: 1.75, color: INK }}>
              <span className="font-semibold">{lang === "fr" ? `${c.included} : ` : `${c.included}: `}</span>
              {sentence(d.inclusions)}
            </p>
          )}
          {d?.exclusions && (
            <p className="mt-2 text-[15px]" style={{ lineHeight: 1.75, color: MUTED }}>
              <span className="font-semibold" style={{ color: INK }}>{lang === "fr" ? `${c.excluded} : ` : `${c.excluded}: `}</span>
              {sentence(d.exclusions)}
            </p>
          )}
        </Section>
      )}

      {costRows.length > 0 && (
        <Section icon={Receipt} title={c.costs} summary={d?.taxes?.total ? c.taxesSummary(money(d.taxes.total, lang)) : undefined}>
          <Rows rows={costRows} />
        </Section>
      )}
    </div>
  );
};

/* ---------- Calculatrice ---------- */

const minimumDown = (price: number) =>
  price >= 1_500_000 ? price * 0.2 : price <= 500_000 ? price * 0.05 : 25_000 + (price - 500_000) * 0.1;

const insurancePremium = (pct: number, price: number) =>
  price >= 1_500_000 || pct >= 20 ? 0 : pct >= 15 ? 0.028 : pct >= 10 ? 0.031 : 0.04;

const digits = (v: string) => Number(v.replace(/[^\d]/g, "")) || 0;
const fmtInput = (n: number, lang: Lang) =>
  n ? n.toLocaleString(lang === "fr" ? "fr-CA" : "en-CA").replace(/[\u202f\u00a0]/g, " ") : "";

export const MortgageCalculator = ({
  price: listPrice,
  monthlyTaxes,
  monthlyFees,
  lang,
}: {
  price: number;
  monthlyTaxes: number;
  monthlyFees: number;
  lang: Lang;
}) => {
  const c = copy[lang];
  const [price, setPrice] = useState(listPrice);
  const [mode, setMode] = useState<"amount" | "pct">("pct");
  const [downPctText, setDownPctText] = useState("20");
  const [downAmt, setDownAmt] = useState(Math.round(listPrice * 0.2));
  const [rateText, setRateText] = useState(lang === "fr" ? "4,50" : "4.50");
  const [years, setYears] = useState(25);
  const [freq, setFreq] = useState<"m" | "b" | "w">("m");

  const r = useMemo(() => {
    const downPct = Math.min(100, Number(downPctText.replace(",", ".")) || 0);
    const down = mode === "pct" ? (price * downPct) / 100 : downAmt;
    const pct = price ? (down / price) * 100 : 0;
    const min = minimumDown(price);
    const base = Math.max(price - down, 0);
    const prem = insurancePremium(pct, price);
    const loan = base * (1 + prem);
    const rate = Number(rateText.replace(",", ".")) || EXAMPLE_RATE;
    const perYear = freq === "m" ? 12 : freq === "b" ? 26 : 52;
    const i = Math.pow(1 + rate / 200, 2 / perYear) - 1; // intérêt composé semestriellement (Canada)
    const pay = loan ? (loan * i) / (1 - Math.pow(1 + i, -years * perYear)) : 0;
    const monthly = (pay * perYear) / 12;
    return { down, pct, min, prem, insurance: base * prem, loan, pay, monthly, short: price > 0 && down + 0.5 < min };
  }, [price, mode, downPctText, downAmt, rateText, years, freq]);

  const fieldLabel = "text-[14px] font-semibold";
  const pctLabel = (p: number) => {
    const v = Math.round(p * 10) / 10;
    return lang === "fr" ? `${String(v).replace(".", ",")} %` : `${v}%`;
  };

  return (
    <section id="calculatrice" className="mt-10 scroll-mt-28 rounded-[24px] border bg-white p-5 md:p-8" style={{ borderColor: LINE }}>
      <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(1.4rem, 2.2vw, 1.85rem)", color: INK }}>{c.calcTitle}</h2>
      <p className="mt-2 text-[15px]" style={{ color: MUTED, lineHeight: 1.7 }}>{c.calcIntro}</p>

      <div className="mt-6 flex flex-wrap gap-6">
        <div className="grid min-w-0 flex-[999_1_340px] gap-5">
          <div>
            <Label htmlFor="calc-prix" className={fieldLabel}>{c.price}</Label>
            <div className="relative mt-1.5">
              <Input
                id="calc-prix"
                inputMode="numeric"
                value={fmtInput(price, lang)}
                onChange={(e) => setPrice(digits(e.target.value))}
                className="h-12 pr-10 text-[16px] tabular-nums"
              />
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[15px]" style={{ color: MUTED }}>$</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between gap-3">
              <Label htmlFor="calc-mise" className={fieldLabel}>{c.down}</Label>
              <div className="flex overflow-hidden rounded-full border" role="group" aria-label={c.downMode} style={{ borderColor: "rgba(0,14,53,.2)" }}>
                {(["pct", "amount"] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    aria-pressed={mode === m}
                    onClick={() => {
                      if (m === "amount") setDownAmt(Math.round(r.down));
                      else setDownPctText(String(Math.round(r.pct * 10) / 10).replace(".", lang === "fr" ? "," : "."));
                      setMode(m);
                    }}
                    className="h-11 min-w-[48px] px-3 text-[14px] font-semibold"
                    style={mode === m ? { background: INK, color: "#FFFFFF" } : { color: INK }}
                  >
                    {m === "pct" ? "%" : "$"}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative mt-1.5">
              {mode === "pct" ? (
                <Input
                  id="calc-mise"
                  inputMode="decimal"
                  value={downPctText}
                  onChange={(e) => setDownPctText(e.target.value)}
                  className="h-12 pr-10 text-[16px] tabular-nums"
                />
              ) : (
                <Input
                  id="calc-mise"
                  inputMode="numeric"
                  value={fmtInput(downAmt, lang)}
                  onChange={(e) => setDownAmt(digits(e.target.value))}
                  className="h-12 pr-10 text-[16px] tabular-nums"
                />
              )}
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[15px]" style={{ color: MUTED }}>
                {mode === "pct" ? "%" : "$"}
              </span>
            </div>
            <p className="mt-1.5 text-[13px]" style={{ color: r.short ? "#B42318" : MUTED }} aria-live="polite">
              {mode === "pct" ? money(r.down, lang) : pctLabel(r.pct)}
              {r.short && ` · ${c.minDown(money(r.min, lang))}`}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="calc-taux" className={fieldLabel}>{c.rate}</Label>
              <div className="relative mt-1.5">
                <Input
                  id="calc-taux"
                  inputMode="decimal"
                  value={rateText}
                  onChange={(e) => setRateText(e.target.value)}
                  className="h-12 pr-10 text-[16px] tabular-nums"
                />
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[15px]" style={{ color: MUTED }}>%</span>
              </div>
            </div>
            <div>
              <Label htmlFor="calc-amort" className={fieldLabel}>{c.amort}</Label>
              <select
                id="calc-amort"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="mt-1.5 h-12 w-full rounded-md border bg-background px-3 text-[16px]"
                style={{ borderColor: "hsl(var(--input))", color: INK }}
              >
                {[10, 15, 20, 25, 30].map((y) => (
                  <option key={y} value={y}>{c.years(y)}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <p className={fieldLabel} id="calc-freq" style={{ color: INK }}>{c.freq}</p>
            <div className="mt-2 flex flex-wrap gap-2" role="group" aria-labelledby="calc-freq">
              <Pill on={freq === "m"} onClick={() => setFreq("m")}>{c.monthly}</Pill>
              <Pill on={freq === "b"} onClick={() => setFreq("b")}>{c.biweekly}</Pill>
              <Pill on={freq === "w"} onClick={() => setFreq("w")}>{c.weekly}</Pill>
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-[1_1_260px] flex-col rounded-[20px] p-6 text-white" style={{ background: INK }}>
          <p className="text-[13px] font-semibold" style={{ color: "rgba(255,255,255,.78)" }}>{c.pay[freq]}</p>
          <p
            className="mt-1.5 tabular-nums"
            aria-live="polite"
            style={{ fontFamily: "var(--display)", fontSize: "42px", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.02em" }}
          >
            {money(r.pay, lang)}
          </p>
          <dl className="mt-5 border-t text-[14px]" style={{ borderColor: "rgba(255,255,255,.18)" }}>
            <div className="flex justify-between gap-3 py-2.5">
              <dt style={{ color: "rgba(255,255,255,.78)" }}>{c.loan}</dt>
              <dd className="whitespace-nowrap font-semibold tabular-nums">{money(r.loan, lang)}</dd>
            </div>
            <div className="flex justify-between gap-3 border-t py-2.5" style={{ borderColor: "rgba(255,255,255,.12)" }}>
              <dt style={{ color: "rgba(255,255,255,.78)" }}>{c.insurance}</dt>
              <dd className="whitespace-nowrap font-semibold tabular-nums">{r.prem ? money(r.insurance, lang) : c.none}</dd>
            </div>
            {monthlyTaxes > 0 && (
              <div className="flex justify-between gap-3 border-t py-2.5" style={{ borderColor: "rgba(255,255,255,.12)" }}>
                <dt style={{ color: "rgba(255,255,255,.78)" }}>{monthlyFees > 0 ? c.withTaxesFees : c.withTaxes}</dt>
                <dd className="whitespace-nowrap font-semibold tabular-nums">{money(r.monthly + monthlyTaxes + monthlyFees, lang)}</dd>
              </div>
            )}
          </dl>
          <Button asChild size="lg" className="mt-6 w-full">
            <a href={c.talkHref}>{c.talk}</a>
          </Button>
        </div>
      </div>
      <p className="mt-5 text-[12px]" style={{ lineHeight: 1.6, color: MUTED }}>{c.disclaimer}</p>
    </section>
  );
};
