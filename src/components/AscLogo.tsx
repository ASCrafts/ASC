type Props = { className?: string; size?: number; alt?: string };

/**
 * Stylized recreation of the ASC mark: outer triangle with embedded S
 * and a small red triangle at the bottom-right corner.
 */
export function AscLogo({ className, size, alt = "Axiom Secure Crafts" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={alt}
      className={className}
    >
      <title>{alt}</title>
      <defs>
        <clipPath id="asc-tri">
          <polygon points="32,4 60,56 4,56" />
        </clipPath>
      </defs>
      {/* Outer triangle outline */}
      <polygon
        points="32,4 60,56 4,56"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Embedded S shape, clipped within triangle */}
      <g clipPath="url(#asc-tri)" fill="currentColor">
        <path d="M22 22 H44 V28 H28 V31 H44 V44 H22 V38 H38 V35 H22 Z" />
      </g>
      {/* Red accent triangle bottom-right */}
      <polygon points="52,56 46,46 58,46" fill="#E53935" />
    </svg>
  );
}

