import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AscLogo } from "./AscLogo"; // Import the built-in SVG logo

const NAV = [
  { label: "Who We Are", href: "#whoweare" },
  { label: "Our Work", href: "#work" },
  { label: "Insights", href: "#learning" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 md:h-18 flex items-center justify-between">
        <a
          href="#top"
          aria-label="Axiom Secure Crafts"
          onMouseEnter={() => setRevealed(true)}
          onMouseLeave={() => setRevealed(false)}
          onFocus={() => setRevealed(true)}
          onBlur={() => setRevealed(false)}
          onClick={() => setRevealed((v) => !v)}
          className="flex items-center gap-3 group select-none outline-none"
        >
          {/* Replaced broken img tag with pure code SVG logo */}
          <AscLogo size={36} className="text-white group-hover:text-primary transition-colors" />
          
          <span
            aria-hidden={!revealed}
            className={[
              "hidden sm:flex items-baseline overflow-hidden whitespace-nowrap",
              "transition-[max-width,opacity,transform] duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
              revealed
                ? "max-w-[420px] opacity-100 translate-x-0"
                : "max-w-0 opacity-0 -translate-x-1",
            ].join(" ")}
          >
            <span className="text-[14px] md:text-[15px] font-semibold tracking-[0.15em] text-white">
              AXIOM
            </span>
            <span className="ml-2 text-[14px] md:text-[15px] font-semibold tracking-[0.15em] text-zinc-400">
              SECURE CRAFTS
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {i.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
          >
            Get in Touch
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </a>
          <button
            aria-label="Toggle menu"
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-border"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "lg:hidden overflow-hidden transition-[max-height] duration-300 bg-background/95 backdrop-blur-xl border-b border-border",
          open ? "max-h-96" : "max-h-0",
        ].join(" ")}
      >
        <nav className="px-5 py-4 flex flex-col gap-1">
          {NAV.map((i) => (
            <a
              key={i.href}
              href={i.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base text-foreground/90 border-b border-border/60 last:border-0"
            >
              {i.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}