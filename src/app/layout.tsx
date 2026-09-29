import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Outfit } from "next/font/google";
import { headers } from "next/headers";
import { jsonLdScript } from "@/lib/seo";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
});

const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-plex",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://delitech.tech"),
  title: "شركة برمجة وتطوير حلول رقمية في فلسطين | ديلي تكنولوجي",
  description:
    "ديلي تكنولوجي شركة برمجة وتطوير حلول رقمية في فلسطين. نبني المواقع وتطبيقات الجوال والأنظمة الإدارية، ونصمّم الهوية البصرية، ونقدّم التسويق الرقمي.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headerList = await headers();
  const locale = headerList.get("x-locale") === "en" ? "en" : "ar";

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${outfit.variable} ${plex.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(locale) }}
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
