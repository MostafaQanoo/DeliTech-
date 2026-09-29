import {
  LifeBuoy,
  Megaphone,
  Monitor,
  Palette,
  Smartphone,
  Workflow,
} from "lucide-react";
import type { Service } from "@/content/site";

const icons = {
  systems: Workflow,
  web: Monitor,
  mobile: Smartphone,
  design: Palette,
  marketing: Megaphone,
  ops: LifeBuoy,
} as const;

export function ServiceIcon({
  name,
  className = "size-7",
}: {
  name: Service["icon"];
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
