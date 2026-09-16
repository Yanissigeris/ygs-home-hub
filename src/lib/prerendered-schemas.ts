/**
 * Initial HTML keeps these schemas for no-JS readers. Before React mounts,
 * hand their ownership to the route components, whose effect cleanup removes
 * them when navigating away. Global identity schemas are left untouched.
 */
export function releasePrerenderedSchemas() {
  const routeTypes = new Set(["BlogPosting", "FAQPage", "HowTo"]);
  document.querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]').forEach((script) => {
    try {
      const schema = JSON.parse(script.textContent || "null");
      if (schema && routeTypes.has(schema["@type"])) script.remove();
    } catch {
      // Unrelated malformed markup is not ours to change.
    }
  });
}
