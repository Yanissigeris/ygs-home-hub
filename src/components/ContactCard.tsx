import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  title?: string;
  items: { icon: LucideIcon; text: string }[];
}

const ContactCard = ({ title = "Coordonnées", items }: ContactCardProps) => (
  <div className="mt-10 card-elevated border border-border/40 bg-secondary/25 p-7">
    <p className="text-[1.0625rem] font-semibold text-foreground mb-5">{title}</p>
    <div className="space-y-3.5 text-[0.9375rem] text-muted-foreground">
      {items.map((item) => (
        <div key={item.text} className="flex items-center gap-3">
          <item.icon size={16} className="text-accent/50" />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ContactCard;
