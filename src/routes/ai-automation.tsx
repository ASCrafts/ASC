import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Cpu, Workflow, Bot, LineChart, Zap, Settings } from "lucide-react";
import { Header } from "@/components/Header";
import { SectionLabel } from "@/components/SectionLabel";
import { ENROLL_URL } from "@/lib/constants";
import aiImg from "@/assets/img-ai-automation.jpg";

export const Route = createFileRoute("/ai-automation")({
  head: () => ({
    meta: [
      { title: "AI Automation — Axiom Secure Crafts" },
      { name: "description", content: "AI-powered automation, intelligent workflows, and autonomous systems engineered for modern operations." },
      { property: "og:title", content: "AI Automation — Axiom Secure Crafts" },
      { property: "og:description", content: "Intelligent workflows and autonomous systems from ASC." },
      { property: "og:image", content: aiImg },
    ],
  }),
  component: AiAutomationPage,
});

const SERVICES = [
  { icon: Workflow, title: "Workflow Automation", desc: "Replace manual handoffs with intelligent, auditable workflows that scale with your operations." },
  { icon: Bot, title: "AI Agents", desc: "Purpose-built agents for research, support, and operational tasks — integrated with your tools." },
  { icon: Settings, title: "Process Optimization", desc: "Map, measure, and redesign processes around AI-augmented decision points." },
  { icon: Zap, title: "Integration Engineering", desc: "Connect SaaS, internal APIs, and data sources into a single coherent automation layer." },
  { icon: LineChart, title: "Analytics & Insights", desc: "Translate operational data into actionable decisions through AI-assisted analysis." },
  { icon: Cpu, title: "Custom AI Solutions", desc: "Tailored AI applications addressing the specific bottlenecks in your organization." },
];

const USE_CASES = [
  { title: "Sales & Lead Operations", desc: "Automated lead enrichment, qualification, and routing across your CRM." },
  { title: "Customer Support", desc: "AI-assisted triage, knowledge retrieval, and ticket resolution." },
  { title: "Document Processing", desc: "Intelligent extraction, classification, and routing of unstructured documents." },
  { title: "Internal Operations", desc: "Onboarding, approvals, and reporting workflows that run themselves." },
  { title: "Marketing & Content", desc: "Brand-aligned content workflows, repurposing pipelines, and campaign analytics." },
  { title: "Data & Reporting", desc: "Automated ETL, anomaly detection, and exec-ready dashboards." },
];

const AUDIENCE = [
  "Operations teams reducing manual overhead",
  "Product teams shipping AI-powered features",
  "Founders looking to scale without scaling headcount",
  "Enterprises modernizing internal workflows",
];

function AiAutomationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="relative pt-32 md:pt-40 pb-20 border-b border-border overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img src={aiImg} alt="" className="h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          </div>
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Link to="/" className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition">
              ← Back to home
            </Link>
            <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] max-w-4xl">
              AI Automation that compounds.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Intelligent systems and autonomous workflows that scale operations, unlock productivity,
              and remove the friction holding teams back.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/" hash="contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition">
                Talk to our team <ArrowRight size={14} />
              </Link>
              <a href={ENROLL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary transition">
                Enroll Now <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionLabel num="01">Overview</SectionLabel>
              <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]">Less manual. More leverage.</h2>
            </div>
            <p className="lg:col-span-7 text-muted-foreground text-base md:text-lg leading-relaxed">
              We design and deploy AI automation that integrates cleanly into how your teams already work
              — replacing brittle scripts and manual handoffs with intelligent workflows that improve over time.
            </p>
          </div>
        </section>

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

        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionLabel num="03">Use Cases</SectionLabel>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {USE_CASES.map((u) => (
                <div key={u.title} className="rounded-2xl border border-border bg-card/60 p-7">
                  <h3 className="text-base font-semibold tracking-tight">{u.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionLabel num="04">Solutions</SectionLabel>
              <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]">Engineered, not assembled.</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Every engagement starts with mapping your real workflows. From there, we engineer
                automation that fits — not a generic template forced onto your process.
              </p>
            </div>
            <ul className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {[
                "Multi-agent orchestration",
                "RAG-powered internal search",
                "Workflow automation platforms",
                "Custom AI APIs",
                "Browser & system automation",
                "AI-enhanced reporting",
              ].map((s) => (
                <li key={s} className="rounded-xl border border-border bg-card p-5 text-sm">
                  <span className="text-primary mr-2">→</span>{s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionLabel num="05">Who It's For</SectionLabel>
            <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {AUDIENCE.map((a) => (
                <li key={a} className="rounded-xl border border-border bg-card p-5 text-sm">{a}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-[-0.02em]">
              Automate the work that holds your team back.
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link to="/" hash="contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition">
                Start a conversation <ArrowRight size={14} />
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
