import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motion";

export function SectionHeading({
  label,
  title,
  subtitle,
  light = false,
  scriptTitle = false,
  noDivider = false,
  mainClassName = "mb-12 text-center md:mb-14",
}: {
  label: string;
  title: ReactNode;
  subtitle?: string;
  light?: boolean;
  scriptTitle?: boolean;
  noDivider?: boolean;
  mainClassName?: string;
}) {
  return (
    <motion.div
      className={mainClassName}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
    >
      <motion.p
        variants={fadeUp}
        custom={0}
        className={`type-eyebrow mb-3 ${light ? "text-gold/80" : "text-gold"}`}
      >
        {label}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        custom={0.1}
        className={`${
          scriptTitle ? "type-section-script" : "type-section-display"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          custom={0.2}
          className={`type-body-serif mx-auto mt-4 max-w-xl italic ${
            light ? "text-brown/85" : "text-brown/85"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
      {!noDivider && (
        <motion.div
          variants={fadeUp}
          custom={0.3}
          className="divider-ornament mt-8"
        >
          <span className="text-gold/90">✦</span>
        </motion.div>
      )}
    </motion.div>
  );
}
