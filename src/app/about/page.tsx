"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/sections/CTABanner";
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  ShoppingCart,
  Landmark,
  Truck,
  Users,
  Building2,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

const founder = teamMembers.find((m) => m.role.includes("Founder"))!;

const industries = [
  {
    icon: ShoppingCart,
    title: "E-Commerce & Retail",
    description: "Storefronts, checkout, and inventory systems built to sell.",
    projectId: "shopflow",
  },
  {
    icon: Landmark,
    title: "FinTech & Banking",
    description: "Secure, compliant financial products people trust.",
    projectId: "fintrack",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "Inventory and warehouse systems that cut costly errors.",
    projectId: "stocksense",
  },
  {
    icon: Users,
    title: "SaaS & Sales Tech",
    description: "CRMs and internal tools that sales teams actually use.",
    projectId: "taskpulse",
  },
  {
    icon: Building2,
    title: "Corporate & Professional Services",
    description: "Marketing sites and CMS platforms built to convert.",
    projectId: "greenleaf",
  },
  {
    icon: Workflow,
    title: "Operations & Automation",
    description: "Dashboards and workflows that remove manual busywork.",
    projectId: "autoflow",
  },
];

const values = [
  {
    icon: Target,
    title: "Discovery Before Code",
    description:
      "Every engagement starts by mapping your actual workflow, not a generic template we force your business into.",
  },
  {
    icon: Lightbulb,
    title: "Proven Over Trendy",
    description:
      "We build on technology that will still make sense in three years — not whatever framework is trending this month.",
  },
  {
    icon: Heart,
    title: "Measured, Not Vague",
    description:
      "Every project ships with real numbers attached — load times, conversion lifts, hours saved — not just \"it's done.\"",
  },
  {
    icon: Eye,
    title: "Fixed Timelines",
    description:
      "You get a realistic delivery window upfront and weekly progress updates, not silence until the invoice.",
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
              <div className="relative h-[400px] overflow-hidden rounded-3xl bg-gradient-to-br from-primary-50 to-primary-100">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-contain object-top p-8"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <p className="text-sm font-semibold text-dark">
                      {founder.name}
                    </p>
                    <p className="text-xs text-dark/50">
                      {founder.role}, Theoraux
                    </p>
                  </div>
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-600 shadow-sm">
                    Est. 2021
                  </span>
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
          <SectionHeader label="Our Values" title="What Drives Us" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl border border-gray-100 p-8 transition-all duration-300 hover:border-primary-200 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    <value.icon size={22} />
                  </div>
                  <span className="text-3xl font-bold text-gray-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-dark">
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

      {/* Industries */}
      <section className="bg-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Where We've Worked"
            title="Industries We Know"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={`/portfolio/${industry.projectId}`}
                  className="group flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                      <industry.icon size={22} />
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-dark/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-600"
                    />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-dark">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-dark/60">
                    {industry.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
