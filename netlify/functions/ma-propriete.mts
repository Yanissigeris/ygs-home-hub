// Suivi de valeur, page privée « Ma propriété » (Netlify Functions + Netlify Blobs).
//
// GET  /.netlify/functions/ma-propriete?c=<jeton>
//      Renvoie les données de la page d'un client : sa fourchette approuvée
//      par Yanis et les chiffres du marché de son secteur (baromètre APCIQ).
//      Le jeton « demo » renvoie un exemple fictif, sans rien lire.
// POST /.netlify/functions/ma-propriete   (en-tête x-sv-key = SV_ADMIN_KEY)
//      Écriture réservée au poste central de Yanis : fiche d'un client,
//      chiffres du marché, retrait d'un client.
//
// Secret requis dans Netlify pour l'écriture : SV_ADMIN_KEY. Sans lui, la
// lecture de l'exemple fonctionne, mais aucune écriture n'est acceptée.
// Aucune donnée personnelle n'est écrite dans les journaux.

import { getStore } from "@netlify/blobs";

const FUNCTION_VERSION = "2026-11-13-v1";
const STORE = "suivi-valeur";
const TOKEN_PATTERN = /^[A-Za-z0-9_-]{24,64}$/;
const QUARTER_PATTERN = /^T[1-4] 20\d\d$/;

interface MarketRow {
  t: string; // « T3 2026 »
  secteur: string;
  type: string;
  med: number;
  ventes: number;
}
interface Range {
  basse: number;
  haute: number;
}
interface ClientDoc {
  prenom: string;
  langue: "vous" | "tu" | "en";
  adresse: string;
  secteur: string; // secteur de la propriété
  secteurIndice: string; // secteur dont on suit le marché (peut être un regroupement)
  type: string; // « Unifamiliale » | « Copropriété »
  frequence: string;
  depart: Range & { date: string; trimestre: string };
  actuel: (Range & { trimestre: string; approuveLe: string }) | null;
  lecture?: string;
  historique?: Array<Range & { trimestre: string; date: string }>;
  maj?: string;
}

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

const qn = (t: string): number => {
  const m = /^T([1-4]) (20\d\d)$/.exec(t);
  return m ? Number(m[2]) * 4 + Number(m[1]) : 0;
};
const isMoney = (n: unknown): n is number =>
  typeof n === "number" && Number.isFinite(n) && n >= 50_000 && n <= 10_000_000;
const isDate = (s: unknown): s is string => typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s);
const clean = (s: unknown, max: number): string =>
  typeof s === "string" ? s.replace(/[<>]/g, "").trim().slice(0, max) : "";

// Lecture limitée par adresse IP (par instance) : 60 lectures par 10 minutes.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_READS = 60;
const hits = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  for (const [key, stamps] of hits) {
    if (stamps.every((ts) => now - ts >= WINDOW_MS)) hits.delete(key);
  }
  const recent = (hits.get(ip) ?? []).filter((ts) => now - ts < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_READS;
}

// Exemple fictif. La propriété et la fourchette sont inventées pour la
// démonstration. Les chiffres du marché sont ceux du baromètre de l'APCIQ
// pour les unifamiliales d'Aylmer (T3 2025 au T3 2026).
const DEMO_MARKET: MarketRow[] = [
  { t: "T3 2025", secteur: "Gatineau (Aylmer)", type: "Unifamiliale", med: 560000, ventes: 683 },
  { t: "T4 2025", secteur: "Gatineau (Aylmer)", type: "Unifamiliale", med: 560000, ventes: 670 },
  { t: "T1 2026", secteur: "Gatineau (Aylmer)", type: "Unifamiliale", med: 555000, ventes: 670 },
  { t: "T2 2026", secteur: "Gatineau (Aylmer)", type: "Unifamiliale", med: 550000, ventes: 661 },
  { t: "T3 2026", secteur: "Gatineau (Aylmer)", type: "Unifamiliale", med: 549400, ventes: 616 },
];
function demoClient(langue: ClientDoc["langue"]): ClientDoc {
  return {
    prenom: "Alex",
    langue,
    adresse: langue === "en" ? "Sample address, Aylmer" : "Adresse d'exemple, Aylmer",
    secteur: "Gatineau (Aylmer)",
    secteurIndice: "Gatineau (Aylmer)",
    type: "Unifamiliale",
    frequence: "C",
    depart: { basse: 540000, haute: 560000, date: "2025-11-10", trimestre: "T3 2025" },
    actuel: { basse: 530000, haute: 550000, trimestre: "T3 2026", approuveLe: "2026-11-13" },
    lecture: "",
    historique: [],
  };
}

function seriesFor(rows: MarketRow[], doc: ClientDoc) {
  const from = qn(doc.depart.trimestre);
  return rows
    .filter((r) => r.secteur === doc.secteurIndice && r.type === doc.type && qn(r.t) >= from)
    .sort((a, b) => qn(a.t) - qn(b.t))
    .map((r) => ({ t: r.t, med: r.med, ventes: r.ventes }));
}

