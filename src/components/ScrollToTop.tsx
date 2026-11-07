import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only scroll on PUSH (link click) or REPLACE navigation.
    // POP (back/forward) keeps the browser's native scroll restoration.
    if (navigationType === "POP") return;
    const root = document.documentElement;
    const jump = (y: number) => {
      const prev = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, y);
      root.style.scrollBehavior = prev;
    };
    if (!hash) {
      jump(0);
      return;
    }
    // Link to a section (ex. /acheter-a-gatineau/#calculateurs): the page is
    // lazy-loaded, so wait for the target to exist before scrolling to it.
    let id = "";
    try { id = decodeURIComponent(hash.slice(1)); } catch { id = hash.slice(1); }
    let tries = 0;
    let timer = 0;
    const find = () => {
      const el = id ? document.getElementById(id) : null;
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        jump(Math.max(0, top));
        return;
      }
      if (tries === 0) jump(0);
      if (++tries < 40) timer = window.setTimeout(find, 75);
    };
    find();
    return () => window.clearTimeout(timer);
  }, [pathname, hash, navigationType]);

  return null;
};

export default ScrollToTop;
