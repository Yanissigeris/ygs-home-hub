import { Quote } from "lucide-react";

const TestimonialPlaceholder = () => (
  <section className="section-padding bg-background">
    <div className="section-container max-w-3xl">
      <p className="label-overline text-center mb-1.5">Témoignages</p>
      <h2 className="text-center">Ce que mes clients disent</h2>
      <p className="mx-auto mt-1.5 text-center text-[0.625rem] text-muted-foreground/35">
        [Témoignage client à ajouter]
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { context: "Vente · Aylmer" },
          { context: "Achat · Plateau" },
          { context: "Plex · Hull" },
        ].map((t, i) => (
          <div key={i} className="rounded-lg border border-dashed border-border bg-card p-5">
            <Quote size={14} className="text-accent/25 mb-2" />
            <p className="text-[0.8125rem] leading-relaxed text-muted-foreground italic">
              "[Témoignage client à ajouter]"
            </p>
            <div className="mt-3 pt-2.5 border-t border-border">
              <p className="text-[0.6875rem] font-medium text-foreground">[Nom]</p>
              <p className="text-[0.5625rem] text-muted-foreground/50">{t.context}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialPlaceholder;
