import PageMeta from "@/components/PageMeta";
import SEO from "@/components/SEO";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import { useState, FormEvent } from "react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import ReviewSection from "@/components/ReviewSection";
import { getReviewsByIdEn as getReviewsById } from "@/data/reviews-en";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import CardGrid from "@/components/CardGrid";
import ProfileSection from "@/components/ProfileSection";
import ContactCard from "@/components/ContactCard";
import RemaxAgencyBlock from "@/components/RemaxAgencyBlock";
import FormSection from "@/components/FormSection";
import SuccessMessage from "@/components/SuccessMessage";
import ContentBlock from "@/components/ContentBlock";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Award, Clock, Heart, Home, TrendingUp, Users } from "lucide-react";
import heroImg from "@/assets/hero-contact.webp";
import yanisPhoto from "@/assets/yanis-photo.webp";
import logoYgsVertical from "@/assets/logo-ygs-vertical-blue.webp";

const services = [
  { icon: Home, title: "Residential sales", text: "Strategy, price positioning and marketing" },
  { icon: Users, title: "Residential buying", text: "Targeted search, negotiation and support" },
  { icon: TrendingUp, title: "Plex & investment", text: "Analysis, returns and acquisition strategy" },
  { icon: MapPin, title: "Relocation", text: "Local guide for buyers from Ottawa and Montréal" },
];
const contactItems = [
  { icon: Phone, label: "Office", value: "819-684-0000", href: "tel:+18196840000" },
  { icon: Phone, label: "Mobile", value: "819-210-3044", href: "tel:+18192103044" },
  { icon: Mail, label: "Email", value: "yanis@martywaite.com", href: "mailto:yanis@martywaite.com" },
  { icon: MapPin, label: "Area", value: "Gatineau, Aylmer, Hull, Plateau" },
];

const objectiveToAvatarOffer = (objective: string | undefined) => {
  switch (objective) {
    case "sell":    return { avatar: "vendeur" as const,       offer: "consultation_vendeur" as const };
    case "buy":     return { avatar: "acheteur" as const,      offer: "consultation_acheteur" as const };
    case "invest":  return { avatar: "investisseur" as const,  offer: "plex_analyse" as const };
    default:        return { avatar: "mixed" as const,         offer: "contact_general" as const };
  }
};

const ContactPageEn = () => {
  const [submitted, setSubmitted] = useState(false);
  const { submit, submitting } = useFormSubmit();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const objective = fd.get("objective") as string || undefined;
    const { avatar, offer } = objectiveToAvatarOffer(objective);
    const success = await submit({
      formType: "contact", lang: "en",
      name: fd.get("name") as string || "",
      email: fd.get("email") as string || "",
      phone: fd.get("phone") as string || undefined,
      message: fd.get("message") as string || undefined,
      objective,
      avatar,
      offer,
    });
    if (success) setSubmitted(true);
  };
  return (
    <>
      <SEO title="Contact Yanis Gauthier-Sigeris | Gatineau broker" description="Contact Yanis Gauthier-Sigeris, real estate broker in Gatineau. Phone, email, or form." canonical="https://yanisgauthier.com/en/contact" hreflangFr="https://yanisgauthier.com/contact-yanis" hreflangEn="https://yanisgauthier.com/en/contact" lang="en" />
      <PageMeta title="Contact | Real Estate Broker Gatineau" description="Get in touch with Yanis Gauthier-Sigeris, real estate broker in Gatineau. Free consultation — let's talk about your project." ogImage="https://yanisgauthier.com/og/og-default.jpg" />
    <ServiceJsonLd name="Free Real Estate Consultation — Gatineau" description="Free consultation with Yanis Gauthier-Sigeris, real estate broker in Gatineau. Let's discuss your buying, selling or investment project." url="/en/contact" serviceType="Real Estate Consultation Service" />
      <HeroSection compact overline="Yanis Gauthier-Sigeris" title="Let's talk about your project" subtitle="Thinking it over or ready to move — I can help you see more clearly. Just an honest conversation." primaryCta={{ label: "Send a text message", href: "sms:+18192103044?body=Hello%20Yanis%2C%20I%27d%20like%20to%20discuss%20my%20real%20estate%20project%20in%20Outaouais." }} secondaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }} heroBgImage={heroImg} />
