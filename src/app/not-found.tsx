import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col justify-center px-6 py-20">
      <p className="text-sm font-medium text-brand">404</p>
      <h1 className="mt-3 text-4xl font-medium text-[#111]">هذه الصفحة غير موجودة.</h1>
      <p className="mt-3 text-[#52606d]">This page is not here.</p>
      <div className="mt-8 flex gap-4">
        <Link href="/ar" className="rounded-lg bg-brand px-4 py-2.5 font-medium text-white">
          الرئيسية
        </Link>
        <Link href="/en" className="rounded-lg border border-[#e4e7eb] px-4 py-2.5 font-medium">
          Home
        </Link>
      </div>
    </main>
  );
}
