import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { company, getDictionary, getProject, isLocale } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return pageMetadata(locale, { title: dict.nav.contact, description: dict.contact.lede, path: "/contact" });
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ project?: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const { project: projectSlug } = await searchParams;
  const dict = getDictionary(locale);
  const project = projectSlug ? getProject(locale, projectSlug) : undefined;

  return (
    <>
      <PageHero kicker={dict.contact.kicker} title={dict.contact.title} lede={dict.contact.lede} />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
        <aside className="h-fit rounded-2xl bg-ink p-6 text-white">
          <p className="text-sm text-brand-bright">{dict.contact.office}</p>
          <p className="mt-3 text-2xl font-medium">{company.place[locale]}</p>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-[#9ea7b0]">{dict.contact.hoursLabel}</dt>
              <dd className="mt-1 text-lg">{company.hours}</dd>
            </div>
            <div>
              <dt className="text-[#9ea7b0]">{dict.contact.form.phone}</dt>
              <dd className="mt-1">
                <a className="text-2xl font-medium hover:text-brand-bright" href={`tel:${company.phoneTel}`}>
                  {company.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[#9ea7b0]">{dict.contact.form.email}</dt>
              <dd className="mt-1">
                <a className="hover:text-brand-bright" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </dd>
            </div>
          </dl>
          <p className="mt-6 text-sm leading-6 text-[#c2c7cc]">{dict.contact.support}</p>
          <a
            href={company.whatsapp}
            className="mt-6 inline-flex text-sm font-medium text-brand-bright"
          >
            WhatsApp
          </a>
        </aside>
        <ContactForm dict={dict} initialSubject={project?.name ?? ""} />
      </section>
    </>
  );
}
