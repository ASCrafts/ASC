import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header } from "./Header-Bu7kWG0W.mjs";
import { S as SectionLabel } from "./SectionLabel-Dv-KWyQT.mjs";
import { E as ENROLL_URL } from "./constants-BLkrYBTQ.mjs";
import { c as cyberImg } from "./router-BAqzjgTI.mjs";
import { s as Clock, r as GraduationCap, A as ArrowUpRight, e as Layers, t as Check, v as Shield, w as Award, u as Briefcase, d as ArrowRight } from "../_libs/lucide-react.mjs";
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
const MODULES = [{
  title: "Digital Systems & Internet Essentials",
  days: "Days 1–3",
  items: ["Computer Fundamentals", "Internet Architecture & Communication", "Network Models & Protocols"]
}, {
  title: "Operating Systems & Linux Operations",
  days: "Days 4–6",
  items: ["Operating Systems Fundamentals", "Linux Navigation & File Management", "Linux Administration Essentials"]
}, {
  title: "Network Infrastructure & Traffic Analysis",
  days: "Days 7–9",
  items: ["Networking Fundamentals", "IP Addressing & Subnetting", "Traffic Analysis with Wireshark"]
}, {
  title: "Web Technologies & Application Fundamentals",
  days: "Day 10",
  items: ["Web Technologies", "Authentication & Sessions", "Application Basics"]
}, {
  title: "Cybersecurity Principles & Security Operations",
  days: "Days 11–12",
  items: ["Security Fundamentals", "Security Teams & Operations"]
}, {
  title: "Defensive Security & Security Tooling",
  days: "Days 13–14",
  items: ["Cryptography Fundamentals", "Reconnaissance & Security Monitoring"]
}, {
  title: "Cybersecurity Challenge Lab & Career Pathways",
  days: "Day 15",
  items: ["Capstone Challenge Lab", "Career Roadmap & Certifications"]
}];
const OUTCOMES = ["Understand computer and networking fundamentals", "Navigate Linux environments confidently", "Analyze network traffic using Wireshark", "Understand web technologies and authentication mechanisms", "Apply core cybersecurity concepts and principles", "Use industry-relevant cybersecurity tools", "Complete beginner-level Capture The Flag (CTF) challenges", "Plan cybersecurity career pathways and next learning steps"];
const TOOLS = ["Cisco Packet Tracer", "Wireshark", "Linux Terminal", "OverTheWire", "CryptoHack", "PicoCTF", "TryHackMe"];
const HIGHLIGHTS = ["Concept-first instruction followed by hands-on practice", "Daily 1-hour structured sessions", "Industry-standard tooling throughout", "Practical assignments every day", "Capstone challenge lab at the end"];
const PERFECT_FOR = ["Students & recent graduates exploring IT and cybersecurity", "Early-career professionals building foundational skills", "Individuals preparing for entry-level security certifications", "Anyone seeking structured, practical exposure to security"];
const CAREER = ["Junior SOC Analyst", "IT Support → Security Track", "Network Operations", "Cybersecurity Apprentice"];
function FoundationPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 md:pt-40 pb-20 border-b border-border overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cyberImg, alt: "", className: "h-full w-full object-cover opacity-25" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/cybersecurity", className: "text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition", children: "← Cybersecurity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Foundation Program" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 bg-primary/40" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Beginner" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-4xl md:text-6xl font-semibold tracking-[-0.02em] max-w-4xl", children: "Cybersecurity Foundations & Practical Skills" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed", children: "A 15-day industry-oriented program that builds a strong, hands-on foundation in computing, networking, operating systems, and core cybersecurity concepts — preparing you for further specialization in security roles." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14, className: "text-primary" }),
              " 15 Days · 1 hour/day"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 14, className: "text-primary" }),
              " Beginner"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: ENROLL_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition", children: [
              "Enroll Now ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 14 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:axiomsecurecraft.official@gmail.com", className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary transition", children: "Request Brochure" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "01", children: "Program Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]", children: "A structured path into cybersecurity." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lg:col-span-7 text-muted-foreground text-base md:text-lg leading-relaxed", children: "The program bridges the gap between theoretical knowledge and industry-relevant practical skills. Each day combines concept-first instruction with guided lab work, culminating in a capstone challenge lab and a clear roadmap into cybersecurity career pathways." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "02", children: "Core Modules" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid md:grid-cols-2 gap-5", children: MODULES.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary text-sm font-semibold", children: String(i + 1).padStart(2, "0") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold tracking-tight", children: m.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.22em] text-muted-foreground", children: m.days })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2", children: m.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: 14, className: "mt-0.5 text-primary/70 shrink-0" }),
            it
          ] }, it)) })
        ] }, m.title)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "03", children: "Learning Outcomes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]", children: "What you'll achieve." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "lg:col-span-8 grid sm:grid-cols-2 gap-3", children: OUTCOMES.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 rounded-xl border border-border bg-card/50 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 16, className: "mt-0.5 text-primary shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: o })
        ] }, o)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "04", children: "Tools Covered" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-3", children: TOOLS.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-card/60 px-5 py-2 text-sm", children: t }, t)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-2 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "05", children: "Program Highlights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3", children: HIGHLIGHTS.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-foreground/90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 16, className: "mt-1 text-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm leading-relaxed", children: h })
          ] }, h)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "06", children: "Perfect For" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3", children: PERFECT_FOR.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-foreground/90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm leading-relaxed", children: p })
          ] }, p)) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-2 gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { size: 22, className: "text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-2xl font-semibold tracking-tight", children: "Certification" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: "Participants who complete the program — including daily practical assignments and the final capstone challenge lab — receive an ASC Certificate of Completion recognizing their foundational cybersecurity competency." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 22, className: "text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-2xl font-semibold tracking-tight", children: "Career Pathways" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2", children: CAREER.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm text-foreground/85", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
            " ",
            c
          ] }, c)) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-5 sm:px-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-5xl font-semibold tracking-[-0.02em]", children: "Ready to build your cybersecurity foundation?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: ENROLL_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition", children: [
            "Enroll Now ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 14 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cybersecurity/professional", className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary transition", children: [
            "See Professional Program ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  FoundationPage as component
};
