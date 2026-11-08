import { useState, useEffect } from "react";
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
  // Ajouté à la page seulement la première fois qu'il doit paraître (le HTML
  // enregistré reste le même), puis gardé pour pouvoir glisser vers le bas en sortant.
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);
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

  const wantShown = visible && !dismissed;
  useEffect(() => {
    if (wantShown && !mounted) { setMounted(true); return; }
    if (!mounted) return;
    // Une image plus tard, pour que le navigateur parte de la position cachée.
    const id = requestAnimationFrame(() => setShown(wantShown));
    return () => cancelAnimationFrame(id);
  }, [wantShown, mounted]);

  const handleDismiss = () => { setDismissed(true); setVisible(false); };

  return (
    <>
      <span data-sticky-guide-banner="true" hidden aria-hidden="true" />
      {mounted && (
          <div
            className="fixed bottom-0 inset-x-0 z-50 pointer-events-none"
            aria-hidden={!shown}
            style={{
              transform: shown ? "translateY(0)" : "translateY(calc(100% + 16px))",
              opacity: shown ? 1 : 0,
              visibility: shown ? "visible" : "hidden",
              transition: shown
                ? "transform 320ms cubic-bezier(0.32, 0.72, 0, 1), opacity 200ms ease, visibility 0s"
                : "transform 200ms ease-out, opacity 200ms ease, visibility 0s linear 200ms",
            }}
          >
            <div className="pointer-events-auto mx-auto max-w-2xl px-4 pb-4">
              <div className="flex items-center gap-3 rounded-2xl border border-[rgba(247,244,238,0.12)] bg-primary px-4 py-3 shadow-[0_8px_32px_-8px_hsl(226_60%_12%/0.35)]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[rgba(247,244,238,0.08)]"><BookOpen size={16} className="text-[rgba(247,244,238,0.75)]" /></div>
                <p className="flex-1 text-[0.8125rem] font-medium text-primary-foreground leading-snug">{label}</p>
                <Button variant="accent" size="sm" className="shrink-0 font-semibold" onClick={() => { trackCTAClick(btnLabel, "sticky-guide-banner"); setModalOpen(true); }}>
                  {btnLabel}<ArrowRight size={13} className="ml-1" />
                </Button>
                <button onClick={handleDismiss} className="shrink-0 rounded-lg p-1.5 text-primary-foreground/40 hover:text-primary-foreground/70 hover:bg-white/5 transition-colors" aria-label={closeLabel}>
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
      )}
      <GuideModal open={modalOpen} onOpenChange={setModalOpen} guideType={guideType} lang={lang} />
    </>
  );
};

export default StickyGuideBanner;
