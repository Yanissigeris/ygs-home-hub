import { CheckCircle2 } from "lucide-react";

interface SuccessMessageProps {
  title?: string;
  text?: string;
}

const SuccessMessage = ({
  title = "Merci! Demande envoyée.",
  text = "Je vous reviens rapidement.",
}: SuccessMessageProps) => (
  <div className="mt-10 card-elevated border border-accent/25 bg-accent/5 p-10 text-center">
    <CheckCircle2 size={40} className="mx-auto text-accent" />
    <h3 className="mt-5">{title}</h3>
    <p className="mt-3 text-[0.9375rem] text-muted-foreground">{text}</p>
  </div>
);

export default SuccessMessage;
