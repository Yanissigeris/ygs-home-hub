import PageMeta from "@/components/PageMeta";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import FunnelNextStep from "@/components/FunnelNextStep";

const nextSteps = [
  { title: "Explore neighborhoods", text: "Discover Gatineau neighborhoods — Aylmer, Hull, Plateau, Buckingham and more.", href: "/en/neighborhoods", cta: "See neighborhoods" },
  { title: "Guides and resources", text: "Browse our free guides for sellers, buyers and investors.", href: "/en/resources", cta: "See resources" },
];

const ThankYouPageEn = () => (
  <>
    <PageMeta title="Thank You — Request Sent | YGS" description="Your request has been sent successfully. Yanis will contact you within 24 hours." />
    <section className="section-padding bg-background">
      <div className="section-container max-w-[36rem]">
        <motion.div className="text-center" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <CheckCircle2 size={56} className="mx-auto text-accent" />
          <h1 className="mt-6">Thank you! Your request has been sent.</h1>
          <p className="prose-body mt-4">I'll get back to you personally within 24 hours with a response adapted to your situation. In the meantime, explore the resources below.</p>
          <Button className="mt-8" size="lg" asChild><Link to="/en">Back to home</Link></Button>
        </motion.div>
      </div>
    </section>
    <FunnelNextStep overline="In the meantime" title="Explore while I prepare your response" steps={nextSteps} background="alt" />
  </>
);
export default ThankYouPageEn;
