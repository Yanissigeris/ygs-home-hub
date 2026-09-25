/**
 * IndexNow — soumission automatique à Bing (et moteurs partenaires)
 * après chaque déploiement de production réussi.
 *
 * - Événement onSuccess : s'exécute une fois le déploiement en ligne,
 *   donc Bing ne peut jamais explorer l'ancienne version d'une page.
 * - Source des URLs : dist/sitemap.xml généré par scripts/prerender.mjs.
 *   Seules les URLs dont le <lastmod> date des WINDOW_DAYS derniers jours
 *   sont soumises.
 * - Clé : détectée automatiquement dans le dossier publié (fichier
 *   <32 hex>.txt dont le contenu est identique au nom), donc aucune clé
 *   dupliquée dans le code.
 * - Hors production (deploy-preview, branch-deploy) ou avec
 *   INDEXNOW_DRY_RUN=1 : affiche ce qui serait envoyé, sans rien envoyer.
 * - Aucune erreur ici ne peut faire échouer le build ni le déploiement.
 */
import { promises as fs } from "node:fs";
import path from "node:path";

const HOST = "yanisgauthier.com";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const WINDOW_DAYS = 2;

async function findKey(publishDir) {
  const files = await fs.readdir(publishDir);
  for (const f of files) {
    const m = f.match(/^([a-f0-9]{32})\.txt$/i);
    if (!m) continue;
    const body = (await fs.readFile(path.join(publishDir, f), "utf8")).trim();
    if (body === m[1]) return m[1];
  }
  return null;
}

export function selectRecentUrls(sitemapXml, today = new Date(), windowDays = WINDOW_DAYS) {
  const cutoff = new Date(today);
  cutoff.setUTCDate(cutoff.getUTCDate() - windowDays);
  const cutoffStr = cutoff.toISOString().slice(0, 10);
  const urls = [];
  for (const block of sitemapXml.match(/<url>[\s\S]*?<\/url>/g) || []) {
    const loc = block.match(/<loc>\s*([^<\s]+)\s*<\/loc>/)?.[1];
    const lastmod = block.match(/<lastmod>\s*([^<\s]+)\s*<\/lastmod>/)?.[1];
    if (!loc || !lastmod) continue;
    if (new URL(loc).hostname !== HOST) continue;
    if (lastmod.slice(0, 10) >= cutoffStr) urls.push(loc);
  }
  return [...new Set(urls)];
}

export async function run({ publishDir, context, dryRun, log = console.log }) {
  const key = await findKey(publishDir);
  if (!key) return { status: "skipped", reason: "fichier de clé IndexNow introuvable dans le dossier publié" };

  const xml = await fs.readFile(path.join(publishDir, "sitemap.xml"), "utf8");
  const urlList = selectRecentUrls(xml);
  if (urlList.length === 0) return { status: "skipped", reason: `aucune URL modifiée dans les ${WINDOW_DAYS} derniers jours` };

  const payload = {
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${key}.txt`,
    urlList: urlList.slice(0, 10000),
  };

  if (dryRun || context !== "production") {
    log(`[IndexNow] Simulation (${context || "local"}) — ${urlList.length} URL(s) seraient soumises :`);
    urlList.forEach((u) => log(`  ${u}`));
    return { status: "dry-run", count: urlList.length, payload };
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(15000),
  });
  // 200 = reçu et clé validée ; 202 = reçu, validation de la clé en attente.
  if (res.status === 200 || res.status === 202) {
    return { status: "sent", count: urlList.length, http: res.status };
  }
  return { status: "rejected", count: urlList.length, http: res.status, body: (await res.text()).slice(0, 300) };
}

export const onSuccess = async ({ constants, utils }) => {
  try {
    const result = await run({
      publishDir: constants.PUBLISH_DIR,
      context: process.env.CONTEXT,
      dryRun: process.env.INDEXNOW_DRY_RUN === "1",
    });
    const summary =
      result.status === "sent" ? `${result.count} URL(s) soumises à IndexNow (HTTP ${result.http})`
      : result.status === "dry-run" ? `Simulation : ${result.count} URL(s) auraient été soumises`
      : result.status === "skipped" ? `Rien à soumettre : ${result.reason}`
      : `IndexNow a refusé la soumission (HTTP ${result.http}) : ${result.body}`;
    console.log(`[IndexNow] ${summary}`);
    utils.status.show({ title: "IndexNow", summary });
  } catch (error) {
    // Ne jamais bloquer : le site est déjà en ligne à ce stade.
    console.warn(`[IndexNow] Avertissement, soumission non effectuée : ${error.message}`);
  }
};
