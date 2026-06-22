import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header } from "./Header-CwfR_vE6.mjs";
import { A as ArrowUpRight, G as Globe, L as Linkedin, a as Github, M as Mail } from "../_libs/lucide-react.mjs";
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
import "./router-CWK1n6iC.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const LEADERSHIP = [{
  name: "Ahamadhu Aaqil I",
  role: "Founder & Chairman",
  bio: "Providing strategic direction and long-term vision for Axiom Secure Crafts while driving organizational growth and innovation.",
  initials: "AA",
  github: "https://github.com/honey-aaqil"
}, {
  name: "Rishi Rubhak R",
  role: "Founder & CEO",
  bio: "Leading business strategy, technology initiatives, partnerships, and overall organizational development.",
  initials: "RR",
  portfolio: "https://rishirubhak-17.netlify.app",
  github: "https://github.com/RishiRubhak17",
  linkedin: "https://linkedin.com/in/RishiRubhak17",
  email: "ceo.axiomsecurecrafts@gmail.com"
}, {
  name: "Hari Vishnu A",
  role: "COO & Board of Directors",
  bio: "Overseeing operations, execution, process optimization, and organizational efficiency.",
  initials: "HV",
  portfolio: "https://hari-vishnu.netlify.app/",
  linkedin: "https://www.linkedin.com/in/harivishnu-a-0ba861398/"
}, {
  name: "Muhamed Jamal K",
  role: "CMO & Board of Directors",
  bio: "Driving brand strategy, communications, growth initiatives, and market engagement.",
  initials: "MJ",
  linkedin: "https://www.linkedin.com/in/muhamedjamalk"
}, {
  name: "Mohamed Nufail M",
  role: "CTO & Board of Directors",
  bio: "Leading technology architecture, engineering excellence, innovation, and digital transformation initiatives.",
  initials: "MN",
  linkedin: "https://www.linkedin.com/in/m-mohamed-nufail-24673a379/"
}];
const TEAM_MEMBERS = [{
  name: "Vidya Shri S",
  role: "Technical Lead",
  bio: "Leads technical architecture, engineering strategy, solution planning, and technical excellence across ASC initiatives.",
  initials: "VS",
  linkedin: "https://linkedin.com/in/vidya-shri-s-5a74a731b"
}, {
  name: "AnishFathima A",
  role: "Technical Coordinator",
  bio: "Coordinates projects, streamlines execution, and ensures smooth collaboration across teams and initiatives.",
  initials: "AF",
  linkedin: "https://linkedin.com/in/anishfathima12"
}, {
  name: "Mohammad Anas S",
  role: "Technical Associate & Editor",
  bio: "Supports technical operations, documentation, digital assets, and content refinement across ASC projects.",
  initials: "MA",
  linkedin: "https://linkedin.com/in/mohammed-anas-886209416"
}];
function ProfileCard({
  m,
  i
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group rounded-2xl border border-border bg-card p-6 md:p-7 h-full flex flex-col transition-all duration-500 hover:-translate-y-1 hover:border-primary/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-sm font-semibold tracking-wide text-foreground", children: m.initials }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70", children: String(i + 1).padStart(2, "0") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 text-lg font-semibold tracking-tight", children: m.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[11px] uppercase tracking-[0.22em] text-primary", children: m.role }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: m.bio }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-6 flex flex-wrap items-center gap-2", children: [
      m.portfolio && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: m.portfolio, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] px-3 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 12 }),
        " Portfolio"
      ] }),
      m.linkedin && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: m.linkedin, target: "_blank", rel: "noopener noreferrer", "aria-label": `${m.name} on LinkedIn`, className: "inline-flex items-center justify-center h-9 w-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 14 }) }),
      m.github && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: m.github, target: "_blank", rel: "noopener noreferrer", "aria-label": `${m.name} on GitHub`, className: "inline-flex items-center justify-center h-9 w-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { size: 14 }) }),
      m.email && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${m.email}`, "aria-label": `Email ${m.name}`, className: "inline-flex items-center justify-center h-9 w-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14 }) })
    ] })
  ] });
}
function TeamPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "pt-32 md:pt-40 pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition", children: "← Back to home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 font-display text-4xl md:text-6xl font-semibold tracking-[-0.02em]", children: "The Team Behind ASC" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed", children: "The people driving innovation, engineering excellence, and secure digital experiences at Axiom Secure Crafts." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-5 sm:px-8 mt-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Leadership" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: LEADERSHIP.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileCard, { m, i }, m.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-5 sm:px-8 mt-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs uppercase tracking-[0.3em] text-muted-foreground", children: "Team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: TEAM_MEMBERS.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileCard, { m, i }, m.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-5 sm:px-8 mt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-10 md:p-14 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl font-semibold tracking-tight", children: "Want to work with us?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-xl mx-auto", children: "We collaborate with organizations, institutions, and innovators shaping the next generation of secure digital products." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", hash: "contact", className: "mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:brightness-110 transition", children: [
          "Get in touch ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 14 })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  TeamPage as component
};
