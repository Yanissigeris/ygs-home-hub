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

/** Fire a GA4 custom event */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window.gtag === "function") {
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
