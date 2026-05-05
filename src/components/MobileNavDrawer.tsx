import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import LanguageSwitch from "@/components/LanguageSwitch";
import type { NavItem, NavChild } from "@/data/navigation";
import { useState } from "react";

const ChevronDownIcon = ({ size = 11, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
);

const MobileNavGroup = ({ item, pathname, onNavigate }: { item: NavItem; pathname: string; onNavigate: () => void }) => {
  const [expanded, setExpanded] = useState(false);

  if (!item.children && !item.columns) {
    return (
      <Link to={item.href!} onClick={onNavigate} className="block px-6 py-3.5 text-[.9rem] font-medium transition-colors" style={{ color: pathname === item.href ? "var(--ink)" : "var(--muted)", borderBottom: "1px solid var(--border)", minHeight: 44 }}>
        {item.label}
      </Link>
    );
  }

  const sections: { title?: string; links: NavChild[] }[] = item.columns
    ? item.columns.map((c) => ({ title: c.title, links: c.links }))
    : [{ links: item.children! }];

  return (
    <div style={{ borderBottom: "1px solid var(--border)" }}>
      <button onClick={() => setExpanded((p) => !p)} className="flex w-full items-center justify-between px-6 py-3.5 text-[.9rem] font-medium transition-colors" style={{ color: "var(--muted)", minHeight: 44 }} aria-expanded={expanded}>
        {item.label}
        <ChevronDownIcon size={14} className={`opacity-35 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-250 ease-out ${expanded ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="pb-2 pl-3">
          {sections.map((sec, idx) => (
            <div key={sec.title ?? idx} className={idx > 0 ? "mt-2 pt-2" : ""} style={idx > 0 ? { borderTop: "1px solid var(--border)" } : undefined}>
              {sec.title && (
                <div className="px-6 pt-1 pb-1.5" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, color: "var(--gold)" }}>
                  {sec.title}
                </div>
              )}
              {sec.links.map((child) => (
                <Link key={child.href} to={child.href} onClick={onNavigate} className="block px-6 py-2.5 text-[.86rem] transition-colors" style={{ color: pathname === child.href ? "var(--ink)" : "var(--muted)", fontWeight: pathname === child.href ? 600 : 400, minHeight: 44 }}>
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface Props {
  open: boolean;
  nav: NavItem[];
  pathname: string;
  ariaLabel: string;
  ctaHref: string;
  ctaLabel: string;
  closeMenu: () => void;
}

const MobileNavDrawer = ({ open, nav, pathname, ariaLabel, ctaHref, ctaLabel, closeMenu }: Props) => (
  <AnimatePresence>
    {open && (
      <motion.div
        id="mobile-navigation"
        role="navigation"
        aria-label={ariaLabel}
        className="lg:hidden overflow-y-auto"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        style={{
          maxHeight: "calc(100dvh - 80px)",
          borderTop: "1px solid var(--border)",
          background: "var(--cream)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div>
          {nav.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <MobileNavGroup item={item} pathname={pathname} onNavigate={closeMenu} />
            </motion.div>
          ))}
          <motion.div
            className="px-6 py-4"
            style={{ borderTop: "1px solid var(--border)" }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: nav.length * 0.05 }}
          >
            <Link
              to={ctaHref}
              onClick={closeMenu}
              className="flex w-full items-center justify-center transition-all duration-200"
              style={{ height: 48, background: "transparent", color: "var(--gold)", fontSize: ".94rem", fontWeight: 600, borderRadius: 0, border: "1.5px solid var(--gold)", transition: "all .2s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "var(--white)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
            >
              {ctaLabel}
            </Link>
          </motion.div>
          <motion.div
            className="flex justify-center pb-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: (nav.length + 1) * 0.05 }}
          >
            <LanguageSwitch />
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default MobileNavDrawer;
