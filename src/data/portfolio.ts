import { Project, Experience, Education, Certification, CoCurricular, TechSkill, ArchitectureLayer } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Riya Raj",
  brand: "RDEX",
  brandFullName: "Riya's Development Experience",
  titles: [
    "Full-Stack Developer",
    ".NET Developer",
    "React Developer"
  ],
  primaryHeadline: "Full-Stack Developer | .NET Developer | React Developer",
  summary: "Engineering scalable web software across the complete lifecycle — from reactive React & TypeScript frontends to high-throughput ASP.NET Core REST APIs and optimized SQL Server databases. Proven corporate impact at Enerva Marine as Developer Intern of the Month.",
  email: "riyarajdk@gmail.com",
  phone: "+91 9473449815",
  location: "Noida, India",
  github: "https://github.com/riyarj-11",
  linkedin: "https://linkedin.com/in/riyarj11",
  leetcode: "https://leetcode.com/u/riyarj-11/",
  deployedUrlPlaceholder: "YOUR_DEPLOYED_PROJECT_URL",
  availability: "Available for Full-Time Full-Stack & .NET Roles",
  coreIdentity: "Frontend → API → Backend → Database"
};

export const TECH_SKILLS: TechSkill[] = [
  // Frontend
  { name: "React", category: "Frontend", level: "Advanced", highlight: "Component Architecture, Hooks, Context, Virtual DOM" },
  { name: "TypeScript", category: "Frontend", level: "Advanced", highlight: "Type-safe interfaces, generics, async data pipelines" },
  { name: "JavaScript (ES6+)", category: "Frontend", level: "Advanced", highlight: "Modern syntax, event loop, closures, promises" },
  { name: "HTML5 & CSS3", category: "Frontend", level: "Advanced", highlight: "Semantic layout, responsive grid, flexbox, WCAG 2.1 AA" },
  { name: "Tailwind CSS", category: "Frontend", level: "Proficient", highlight: "Utility-first design systems, responsive micro-interactions" },
  
  // Backend & APIs
  { name: ".NET / .NET Core", category: "Backend & APIs", level: "Advanced", highlight: "Enterprise backend systems, dependency injection, middleware" },
  { name: "ASP.NET Core", category: "Backend & APIs", level: "Advanced", highlight: "High-throughput RESTful Web APIs, JWT auth, routing" },
  { name: "C#", category: "Backend & APIs", level: "Advanced", highlight: "LINQ, asynchronous tasks, OOP principles, solid design" },
  { name: "REST APIs", category: "Backend & APIs", level: "Advanced", highlight: "Contract design, error handling middleware, JSON serialization" },

  // Database
  { name: "SQL Server (T-SQL)", category: "Database", level: "Advanced", highlight: "Stored procedures, indexing, schema design, transactions" },
  { name: "Relational Modeling", category: "Database", level: "Advanced", highlight: "Normalization (3NF), foreign keys, integrity constraints" },
  { name: "Supabase", category: "Database", level: "Proficient", highlight: "Cloud PostgreSQL, real-time subscriptions, Row-Level Security" },

  // DevOps & Tools
  { name: "Git & GitHub", category: "DevOps & Tools", level: "Advanced", highlight: "Branching strategies, PR reviews, merge workflows" },
  { name: "Azure DevOps", category: "DevOps & Tools", level: "Proficient", highlight: "Boards, backlog sprint tracking, CI/CD pipeline integration" },
  { name: "Visual Studio", category: "DevOps & Tools", level: "Advanced", highlight: "Enterprise .NET profiling, debugging, package management" },
  { name: "VS Code", category: "DevOps & Tools", level: "Advanced", highlight: "Full-stack development, extensions, linting, CLI tools" },
  { name: "Postman", category: "DevOps & Tools", level: "Advanced", highlight: "API testing, collections, environment variables, automation" }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "enerva-marine",
    company: "Enerva Marine",
    role: ".NET Developer Intern",
    location: "Noida, India",
    period: "July 2026 – September 2026",
    badge: "Awarded Developer Intern of the Month (Aug 2026)",
    isCurrent: false,
    summary: "Built high-throughput backend services and real-time vessel monitoring modules, optimizing database query latency and ensuring reliable telemetry ingestion for commercial fleet operations.",
    responsibilities: [
      "Data Quality (DQ) Status tab : Developed and implemented one of the key features for the company, to enable analysts to efficiently review vessel report data, identify data quality issues, and track report status. Worked on both frontend and backend development using React, .NET, and C, with SQL Server for database operations and integration. Utilized Azure DevOps, Visual Studio, and Visual Studio Code for development, debugging, and project management.",
      "Sister Vessel module : Developed and enhanced a key company feature that processes vessel data received through reports and supports the identification of suitable existing vessels with similar parameters. The module enables comparison of new vessels against existing vessels based on key parameters, helping generate relevant service insights and assumptions for future vessel performance. Worked across the React frontend and .NET/C backend, with SQL Server for data management and integration, using Azure DevOps, Visual Studio, and Visual Studio Code for development and debugging.",
      "Power BI module : Worked on the Power BI module to support vessel performance and fuel monitoring by developing alerts for minimum Remaining On Board (ROB) levels and Main Engine fuel consumption. Contributed to data analysis, alert logic, and monitoring workflows to help identify potential fuel and inventory-related issues and improve operational visibility."
    ],
    technologies: ["React", ".NET", "C", "SQL Server", "Power BI", "Azure DevOps", "Visual Studio", "VS Code"]
  },
  {
    id: "ibm-intern",
    company: "International Business Machine (IBM)",
    role: "Generative AI–Intern",
    location: "Virtual",
    period: "September 2025 – November 2025",
    summary: "Engineered Generative AI solutions using LLMs, prompt engineering, and RAG techniques, transforming real-world requirements into intelligent and context-aware applications.",
    responsibilities: [
      "Engineered Generative AI solutions using LLMs, prompt engineering, and RAG techniques, transforming real-world requirements into intelligent and context-aware applications.",
      "Designed, tested, and optimized AI workflows and prompts to improve response accuracy, relevance, and consistency across diverse use cases.",
      "Applied NLP, responsible AI practices, and model evaluation techniques to develop scalable AI-driven solutions and enhance the overall quality of generated outputs."
    ],
    technologies: ["Generative AI", "LLMs", "RAG", "Prompt Engineering", "NLP", "Python"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "lexicare",
    title: "LexiCare",
    subtitle: "AI-Powered Dyslexia Learning & Assistive Support Platform",
    date: "October 2026",
    category: "Full-Stack",
    featured: true,
    description: "An inclusive educational assistive web platform engineered to empower individuals with dyslexia through personalized sensory typography, speech synthesis, and real-time comprehension analytics.",
    techStack: ["React", "TypeScript", "ASP.NET Core", "C#", "SQL Server", "Tailwind CSS", "REST APIs"],
    metrics: [
      "Sub-150ms API response time on learner progress logging",
      "Full WCAG 2.1 AA accessibility compliance with OpenDyslexic dynamic font engine",
      "Speech-to-Text & Text-to-Speech bi-directional assistive loop"
    ],
    architecture: {
      frontend: "React 18 + TypeScript SPA with custom typography adjustment engines and interactive voice controls.",
      backend: "ASP.NET Core Web API implementing clean architecture, validation filters, and secure session state.",
      database: "SQL Server relational database capturing student profiles, auditory benchmarks, and time-series progress.",
      highlight: "End-to-end integration: User speaks/reads → React audio capture → ASP.NET Core API → SQL Server analysis."
    },
    features: [
      "Customizable Reading Interface: Real-time toggles for OpenDyslexic font, syllable spacing, contrast filters, and bionic reading.",
      "Voice & Speech Assistive Engine: Integrated browser speech synthesis and recognition for pronunciation feedback.",
      "Gamified Learning Modules: Interactive spelling, phoneme matching, and visual memory reinforcement exercises.",
      "Educator & Clinician Dashboard: Analytical dashboards showing reading speed, error rates, and milestone completion.",
      "Robust REST API: Documented endpoints for progress sync, student assessment logs, and user profile management."
    ],
    githubUrl: "https://github.com/riyarj-11/LexiCare",
    liveUrl: "YOUR_DEPLOYED_PROJECT_URL"
  },
  {
    id: "rdex-platform",
    title: "RDEX — Riya's Development Experience",
    subtitle: "Engineering Portfolio & Interactive Technical Specification Hub",
    date: "June 2026",
    category: "Frontend / React",
    featured: true,
    description: "Production personal brand platform built to demonstrate full-stack architectural mastery, real-time command palette navigation, system data-flow diagrams, and direct resume inspection.",
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
    metrics: [
      "100 Lighthouse Performance & Accessibility score",
      "Instant client-side terminal emulator & search palette (Cmd+K)",
      "Zero UI clutter — focused on engineering substance"
    ],
    features: [
      "Interactive 4-tier Full-Stack lifecycle architecture diagram (Frontend → API → Backend → Database).",
      "Embedded Interactive CLI Terminal supporting quick command queries (skills, experience, contact).",
      "Curated 2-page verified resume inspection and quick download functionality.",
      "Responsive glassmorphic UI with strict design system tokens."
    ],
    githubUrl: "https://github.com/riyarj-11/rdex-portfolio",
    liveUrl: "https://riya-raj.dev"
  }
];

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    step: 1,
    layer: "Tier 1: Presentation Layer",
    title: "React & TypeScript Frontend",
    tech: ["React 18", "TypeScript", "Tailwind CSS", "Vite"],
    description: "Type-safe, component-driven user interfaces built for responsiveness, state consistency, and rapid user feedback.",
    keyResponsibilities: [
      "Predictable state management and custom hooks",
      "Strict TypeScript interfaces aligned with backend DTOs",
      "WCAG 2.1 AA accessible, responsive UI layouts",
      "Optimized client-side rendering and asset bundling"
    ],
    iconName: "Monitor"
  },
  {
    step: 2,
    layer: "Tier 2: API Gateway & Security",
    title: "ASP.NET Core Web API",
    tech: ["ASP.NET Core", "C#", "RESTful Architecture", "JWT"],
    description: "High-throughput HTTP endpoints handling client requests, routing, authorization, and payload validation.",
    keyResponsibilities: [
      "RESTful routing conventions and OpenAPI / Swagger documentation",
      "Global exception-handling middleware and structured logging",
      "Token-based authentication and role authorization",
      "Model validation and request payload sanitization"
    ],
    iconName: "Server"
  },
  {
    step: 3,
    layer: "Tier 3: Business Logic & Processing",
    title: "C# Domain Services Engine",
    tech: ["C#", "LINQ", "Dependency Injection", "Async/Await"],
    description: "Core business rules, algorithmic validations, data quality transformations, and asynchronous processing.",
    keyResponsibilities: [
      "Decoupled service layers adhering to SOLID design principles",
      "Inversion of Control (IoC) with built-in .NET Dependency Injection",
      "Optimized LINQ expressions for in-memory collections",
      "Task-based Asynchronous Pattern (TAP) for high concurrency"
    ],
    iconName: "Cpu"
  },
  {
    step: 4,
    layer: "Tier 4: Persistence & Storage",
    title: "SQL Server (T-SQL) Database",
    tech: ["SQL Server", "T-SQL", "Stored Procedures", "Indexes"],
    description: "Reliable relational data storage with strict schema normalization, transactional guarantees, and query optimization.",
    keyResponsibilities: [
      "Normalized relational schema design (3NF) and constraint enforcement",
      "High-performance stored procedures and parameterized queries",
      "B-Tree index optimization and execution plan profiling",
      "ACID transactional boundaries ensuring telemetry data integrity"
    ],
    iconName: "Database"
  }
];

