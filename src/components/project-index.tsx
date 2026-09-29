"use client";

import { useRef, useState } from "react";
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

export function ProjectIndex({
  projects,
  workBase,
  nameLevel = "h3",
  labels,
}: {
  projects: ProjectPick[];
  workBase: string;
  nameLevel?: "h2" | "h3";
  labels: {
    list: string;
    view: string;
    published: string;
    sample: string;
  };
}) {
  const [active, setActive] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const project = projects[active] ?? projects[0];
  const Name = nameLevel;

  if (!project) return null;

  function choose(index: number) {
    setActive(index);
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    const hidden = rect.bottom < 88 || rect.top > window.innerHeight * 0.72;
    if (!hidden) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    stage.scrollIntoView({ block: "start", behavior: motion ? "auto" : "smooth" });
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    const delta = event.key === "ArrowDown" ? 1 : -1;
    const next = (active + delta + projects.length) % projects.length;
    choose(next);
    requestAnimationFrame(() => {
      document.getElementById(`project-pick-${projects[next]?.slug}`)?.focus();
    });
  }

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
      <div ref={stageRef} className="scroll-mt-28 lg:sticky lg:top-28">
        <div key={project.slug} className="stage-in">
          <div className="relative flex h-[18rem] items-center justify-center overflow-hidden rounded-[1.7rem] bg-[#141416] ring-1 ring-white/10 sm:h-[26rem] lg:h-[32rem]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(246,97,53,0.24),transparent_58%)]"
            />
            <ProjectCover
              src={project.image}
              alt=""
              width={project.width}
              height={project.height}
              eager
              sizes="(max-width: 1024px) 100vw, 640px"
              className="relative max-h-[86%] w-auto max-w-[90%] object-contain drop-shadow-[0_28px_50px_rgba(0,0,0,0.5)]"
            />
          </div>
          <p className="mt-6 text-sm font-medium text-[#f66135]">{project.kind}</p>
          <Name className="display-l mt-2">{project.name}</Name>
          <p className="mt-3 max-w-xl leading-7 text-white/72">{project.summary}</p>
          <p className="mt-3 text-sm text-white/40">
            {project.concept ? labels.sample : labels.published}
          </p>
          <Link
            href={`${workBase}/${project.slug}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white"
          >
            {labels.view}
            <ArrowRight className="size-4 rtl:-scale-x-100" />
          </Link>
        </div>
      </div>

      <div role="radiogroup" aria-label={labels.list} onKeyDown={onKeyDown} className="border-t border-white/10">
        {projects.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.slug}
              id={`project-pick-${item.slug}`}
              type="button"
              role="radio"
              aria-checked={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => choose(index)}
              className={`flex w-full items-center gap-4 border-b border-white/10 px-2 py-3.5 text-start transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f66135] ${
                selected ? "text-white" : "text-white/55 hover:text-white"
              }`}
            >
              <span
                className={`w-8 shrink-0 text-sm tabular-nums ${selected ? "text-[#f66135]" : "text-white/35"}`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={`min-w-0 flex-1 text-lg ${selected ? "font-medium" : ""}`}>{item.name}</span>
              <span
                aria-hidden="true"
                className={`size-1.5 shrink-0 rounded-full bg-[#f66135] ${selected ? "opacity-100" : "opacity-0"}`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
