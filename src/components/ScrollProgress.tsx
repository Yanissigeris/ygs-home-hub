import { useState, useEffect, useRef } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
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
        top: 70,
        height: 2,
        width: `${progress}%`,
        background: "var(--gold)",
        transition: "width .1s linear",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
