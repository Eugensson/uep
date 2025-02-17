import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  label: string;
  href: string;
  className?: string;
}

export const BackButton = ({ label, href, className }: BackButtonProps) => {
  return (
    <Button
      variant="link"
      className={cn("font-normal w-full", className)}
      size="sm"
      asChild
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
