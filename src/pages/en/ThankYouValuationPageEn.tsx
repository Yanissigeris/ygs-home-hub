import PageMeta from "@/components/PageMeta";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Shield, FileText } from "lucide-react";
import { motion } from "framer-motion";
import FunnelNextStep from "@/components/FunnelNextStep";

const whatsNext = [
  { icon: Clock, text: "Personalized response within 24 hours" },
  { icon: FileText, text: "Analysis based on recent comparable sales" },
  { icon: Shield, text: "No obligation — no commitment" },
];

const nextSteps = [
  { title: "Seller plan", text: "Go further — get a complete plan: pricing, preparation, marketing and timeline.", href: "/en/seller-plan", cta: "Get my plan", highlight: true },
  { title: "Seller guide", text: "Everything you need to know to sell at the best price in Gatineau.", href: "/en/seller-guide", cta: "Read the guide" },
  { title: "Talk to Yanis", text: "Discuss your situation and options — no commitment.", href: "/en/contact", cta: "Book a call" },
];

const ThankYouValuationPageEn = () => (
  <>
    <PageMeta title="Thank You — Valuation Requested" description="Your valuation request has been sent. Yanis is preparing your personalized analysis and will contact you within 24 hours." />
    <section className="section-padding bg-background">
      <div className="section-container max-w-[36rem]">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <CheckCircle2 size={56} className="mx-auto text-accent" />
          <h1 className="mt-6">Thank you! Your valuation request is on its way.</h1>
          <p className="prose-body mt-4">
            I'm preparing your personalized valuation based on your property, your area and recent comparable sales.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-col gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {whatsNext.map((item) => (
            <div key={item.text} className="flex items-center gap-3.5 rounded-xl border border-border/40 bg-card px-5 py-4">
              <item.icon size={18} className="text-accent shrink-0" />
              <span className="text-[0.9375rem] font-medium text-foreground">{item.text}</span>
            </div>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <Button size="lg" asChild>
            <Link to="/en">Back to home</Link>
          </Button>
        </div>
      </div>
    </section>

    <FunnelNextStep
      overline="In the meantime"
      title="Prepare your next step"
      subtitle="You'll have the numbers soon. Here are the options to go further."
      steps={nextSteps}
      background="alt"
    />
  </>
);

export default ThankYouValuationPageEn;
