import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Code2,
  Cpu,
  Linkedin,
  Github,
  Mail,
  ClipboardList,
} from "lucide-react";
import { Header } from "@/components/Header";
import { SectionLabel } from "@/components/SectionLabel";
import { EnterpriseCard } from "@/components/EnterpriseCard";
import { BrandLogo } from "@/components/BrandLogo";
import { Modal } from "@/components/Modal";
import Particles from "@/components/Particles";
import heroBg from "@/assets/hero-bg.jpg";
import cyberImg from "@/assets/img-cybersecurity.jpg";
import aiAutoImg from "@/assets/img-ai-automation.jpg";
import aiFsImg from "@/assets/img-ai-fullstack.jpg";
import bootcampImg from "@/assets/img-bootcamp.jpg";
import {
  ENROLL_URL,
  WORKSHOP_REGISTER_URL,
  CLIENT_REQUIREMENT_URL,
  WORKSHOP,
} from "@/lib/constants";

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
        content: "Technology solutions, cybersecurity expertise, and professional development for a digital world.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

/* ---------------- Reveal ---------------- */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}
function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={["transition-all duration-700 ease-out", shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6", className].join(" ")}
    >
      {children}
    </div>
  );
}

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <Capabilities />
        <Solutions />
        <Team />
        <Contact />
        <CourseEnrollment />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Hero ---------------- */
function WorkshopWidget() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative animate-widget-float">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/40 via-primary/10 to-transparent opacity-60 blur-lg" />
        <div className="relative rounded-2xl border border-border bg-card/70 backdrop-blur-xl p-6 md:p-7 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-primary">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Upcoming Workshop
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Live</span>
          </div>

          <h3 id="workshop-title" className="mt-5 font-display text-2xl md:text-3xl font-semibold tracking-[-0.01em] leading-tight">
            {WORKSHOP.name}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {WORKSHOP.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs font-medium hover:brightness-110 transition"
            >
              Register Now <ArrowUpRight size={12} />
            </button>
            <Link
              to="/cybersecurity"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium hover:border-primary hover:text-primary transition"
            >
              Learn More <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} labelledBy="workshop-modal-title">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-primary">
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-pulse-ring" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Upcoming Workshop
        </div>
        <h2
          id="workshop-modal-title"
          className="mt-4 font-display text-2xl md:text-3xl font-semibold tracking-[-0.01em] leading-tight"
        >
          {WORKSHOP.name}
        </h2>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          {WORKSHOP.description}
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-4 text-xs">
          <div className="rounded-lg border border-border bg-background/40 p-3">
            <dt className="uppercase tracking-[0.22em] text-muted-foreground/80">Date</dt>
            <dd className="mt-1 text-foreground">To be announced</dd>
          </div>
          <div className="rounded-lg border border-border bg-background/40 p-3">
            <dt className="uppercase tracking-[0.22em] text-muted-foreground/80">Format</dt>
            <dd className="mt-1 text-foreground">Interactive · Live</dd>
          </div>
        </dl>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={WORKSHOP_REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:brightness-110 transition"
          >
            Confirm Registration <ArrowUpRight size={14} />
          </a>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-primary hover:text-primary transition"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" width={1920} height={1080} className="h-full w-full object-cover opacity-50 animate-drift" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 grain" />
      </div>

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Particles
          particleColors={["#f05252", "#e53935", "#ffffff"]}
          particleCount={180}
          particleSpread={11}
          speed={0.08}
          particleBaseSize={90}
          alphaParticles
          disableRotation={false}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 reveal">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Technology · Security · AI
              </span>
            </div>

            <h1 className="text-balance font-display font-semibold tracking-[-0.03em] leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              Built with <span className="italic font-normal text-muted-foreground">Purpose.</span>
              <br />
              Secured by{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Design.</span>
                <span className="absolute -bottom-2 left-0 right-0 h-[6px] bg-primary/70" />
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-pretty text-base sm:text-lg text-muted-foreground leading-relaxed">
              Axiom Secure Crafts builds secure digital experiences across web, cybersecurity, and
              artificial intelligence — for businesses, institutions, and the innovators shaping what's next.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#solutions" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-medium glow-accent hover:brightness-110 transition">
                Explore Services
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-border hover:border-foreground transition">
                Contact Us
                <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <WorkshopWidget />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-muted-foreground/70">
        Scroll
      </div>
    </section>
  );
}

