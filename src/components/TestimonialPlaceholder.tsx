import { Star, Quote } from "lucide-react";

const TestimonialPlaceholder = () => (
  <section className="section-padding bg-background">
    <div className="section-container">
      <p className="label-overline text-center mb-3">Témoignages</p>
      <h2 className="text-center">Ce que mes clients disent</h2>
      <p className="mx-auto mt-2 text-center text-[0.75rem] text-muted-foreground/50">
        [Section témoignages — à compléter avec de vrais avis clients]
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card-elevated rounded-lg border border-border bg-card p-7">
            <Quote size={20} className="text-accent/40 mb-4" />
            <div className="flex gap-0.5 text-accent">
              {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
            </div>
            <p className="mt-4 text-[0.875rem] leading-relaxed text-muted-foreground italic">
              "[Témoignage client #{i} — à ajouter]"
            </p>
            <div className="mt-5 border-t border-border pt-4">
              <p className="text-[0.8125rem] font-medium text-foreground">[Nom du client]</p>
              <p className="text-[0.6875rem] text-muted-foreground">[Secteur, type de transaction]</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialPlaceholder;
