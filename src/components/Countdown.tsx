import { motion } from "framer-motion";
import { wedding } from "../data/wedding";
import { SectionHeading } from "./SectionHeading";
import { FloatingParticles } from "./FloatingParticles";

function DateDisplay() {
  // Extract "09 August 2026" from the dateDisplay like "Monday, 09 August 2026"
  const dateParts = wedding.dateDisplay.split(", ");
  const dateString = dateParts.length > 1 ? dateParts[1] : wedding.dateDisplay;

  return (
    <motion.div
      className="countdown-card group relative mx-auto max-w-md"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      whileHover={{ y: -4 }}
    >
      {/* Corner ornaments */}
      <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-gold/40" />
      <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-gold/40" />
      <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-gold/40" />
      <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-gold/40" />

      <div className="relative px-4 py-10 md:px-5 md:py-12 text-center">
        <motion.span
          className="countdown-digit block text-4xl tracking-wider md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {dateString}
        </motion.span>
        <span className="type-body-serif mt-4 block text-lg text-gold md:text-xl">
          The Big Day
        </span>
      </div>

      {/* Shimmer on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      </div>
    </motion.div>
  );
}

export function Countdown() {
  return (
    <section className="countdown-section relative z-20 bg-cream pattern-bg">
      <div
        className="absolute -top-px left-0 right-0 h-px bg-cream"
        aria-hidden
      />
      <FloatingParticles className="opacity-50" />

      {/* Soft ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-rose/10 blur-3xl" />
      </div>

      {/* Decorative side flourishes */}
      <div className="pointer-events-none absolute left-4 top-1/2 hidden -translate-y-1/2 opacity-20 md:block lg:left-12">
        <svg width="40" height="200" viewBox="0 0 40 200" fill="none">
          <path
            d="M20 0 Q40 50 20 100 Q0 150 20 200"
            stroke="#c9a962"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="20" cy="50" r="3" fill="#c9a962" />
          <circle cx="20" cy="100" r="4" fill="#c9a962" />
          <circle cx="20" cy="150" r="3" fill="#c9a962" />
        </svg>
      </div>
      <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 scale-x-[-1] opacity-20 md:block lg:right-12">
        <svg width="40" height="200" viewBox="0 0 40 200" fill="none">
          <path
            d="M20 0 Q40 50 20 100 Q0 150 20 200"
            stroke="#c9a962"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="20" cy="50" r="3" fill="#c9a962" />
          <circle cx="20" cy="100" r="4" fill="#c9a962" />
          <circle cx="20" cy="150" r="3" fill="#c9a962" />
        </svg>
      </div>

      <div className="content-wrap relative py-16 md:py-20">
        <SectionHeading
          label="Save the Date"
          title="The Big Day"
          scriptTitle
          subtitle="A date to remember"
        />

        {/* Date card */}
        <div className="relative mx-auto max-w-3xl">
          <DateDisplay />

          {/* Connecting line beneath card */}
          <motion.div
            className="mx-auto mt-10 h-px max-w-md bg-gradient-to-r from-transparent via-gold/40 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.p
            className="type-body-serif mt-8 text-center italic text-charcoal/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            We can't wait to celebrate with you
          </motion.p>
        </div>
      </div>
    </section>
  );
}
