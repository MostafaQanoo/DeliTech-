import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/button-link";
import { ServiceIcon } from "@/components/service-icon";
import { getDictionary, getService, isLocale, locales, pathFor } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  const slugs = ["systems", "websites", "mobile", "design", "marketing", "operations"];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const service = getService(locale, slug);
  if (!service) return {};
  return pageMetadata(locale, {
    title: service.title,
    description: service.summary,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const service = getService(locale, slug);
  if (!service) notFound();
  const dict = getDictionary(locale);
  const others = dict.services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <section className="border-b border-line bg-[linear-gradient(#ffffff,#f6f7f8)]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <p className="text-sm font-medium text-brand">{dict.nav.services}</p>
          <div className="mt-5 flex size-16 items-center justify-center rounded-xl bg-[#d6542e] text-white">
            <ServiceIcon name={service.icon} />
          </div>
          <h1 className="display-xl mt-5 max-w-4xl text-ink">{service.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate">{service.summary}</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
        <div className="space-y-5 text-lg leading-8 text-[#272e34]">
          {service.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ul className="flex flex-wrap gap-2 pt-2">
            {service.tags.map((tag) => (
              <li key={tag}>
                <Badge
                  variant="outline"
                  className="h-auto rounded-lg border-[#1764ca] bg-white px-2.5 py-1 text-sm font-medium text-[#1764ca]"
                >
                  {tag}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
        <aside className="h-fit rounded-2xl bg-sand p-6">
          <ul className="space-y-3">
            {service.outcomes.map((outcome) => (
              <li key={outcome} className="rounded-xl bg-white px-4 py-3 text-ink">
                {outcome}
              </li>
            ))}
          </ul>
          <ButtonLink href={pathFor(locale, "/contact")} className="mt-6 w-full">
            {dict.nav.cta}
          </ButtonLink>
        </aside>
      </section>
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-sm font-medium text-brand">{dict.nav.services}</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={pathFor(locale, `/services/${item.slug}`)}
                  className="block rounded-xl border border-line px-4 py-4 hover:bg-sand"
                >
                  <span className="font-medium text-ink">{item.title}</span>
                  <span className="mt-1 block text-sm text-slate">{item.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
