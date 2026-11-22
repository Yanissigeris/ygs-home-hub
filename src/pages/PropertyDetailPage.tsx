import { FormEvent, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Phone, MessageSquare } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import PropertyGallery from "@/components/PropertyGallery";
import PropertyCard from "@/components/PropertyCard";
import PropertyStickyBar from "@/components/PropertyStickyBar";
import { getPropertyDetails, MortgageCalculator, OpenHouseBadge, PropertySections, StatBand } from "@/components/PropertyDetails";
import SuccessMessage from "@/components/SuccessMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { properties, type Property } from "@/data/properties";
import { propertiesEn } from "@/data/properties-en";
import { AI_STAGED, galleryFor, propertyIdFromSlug, PROPERTY_SLUGS } from "@/data/property-pages";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import { trackContactTap } from "@/lib/analytics";
import { useLanguage } from "@/contexts/LanguageContext";
import yanisAvatar from "@/assets/yanis-avatar.webp";

const PHONE_DISPLAY = "819-210-3044";
const PHONE_TEL = "tel:+18192103044";

const copy = {
  fr: {
    back: "Toutes les propriétés",
    backHref: "/proprietes/",
    status: { active: "À vendre", pending: "Offre acceptée", sold: "Vendue", rent: "À louer", rented: "Louée" },
    askingPrice: "Prix demandé",
    estimate: "Estimer mon paiement",
    about: "La propriété",
    role: "Courtier immobilier résidentiel, RE/MAX Direct",
    visitTitle: "Planifier une visite",
    visitText: "Dites-moi vos disponibilités. Je vous rappelle pour fixer un moment et répondre à vos questions.",
    name: "Nom",
    phone: "Téléphone",
    email: "Courriel",
    message: "Message (optionnel)",
    messagePlaceholder: "Vos disponibilités ou vos questions",
    submit: "Demander une visite",
    sending: "Envoi en cours…",
    successTitle: "Merci, demande reçue.",
    successText: "Je vous rappelle pour fixer la visite.",
    call: "Appeler",
    text: "Texto",
    smsBody: (a: string) => `Bonjour Yanis, j'aimerais visiter le ${a}.`,
    closedTitle: "Vous pensez vendre dans ce secteur?",
    closedText: "Je vous montre à quel prix les propriétés comparables se sont vendues autour de chez vous.",
    valuation: "Évaluation gratuite",
    valuationHref: "/evaluation-gratuite-gatineau/",
    contact: "Parler à Yanis",
    contactHref: "/contact-yanis/",
    others: "Mes autres propriétés",
    aiStaging: "Certaines pièces ont été aménagées et décorées virtuellement à l'aide de l'intelligence artificielle (IA) pour illustrer leur potentiel. Le mobilier et les éléments décoratifs ne sont pas inclus.",
    objective: "Demande de visite",
  },
  en: {
    back: "All properties",
    backHref: "/en/properties/",
    status: { active: "For sale", pending: "Offer accepted", sold: "Sold", rent: "For rent", rented: "Rented" },
    askingPrice: "Asking price",
    estimate: "Estimate my payment",
    about: "The property",
    role: "Residential real estate broker, RE/MAX Direct",
    visitTitle: "Book a visit",
    visitText: "Tell me when you're free. I'll call you back to set a time and answer your questions.",
    name: "Name",
    phone: "Phone",
    email: "Email",
    message: "Message (optional)",
    messagePlaceholder: "Your availability or your questions",
    submit: "Request a visit",
    sending: "Sending…",
    successTitle: "Thanks, request received.",
    successText: "I'll call you back to set up the visit.",
    call: "Call",
    text: "Text",
    smsBody: (a: string) => `Hi Yanis, I'd like to visit ${a}.`,
    closedTitle: "Thinking of selling in this area?",
    closedText: "I'll show you what comparable homes near you actually sold for.",
    valuation: "Free Home Valuation",
    valuationHref: "/en/home-valuation/",
    contact: "Talk to Yanis",
    contactHref: "/en/contact/",
    others: "My other properties",
    aiStaging: "Some rooms were virtually furnished and decorated using artificial intelligence (AI) to show their potential. Furniture and decor are not included.",
    objective: "Visit request",
  },
};

const isOpen = (p: Property) => p.status === "active" || p.status === "rent";

