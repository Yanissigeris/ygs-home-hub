import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only scroll to top on PUSH (link click) or REPLACE navigation.
    // POP (back/forward) keeps the browser's native scroll restoration.
    if (navigationType !== "POP") {
      const root = document.documentElement;
      const prev = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
      root.style.scrollBehavior = prev;
    }
  }, [pathname, navigationType]);

  return null;
};

export default ScrollToTop;
