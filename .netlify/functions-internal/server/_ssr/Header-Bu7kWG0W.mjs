import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useTheme } from "./router-BAqzjgTI.mjs";
import { S as Sun, b as Moon, X, c as Menu } from "../_libs/lucide-react.mjs";
function BrandLogo({ className = "w-auto", alt = "Axiom Secure Crafts" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: "/favicon.ico",
      alt,
      draggable: false,
      className,
      style: { height: "65px" }
    }
  );
}
const NAV = [
  { label: "Who We Are", to: "/", hash: "whoweare" },
  { label: "Cybersecurity", to: "/cybersecurity" },
  { label: "AI Automation", to: "/ai-automation" },
  { label: "AI Full Stack", to: "/ai-fullstack" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/", hash: "contact" }
];
function Header() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const [revealed, setRevealed] = reactExports.useState(false);
  const { theme, toggle } = useTheme();
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: [
          "mx-auto max-w-7xl transition-all duration-500",
          "rounded-full border backdrop-blur-xl",
          scrolled ? "border-border bg-background/70 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.45)]" : "border-border/60 bg-background/40"
        ].join(" "),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-14 md:h-16 pl-4 sm:pl-5 pr-2 sm:pr-3 flex items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              "aria-label": "Axiom Secure Crafts",
              onMouseEnter: () => setRevealed(true),
              onMouseLeave: () => setRevealed(false),
              onFocus: () => setRevealed(true),
              onBlur: () => setRevealed(false),
              className: "flex items-center gap-3 group select-none outline-none shrink-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BrandLogo, { className: "h-7 md:h-8 w-auto object-contain" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "span",
                  {
                    "aria-hidden": !revealed,
                    className: [
                      "hidden sm:flex items-baseline overflow-hidden whitespace-nowrap",
                      "transition-[max-width,opacity,transform] duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
                      revealed ? "max-w-[420px] opacity-100 translate-x-0" : "max-w-0 opacity-0 -translate-x-1"
                    ].join(" "),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold tracking-[0.18em] text-foreground", children: "AXIOM" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[13px] font-semibold tracking-[0.18em] text-muted-foreground", children: "SECURE CRAFTS" })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: NAV.map(
            (i) => i.to ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: i.to,
                hash: i.hash,
                className: "relative px-3 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-3 after:right-3 after:bottom-1 after:h-px after:bg-primary after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                children: i.label
              },
              i.label
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: i.href,
                className: "relative px-3 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors",
                children: i.label
              },
              i.label
            )
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "aria-label": `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
                onClick: toggle,
                className: "inline-flex items-center justify-center h-9 w-9 rounded-full border border-border bg-background/50 hover:border-primary hover:text-primary transition-colors",
                children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 15 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 15 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/",
                hash: "contact",
                className: "hidden sm:inline-flex items-center gap-2 text-[13px] font-medium px-4 h-9 rounded-full bg-primary text-primary-foreground hover:brightness-110 transition",
                children: [
                  "Get in Touch",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary-foreground/80" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                "aria-label": "Toggle menu",
                className: "lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-border",
                onClick: () => setOpen((v) => !v),
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 16 })
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: [
          "lg:hidden mx-auto max-w-7xl mt-2 overflow-hidden transition-[max-height,opacity] duration-300 rounded-2xl border backdrop-blur-xl",
          open ? "max-h-[480px] opacity-100 border-border bg-background/85" : "max-h-0 opacity-0 border-transparent"
        ].join(" "),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "px-3 py-2 flex flex-col", children: NAV.map(
          (i) => i.to ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: i.to,
              hash: i.hash,
              onClick: () => setOpen(false),
              className: "py-3 px-3 text-sm text-foreground/90 border-b border-border/40 last:border-0",
              children: i.label
            },
            i.label
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: i.href,
              onClick: () => setOpen(false),
              className: "py-3 px-3 text-sm text-foreground/90 border-b border-border/40 last:border-0",
              children: i.label
            },
            i.label
          )
        ) })
      }
    )
  ] });
}
export {
  BrandLogo as B,
  Header as H
};
