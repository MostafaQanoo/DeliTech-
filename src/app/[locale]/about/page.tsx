import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/button-link";
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
  return pageMetadata(locale, { title: dict.nav.about, description: dict.about.lede, path: "/about" });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero kicker={dict.about.kicker} title={dict.about.title} lede={dict.about.lede} />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div className="space-y-5 text-lg leading-8 text-[#272e34]">
          <h2 className="text-sm font-medium text-brand">{dict.about.missionTitle}</h2>
          {dict.about.mission.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <aside className="h-fit rounded-2xl bg-sand p-6 lg:p-8">
          <h2 className="text-sm font-medium text-brand">{dict.about.visionTitle}</h2>
          <p className="mt-4 text-2xl font-medium leading-snug text-ink">{dict.about.vision}</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {dict.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white px-4 py-4">
                <div className="text-3xl font-medium tabular-nums">{stat.value}</div>
                <div className="text-sm text-slate">{stat.label}</div>
              </div>
            ))}
          </div>
        </aside>
      </section>
      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-sm font-medium text-brand">{dict.about.sectorsTitle}</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {dict.about.sectors.map((sector) => (
              <li
                key={sector}
                className="rounded-lg border border-[#1764ca] px-3 py-1.5 text-sm font-medium text-[#1764ca]"
              >
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <h2 className="display-m text-ink">{dict.why.title}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {dict.why.items.map((item) => (
            <article key={item.title} className="rounded-xl border border-line p-5">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-t border-line bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="display-m text-ink">{dict.faq.title}</h2>
          <div className="mt-8 divide-y divide-line rounded-xl bg-white">
            {dict.faq.items.map((item) => (
              <details key={item.q} className="group px-5 py-4">
                <summary className="cursor-pointer list-none text-lg font-medium text-ink">
                  {item.q}
                </summary>
                <p className="mt-3 max-w-3xl leading-7 text-slate">{item.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href={pathFor(locale, "/contact")}>{dict.nav.cta}</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
