import { Star } from "lucide-react";

const TestimonialPlaceholder = () => (
  <section className="section-padding bg-background">
    <div className="section-container">
      <h2 className="text-center text-2xl sm:text-3xl text-foreground">Ce que mes clients disent</h2>
      <p className="mx-auto mt-2 text-center text-sm text-muted-foreground">[Section témoignages — à compléter avec de vrais avis clients]</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card-elevated rounded-lg border border-border bg-card p-6">
            <div className="flex gap-1 text-accent">
              {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground italic">
              "[Témoignage client #{i} — à ajouter]"
            </p>
            <p className="mt-3 text-sm font-medium text-foreground">[Nom du client]</p>
            <p className="text-xs text-muted-foreground">[Secteur, type de transaction]</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialPlaceholder;
