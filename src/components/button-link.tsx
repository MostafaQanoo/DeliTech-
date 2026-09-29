import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "brand" | "ink" | "outline" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "brand",
  className,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size: "cta" }), className)}
    >
      {children}
    </Link>
  );
}
