"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="bg-white px-4 py-28 text-black dark:bg-black dark:text-white sm:px-6 sm:py-40 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Let&apos;s build something people actually use.
          </h2>
          <div className="mt-10">
            <Button href="/contact" variant="solid" size="lg">
              Start a project <span aria-hidden>→</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
