import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function SectionLabel({ children, num }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-muted-foreground", children: [
    num && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-mono", children: num }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-border" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children })
  ] });
}
export {
  SectionLabel as S
};
