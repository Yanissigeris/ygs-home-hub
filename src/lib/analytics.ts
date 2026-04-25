/**
 * GA4 event helpers — thin wrapper around gtag().
 * Safe to call even if gtag hasn't loaded yet (guards with typeof check).
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type FormType = "contact" | "valuation" | "guide";

/**
 * Debug mode for analytics.
 * Active when:
 *   - import.meta.env.DEV is true (Vite dev server), OR
 *   - localStorage.setItem("analytics_debug", "1") has been set (any env, useful in preview/prod QA)
 */
function isAnalyticsDebugEnabled(): boolean {
  try {
    if (import.meta.env?.DEV) return true;
    if (typeof window !== "undefined" && window.localStorage?.getItem("analytics_debug") === "1") {
      return true;
    }
  } catch {
    // localStorage may throw in sandboxed contexts — fail closed
  }
  return false;
}

/** Fire a GA4 custom event */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (isAnalyticsDebugEnabled()) {
    const gtagReady = typeof window !== "undefined" && typeof window.gtag === "function";
    // eslint-disable-next-line no-console
    console.info(
      `%c[analytics]%c ${eventName}`,
      "color:#fff;background:#17303B;padding:2px 6px;border-radius:3px;font-weight:600",
      "color:#17303B;font-weight:600",
      { params: params ?? {}, gtagReady },
    );
  }

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

/** Track successful form submission */
export function trackFormSubmission(formType: FormType, extra?: Record<string, string>) {
  trackEvent("generate_lead", {
    form_type: formType,
    ...extra,
  });
}

/** Track CTA click */
export function trackCTAClick(ctaLabel: string, location: string) {
  trackEvent("cta_click", { cta_label: ctaLabel, location });
}

/** Track guide download request */
export function trackGuideRequest(guideTitle: string) {
  trackEvent("guide_request", { guide_title: guideTitle });
}
