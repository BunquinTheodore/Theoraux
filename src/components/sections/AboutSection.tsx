"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Rule from "@/components/ui/Rule";

const pillars = ["Strategy", "Design", "Engineering", "Launch"];

export default function AboutSection() {
  return (
    <section className="bg-white px-4 py-24 text-black dark:bg-black dark:text-white sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
            About Theoraux
          </p>
          <h2 className="font-display mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            We don&apos;t believe in one-size-fits-all software.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
            Every product we build is shaped around how the business actually
            works — from the interface people interact with to the systems
            running behind it.
          </p>

          <Rule className="mt-12" />
          <div className="flex flex-wrap gap-x-10 gap-y-4 pt-8">
            {pillars.map((pillar) => (
              <span
                key={pillar}
                className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400"
              >
                {pillar}
              </span>
            ))}
          </div>

          <Link
            href="/about"
            className="group mt-10 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
          >
            Learn more about us
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
