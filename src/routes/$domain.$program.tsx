import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Clock, Layers, GraduationCap } from "lucide-react";
import { Header } from "@/components/Header";
import { SectionLabel } from "@/components/SectionLabel";
import {
  DOMAINS,
  PROGRAM_ORDER,
  type DomainSlug,
  type ProgramSlug,
} from "@/lib/programs";

export const Route = createFileRoute("/$domain/$program")({
  beforeLoad: ({ params }) => {
    const d = DOMAINS[params.domain as DomainSlug];
    if (!d) throw notFound();
    if (!d.programs[params.program as ProgramSlug]) throw notFound();
  },
  head: ({ params }) => {
    const d = DOMAINS[params.domain as DomainSlug];
    const p = d?.programs[params.program as ProgramSlug];
    const title = p ? `${p.name} — Axiom Secure Crafts` : "Program — Axiom Secure Crafts";
    const description = p?.overview ?? "ASC professional learning programs.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProgramPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="font-display text-4xl">Program not found</h1>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-primary">
          <ArrowLeft size={16} /> Back to home
        </Link>
      </main>
    </div>
  ),
  errorComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="font-display text-4xl">Something went wrong</h1>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-primary">
          <ArrowLeft size={16} /> Back to home
        </Link>
      </main>
    </div>
  ),
});

function ProgramPage() {
  const { domain, program } = Route.useParams();
  const d = DOMAINS[domain as DomainSlug];
  const p = d.programs[program as ProgramSlug];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Hero */}
        <section className={`relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-border overflow-hidden`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${d.accent} opacity-60`} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent,hsl(var(--background)))]" />
          <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
            <Link
              to="/"
              hash="learning"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
            >
              <ArrowLeft size={14} /> All Programs
            </Link>
            <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-primary">
              <span>{d.name}</span>
              <span className="h-px w-8 bg-primary/40" />
              <span>{p.level}</span>
            </div>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-semibold tracking-[-0.02em] max-w-4xl">
              {p.name}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">{p.overview}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm">
                <Clock size={14} className="text-primary" /> {p.duration}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm">
                <GraduationCap size={14} className="text-primary" /> {p.level}
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
              >
                Enroll Now <ArrowRight size={14} />
              </a>
              <a
                href="mailto:axiomsecurecraft.official@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium hover:bg-card transition"
              >
                Request Brochure
              </a>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        {p.outcomes.length > 0 && (
          <section className="py-20 md:py-28 border-b border-border">
            <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <SectionLabel num="01">Learning Outcomes</SectionLabel>
                <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]">
                  What you'll achieve.
                </h2>
              </div>
              <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
                {p.outcomes.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card/40 p-5"
                  >
                    <Check size={18} className="mt-0.5 text-primary shrink-0" />
                    <span className="text-sm text-foreground/85">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Topics (workshops) */}
        {p.topics && (
          <section className="py-20 md:py-28 border-b border-border">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
              <SectionLabel num="02">Topics Covered</SectionLabel>
              <div className="mt-8 flex flex-wrap gap-3">
                {p.topics.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-card/60 px-5 py-2 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Audience + Benefits (workshops) */}
        {(p.audience || p.benefits) && (
          <section className="py-20 md:py-28 border-b border-border">
            <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-2 gap-10">
              {p.audience && (
                <div>
                  <SectionLabel num="03">Who Should Attend</SectionLabel>
                  <ul className="mt-6 space-y-3">
                    {p.audience.map((a) => (
                      <li key={a} className="flex items-center gap-3 text-foreground/85">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {p.benefits && (
                <div>
                  <SectionLabel num="04">Workshop Benefits</SectionLabel>
                  <ul className="mt-6 space-y-3">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-foreground/85">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Modules */}
        {p.modules && p.modules.length > 0 && (
          <section className="py-20 md:py-28 border-b border-border">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
              <SectionLabel num="05">Curriculum</SectionLabel>
              <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]">
                Modules.
              </h2>
              <div className="mt-10 grid md:grid-cols-2 gap-5">
                {p.modules.map((m, i) => (
                  <div
                    key={m.title}
                    className="rounded-2xl border border-border bg-card/40 p-7"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary text-sm font-semibold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-semibold tracking-tight">{m.title}</h3>
                    </div>
                    <ul className="mt-5 space-y-2">
                      {m.items.map((it) => (
                        <li
                          key={it}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <Layers size={14} className="mt-0.5 text-primary/70 shrink-0" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Capstone */}
        {p.capstone && (
          <section className="py-20 md:py-28 border-b border-border">
            <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
              <SectionLabel num="06">Capstone Project</SectionLabel>
              <p className="mt-6 font-display text-2xl md:text-3xl font-medium tracking-[-0.01em] leading-snug">
                {p.capstone}
              </p>
            </div>
          </section>
        )}

        {/* Other programs in this domain */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionLabel num="07">Continue Exploring</SectionLabel>
            <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em]">
              More in {d.name}.
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PROGRAM_ORDER.filter((s) => s !== program).map((slug) => {
                const other = d.programs[slug];
                return (
                  <Link
                    key={slug}
                    to="/$domain/$program"
                    params={{ domain: d.slug, program: slug }}
                    className="group rounded-2xl border border-border bg-card/40 p-6 hover:bg-card hover:border-primary/40 transition"
                  >
                    <span className="text-[10px] uppercase tracking-[0.25em] text-primary">
                      {other.level}
                    </span>
                    <h3 className="mt-4 text-base font-semibold tracking-tight">{other.name}</h3>
                    <p className="mt-2 text-xs text-muted-foreground">{other.duration}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm text-foreground/80 group-hover:text-primary transition">
                      View program <ArrowRight size={14} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
