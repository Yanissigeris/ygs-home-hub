import { LucideIcon } from "lucide-react";

export interface ContactItem {
  icon: LucideIcon;
  /** Optional label prefix (e.g. "Bur.", "Cell.", "Email") */
  label?: string;
  /** Display value (e.g. "819-684-0000") */
  value?: string;
  /** Optional clickable href (e.g. "tel:+18196840000", "mailto:...") */
  href?: string;
  /** Legacy: full text fallback when label/value not provided */
  text?: string;
}

interface ContactCardProps {
  title?: string;
  items: ContactItem[];
}

const ContactCard = ({ title = "Coordonnées", items }: ContactCardProps) => (
  <div className="mt-10 card-elevated border border-border/40 bg-secondary/25 p-7">
    <p className="text-[1.0625rem] font-semibold text-foreground mb-5">{title}</p>
    <div className="space-y-3.5 text-[0.9375rem] text-muted-foreground">
      {items.map((item, idx) => {
        const display = item.value ?? item.text ?? "";
        const inner = item.href ? (
          <a href={item.href} className="hover:text-foreground transition-colors">
            {display}
          </a>
        ) : (
          <span>{display}</span>
        );
        return (
          <div key={`${item.label ?? ""}-${display}-${idx}`} className="flex items-center gap-3">
            <item.icon size={16} className="text-accent/50 shrink-0" />
            <span>
              {item.label ? <span className="text-foreground/70">{item.label} : </span> : null}
              {inner}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

export default ContactCard;
