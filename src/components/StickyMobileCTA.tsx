import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

/** Pages where the sticky CTA should NOT appear (already have their own form) */
const HIDDEN_PATHS = [
  "/evaluation-gratuite-gatineau",
  "/en/home-valuation",
  "/contact-yanis",
  "/en/contact",
  "/merci",
  "/en/thank-you",
  "/merci-evaluation",
  "/en/thank-you-valuation",
];

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { pathname } = useLocation();

  const isEn = pathname.startsWith("/en");
  const label = isEn ? "Free Home Valuation" : "Évaluation gratuite";
  const href = isEn ? "/en/home-valuation" : "/evaluation-gratuite-gatineau";

  const isHidden = HIDDEN_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"));

  useEffect(() => {
    setDismissed(false);
  }, [pathname]);

  useEffect(() => {
    if (isHidden || dismissed) {
      setVisible(false);
      return;
    }
    const onScroll = () => {
      if (dismissed) return;
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed, isHidden]);

  if (isHidden) return null;

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 72, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 72, opacity: 0 }}
          transition={{ type: "spring", stiffness: 340, damping: 28 }}
          className="fixed bottom-0 inset-x-0 z-50 md:hidden pointer-events-none"
        >
          <div className="pointer-events-auto px-3 pb-3">
            <div className="flex items-center gap-2 rounded-2xl border border-accent/20 bg-primary px-3 py-2.5 shadow-[0_-4px_24px_-8px_hsl(200_30%_14%/0.4)]">
              <Button
                variant="accent"
                size="default"
                className="flex-1 font-semibold text-[0.875rem] h-11"
                asChild
                onClick={() => trackCTAClick(label, "sticky-mobile-cta")}
              >
                <Link to={href}>
                  {label}
                  <ArrowRight size={14} className="ml-1.5" />
                </Link>
              </Button>
              <button
                onClick={() => setDismissed(true)}
                className="shrink-0 rounded-lg p-1.5 text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors"
                aria-label={isEn ? "Close" : "Fermer"}
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
