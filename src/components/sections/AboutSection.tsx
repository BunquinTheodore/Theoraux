"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { stats, portfolioProjects } from "@/lib/data";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const showcase = portfolioProjects.slice(3, 6);

export default function AboutSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left - Visual: real project wall */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid h-[400px] grid-cols-2 gap-4"
          >
            <Link
              href={`/portfolio/${showcase[0].id}`}
              className="group relative row-span-2 overflow-hidden rounded-3xl"
            >
              <Image
                src={showcase[0].image}
                alt={showcase[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/0 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">
                {showcase[0].title}
              </p>
            </Link>
            <Link
              href={`/portfolio/${showcase[1].id}`}
              className="group relative overflow-hidden rounded-3xl"
            >
              <Image
                src={showcase[1].image}
                alt={showcase[1].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/0 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white">
                {showcase[1].title}
              </p>
            </Link>
            <Link
              href={`/portfolio/${showcase[2].id}`}
              className="group relative overflow-hidden rounded-3xl"
            >
              <Image
                src={showcase[2].image}
                alt={showcase[2].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/0 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white">
                {showcase[2].title}
              </p>
            </Link>
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
              We don&apos;t do one-size-fits-all. Every web app, mobile app, and
              automation system we ship is custom-built around how your
              business actually works.
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
