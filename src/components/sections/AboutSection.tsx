"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[400px] overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-7xl font-bold">5+</p>
                  <p className="mt-2 text-xl font-medium opacity-80">
                    Years of Innovation
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-2xl bg-primary-300 opacity-30" />
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-primary-300 opacity-20" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-3 inline-block rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600">
              About Theoraux
            </span>
            <h2 className="mt-2 text-3xl font-bold text-dark sm:text-4xl">
              We Build Software That{" "}
              <span className="text-primary-600">Works for You</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-dark/60">
              Theoraux is a software development company dedicated to creating
              intelligent, tailored solutions for individuals and businesses. We
              don&apos;t believe in one-size-fits-all — every project we take on
              is custom-built to solve your unique challenges.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-dark/60">
              From web applications and mobile apps to process automation and
              custom systems, our team combines technical expertise with a deep
              understanding of business needs to deliver software that truly
              makes a difference.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="outline">
                Learn More About Us <ArrowRight className="ml-2" size={16} />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 gap-8 rounded-3xl bg-light p-8 sm:grid-cols-4 lg:p-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-primary-600 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-dark/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
