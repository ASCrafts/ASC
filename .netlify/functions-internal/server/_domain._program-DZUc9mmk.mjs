import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { H as Header } from "./_ssr/Header-DJrkEuxy.mjs";
import { S as SectionLabel } from "./_ssr/SectionLabel-Dv-KWyQT.mjs";
import { R as Route, D as DOMAINS, P as PROGRAM_ORDER } from "./_ssr/router-Bd6Je97W.mjs";
import { x as ArrowLeft, s as Clock, r as GraduationCap, d as ArrowRight, t as Check, e as Layers } from "./_libs/lucide-react.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
function ProgramPage() {
  const {
    domain,
    program
  } = Route.useParams();
  const d = DOMAINS[domain];
  const p = d.programs[program];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: `relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-border overflow-hidden`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${d.accent} opacity-60` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent,hsl(var(--background)))]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl px-5 sm:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", hash: "learning", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
            " All Programs"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: d.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-primary/40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.level })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 font-display text-4xl md:text-6xl font-semibold tracking-[-0.02em] max-w-4xl", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed", children: p.overview }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14, className: "text-primary" }),
              " ",
              p.duration
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 14, className: "text-primary" }),
              " ",
              p.level
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition", children: [
              "Enroll Now ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:axiomsecurecraft.official@gmail.com", className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium hover:bg-card transition", children: "Request Brochure" })
          ] })
        ] })
      ] }),
      p.outcomes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "01", children: "Learning Outcomes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]", children: "What you'll achieve." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "lg:col-span-8 grid sm:grid-cols-2 gap-4", children: p.outcomes.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 rounded-xl border border-border bg-card/40 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 18, className: "mt-0.5 text-primary shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground/85", children: o })
        ] }, o)) })
      ] }) }),
      p.topics && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "02", children: "Topics Covered" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: p.topics.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-card/60 px-5 py-2 text-sm", children: t }, t)) })
      ] }) }),
      (p.audience || p.benefits) && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-2 gap-10", children: [
        p.audience && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "03", children: "Who Should Attend" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: p.audience.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-foreground/85", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
            " ",
            a
          ] }, a)) })
        ] }),
        p.benefits && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "04", children: "Workshop Benefits" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: p.benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-foreground/85", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
            " ",
            b
          ] }, b)) })
        ] })
      ] }) }),
      p.modules && p.modules.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "05", children: "Curriculum" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]", children: "Modules." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid md:grid-cols-2 gap-5", children: p.modules.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/40 p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary text-sm font-semibold", children: String(i + 1).padStart(2, "0") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold tracking-tight", children: m.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2", children: m.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 14, className: "mt-0.5 text-primary/70 shrink-0" }),
            it
          ] }, it)) })
        ] }, m.title)) })
      ] }) }),
      p.capstone && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-5 sm:px-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "06", children: "Capstone Project" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-display text-2xl md:text-3xl font-medium tracking-[-0.01em] leading-snug", children: p.capstone })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "07", children: "Continue Exploring" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]", children: [
          "More in ",
          d.name,
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: PROGRAM_ORDER.filter((s) => s !== program).map((slug) => {
          const other = d.programs[slug];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/$domain/$program", params: {
            domain: d.slug,
            program: slug
          }, className: "group rounded-2xl border border-border bg-card/40 p-6 hover:bg-card hover:border-primary/40 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.25em] text-primary", children: other.level }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-base font-semibold tracking-tight", children: other.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: other.duration }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-5 inline-flex items-center gap-2 text-sm text-foreground/80 group-hover:text-primary transition", children: [
              "View program ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
            ] })
          ] }, slug);
        }) })
      ] }) })
    ] })
  ] });
}
export {
  ProgramPage as component
};
