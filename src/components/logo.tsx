import Image from "next/image";
import { company, type Locale } from "@/content/site";

export function Logo({
  locale,
  onDark = false,
}: {
  locale: Locale;
  onDark?: boolean;
}) {
  return (
    <span className={onDark ? "inline-flex rounded-lg bg-white px-2.5 py-1.5" : "inline-flex"}>
      <Image
        src="/logo.png"
        alt={company.name[locale]}
        width={234}
        height={87}
        priority={!onDark}
        unoptimized
        sizes="220px"
        className="h-14 w-auto sm:h-16"
      />
    </span>
  );
}