function validClient(d: unknown): ClientDoc | null {
  if (!d || typeof d !== "object") return null;
  const x = d as Record<string, unknown>;
  const dep = x.depart as Record<string, unknown> | undefined;
  const act = x.actuel as Record<string, unknown> | null | undefined;
  if (!dep || !isMoney(dep.basse) || !isMoney(dep.haute) || dep.haute < dep.basse) return null;
  if (!isDate(dep.date) || typeof dep.trimestre !== "string" || !QUARTER_PATTERN.test(dep.trimestre)) return null;
  let actuel: ClientDoc["actuel"] = null;
  if (act) {
    if (!isMoney(act.basse) || !isMoney(act.haute) || act.haute < act.basse) return null;
    if (typeof act.trimestre !== "string" || !QUARTER_PATTERN.test(act.trimestre) || !isDate(act.approuveLe)) return null;
    actuel = { basse: act.basse, haute: act.haute, trimestre: act.trimestre, approuveLe: act.approuveLe };
  }
  const langue = x.langue === "tu" || x.langue === "en" ? x.langue : "vous";
  const type = clean(x.type, 30);
  const secteur = clean(x.secteur, 80);
  const secteurIndice = clean(x.secteurIndice, 80) || secteur;
  const prenom = clean(x.prenom, 40);
  const adresse = clean(x.adresse, 140);
  if (!prenom || !adresse || !secteur || !type) return null;
  const historique = Array.isArray(x.historique)
    ? (x.historique as Array<Record<string, unknown>>)
        .filter((h) => h && isMoney(h.basse) && isMoney(h.haute) && isDate(h.date) && typeof h.trimestre === "string")
        .slice(-12)
        .map((h) => ({
          basse: h.basse as number,
          haute: h.haute as number,
          date: h.date as string,
          trimestre: clean(h.trimestre, 10),
        }))
    : [];
  return {
    prenom,
    langue,
    adresse,
    secteur,
    secteurIndice,
    type,
    frequence: clean(x.frequence, 20) || "C",
    depart: { basse: dep.basse, haute: dep.haute, date: dep.date, trimestre: dep.trimestre },
    actuel,
    lecture: clean(x.lecture, 400),
    historique,
    maj: new Date().toISOString(),
  };
}

function validMarket(d: unknown): MarketRow[] | null {
  if (!Array.isArray(d) || d.length === 0 || d.length > 2000) return null;
  const out: MarketRow[] = [];
  for (const r of d as Array<Record<string, unknown>>) {
    if (!r || typeof r.t !== "string" || !QUARTER_PATTERN.test(r.t)) return null;
    if (!isMoney(r.med) || typeof r.ventes !== "number" || !(r.ventes >= 0)) return null;
    const secteur = clean(r.secteur, 80);
    const type = clean(r.type, 30);
    if (!secteur || !type) return null;
    out.push({ t: r.t, secteur, type, med: r.med, ventes: r.ventes });
  }
  return out;
}

// Comparaison en temps constant, pour ne rien révéler de la clé.
function sameKey(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export default async (req: Request, context: { ip?: string }): Promise<Response> => {
  try {
    const url = new URL(req.url);

    if (req.method === "GET") {
      const token = url.searchParams.get("c") ?? "";
      if (!token) return json({ ok: true, version: FUNCTION_VERSION }, 200);

      if (token === "demo") {
        const l = url.searchParams.get("l");
        const doc = demoClient(l === "en" || l === "tu" ? l : "vous");
        return json({ ok: true, demo: true, client: doc, marche: seriesFor(DEMO_MARKET, doc) }, 200);
      }

      if (!TOKEN_PATTERN.test(token)) return json({ ok: false, erreur: "introuvable" }, 404);
      if (rateLimited(context.ip ?? "unknown")) return json({ ok: false, erreur: "trop" }, 429);

      const store = getStore({ name: STORE, consistency: "strong" });
      const doc = (await store.get(`clients/${token}`, { type: "json" })) as ClientDoc | null;
      if (!doc) return json({ ok: false, erreur: "introuvable" }, 404);
      const rows = ((await store.get("marche", { type: "json" })) as MarketRow[] | null) ?? [];
      return json({ ok: true, client: doc, marche: seriesFor(rows, doc) }, 200);
    }

    if (req.method === "POST") {
      const adminKey = process.env.SV_ADMIN_KEY?.trim() ?? "";
      if (adminKey.length < 32) return json({ ok: false, erreur: "ecriture non configuree" }, 503);
      if (!sameKey(req.headers.get("x-sv-key") ?? "", adminKey)) return json({ ok: false, erreur: "refuse" }, 401);

      const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
      if (!body) return json({ ok: false, erreur: "corps invalide" }, 400);
      const store = () => getStore({ name: STORE, consistency: "strong" });

      if (body.op === "marche") {
        const rows = validMarket(body.data);
        if (!rows) return json({ ok: false, erreur: "marche invalide" }, 400);
        await store().setJSON("marche", rows);
        return json({ ok: true, lignes: rows.length }, 200);
      }

      const token = typeof body.token === "string" ? body.token : "";
      if (!TOKEN_PATTERN.test(token)) return json({ ok: false, erreur: "jeton invalide" }, 400);

      if (body.op === "client") {
        const doc = validClient(body.data);
        if (!doc) return json({ ok: false, erreur: "fiche invalide" }, 400);
        await store().setJSON(`clients/${token}`, doc);
        return json({ ok: true }, 200);
      }
      if (body.op === "retirer") {
        await store().delete(`clients/${token}`);
        return json({ ok: true }, 200);
      }
      return json({ ok: false, erreur: "operation inconnue" }, 400);
    }

    return json({ ok: false, erreur: "methode" }, 405);
  } catch (error: unknown) {
    // Métadonnées seulement, jamais de données personnelles.
    console.error("ma-propriete error:", error instanceof Error ? error.name : "unknown");
    return json({ ok: false, erreur: "serveur" }, 500);
  }
};
