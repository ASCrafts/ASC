import logoUrl from "../assets/ACSlogo.jpeg";

type Props = { className?: string; size?: number };

/**
 * Renders the Axiom Secure Crafts brand logo image (ACSlogo.jpeg)
 */
export function AscLogo({ className, size = 32 }: Props) {
  return (
    <img
      src={logoUrl}
      alt="Axiom Secure Crafts Logo"
      style={{ height: `${size}px`, width: "auto" }}
      className={className}
    />
  );
}

