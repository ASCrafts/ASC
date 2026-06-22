import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header } from "./Header-DJrkEuxy.mjs";
import { S as SectionLabel } from "./SectionLabel-Dv-KWyQT.mjs";
import { E as ENROLL_URL } from "./constants-BLkrYBTQ.mjs";
import { b as aiAutoImg } from "./router-Bd6Je97W.mjs";
import { d as ArrowRight, A as ArrowUpRight, W as Workflow, h as Bot, i as Settings, Z as Zap, j as ChartLine, f as Cpu } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const SERVICES = [{
  icon: Workflow,
  title: "Workflow Automation",
  desc: "Replace manual handoffs with intelligent, auditable workflows that scale with your operations."
}, {
  icon: Bot,
  title: "AI Agents",
  desc: "Purpose-built agents for research, support, and operational tasks — integrated with your tools."
}, {
  icon: Settings,
  title: "Process Optimization",
  desc: "Map, measure, and redesign processes around AI-augmented decision points."
}, {
  icon: Zap,
  title: "Integration Engineering",
  desc: "Connect SaaS, internal APIs, and data sources into a single coherent automation layer."
}, {
  icon: ChartLine,
  title: "Analytics & Insights",
  desc: "Translate operational data into actionable decisions through AI-assisted analysis."
}, {
  icon: Cpu,
  title: "Custom AI Solutions",
  desc: "Tailored AI applications addressing the specific bottlenecks in your organization."
}];
const USE_CASES = [{
  title: "Sales & Lead Operations",
  desc: "Automated lead enrichment, qualification, and routing across your CRM."
}, {
  title: "Customer Support",
  desc: "AI-assisted triage, knowledge retrieval, and ticket resolution."
}, {
  title: "Document Processing",
  desc: "Intelligent extraction, classification, and routing of unstructured documents."
}, {
  title: "Internal Operations",
  desc: "Onboarding, approvals, and reporting workflows that run themselves."
}, {
  title: "Marketing & Content",
  desc: "Brand-aligned content workflows, repurposing pipelines, and campaign analytics."
}, {
  title: "Data & Reporting",
  desc: "Automated ETL, anomaly detection, and exec-ready dashboards."
}];
const AUDIENCE = ["Operations teams reducing manual overhead", "Product teams shipping AI-powered features", "Founders looking to scale without scaling headcount", "Enterprises modernizing internal workflows"];
function AiAutomationPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 md:pt-40 pb-20 border-b border-border overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aiAutoImg, alt: "", className: "h-full w-full object-cover opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition", children: "← Back to home" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] max-w-4xl", children: "AI Automation that compounds." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed", children: "Intelligent systems and autonomous workflows that scale operations, unlock productivity, and remove the friction holding teams back." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", hash: "contact", className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition", children: [
              "Talk to our team ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: ENROLL_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary transition", children: [
              "Enroll Now ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 14 })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "01", children: "Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]", children: "Less manual. More leverage." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lg:col-span-7 text-muted-foreground text-base md:text-lg leading-relaxed", children: "We design and deploy AI automation that integrates cleanly into how your teams already work — replacing brittle scripts and manual handoffs with intelligent workflows that improve over time." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "02", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-7 hover:border-primary/40 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { size: 22, className: "text-primary", strokeWidth: 1.6 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-lg font-semibold tracking-tight", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: s.desc })
        ] }, s.title)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "03", children: "Use Cases" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: USE_CASES.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/60 p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold tracking-tight", children: u.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: u.desc })
        ] }, u.title)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "04", children: "Solutions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]", children: "Engineered, not assembled." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: "Every engagement starts with mapping your real workflows. From there, we engineer automation that fits — not a generic template forced onto your process." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "lg:col-span-7 grid sm:grid-cols-2 gap-4", children: ["Multi-agent orchestration", "RAG-powered internal search", "Workflow automation platforms", "Custom AI APIs", "Browser & system automation", "AI-enhanced reporting"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "rounded-xl border border-border bg-card p-5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mr-2", children: "→" }),
          s
        ] }, s)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "05", children: "Who It's For" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: AUDIENCE.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "rounded-xl border border-border bg-card p-5 text-sm", children: a }, a)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-5 sm:px-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-5xl font-semibold tracking-[-0.02em]", children: "Automate the work that holds your team back." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", hash: "contact", className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition", children: [
            "Start a conversation ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: ENROLL_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary transition", children: [
            "Enroll Now ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 14 })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  AiAutomationPage as component
};
