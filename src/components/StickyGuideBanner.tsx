import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GuideModal, { type GuideType } from "@/components/GuideModal";
import { trackCTAClick } from "@/lib/analytics";

interface StickyGuideBannerProps {
  guideType: GuideType;
  label: string;
  lang?: "fr" | "en";
}

const StickyGuideBanner = ({ guideType, label, lang = "fr" }: StickyGuideBannerProps) => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const btnLabel = lang === "en" ? "Get it" : "Recevoir";
  const closeLabel = lang === "en" ? "Close" : "Fermer";

  useEffect(() => {
    const onScroll = () => {
      if (dismissed) return;
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  const handleDismiss = () => { setDismissed(true); setVisible(false); };

  return (
    <>
      <AnimatePresence>
        {visible && !dismissed && (
          <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="fixed bottom-0 inset-x-0 z-50 pointer-events-none">
            <div className="pointer-events-auto mx-auto max-w-2xl px-4 pb-4">
              <div className="flex items-center gap-3 rounded-2xl border border-accent/20 bg-primary px-4 py-3 shadow-[0_8px_32px_-8px_hsl(200_30%_14%/0.35)]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/15"><BookOpen size={16} className="text-accent" /></div>
                <p className="flex-1 text-[0.8125rem] font-medium text-primary-foreground leading-snug">{label}</p>
                <Button variant="accent" size="sm" className="shrink-0 font-semibold" onClick={() => { trackCTAClick(btnLabel, "sticky-guide-banner"); setModalOpen(true); }}>
                  {btnLabel}<ArrowRight size={13} className="ml-1" />
                </Button>
                <button onClick={handleDismiss} className="shrink-0 rounded-lg p-1.5 text-primary-foreground/40 hover:text-primary-foreground/70 hover:bg-white/5 transition-colors" aria-label={closeLabel}>
                  <X size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <GuideModal open={modalOpen} onOpenChange={setModalOpen} guideType={guideType} lang={lang} />
    </>
  );
};

export default StickyGuideBanner;
