import darkLogo from "@/assets/asc-logo-old.png.asset.json";
import lightLogo from "@/assets/asc-logo-light.png.asset.json";

type Props = {
  className?: string;
  alt?: string;
};

/**
 * Theme-aware ASC mark. Uses CSS-only swap (Tailwind `dark:` variant)
 * so the correct asset is visible before React hydration — no flash.
 */
export function BrandLogo({ className = "h-7 md:h-8 w-auto object-contain", alt = "Axiom Secure Crafts" }: Props) {
  return (
    <>
      <img
        src={lightLogo.url}
        alt={alt}
        draggable={false}
        className={`${className} block dark:hidden`}
      />
      <img
        src={darkLogo.url}
        alt={alt}
        draggable={false}
        className={`${className} hidden dark:block`}
      />
    </>
  );
}
