import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AscLogo } from "@/components/AscLogo";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Code2,
  GraduationCap,
  Cpu,
  Layers,
  Compass,
  Linkedin,
  Github,
  Mail,
  Check,
} from "lucide-react";
import { Header } from "@/components/Header";
import { SectionLabel } from "@/components/SectionLabel";
import ascBrand from "@/assets/asc-brand.png.asset.json";
import heroBg from "@/assets/hero-bg.jpg";
import { DOMAINS, DOMAIN_ORDER, PROGRAM_ORDER } from "@/lib/programs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Axiom Secure Crafts — Built with Purpose. Secured by Design." },
      {
        name: "description",
        content:
          "Axiom Secure Crafts delivers website development, cybersecurity, AI solutions, and professional learning programs for modern organizations.",
      },
      { property: "og:title", content: "Axiom Secure Crafts" },
      {
        property: "og:description",
        content:
          "Technology solutions, cybersecurity expertise, and professional development for a digital world.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

/* ---------------- Reusable bits ---------------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        "transition-all duration-700 ease-out",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/* ---------------- Page ---------------- */

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Marquee />
        <WhoWeAre />
        <Solutions />
        <Work />
        <Learning />
        <WhyChoose />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-50 animate-drift"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 grain" />
      </div>

      {/* Ambient particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/40 animate-float-slow"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              animationDelay: `${(i % 7) * 0.6}s`,
              filter: "blur(0.3px)",
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-32 pb-20 w-full">
        <div className="max-w-4xl reveal">
          <div className="flex items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Technology · Security · AI
            </span>
          </div>

          <h1 className="text-balance font-display font-semibold tracking-[-0.03em] leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            Built with{" "}
            <span className="italic font-normal text-muted-foreground">Purpose.</span>
            <br />
            Secured by{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Design.</span>
              <span className="absolute -bottom-2 left-0 right-0 h-[6px] bg-primary/70" />
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-pretty text-base sm:text-lg text-muted-foreground leading-relaxed">
            Axiom Secure Crafts builds secure digital experiences across web, cybersecurity, and
            artificial intelligence — for businesses, institutions, and the innovators shaping
            what's next.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#solutions"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-medium glow-accent hover:brightness-110 transition"
            >
              Explore Services
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-border hover:border-foreground transition"
            >
              Contact Us
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground/70">
        Scroll
      </div>
    </section>
  );
}

/* ---------------- Capabilities ---------------- */

const CAPABILITIES = [
  {
    icon: Cpu,
    title: "TECHNOLOGY",
    desc: "Building modern digital experiences and scalable solutions for evolving business needs.",
  },
  {
    icon: ShieldCheck,
    title: "CYBERSECURITY",
    desc: "Embedding security into every layer of design, development, and deployment.",
  },
  {
    icon: Code2,
    title: "ENGINEERING EXCELLENCE",
    desc: "Creating reliable, maintainable, and future-ready technology systems.",
  },
  {
    icon: Sparkles,
    title: "INNOVATION",
    desc: "Transforming ideas into practical solutions through emerging technologies and strategic thinking.",
  },
];

function Capabilities() {
  return (
    <section className="relative py-28 md:py-36 bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-balance font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-white">
              Enterprise capabilities.
            </h2>
            <p className="mt-4 max-w-2xl text-[#A1A1AA] text-base md:text-lg leading-relaxed">
              Four disciplines that define how ASC operates at scale.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="group h-full relative overflow-hidden rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-8 md:p-10 transition-all duration-500 hover:border-[#DC2626]/30 hover:bg-gradient-to-b hover:from-white/[0.06] hover:to-[#DC2626]/[0.02]">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#DC2626]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <c.icon size={32} className="text-[#DC2626]" strokeWidth={1.4} />
                <h3 className="mt-8 text-lg font-semibold tracking-[0.1em] text-white uppercase">
                  {c.title}
                </h3>
                <p className="mt-4 text-sm text-[#A1A1AA] leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Marquee ---------------- */

function Marquee() {
  const items = [
    "SECURE BY DESIGN",
    "WEB ENGINEERING",
    "CYBERSECURITY",
    "ARTIFICIAL INTELLIGENCE",
    "DIGITAL SOLUTIONS",
    "TECHNOLOGY EXCELLENCE",
    "MODERN INNOVATION",
    "FUTURE-READY SYSTEMS",
  ];
  return (
    <section aria-hidden className="border-y border-border py-6 overflow-hidden">
      <div className="flex w-max animate-marquee gap-10">
        {[...items, ...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-10 text-muted-foreground">
            <span className="text-sm uppercase tracking-[0.3em] text-foreground/70">{t}</span>
            <span className="h-1.5 w-1.5 rounded-sm bg-[#DC2626]/80" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Who We Are ---------------- */

function WhoWeAre() {
  return (
    <section id="whoweare" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel num="01">Who We Are</SectionLabel>
        </Reveal>
        <div className="mt-10 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7">
            <h2 className="text-balance font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] leading-[1.05]">
              A technology partner engineered for the realities of a{" "}
              <span className="text-muted-foreground">digital, adversarial world.</span>
            </h2>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5 lg:pt-3">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Axiom Secure Crafts delivers technology solutions, cybersecurity expertise, and
              professional development programs designed to help individuals and organizations
              thrive in a digital world.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed text-base md:text-lg">
              Our mission is to build secure, innovative, and practical solutions that create
              meaningful impact — from production systems to the people who run them.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm">
              <span className="h-px w-12 bg-primary" />
              <span className="uppercase tracking-[0.25em] text-foreground/80">
                Engineering · Security · Education
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Solutions ---------------- */

const SOLUTIONS = [
  {
    icon: Code2,
    title: "Website Development",
    desc: "Professional, secure, performance-first websites and applications for businesses, startups, and institutions.",
    tags: ["Next.js", "TypeScript", "Edge"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    desc: "Security consulting, awareness, and best-practice guidance — built into the lifecycle, not bolted on.",
    tags: ["Audit", "Hardening", "Awareness"],
  },
  {
    icon: Cpu,
    title: "AI Solutions",
    desc: "AI-powered automation, intelligent workflows, and applied innovation tailored to your operations.",
    tags: ["LLM", "Automation", "RAG"],
  },
  {
    icon: GraduationCap,
    title: "Professional Learning",
    desc: "Workshops, bootcamps, and structured programs that translate directly into capability.",
    tags: ["Workshops", "Bootcamps", "Programs"],
  },
];

function Solutions() {
  return (
    <section id="solutions" className="relative py-28 md:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <Reveal>
              <SectionLabel num="02">What We Do</SectionLabel>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] max-w-3xl">
                Four practices.
                <br />
                <span className="text-muted-foreground">One operating standard.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
            >
              Discuss your project <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="group h-full bg-background p-7 md:p-9 hover:bg-surface transition-colors duration-500 relative">
                <s.icon size={28} className="text-primary" strokeWidth={1.6} />
                <h3 className="mt-8 text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground border border-border px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ArrowUpRight
                  size={18}
                  className="absolute top-7 right-7 text-muted-foreground/40 group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Work ---------------- */

const PROJECTS = [
  {
    name: "Smart Expense Tracker",
    category: "Web App · Finance",
    desc: "A web-based expense tracking application that enables users to categorize transactions, monitor spending habits, and generate monthly financial reports with interactive data visualization dashboards.",
    stack: ["Python", "Flask", "SQLite", "Chart.js"],
    contributions: [
      "Designed REST APIs for transaction management.",
      "Built interactive charts and analytics dashboards.",
      "Implemented user authentication and role-based access control.",
      "Optimized database queries for faster report generation.",
    ],
  },
  {
    name: "AI-Powered Resume Screening System",
    category: "Artificial Intelligence · NLP",
    desc: "An automated resume screening platform that analyzes candidate resumes and matches them against job descriptions using natural language processing — improving recruitment efficiency through automated candidate ranking.",
    stack: ["Python", "NLP", "Scikit-learn", "FastAPI"],
    contributions: [
      "Developed text preprocessing and feature extraction pipelines.",
      "Implemented candidate-job matching algorithms.",
      "Built APIs for resume upload and scoring.",
      "Evaluated model performance using precision and recall metrics.",
    ],
  },
  {
    name: "Real-Time Chat Application",
    category: "Web Engineering · Realtime",
    desc: "A real-time messaging platform supporting instant communication between users, with secure authentication and a scalable message delivery architecture.",
    stack: ["React", "Node.js", "Socket.io", "MongoDB"],
    contributions: [
      "Developed real-time communication using WebSockets.",
      "Designed responsive user interfaces.",
      "Implemented message persistence and retrieval.",
      "Added online/offline presence tracking.",
    ],
  },
];

function Work() {
  return (
    <section id="work" className="relative py-28 md:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <Reveal>
              <SectionLabel num="03">Featured Projects</SectionLabel>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] max-w-3xl">
                Solutions delivered.
                <br />
                <span className="text-muted-foreground">Outcomes measured.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 120}>
              <article className="group relative h-full card-elev rounded-2xl p-7 md:p-8 flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="inline-flex w-fit items-center gap-2 px-2.5 py-1 rounded-full border border-border bg-background/60 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  {p.category}
                </span>
                <h3 className="mt-6 text-xl md:text-2xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                <ul className="mt-6 space-y-2.5">
                  {p.contributions.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed">
                      <Check size={14} className="mt-1 shrink-0 text-primary" strokeWidth={2.4} />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] uppercase tracking-[0.2em] text-foreground/75 border border-border px-2 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Learning ---------------- */

function Learning() {
  const [active, setActive] = useState<typeof DOMAIN_ORDER[number]>(DOMAIN_ORDER[0]);
  const domain = DOMAINS[active];

  return (
    <section id="learning" className="relative py-28 md:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionLabel num="04">Learning Programs</SectionLabel>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
                Practical learning,
                <br />
                <span className="text-muted-foreground">engineered for impact.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                {[
                  "Certificates of Completion",
                  "Active Community Access",
                  "Resume Enhancement Support",
                  "Hands-On, Project-Based Learning",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            {/* Domain tabs */}
            <Reveal>
              <div className="flex flex-wrap gap-2 rounded-full border border-border bg-card/40 p-1.5">
                {DOMAIN_ORDER.map((slug) => {
                  const d = DOMAINS[slug];
                  const isActive = slug === active;
                  return (
                    <button
                      key={slug}
                      type="button"
                      onClick={() => setActive(slug)}
                      className={[
                        "px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition",
                        isActive
                          ? "bg-primary text-primary-foreground shadow"
                          : "text-muted-foreground hover:text-foreground",
                      ].join(" ")}
                    >
                      {d.name}
                    </button>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-5 text-sm text-muted-foreground max-w-2xl">{domain.tagline}</p>
            </Reveal>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {PROGRAM_ORDER.map((slug, i) => {
                const p = domain.programs[slug];
                return (
                  <Reveal key={`${active}-${slug}`} delay={i * 70}>
                    <Link
                      to="/$domain/$program"
                      params={{ domain: domain.slug, program: slug }}
                      className="card-elev rounded-2xl p-7 h-full group block hover:border-primary/40 transition"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-primary">
                          {p.level}
                        </span>
                        <span className="text-xs text-muted-foreground">{p.duration}</span>
                      </div>
                      <h3 className="mt-5 text-xl font-semibold tracking-tight">{p.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {p.overview}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm text-foreground/80 group-hover:text-primary transition">
                        Explore program <ArrowRight size={14} />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Choose ---------------- */

const WHY = [
  { icon: ShieldCheck, title: "Security First", desc: "Every solution is designed with security in mind, from architecture to deployment." },
  { icon: Layers, title: "Practical Learning", desc: "Industry-relevant skills, hands-on guidance, and outcomes that translate to work." },
  { icon: Sparkles, title: "Modern Technology", desc: "Built using current tools, current frameworks, and the patterns that scale." },
  { icon: Compass, title: "Client-Centric", desc: "Focused on delivering value, clarity, and measurable results — without theater." },
];

function WhyChoose() {
  return (
    <section className="relative py-28 md:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel num="05">Why Choose ASC</SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] max-w-3xl">
            A standard of work
            <br />
            <span className="text-muted-foreground">you can build on.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 90}>
              <div className="card-elev rounded-2xl p-7 h-full">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface">
                  <w.icon size={20} className="text-primary" strokeWidth={1.7} />
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{w.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Insights ("Notes from Practice") section removed per spec. */


/* ---------------- Team ---------------- */

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  portfolio?: string;
  linkedin?: string;
  github?: string;
  email?: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Ahamadhu Aaqil I",
    role: "Founder & Chairman",
    bio: "Providing strategic direction and long-term vision for Axiom Secure Crafts while driving organizational growth and innovation.",
    initials: "AA",
    github: "https://github.com/honey-aaqil",
  },
  {
    name: "Rishi Rubhak R",
    role: "Founder & Chief Executive Officer (CEO)",
    bio: "Leading business strategy, technology initiatives, partnerships, and overall organizational development.",
    initials: "RR",
    portfolio: "https://rishirubhak-17.netlify.app",
    github: "https://github.com/RishiRubhak17",
    linkedin: "https://linkedin.com/in/RishiRubhak17",
    email: "ceo.axiomsecurecrafts@gmail.com",
  },
  {
    name: "Hari Vishnu A",
    role: "COO & Board of Directors",
    bio: "Overseeing operations, execution, process optimization, and organizational efficiency.",
    initials: "HV",
    portfolio: "https://harivishnu.netlify.app/",
    linkedin: "https://www.linkedin.com/in/harivishnu-a-0ba861398/",
  },
  {
    name: "Muhamed Jamal K",
    role: "CMO & Board of Directors",
    bio: "Driving brand strategy, communications, growth initiatives, and market engagement.",
    initials: "MJ",
    linkedin: "https://www.linkedin.com/in/muhamedjamalk",
  },
  {
    name: "Mohamed Nufail M",
    role: "CTO & Board of Directors",
    bio: "Leading technology architecture, engineering excellence, innovation, and digital transformation initiatives.",
    initials: "MN",
    linkedin: "https://www.linkedin.com/in/m-mohamed-nufail-24673a379/",
  },
];

function Team() {
  return (
    <section id="team" className="relative py-28 md:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel num="07">Leadership</SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] max-w-3xl">
            People Behind
            <br />
            <span className="text-muted-foreground">The Work.</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed text-base md:text-lg">
            Meet the leadership team driving innovation, security, technology, and strategic
            growth at Axiom Secure Crafts.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <div className="group relative h-full rounded-2xl p-[1px] bg-gradient-to-b from-border to-transparent transition-all duration-500 hover:from-primary/60 hover:to-border">
                <div className="relative h-full rounded-2xl bg-[#0A0A0A]/95 backdrop-blur-xl border border-border/60 p-6 md:p-7 flex flex-col overflow-hidden transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_60px_-20px_rgba(229,57,53,0.35)]">
                  {/* ambient corner accents */}
                  <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="pointer-events-none absolute inset-0 grain opacity-40" />

                  <div className="relative flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-border/80 bg-background/60 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      Leadership
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="relative mt-8">
                    <div className="h-px w-10 bg-primary" />
                    <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                      {m.name}
                    </h3>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-primary">
                      {m.role}
                    </p>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {m.bio}
                    </p>
                  </div>

                  <div className="relative mt-auto pt-8 flex flex-wrap items-center gap-2">
                    {m.portfolio && (
                      <a
                        href={m.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] px-3 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                      >
                        Portfolio
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                    {m.linkedin && (
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name} on LinkedIn`}
                        className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                      >
                        <Linkedin size={14} />
                      </a>
                    )}
                    {m.github && (
                      <a
                        href={m.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name} on GitHub`}
                        className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                      >
                        <Github size={14} />
                      </a>
                    )}
                    {m.email && (
                      <a
                        href={`mailto:${m.email}`}
                        aria-label={`Email ${m.name}`}
                        className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                      >
                        <Mail size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

type ContactCardData = {
  label: string;
  subtitle: string;
  reveal: React.ReactNode;
  href?: string;
};

const CONTACT_CARDS: ContactCardData[] = [
  {
    label: "EMAIL",
    subtitle: "Connect Digitally",
    reveal: "axiomsecurecraft.official@gmail.com",
    href: "mailto:axiomsecurecraft.official@gmail.com",
  },
  {
    label: "PHONE",
    subtitle: "Direct Communication",
    reveal: "+91 7418 221 459",
    href: "tel:+917418221459",
  },
  {
    label: "LOCATION",
    subtitle: "Operating From",
    reveal: "India",
  },
  {
    label: "FOCUS AREAS",
    subtitle: "",
    reveal: (
      <ul className="space-y-1">
        <li>Technology</li>
        <li>Cybersecurity</li>
        <li>Artificial Intelligence</li>
        <li>Innovation</li>
      </ul>
    ),
  },
];

function ContactCard({ label, subtitle, reveal, href }: ContactCardData) {
  const [open, setOpen] = useState(false);
  const isRevealed = open;

  const content = (
    <div
      className={[
        "group relative h-full rounded-xl overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] backdrop-blur-sm transition-all duration-500",
        "hover:-translate-y-1 hover:border-white/[0.14] hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]",
        isRevealed ? "border-white/[0.18] -translate-y-1 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]" : "",
      ].join(" ")}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-primary/50" />
      <div className="relative p-7 md:p-8 h-full flex flex-col min-h-[180px]">
        <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </p>
        <div className="mt-auto pt-6 relative">
          {subtitle && (
            <p
              className={[
                "text-xl md:text-2xl font-semibold text-foreground tracking-tight transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-3",
                isRevealed ? "opacity-0 -translate-y-3" : "",
              ].join(" ")}
            >
              {subtitle}
            </p>
          )}
          <div
            className={[
              "transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0",
              isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              subtitle ? "absolute bottom-0 left-0 right-0" : "",
            ].join(" ")}
          >
            <div className="text-base md:text-lg font-medium text-foreground leading-relaxed break-words">
              {reveal}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const handleToggle = (e: React.MouseEvent) => {
    if (!isRevealed && href) {
      e.preventDefault();
      setOpen(true);
      return;
    }
    setOpen((v) => !v);
  };

  if (href) {
    return (
      <a
        href={href}
        onClick={handleToggle}
        aria-expanded={isRevealed}
        className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      aria-expanded={isRevealed}
      className="block h-full w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
    >
      {content}
    </button>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 border-t border-border overflow-hidden">
      <div className="absolute inset-0 -z-10 grain" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel num="08">Connect With ASC</SectionLabel>
            </Reveal>

            <div className="mt-10 flex gap-8">
              <div className="hidden sm:block w-px bg-primary/40 shrink-0" />
              <div>
                <Reveal delay={100}>
                  <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.02em] leading-[1.05]">
                    Building Secure Technology.
                    <br />
                    <span className="text-muted-foreground">Creating Meaningful Impact.</span>
                  </h2>
                </Reveal>
                <Reveal delay={200}>
                  <p className="mt-8 text-muted-foreground max-w-lg leading-relaxed text-base md:text-lg">
                    Axiom Secure Crafts collaborates with businesses, institutions, innovators, and forward-thinking organizations to deliver secure technology solutions, digital innovation, and long-term value.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {CONTACT_CARDS.map((card, i) => (
              <Reveal key={card.label} delay={250 + i * 100}>
                <ContactCard {...card} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-border pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            {/* Replaced broken image branding with crisp SVG branding block */}
            <div className="flex items-center gap-3 select-none">
              <AscLogo size={44} className="text-white" />
              <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold tracking-[0.15em] text-white leading-none">AXIOM</span>
                <span className="text-[11px] font-semibold tracking-[0.15em] text-zinc-400 mt-1.5 leading-none">SECURE CRAFTS</span>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
              A technology partner for organizations and innovators building the next generation
              of secure digital products.
            </p>
          </div>

          <FooterCol
            title="Solutions"
            items={["Website Development", "Cybersecurity", "AI Solutions", "Professional Learning"]}
          />
          <FooterCol
            title="Company"
            items={[
              { label: "Who We Are", href: "#whoweare" },
              { label: "Strategic Initiatives", href: "#work" },
              { label: "Insights", href: "#learning" },
              { label: "Leadership Team", href: "#team" },
              { label: "Connect With ASC", href: "#contact" },
            ]}
          />
          <FooterCol
            title="Connect"
            items={[
              { label: "GitHub", href: "https://github.com/ASCrafts", external: true },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/axiomsecurecrafts/", external: true },
              { label: "Instagram", href: "https://www.instagram.com/axiom_secure.crafts/", external: true },
              { label: "axiomsecurecraft.official@gmail.com", href: "mailto:axiomsecurecraft.official@gmail.com" },
              { label: "+91 7418 221 459", href: "tel:+917418221459" },
            ]}
          />
        </div>

        <div className="hairline h-px w-full mt-16" />

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Axiom Secure Crafts. All rights reserved.</p>
          <p className="uppercase tracking-[0.25em]">Crafted with intent.</p>
        </div>
      </div>
    </footer>
  );
}

type FooterColItem = string | { label: string; href: string; external?: boolean };

function FooterCol({ title, items }: { title: string; items: FooterColItem[] }) {
  return (
    <div className="md:col-span-2">
      <div className="text-xs uppercase tracking-[0.25em] text-foreground/80">{title}</div>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map((item) => {
          const it = typeof item === "string" ? { label: item, href: "#" } : item;
          const external = typeof item === "object" && item.external;
          return (
            <li key={it.label}>
              <a
                href={it.href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-muted-foreground hover:text-foreground transition-colors break-words"
              >
                {it.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
