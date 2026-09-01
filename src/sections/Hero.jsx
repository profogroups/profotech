import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";

export default function Hero() {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    initial: { y: "100%" },
    animate: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const fadeUpVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Technical metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-meta text-uppercase-meta"
        >
          <span>[ ESTABLISHED 2026 ]</span>
          <span className="hero-meta-divider">—</span>
          <span>DIGITAL PRODUCT STUDIO & IT SOLUTIONS</span>
        </motion.div>

        {/* Headline with line reveals */}
        <motion.h1
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="title-large hero-headline"
        >
          <div className="hero-headline-line-wrapper">
            <motion.div variants={lineVariants}>WE BUILD</motion.div>
          </div>
          <div className="hero-headline-line-wrapper">
            <motion.div variants={lineVariants}>WHAT'S NEXT.</motion.div>
          </div>
        </motion.h1>

        {/* Supporting Copy & CTAs */}
        <div className="hero-footer-grid">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hero-subtext"
          >
            Digital products, custom software, and growth solutions for businesses ready to move forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hero-ctas"
          >
            <Button to="/contact" variant="primary" cursorText="OPEN">
              Start a Project
            </Button>
            <Button to="/work" variant="secondary" cursorText="EXPLORE">
              Explore Our Work
            </Button>
          </motion.div>
        </div>

        {/* Decorative Grid Line */}
        <div className="hero-divider-wrapper">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hero-divider border-b"
          />
        </div>
      </div>
    </section>
  );
}
