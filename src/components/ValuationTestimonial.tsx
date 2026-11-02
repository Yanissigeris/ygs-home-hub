/** Single client quote block used on the FR and EN valuation pages. */
const ValuationTestimonial = ({ quote, cite }: { quote: string; cite: string }) => (
  <section className="bg-[var(--cream)] py-14 md:py-20">
    <div className="section-container max-w-3xl mx-auto text-center">
      <div className="mx-auto h-px w-10 bg-[var(--gold)] mb-4" aria-hidden="true" />
      <blockquote
        className="text-[var(--ink)]"
        style={{ fontFamily: "var(--serif)", fontSize: "clamp(1.2rem, 2.1vw, 1.55rem)", fontWeight: 500, lineHeight: 1.45 }}
      >
        {quote}
        <cite
          className="block mt-6 not-italic text-[14px] text-[var(--ink)]/70"
          style={{ fontFamily: "var(--sans)" }}
        >
          {cite}
        </cite>
      </blockquote>
    </div>
  </section>
);

export default ValuationTestimonial;
