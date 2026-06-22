import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin, Github, Globe, Mail, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";

type Member = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  email?: string;
};

const LEADERSHIP: Member[] = [
  {
    name: "Ahamadhu Aaqil I",
    role: "Founder & Chairman",
    bio: "Providing strategic direction and long-term vision for Axiom Secure Crafts while driving organizational growth and innovation.",
    initials: "AA",
    github: "https://github.com/honey-aaqil",
  },
  {
    name: "Rishi Rubhak R",
    role: "Founder & CEO",
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
    portfolio: "https://hari-vishnu.netlify.app/",
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

const TEAM_MEMBERS: Member[] = [
  {
    name: "Vidya Shri S",
    role: "Technical Lead",
    bio: "Leads technical architecture, engineering strategy, solution planning, and technical excellence across ASC initiatives.",
    initials: "VS",
    linkedin: "https://linkedin.com/in/vidya-shri-s-5a74a731b",
  },
  {
    name: "AnishFathima A",
    role: "Technical Coordinator",
    bio: "Coordinates projects, streamlines execution, and ensures smooth collaboration across teams and initiatives.",
    initials: "AF",
    linkedin: "https://linkedin.com/in/anishfathima12",
  },
  {
    name: "Mohammad Anas S",
    role: "Technical Associate & Editor",
    bio: "Supports technical operations, documentation, digital assets, and content refinement across ASC projects.",
    initials: "MA",
    linkedin: "https://linkedin.com/in/mohammed-anas-886209416",
  },
];

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "The Team Behind ASC — Axiom Secure Crafts" },
      {
        name: "description",
        content:
          "The people driving innovation, engineering excellence, and secure digital experiences at Axiom Secure Crafts.",
      },
      { property: "og:title", content: "The Team Behind ASC" },
      {
        property: "og:description",
        content: "Meet the leadership and team driving Axiom Secure Crafts.",
      },
    ],
  }),
  component: TeamPage,
});

function ProfileCard({ m, i }: { m: Member; i: number }) {
  return (
    <article className="group rounded-2xl border border-border bg-card p-6 md:p-7 h-full flex flex-col transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
      <div className="flex items-center justify-between">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-sm font-semibold tracking-wide text-foreground">
          {m.initials}
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-6 text-lg font-semibold tracking-tight">{m.name}</h3>
      <p className="mt-1.5 text-[11px] uppercase tracking-[0.22em] text-primary">{m.role}</p>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>

      <div className="mt-auto pt-6 flex flex-wrap items-center gap-2">
        {m.portfolio && (
          <a
            href={m.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] px-3 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
          >
            <Globe size={12} /> Portfolio
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
    </article>
  );
}

function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 md:pt-40 pb-24">
        <section className="mx-auto max-w-7xl px-5 sm:px-8">
          <Link to="/" className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition">
            ← Back to home
          </Link>
          <h1 className="mt-6 font-display text-4xl md:text-6xl font-semibold tracking-[-0.02em]">
            The Team Behind ASC
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            The people driving innovation, engineering excellence, and secure digital experiences
            at Axiom Secure Crafts.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-5 sm:px-8 mt-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Leadership</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LEADERSHIP.map((m, i) => (
              <ProfileCard key={m.name} m={m} i={i} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 sm:px-8 mt-20">
          <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Team</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM_MEMBERS.map((m, i) => (
              <ProfileCard key={m.name} m={m} i={i} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 sm:px-8 mt-24">
          <div className="rounded-2xl border border-border bg-card p-10 md:p-14 text-center">
            <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
              Want to work with us?
            </h3>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              We collaborate with organizations, institutions, and innovators shaping the next
              generation of secure digital products.
            </p>
            <Link
              to="/"
              hash="contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:brightness-110 transition"
            >
              Get in touch <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
