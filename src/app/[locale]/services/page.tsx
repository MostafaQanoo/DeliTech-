import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/page-hero";
import { ServiceIcon } from "@/components/service-icon";
import { getDictionary, isLocale, pathFor } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return pageMetadata(locale, {
    title: dict.nav.services,
    description: dict.servicesIntro.text,
    path: "/services",
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        kicker={dict.servicesIntro.kicker}
        title={dict.servicesIntro.title}
        lede={dict.servicesIntro.text}
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-16 sm:px-6 md:grid-cols-2 lg:py-20">
        {dict.services.map((service) => (
          <Link
            key={service.slug}
            href={pathFor(locale, `/services/${service.slug}`)}
            className="rounded-xl bg-sand p-6 transition-colors hover:bg-[#eef1f4] lg:p-8"
          >
            <span className="flex size-14 items-center justify-center rounded-xl bg-brand-dark text-white">
              <ServiceIcon name={service.icon} />
            </span>
            <h2 className="mt-5 text-2xl font-medium text-ink">{service.title}</h2>
            <p className="mt-3 leading-7 text-[#272e34]">{service.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <li key={tag}>
                  <Badge
                    variant="outline"
                    className="h-auto rounded-lg border-brand bg-white px-2.5 py-1 text-sm font-medium text-brand"
                  >
                    {tag}
                  </Badge>
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </section>
    </>
  );
}
