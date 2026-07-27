"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-white pt-20">
      <HeroBackground />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold leading-[1.05] tracking-tight text-dark sm:text-6xl lg:text-7xl"
        >
          Software people
          <br />
          <span className="text-primary-600">actually enjoy</span> using.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-dark/60"
        >
          Theoraux designs and builds web, mobile, and automation products
          for growing businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-700 hover:shadow-lg"
          >
            Book a Consultation <ArrowRight size={18} />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-600 px-8 py-4 text-base font-semibold text-primary-600 transition-all hover:bg-primary-600 hover:text-white"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
