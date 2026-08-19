import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectRow from "@/components/sections/ProjectRow";
import Rule from "@/components/ui/Rule";
import { portfolioProjects } from "@/lib/data";

export default function PortfolioSection() {
  const featured = portfolioProjects.slice(0, 4);
  const remaining = portfolioProjects.length - featured.length;

  return (
    <section className="bg-white px-4 py-24 text-black dark:bg-black dark:text-white sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader label="Selected Work" title="Proof, not promises." />

        <div>
          {featured.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={index}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

        {remaining > 0 && (
          <>
            <Rule className="mt-12" />
            <div className="pt-12">
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 text-sm font-medium"
              >
                View all {portfolioProjects.length} projects
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
