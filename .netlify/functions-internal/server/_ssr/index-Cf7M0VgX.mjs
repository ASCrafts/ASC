import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, B as BrandLogo } from "./Header-DJrkEuxy.mjs";
import { S as SectionLabel } from "./SectionLabel-Dv-KWyQT.mjs";
import { b as bootcampImg, E as EnterpriseCard } from "./img-bootcamp-DyD_Ev9X.mjs";
import { c as cyberImg, b as aiAutoImg, a as aiFsImg } from "./router-Bd6Je97W.mjs";
import { E as ENROLL_URL, C as CLIENT_REQUIREMENT_URL, W as WORKSHOP, a as WORKSHOP_REGISTER_URL } from "./constants-BLkrYBTQ.mjs";
import { d as ArrowRight, A as ArrowUpRight, f as Cpu, k as ShieldCheck, C as CodeXml, l as Sparkles, L as Linkedin, a as Github, M as Mail, m as ClipboardList, X } from "../_libs/lucide-react.mjs";
import { R as Renderer, C as Camera, G as Geometry, P as Program, M as Mesh } from "../_libs/ogl.mjs";
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
function Modal({ open, onClose, children, labelledBy }) {
  const panelRef = reactExports.useRef(null);
  const previouslyFocused = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll(
          'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      const first = panelRef.current?.querySelector(
        'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])'
      );
      first?.focus();
    }, 30);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previouslyFocused.current?.focus?.();
    };
  }, [open, onClose]);
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": labelledBy,
      className: "fixed inset-0 z-[100] flex items-end sm:items-center justify-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 bg-background/70 backdrop-blur-md animate-in fade-in duration-200",
            onClick: onClose,
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: panelRef,
            className: "relative w-full sm:max-w-lg mx-0 sm:mx-4 rounded-t-2xl sm:rounded-2xl border border-border bg-card/95 backdrop-blur-xl shadow-[0_40px_120px_-30px_rgba(0,0,0,0.6)] p-6 md:p-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "aria-label": "Close",
                  onClick: onClose,
                  className: "absolute top-4 right-4 inline-flex items-center justify-center h-9 w-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 15 })
                }
              ),
              children
            ]
          }
        )
      ]
    }
  );
}
const defaultColors = ["#ffffff", "#ffffff", "#ffffff"];
const hexToRgb = (hex) => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
  const int = parseInt(hex, 16);
  return [(int >> 16 & 255) / 255, (int >> 8 & 255) / 255, (int & 255) / 255];
};
const vertex = (
  /* glsl */
  `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;
  varying vec4 vRandom;
  varying vec3 vColor;
  void main() {
    vRandom = random;
    vColor = color;
    vec3 pos = position * uSpread;
    pos.z *= 10.0;
    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
    vec4 mvPos = viewMatrix * mPos;
    if (uSizeRandomness == 0.0) {
      gl_PointSize = uBaseSize;
    } else {
      gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
    }
    gl_Position = projectionMatrix * mvPos;
  }
`
);
const fragment = (
  /* glsl */
  `
  precision highp float;
  uniform float uTime;
  uniform float uAlphaParticles;
  varying vec4 vRandom;
  varying vec3 vColor;
  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));
    if(uAlphaParticles < 0.5) {
      if(d > 0.5) discard;
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
    } else {
      float circle = smoothstep(0.5, 0.4, d) * 0.8;
      gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), circle);
    }
  }
`
);
const Particles = ({
  particleCount = 200,
  particleSpread = 10,
  speed = 0.1,
  particleColors,
  moveParticlesOnHover = false,
  particleHoverFactor = 1,
  alphaParticles = false,
  particleBaseSize = 100,
  sizeRandomness = 1,
  cameraDistance = 20,
  disableRotation = false,
  pixelRatio = 1,
  className = ""
}) => {
  const containerRef = reactExports.useRef(null);
  const mouseRef = reactExports.useRef({ x: 0, y: 0 });
  reactExports.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const renderer = new Renderer({ dpr: pixelRatio, depth: false, alpha: true });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);
    const camera = new Camera(gl, { fov: 15 });
    camera.position.set(0, 0, cameraDistance);
    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };
    window.addEventListener("resize", resize, false);
    resize();
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height * 2 - 1);
      mouseRef.current = { x, y };
    };
    if (moveParticlesOnHover) container.addEventListener("mousemove", handleMouseMove);
    const count = particleCount;
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 4);
    const colors = new Float32Array(count * 3);
    const palette = particleColors && particleColors.length > 0 ? particleColors : defaultColors;
    for (let i = 0; i < count; i++) {
      let x, y, z, len;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        len = x * x + y * y + z * z;
      } while (len > 1 || len === 0);
      const r = Math.cbrt(Math.random());
      positions.set([x * r, y * r, z * r], i * 3);
      randoms.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
      const col = hexToRgb(palette[Math.floor(Math.random() * palette.length)]);
      colors.set(col, i * 3);
    }
    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: randoms },
      color: { size: 3, data: colors }
    });
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: particleSpread },
        uBaseSize: { value: particleBaseSize * pixelRatio },
        uSizeRandomness: { value: sizeRandomness },
        uAlphaParticles: { value: alphaParticles ? 1 : 0 }
      },
      transparent: true,
      depthTest: false
    });
    const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });
    let animationFrameId;
    let lastTime = performance.now();
    let elapsed = 0;
    const update = (t) => {
      animationFrameId = requestAnimationFrame(update);
      const delta = t - lastTime;
      lastTime = t;
      elapsed += delta * speed;
      program.uniforms.uTime.value = elapsed * 1e-3;
      if (moveParticlesOnHover) {
        particles.position.x = -mouseRef.current.x * particleHoverFactor;
        particles.position.y = -mouseRef.current.y * particleHoverFactor;
      } else {
        particles.position.x = 0;
        particles.position.y = 0;
      }
      if (!disableRotation) {
        particles.rotation.x = Math.sin(elapsed * 2e-4) * 0.1;
        particles.rotation.y = Math.cos(elapsed * 5e-4) * 0.15;
        particles.rotation.z += 0.01 * speed;
      }
      renderer.render({ scene: particles, camera });
    };
    animationFrameId = requestAnimationFrame(update);
    return () => {
      window.removeEventListener("resize", resize);
      if (moveParticlesOnHover) container.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
    };
  }, [
    particleCount,
    particleSpread,
    speed,
    moveParticlesOnHover,
    particleHoverFactor,
    alphaParticles,
    particleBaseSize,
    sizeRandomness,
    cameraDistance,
    disableRotation,
    pixelRatio
  ]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, className: `particles-container ${className}` });
};
const heroBg = "/assets/hero-bg-CEeDdaAG.jpg";
function useReveal() {
  const ref = reactExports.useRef(null);
  const [shown, setShown] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }, {
      threshold: 0.15
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return {
    ref,
    shown
  };
}
function Reveal({
  children,
  delay = 0,
  className = ""
}) {
  const {
    ref,
    shown
  } = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, style: {
    transitionDelay: `${delay}ms`
  }, className: ["transition-all duration-700 ease-out", shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6", className].join(" "), children });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "top", className: "min-h-screen bg-background text-foreground antialiased", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhoWeAre, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Capabilities, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Solutions, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Team, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CourseEnrollment, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function WorkshopWidget() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative animate-widget-float", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/40 via-primary/10 to-transparent opacity-60 blur-lg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl border border-border bg-card/70 backdrop-blur-xl p-6 md:p-7 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-flex h-2 w-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-primary animate-pulse-ring" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })
            ] }),
            "Upcoming Workshop"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "Live" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "workshop-title", className: "mt-5 font-display text-2xl md:text-3xl font-semibold tracking-[-0.01em] leading-tight", children: WORKSHOP.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: WORKSHOP.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setOpen(true), className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs font-medium hover:brightness-110 transition", children: [
            "Register Now ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 12 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/cybersecurity", className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium hover:border-primary hover:text-primary transition", children: [
            "Learn More ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Modal, { open, onClose: () => setOpen(false), labelledBy: "workshop-modal-title", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-flex h-2 w-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-primary animate-pulse-ring" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })
        ] }),
        "Upcoming Workshop"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "workshop-modal-title", className: "mt-4 font-display text-2xl md:text-3xl font-semibold tracking-[-0.01em] leading-tight", children: WORKSHOP.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: WORKSHOP.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-6 grid grid-cols-2 gap-4 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-background/40 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "uppercase tracking-[0.22em] text-muted-foreground/80", children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 text-foreground", children: "To be announced" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-background/40 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "uppercase tracking-[0.22em] text-muted-foreground/80", children: "Format" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 text-foreground", children: "Interactive · Live" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WORKSHOP_REGISTER_URL, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:brightness-110 transition", children: [
          "Confirm Registration ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 14 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setOpen(false), className: "inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-primary hover:text-primary transition", children: "Cancel" })
      ] })
    ] })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[100svh] flex items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBg, alt: "", width: 1920, height: 1080, className: "h-full w-full object-cover opacity-50 animate-drift" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grain" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Particles, { particleColors: ["#f05252", "#e53935", "#ffffff"], particleCount: 180, particleSpread: 11, speed: 0.08, particleBaseSize: 90, alphaParticles: true, disableRotation: false }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-5 sm:px-8 pt-32 pb-20 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8 reveal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs uppercase tracking-[0.25em] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }),
          "Technology · Security · AI"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-balance font-display font-semibold tracking-[-0.03em] leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl", children: [
          "Built with ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-normal text-muted-foreground", children: "Purpose." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Secured by",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "Design." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -bottom-2 left-0 right-0 h-[6px] bg-primary/70" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl text-pretty text-base sm:text-lg text-muted-foreground leading-relaxed", children: "Axiom Secure Crafts builds secure digital experiences across web, cybersecurity, and artificial intelligence — for businesses, institutions, and the innovators shaping what's next." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#solutions", className: "group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-medium glow-accent hover:brightness-110 transition", children: [
            "Explore Services",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 18, className: "transition-transform group-hover:translate-x-1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-border hover:border-foreground transition", children: [
            "Contact Us",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 18, className: "transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WorkshopWidget, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground/70", children: "Scroll" })
  ] });
}
function WhoWeAre() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "whoweare", className: "relative py-28 md:py-40 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "01", children: "Who We Are" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-balance font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] leading-[1.05]", children: [
        "A technology partner engineered for the realities of a",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "digital, adversarial world." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 150, className: "lg:col-span-5 lg:pt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-base md:text-lg", children: "Axiom Secure Crafts delivers technology solutions, cybersecurity expertise, and professional development programs designed to help individuals and organizations thrive in a digital world." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed text-base md:text-lg", children: "Our mission is to build secure, innovative, and practical solutions that create meaningful impact — from production systems to the people who run them." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-[0.25em] text-foreground/80", children: "Engineering · Security · Education" })
        ] })
      ] })
    ] })
  ] }) });
}
const CAPABILITIES = [{
  icon: Cpu,
  title: "TECHNOLOGY",
  desc: "Building modern digital experiences and scalable solutions for evolving business needs."
}, {
  icon: ShieldCheck,
  title: "CYBERSECURITY",
  desc: "Embedding security into every layer of design, development, and deployment."
}, {
  icon: CodeXml,
  title: "ENGINEERING EXCELLENCE",
  desc: "Creating reliable, maintainable, and future-ready technology systems."
}, {
  icon: Sparkles,
  title: "INNOVATION",
  desc: "Transforming ideas into practical solutions through emerging technologies and strategic thinking."
}];
function Capabilities() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-28 md:py-36 border-t border-border bg-surface/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "02", children: "Enterprise Capabilities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em]", children: "Four disciplines. One operating standard." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: CAPABILITIES.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group h-full relative overflow-hidden rounded-xl border border-border bg-card p-8 md:p-10 transition-all duration-500 hover:border-primary/30 hover:-translate-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { size: 32, className: "text-primary", strokeWidth: 1.4 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 text-lg font-semibold tracking-[0.1em] uppercase", children: c.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: c.desc })
    ] }) }, c.title)) })
  ] }) });
}
function Solutions() {
  const items = [{
    image: cyberImg,
    eyebrow: "Cybersecurity",
    title: "Cybersecurity",
    description: "Consulting, assessments, defensive operations, and structured training across the full security lifecycle.",
    to: "/cybersecurity",
    cta: "Explore cybersecurity"
  }, {
    image: aiAutoImg,
    eyebrow: "AI Automation",
    title: "AI Automation",
    description: "Intelligent workflows and autonomous systems that scale operations and unlock productivity.",
    to: "/ai-automation",
    cta: "Explore automation"
  }, {
    image: aiFsImg,
    eyebrow: "AI Full Stack",
    title: "AI Full Stack",
    description: "Modern AI-powered product engineering across frontend, backend, and cloud infrastructure.",
    to: "/ai-fullstack",
    cta: "Explore full stack"
  }, {
    image: bootcampImg,
    eyebrow: "Bootcamp",
    title: "7-Day Bootcamp",
    description: "An intensive 7-day learning experience offering practical exposure to modern tools and real-world problem solving.",
    href: ENROLL_URL,
    external: true,
    cta: "Enroll now"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "solutions", className: "relative py-28 md:py-40 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-6 mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "03", children: "What We Do" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] max-w-3xl", children: [
          "Practices delivered",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "at enterprise standard." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition", children: [
        "Discuss your project ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 14 })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx(EnterpriseCard, { ...it }) }, it.title)) })
  ] }) });
}
const TEAM = [{
  name: "Ahamadhu Aaqil I",
  role: "Founder & Chairman",
  bio: "Strategic direction and long-term vision for ASC.",
  initials: "AA",
  github: "https://github.com/honey-aaqil"
}, {
  name: "Rishi Rubhak R",
  role: "Founder & CEO",
  bio: "Business strategy, technology initiatives, and organizational development.",
  initials: "RR",
  portfolio: "https://rishirubhak-17.netlify.app",
  github: "https://github.com/RishiRubhak17",
  linkedin: "https://linkedin.com/in/RishiRubhak17",
  email: "ceo.axiomsecurecrafts@gmail.com"
}, {
  name: "Hari Vishnu A",
  role: "COO & Board of Directors",
  bio: "Operations, execution, process optimization, and organizational efficiency.",
  initials: "HV",
  portfolio: "https://hari-vishnu.netlify.app/",
  linkedin: "https://www.linkedin.com/in/harivishnu-a-0ba861398/"
}, {
  name: "Muhamed Jamal K",
  role: "CMO & Board of Directors",
  bio: "Brand strategy, communications, growth initiatives, and market engagement.",
  initials: "MJ",
  linkedin: "https://www.linkedin.com/in/muhamedjamalk"
}, {
  name: "Mohamed Nufail M",
  role: "CTO & Board of Directors",
  bio: "Technology architecture, engineering excellence, and digital transformation.",
  initials: "MN",
  linkedin: "https://www.linkedin.com/in/m-mohamed-nufail-24673a379/"
}];
function Team() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "team", className: "relative py-28 md:py-40 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "04", children: "The Team Behind ASC" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] max-w-3xl", children: [
          "People Behind",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "The Work." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/team", className: "inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-primary hover:text-primary transition", children: [
        "View Full Team ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6", children: TEAM.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group relative h-full rounded-2xl p-[1px] bg-gradient-to-b from-border to-transparent transition-all duration-500 hover:from-primary/60 hover:to-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full rounded-2xl bg-card/95 backdrop-blur-xl border border-border/60 p-6 md:p-7 flex flex-col overflow-hidden transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_60px_-20px_rgba(229,57,53,0.35)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 grain opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-border/80 bg-background/60 text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-primary" }),
          "Leadership"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70", children: [
          "0",
          i + 1
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-10 bg-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-semibold tracking-tight", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[11px] uppercase tracking-[0.22em] text-primary", children: m.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: m.bio })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-auto pt-8 flex flex-wrap items-center gap-2", children: [
        m.portfolio && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: m.portfolio, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] px-3 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors", children: [
          "Portfolio ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 12 })
        ] }),
        m.linkedin && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: m.linkedin, target: "_blank", rel: "noopener noreferrer", "aria-label": `${m.name} on LinkedIn`, className: "inline-flex items-center justify-center h-9 w-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 14 }) }),
        m.github && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: m.github, target: "_blank", rel: "noopener noreferrer", "aria-label": `${m.name} on GitHub`, className: "inline-flex items-center justify-center h-9 w-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { size: 14 }) }),
        m.email && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${m.email}`, "aria-label": `Email ${m.name}`, className: "inline-flex items-center justify-center h-9 w-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14 }) })
      ] })
    ] }) }) }, m.name)) })
  ] }) });
}
const CONTACT_CARDS = [{
  label: "EMAIL",
  subtitle: "Connect Digitally",
  reveal: "axiomsecurecraft.official@gmail.com",
  href: "mailto:axiomsecurecraft.official@gmail.com"
}, {
  label: "PHONE",
  subtitle: "Direct Communication",
  reveal: "+91 7418 221 459",
  href: "tel:+917418221459"
}, {
  label: "LOCATION",
  subtitle: "Operating From",
  reveal: "India"
}, {
  label: "FOCUS AREAS",
  subtitle: "",
  reveal: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Technology" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Cybersecurity" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Artificial Intelligence" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Innovation" })
  ] })
}];
function ContactCard({
  label,
  subtitle,
  reveal,
  href
}) {
  const [open, setOpen] = reactExports.useState(false);
  const isRevealed = open;
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: ["group relative h-full rounded-xl overflow-hidden bg-card border border-border backdrop-blur-sm transition-all duration-500", "hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]", isRevealed ? "border-primary/40 -translate-y-1 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]" : ""].join(" "), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-primary/50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-7 md:p-8 h-full flex flex-col min-h-[180px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-6 relative", children: [
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: ["text-xl md:text-2xl font-semibold text-foreground tracking-tight transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-3", isRevealed ? "opacity-0 -translate-y-3" : ""].join(" "), children: subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: ["transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0", isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3", subtitle ? "absolute bottom-0 left-0 right-0" : ""].join(" "), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base md:text-lg font-medium text-foreground leading-relaxed break-words", children: reveal }) })
      ] })
    ] })
  ] });
  const handleToggle = (e) => {
    if (!isRevealed && href) {
      e.preventDefault();
      setOpen(true);
      return;
    }
    setOpen((v) => !v);
  };
  if (href) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, onClick: handleToggle, "aria-expanded": isRevealed, className: "block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl", children: content });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setOpen((v) => !v), "aria-expanded": isRevealed, className: "block h-full w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl", children: content });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative py-28 md:py-40 border-t border-border overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 grain" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-16 lg:gap-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "05", children: "Connect With ASC" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block w-px bg-primary/40 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.02em] leading-[1.05]", children: [
              "Building Secure Technology.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Creating Meaningful Impact." })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-muted-foreground max-w-lg leading-relaxed text-base md:text-lg", children: "Axiom Secure Crafts collaborates with businesses, institutions, innovators, and forward-thinking organizations to deliver secure technology solutions, digital innovation, and long-term value." }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 grid sm:grid-cols-2 gap-4", children: [
        CONTACT_CARDS.map((card, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 250 + i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactCard, { ...card }) }, card.label)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 250 + CONTACT_CARDS.length * 100, className: "sm:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: CLIENT_REQUIREMENT_URL, target: "_blank", rel: "noopener noreferrer", className: "group inline-flex items-center justify-between w-full rounded-xl border border-border bg-card px-6 py-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { size: 18, className: "text-primary", strokeWidth: 1.4 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: "Have a Project?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 text-base font-semibold text-foreground", children: "Client Requirement" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 16, className: "text-foreground/80 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
        ] }) })
      ] })
    ] }) })
  ] });
}
function CourseEnrollment() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "enroll", className: "relative py-28 md:py-36 border-t border-border overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 grain" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-surface/30 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { num: "06", children: "Course Enrollment & Consultation" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 100, className: "lg:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.02em] leading-[1.05]", children: [
            "Learn with ASC.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Our team will reach out." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-muted-foreground max-w-lg leading-relaxed text-base md:text-lg", children: "Interested in learning with us? Fill the form and our team will contact you to discuss programs, schedules, and the right fit for your goals." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-8 md:p-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.25em] text-muted-foreground", children: "Begin Your Journey" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-foreground leading-relaxed", children: "Share a few details and we'll guide you through enrollment and consultation." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: ENROLL_URL, target: "_blank", rel: "noopener noreferrer", className: "mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-medium glow-accent hover:brightness-110 transition", children: [
            "Enroll / Consult Now ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 16 })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border pt-20 pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BrandLogo, { className: "h-14 w-auto object-contain" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col leading-tight", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold tracking-[0.18em] text-foreground", children: "AXIOM" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold tracking-[0.18em] text-muted-foreground", children: "SECURE CRAFTS" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed", children: "A technology partner for organizations and innovators building the next generation of secure digital products." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Practices", items: [{
        label: "Cybersecurity",
        href: "/cybersecurity"
      }, {
        label: "AI Automation",
        href: "/ai-automation"
      }, {
        label: "AI Full Stack",
        href: "/ai-fullstack"
      }, {
        label: "Bootcamp",
        href: ENROLL_URL,
        external: true
      }, {
        label: "Client Requirement",
        href: CLIENT_REQUIREMENT_URL,
        external: true
      }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Company", items: [{
        label: "Who We Are",
        href: "/#whoweare"
      }, {
        label: "Team",
        href: "/team"
      }, {
        label: "Foundation Program",
        href: "/cybersecurity/foundation"
      }, {
        label: "Professional Program",
        href: "/cybersecurity/professional"
      }, {
        label: "Connect With ASC",
        href: "/#contact"
      }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Connect", items: [{
        label: "GitHub",
        href: "https://github.com/ASCrafts",
        external: true
      }, {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/axiomsecurecrafts/",
        external: true
      }, {
        label: "Instagram",
        href: "https://www.instagram.com/axiom_secure.crafts/",
        external: true
      }, {
        label: "axiomsecurecraft.official@gmail.com",
        href: "mailto:axiomsecurecraft.official@gmail.com"
      }, {
        label: "+91 7418 221 459",
        href: "tel:+917418221459"
      }] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hairline h-px w-full mt-16" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Axiom Secure Crafts. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "uppercase tracking-[0.25em]", children: "Crafted with intent." })
    ] })
  ] }) });
}
function FooterCol({
  title,
  items
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-foreground/80", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3 text-sm", children: items.map((item) => {
      const it = typeof item === "string" ? {
        label: item,
        href: "#"
      } : item;
      const external = typeof item === "object" && item.external;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: it.href, ...external ? {
        target: "_blank",
        rel: "noopener noreferrer"
      } : {}, className: "text-muted-foreground hover:text-foreground transition-colors break-words", children: it.label }) }, it.label);
    }) })
  ] });
}
export {
  Home as component
};
