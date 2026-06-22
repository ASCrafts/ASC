import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Code2, Database, Cloud, Cpu, Layers, Boxes } from "lucide-react";
import { Header } from "@/components/Header";
import { SectionLabel } from "@/components/SectionLabel";
import { ENROLL_URL } from "@/lib/constants";
import fsImg from "@/assets/img-ai-fullstack.jpg";

export const Route = createFileRoute("/ai-fullstack")({
  head: () => ({
    meta: [
      { title: "AI Full Stack — Axiom Secure Crafts" },
      { name: "description", content: "AI-powered product engineering across frontend, backend, and cloud infrastructure — built by ASC." },
      { property: "og:title", content: "AI Full Stack — Axiom Secure Crafts" },
      { property: "og:description", content: "Modern AI-powered full-stack engineering from ASC." },
      { property: "og:image", content: fsImg },
    ],
  }),
  component: AiFullstackPage,
});

const CAPABILITIES = [
  { icon: Code2, title: "Modern Frontend", desc: "React, TypeScript, edge-rendered applications with premium UX." },
  { icon: Layers, title: "Backend Engineering", desc: "Type-safe APIs, server functions, and scalable data layers." },
  { icon: Database, title: "Data & Storage", desc: "Relational, vector, and object storage architected for AI workloads." },
  { icon: Cpu, title: "AI Integration", desc: "LLMs, embeddings, agents, and RAG pipelines woven into product surfaces." },
  { icon: Cloud, title: "Cloud Infrastructure", desc: "Edge runtimes, serverless, and CI/CD designed for safe, fast delivery." },
  { icon: Boxes, title: "Productization", desc: "From prototype to durable product — with the architecture to scale." },
];

const TECH = ["React", "TypeScript", "TanStack Start", "Node.js", "Python", "PostgreSQL", "Vector DBs", "Cloudflare", "Edge Runtimes", "LLM APIs", "OpenAI / Anthropic", "RAG"];

const SOLUTIONS = [
  { title: "AI Web Applications", desc: "Production-grade web apps with AI features integrated end-to-end." },
  { title: "SaaS Platforms", desc: "Multi-tenant platforms engineered for scale, security, and AI-native UX." },
  { title: "Internal Tools", desc: "Custom dashboards, admin tools, and operational workflows for teams." },
  { title: "API & Integration Services", desc: "Headless services that bring AI capabilities to existing products." },
];

const AUDIENCE = [
  "Startups shipping AI-native products",
  "Enterprises modernizing customer experiences",
  "Founders validating an AI product idea",
  "Teams scaling beyond no-code limits",
];

function AiFullstackPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <section className="relative pt-32 md:pt-40 pb-20 border-b border-border overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img src={fsImg} alt="" className="h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          </div>
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Link to="/" className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition">
              ← Back to home
            </Link>
            <h1 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] max-w-4xl">
              AI Full Stack engineering for serious products.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Modern, AI-powered product engineering — frontend, backend, and cloud infrastructure
              engineered as one coherent system.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/" hash="contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition">
                Start a project <ArrowRight size={14} />
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
              <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]">Engineered end-to-end.</h2>
            </div>
            <p className="lg:col-span-7 text-muted-foreground text-base md:text-lg leading-relaxed">
              We build AI-powered applications the way good products are made — type-safe,
              well-architected, observable, and shipped continuously. Not a stack of disconnected
              services held together by hope.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionLabel num="02">Capabilities</SectionLabel>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CAPABILITIES.map((c) => (
                <div key={c.title} className="rounded-2xl border border-border bg-card p-7 hover:border-primary/40 transition">
                  <c.icon size={22} className="text-primary" strokeWidth={1.6} />
                  <h3 className="mt-6 text-lg font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionLabel num="03">Technologies</SectionLabel>
            <div className="mt-8 flex flex-wrap gap-3">
              {TECH.map((t) => (
                <span key={t} className="rounded-full border border-border bg-card/60 px-5 py-2 text-sm">{t}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 border-b border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionLabel num="04">Solutions</SectionLabel>
            <div className="mt-10 grid md:grid-cols-2 gap-5">
              {SOLUTIONS.map((s) => (
                <div key={s.title} className="rounded-2xl border border-border bg-card p-7">
                  <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
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
              Ship your AI product with engineering you can trust.
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link to="/" hash="contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:brightness-110 transition">
                Talk to ASC <ArrowRight size={14} />
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
