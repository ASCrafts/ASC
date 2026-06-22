import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as ArrowUpRight } from "../_libs/lucide-react.mjs";
function EnterpriseCard({
  image,
  eyebrow,
  title,
  description,
  href,
  to,
  params,
  external,
  cta = "Learn more",
  children
}) {
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_80px_-30px_rgba(229,57,53,0.35)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: image,
          alt: "",
          loading: "lazy",
          className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/0 mix-blend-overlay transition-opacity duration-500 group-hover:bg-primary/10" }),
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute top-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-primary" }),
        eyebrow
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 md:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl md:text-2xl font-semibold tracking-tight", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: description }),
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground/85 group-hover:text-primary transition", children: [
        cta,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 14, className: "transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
      ] })
    ] })
  ] });
  if (to) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, params, className: "block h-full", children: inner });
  }
  if (href) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href,
        ...external ? { target: "_blank", rel: "noopener noreferrer" } : {},
        className: "block h-full",
        children: inner
      }
    );
  }
  return inner;
}
const bootcampImg = "/assets/img-bootcamp-x7RALmO8.jpg";
export {
  EnterpriseCard as E,
  bootcampImg as b
};
