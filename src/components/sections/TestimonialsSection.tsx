"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Rule from "@/components/ui/Rule";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  if (!active) return null;

  return (
    <section className="bg-white px-4 py-24 text-black dark:bg-black dark:text-white sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
          What Clients Say
        </p>

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="mt-8"
          >
            <p className="font-display max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              &ldquo;{active.quote}&rdquo;
            </p>
            <footer className="mt-8 text-sm text-neutral-600 dark:text-neutral-400">
              {active.name} — {active.role}, {active.company}
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        {testimonials.length > 1 && (
          <>
          <Rule className="mt-12" />
          <div className="flex items-center gap-6 pt-8">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="text-sm text-neutral-500 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
            >
              ← Prev
            </button>
            <span className="font-mono text-[10px] text-neutral-500 dark:text-neutral-600">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="text-sm text-neutral-500 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
            >
              Next →
            </button>
          </div>
          </>
        )}
      </div>
    </section>
  );
}
