import { Quote } from "lucide-react";

const TestimonialPlaceholder = () => (
  <section className="section-padding bg-background">
    <div className="section-container max-w-4xl">
      <p className="label-overline text-center mb-3">Témoignages</p>
      <h2 className="text-center">Ce que mes clients disent</h2>
      <p className="mx-auto mt-2 text-center text-[0.6875rem] text-muted-foreground/40">
        [Témoignage client à ajouter]
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { context: "Vente · Aylmer" },
          { context: "Achat · Plateau" },
          { context: "Plex · Hull" },
        ].map((t, i) => (
          <div key={i} className="rounded-lg border border-dashed border-border bg-card p-6">
            <Quote size={16} className="text-accent/30 mb-3" />
            <p className="text-[0.8125rem] leading-relaxed text-muted-foreground italic">
              "[Témoignage client à ajouter]"
            </p>
            <div className="mt-4 pt-3 border-t border-border">
              <p className="text-[0.75rem] font-medium text-foreground">[Nom]</p>
              <p className="text-[0.625rem] text-muted-foreground/60">{t.context}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialPlaceholder;
