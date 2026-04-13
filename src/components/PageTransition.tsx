import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];
const DURATION = 0.6; // seconds for route transitions
const INITIAL_DURATION = 0.4; // seconds for first-visit loader

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [phase, setPhase] = useState<"idle" | "cover" | "reveal">("idle");
  const isFirstRender = useRef(true);
  const [initialDone, setInitialDone] = useState(false);

  // Initial load overlay (400ms)
  useEffect(() => {
    // Check if BrandedLoader already handled this session
    try {
      if (sessionStorage.getItem("ygs_loader_seen")) {
        setInitialDone(true);
        isFirstRender.current = false;
        return;
      }
    } catch {}

    isFirstRender.current = false;
    const timer = setTimeout(() => {
      setInitialDone(true);
    }, 50); // BrandedLoader handles the real initial load
    return () => clearTimeout(timer);
  }, []);

  // Route change → trigger overlay
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (location.pathname === displayLocation.pathname) return;

    // Start cover phase
    setPhase("cover");
  }, [location.pathname, displayLocation.pathname]);

  const onCoverComplete = useCallback(() => {
    // Overlay is fully covering — swap content
    setDisplayLocation(location);
    window.scrollTo(0, 0);
    // Small delay to let React render new page behind overlay
    requestAnimationFrame(() => {
      setPhase("reveal");
    });
  }, [location]);

  const onRevealComplete = useCallback(() => {
    setPhase("idle");
  }, []);

  return (
    <>
      {/* Page content — always rendered, keyed by displayLocation */}
      <motion.div
        key={displayLocation.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: phase === "reveal" ? 0.15 : 0 }}
      >
        {children}
      </motion.div>

      {/* Overlay */}
      <AnimatePresence>
        {phase !== "idle" && (
          <motion.div
            key="page-overlay"
            initial={{ y: "100%" }}
            animate={phase === "cover" ? { y: "0%" } : { y: "-100%" }}
            transition={{ duration: DURATION, ease: EASE }}
            onAnimationComplete={() => {
              if (phase === "cover") onCoverComplete();
              if (phase === "reveal") onRevealComplete();
            }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "#17303B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
            aria-hidden="true"
          >
            {/* YGS logo mark */}
            <motion.span
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: 0.1, ease: "easeOut" }}
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(2rem, 5vw, 2.8rem)",
                fontWeight: 600,
                color: "#F7F4EE",
                letterSpacing: ".04em",
                userSelect: "none",
              }}
            >
              YGS
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PageTransition;