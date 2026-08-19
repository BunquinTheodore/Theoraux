"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectRow from "@/components/sections/ProjectRow";
import { portfolioProjects } from "@/lib/data";
import CTABanner from "@/components/sections/CTABanner";

const categories = ["All", "Web", "Mobile", "System"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

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
              Portfolio
            </p>
            <h1 className="font-display mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Our work speaks for itself.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
              Explore a selection of projects that showcase our technical
              expertise and the real-world impact of our solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + List */}
      <section className="bg-white px-4 py-24 text-black dark:bg-black dark:text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-8 pb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "text-black underline underline-offset-8 dark:text-white"
                    : "text-neutral-500 hover:text-accent dark:text-neutral-400 dark:hover:text-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div>
            {filtered.map((project, index) => (
              <ProjectRow
                key={project.id}
                project={project}
                index={index}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
