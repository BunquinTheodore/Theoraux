"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioProjects } from "@/lib/data";
import CTABanner from "@/components/sections/CTABanner";

const categories = ["All", "Web", "Mobile", "System"];
const PAGE_SIZE = 6;

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  const visible = showAll ? filtered : filtered.slice(0, PAGE_SIZE);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setShowAll(false);
  };

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
              Portfolio
            </span>
            <h1 className="mt-4 text-4xl font-bold text-dark sm:text-5xl">
              Our <span className="text-primary-600">Work</span> Speaks for
              Itself
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-dark/60">
              Explore a selection of projects that showcase our technical
              expertise and the real-world impact of our solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary-600 text-white"
                    : "bg-light text-dark/60 hover:bg-primary-50 hover:text-primary-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {visible.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="group block overflow-hidden rounded-2xl bg-light transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex flex-wrap gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-xl font-semibold text-dark">
                          {project.title}
                        </h3>
                        <ArrowUpRight
                          size={18}
                          className="mt-1 shrink-0 text-dark/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-600"
                        />
                      </div>
                      {project.clientLabel === "Credits" && (
                        <p className="mt-2 text-sm text-dark/50">
                          {project.clientLabel}: {project.client}
                        </p>
                      )}
                      <p className="mt-2 text-sm leading-relaxed text-dark/60">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length > PAGE_SIZE && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="inline-flex items-center justify-center rounded-full border-2 border-primary-600 px-8 py-3 text-sm font-semibold text-primary-600 transition-all hover:bg-primary-600 hover:text-white"
              >
                {showAll ? "See Less" : "See All"}
              </button>
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
