"use client";

import { useMemo, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { company, type Dictionary } from "@/content/site";
import { cn } from "cn";

type Fields = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string;
};

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  website: "",
};

export function ContactForm({
  dict,
  initialSubject = "",
}: {
  dict: Dictionary;
  initialSubject?: string;
}) {
  const form = dict.contact.form;
  const [fields, setFields] = useState<Fields>({ ...empty, subject: initialSubject });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState<"whatsapp" | "email" | null>(null);

  const body = useMemo(() => {
    return [
      `${form.name}: ${fields.name}`,
      `${form.email}: ${fields.email}`,
      `${form.phone}: ${fields.phone}`,
      `${form.subject}: ${fields.subject}`,
      "",
      fields.message,
    ].join("\n");
  }, [fields, form]);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setSent(null);
  }

  function validate() {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (fields.name.trim().length < 2) next.name = form.required;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      next.email = form.emailInvalid;
    }
    if (fields.phone.trim().length < 6) next.phone = form.required;
    if (fields.subject.trim().length < 2) next.subject = form.required;
    if (fields.message.trim().length < 10) next.message = form.messageShort;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function submit(channel: "whatsapp" | "email") {
    if (fields.website) return;
    if (!validate()) return;
    const subject = fields.subject.trim();
    if (channel === "whatsapp") {
      const url = `${company.whatsapp}?text=${encodeURIComponent(body)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    setSent(channel);
  }

  const fieldClass =
    "h-11 rounded-lg border-line bg-white px-3 text-base md:text-base";

  return (
    <form
      className="space-y-5"
      method="dialog"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        submit("whatsapp");
      }}
      onKeyDown={(event) => {
        if (event.key !== "Enter" || event.nativeEvent.isComposing) return;
        const target = event.target;
        if (target instanceof HTMLTextAreaElement) return;
        event.preventDefault();
        submit("whatsapp");
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={form.name} error={errors.name} htmlFor="name">
          <Input
            id="name"
            name="name"
            autoComplete="name"
            value={fields.name}
            aria-invalid={Boolean(errors.name)}
            className={fieldClass}
            onChange={(event) => update("name", event.target.value)}
          />
        </Field>
        <Field label={form.email} error={errors.email} htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            aria-invalid={Boolean(errors.email)}
            className={fieldClass}
            onChange={(event) => update("email", event.target.value)}
          />
        </Field>
        <Field label={form.phone} error={errors.phone} htmlFor="phone">
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            aria-invalid={Boolean(errors.phone)}
            className={fieldClass}
            onChange={(event) => update("phone", event.target.value)}
          />
        </Field>
        <Field label={form.subject} error={errors.subject} htmlFor="subject">
          <Input
            id="subject"
            name="subject"
            value={fields.subject}
            aria-invalid={Boolean(errors.subject)}
            className={fieldClass}
            onChange={(event) => update("subject", event.target.value)}
          />
        </Field>
      </div>
      <Field label={form.message} error={errors.message} htmlFor="message">
        <Textarea
          id="message"
          name="message"
          rows={6}
          value={fields.message}
          aria-invalid={Boolean(errors.message)}
          className="min-h-36 rounded-lg border-line bg-white px-3 py-3 text-base md:text-base"
          onChange={(event) => update("message", event.target.value)}
        />
      </Field>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          value={fields.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>
      {Object.values(errors).some(Boolean) ? (
        <p className="text-sm text-destructive" role="alert">
          {form.invalid}
        </p>
      ) : null}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className={cn(buttonVariants({ variant: "brand", size: "cta" }))}
          onClick={() => submit("whatsapp")}
        >
          {form.whatsapp}
        </button>
        <button
          type="button"
          className={cn(buttonVariants({ variant: "outline", size: "cta" }))}
          onClick={() => submit("email")}
        >
          {form.emailAction}
        </button>
      </div>
      <p className="text-sm text-slate">{form.hint}</p>
      {sent ? (
        <div className="rounded-xl border border-line bg-sand p-4 text-sm text-ink" role="status">
          <p>{form.success}</p>
          <div className="mt-3 flex flex-col gap-2">
            <a className="font-medium text-accent underline-offset-4 hover:underline" href={`${company.whatsapp}?text=${encodeURIComponent(body)}`}>
              WhatsApp
            </a>
            <a
              className="font-medium text-accent underline-offset-4 hover:underline"
              href={`mailto:${company.email}?subject=${encodeURIComponent(fields.subject)}&body=${encodeURIComponent(body)}`}
            >
              {company.email}
            </a>
          </div>
        </div>
      ) : null}
    </form>
  );
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
