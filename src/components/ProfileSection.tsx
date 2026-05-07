import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

interface ProfileItem {
  image: string;
  imageAlt: string;
  name: string;
  role: string;
  subtitle?: string;
  logo?: string;
  logoAlt?: string;
  /** Optional second logo rendered beside the primary logo, separated by a thin gold rule. */
  affiliateLogo?: string;
  /** Alt text for the affiliate logo. Required if affiliateLogo is provided. */
  affiliateLogoAlt?: string;
  /** Optional one-line address caption rendered below the affiliate logo only. */
  affiliateAddress?: string;
  affiliationSlot?: React.ReactNode;
  children: React.ReactNode;
}

interface ProfileSectionProps extends ProfileItem {
  background?: "default" | "alt";
  imagePosition?: "left" | "right";
}

const ProfileSection = ({
  image,
  imageAlt,
  name,
  role,
  subtitle,
  logo,
  logoAlt,
  affiliateLogo,
  affiliateLogoAlt,
  affiliateAddress,
  affiliationSlot,
  children,
  background = "default",
  imagePosition = "left",
}: ProfileSectionProps) => (
  <section className={background === "alt" ? "section-padding bg-[var(--cream)]" : "section-padding bg-background"}>
    <div className={`section-container grid gap-12 lg:gap-16 ${imagePosition === "left" ? "lg:grid-cols-[38%_62%]" : "lg:grid-cols-[62%_38%]"} lg:items-start`}>
      <motion.div
        className={imagePosition === "right" ? "order-2" : ""}
        initial={{ opacity: 0, x: imagePosition === "left" ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={image}
          alt={imageAlt}
          className="w-full rounded-[1.75rem] object-cover aspect-[3/4]"
          width={480}
          height={640}
          loading="lazy"
          decoding="async"
        />
        {logo && !affiliateLogo && (
          <div className="text-center mt-6">
            <img
              src={logo}
              alt={logoAlt || ""}
              className="mx-auto h-auto"
              style={{ width: "clamp(80px, 11vw, 100px)" }}
              width={100}
              height={34}
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
        {logo && affiliateLogo && (
          <div className="mt-6 flex items-end justify-center gap-5">
            {/* Primary brand — YGS */}
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt={logoAlt || ""}
                className="h-auto"
                style={{ width: "clamp(80px, 11vw, 100px)" }}
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Thin gold vertical divider */}
            <div className="w-px h-12 bg-[var(--gold)]/40 flex-shrink-0" aria-hidden="true" />
            {/* Affiliate brand — RE/MAX Direct + optional address caption */}
            <div className="flex flex-col items-start flex-shrink-0">
              <img
                src={affiliateLogo}
                alt={affiliateLogoAlt || ""}
                className="h-12 w-auto"
                loading="lazy"
                decoding="async"
              />
              {affiliateAddress && (
                <p className="mt-1.5 text-[0.6875rem] text-muted-foreground/70 whitespace-nowrap">
                  {affiliateAddress}
                </p>
              )}
            </div>
          </div>
        )}
        {affiliationSlot && <div className="mt-8">{affiliationSlot}</div>}
      </motion.div>
      <motion.div
        className={imagePosition === "right" ? "order-1" : ""}
        initial={{ opacity: 0, x: imagePosition === "left" ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <p className="label-overline mb-3">À propos</p>
        <h2>{name}</h2>
        <p className="mt-2 text-[1.0625rem] font-medium text-accent">{role}</p>
        {subtitle && <p className="mt-1.5 text-[0.875rem] text-muted-foreground/45">{subtitle}</p>}
        {children}
      </motion.div>
    </div>
  </section>
);

export default ProfileSection;
