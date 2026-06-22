type Props = {
  className?: string;
  alt?: string;
};

/**
 * Theme-aware ASC mark. Rendered using the logo image from favicon.ico.
 */
export function BrandLogo({ className = "h-7 md:h-8 w-auto", alt = "Axiom Secure Crafts" }: Props) {
  return (
    <img
      src="/favicon.ico"
      alt={alt}
      draggable={false}
      className={className}
    />
  );
}


