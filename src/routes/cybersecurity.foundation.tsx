import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Clock, GraduationCap, Layers, Shield, Award, Briefcase } from "lucide-react";
import { Header } from "@/components/Header";
import { SectionLabel } from "@/components/SectionLabel";
import { ENROLL_URL } from "@/lib/constants";
import cyberImg from "@/assets/img-cybersecurity.jpg";

export const Route = createFileRoute("/cybersecurity/foundation")({
  head: () => ({
    meta: [
      { title: "Cybersecurity Foundation Program — Axiom Secure Crafts" },
      { name: "description", content: "A 15-day, industry-oriented skill development initiative covering computing, networking, Linux, and core cybersecurity practices." },
      { property: "og:title", content: "Cybersecurity Foundation Program — ASC" },
      { property: "og:description", content: "15-day cybersecurity foundations program from Axiom Secure Crafts." },
      { property: "og:image", content: cyberImg },
    ],
  }),
  component: FoundationPage,
});

const MODULES = [
  { title: "Digital Systems & Internet Essentials", days: "Days 1–3", items: ["Computer Fundamentals", "Internet Architecture & Communication", "Network Models & Protocols"] },
  { title: "Operating Systems & Linux Operations", days: "Days 4–6", items: ["Operating Systems Fundamentals", "Linux Navigation & File Management", "Linux Administration Essentials"] },
  { title: "Network Infrastructure & Traffic Analysis", days: "Days 7–9", items: ["Networking Fundamentals", "IP Addressing & Subnetting", "Traffic Analysis with Wireshark"] },
  { title: "Web Technologies & Application Fundamentals", days: "Day 10", items: ["Web Technologies", "Authentication & Sessions", "Application Basics"] },
  { title: "Cybersecurity Principles & Security Operations", days: "Days 11–12", items: ["Security Fundamentals", "Security Teams & Operations"] },
  { title: "Defensive Security & Security Tooling", days: "Days 13–14", items: ["Cryptography Fundamentals", "Reconnaissance & Security Monitoring"] },
  { title: "Cybersecurity Challenge Lab & Career Pathways", days: "Day 15", items: ["Capstone Challenge Lab", "Career Roadmap & Certifications"] },
];

const OUTCOMES = [
  "Understand computer and networking fundamentals",
  "Navigate Linux environments confidently",
  "Analyze network traffic using Wireshark",
  "Understand web technologies and authentication mechanisms",
  "Apply core cybersecurity concepts and principles",
  "Use industry-relevant cybersecurity tools",
  "Complete beginner-level Capture The Flag (CTF) challenges",
  "Plan cybersecurity career pathways and next learning steps",
];

const TOOLS = ["Cisco Packet Tracer", "Wireshark", "Linux Terminal", "OverTheWire", "CryptoHack", "PicoCTF", "TryHackMe"];

const HIGHLIGHTS = [
  "Concept-first instruction followed by hands-on practice",
  "Daily 1-hour structured sessions",
  "Industry-standard tooling throughout",
  "Practical assignments every day",
  "Capstone challenge lab at the end",
];

const PERFECT_FOR = [
  "Students & recent graduates exploring IT and cybersecurity",
  "Early-career professionals building foundational skills",
  "Individuals preparing for entry-level security certifications",
  "Anyone seeking structured, practical exposure to security",
];

const CAREER = ["Junior SOC Analyst", "IT Support → Security Track", "Network Operations", "Cybersecurity Apprentice"];

function FoundationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 md:pt-40 pb-20 border-b border-border overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img src={cyberImg} alt="" className="h-full w-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
          </div>
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Link to="/cybersecurity" className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition">
              ← Cybersecurity
            </Link>
            <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-primary">
              <span>Foundation Program</span><span className="h-px w-6 bg-primary/40" /><span>Beginner</span>
            </div>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-[-0.02em] max-w-4xl">
              Cybersecurity Foundations & Practical Skills
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
              A 15-day industry-oriented program that builds a strong, hands-on foundation in computing,
              networking, operating systems, and core cybersecurity concepts — preparing you for further
              specialization in security roles.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm">
                <Clock size={14} className="text-primary" /> 15 Days · 1 hour/day
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm">
                <GraduationCap size={14} className="text-primary" /> Beginner
              </span>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={ENROLL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition">
                Enroll Now <ArrowUpRight size={14} />
              </a>
              <a href="mailto:axiomsecurecraft.official@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary transition">
                Request Brochure
              </a>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionLabel num="01">Program Overview</SectionLabel>
              <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]">A structured path into cybersecurity.</h2>
            </div>
            <p className="lg:col-span-7 text-muted-foreground text-base md:text-lg leading-relaxed">
              The program bridges the gap between theoretical knowledge and industry-relevant practical
              skills. Each day combines concept-first instruction with guided lab work, culminating in a
              capstone challenge lab and a clear roadmap into cybersecurity career pathways.
            </p>
          </div>
        </section>

        {/* Modules */}
        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionLabel num="02">Core Modules</SectionLabel>
            <div className="mt-10 grid md:grid-cols-2 gap-5">
              {MODULES.map((m, i) => (
                <div key={m.title} className="rounded-2xl border border-border bg-card p-7">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary text-sm font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold tracking-tight">{m.title}</h3>
                      <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{m.days}</span>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2">
                    {m.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Layers size={14} className="mt-0.5 text-primary/70 shrink-0" />{it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <SectionLabel num="03">Learning Outcomes</SectionLabel>
              <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]">What you'll achieve.</h2>
            </div>
            <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
              {OUTCOMES.map((o) => (
                <li key={o} className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-5">
                  <Check size={16} className="mt-0.5 text-primary shrink-0" />
                  <span className="text-sm">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tools */}
        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionLabel num="04">Tools Covered</SectionLabel>
            <div className="mt-8 flex flex-wrap gap-3">
              {TOOLS.map((t) => (
                <span key={t} className="rounded-full border border-border bg-card/60 px-5 py-2 text-sm">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights + Perfect For */}
        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-2 gap-10">
            <div>
              <SectionLabel num="05">Program Highlights</SectionLabel>
              <ul className="mt-8 space-y-3">
                {HIGHLIGHTS.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-foreground/90">
                    <Shield size={16} className="mt-1 text-primary shrink-0" />
                    <span className="text-sm leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionLabel num="06">Perfect For</SectionLabel>
              <ul className="mt-8 space-y-3">
                {PERFECT_FOR.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-foreground/90">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Certification + Career */}
        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-2 gap-10">
            <div className="rounded-2xl border border-border bg-card p-8">
              <Award size={22} className="text-primary" />
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">Certification</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Participants who complete the program — including daily practical assignments and the
                final capstone challenge lab — receive an ASC Certificate of Completion recognizing
                their foundational cybersecurity competency.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <Briefcase size={22} className="text-primary" />
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">Career Pathways</h3>
              <ul className="mt-5 space-y-2">
                {CAREER.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-sm text-foreground/85">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-[-0.02em]">
              Ready to build your cybersecurity foundation?
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={ENROLL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition">
                Enroll Now <ArrowUpRight size={14} />
              </a>
              <Link to="/cybersecurity/professional" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary transition">
                See Professional Program <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
