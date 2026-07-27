"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { portfolioProjects } from "@/lib/data";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const spanClasses = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
];

const heightClasses = ["h-[280px] lg:h-full", "h-[260px]", "h-[260px]"];

export default function PortfolioSection() {
  const featured = portfolioProjects.slice(0, 3);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Our Work" title="Selected Projects" />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`${spanClasses[index]} ${heightClasses[index]}`}
            >
              <Link
                href={`/portfolio/${project.id}`}
                className="group relative block h-full w-full overflow-hidden rounded-3xl"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/10 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary-300">
                    {project.category}
                  </p>
                  <div className="mt-1 flex items-end justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="mb-0.5 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      size={20}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/portfolio" variant="outline">
            View All Projects <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