const PropertyDetailPage = () => {
  const lang = useLanguage();
  const c = copy[lang];
  const { slug } = useParams();
  const id = propertyIdFromSlug(slug);
  const list = lang === "fr" ? properties : propertiesEn;
  const property = id ? list.find((p) => p.id === id) : undefined;

  if (!property) return <Navigate to={c.backHref} replace />;

  const photos = galleryFor(property);
  const open = isOpen(property);
  const others = list.filter((p) => p.id !== property.id && isOpen(p) && PROPERTY_SLUGS[p.id]).slice(0, 3);
  const route = lang === "fr" ? `/proprietes/${slug}` : `/en/properties/${slug}`;

  const details = open ? getPropertyDetails(property.id, lang) : undefined;
  const priceNumber = Number(property.price.replace(/[^\d]/g, "")) || 0;
  const isLand = /terrain|lot/i.test(property.type) && !property.bedrooms?.match(/\d/);
  const showCalculator = Boolean(details) && !isLand && property.status === "active";

  return (
    <>
      <PageMeta
        title={`${property.address} | YGS`}
        description={property.description.slice(0, 155)}
        canonical={`https://yanisgauthier.com${route}`}
      />

      {/* Bande navy sous l'en-tête, la galerie déborde sur le crème */}
      <section
        style={{
          background:
            "linear-gradient(to bottom, var(--ink) 0, var(--ink) calc(100% - 9rem), var(--cream) calc(100% - 9rem))",
        }}
      >
        <div className="section-container pt-[104px] md:pt-[128px]">
          <Link
            to={c.backHref}
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-white/75 hover:text-white"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {c.back}
          </Link>

          <div className="mt-6 flex flex-col gap-4 pb-8 md:flex-row md:items-end md:justify-between md:pb-10">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <p className="text-[13px] font-semibold tracking-[0.02em]" style={{ color: "var(--text-on-dark-muted)" }}>
                  {c.status[property.status]}
                </p>
                {details && <OpenHouseBadge id={property.id} lang={lang} />}
              </div>
              <h1
                className="mt-2 text-white"
                style={{ fontFamily: "var(--display)", fontSize: "clamp(2rem, 4.4vw, 3.25rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
              >
                {property.address}
              </h1>
              <p className="mt-2 text-[15px] text-white/75">{property.city}</p>
            </div>
            <div className="md:text-right">
              <p
                className="text-white tabular-nums"
                style={{ fontFamily: "var(--display)", fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)", lineHeight: 1, letterSpacing: "-0.01em" }}
              >
                {property.price}
              </p>
              {property.status === "sold" && (
                <p className="mt-1.5 text-[13px] text-white/70">{c.askingPrice}</p>
              )}
            </div>
          </div>

          <PropertyGallery photos={photos} alt={`${property.type}, ${property.address}, ${property.city}`} lang={lang} />
          {AI_STAGED.has(property.id) && (
            <p className="mt-3 text-[13px] leading-relaxed" style={{ color: "#4A5475" }}>
              {c.aiStaging}
            </p>
          )}
        </div>
      </section>

      {/* data-page-cta : la fiche a déjà son appel à l'action (visite ou évaluation), la bande générique du pied de page est masquée */}
      <section data-page-cta="" className="pb-16 pt-10 md:pb-24 md:pt-14" style={{ background: "var(--cream)" }}>
        <div className="section-container grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
          <div className="min-w-0">
            <StatBand property={property} lang={lang} />

            <h2 className="mt-12" style={{ fontFamily: "var(--display)", fontSize: "clamp(1.5rem, 2.4vw, 2rem)", color: "var(--ink)" }}>
              {c.about}
            </h2>
            <p className="prose-body mt-4" style={{ lineHeight: 1.85 }}>
              {property.description}
            </p>
            <PropertySections property={property} lang={lang} />
            {showCalculator && (
              <MortgageCalculator
                price={priceNumber}
                monthlyTaxes={(details?.taxes?.total ?? 0) / 12}
                monthlyFees={(details?.expenses?.total ?? 0) / 12}
                lang={lang}
              />
            )}
          </div>

          <aside id="visite" className="scroll-mt-24 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[20px] bg-white p-6 md:p-7" style={{ boxShadow: "0 1px 0 rgba(0,14,53,.06), 0 18px 40px rgba(0,14,53,.07)" }}>
              <div className="flex items-center gap-3">
                <img src={yanisAvatar} alt="Yanis Gauthier-Sigeris" width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <p className="text-[16px] font-semibold" style={{ color: "var(--ink)" }}>Yanis Gauthier-Sigeris</p>
                  <p className="text-[13px]" style={{ color: "#4A5475" }}>{c.role}</p>
                </div>
              </div>

              {open ? <VisitForm property={property} lang={lang} /> : (
                <div className="mt-6">
                  <h2 className="text-[20px] font-semibold" style={{ color: "var(--ink)" }}>{c.closedTitle}</h2>
                  <p className="mt-2 text-[15px]" style={{ color: "#4A5475", lineHeight: 1.7 }}>{c.closedText}</p>
                  <div className="mt-5 flex flex-col gap-3">
                    <Button asChild size="lg" className="w-full"><Link to={c.valuationHref}>{c.valuation}</Link></Button>
                    <Button asChild size="lg" variant="outline" className="w-full"><Link to={c.contactHref}>{c.contact}</Link></Button>
                  </div>
                </div>
              )}

              <div className="mt-5 grid grid-cols-2 gap-3 border-t pt-5" style={{ borderColor: "rgba(0,14,53,.1)" }}>
                <a
                  href={PHONE_TEL}
                  onClick={() => trackContactTap({ channel: "phone", location: "inline", destination: PHONE_TEL })}
                  className="inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-[14px] font-semibold"
                  style={{ borderColor: "rgba(0,14,53,.18)", color: "var(--ink)" }}
                >
                  <Phone size={16} aria-hidden="true" /> {c.call}
                </a>
                <a
                  href={`sms:+18192103044?body=${encodeURIComponent(c.smsBody(property.address))}`}
                  onClick={() => trackContactTap({ channel: "sms", location: "inline", destination: "sms:+18192103044" })}
                  className="inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-[14px] font-semibold"
                  style={{ borderColor: "rgba(0,14,53,.18)", color: "var(--ink)" }}
                >
                  <MessageSquare size={16} aria-hidden="true" /> {c.text}
                </a>
              </div>
              {showCalculator && (
                <a href="#calculatrice" className="mt-4 block text-center text-[14px] font-semibold" style={{ color: "var(--gold-text)" }}>
                  {c.estimate}
                </a>
              )}
              <p className="mt-3 text-center text-[13px]" style={{ color: "#4A5475" }}>{PHONE_DISPLAY}</p>
            </div>
          </aside>
        </div>
      </section>

      {others.length > 0 && (
        <section className="pb-20 pt-4 md:pb-28" style={{ background: "var(--cream)" }}>
          <div className="section-container">
            <h2 style={{ fontFamily: "var(--display)", fontSize: "clamp(1.5rem, 2.4vw, 2rem)", color: "var(--ink)" }}>{c.others}</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => <PropertyCard key={p.id} property={p} />)}
            </div>
          </div>
        </section>
      )}

      {open && <PropertyStickyBar lang={lang} targetId="visite" />}
    </>
  );
};

const VisitForm = ({ property, lang }: { property: Property; lang: "fr" | "en" }) => {
  const c = copy[lang];
  const [submitted, setSubmitted] = useState(false);
  const { submit, submitting } = useFormSubmit();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const fd = new FormData(e.target as HTMLFormElement);
    const ok = await submit({
      formType: "contact",
      lang,
      name: (fd.get("nom") as string) || "",
      email: (fd.get("courriel") as string) || "",
      phone: (fd.get("tel") as string) || undefined,
      message: (fd.get("message") as string) || undefined,
      objective: c.objective,
      address: `${property.address}, ${property.city} (Centris ${property.mls}, ${property.price})`,
      avatar: "acheteur",
      offer: "consultation_acheteur",
    });
    if (ok) setSubmitted(true);
  };

  if (submitted) return <SuccessMessage title={c.successTitle} text={c.successText} />;

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <h2 className="text-[20px] font-semibold" style={{ color: "var(--ink)" }}>{c.visitTitle}</h2>
        <p className="mt-2 text-[15px]" style={{ color: "#4A5475", lineHeight: 1.7 }}>{c.visitText}</p>
      </div>
      <div>
        <Label htmlFor="visite-nom">{c.name}</Label>
        <Input id="visite-nom" name="nom" className="mt-1.5" required autoComplete="name" />
      </div>
      <div>
        <Label htmlFor="visite-tel">{c.phone}</Label>
        <Input id="visite-tel" name="tel" type="tel" className="mt-1.5" required autoComplete="tel" />
      </div>
      <div>
        <Label htmlFor="visite-courriel">{c.email}</Label>
        <Input id="visite-courriel" name="courriel" type="email" className="mt-1.5" required autoComplete="email" />
      </div>
      <div>
        <Label htmlFor="visite-message">{c.message}</Label>
        <Textarea id="visite-message" name="message" rows={3} className="mt-1.5" placeholder={c.messagePlaceholder} />
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? c.sending : c.submit}
      </Button>
    </form>
  );
};

export default PropertyDetailPage;