<ProfileSection image={yanisPhoto} imageAlt="Yanis Gauthier-Sigeris, real estate broker in Gatineau" name="Yanis Gauthier-Sigeris" role="Real Estate Broker · Gatineau and Outaouais" subtitle="Affiliated with RE/MAX · Marty Waite Team" logo={logoYgsVertical} logoAlt="YGS" affiliationSlot={<RemaxAgencyBlock lang="en" />}>
        <p className="prose-body mt-6">Real estate broker in Outaouais, I support sellers, buyers and investors with a simple, strategic and human approach. My goal: help you make a good decision, at the right time, with the right information.</p>
        <p className="prose-body mt-4">A member of the Marty Waite Team since the beginning and active in residential real estate since 2017, I've been recognized by RE/MAX — Platinum Club, 100% Club and Hall of Fame. But what motivates me is knowing my clients make informed decisions.</p>
        <p className="prose-body mt-4">A real estate investor myself, I can also analyze multi-unit opportunities in depth. My hands-on experience in property flips, combined with my project management training, makes me an indispensable ally for any real estate project.</p>
        <ContactCard items={contactItems} />
      </ProfileSection>
      <CardGrid overline="Services" title="How I can help" items={services} background="alt" />
      <FormSection id="contact-form" title="Tell me where you are">
        {submitted ? <SuccessMessage title="Thank you! Message sent." text="I'll get back to you shortly." /> : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div><Label htmlFor="objective">I want to…</Label><Select name="objective"><SelectTrigger id="objective" className="mt-1.5"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="sell">Sell</SelectItem><SelectItem value="buy">Buy</SelectItem><SelectItem value="invest">Invest</SelectItem><SelectItem value="info">Get information</SelectItem></SelectContent></Select></div>
            <div className="grid gap-5 sm:grid-cols-2"><div><Label htmlFor="name">Name</Label><Input id="name" name="name" className="mt-1.5" required /></div><div><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" className="mt-1.5" required aria-describedby="email-help" /><p id="email-help" className="mt-1 text-[0.75rem] text-muted-foreground/70">Format: you@example.com</p></div></div>
            <div><Label htmlFor="phone">Phone</Label><Input id="phone" name="phone" type="tel" className="mt-1.5" aria-describedby="phone-help" /><p id="phone-help" className="mt-1 text-[0.75rem] text-muted-foreground/70">Optional — format: 819-000-0000</p></div>
            <div><Label htmlFor="message">Message (optional)</Label><Textarea id="message" name="message" rows={4} className="mt-1.5" placeholder="Briefly describe your project…" aria-describedby="message-help" /><p id="message-help" className="mt-1 text-[0.75rem] text-muted-foreground/70">A few sentences are enough to point you in the right direction.</p></div>
            <Button type="submit" size="xl" className="w-full" disabled={submitting}>{submitting ? "Sending…" : "Send my request"}</Button>
            <p className="text-center text-[0.8125rem] text-muted-foreground/50">I give you the numbers and the options — you decide with full clarity.</p>
          </form>
        )}
      </FormSection>
      <ReviewSection overline="Testimonials" title="What our clients say" reviews={getReviewsById(["s1", "b2", "r1"])} columns={3} background="alt" />

      <ContentBlock narrow>
        <SectionHeading overline="What to expect" title="What happens after you reach out" />
        <p className="prose-body mt-5" style={{ lineHeight: 1.85 }}>
          Most messages get a reply the same business day, often within a few hours. The first exchange is just a conversation — your situation, your timing, your questions. I don't push for a meeting, a contract, or a commitment until you've had the time to think it through. Many of my best client relationships started with a quick text six or twelve months before anyone was ready to buy or sell.
        </p>
        <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
          If your project is well-defined, we can move quickly: a free property valuation usually lands within 24 hours, a buyer consultation can be booked the same week, and a plex analysis is ready within a few days of receiving the financials. If you're earlier in the process, I'll point you to the right guide or calculator and stay in the background until you signal that you're ready.
        </p>
        <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
          Communication is bilingual (French or English), and I work mainly across Aylmer, Hull, the Plateau, Gatineau Centre, Chelsea, Cantley, Val-des-Monts, Buckingham, Masson-Angers and Pontiac.
        </p>
      </ContentBlock>

      <FAQSection
        title="Common questions before reaching out"
        items={[
          { q: "How quickly do you reply?", a: "I aim for a same-day reply on business days, and within 24 hours otherwise. Texts and emails are the fastest channels." },
          { q: "Do I have to commit to anything to talk with you?", a: "No. The first call, valuation or consultation is free and no-obligation. You only sign something if and when you choose to engage formally." },
          { q: "Do you work in English?", a: "Yes — I work fully in both French and English, including all paperwork, negotiations and notary coordination. This matters in a bilingual region like Outaouais." },
          { q: "What areas do you cover?", a: "All of Outaouais: Aylmer, Hull, the Plateau, Gatineau Centre, Chelsea, Cantley, Val-des-Monts, Buckingham, Masson-Angers and Pontiac." },
          { q: "Can we meet in person?", a: "Absolutely — at my RE/MAX office, at your property, or anywhere convenient in the region. Many clients prefer a first call by phone or video before meeting." },
          { q: "What if I'm just exploring and not ready to act?", a: "That's actually a great time to reach out. Early conversations help you avoid common mistakes and time the market intelligently. No pressure to do anything before you're ready." },
        ]}
      />

      <CTASection dark overline="First step" title="Start with the right first step" text="Valuation, buyer consultation or plex analysis — we start where you are." buttons={[{ label: "Free Home Valuation", href: "/en/home-valuation" }, { label: "See services", href: "/en/sell", variant: "outline" }]} trustLine="I give you the numbers and the options — you decide with full clarity." />
    </>
  );
};
export default ContactPageEn;