export const EDUCATION: Education[] = [
  {
    id: "liet-btech",
    institution: "Lloyd Institute of Engineering and Technology",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    location: "Greater Noida",
    period: "Sept. 2023 – May 2027",
    highlights: [
      "Rigorous core curriculum in systems programming, data structures, and enterprise web architecture.",
      "Active in inter-college competitive technical events and campus leadership.",
      "Capstoned projects demonstrating full-stack engineering across .NET, React, and SQL Server."
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C# / Java)",
      "Database Management Systems (SQL Server)",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering"
    ]
  },
  {
    id: "jean-pauls-12th",
    institution: "Jean Paul’s Senior Secondary School",
    degree: "Class 12th",
    field: "Senior Secondary Education",
    location: "Ara, Bihar",
    period: "Apr. 2021 – May 2023",
    highlights: [
      "Built foundational strengths in mathematics, science, and analytical problem-solving."
    ],
    coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "intern-of-the-month",
    name: "Developer Intern of the Month August 2026 at Enerva Marine",
    issuer: "Enerva Marine",
    date: "August 2026",
    badge: "Corporate Honor",
    description: "Developer Intern of the Month August 2026 at Enerva Marine",
    badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-950/20"
  },
  {
    id: "oracle-genai",
    name: "Oracle Certified in Generative AI",
    issuer: "Oracle",
    date: "Certified",
    badge: "AI Credential",
    description: "Oracle Certified in Generative AI, with knowledge of LLMs, prompt engineering, and AI applications.",
    badgeColor: "border-red-500/40 text-red-300 bg-red-950/20"
  },
  {
    id: "flipkart-oa",
    name: "Cleared Flipkart Online Assessment (2025)",
    issuer: "Flipkart",
    date: "2025",
    badge: "Competitive Selection",
    description: "Cleared Flipkart Online Assessment (2025) in a competitive hiring process.",
    badgeColor: "border-amber-500/40 text-amber-300 bg-amber-950/20"
  },
  {
    id: "google-gemini-hackathon",
    name: "Google Gemini Hackathon Participant",
    issuer: "Google",
    date: "Hackathon",
    badge: "AI Prototyping",
    description: "Google Gemini Hackathon Participant, building AI-driven projects and prototypes.",
    badgeColor: "border-blue-500/40 text-blue-300 bg-blue-950/20"
  },
  {
    id: "hackathons-finalist",
    name: "Finalist in 5+ Hackathons",
    issuer: "Competitive Hackathons",
    date: "5+ Hackathons",
    badge: "Finalist",
    description: "Finalist in 5+ Hackathons, showcasing innovation, teamwork, and problem-solving skills.",
    badgeColor: "border-purple-500/40 text-purple-300 bg-purple-950/20"
  }
];

