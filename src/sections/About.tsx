import React from 'react';
import { Layers, Zap, Database, GitBranch, Award, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Layers,
      title: "End-to-End Ownership",
      description: "Fluent across the entire stack: architecting React component hierarchies, writing ASP.NET Core controllers, and designing normalized SQL Server tables."
    },
    {
      icon: Zap,
      title: "Performance & Reliability",
      description: "Optimized complex SQL queries reducing execution latency by 35% and built telemetry ingestion pipelines with 99.8% data reliability."
    },
    {
      icon: Database,
      title: "Data Integrity & Schema Design",
      description: "Strong foundation in relational data modeling (3NF), stored procedures, indexing strategies, and transactional consistency."
    },
    {
      icon: GitBranch,
      title: "Agile & Enterprise Workflow",
      description: "Proficient with Azure DevOps boards, sprint cadences, GitHub pull request reviews, and enterprise branch management."
    }
  ];

  return (
    <section id="about" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">01 // Background</span>
            <div className="h-px w-12 bg-cyan-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Engineering Across the Full Lifecycle
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            A developer who bridges client-side responsiveness with enterprise-grade backend stability and database performance.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I'm <strong className="text-white">Riya Raj</strong>, a Full-Stack Developer with a deep focus on <strong className="text-cyan-400">React, TypeScript, ASP.NET Core, and SQL Server</strong>. I take pride in understanding not just how code runs in isolation, but how data flows seamlessly from a user interaction down to persistent storage.
            </p>

            <p>
              During my internship at <strong className="text-white">Enerva Marine</strong>, I engineered real-time vessel analytics and fuel monitoring backend services using C# and ASP.NET Core. By optimizing database stored procedures and schema indexes, I reduced query latency by 35% and received the <strong className="text-cyan-300">Developer Intern of the Month</strong> honor for August 2026.
            </p>

            <p>
              My philosophy is centered on building software that is accessible, performant, and maintainable. Whether architecting assistive tech like <strong className="text-white">LexiCare</strong> (designed for dyslexia learners) or configuring high-throughput telemetry pipelines, I emphasize clean architecture, type safety, and real-world user value.
            </p>

            {/* Quick checkmarks */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>React 18 & TypeScript Modern UI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>ASP.NET Core RESTful APIs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>SQL Server Schema & T-SQL</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Azure DevOps & CI/CD Delivery</span>
              </div>
            </div>
          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all hover:bg-slate-900/90"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-white text-sm">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
