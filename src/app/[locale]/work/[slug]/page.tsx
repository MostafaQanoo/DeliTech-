import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { ProjectCover } from "@/components/project-cover";
import { getDictionary, getProject, isLocale, locales, pathFor, portfolioSlugs } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((locale) => portfolioSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const project = getProject(locale, slug);
  if (!project) return {};
  return pageMetadata(locale, {
    title: project.name,
    description: project.summary,
    path: `/work/${slug}`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = getProject(locale, slug);
  if (!project) notFound();
  const dict = getDictionary(locale);
  const index = dict.projects.findIndex((item) => item.slug === project.slug);
  const total = dict.projects.length;
  const prev = dict.projects[(index - 1 + total) % total];
  const next = dict.projects[(index + 1) % total];

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b border-line bg-[linear-gradient(#ffffff,#f6f7f8)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(246,97,53,0.14),transparent_46%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-8 sm:px-6 lg:pb-20">
          <div className="flex items-center justify-between text-sm text-slate">
            <Link href={pathFor(locale, "/work")} className="hover:text-ink">
              {dict.work.all}
            </Link>
            <p className="tabular-nums">
              {String(index + 1).padStart(2, "0")}
              <span className="px-2 text-[#c2c7cc]">/</span>
              {String(total).padStart(2, "0")}
            </p>
          </div>
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div className="order-2 flex items-center justify-center lg:order-1">
              <ProjectCover
                src={project.image}
                alt={project.name}
                width={project.width}
                height={project.height}
                eager
                sizes="(max-width: 1024px) 100vw, 640px"
                className="max-h-[58vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-medium text-brand">{project.kind}</p>
              <h1 className="display-xl mt-3 text-ink">{project.name}</h1>
              <p className="mt-5 text-lg leading-8 text-[#272e34]">{project.summary}</p>
              <p className="mt-4 text-slate">{project.concept ? dict.work.concept : dict.work.note}</p>
              {project.concept ? null : <p className="mt-2 text-sm text-slate">{dict.work.visual}</p>}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <ButtonLink href={`${pathFor(locale, "/contact")}?project=${project.slug}`}>
                  {dict.nav.cta}
                </ButtonLink>
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-accent underline decoration-[#1764ca]/30 underline-offset-4 hover:decoration-[#1764ca]"
                  >
                    {dict.work.visit}
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav className="border-t border-line bg-white">
        <div className="mx-auto grid max-w-6xl md:grid-cols-2">
          {[
            { item: prev, label: dict.work.prev },
            { item: next, label: dict.work.next },
          ].map(({ item, label }) => (
            <Link
              key={label}
              href={pathFor(locale, `/work/${item.slug}`)}
              className="group flex items-center gap-4 border-b border-line p-5 transition hover:bg-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f66135] sm:p-7 md:border-e md:last:border-e-0"
            >
              <ProjectCover
                src={item.image}
                alt=""
                width={item.width}
                height={item.height}
                sizes="96px"
                className="size-20 shrink-0 rounded-xl border border-line bg-sand object-contain p-1.5"
              />
              <span>
                <span className="text-xs text-slate">{label}</span>
                <span className="mt-1 block text-lg font-medium text-ink group-hover:text-brand">{item.name}</span>
                <span className="mt-1 block text-sm text-slate">{item.kind}</span>
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