/* ---------------- Who We Are ---------------- */
function WhoWeAre() {
  return (
    <section id="whoweare" className="relative py-28 md:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal><SectionLabel num="01">Who We Are</SectionLabel></Reveal>
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
              professional development programs designed to help individuals and organizations thrive
              in a digital world.
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed text-base md:text-lg">
              Our mission is to build secure, innovative, and practical solutions that create meaningful
              impact — from production systems to the people who run them.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm">
              <span className="h-px w-12 bg-primary" />
              <span className="uppercase tracking-[0.25em] text-foreground/80">Engineering · Security · Education</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Capabilities ---------------- */
const CAPABILITIES = [
  { icon: Cpu, title: "TECHNOLOGY", desc: "Building modern digital experiences and scalable solutions for evolving business needs." },
  { icon: ShieldCheck, title: "CYBERSECURITY", desc: "Embedding security into every layer of design, development, and deployment." },
  { icon: Code2, title: "ENGINEERING EXCELLENCE", desc: "Creating reliable, maintainable, and future-ready technology systems." },
  { icon: Sparkles, title: "INNOVATION", desc: "Transforming ideas into practical solutions through emerging technologies and strategic thinking." },
];
function Capabilities() {
  return (
    <section className="relative py-28 md:py-36 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel num="02">Enterprise Capabilities</SectionLabel>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
            Four disciplines. One operating standard.
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="group h-full relative overflow-hidden rounded-xl border border-border bg-card p-8 md:p-10 transition-all duration-500 hover:border-primary/30 hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <c.icon size={32} className="text-primary" strokeWidth={1.4} />
                <h3 className="mt-8 text-lg font-semibold tracking-[0.1em] uppercase">{c.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Solutions Preview ---------------- */
function Solutions() {
  const items = [
    { image: cyberImg, eyebrow: "Cybersecurity", title: "Cybersecurity", description: "Consulting, assessments, defensive operations, and structured training across the full security lifecycle.", to: "/cybersecurity", cta: "Explore cybersecurity" },
    { image: aiAutoImg, eyebrow: "AI Automation", title: "AI Automation", description: "Intelligent workflows and autonomous systems that scale operations and unlock productivity.", to: "/ai-automation", cta: "Explore automation" },
    { image: aiFsImg, eyebrow: "AI Full Stack", title: "AI Full Stack", description: "Modern AI-powered product engineering across frontend, backend, and cloud infrastructure.", to: "/ai-fullstack", cta: "Explore full stack" },
    { image: bootcampImg, eyebrow: "Bootcamp", title: "7-Day Bootcamp", description: "An intensive 7-day learning experience offering practical exposure to modern tools and real-world problem solving.", href: ENROLL_URL, external: true, cta: "Enroll now" },
  ];
  return (
    <section id="solutions" className="relative py-28 md:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <Reveal><SectionLabel num="03">What We Do</SectionLabel></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] max-w-3xl">
                Practices delivered
                <br />
                <span className="text-muted-foreground">at enterprise standard.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
              Discuss your project <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <EnterpriseCard {...it} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Team Preview ---------------- */
type TeamMember = {
  name: string; role: string; bio: string; initials: string;
  portfolio?: string; linkedin?: string; github?: string; email?: string;
};
const TEAM: TeamMember[] = [
  { name: "Ahamadhu Aaqil I", role: "Founder & Chairman", bio: "Strategic direction and long-term vision for ASC.", initials: "AA", github: "https://github.com/honey-aaqil" },
  { name: "Rishi Rubhak R", role: "Founder & CEO", bio: "Business strategy, technology initiatives, and organizational development.", initials: "RR", portfolio: "https://rishirubhak-17.netlify.app", github: "https://github.com/RishiRubhak17", linkedin: "https://linkedin.com/in/RishiRubhak17", email: "ceo.axiomsecurecrafts@gmail.com" },
  { name: "Hari Vishnu A", role: "COO & Board of Directors", bio: "Operations, execution, process optimization, and organizational efficiency.", initials: "HV", portfolio: "https://hari-vishnu.netlify.app/", linkedin: "https://www.linkedin.com/in/harivishnu-a-0ba861398/" },
  { name: "Muhamed Jamal K", role: "CMO & Board of Directors", bio: "Brand strategy, communications, growth initiatives, and market engagement.", initials: "MJ", linkedin: "https://www.linkedin.com/in/muhamedjamalk" },
  { name: "Mohamed Nufail M", role: "CTO & Board of Directors", bio: "Technology architecture, engineering excellence, and digital transformation.", initials: "MN", linkedin: "https://www.linkedin.com/in/m-mohamed-nufail-24673a379/" },
];

function Team() {
  return (
    <section id="team" className="relative py-28 md:py-40 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <Reveal><SectionLabel num="04">The Team Behind ASC</SectionLabel></Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] max-w-3xl">
                People Behind
                <br />
                <span className="text-muted-foreground">The Work.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <Link to="/team" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-primary hover:text-primary transition">
              View Full Team <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <div className="group relative h-full rounded-2xl p-[1px] bg-gradient-to-b from-border to-transparent transition-all duration-500 hover:from-primary/60 hover:to-border">
                <div className="relative h-full rounded-2xl bg-card/95 backdrop-blur-xl border border-border/60 p-6 md:p-7 flex flex-col overflow-hidden transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_20px_60px_-20px_rgba(229,57,53,0.35)]">
                  <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="pointer-events-none absolute inset-0 grain opacity-40" />

                  <div className="relative flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-border/80 bg-background/60 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-primary" />Leadership
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">0{i + 1}</span>
                  </div>

                  <div className="relative mt-8">
                    <div className="h-px w-10 bg-primary" />
                    <h3 className="mt-5 text-lg font-semibold tracking-tight">{m.name}</h3>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-primary">{m.role}</p>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                  </div>

                  <div className="relative mt-auto pt-8 flex flex-wrap items-center gap-2">
                    {m.portfolio && (
                      <a href={m.portfolio} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] px-3 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                        Portfolio <ArrowUpRight size={12} />
                      </a>
                    )}
                    {m.linkedin && (
                      <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`} className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"><Linkedin size={14} /></a>
                    )}
                    {m.github && (
                      <a href={m.github} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on GitHub`} className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"><Github size={14} /></a>
                    )}
                    {m.email && (
                      <a href={`mailto:${m.email}`} aria-label={`Email ${m.name}`} className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"><Mail size={14} /></a>
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
type ContactCardData = { label: string; subtitle: string; reveal: React.ReactNode; href?: string };
const CONTACT_CARDS: ContactCardData[] = [
  { label: "EMAIL", subtitle: "Connect Digitally", reveal: "axiomsecurecraft.official@gmail.com", href: "mailto:axiomsecurecraft.official@gmail.com" },
  { label: "PHONE", subtitle: "Direct Communication", reveal: "+91 7418 221 459", href: "tel:+917418221459" },
  { label: "LOCATION", subtitle: "Operating From", reveal: "India" },
  {
    label: "FOCUS AREAS", subtitle: "",
    reveal: (
      <ul className="space-y-1">
        <li>Technology</li><li>Cybersecurity</li><li>Artificial Intelligence</li><li>Innovation</li>
      </ul>
    ),
  },
];

function ContactCard({ label, subtitle, reveal, href }: ContactCardData) {
  const [open, setOpen] = useState(false);
  const isRevealed = open;
  const content = (
    <div className={["group relative h-full rounded-xl overflow-hidden bg-card border border-border backdrop-blur-sm transition-all duration-500", "hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]", isRevealed ? "border-primary/40 -translate-y-1 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]" : ""].join(" ")}>
      <div className="absolute top-0 left-0 right-0 h-px bg-primary/50" />
      <div className="relative p-7 md:p-8 h-full flex flex-col min-h-[180px]">
        <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
        <div className="mt-auto pt-6 relative">
          {subtitle && (
            <p className={["text-xl md:text-2xl font-semibold text-foreground tracking-tight transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-3", isRevealed ? "opacity-0 -translate-y-3" : ""].join(" ")}>
              {subtitle}
            </p>
          )}
          <div className={["transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0", isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3", subtitle ? "absolute bottom-0 left-0 right-0" : ""].join(" ")}>
            <div className="text-base md:text-lg font-medium text-foreground leading-relaxed break-words">{reveal}</div>
          </div>
        </div>
      </div>
    </div>
  );

  const handleToggle = (e: React.MouseEvent) => {
    if (!isRevealed && href) { e.preventDefault(); setOpen(true); return; }
    setOpen((v) => !v);
  };

  if (href) {
    return (
      <a href={href} onClick={handleToggle} aria-expanded={isRevealed} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
        {content}
      </a>
    );
  }
  return (
    <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={isRevealed} className="block h-full w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
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
            <Reveal><SectionLabel num="05">Connect With ASC</SectionLabel></Reveal>
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
                    Axiom Secure Crafts collaborates with businesses, institutions, innovators, and
                    forward-thinking organizations to deliver secure technology solutions, digital
                    innovation, and long-term value.
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
            <Reveal delay={250 + CONTACT_CARDS.length * 100} className="sm:col-span-2">
              <a
                href={CLIENT_REQUIREMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between w-full rounded-xl border border-border bg-card px-6 py-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]"
              >
                <span className="flex items-center gap-3">
                  <ClipboardList size={18} className="text-primary" strokeWidth={1.4} />
                  <span className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Have a Project?</span>
                    <span className="mt-1 text-base font-semibold text-foreground">Client Requirement</span>
                  </span>
                </span>
                <ArrowUpRight size={16} className="text-foreground/80 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Course Enrollment & Consultation ---------------- */
function CourseEnrollment() {
  return (
    <section
      id="enroll"
      className="relative py-28 md:py-36 border-t border-border overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 grain" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-surface/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionLabel num="06">Course Enrollment & Consultation</SectionLabel>
        </Reveal>
        <div className="mt-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal delay={100} className="lg:col-span-7">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.02em] leading-[1.05]">
              Learn with ASC.
              <br />
              <span className="text-muted-foreground">Our team will reach out.</span>
            </h2>
            <p className="mt-8 text-muted-foreground max-w-lg leading-relaxed text-base md:text-lg">
              Interested in learning with us? Fill the form and our team will contact you to
              discuss programs, schedules, and the right fit for your goals.
            </p>
          </Reveal>
          <Reveal delay={200} className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-8 md:p-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]">
              <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                Begin Your Journey
              </p>
              <p className="mt-4 text-lg text-foreground leading-relaxed">
                Share a few details and we'll guide you through enrollment and consultation.
              </p>
              <a
                href={ENROLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-medium glow-accent hover:brightness-110 transition"
              >
                Enroll / Consult Now <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
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
            <div className="flex items-center gap-3">
              <BrandLogo className="h-14 w-auto object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-[0.18em] text-foreground">AXIOM</span>
                <span className="text-sm font-semibold tracking-[0.18em] text-muted-foreground">SECURE CRAFTS</span>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
              A technology partner for organizations and innovators building the next generation of secure digital products.
            </p>
          </div>

          <FooterCol title="Practices" items={[
            { label: "Cybersecurity", href: "/cybersecurity" },
            { label: "AI Automation", href: "/ai-automation" },
            { label: "AI Full Stack", href: "/ai-fullstack" },
            { label: "Bootcamp", href: ENROLL_URL, external: true },
            { label: "Client Requirement", href: CLIENT_REQUIREMENT_URL, external: true },
          ]} />
          <FooterCol title="Company" items={[
            { label: "Who We Are", href: "/#whoweare" },
            { label: "Team", href: "/team" },
            { label: "Foundation Program", href: "/cybersecurity/foundation" },
            { label: "Professional Program", href: "/cybersecurity/professional" },
            { label: "Connect With ASC", href: "/#contact" },
          ]} />
          <FooterCol title="Connect" items={[
            { label: "GitHub", href: "https://github.com/ASCrafts", external: true },
            { label: "LinkedIn", href: "https://www.linkedin.com/company/axiomsecurecrafts/", external: true },
            { label: "Instagram", href: "https://www.instagram.com/axiom_secure.crafts/", external: true },
            { label: "axiomsecurecraft.official@gmail.com", href: "mailto:axiomsecurecraft.official@gmail.com" },
            { label: "+91 7418 221 459", href: "tel:+917418221459" },
          ]} />
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
              <a href={it.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-muted-foreground hover:text-foreground transition-colors break-words">
                {it.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
