import PageMeta from "@/components/PageMeta";
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
import FormSection from "@/components/FormSection";
import SuccessMessage from "@/components/SuccessMessage";
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
  { icon: Phone, text: "[819-210-3044]" },
  { icon: Mail, text: "[yanis@martywaite.com]" },
  { icon: MapPin, text: "Gatineau, QC" },
];

const ContactPageEn = () => {
  const [submitted, setSubmitted] = useState(false);
  const { submit, submitting } = useFormSubmit();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const success = await submit({
      formType: "contact", lang: "en",
      name: fd.get("name") as string || "",
      email: fd.get("email") as string || "",
      phone: fd.get("phone") as string || undefined,
      message: fd.get("message") as string || undefined,
      objective: fd.get("objective") as string || undefined,
    });
    if (success) setSubmitted(true);
  };
  return (
    <>
      <PageMeta title="Contact Yanis Gauthier-Sigeris" description="Contact Yanis Gauthier-Sigeris, real estate broker in Gatineau. Free consultation, let's talk about your project." ogImage="https://yanisgauthier.com/og/og-default.jpg" />
    <ServiceJsonLd name="Free Real Estate Consultation — Gatineau" description="Free consultation with Yanis Gauthier-Sigeris, real estate broker in Gatineau. Let's discuss your buying, selling or investment project." url="/en/contact" serviceType="Real Estate Consultation Service" />
      <HeroSection compact overline="Yanis Gauthier-Sigeris" title="Let's talk about your project" subtitle="Thinking it over or ready to move — I can help you see more clearly. Just an honest conversation." primaryCta={{ label: "Send a message", href: "#contact-form" }} secondaryCta={{ label: "Free Valuation", href: "/en/home-valuation" }} heroBgImage={heroImg} />
<ProfileSection image={yanisPhoto} imageAlt="Yanis Gauthier-Sigeris, real estate broker in Gatineau" name="Yanis Gauthier-Sigeris" role="Real Estate Broker · Gatineau and Outaouais" subtitle="Affiliated with RE/MAX · Marty Waite Team" logo={logoYgsVertical} logoAlt="YGS">
        <p className="prose-body mt-6">Real estate broker in Outaouais, I support sellers, buyers and investors with a simple, strategic and human approach. My goal: help you make a good decision, at the right time, with the right information.</p>
        <p className="prose-body mt-4">A member of the Marty Waite Team since the beginning and active in residential real estate for nearly 9 years, I've been recognized by RE/MAX — Platinum Club, 100% Club and Hall of Fame. But what motivates me is knowing my clients make informed decisions.</p>
        <p className="prose-body mt-4">A real estate investor myself, I can also analyze multi-unit opportunities in depth. My hands-on experience in property flips, combined with my project management training, makes me an indispensable ally for any real estate project.</p>
        <ContactCard items={contactItems} />
      </ProfileSection>
      <CardGrid overline="Services" title="How I can help" items={services} background="alt" />
      <FormSection id="contact-form" title="Tell me where you are">
        {submitted ? <SuccessMessage title="Thank you! Message sent." text="I'll get back to you shortly." /> : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div><Label htmlFor="objective">I want to…</Label><Select name="objective"><SelectTrigger id="objective" className="mt-1.5"><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="sell">Sell</SelectItem><SelectItem value="buy">Buy</SelectItem><SelectItem value="invest">Invest</SelectItem><SelectItem value="info">Get information</SelectItem></SelectContent></Select></div>
            <div className="grid gap-5 sm:grid-cols-2"><div><Label htmlFor="name">Name</Label><Input id="name" name="name" className="mt-1.5" required /></div><div><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" className="mt-1.5" required /></div></div>
            <div><Label htmlFor="phone">Phone</Label><Input id="phone" name="phone" type="tel" className="mt-1.5" /></div>
            <div><Label htmlFor="message">Message (optional)</Label><Textarea id="message" name="message" rows={4} className="mt-1.5" placeholder="Briefly describe your project…" /></div>
            <Button type="submit" size="xl" className="w-full" disabled={submitting}>{submitting ? "Sending…" : "Send my request"}</Button>
            <p className="text-center text-[0.8125rem] text-muted-foreground/50">I give you the numbers and the options — you decide with full clarity.</p>
          </form>
        )}
      </FormSection>
      <ReviewSection overline="Testimonials" title="What our clients say" reviews={getReviewsById(["s1", "b2", "r1"])} columns={3} background="alt" />
      <CTASection dark overline="First step" title="Start with the right first step" text="Valuation, buyer consultation or plex analysis — we start where you are." buttons={[{ label: "Free Home Valuation", href: "/en/home-valuation" }, { label: "See services", href: "/en/sell", variant: "outline" }]} trustLine="I give you the numbers and the options — you decide with full clarity." />
    </>
  );
};
export default ContactPageEn;
