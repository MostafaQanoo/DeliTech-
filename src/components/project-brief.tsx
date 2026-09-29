import Link from "next/link";
import { ProjectCover } from "@/components/project-cover";
import type { Project } from "@/content/site";

export function ProjectBrief({ project, href }: { project: Project; href: string }) {
  return (
    <Link
      href={href}
      className="group flex gap-4 rounded-2xl border border-line bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-32px_rgba(17,17,17,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:flex-col md:p-4"
    >
      <span className="flex h-24 w-28 shrink-0 items-center justify-center rounded-xl bg-sand md:h-44 md:w-full">
        <ProjectCover
          src={project.image}
          alt={project.imageAlt}
          width={project.width}
          height={project.height}
          sizes="(max-width: 768px) 112px, 360px"
          className="max-h-full max-w-full object-contain"
        />
      </span>
      <span className="min-w-0 py-1">
        <span className="block text-xs font-medium text-brand">{project.kind}</span>
        <span className="mt-1 block text-lg font-medium leading-snug text-ink">{project.name}</span>
        <span className="mt-1 line-clamp-2 block text-sm leading-6 text-slate">{project.summary}</span>
      </span>
    </Link>
  );
}
