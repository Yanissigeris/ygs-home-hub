import * as React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const UtilityBar = React.forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref}>
    <div className="hidden border-b border-white/[0.06] bg-[hsl(200,42%,16%)] sm:block">
      <div className="section-container flex h-[38px] items-center justify-between">
        <div className="flex items-center gap-5 text-[0.75rem] tracking-[0.01em] text-white/55">
          <a href="tel:+18195551234" className="flex items-center gap-2 transition-colors duration-200 hover:text-white/90">
            <Phone size={12} strokeWidth={1.5} className="text-white/35" />
            <span>819-210-3044 </span>
          </a>
          <span className="h-3 w-px bg-white/[0.1]" aria-hidden />
          <a href="mailto:yanis@ygsimmo.ca" className="flex items-center gap-2 transition-colors duration-200 hover:text-white/90">
            <Mail size={12} strokeWidth={1.5} className="text-white/35" />
            <span>yanis@martywaite.com</span>
          </a>
        </div>

        <div className="flex items-center gap-5">
          <Link to="/relocalisation-gatineau" className="text-[0.75rem] tracking-[0.01em] text-white/50 transition-colors duration-200 hover:text-white/85">
            Relocalisation
          </Link>
          <Link to="/contact-yanis" className="text-[0.75rem] tracking-[0.01em] text-white/50 transition-colors duration-200 hover:text-white/85">
            Contact
          </Link>
          <Link
            to="/evaluation-gratuite-gatineau"
            className="ml-1 inline-flex h-[26px] items-center rounded-full border border-[#B68A43]/20 bg-[#B68A43]/15 px-4 text-[0.6875rem] font-medium tracking-[0.04em] text-[#B68A43] transition-all duration-200 hover:border-[#B68A43]/35 hover:bg-[#B68A43]/25 hover:text-[#B68A43]"
          >
            Évaluation gratuite
          </Link>
        </div>
      </div>
    </div>

    <div className="border-b border-white/[0.06] bg-[hsl(200,42%,16%)] sm:hidden">
      <div className="flex min-h-[38px] items-center justify-between gap-3 px-4 py-1.5">
        <a href="tel:+18195551234" className="flex min-w-0 items-center gap-1.5 text-[0.7188rem] text-white/60 transition-colors hover:text-white/85">
          <Phone size={11} strokeWidth={1.5} className="shrink-0 text-white/35" />
          <span className="truncate">819-210-3044</span>
        </a>
        <Link
          to="/evaluation-gratuite-gatineau"
          className="inline-flex h-[26px] shrink-0 items-center rounded-full border border-white/[0.08] bg-white/[0.09] px-3 text-[0.625rem] font-medium tracking-[0.03em] text-white/80 transition-all duration-200 hover:bg-white/[0.14] hover:text-white/95"
        >
          Évaluation
        </Link>
      </div>
    </div>
  </div>
));

UtilityBar.displayName = "UtilityBar";

export default UtilityBar;
