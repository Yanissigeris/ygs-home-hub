import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const UtilityBar = () =>
<>
    {/* Desktop & Tablet (sm+) */}
    <div className="hidden sm:block bg-[hsl(200,42%,16%)] border-b border-white/[0.06]">
      <div className="section-container flex items-center justify-between h-[38px]">
        {/* Left — Contact */}
        <div className="flex items-center gap-5 text-[0.75rem] tracking-[0.01em] text-white/55">
          <a
          href="tel:+18195551234"
          className="flex items-center gap-2 transition-colors duration-200 hover:text-white/90">
          
            <Phone size={12} strokeWidth={1.5} className="text-white/35" />
            <span>819-210-3044 </span>
          </a>
          <span className="h-3 w-px bg-white/[0.1]" aria-hidden />
          <a
          href="mailto:yanis@ygsimmo.ca"
          className="flex items-center gap-2 transition-colors duration-200 hover:text-white/90">
          
            <Mail size={12} strokeWidth={1.5} className="text-white/35" />
            <span>yanis@martywaite.com</span>
          </a>
        </div>

        {/* Right — Links + CTA */}
        <div className="flex items-center gap-5">
          <Link
          to="/relocalisation-gatineau"
          className="text-[0.75rem] tracking-[0.01em] text-white/50 transition-colors duration-200 hover:text-white/85">
          
            Relocalisation
          </Link>
          <Link
          to="/contact-yanis"
          className="text-[0.75rem] tracking-[0.01em] text-white/50 transition-colors duration-200 hover:text-white/85">
          
            Contact
          </Link>
          <Link
          to="/evaluation-gratuite-gatineau"
          className="ml-1 inline-flex items-center h-[26px] px-4 rounded-full bg-white/[0.09] border border-white/[0.08] text-[0.6875rem] font-medium tracking-[0.04em] text-white/80 transition-all duration-200 hover:bg-white/[0.14] hover:text-white/95 hover:border-white/[0.14]">
          
            Évaluation gratuite
          </Link>
        </div>
      </div>
    </div>

    {/* Mobile (<sm) */}
    <div className="sm:hidden bg-[hsl(200,42%,16%)] border-b border-white/[0.06]">
      <div className="flex items-center justify-between px-5 h-[34px]">
        <a
        href="tel:+18195551234"
        className="flex items-center gap-2 text-[0.7188rem] text-white/55 transition-colors hover:text-white/85">
        
          <Phone size={11} strokeWidth={1.5} className="text-white/35" />
          <span>819 555-1234</span>
        </a>
        <Link
        to="/evaluation-gratuite-gatineau"
        className="inline-flex items-center h-[24px] px-3.5 rounded-full bg-white/[0.09] border border-white/[0.08] text-[0.6563rem] font-medium tracking-[0.04em] text-white/80 transition-all duration-200 hover:bg-white/[0.14] hover:text-white/95">
        
          Évaluation gratuite
        </Link>
      </div>
    </div>
  </>;


export default UtilityBar;