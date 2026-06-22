import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { BrandLogo } from "@/components/BrandLogo";
import { useTheme } from "@/components/ThemeProvider";

type NavItem = { label: string; to?: string; hash?: string; href?: string };

const NAV: NavItem[] = [
  { label: "Who We Are", to: "/", hash: "whoweare" },
  { label: "Cybersecurity", to: "/cybersecurity" },
  { label: "AI Automation", to: "/ai-automation" },
  { label: "AI Full Stack", to: "/ai-fullstack" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/", hash: "contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-5">
      <div
        className={[
          "mx-auto max-w-7xl transition-all duration-500",
          "rounded-full border backdrop-blur-xl",
          scrolled
            ? "border-border bg-background/70 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.45)]"
            : "border-border/60 bg-background/40",
        ].join(" ")}
      >
        <div className="h-14 md:h-16 pl-4 sm:pl-5 pr-2 sm:pr-3 flex items-center justify-between gap-4">
          <Link
            to="/"
            aria-label="Axiom Secure Crafts"
            onMouseEnter={() => setRevealed(true)}
            onMouseLeave={() => setRevealed(false)}
            onFocus={() => setRevealed(true)}
            onBlur={() => setRevealed(false)}
            className="flex items-center gap-3 group select-none outline-none shrink-0"
          >
            <BrandLogo className="h-7 md:h-8 w-auto object-contain" />
            <span
              aria-hidden={!revealed}
              className={[
                "hidden sm:flex items-baseline overflow-hidden whitespace-nowrap",
                "transition-[max-width,opacity,transform] duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
                revealed ? "max-w-[420px] opacity-100 translate-x-0" : "max-w-0 opacity-0 -translate-x-1",
              ].join(" ")}
            >
              <span className="text-[13px] font-semibold tracking-[0.18em] text-foreground">AXIOM</span>
              <span className="ml-2 text-[13px] font-semibold tracking-[0.18em] text-muted-foreground">
                SECURE CRAFTS
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((i) =>
              i.to ? (
                <Link
                  key={i.label}
                  to={i.to as never}
                  hash={i.hash}
                  className="relative px-3 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-3 after:right-3 after:bottom-1 after:h-px after:bg-primary after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {i.label}
                </Link>
              ) : (
                <a
                  key={i.label}
                  href={i.href!}
                  className="relative px-3 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {i.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              onClick={toggle}
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border bg-background/50 hover:border-primary hover:text-primary transition-colors"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <Link
              to="/"
              hash="contact"
              className="hidden sm:inline-flex items-center gap-2 text-[13px] font-medium px-4 h-9 rounded-full bg-primary text-primary-foreground hover:brightness-110 transition"
            >
              Get in Touch
              <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/80" />
            </Link>
            <button
              aria-label="Toggle menu"
              className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-border"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "lg:hidden mx-auto max-w-7xl mt-2 overflow-hidden transition-[max-height,opacity] duration-300 rounded-2xl border backdrop-blur-xl",
          open
            ? "max-h-[480px] opacity-100 border-border bg-background/85"
            : "max-h-0 opacity-0 border-transparent",
        ].join(" ")}
      >
        <nav className="px-3 py-2 flex flex-col">
          {NAV.map((i) =>
            i.to ? (
              <Link
                key={i.label}
                to={i.to as never}
                hash={i.hash}
                onClick={() => setOpen(false)}
                className="py-3 px-3 text-sm text-foreground/90 border-b border-border/40 last:border-0"
              >
                {i.label}
              </Link>
            ) : (
              <a
                key={i.label}
                href={i.href!}
                onClick={() => setOpen(false)}
                className="py-3 px-3 text-sm text-foreground/90 border-b border-border/40 last:border-0"
              >
                {i.label}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
