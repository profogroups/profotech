import React from "react";
import { motion } from "framer-motion";

export default function Reveal({
  children,
  width = "100%",
  delay = 0,
  duration = 0.6,
  y = 40,
  x = 0
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}
