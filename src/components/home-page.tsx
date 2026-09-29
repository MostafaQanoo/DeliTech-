import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AccentCycle } from "@/components/accent-cycle";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/button-link";
import { ProjectCover } from "@/components/project-cover";
import { WorkBands } from "@/components/work-bands";
import { Reveal } from "@/components/reveal";
import { ServiceIcon } from "@/components/service-icon";
import { StatValue } from "@/components/stat-value";
import { company, pathFor, type Dictionary } from "@/content/site";

export function HomePage({ dict }: { dict: Dictionary }) {
  const locale = dict.locale;

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(#ffffff,#f6f7f8)]"
        />
        <div
          aria-hidden="true"
          className="hero-glow pointer-events-none absolute -top-24 end-0 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(246,97,53,0.28),transparent_62%)]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <h1 className="display-2xl text-center text-ink lg:text-start">
              <span className="rise-in block">{dict.hero.line}</span>
              <AccentCycle lines={dict.hero.lines} />
            </h1>
            <p className="rise-in-late mx-auto mt-6 max-w-xl text-center text-lg leading-8 text-slate lg:mx-0 lg:text-start">
              {dict.hero.lede}
            </p>
            <div className="rise-in-late mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <ButtonLink href={pathFor(locale, "/contact")}>{dict.nav.cta}</ButtonLink>
              <ButtonLink href={pathFor(locale, "/about")} variant="outline" className="bg-white">
                {dict.hero.secondary}
              </ButtonLink>
            </div>
          </div>
          <div className="relative mx-auto h-[26rem] w-full max-w-lg sm:h-[30rem]">
            {dict.projects.slice(0, 3).map((project, index) => (
              <Link
                key={project.slug}
                href={pathFor(locale, `/work/${project.slug}`)}
                aria-label={project.name}
                className={`hero-shot block aspect-video ${
                  ["hero-shot-a", "hero-shot-b", "hero-shot-c"][index]
                }`}
              >
                <ProjectCover
                  src={project.image}
                  alt=""
                  width={project.width}
                  height={project.height}
                  eager={index === 0}
                  sizes="380px"
                  className="size-full bg-white object-contain p-2 transition duration-500 hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="ticker overflow-hidden border-b border-line bg-ink py-4 text-white" dir="ltr">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center">
              {dict.projects.map((project) => (
                <span key={`${copy}-${project.slug}`} className="px-8 text-sm font-medium tracking-wide">
                  {project.name}
                  <span className="px-8 text-[#f66135]">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="border-b border-line" aria-label={dict.servicesIntro.kicker}>
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {dict.stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-line px-4 py-8 sm:px-6 md:border-b-0 md:border-e md:last:border-e-0"
            >
              <div className="text-4xl font-medium text-ink md:text-5xl">
                <StatValue value={stat.value} />
              </div>
              <div className="mt-2 text-slate">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-brand">{dict.servicesIntro.kicker}</p>
          <h2 className="display-l mt-3 text-ink">{dict.servicesIntro.title}</h2>
          <p className="mt-4 text-lg leading-8 text-slate">{dict.servicesIntro.text}</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {dict.services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 70} className="h-full">
            <Link
              href={pathFor(locale, `/services/${service.slug}`)}
              className="group flex h-full flex-col rounded-xl bg-sand p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_50px_-32px_rgba(17,17,17,0.45)] lg:p-8"
            >
              <div className="mb-4 flex items-center gap-4 md:flex-col md:items-start">
                <span className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-[#d6542e] text-white transition duration-300 group-hover:scale-110 group-hover:bg-[#f66135]">
                  <ServiceIcon name={service.icon} />
                </span>
                <h3 className="display-s text-ink">{service.title}</h3>
              </div>
              <p className="mb-6 text-base leading-7 text-[#272e34]">{service.summary}</p>
              <ul className="mt-auto flex flex-wrap gap-2">
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
            </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
          <p className="text-sm font-medium text-brand">{dict.milestones.kicker}</p>
          <h2 className="display-l mt-3 max-w-3xl text-ink">{dict.milestones.title}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {dict.milestones.items.map((item, index) => (
              <Reveal key={item.year} delay={index * 80} className="h-full">
              <article className="h-full rounded-xl bg-white p-6">
                <p className="text-sm font-medium text-brand">{item.year}</p>
                <h3 className="mt-3 text-xl font-medium text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate">{item.text}</p>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-medium text-brand">{dict.why.kicker}</p>
            <h2 className="display-l mt-3 text-ink">{dict.why.title}</h2>
            <p className="mt-4 text-lg leading-8 text-slate">{dict.why.text}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {dict.why.items.map((item, index) => (
              <article key={item.title} className="rounded-xl border border-line p-5">
                <p className="text-sm font-medium text-brand">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-brand">{dict.work.kicker}</p>
              <h2 className="display-l mt-3 text-ink">{dict.work.title}</h2>
              <p className="mt-4 text-lg text-slate">{dict.work.text}</p>
              <p className="mt-3 text-sm text-slate">{dict.work.samples}</p>
            </div>
            <Link
              href={pathFor(locale, "/work")}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink"
            >
              {dict.work.all}
              <ArrowRight className="size-4 rtl:-scale-x-100" />
            </Link>
          </div>
          <WorkBands dict={dict} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-sm font-medium text-brand">{dict.models.kicker}</p>
        <h2 className="display-l mt-3 max-w-3xl text-ink">{dict.models.title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-slate">{dict.models.text}</p>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {dict.models.items.map((item) => (
            <article key={item.title} className="rounded-xl bg-sand p-6 lg:p-8">
              <h3 className="text-xl font-medium text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#272e34]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-[#111111] text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <p className="text-sm font-medium text-[#f66135]">{dict.process.kicker}</p>
          <h2 className="display-l mt-3 max-w-3xl">{dict.process.title}</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {dict.process.items.map((item) => (
              <li key={item.step}>
                <p className="text-sm font-medium text-[#f66135]">{item.step}</p>
                <h3 className="mt-3 text-2xl font-medium">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#c2c7cc]">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-center lg:py-20">
          <div className="max-w-xl">
            <h2 className="display-m text-ink">{dict.closing.title}</h2>
            <p className="mt-3 text-lg leading-8 text-slate">{dict.closing.text}</p>
            <a
              href={`tel:${company.phoneTel}`}
              className="mt-4 block text-3xl font-medium tracking-tight text-ink"
            >
              {company.phoneDisplay}
            </a>
          </div>
          <ButtonLink href={pathFor(locale, "/contact")}>{dict.nav.cta}</ButtonLink>
        </div>
      </section>
    </>
  );
}
