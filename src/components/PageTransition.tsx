import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0 },
};

const pageTransition = {
  type: "tween" as const,
  ease: "easeInOut" as const,
  duration: 0.28,
};

const PageTransition = ({ children, locationKey }: { children: React.ReactNode; locationKey: string }) => (
  <motion.div
    key={locationKey}
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

export default PageTransition;
