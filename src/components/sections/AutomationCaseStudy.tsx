import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import AutomationScenarioExplorer, {
  type AutomationShowcase,
} from "@/components/sections/AutomationScenarioExplorer";
import Button from "@/components/ui/Button";
import CTABanner from "@/components/sections/CTABanner";
import Rule from "@/components/ui/Rule";

interface AutomationProject {
  id: string;
  title: string;
  category: string;
  description: string;
  client: string;
  timeline: string;
  techStack: string[];
  challenge: string;
  approach: string;
  results: Array<{ metric: string; label: string }>;
  automation: AutomationShowcase;
}

interface NextProject {
  id: string;
  title: string;
  image: StaticImageData | string;
}

interface AutomationCaseStudyProps {
  project: AutomationProject;
  nextProject: NextProject;
}

export default function AutomationCaseStudy({
  project,
  nextProject,
}: AutomationCaseStudyProps) {
  return (
    <article>
      <section className="bg-white px-4 pt-36 pb-20 text-black dark:bg-black dark:text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/portfolio"
            className="mb-12 inline-flex items-center text-sm text-neutral-500 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
          >
            <ArrowLeft size={14} className="mr-2" />
            Back to Portfolio
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1.5fr_0.7fr] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em]">
                <span className="border border-black/20 px-3 py-1.5 dark:border-white/20">
                  Automation Case Study
                </span>
                <span className="text-neutral-500 dark:text-neutral-400">
                  {project.client}
                </span>
              </div>
              <h1 className="font-display mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
                {project.description}
              </p>
            </div>

            <div className="border-t border-black/15 pt-6 dark:border-white/15 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                Build Status
              </p>
              <p className="mt-2 text-sm font-medium">{project.timeline}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-black/15 px-2.5 py-1 font-mono text-[10px] text-neutral-600 dark:border-white/15 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid border-y border-black/10 dark:border-white/10 sm:grid-cols-3">
            {project.results.map((result, index) => (
              <div
                key={result.label}
                className={`py-7 sm:px-7 ${
                  index > 0
                    ? "border-t border-black/10 dark:border-white/10 sm:border-l sm:border-t-0"
                    : "sm:pl-0"
                }`}
              >
                <p className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  {result.metric}
                </p>
                <p className="mt-2 max-w-sm text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {result.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AutomationScenarioExplorer showcase={project.automation} />

      <section className="bg-white px-4 py-24 text-black dark:bg-black dark:text-white sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
            Operational Change
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            What changes after automation.
          </h2>

          <div className="mt-12 border-t border-black/10 dark:border-white/10">
            <div className="hidden grid-cols-[0.55fr_1fr_1fr] gap-8 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500 sm:grid">
              <span>Area</span>
              <span>Before</span>
              <span>Automated</span>
            </div>
            {project.automation.comparison.map((item) => (
              <div
                key={item.label}
                className="grid gap-4 border-t border-black/10 py-7 dark:border-white/10 sm:grid-cols-[0.55fr_1fr_1fr] sm:gap-8"
              >
                <p className="font-medium">{item.label}</p>
                <div>
                  <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500 sm:hidden">
                    Before
                  </span>
                  <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {item.before}
                  </p>
                </div>
                <div>
                  <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.16em] text-neutral-500 sm:hidden">
                    Automated
                  </span>
                  <p className="text-sm font-medium leading-relaxed">
                    {item.after}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24 text-black dark:bg-black dark:text-white sm:px-6 sm:py-32 lg:px-8">
        <Rule />
        <div className="mx-auto grid max-w-7xl gap-12 pt-12 lg:grid-cols-3 lg:gap-16">
          <div>
            <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400">01</span>
            <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight">
              The Challenge
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">
              {project.challenge}
            </p>
          </div>
          <div>
            <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400">02</span>
            <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight">
              The System
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-base">
              {project.approach}
            </p>
          </div>
          <div>
            <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400">03</span>
            <h2 className="font-display mt-3 text-2xl font-semibold tracking-tight">
              Guardrails
            </h2>
            <div className="mt-4 space-y-4">
              {project.automation.safeguards.map((safeguard) => (
                <div key={safeguard} className="flex gap-3">
                  <Check size={15} className="mt-1 shrink-0" />
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {safeguard}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-black dark:bg-black dark:text-white sm:px-6 lg:px-8">
        <Rule />
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 pt-12 sm:flex-row sm:items-center">
          <Link
            href={`/portfolio/${nextProject.id}`}
            className="group flex items-center gap-4"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded border border-black/10 bg-white dark:border-white/10">
              <Image
                src={nextProject.image}
                alt={nextProject.title}
                fill
                sizes="64px"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                Next Project
              </p>
              <p className="mt-1 flex items-center gap-1 font-medium">
                {nextProject.title}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </p>
            </div>
          </Link>
          <Button href="/contact" variant="outline">
            Automate Your Workflow
          </Button>
        </div>
      </section>

      <CTABanner />
    </article>
  );
}
