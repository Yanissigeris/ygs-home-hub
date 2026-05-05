import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SuccessMessageProps {
  title?: string;
  text?: string;
  variant?: "glass" | "card";
}

const SuccessMessage = ({
  title = "Merci! Demande envoyée.",
  text = "Je vous reviens rapidement.",
  variant = "card",
}: SuccessMessageProps) => {
  const isGlass = variant === "glass";
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "p-10 text-center",
        isGlass
          ? "rounded-[1.25rem] border border-white/[0.08] bg-white/[0.06] backdrop-blur-xl shadow-[0_8px_40px_-12px_hsl(200_40%_8%_/_0.5)]"
          : "mt-10 card-elevated border border-accent/25 bg-accent/5",
      )}
    >
      <CheckCircle2 size={40} className={cn("mx-auto", isGlass ? "text-accent" : "text-accent")} aria-hidden="true" />
      <h3 className={cn("mt-5", isGlass && "text-primary-foreground")}>{title}</h3>
      <p
        className={cn(
          "mt-3 text-[0.9375rem]",
          isGlass ? "text-primary-foreground/70" : "text-muted-foreground",
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default SuccessMessage;
