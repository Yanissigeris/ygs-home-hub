import { useState, FormEvent } from "react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Send, Lock, Shield, BadgeCheck, CheckCircle2, BookOpen } from "lucide-react";

export type GuideType = "seller_guide" | "buyer_guide" | "investor_guide" | "relocation_guide";

interface GuideModalEnProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  guideType: GuideType;
}

const guideConfig: Record<GuideType, { title: string; description: string; submitLabel: string; successTitle: string; successText: string }> = {
  seller_guide: {
    title: "Get the Seller Guide",
    description: "Everything you need to know to sell at the best price in Gatineau — preparation, pricing, marketing and negotiation.",
    submitLabel: "Send me the Seller Guide",
    successTitle: "Your guide is on its way!",
    successText: "Check your inbox — you'll receive the Seller Guide within minutes.",
  },
  buyer_guide: {
    title: "Get the Buyer Guide",
    description: "The home buying process in Québec explained simply — from search to notary, step by step.",
    submitLabel: "Send me the Buyer Guide",
    successTitle: "Your guide is on its way!",
    successText: "Check your inbox — you'll receive the Buyer Guide within minutes.",
  },
  investor_guide: {
    title: "Get the Investor Guide",
    description: "Returns, plex analysis, acquisition strategy and pitfalls to avoid — the essential guide for investing in Gatineau.",
    submitLabel: "Send me the Investor Guide",
    successTitle: "Your Investor Guide is on its way!",
    successText: "Check your inbox — you'll receive the guide within minutes.",
  },
  relocation_guide: {
    title: "Get the Relocation Guide",
    description: "Enter your details and I'll send you the relocation guide right away. You'll find useful benchmarks for understanding the Gatineau market, neighborhoods to consider, and steps to plan for a smoother transition.",
    submitLabel: "Send me the guide",
    successTitle: "Your Relocation Guide is on its way!",
    successText: "Check your inbox shortly. Also look in your promotions or spam folder if needed.",
  },
};

const GuideModalEn = ({ open, onOpenChange, guideType }: GuideModalEnProps) => {
  const [submitted, setSubmitted] = useState(false);
  const config = guideConfig[guideType];
  const { submit, submitting } = useFormSubmit();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const success = await submit({
      formType: "guide", lang: "en",
      name: fd.get("first_name") as string || "",
      email: fd.get("email") as string || "",
      phone: fd.get("phone") as string || undefined,
      projectType: fd.get("project_type") as string || undefined,
      guideTitle: config.title,
    });
    if (success) setSubmitted(true);
  };

  const handleOpenChange = (value: boolean) => {
    if (!value) setSubmitted(false);
    onOpenChange(value);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[480px] rounded-2xl border-border bg-card p-0 overflow-hidden">
        <div className="h-1.5 w-full bg-accent" />
        <div className="px-6 pt-5 pb-7 sm:px-8 sm:pt-6 sm:pb-8">
          <DialogHeader className="text-left">
            <p className="mb-2 flex items-center gap-2 text-[0.7rem] font-medium tracking-[0.12em] uppercase text-muted-foreground/60">
              <BookOpen size={13} className="text-accent" />
              Free Guide
            </p>
            <DialogTitle className="text-[1.25rem] font-semibold text-foreground leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              {config.title}
            </DialogTitle>
            <DialogDescription className="mt-1.5 text-[0.8125rem] text-muted-foreground leading-relaxed">
              {config.description}
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="mt-8 text-center py-4">
              <CheckCircle2 size={40} className="mx-auto text-accent" />
              <h4 className="mt-4 text-foreground text-[1.125rem] font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                {config.successTitle}
              </h4>
              <p className="mt-2 text-[0.875rem] text-muted-foreground">{config.successText}</p>
              <Button variant="outline" className="mt-6" onClick={() => handleOpenChange(false)}>Close</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <input type="hidden" name="guide_type" value={guideType} />
              <div>
                <Label htmlFor="guide-name-en" className="text-muted-foreground text-[0.8125rem]">First Name</Label>
                <Input id="guide-name-en" name="first_name" placeholder="Your first name" className="mt-1 h-11" required />
              </div>
              <div>
                <Label htmlFor="guide-email-en" className="text-muted-foreground text-[0.8125rem]">Email</Label>
                <Input id="guide-email-en" name="email" type="email" placeholder="you@example.com" className="mt-1 h-11" required />
              </div>
              <div>
                <Label htmlFor="guide-phone-en" className="text-muted-foreground text-[0.8125rem]">Phone (optional)</Label>
                <Input id="guide-phone-en" name="phone" type="tel" placeholder="819-000-0000" className="mt-1 h-11" />
              </div>
              <div>
                <Label htmlFor="guide-project-en" className="text-muted-foreground text-[0.8125rem]">Project Type</Label>
                <Select name="project_type">
                  <SelectTrigger id="guide-project-en" className="mt-1 h-11"><SelectValue placeholder="Select..." /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sell">Sell</SelectItem>
                    <SelectItem value="buy">Buy</SelectItem>
                    <SelectItem value="both">Buy and Sell</SelectItem>
                    <SelectItem value="invest">Invest</SelectItem>
                    <SelectItem value="exploring">Exploring my options</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" size="lg" variant="accent" className="w-full mt-1 font-semibold" disabled={submitting}>
                <Send size={16} className="mr-1.5" />{submitting ? "Sending…" : config.submitLabel}
              </Button>
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 pt-1 text-[0.72rem] text-muted-foreground/50">
                <span className="flex items-center gap-1.5"><BadgeCheck size={12} /> Free</span>
                <span className="flex items-center gap-1.5"><Lock size={12} /> Confidential</span>
                <span className="flex items-center gap-1.5"><Shield size={12} /> No commitment</span>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GuideModalEn;
