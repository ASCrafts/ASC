import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Clock, GraduationCap, Layers, Shield, Briefcase, Target } from "lucide-react";
import { Header } from "@/components/Header";
import { SectionLabel } from "@/components/SectionLabel";
import { ENROLL_URL } from "@/lib/constants";
import cyberImg from "@/assets/img-cybersecurity.jpg";

export const Route = createFileRoute("/cybersecurity/professional")({
  head: () => ({
    meta: [
      { title: "Cybersecurity Professional Program — Axiom Secure Crafts" },
      { name: "description", content: "A 30-day advanced cybersecurity program from ASC — SOC operations, threat analysis, web app security, and capstone investigation." },
      { property: "og:title", content: "Cybersecurity Professional Program — ASC" },
      { property: "og:description", content: "30-day advanced cybersecurity skills development from Axiom Secure Crafts." },
      { property: "og:image", content: cyberImg },
    ],
  }),
  component: ProfessionalPage,
});

const MODULES = [
  { title: "Technical Bridge & Security Baseline", days: "Days 1–5", items: ["Networking refresh", "Linux & Windows for security", "Web protocols deep dive", "Lab environment setup"] },
  { title: "Threat Landscape & Attack Methodologies", days: "Days 6–10", items: ["Cyber Kill Chain", "MITRE ATT&CK framework", "IOC-based investigation", "Case studies of real breaches"] },
  { title: "Network Security Engineering", days: "Days 11–15", items: ["Firewalls & IDS/IPS", "Vulnerability scanning with Nmap", "Reconnaissance techniques", "Defensive controls"] },
  { title: "Web Application Security", days: "Days 16–20", items: ["OWASP Top 10", "Burp Suite workflows", "Authentication & session attacks", "Vulnerable app exploitation"] },
  { title: "SOC Operations, Blue Teaming & Monitoring", days: "Days 21–25", items: ["Alert triage & escalation", "SIEM navigation", "Log correlation", "Security Onion labs"] },
  { title: "Cryptography, IAM, Forensics, Cloud & Capstone", days: "Days 26–30", items: ["Cryptographic principles", "RBAC & access modeling", "Forensic timelines with Autopsy", "Cloud security shared responsibility"] },
];

const OUTCOMES = [
  "Analyse network traffic and identify malicious patterns using Wireshark and Nmap",
  "Navigate Linux and Windows for log investigation and system enumeration",
  "Map attacks to the Cyber Kill Chain and MITRE ATT&CK framework",
  "Perform web application security testing using Burp Suite",
  "Conduct SOC-level alert triage, log correlation, and incident documentation",
  "Apply cryptographic principles and build forensic timelines",
  "Design RBAC access control matrices and evaluate cloud responsibilities",
  "Produce structured incident reports and executive investigation summaries",
];

const TOOLS = ["Wireshark", "Nmap", "Burp Suite", "Security Onion", "Autopsy", "MITRE ATT&CK", "OWASP ZAP", "Splunk Concepts"];

const CAREER_READINESS = [
  "Structured 30-day learning path with daily milestones",
  "Hands-on exposure to live SOC, pentest, and DFIR tooling",
  "Weekly assignments simulating real analyst tasks",
  "Portfolio-ready capstone investigation report",
  "Career guidance covering entry-level certifications and resume positioning",
];

const HIGHLIGHTS = [
  "1-hour daily instructor-led sessions",
  "Live demonstrations — not pre-recorded walkthroughs",
  "Free and open-source tooling throughout",
  "Progressive modules — each week builds on the last",
  "Real or anonymized breach case studies",
];

const PERFECT_FOR = [
  "Aspiring SOC Analysts targeting entry-level roles",
  "Students in IT / CS pursuing practical security exposure",
  "Career switchers entering cybersecurity from non-IT backgrounds",
  "Self-taught learners consolidating skills into a structured set",
];

function ProfessionalPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
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
              <span>Professional Program</span><span className="h-px w-6 bg-primary/40" /><span>Intermediate</span>
            </div>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-[-0.02em] max-w-4xl">
              30-Day Advanced Cybersecurity Program
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
              A structured, full-spectrum training initiative taking learners from foundational technical
              knowledge to intermediate-level security operations competency — built to produce
              job-ready SOC analysts in 30 days of deliberate, outcome-driven learning.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm">
                <Clock size={14} className="text-primary" /> 30 Days · 1 hour/day
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm">
                <GraduationCap size={14} className="text-primary" /> Intermediate
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

        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionLabel num="01">Program Overview</SectionLabel>
              <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]">From baseline to SOC-ready.</h2>
            </div>
            <p className="lg:col-span-7 text-muted-foreground text-base md:text-lg leading-relaxed">
              Six progressive modules mirror real SOC analyst workflows — reading packet captures,
              filtering logs, triaging alerts, investigating incidents, and presenting findings under
              professional conditions. No isolated topics; each week builds directly on the previous.
            </p>
          </div>
        </section>

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

        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionLabel num="05">Career Readiness</SectionLabel>
              <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]">Built for the role you want.</h2>
            </div>
            <ul className="lg:col-span-7 space-y-3">
              {CAREER_READINESS.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-5">
                  <Briefcase size={16} className="mt-0.5 text-primary shrink-0" />
                  <span className="text-sm">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-2 gap-10">
            <div>
              <SectionLabel num="06">Program Highlights</SectionLabel>
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
              <SectionLabel num="07">Perfect For</SectionLabel>
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

        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <SectionLabel num="08">Capstone Project</SectionLabel>
            <Target size={28} className="mx-auto mt-8 text-primary" />
            <p className="mt-6 font-display text-2xl md:text-3xl font-medium tracking-[-0.01em] leading-snug">
              A portfolio-ready security investigation — complete with alert triage, log correlation,
              IOC analysis, and an executive-level incident report.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-[-0.02em]">
              Become job-ready in 30 days.
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a href={ENROLL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition">
                Enroll Now <ArrowUpRight size={14} />
              </a>
              <Link to="/cybersecurity/foundation" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary transition">
                See Foundation Program <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
