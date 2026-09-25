/**
 * IndexNow : soumission automatique à Bing après chaque déploiement de
 * production réussi. Logique et documentation complètes dans ./lib.js.
 * Ce fichier ne doit exporter QUE des événements Netlify (ex. onSuccess).
 */
import { run } from "./lib.js";

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
