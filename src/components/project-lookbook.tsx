"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCover } from "@/components/project-cover";

export type ProjectPick = {
  slug: string;
  image: string;
  width: number;
  height: number;
  concept: boolean;
  name: string;
  kind: string;
  summary: string;
};

export function ProjectLookbook({
  projects,
  workBase,
  nameLevel = "h2",
  poster = false,
  labels,
}: {
  projects: ProjectPick[];
  workBase: string;
  nameLevel?: "h2" | "h3";
  poster?: boolean;
  labels: {
    list: string;
    view: string;
    published: string;
    sample: string;
  };
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [rail, setRail] = useState(true);
  const Name = nameLevel;

  useEffect(() => {
    if (poster) return;
    const root = rootRef.current;
    if (!root) return;
    const sheets = [...root.querySelectorAll<HTMLElement>("[data-sheet]")];
    const seen = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!best) return;
        const index = sheets.indexOf(best.target as HTMLElement);
        if (index >= 0) setActive(index);
      },
      { threshold: [0.35, 0.55, 0.75] },
    );
    const frame = new IntersectionObserver(([entry]) => setRail(entry.isIntersecting), {
      threshold: 0.06,
    });
    sheets.forEach((sheet) => seen.observe(sheet));
    frame.observe(root);
    return () => {
      seen.disconnect();
      frame.disconnect();
    };
  }, [poster, projects]);

  return (
    <div ref={rootRef} className={poster ? "" : "relative pb-6"}>
      {poster ? null : (
        <nav
          aria-label={labels.list}
          className={`fixed end-4 top-1/2 z-30 hidden -translate-y-1/2 xl:block ${
            rail ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <ol className="flex flex-col gap-0.5">
            {projects.map((project, index) => {
              const current = index === active;
              return (
                <li key={project.slug}>
                  <a
                    href={`#sheet-${project.slug}`}
                    aria-current={current ? "true" : undefined}
                    aria-label={`${String(index + 1).padStart(2, "0")} ${project.name}`}
                    className={`block px-1 py-0.5 text-[11px] tabular-nums transition-colors ${
                      current ? "text-brand" : "text-slate hover:text-ink"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      )}

      <div className={poster ? "" : "mx-auto max-w-6xl px-4 sm:px-6 xl:pe-14"}>
        {projects.map((project, index) => (
          <article
            key={project.slug}
            id={`sheet-${project.slug}`}
            data-sheet=""
            className={poster ? "sheet-poster scroll-mt-28" : "sheet scroll-mt-28"}
          >
            <div className="sheet-card">
              <div className="grid h-full items-center gap-6 p-5 sm:p-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-10 lg:px-12">
                <div className="relative order-1 flex h-64 items-center justify-center sm:h-80 lg:order-2 lg:h-full">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-[12%] bottom-[10%] h-8 rounded-full bg-[#111111]/10 blur-2xl"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,37,124,0.2),transparent_58%)]"
                  />
                  <ProjectCover
                    src={project.image}
                    alt=""
                    width={project.width}
                    height={project.height}
                    eager={index === 0}
                    sizes="(max-width: 1024px) 100vw, 640px"
                    className="relative max-h-full w-auto max-w-[92%] object-contain"
                  />
                </div>
                <div className="order-2 lg:order-1">
                  <p aria-hidden="true" className="hidden text-[5.5rem] font-medium leading-none text-ink/10 tabular-nums lg:block">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="text-sm font-medium tabular-nums text-brand lg:hidden">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-sm text-slate">{project.kind}</p>
                  <Name className="display-l mt-2 text-ink">{project.name}</Name>
                  <p className="mt-4 max-w-md text-base leading-7 text-[#272e34] lg:line-clamp-4">{project.summary}</p>
                  <p className="mt-3 text-sm text-slate">
                    {project.concept ? labels.sample : labels.published}
                  </p>
                  <Link
                    href={`${workBase}/${project.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-brand"
                  >
                    {labels.view}
                    <ArrowRight className="size-4 rtl:-scale-x-100" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
