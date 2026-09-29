import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectBrief } from "@/components/project-brief";
import { pathFor, type Dictionary } from "@/content/site";

export function WorkBands({ dict }: { dict: Dictionary }) {
  const locale = dict.locale;

  return (
    <div className="mt-10 space-y-12">
      {dict.workSections.map((section) => (
        <section key={section.id} aria-labelledby={`band-${section.id}`}>
          <div className="flex items-end justify-between gap-4">
            <h3 id={`band-${section.id}`} className="text-2xl font-medium text-ink">
              {section.title}
            </h3>
            {section.rest.length > 0 ? (
              <Link
                href={`${pathFor(locale, "/work")}?section=${section.id}`}
                className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-ink hover:text-brand"
              >
                {dict.work.more}
                <ArrowRight className="size-4 rtl:-scale-x-100" />
              </Link>
            ) : null}
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {section.featured.map((project) => (
              <ProjectBrief
                key={project.slug}
                project={project}
                href={pathFor(locale, `/work/${project.slug}`)}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
