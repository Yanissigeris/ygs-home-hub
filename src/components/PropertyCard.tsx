import { Bed, Bath, Maximize, MapPin, ExternalLink, TreePine, Calendar } from "lucide-react";
import type { Property } from "@/data/properties";
import { useLanguage } from "@/contexts/LanguageContext";

interface PropertyCardProps {
  property: Property;
}

const i18n = {
  fr: { active: "À vendre", pending: "Offre acceptée", sold: "Vendue", bed: "ch.", bath: "sdb", powder: "s.e.", viewListing: "Voir la fiche" },
  en: { active: "For sale", pending: "Offer accepted", sold: "Sold", bed: "bed", bath: "bath", powder: "pw", viewListing: "View listing" },
};

const PropertyCard = ({ property }: PropertyCardProps) => {
  const lang = useLanguage();
  const t = i18n[lang];

  return (
    <a
      href={property.remaxUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={property.image}
          alt={`${property.type} — ${property.address}, ${property.city} — YGS Yanis Gauthier-Sigeris`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          onError={(e) => { const t = e.target as HTMLImageElement; t.style.display = "none"; t.parentElement!.style.background = "var(--ink)"; }}
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            {property.status === "active" ? t.active : property.status === "pending" ? t.pending : t.sold}
          </span>
        </div>
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-3 pt-8">
          <p className="text-2xl font-bold text-white">{property.price}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start gap-1.5 text-muted-foreground mb-1">
          <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
          <span className="text-sm">{property.address}, {property.city}</span>
        </div>
        <p className="font-semibold text-foreground">{property.type}</p>

        {/* Stats */}
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Bed className="h-4 w-4" /> {property.bedrooms} {t.bed}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Bath className="h-4 w-4" /> {property.bathrooms} {t.bath}
            {property.powderRooms && ` + ${property.powderRooms} ${t.powder}`}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Maximize className="h-4 w-4" /> {property.area}
          </span>
          {property.lotSize && (
            <span className="inline-flex items-center gap-1.5">
              <TreePine className="h-4 w-4" /> {property.lotSize}
            </span>
          )}
          {property.yearBuilt && (
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {property.yearBuilt}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
          {property.description}
        </p>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
          <span className="text-xs text-muted-foreground">MLS® {property.mls}</span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:underline">
            {t.viewListing} <ExternalLink className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </a>
  );
};

export default PropertyCard;
