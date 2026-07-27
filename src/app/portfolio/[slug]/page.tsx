import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { portfolioProjects } from "@/lib/data";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.id === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Theoraux Case Study`,
    description: project.description,
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.id === slug);
  if (!project) notFound();

  const currentIndex = portfolioProjects.findIndex((p) => p.id === slug);
  const nextProject =
    portfolioProjects[(currentIndex + 1) % portfolioProjects.length];

  return (
    <article className="pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/portfolio"
          className="mb-8 inline-flex items-center text-sm text-dark/50 transition-colors hover:text-primary-600"
        >
          <ArrowLeft size={14} className="mr-1" />
          Back to Portfolio
        </Link>

        <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-600">
          {project.category}
        </span>
        <h1 className="mt-4 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl">
          {project.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-dark/50">
          <span>Client: {project.client}</span>
          <span>&middot;</span>
          <span>Timeline: {project.timeline}</span>
        </div>

        <div className="relative mt-10 h-[300px] overflow-hidden rounded-2xl sm:h-[420px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Results strip */}
        <div className="mt-10 grid grid-cols-1 gap-6 rounded-3xl bg-light p-8 sm:grid-cols-3 lg:p-10">
          {project.results.map((result) => (
            <div key={result.label} className="text-center sm:text-left">
              <p className="text-3xl font-bold text-primary-600 sm:text-4xl">
                {result.metric}
              </p>
              <p className="mt-2 text-sm text-dark/60">{result.label}</p>
            </div>
          ))}
        </div>

        {/* Challenge & Approach */}
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-dark">The Challenge</h2>
            <p className="mt-4 leading-relaxed text-dark/70">
              {project.challenge}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-dark">Our Approach</h2>
            <p className="mt-4 leading-relaxed text-dark/70">
              {project.approach}
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-dark">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Next project */}
        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-gray-100 pt-10 sm:flex-row sm:items-center">
          <Link
            href={`/portfolio/${nextProject.id}`}
            className="group flex items-center gap-4"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={nextProject.image}
                alt={nextProject.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div>
              <p className="text-xs text-dark/50">Next Project</p>
              <p className="flex items-center gap-1 font-semibold text-dark transition-colors group-hover:text-primary-600">
                {nextProject.title}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </p>
            </div>
          </Link>
          <Button href="/contact">Start Your Project</Button>
        </div>
      </div>

      <div className="mt-24">
        <CTABanner />
      </div>
    </article>
  );
}
