"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/sections/CTABanner";
import Rule from "@/components/ui/Rule";
import { ArrowUpRight } from "lucide-react";

const founder = teamMembers.find((m) => m.role.includes("Founder"))!;

const industries = [
  {
    title: "E-Commerce & Retail",
    description: "Custom Shopify storefronts built to convert first-time visitors.",
    projectId: "shipaw",
  },
  {
    title: "FinTech & Personal Finance",
    description: "Conversational budgeting tools that unify e-wallets, banks, and cards.",
    projectId: "tarsi",
  },
  {
    title: "Health & Wellness",
    description: "Premium wellness experiences, from booking to brand.",
    projectId: "corepluus",
  },
  {
    title: "Public Safety & Disaster Response",
    description: "Real-time monitoring that keeps entire communities informed.",
    projectId: "alerto",
  },
  {
    title: "Nonprofit & Education",
    description: "Giving and community platforms built for long-term trust.",
    projectId: "shsadc",
  },
  {
    title: "Creative & Marketing Agencies",
    description: "Portfolio sites that showcase work across every industry.",
    projectId: "kreativnomads",
  },
];

const values = [
  {
    title: "Discovery Before Code",
    description:
      "Every engagement starts by mapping your actual workflow, not a generic template we force your business into.",
  },
  {
    title: "Proven Over Trendy",
    description:
      "We build on technology that will still make sense in three years — not whatever framework is trending this month.",
  },
  {
    title: "Measured, Not Vague",
    description:
      "Every project ships with real numbers attached — load times, conversion lifts, hours saved — not just \"it's done.\"",
  },
  {
    title: "Fixed Timelines",
    description:
      "You get a realistic delivery window upfront and weekly progress updates, not silence until the invoice.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white px-4 pt-36 pb-20 text-black dark:bg-black dark:text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
              About Us
            </p>
            <h1 className="font-display mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              We build technology that empowers.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
              Theoraux was founded with a simple belief: every business
              deserves software that works exactly the way they need it to.
              No compromises, no workarounds — just intelligent solutions
              tailored to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white px-4 py-24 text-black dark:bg-black dark:text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded border border-black/10 bg-neutral-100 dark:border-white/10 dark:bg-neutral-900">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                {founder.name} — {founder.role} · Est. 2021
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                Our Story
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                Theoraux started as a small team of developers who were
                frustrated with the gap between what businesses needed and
                what off-the-shelf software delivered. We saw companies
                struggling with clunky tools that didn&apos;t fit their
                workflows, wasting time and money on solutions that were
                &ldquo;close enough.&rdquo;
              </p>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                So we decided to do something about it. We built Theoraux to
                be the partner that listens first and builds second. Every
                project starts with understanding — your processes, your
                challenges, your goals — and ends with a solution that fits
                like a glove.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                Today, we&apos;ve delivered 25 projects for 8 clients across
                diverse industries, and we&apos;re just getting started.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white px-4 py-24 text-black dark:bg-black dark:text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Rule />
          <div className="grid grid-cols-1 gap-12 pt-12 md:grid-cols-2 md:gap-0 md:divide-x md:divide-black/10 dark:md:divide-white/10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:pr-12"
            >
              <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400">01</span>
              <h3 className="font-display mt-4 text-3xl font-semibold tracking-tight">
                Our Mission
              </h3>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                To make intelligent automation accessible to businesses of
                all sizes by delivering custom software solutions that
                streamline operations, eliminate inefficiencies, and drive
                sustainable growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:pl-12"
            >
              <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400">02</span>
              <h3 className="font-display mt-4 text-3xl font-semibold tracking-tight">
                Our Vision
              </h3>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                To be the go-to technology partner for businesses worldwide —
                known for turning complex challenges into elegant, efficient
                software solutions that help people and organizations reach
                their full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white px-4 py-24 text-black dark:bg-black dark:text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader label="Our Values" title="What Drives Us" />
          <Rule />
          <div className="grid grid-cols-1 gap-10 pt-12 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-3 text-xl font-semibold tracking-tight">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-24 text-black dark:bg-black dark:text-white sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Where We've Worked"
            title="Industries We Know"
          />
        </div>
        <Rule />
        <div>
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
            >
              <Link
                href={`/portfolio/${industry.projectId}`}
                className="group relative block border-b border-black/10 transition-colors duration-300 hover:bg-black/[0.02] dark:border-white/10 dark:hover:bg-white/[0.04]"
                style={{
                  marginLeft: "calc(50% - 50vw)",
                  marginRight: "calc(50% - 50vw)",
                }}
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 sm:flex-row sm:items-center sm:gap-8 sm:px-6 sm:py-8 lg:px-8">
                  <span className="font-mono text-sm text-neutral-500 transition-colors duration-300 group-hover:text-black dark:text-neutral-400 dark:group-hover:text-white sm:w-10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1.5 sm:w-72 sm:shrink-0">
                    {industry.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:flex-1">
                    {industry.description}
                  </p>
                  <ArrowUpRight
                    size={18}
                    className="hidden shrink-0 text-neutral-500 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black dark:text-neutral-400 dark:group-hover:text-white sm:block"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
