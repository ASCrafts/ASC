import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-DNz_2GG8.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const ThemeCtx = reactExports.createContext(null);
function applyTheme(t) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(t);
  root.style.colorScheme = t;
}
function ThemeProvider({ children }) {
  const [theme, setThemeState] = reactExports.useState("dark");
  reactExports.useEffect(() => {
    try {
      const stored = typeof localStorage !== "undefined" && localStorage.getItem("asc-theme") || null;
      const initial = stored ?? (window.matchMedia?.("(prefers-color-scheme: light)").matches ? "light" : "dark");
      setThemeState(initial);
      applyTheme(initial);
    } catch {
      applyTheme("dark");
    }
  }, []);
  const setTheme = reactExports.useCallback((t) => {
    setThemeState(t);
    applyTheme(t);
    try {
      localStorage.setItem("asc-theme", t);
    } catch {
    }
  }, []);
  const toggle = reactExports.useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeCtx.Provider, { value: { theme, toggle, setTheme }, children });
}
function useTheme() {
  const ctx = reactExports.useContext(ThemeCtx);
  if (!ctx) return { theme: "dark", toggle: () => {
  }, setTheme: () => {
  } };
  return ctx;
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('asc-theme');if(!t){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}var r=document.documentElement;r.classList.remove('dark','light');r.classList.add(t);r.style.colorScheme=t;}catch(e){document.documentElement.classList.add('dark');}})();`;
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0D0D0D" },
      { title: "Axiom Secure Crafts" },
      { name: "description", content: "AXIOM SECURE CRAFTS builds premium technology solutions, cybersecurity, and AI services for businesses." },
      { name: "author", content: "Axiom Secure Crafts" },
      { property: "og:site_name", content: "Axiom Secure Crafts" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Axiom Secure Crafts" },
      { name: "twitter:title", content: "Axiom Secure Crafts" },
      { property: "og:description", content: "AXIOM SECURE CRAFTS builds premium technology solutions, cybersecurity, and AI services for businesses." },
      { name: "twitter:description", content: "AXIOM SECURE CRAFTS builds premium technology solutions, cybersecurity, and AI services for businesses." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/acbb5005-8c6a-42ce-9a70-8da2179f380d/id-preview-3f07431e--b94fdbbc-d26a-47e3-b462-96761f38a1d6.lovable.app-1781953109913.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/acbb5005-8c6a-42ce-9a70-8da2179f380d/id-preview-3f07431e--b94fdbbc-d26a-47e3-b462-96761f38a1d6.lovable.app-1781953109913.png" }
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "stylesheet", href: appCss }
    ],
    scripts: [{ children: THEME_INIT_SCRIPT }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) });
}
const $$splitComponentImporter$7 = () => import("./team-BP2jFPae.mjs");
const Route$7 = createFileRoute("/team")({
  head: () => ({
    meta: [{
      title: "The Team Behind ASC — Axiom Secure Crafts"
    }, {
      name: "description",
      content: "The people driving innovation, engineering excellence, and secure digital experiences at Axiom Secure Crafts."
    }, {
      property: "og:title",
      content: "The Team Behind ASC"
    }, {
      property: "og:description",
      content: "Meet the leadership and team driving Axiom Secure Crafts."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const aiFsImg = "/assets/img-ai-fullstack-DNxEShpY.jpg";
const $$splitComponentImporter$6 = () => import("./ai-fullstack-WMjZ6nFg.mjs");
const Route$6 = createFileRoute("/ai-fullstack")({
  head: () => ({
    meta: [{
      title: "AI Full Stack — Axiom Secure Crafts"
    }, {
      name: "description",
      content: "AI-powered product engineering across frontend, backend, and cloud infrastructure — built by ASC."
    }, {
      property: "og:title",
      content: "AI Full Stack — Axiom Secure Crafts"
    }, {
      property: "og:description",
      content: "Modern AI-powered full-stack engineering from ASC."
    }, {
      property: "og:image",
      content: aiFsImg
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const aiAutoImg = "/assets/img-ai-automation-B8AJ7tkW.jpg";
const $$splitComponentImporter$5 = () => import("./ai-automation-CssZHOMO.mjs");
const Route$5 = createFileRoute("/ai-automation")({
  head: () => ({
    meta: [{
      title: "AI Automation — Axiom Secure Crafts"
    }, {
      name: "description",
      content: "AI-powered automation, intelligent workflows, and autonomous systems engineered for modern operations."
    }, {
      property: "og:title",
      content: "AI Automation — Axiom Secure Crafts"
    }, {
      property: "og:description",
      content: "Intelligent workflows and autonomous systems from ASC."
    }, {
      property: "og:image",
      content: aiAutoImg
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./index-BE5wU2Qo.mjs");
const Route$4 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Axiom Secure Crafts — Built with Purpose. Secured by Design."
    }, {
      name: "description",
      content: "Axiom Secure Crafts delivers website development, cybersecurity, AI solutions, and professional learning programs for modern organizations."
    }, {
      property: "og:title",
      content: "Axiom Secure Crafts"
    }, {
      property: "og:description",
      content: "Technology solutions, cybersecurity expertise, and professional development for a digital world."
    }, {
      property: "og:type",
      content: "website"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const cyberImg = "/assets/img-cybersecurity-Cb-pXQ5M.jpg";
const $$splitComponentImporter$3 = () => import("./cybersecurity.index-B6VxgDDf.mjs");
const Route$3 = createFileRoute("/cybersecurity/")({
  head: () => ({
    meta: [{
      title: "Cybersecurity — Axiom Secure Crafts"
    }, {
      name: "description",
      content: "End-to-end cybersecurity services, assessments, and training from Axiom Secure Crafts — defending modern organizations against evolving threats."
    }, {
      property: "og:title",
      content: "Cybersecurity — Axiom Secure Crafts"
    }, {
      property: "og:description",
      content: "Security services, assessments, and training programs from ASC."
    }, {
      property: "og:image",
      content: cyberImg
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./cybersecurity.professional-BQn7MTbH.mjs");
const Route$2 = createFileRoute("/cybersecurity/professional")({
  head: () => ({
    meta: [{
      title: "Cybersecurity Professional Program — Axiom Secure Crafts"
    }, {
      name: "description",
      content: "A 30-day advanced cybersecurity program from ASC — SOC operations, threat analysis, web app security, and capstone investigation."
    }, {
      property: "og:title",
      content: "Cybersecurity Professional Program — ASC"
    }, {
      property: "og:description",
      content: "30-day advanced cybersecurity skills development from Axiom Secure Crafts."
    }, {
      property: "og:image",
      content: cyberImg
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./cybersecurity.foundation-BgiHxZtk.mjs");
const Route$1 = createFileRoute("/cybersecurity/foundation")({
  head: () => ({
    meta: [{
      title: "Cybersecurity Foundation Program — Axiom Secure Crafts"
    }, {
      name: "description",
      content: "A 15-day, industry-oriented skill development initiative covering computing, networking, Linux, and core cybersecurity practices."
    }, {
      property: "og:title",
      content: "Cybersecurity Foundation Program — ASC"
    }, {
      property: "og:description",
      content: "15-day cybersecurity foundations program from Axiom Secure Crafts."
    }, {
      property: "og:image",
      content: cyberImg
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const BOOTCAMP_DESC = "An intensive 7-day learning experience designed to provide practical exposure to modern technologies, industry tools, and real-world problem solving.";
const DOMAINS = {
  cybersecurity: {
    slug: "cybersecurity",
    name: "Cybersecurity",
    tagline: "Defensive and offensive security expertise, engineered for the modern threat landscape.",
    accent: "from-cyan-500/20 to-blue-600/10",
    programs: {
      "workshops": {
        name: "Community Workshops",
        level: "Open Access",
        duration: "Monthly",
        overview: "Stay informed about the latest cybersecurity trends, threats, and defensive practices through our free monthly workshops.",
        outcomes: [
          "Current cyber threats and attack trends",
          "Personal and organizational security practices",
          "Cybersecurity career opportunities",
          "Ethical hacking fundamentals",
          "Security awareness for businesses",
          "Interactive Q&A sessions"
        ],
        audience: ["Students", "IT Professionals", "Business Owners", "Security Enthusiasts", "Career Switchers"],
        benefits: ["Industry insights", "Expert guidance", "Networking opportunities", "Learning resources", "Community access"]
      },
      "foundation-program": {
        name: "Cybersecurity Foundation Program",
        level: "Beginner",
        duration: "15 Days",
        overview: "A structured introduction to cybersecurity concepts, networking fundamentals, operating systems, and security principles — building a strong base for your cybersecurity journey.",
        outcomes: [
          "Understand cybersecurity fundamentals",
          "Learn networking basics",
          "Explore Linux and Windows security",
          "Identify common cyber threats",
          "Understand risk management concepts",
          "Build a cybersecurity learning roadmap"
        ],
        modules: [
          { title: "Cybersecurity Fundamentals", items: ["Introduction to Cybersecurity", "Security Domains", "Threat Landscape"] },
          { title: "Networking Essentials", items: ["TCP/IP", "DNS", "HTTP/HTTPS", "Network Architecture"] },
          { title: "Operating Systems Security", items: ["Linux Basics", "Windows Fundamentals", "User Management"] },
          { title: "Security Fundamentals", items: ["Authentication", "Encryption", "Access Control"] },
          { title: "Career Development", items: ["Cybersecurity Roles", "Industry Certifications", "Portfolio Guidance"] }
        ]
      },
      "professional-program": {
        name: "Cybersecurity Professional Program",
        level: "Intermediate",
        duration: "30 Days",
        overview: "A practical, career-focused program designed to help learners develop hands-on cybersecurity skills used by security analysts, SOC teams, and ethical hackers.",
        outcomes: [
          "Conduct security assessments",
          "Analyze network traffic",
          "Perform vulnerability scanning",
          "Understand incident response",
          "Use industry security tools",
          "Participate in Capture The Flag challenges"
        ],
        modules: [
          { title: "Security Operations Center (SOC)", items: ["Monitoring & Detection", "SIEM Fundamentals"] },
          { title: "Vulnerability Assessment", items: ["Scanning Methodologies", "Risk Analysis"] },
          { title: "Ethical Hacking", items: ["Reconnaissance", "Enumeration", "Exploitation Concepts"] },
          { title: "Incident Response", items: ["Detection", "Containment", "Recovery"] },
          { title: "Practical Labs", items: ["Security Simulations", "CTF Challenges"] }
        ]
      },
      "bootcamp": {
        name: "7-Day Bootcamp",
        level: "Intensive",
        duration: "7 Days",
        overview: BOOTCAMP_DESC,
        outcomes: [
          "Hands-on exposure to industry tools",
          "Practical project experience",
          "Real-world problem solving",
          "Career direction & next steps"
        ]
      }
    }
  },
  "ai-automation": {
    slug: "ai-automation",
    name: "AI Automation",
    tagline: "Intelligent systems and autonomous workflows that scale operations and unlock productivity.",
    accent: "from-violet-500/20 to-fuchsia-500/10",
    programs: {
      "workshops": {
        name: "Community Workshops",
        level: "Open Access",
        duration: "Monthly",
        overview: "Explore how businesses and professionals are using AI to automate workflows, improve productivity, and reduce operational overhead.",
        outcomes: [],
        topics: ["AI Agents", "Workflow Automation", "Business Process Optimization", "No-Code & Low-Code Automation", "Future of AI"]
      },
      "foundation-program": {
        name: "AI Automation Foundation Program",
        level: "Beginner",
        duration: "15 Days",
        overview: "Learn the fundamentals of AI-powered automation and understand how modern businesses use intelligent systems to streamline operations.",
        outcomes: [
          "Understand AI automation concepts",
          "Build basic automated workflows",
          "Use AI tools effectively",
          "Create productivity systems"
        ],
        modules: [
          { title: "Core Modules", items: [
            "Introduction to AI",
            "Automation Concepts",
            "Prompt Engineering Basics",
            "AI Productivity Tools",
            "Workflow Design Fundamentals",
            "Introduction to AI Agents"
          ] }
        ]
      },
      "professional-program": {
        name: "AI Automation Professional Program",
        level: "Intermediate",
        duration: "30 Days",
        overview: "Develop practical automation solutions using modern AI tools, integrations, and workflow orchestration platforms.",
        outcomes: [
          "Design scalable workflows",
          "Integrate multiple systems",
          "Build AI-powered business solutions",
          "Deploy automation projects"
        ],
        modules: [
          { title: "Core Modules", items: [
            "AI Workflow Design",
            "API Integration",
            "Automation Platforms",
            "AI Agent Development",
            "Business Automation Solutions",
            "Project Development"
          ] }
        ]
      },
      "bootcamp": {
        name: "7-Day Bootcamp",
        level: "Intensive",
        duration: "7 Days",
        overview: BOOTCAMP_DESC,
        outcomes: [
          "Hands-on with leading AI automation tools",
          "Build a working automation project",
          "Real-world workflow design",
          "Career direction & next steps"
        ]
      }
    }
  },
  "ai-fullstack": {
    slug: "ai-fullstack",
    name: "AI Full Stack",
    tagline: "Modern, AI-powered product engineering across frontend, backend, and cloud infrastructure.",
    accent: "from-emerald-500/20 to-teal-500/10",
    programs: {
      "workshops": {
        name: "Community Workshops",
        level: "Open Access",
        duration: "Monthly",
        overview: "Discover how modern applications combine AI, frontend technologies, backend systems, and cloud infrastructure to create intelligent digital products.",
        outcomes: [],
        topics: ["AI Application Development", "Full Stack Engineering", "Modern Development Tools", "Product Building", "Startup Technology Trends"]
      },
      "foundation-program": {
        name: "AI Full Stack Foundation Program",
        level: "Beginner",
        duration: "15 Days",
        overview: "Build a strong foundation in web development, programming fundamentals, databases, and AI integration concepts.",
        outcomes: [
          "Build basic web applications",
          "Understand frontend and backend architecture",
          "Work with databases",
          "Integrate AI services"
        ],
        modules: [
          { title: "Core Modules", items: [
            "HTML, CSS & JavaScript",
            "Programming Fundamentals",
            "Git & GitHub",
            "Databases",
            "Introduction to APIs",
            "AI Integration Basics"
          ] }
        ]
      },
      "professional-program": {
        name: "AI Full Stack Professional Program",
        level: "Intermediate",
        duration: "30 Days",
        overview: "Learn to develop full-stack applications enhanced with AI capabilities using modern frameworks and cloud technologies.",
        outcomes: [
          "Build production-ready applications",
          "Integrate AI services",
          "Deploy scalable systems",
          "Develop professional portfolios"
        ],
        modules: [
          { title: "Core Modules", items: [
            "React Development",
            "Backend APIs",
            "Database Design",
            "Authentication Systems",
            "AI API Integration",
            "Deployment Strategies"
          ] }
        ]
      },
      "bootcamp": {
        name: "7-Day Bootcamp",
        level: "Intensive",
        duration: "7 Days",
        overview: BOOTCAMP_DESC,
        outcomes: [
          "Ship a working full-stack project",
          "Modern frameworks and tools",
          "AI feature integration",
          "Career direction & next steps"
        ]
      }
    }
  }
};
const PROGRAM_ORDER = [
  "workshops",
  "foundation-program",
  "professional-program",
  "bootcamp"
];
const $$splitErrorComponentImporter = () => import("../_domain._program-DF0PHaLq.mjs");
const $$splitNotFoundComponentImporter = () => import("../_domain._program-BzJn7mYL.mjs");
const $$splitComponentImporter = () => import("../_domain._program-Cj1MBlRZ.mjs");
const Route = createFileRoute("/$domain/$program")({
  beforeLoad: ({
    params
  }) => {
    const d = DOMAINS[params.domain];
    if (!d) throw notFound();
    if (!d.programs[params.program]) throw notFound();
  },
  head: ({
    params
  }) => {
    const d = DOMAINS[params.domain];
    const p = d?.programs[params.program];
    const title = p ? `${p.name} — Axiom Secure Crafts` : "Program — Axiom Secure Crafts";
    const description = p?.overview ?? "ASC professional learning programs.";
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: description
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: description
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
const TeamRoute = Route$7.update({
  id: "/team",
  path: "/team",
  getParentRoute: () => Route$8
});
const AiFullstackRoute = Route$6.update({
  id: "/ai-fullstack",
  path: "/ai-fullstack",
  getParentRoute: () => Route$8
});
const AiAutomationRoute = Route$5.update({
  id: "/ai-automation",
  path: "/ai-automation",
  getParentRoute: () => Route$8
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const CybersecurityIndexRoute = Route$3.update({
  id: "/cybersecurity/",
  path: "/cybersecurity/",
  getParentRoute: () => Route$8
});
const CybersecurityProfessionalRoute = Route$2.update({
  id: "/cybersecurity/professional",
  path: "/cybersecurity/professional",
  getParentRoute: () => Route$8
});
const CybersecurityFoundationRoute = Route$1.update({
  id: "/cybersecurity/foundation",
  path: "/cybersecurity/foundation",
  getParentRoute: () => Route$8
});
const DomainProgramRoute = Route.update({
  id: "/$domain/$program",
  path: "/$domain/$program",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AiAutomationRoute,
  AiFullstackRoute,
  TeamRoute,
  DomainProgramRoute,
  CybersecurityFoundationRoute,
  CybersecurityProfessionalRoute,
  CybersecurityIndexRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  DOMAINS as D,
  PROGRAM_ORDER as P,
  Route as R,
  aiFsImg as a,
  aiAutoImg as b,
  cyberImg as c,
  router as r,
  useTheme as u
};
