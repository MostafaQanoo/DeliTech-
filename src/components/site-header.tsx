"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/button-link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";
import {
  company,
  pathFor,
  swapLocale,
  type Dictionary,
  type Locale,
} from "@/content/site";

export function SiteHeader({ dict }: { dict: Dictionary }) {
  const pathname = usePathname();
  const locale = dict.locale;
  const other: Locale = locale === "ar" ? "en" : "ar";

  const links = [
    { href: pathFor(locale, "/services"), label: dict.nav.services },
    { href: pathFor(locale, "/work"), label: dict.nav.work },
    { href: pathFor(locale, "/about"), label: dict.nav.about },
    { href: pathFor(locale, "/contact"), label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto hidden h-9 max-w-6xl items-center justify-between px-4 text-xs text-slate sm:flex sm:px-6">
        <p>
          {company.place[locale]}
          <span className="px-2 text-[#c2c7cc]">·</span>
          {company.hours}
        </p>
        <p className="flex items-center gap-3">
          <a className="hover:text-ink" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          <span className="text-[#c2c7cc]">·</span>
          <a className="hover:text-ink" href={`tel:${company.phoneTel}`}>
            {company.phoneDisplay}
          </a>
        </p>
      </div>
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:h-24 sm:px-6">
        <Link href={pathFor(locale)} className="shrink-0">
          <Logo locale={locale} />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label={dict.nav.menu}>
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium text-slate transition-colors hover:text-ink",
                  active && "text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={swapLocale(pathname, other)}
            hrefLang={other}
            className="hidden rounded-lg px-2 py-1 text-sm font-medium text-slate hover:text-ink sm:inline"
          >
            {dict.nav.lang}
          </Link>
          <ButtonLink
            href={pathFor(locale, "/contact")}
            variant="ink"
            className="hidden sm:inline-flex"
          >
            {dict.nav.cta}
          </ButtonLink>
          <MobileMenu
            key={pathname}
            dict={dict}
            links={links}
            otherHref={swapLocale(pathname, other)}
          />
        </div>
      </div>
    </header>
  );
}

function MobileMenu({
  dict,
  links,
  otherHref,
}: {
  dict: Dictionary;
  links: { href: string; label: string }[];
  otherHref: string;
}) {
  const [open, setOpen] = useState(false);
  const locale = dict.locale;

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={dict.nav.menu}
        onClick={() => setOpen(true)}
      >
        <Menu />
      </button>
      {open
        ? createPortal(
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label={dict.nav.close}
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label={dict.nav.menu}
            className="absolute inset-y-0 end-0 flex w-[min(100%,22rem)] flex-col bg-white shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-4">
              <Logo locale={locale} />
              <button
                type="button"
                className={cn(buttonVariants({ variant: "ghost", size: "icon-sm" }))}
                aria-label={dict.nav.close}
                onClick={() => setOpen(false)}
              >
                <X />
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-3 py-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-lg font-medium text-ink hover:bg-sand"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={otherHref}
                className="rounded-lg px-3 py-3 text-lg font-medium text-brand hover:bg-sand"
                onClick={() => setOpen(false)}
              >
                {dict.nav.lang}
              </Link>
            </nav>
            <div className="mt-auto p-4">
              <ButtonLink href={pathFor(locale, "/contact")} className="w-full">
                {dict.nav.cta}
              </ButtonLink>
            </div>
          </div>
        </div>,
            document.body,
          )
        : null}
    </div>
  );
}
