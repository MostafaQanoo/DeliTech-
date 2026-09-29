import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { getDictionary, isLocale } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return pageMetadata(locale, { title: dict.nav.terms, description: dict.terms.lede, path: "/terms" });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero kicker={dict.terms.kicker} title={dict.terms.title} lede={dict.terms.lede} />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-sm text-slate">{dict.terms.updated}</p>
        <div className="mt-8 space-y-8">
          {dict.terms.sections.map((section) => (
            <article key={section.title}>
              <h2 className="text-2xl font-medium text-ink">{section.title}</h2>
              <p className="mt-3 leading-8 text-[#272e34]">{section.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
