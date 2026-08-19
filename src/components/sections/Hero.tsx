"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FlowBackground from "@/components/sections/FlowBackground";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col justify-between overflow-hidden bg-white px-4 pt-36 pb-16 text-black dark:bg-black dark:text-white sm:px-6 lg:px-8">
      <FlowBackground />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500"
        >
          <p>Theoraux — Software Studio</p>
          <p className="mt-1">Philippines / Available Worldwide</p>
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display mt-8 max-w-6xl text-6xl font-semibold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl"
        >
          Software people
          <br />
          actually enjoy using.
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 max-w-lg text-base leading-relaxed text-neutral-400 sm:text-lg"
        >
          We design and build web, mobile, and automation products for
          growing businesses.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-8"
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
          >
            View our work
            <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1">
              ↘
            </span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-black/30 px-6 py-3 text-sm transition-colors hover:border-accent hover:bg-accent hover:text-white dark:border-white/30 dark:hover:border-accent dark:hover:bg-accent dark:hover:text-white"
          >
            Start a project <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative mx-auto w-full max-w-7xl"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-600">
          Scroll to explore ↓
        </p>
      </motion.div>
    </section>
  );
}
