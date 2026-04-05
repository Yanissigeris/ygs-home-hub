import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const NavigationProgress = () => {
  const { pathname } = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const prevPath = useRef(pathname);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const rafId = useRef<ReturnType<typeof requestAnimationFrame>>();

  useEffect(() => {
    if (pathname === prevPath.current) return;
    prevPath.current = pathname;

    // Start
    setVisible(true);
    setProgress(0);

    // Fake progress to 85%
    let current = 0;
    const step = () => {
      current += (85 - current) * 0.1;
      if (current < 84) {
        setProgress(current);
        rafId.current = requestAnimationFrame(step);
      } else {
        setProgress(85);
      }
    };
    rafId.current = requestAnimationFrame(step);

    // Complete after a tick (page is already rendered by now)
    timer.current = setTimeout(() => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      setProgress(100);
      setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 300);
    }, 150);

    return () => {
      if (timer.current) clearTimeout(timer.current);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [pathname]);

  if (!visible && progress === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9998,
        height: 2,
        width: `${progress}%`,
        background: "var(--gold)",
        boxShadow: "0 0 8px rgba(168,138,90,.6)",
        transition: "width .3s ease",
        opacity: visible ? 1 : 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
};

export default NavigationProgress;
