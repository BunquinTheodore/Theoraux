"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/sections/CTABanner";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Client-Focused",
    description:
      "Every decision we make is guided by what's best for our clients. Your success is our success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description:
      "We stay at the cutting edge of technology to deliver solutions that give you a competitive advantage.",
  },
  {
    icon: Heart,
    title: "Quality First",
    description:
      "We never cut corners. Every line of code, every pixel, and every interaction is crafted with care.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear communication, honest timelines, and no surprises. We believe trust is built through openness.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-light pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-600">
              About Us
            </span>
            <h1 className="mt-4 text-4xl font-bold text-dark sm:text-5xl">
              We Build Technology That{" "}
              <span className="text-primary-600">Empowers</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-dark/60">
              Theoraux was founded with a simple belief: every business deserves
              software that works exactly the way they need it to. No
              compromises, no workarounds — just intelligent solutions tailored
              to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[400px] overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="p-8 text-center">
                    <p className="text-6xl font-bold">T</p>
                    <p className="mt-4 text-xl font-medium opacity-80">
                      Est. 2021
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-dark sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-dark/60">
                Theoraux started as a small team of developers who were
                frustrated with the gap between what businesses needed and what
                off-the-shelf software delivered. We saw companies struggling
                with clunky tools that didn&apos;t fit their workflows, wasting
                time and money on solutions that were &ldquo;close enough.&rdquo;
              </p>
              <p className="mt-4 text-lg leading-relaxed text-dark/60">
                So we decided to do something about it. We built Theoraux to be
                the partner that listens first and builds second. Every project
                starts with understanding — your processes, your challenges, your
                goals — and ends with a solution that fits like a glove.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-dark/60">
                Today, we&apos;ve delivered 25 projects for 8 clients
                across diverse industries, and we&apos;re just getting started.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-white p-10 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50">
                <Target size={24} className="text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-dark">Our Mission</h3>
              <p className="mt-4 text-lg leading-relaxed text-dark/60">
                To make intelligent automation accessible to businesses of all
                sizes by delivering custom software solutions that streamline
                operations, eliminate inefficiencies, and drive sustainable
                growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl bg-white p-10 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50">
                <Eye size={24} className="text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-dark">Our Vision</h3>
              <p className="mt-4 text-lg leading-relaxed text-dark/60">
                To be the go-to technology partner for businesses worldwide —
                known for turning complex challenges into elegant, efficient
                software solutions that empower people and organizations to
                achieve their full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Values"
            title="What Drives Us"
            description="These core values guide everything we do, from how we write code to how we communicate with clients."
          />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                  <value.icon size={28} />
                </div>
                <h3 className="text-lg font-semibold text-dark">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dark/60">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-primary-600 sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-dark/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
