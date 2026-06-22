import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Props = {
  image: string;
  eyebrow?: string;
  title: string;
  description: string;
  href?: string;
  to?: string;
  params?: Record<string, string>;
  external?: boolean;
  cta?: string;
  children?: ReactNode;
};

export function EnterpriseCard({
  image,
  eyebrow,
  title,
  description,
  href,
  to,
  params,
  external,
  cta = "Learn more",
  children,
}: Props) {
  const inner = (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_80px_-30px_rgba(229,57,53,0.35)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute inset-0 bg-primary/0 mix-blend-overlay transition-opacity duration-500 group-hover:bg-primary/10" />
        {eyebrow && (
          <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-white">
            <span className="h-1 w-1 rounded-full bg-primary" />
            {eyebrow}
          </span>
        )}
      </div>
      <div className="p-7 md:p-8">
        <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{description}</p>
        {children}
        <div className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground/85 group-hover:text-primary transition">
          {cta} <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </div>
  );

  if (to) {
    return (
      <Link to={to as never} params={params as never} className="block h-full">
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="block h-full"
      >
        {inner}
      </a>
    );
  }
  return inner;
}
