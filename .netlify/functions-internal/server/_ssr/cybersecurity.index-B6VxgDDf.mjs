import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header } from "./Header-CwfR_vE6.mjs";
import { S as SectionLabel } from "./SectionLabel-Dv-KWyQT.mjs";
import { E as EnterpriseCard, b as bootcampImg } from "./img-bootcamp-DyD_Ev9X.mjs";
import { E as ENROLL_URL } from "./constants-BLkrYBTQ.mjs";
import { c as cyberImg } from "./router-CWK1n6iC.mjs";
import { d as ArrowRight, A as ArrowUpRight, k as ShieldCheck, n as Search, o as Activity, p as Lock, q as Server, r as GraduationCap } from "../_libs/lucide-react.mjs";
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
  icon: ShieldCheck,
  title: "Security Consulting",
  desc: "Strategic guidance to align security posture with business risk and growth."
}, {
  icon: Search,
  title: "Vulnerability Assessment",
  desc: "Identify, prioritize, and remediate weaknesses across infrastructure and applications."
}, {
  icon: Activity,
  title: "SOC Operations Support",
  desc: "Detection, triage, and response workflows engineered for real-world threats."
}, {
  icon: Lock,
  title: "Application Security",
  desc: "Web, API, and product security across the development lifecycle."
}, {
  icon: Server,
  title: "Infrastructure Hardening",
  desc: "Cloud, network, and endpoint hardening built into delivery — not bolted on."
}, {
  icon: GraduationCap,
  title: "Security Training",
  desc: "Structured programs that translate directly into capability and career outcomes."
}];
const CAPABILITIES = ["Threat Modeling & Risk Assessment", "Penetration Testing Methodologies", "Network Traffic & Log Analysis", "Incident Detection & Response", "Identity & Access Management", "Cloud Security Fundamentals", "OWASP Top 10 & Web App Security", "Security Awareness Programs"];
function CybersecurityPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden border-b border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cyberImg, alt: "", loading: "eager", className: "h-full w-full object-cover opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition", children: "← Back to home" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] max-w-4xl", children: "Cybersecurity, engineered into every layer." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed", children: "ASC delivers cybersecurity expertise across consulting, assessments, defensive operations, and structured training — built for modern organizations operating in an adversarial digital world." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", hash: "contact", className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition", children: [
              "Talk to security team ",
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]", children: "Defense as a practice, not a product." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lg:col-span-7 text-muted-foreground text-base md:text-lg leading-relaxed", children: "Security is most effective when it's continuous, contextual, and integrated. We help organizations move from reactive controls to a coherent security posture — strengthening applications, networks, identity, and the people who operate them." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "02", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-7 hover:border-primary/40 transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { size: 22, className: "text-primary", strokeWidth: 1.6 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-lg font-semibold tracking-tight", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: s.desc })
        ] }, s.title)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "03", children: "Capabilities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]", children: "The depth behind the delivery." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "lg:col-span-8 grid sm:grid-cols-2 gap-3", children: CAPABILITIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 rounded-xl border border-border bg-card/50 px-5 py-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary shrink-0" }),
          c
        ] }, c)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "04", children: "Training & Programs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em] max-w-3xl", children: "From foundations to professional readiness." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(EnterpriseCard, { image: cyberImg, eyebrow: "15 Days · Beginner", title: "Cybersecurity Foundation Program", description: "A structured introduction to networking, operating systems, and security principles — building the base for a cybersecurity career.", to: "/cybersecurity/foundation", cta: "Explore foundation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(EnterpriseCard, { image: cyberImg, eyebrow: "30 Days · Intermediate", title: "Cybersecurity Professional Program", description: "Hands-on skills used by SOC analysts and ethical hackers — alert triage, log correlation, web app testing, and capstone investigation.", to: "/cybersecurity/professional", cta: "Explore professional" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(EnterpriseCard, { image: bootcampImg, eyebrow: "7 Days · Intensive", title: "7-Day Bootcamp", description: "Practical exposure to modern security tooling, workflows, and real-world problem solving — compressed into a focused intensive.", href: ENROLL_URL, external: true, cta: "Enroll now" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "05", children: "Assessments" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]", children: "Know your posture. Then improve it." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 grid sm:grid-cols-2 gap-4", children: [{
          title: "Security Posture Review",
          desc: "A structured baseline assessment across controls, architecture, and process."
        }, {
          title: "Vulnerability Assessment",
          desc: "Identify and prioritize weaknesses across systems and applications."
        }, {
          title: "Web Application Testing",
          desc: "OWASP-aligned testing for web platforms and APIs."
        }, {
          title: "Configuration Review",
          desc: "Cloud, network, and endpoint configuration assessment against best practice."
        }].map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold", children: a.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: a.desc })
        ] }, a.title)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-5 sm:px-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-5xl font-semibold tracking-[-0.02em]", children: "Ready to strengthen your security posture?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground text-base md:text-lg", children: "Talk to our team about assessments, training cohorts, or a tailored engagement." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", hash: "contact", className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition", children: [
            "Contact ASC ",
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
  CybersecurityPage as component
};
