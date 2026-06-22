export type ProgramSlug = "workshops" | "foundation-program" | "professional-program" | "bootcamp";
export type DomainSlug = "cybersecurity" | "ai-automation" | "ai-fullstack";

export type Module = { title: string; items: string[] };

export type Program = {
  name: string;
  level: string;
  duration: string;
  overview: string;
  outcomes: string[];
  modules?: Module[];
  topics?: string[];
  audience?: string[];
  benefits?: string[];
  capstone?: string;
};

export type Domain = {
  slug: DomainSlug;
  name: string;
  tagline: string;
  accent: string;
  programs: Record<ProgramSlug, Program>;
};

const BOOTCAMP_DESC =
  "An intensive 7-day learning experience designed to provide practical exposure to modern technologies, industry tools, and real-world problem solving.";

export const DOMAINS: Record<DomainSlug, Domain> = {
  cybersecurity: {
    slug: "cybersecurity",
    name: "Cybersecurity",
    tagline: "Defensive and offensive security expertise, engineered for the modern threat landscape.",
    accent: "from-cyan-500/20 to-blue-600/10",
    programs: {
      "workshops": {
        name: "Community Workshops",
        level: "Open Access",
        duration: "Monthly",
        overview:
          "Stay informed about the latest cybersecurity trends, threats, and defensive practices through our free monthly workshops.",
        outcomes: [
          "Current cyber threats and attack trends",
          "Personal and organizational security practices",
          "Cybersecurity career opportunities",
          "Ethical hacking fundamentals",
          "Security awareness for businesses",
          "Interactive Q&A sessions",
        ],
        audience: ["Students", "IT Professionals", "Business Owners", "Security Enthusiasts", "Career Switchers"],
        benefits: ["Industry insights", "Expert guidance", "Networking opportunities", "Learning resources", "Community access"],
      },
      "foundation-program": {
        name: "Cybersecurity Foundation Program",
        level: "Beginner",
        duration: "15 Days",
        overview:
          "A structured introduction to cybersecurity concepts, networking fundamentals, operating systems, and security principles — building a strong base for your cybersecurity journey.",
        outcomes: [
          "Understand cybersecurity fundamentals",
          "Learn networking basics",
          "Explore Linux and Windows security",
          "Identify common cyber threats",
          "Understand risk management concepts",
          "Build a cybersecurity learning roadmap",
        ],
        modules: [
          { title: "Cybersecurity Fundamentals", items: ["Introduction to Cybersecurity", "Security Domains", "Threat Landscape"] },
          { title: "Networking Essentials", items: ["TCP/IP", "DNS", "HTTP/HTTPS", "Network Architecture"] },
          { title: "Operating Systems Security", items: ["Linux Basics", "Windows Fundamentals", "User Management"] },
          { title: "Security Fundamentals", items: ["Authentication", "Encryption", "Access Control"] },
          { title: "Career Development", items: ["Cybersecurity Roles", "Industry Certifications", "Portfolio Guidance"] },
        ],
      },
      "professional-program": {
        name: "Cybersecurity Professional Program",
        level: "Intermediate",
        duration: "30 Days",
        overview:
          "A practical, career-focused program designed to help learners develop hands-on cybersecurity skills used by security analysts, SOC teams, and ethical hackers.",
        outcomes: [
          "Conduct security assessments",
          "Analyze network traffic",
          "Perform vulnerability scanning",
          "Understand incident response",
          "Use industry security tools",
          "Participate in Capture The Flag challenges",
        ],
        modules: [
          { title: "Security Operations Center (SOC)", items: ["Monitoring & Detection", "SIEM Fundamentals"] },
          { title: "Vulnerability Assessment", items: ["Scanning Methodologies", "Risk Analysis"] },
          { title: "Ethical Hacking", items: ["Reconnaissance", "Enumeration", "Exploitation Concepts"] },
          { title: "Incident Response", items: ["Detection", "Containment", "Recovery"] },
          { title: "Practical Labs", items: ["Security Simulations", "CTF Challenges"] },
        ],
      },
      "bootcamp": {
        name: "7-Day Bootcamp",
        level: "Intensive",
        duration: "7 Days",
        overview: BOOTCAMP_DESC,
        outcomes: [
          "Hands-on exposure to industry tools",
          "Practical project experience",
          "Real-world problem solving",
          "Career direction & next steps",
        ],
      },
    },
  },
  "ai-automation": {
    slug: "ai-automation",
    name: "AI Automation",
    tagline: "Intelligent systems and autonomous workflows that scale operations and unlock productivity.",
    accent: "from-violet-500/20 to-fuchsia-500/10",
    programs: {
      "workshops": {
        name: "Community Workshops",
        level: "Open Access",
        duration: "Monthly",
        overview:
          "Explore how businesses and professionals are using AI to automate workflows, improve productivity, and reduce operational overhead.",
        outcomes: [],
        topics: ["AI Agents", "Workflow Automation", "Business Process Optimization", "No-Code & Low-Code Automation", "Future of AI"],
      },
      "foundation-program": {
        name: "AI Automation Foundation Program",
        level: "Beginner",
        duration: "15 Days",
        overview:
          "Learn the fundamentals of AI-powered automation and understand how modern businesses use intelligent systems to streamline operations.",
        outcomes: [
          "Understand AI automation concepts",
          "Build basic automated workflows",
          "Use AI tools effectively",
          "Create productivity systems",
        ],
        modules: [
          { title: "Core Modules", items: [
            "Introduction to AI",
            "Automation Concepts",
            "Prompt Engineering Basics",
            "AI Productivity Tools",
            "Workflow Design Fundamentals",
            "Introduction to AI Agents",
          ] },
        ],
      },
      "professional-program": {
        name: "AI Automation Professional Program",
        level: "Intermediate",
        duration: "30 Days",
        overview:
          "Develop practical automation solutions using modern AI tools, integrations, and workflow orchestration platforms.",
        outcomes: [
          "Design scalable workflows",
          "Integrate multiple systems",
          "Build AI-powered business solutions",
          "Deploy automation projects",
        ],
        modules: [
          { title: "Core Modules", items: [
            "AI Workflow Design",
            "API Integration",
            "Automation Platforms",
            "AI Agent Development",
            "Business Automation Solutions",
            "Project Development",
          ] },
        ],
      },
      "bootcamp": {
        name: "7-Day Bootcamp",
        level: "Intensive",
        duration: "7 Days",
        overview: BOOTCAMP_DESC,
        outcomes: [
          "Hands-on with leading AI automation tools",
          "Build a working automation project",
          "Real-world workflow design",
          "Career direction & next steps",
        ],
      },
    },
  },
  "ai-fullstack": {
    slug: "ai-fullstack",
    name: "AI Full Stack",
    tagline: "Modern, AI-powered product engineering across frontend, backend, and cloud infrastructure.",
    accent: "from-emerald-500/20 to-teal-500/10",
    programs: {
      "workshops": {
        name: "Community Workshops",
        level: "Open Access",
        duration: "Monthly",
        overview:
          "Discover how modern applications combine AI, frontend technologies, backend systems, and cloud infrastructure to create intelligent digital products.",
        outcomes: [],
        topics: ["AI Application Development", "Full Stack Engineering", "Modern Development Tools", "Product Building", "Startup Technology Trends"],
      },
      "foundation-program": {
        name: "AI Full Stack Foundation Program",
        level: "Beginner",
        duration: "15 Days",
        overview:
          "Build a strong foundation in web development, programming fundamentals, databases, and AI integration concepts.",
        outcomes: [
          "Build basic web applications",
          "Understand frontend and backend architecture",
          "Work with databases",
          "Integrate AI services",
        ],
        modules: [
          { title: "Core Modules", items: [
            "HTML, CSS & JavaScript",
            "Programming Fundamentals",
            "Git & GitHub",
            "Databases",
            "Introduction to APIs",
            "AI Integration Basics",
          ] },
        ],
      },
      "professional-program": {
        name: "AI Full Stack Professional Program",
        level: "Intermediate",
        duration: "30 Days",
        overview:
          "Learn to develop full-stack applications enhanced with AI capabilities using modern frameworks and cloud technologies.",
        outcomes: [
          "Build production-ready applications",
          "Integrate AI services",
          "Deploy scalable systems",
          "Develop professional portfolios",
        ],
        modules: [
          { title: "Core Modules", items: [
            "React Development",
            "Backend APIs",
            "Database Design",
            "Authentication Systems",
            "AI API Integration",
            "Deployment Strategies",
          ] },
        ],
      },
      "bootcamp": {
        name: "7-Day Bootcamp",
        level: "Intensive",
        duration: "7 Days",
        overview: BOOTCAMP_DESC,
        outcomes: [
          "Ship a working full-stack project",
          "Modern frameworks and tools",
          "AI feature integration",
          "Career direction & next steps",
        ],
      },
    },
  },
};

export const PROGRAM_ORDER: ProgramSlug[] = [
  "workshops",
  "foundation-program",
  "professional-program",
  "bootcamp",
];

export const DOMAIN_ORDER: DomainSlug[] = ["cybersecurity", "ai-automation", "ai-fullstack"];
