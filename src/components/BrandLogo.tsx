import { AscLogo } from "@/components/AscLogo";

type Props = {
  className?: string;
  alt?: string;
};

/**
 * Theme-aware ASC mark. Rendered as a vector SVG, completely resolving 404 image issues.
 */
export function BrandLogo({ className = "h-7 md:h-8 w-auto", alt = "Axiom Secure Crafts" }: Props) {
  return <AscLogo className={className} alt={alt} />;
}

