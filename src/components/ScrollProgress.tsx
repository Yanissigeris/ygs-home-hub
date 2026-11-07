import { useState, useEffect, useRef } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  // Collée sous l'en-tête, dont la hauteur change au défilement.
  const [top, setTop] = useState(70);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
ticking.current = true;
requestAnimationFrame(() => {
  const scrollEl = document.scrollingElement || document.documentElement;
  const scrolled = window.scrollY || scrollEl.scrollTop;
  const total = Math.max(
    scrollEl.scrollHeight - scrollEl.clientHeight,
    document.body.scrollHeight - window.innerHeight,
    1
  );
  setProgress(total > 0 ? (scrolled / total) * 100 : 0);
  const header = document.querySelector("header");
  if (header) setTop(Math.max(0, Math.round(header.getBoundingClientRect().bottom)));
  ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed left-0 z-[199] md:hidden"
      style={{
        top,
        height: 2,
        width: "100%",
        transform: `scaleX(${progress / 100})`,
        transformOrigin: "left",
        background: "var(--ink)",
        transition: "transform .1s linear",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
