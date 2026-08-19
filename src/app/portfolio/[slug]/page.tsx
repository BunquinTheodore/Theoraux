import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { portfolioProjects } from "@/lib/data";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";
import Rule from "@/components/ui/Rule";
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
    alternates: { canonical: `/portfolio/${project.id}` },
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      images: [
        { url: typeof project.image === "string" ? project.image : "/og-image.png" },
      ],
    },
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
    <article>
      {/* Header */}
      <section className="bg-white px-4 pt-36 pb-16 text-black dark:bg-black dark:text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/portfolio"
            className="mb-10 inline-flex items-center text-sm text-neutral-500 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
          >
            <ArrowLeft size={14} className="mr-2" />
            Back to Portfolio
          </Link>

          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
            {project.category}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
            {project.clientLabel === "Credits" && (
              <span>
                {project.clientLabel}: {project.client}
              </span>
            )}
            <span>Timeline: {project.timeline}</span>
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 border border-black/30 px-6 py-3 text-sm transition-colors hover:border-black hover:bg-black hover:text-white dark:border-white/30 dark:hover:border-white dark:hover:bg-white dark:hover:text-black"
            >
              {project.liveLabel ?? "Visit Live Site"}
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </section>

      {/* Image */}
      <section className="bg-white px-4 pb-20 dark:bg-black sm:px-6 lg:px-8">
        <div className="relative mx-auto aspect-[16/10] w-full max-w-6xl overflow-hidden rounded border border-black/10 dark:border-white/10 sm:aspect-[16/9]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Challenge & Approach */}
      <section className="bg-white px-4 py-24 text-black dark:bg-black dark:text-white sm:px-6 sm:py-32 lg:px-8">
        <Rule />
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 pt-12 sm:grid-cols-2">
          <div>
            <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400">01</span>
            <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight">
              The Challenge
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              {project.challenge}
            </p>
          </div>
          <div>
            <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400">02</span>
            <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight">
              Our Approach
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
              {project.approach}
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-white px-4 py-24 text-black dark:bg-black dark:text-white sm:px-6 sm:py-32 lg:px-8">
        <Rule />
        <div className="mx-auto max-w-5xl pt-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {project.results.map((result) => (
              <div key={result.label}>
                <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  {result.metric}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {result.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-3 border-t border-black/10 pt-10 dark:border-white/10">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="border border-black/20 px-3 py-1.5 font-mono text-xs text-neutral-600 dark:border-white/20 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="bg-white px-4 py-16 text-black dark:bg-black dark:text-white sm:px-6 lg:px-8">
        <Rule />
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 pt-12 sm:flex-row sm:items-center">
          <Link
            href={`/portfolio/${nextProject.id}`}
            className="group flex items-center gap-4"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded border border-black/10 dark:border-white/10">
              <Image
                src={nextProject.image}
                alt={nextProject.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                Next Project
              </p>
              <p className="mt-1 flex items-center gap-1 font-medium transition-colors">
                {nextProject.title}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </p>
            </div>
          </Link>
          <Button href="/contact" variant="outline">
            Start Your Project
          </Button>
        </div>
      </section>

      <CTABanner />
    </article>
  );
}