export const CO_CURRICULAR: CoCurricular[] = [
  {
    id: "volleyball",
    category: "Sports",
    title: "Straight 3 times Volleyball Winner in Inter College Competition",
    description: "Straight 3 times Volleyball Winner in Inter College Competition.",
    badge: "3x Winner"
  },
  {
    id: "basketball-tug",
    category: "Sports",
    title: "2 Times Winner in Basketball and Tug Of War",
    description: "2 Times Winner in Basketball and Tug Of War.",
    badge: "2x Winner"
  },
  {
    id: "debate",
    category: "Debate & Oratory",
    title: "District-Level Debate Winner",
    description: "District-Level Debate Winner — Secured first place in a district-level debate competition, demonstrating strong communication, critical thinking, and public speaking skills.",
    badge: "1st Place"
  },
  {
    id: "dance",
    category: "Arts & Culture",
    title: "Secured recognition in a dance competition",
    description: "Secured recognition in a dance competition, demonstrating creativity, stage presence, discipline, and performance skills.",
    badge: "Recognized"
  },
  {
    id: "singing",
    category: "Arts & Culture",
    title: "Singing Competition Winner",
    description: "Singing Competition Winner — Awarded a certificate of achievement for outstanding vocal performance and musical presentation.",
    badge: "Winner"
  },
  {
    id: "art-craft",
    category: "Arts & Culture",
    title: "Art & Craft Competition — Runner-Up",
    description: "Art & Craft Competition — Runner-Up, recognized with a certificate for creativity and artistic excellence.",
    badge: "Runner-Up"
  }
];
