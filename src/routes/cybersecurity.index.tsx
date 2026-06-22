import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ShieldCheck, Activity, Lock, Search, GraduationCap, Server } from "lucide-react";
import { Header } from "@/components/Header";
import { SectionLabel } from "@/components/SectionLabel";
import { EnterpriseCard } from "@/components/EnterpriseCard";
import { ENROLL_URL } from "@/lib/constants";
import cyberImg from "@/assets/img-cybersecurity.jpg";
import bootcampImg from "@/assets/img-bootcamp.jpg";

export const Route = createFileRoute("/cybersecurity/")({
  head: () => ({
    meta: [
      { title: "Cybersecurity — Axiom Secure Crafts" },
      {
        name: "description",
        content:
          "End-to-end cybersecurity services, assessments, and training from Axiom Secure Crafts — defending modern organizations against evolving threats.",
      },
      { property: "og:title", content: "Cybersecurity — Axiom Secure Crafts" },
      {
        property: "og:description",
        content: "Security services, assessments, and training programs from ASC.",
      },
      { property: "og:image", content: cyberImg },
    ],
  }),
  component: CybersecurityPage,
});

const SERVICES = [
  { icon: ShieldCheck, title: "Security Consulting", desc: "Strategic guidance to align security posture with business risk and growth." },
  { icon: Search, title: "Vulnerability Assessment", desc: "Identify, prioritize, and remediate weaknesses across infrastructure and applications." },
  { icon: Activity, title: "SOC Operations Support", desc: "Detection, triage, and response workflows engineered for real-world threats." },
  { icon: Lock, title: "Application Security", desc: "Web, API, and product security across the development lifecycle." },
  { icon: Server, title: "Infrastructure Hardening", desc: "Cloud, network, and endpoint hardening built into delivery — not bolted on." },
  { icon: GraduationCap, title: "Security Training", desc: "Structured programs that translate directly into capability and career outcomes." },
];

const CAPABILITIES = [
  "Threat Modeling & Risk Assessment",
  "Penetration Testing Methodologies",
  "Network Traffic & Log Analysis",
  "Incident Detection & Response",
  "Identity & Access Management",
  "Cloud Security Fundamentals",
  "OWASP Top 10 & Web App Security",
  "Security Awareness Programs",
];

function CybersecurityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden border-b border-border">
          <div className="absolute inset-0 -z-10">
            <img src={cyberImg} alt="" loading="eager" className="h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          </div>
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Link to="/" className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition">
              ← Back to home
            </Link>
            <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] max-w-4xl">
              Cybersecurity, engineered into every layer.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              ASC delivers cybersecurity expertise across consulting, assessments, defensive operations,
              and structured training — built for modern organizations operating in an adversarial digital world.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/" hash="contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition">
                Talk to security team <ArrowRight size={14} />
              </Link>
              <a href={ENROLL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary transition">
                Enroll Now <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionLabel num="01">Overview</SectionLabel>
              <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]">
                Defense as a practice, not a product.
              </h2>
            </div>
            <p className="lg:col-span-7 text-muted-foreground text-base md:text-lg leading-relaxed">
              Security is most effective when it's continuous, contextual, and integrated. We help
              organizations move from reactive controls to a coherent security posture — strengthening
              applications, networks, identity, and the people who operate them.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionLabel num="02">Services</SectionLabel>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map((s) => (
                <div key={s.title} className="rounded-2xl border border-border bg-card p-7 hover:border-primary/40 transition">
                  <s.icon size={22} className="text-primary" strokeWidth={1.6} />
                  <h3 className="mt-6 text-lg font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <SectionLabel num="03">Capabilities</SectionLabel>
              <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]">
                The depth behind the delivery.
              </h2>
            </div>
            <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
              {CAPABILITIES.map((c) => (
                <li key={c} className="flex items-center gap-3 rounded-xl border border-border bg-card/50 px-5 py-4 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Training / Programs */}
        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionLabel num="04">Training & Programs</SectionLabel>
            <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em] max-w-3xl">
              From foundations to professional readiness.
            </h2>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <EnterpriseCard
                image={cyberImg}
                eyebrow="15 Days · Beginner"
                title="Cybersecurity Foundation Program"
                description="A structured introduction to networking, operating systems, and security principles — building the base for a cybersecurity career."
                to="/cybersecurity/foundation"
                cta="Explore foundation"
              />
              <EnterpriseCard
                image={cyberImg}
                eyebrow="30 Days · Intermediate"
                title="Cybersecurity Professional Program"
                description="Hands-on skills used by SOC analysts and ethical hackers — alert triage, log correlation, web app testing, and capstone investigation."
                to="/cybersecurity/professional"
                cta="Explore professional"
              />
              <EnterpriseCard
                image={bootcampImg}
                eyebrow="7 Days · Intensive"
                title="7-Day Bootcamp"
                description="Practical exposure to modern security tooling, workflows, and real-world problem solving — compressed into a focused intensive."
                href={ENROLL_URL}
                external
                cta="Enroll now"
              />
            </div>
          </div>
        </section>

        {/* Assessments */}
        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionLabel num="05">Assessments</SectionLabel>
              <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]">
                Know your posture. Then improve it.
              </h2>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                { title: "Security Posture Review", desc: "A structured baseline assessment across controls, architecture, and process." },
                { title: "Vulnerability Assessment", desc: "Identify and prioritize weaknesses across systems and applications." },
                { title: "Web Application Testing", desc: "OWASP-aligned testing for web platforms and APIs." },
                { title: "Configuration Review", desc: "Cloud, network, and endpoint configuration assessment against best practice." },
              ].map((a) => (
                <div key={a.title} className="rounded-xl border border-border bg-card p-6">
                  <h3 className="text-base font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-[-0.02em]">
              Ready to strengthen your security posture?
            </h2>
            <p className="mt-6 text-muted-foreground text-base md:text-lg">
              Talk to our team about assessments, training cohorts, or a tailored engagement.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link to="/" hash="contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition">
                Contact ASC <ArrowRight size={14} />
              </Link>
              <a href={ENROLL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary transition">
                Enroll Now <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
