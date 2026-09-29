import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectBrief } from "@/components/project-brief";
import { ProjectLookbook } from "@/components/project-lookbook";
import { getDictionary, getWorkSection, isLocale, pathFor } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ section?: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const { section } = await searchParams;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  const group = section ? getWorkSection(locale, section) : undefined;
  if (group && group.rest.length > 0) {
    return pageMetadata(locale, {
      title: group.title,
      description: dict.work.sectionRest,
      path: `/work?section=${group.id}`,
    });
  }
  return pageMetadata(locale, { title: dict.nav.work, description: dict.work.text, path: "/work" });
}

export default async function WorkPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ section?: string }>;
}) {
  const { locale } = await params;
  const { section } = await searchParams;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const group = section ? getWorkSection(locale, section) : undefined;

  if (group && group.rest.length > 0) {
    return (
      <div className="bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
          <p className="text-sm font-medium text-brand">{dict.work.kicker}</p>
          <h1 className="mt-2 text-3xl font-medium text-ink sm:text-4xl">{group.title}</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate">{dict.work.sectionRest}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {group.rest.map((project) => (
              <ProjectBrief
                key={project.slug}
                project={project}
                href={pathFor(locale, `/work/${project.slug}`)}
              />
            ))}
          </div>
          <Link href={pathFor(locale, "/work")} className="mt-10 inline-block text-sm font-medium text-ink hover:text-brand">
            {dict.work.all}
          </Link>
        </div>
      </div>
    );
  }


  return (
    <div className="bg-sand">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 pb-1 pt-8 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:pt-10">
        <div>
          <p className="text-sm font-medium text-brand">{dict.work.kicker}</p>
          <h1 className="mt-2 max-w-xl text-3xl font-medium text-ink sm:text-4xl">{dict.work.title}</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate">{dict.work.text}</p>
        </div>
        <p className="max-w-md text-sm leading-6 text-slate">{dict.work.pick}</p>
      </div>
      <ProjectLookbook
        projects={dict.projects}
        workBase={pathFor(locale, "/work")}
        labels={{
          list: dict.work.kicker,
          view: dict.work.view,
          published: dict.work.published,
          sample: dict.work.sample,
        }}
      />
    </div>
  );
}
