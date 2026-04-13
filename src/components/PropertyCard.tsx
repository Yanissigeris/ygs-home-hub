import type { Property } from "@/data/properties";
import { useLanguage } from "@/contexts/LanguageContext";

interface PropertyCardProps {
  property: Property;
}

const i18n = {
  fr: {
    active: "À VENDRE",
    pending: "OFFRE ACCEPTÉE",
    sold: "VENDUE",
    bed: "ch.",
    bath: "sdb",
    powder: "s.e.",
    viewListing: "Voir la propriété",
  },
  en: {
    active: "FOR SALE",
    pending: "OFFER ACCEPTED",
    sold: "SOLD",
    bed: "bed",
    bath: "bath",
    powder: "pw",
    viewListing: "View property",
  },
};

const PropertyCard = ({ property }: PropertyCardProps) => {
  const lang = useLanguage();
  const t = i18n[lang];

  const statusLabel =
    property.status === "active" ? t.active : property.status === "pending" ? t.pending : t.sold;

  return (
    <a
      href={property.remaxUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col h-full"
      style={{ background: "#fff", borderRadius: 3, overflow: "hidden" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <img
          src={property.image}
          alt={`${property.type} — ${property.address}, ${property.city} — YGS Yanis Gauthier-Sigeris`}
          className="h-full w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-105"
          loading="lazy"
          decoding="async"
          width={648}
          height={486}
          onError={(e) => {
            const el = e.target as HTMLImageElement;
            el.style.display = "none";
            el.parentElement!.style.background = "var(--ink)";
          }}
        />
      </div>

      {/* Gold top border — visible on hover */}
      {/* Gold top border — visible on hover */}
      <div className="h-px transition-colors duration-[250ms] ease-out bg-transparent group-hover:bg-[#A88A5A]" />

      {/* Card body */}
      <div className="flex flex-1 flex-col" style={{ padding: "1.25rem 1.25rem 1.5rem" }}>
        {/* Status label */}
        <p
          style={{
            fontFamily: "var(--sans)",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#A88A5A",
            marginBottom: ".5rem",
          }}
        >
          {statusLabel}
        </p>

        {/* Price */}
        <p
          style={{
            fontFamily: "var(--serif)",
            fontSize: "22px",
            fontWeight: 700,
            color: "#17303B",
            lineHeight: 1.15,
            marginBottom: ".5rem",
          }}
        >
          {property.price}
        </p>

        {/* Address */}
        <p
          className="truncate"
          style={{
            fontFamily: "var(--sans)",
            fontSize: "13px",
            fontWeight: 400,
            color: "var(--muted)",
            marginBottom: ".75rem",
          }}
        >
          {property.address}, {property.city}
        </p>

        {/* Stats */}
        <p
          style={{
            fontFamily: "var(--sans)",
            fontSize: "12px",
            fontWeight: 400,
            color: "var(--muted)",
            marginBottom: "1.25rem",
          }}
        >
          {property.bedrooms} {t.bed}
          <span style={{ margin: "0 .5em", opacity: 0.4 }}>|</span>
          {property.bathrooms} {t.bath}
          {property.powderRooms && (
            <>
              <span style={{ margin: "0 .5em", opacity: 0.4 }}>|</span>
              {property.powderRooms} {t.powder}
            </>
          )}
          {property.area && (
            <>
              <span style={{ margin: "0 .5em", opacity: 0.4 }}>|</span>
              {property.area}
            </>
          )}
        </p>

        {/* View link */}
        <span
          className="mt-auto inline-flex items-center gap-1.5"
          style={{
            fontFamily: "var(--sans)",
            fontSize: "13px",
            fontWeight: 500,
            color: "#A88A5A",
          }}
        >
          {t.viewListing}{" "}
          <span
            className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1"
            aria-hidden
          >
            →
          </span>
        </span>
      </div>
    </a>
  );
};

export default PropertyCard;
