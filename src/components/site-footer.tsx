import Link from "next/link";
import { Logo } from "@/components/logo";
import { company, pathFor, type Dictionary } from "@/content/site";

export function SiteFooter({ dict }: { dict: Dictionary }) {
  const locale = dict.locale;
  const companyLinks = [
    { href: pathFor(locale, "/about"), label: dict.nav.about },
    { href: pathFor(locale, "/work"), label: dict.nav.work },
    { href: pathFor(locale, "/contact"), label: dict.nav.contact },
    { href: pathFor(locale, "/terms"), label: dict.nav.terms },
  ];

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo locale={locale} onDark />
          <p className="mt-5 max-w-sm text-sm leading-6 text-[#c2c7cc]">{dict.footer.blurb}</p>
        </div>
        <div>
          <h2 className="text-sm font-medium text-white">{dict.footer.services}</h2>
          <ul className="mt-4 space-y-2">
            {dict.services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={pathFor(locale, `/services/${service.slug}`)}
                  className="text-sm text-[#c2c7cc] hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-medium text-white">{dict.footer.company}</h2>
          <ul className="mt-4 space-y-2">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-[#c2c7cc] hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-1 text-sm text-[#c2c7cc]">
            <p>{company.place[locale]}</p>
            <p>{company.hours}</p>
            <a className="block text-white hover:text-brand-bright" href={`tel:${company.phoneTel}`}>
              {company.phoneDisplay}
            </a>
            <a className="block hover:text-white" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-[#9ea7b0] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {dict.brand}. {dict.footer.rights}
          </p>
          <p>{company.place[locale]}</p>
        </div>
      </div>
    </footer>
  );
}
