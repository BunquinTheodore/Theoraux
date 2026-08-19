"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Rule from "@/components/ui/Rule";
import type { StaticImageData } from "next/image";

interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: StaticImageData | string;
}

interface ProjectRowProps {
  project: Project;
  index: number;
  reverse?: boolean;
}

export default function ProjectRow({
  project,
  index,
  reverse = false,
}: ProjectRowProps) {
  return (
    <>
    <Rule />
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 items-center gap-8 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12"
    >
      <div
        className={`order-2 lg:col-span-5 ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
          {project.category}
        </p>
        <h3 className="font-display mt-3 text-3xl font-semibold leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">
          {project.description}
        </p>
        <p className="mt-5 font-mono text-[10px] tracking-[0.1em] text-neutral-500 dark:text-neutral-400">
          {project.tags.join(" / ")}
        </p>
        <Link
          href={`/portfolio/${project.id}`}
          className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-black hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300"
        >
          View project
          <span className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </Link>
      </div>

      <div
        className={`group order-1 lg:col-span-7 ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <Link
          href={`/portfolio/${project.id}`}
          className="relative block aspect-[4/3] w-full overflow-hidden rounded border border-black/10 dark:border-white/10 sm:aspect-[16/10]"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover grayscale transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
          />
        </Link>
      </div>
    </motion.div>
    </>
  );
}
