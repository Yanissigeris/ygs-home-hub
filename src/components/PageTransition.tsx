import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Lightweight CSS-only page transition.
 *
 * Replaces the previous framer-motion + AnimatePresence implementation that
 * ran on every route mount and added ~30-80ms TBT on desktop (parsing
 * AnimatePresence + motion components for an overlay rarely visible).
 *
 * Behavior is identical from the user's POV:
 *   - First load: no overlay (no overlay needed)
 *   - Route change: dark overlay slides up over content (cover), swaps page,
 *     then slides off the top (reveal)
 */
const COVER_MS = 350;
const REVEAL_DELAY_MS = 30; // let new page render behind overlay

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [phase, setPhase] = useState<"idle" | "cover" | "reveal">("idle");
  const isFirstRender = useRef(true);
  const coverTimer = useRef<ReturnType<typeof setTimeout>>();
  const revealTimer = useRef<ReturnType<typeof setTimeout>>();
  const cleanupTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (location.pathname === displayLocation.pathname) return;

    setPhase("cover");

    coverTimer.current = setTimeout(() => {
      setDisplayLocation(location);
      window.scrollTo(0, 0);
      revealTimer.current = setTimeout(() => {
        setPhase("reveal");
        cleanupTimer.current = setTimeout(() => setPhase("idle"), COVER_MS);
      }, REVEAL_DELAY_MS);
    }, COVER_MS);

    return () => {
      if (coverTimer.current) clearTimeout(coverTimer.current);
      if (revealTimer.current) clearTimeout(revealTimer.current);
      if (cleanupTimer.current) clearTimeout(cleanupTimer.current);
    };
  }, [location.pathname, displayLocation.pathname, location]);

  return (
    <>
      <div key={displayLocation.pathname} className="page-fade-in">
        {children}
      </div>

      {phase !== "idle" && (
        <div
          className={phase === "cover" ? "ygs-page-overlay cover" : "ygs-page-overlay reveal"}
          aria-hidden="true"
        >
          <span className="ygs-page-overlay__mark">YGS</span>
        </div>
      )}
    </>
  );
};

export default PageTransition;
