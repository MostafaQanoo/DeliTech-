import Image from "next/image";

export function ProjectCover({
  src,
  alt,
  width = 1280,
  height = 720,
  eager = false,
  sizes = "(max-width: 768px) 100vw, 640px",
  className,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  eager?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      unoptimized
      priority={eager}
      className={className}
    />
  );
}
