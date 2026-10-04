import React from 'react';
import { ArrowRight, FileText, Mail, Award, CheckCircle2, Layers, Server, Database, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Clean Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-xs font-mono font-medium text-cyan-300 tracking-wide uppercase">
                Full-Stack Developer • .NET & React Specialist
              </span>
            </div>

            {/* Main Title & Brand */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.1]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Riya Raj</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 font-sans">
                Full-Stack Developer <span className="text-cyan-400">|</span> .NET Developer <span className="text-cyan-400">|</span> React Developer
              </p>
            </div>

            {/* Concise Bio */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              Engineering mission-critical enterprise web systems across the complete lifecycle — from reactive <strong className="text-slate-200">React & TypeScript</strong> frontends to high-throughput <strong className="text-slate-200">ASP.NET Core REST APIs</strong> and optimized <strong className="text-slate-200">SQL Server</strong> databases. Proven corporate impact at Enerva Marine as <span className="text-cyan-300 font-medium">Developer Intern of the Month</span>.
            </p>

            {/* Core Stack Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-1">Core:</span>
              {['React', 'TypeScript', '.NET / ASP.NET Core', 'C#', 'SQL Server (T-SQL)', 'REST APIs', 'Azure DevOps'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 font-mono shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-slate-950" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-medium text-sm transition-all"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-800 font-medium text-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>

            {/* Credential Badges Strip */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
                <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-[11px] font-semibold text-white">Intern of the Month</div>
                  <div className="text-[10px] text-slate-400">Enerva Marine (Aug 2026)</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-[11px] font-semibold text-white">Oracle GenAI Certified</div>
                  <div className="text-[10px] text-slate-400">Cloud Professional 2024</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-[11px] font-semibold text-white">Full-Stack Scope</div>
                  <div className="text-[10px] text-slate-400">UI → API → DB Architecture</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Architectural Pipeline Preview (NO fake code runner) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800 p-6 shadow-2xl backdrop-blur-xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold font-mono text-xs">
                    RD
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-sm">Full-Stack Architecture</h3>
                    <p className="text-[11px] font-mono text-slate-400">Frontend → API → Backend → Database</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/50 text-emerald-400 border border-emerald-800/40 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </span>
              </div>

              {/* Connected Layers */}
              <div className="mt-5 space-y-3">
                
                {/* Layer 1: Frontend */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/90 hover:border-cyan-500/40 transition-colors group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Tier 1: Reactive Frontend</div>
                        <div className="text-[11px] text-slate-400">React 18 • TypeScript • Tailwind CSS</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400">SPA</span>
                  </div>
                </div>

                {/* Connector Line */}
                <div className="flex justify-center -my-1.5">
                  <div className="w-0.5 h-3 bg-gradient-to-b from-cyan-500/50 to-blue-500/50" />
                </div>

                {/* Layer 2: API Gateway */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/90 hover:border-blue-500/40 transition-colors group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Tier 2: Web API & Middleware</div>
                        <div className="text-[11px] text-slate-400">ASP.NET Core • C# • REST Endpoints</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-blue-400">REST</span>
                  </div>
                </div>

                {/* Connector Line */}
                <div className="flex justify-center -my-1.5">
                  <div className="w-0.5 h-3 bg-gradient-to-b from-blue-500/50 to-indigo-500/50" />
                </div>

                {/* Layer 3: Persistence */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/90 hover:border-indigo-500/40 transition-colors group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                        <Database className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Tier 3: Relational Database</div>
                        <div className="text-[11px] text-slate-400">SQL Server • T-SQL • Stored Procs & Indexes</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-indigo-400">ACID</span>
                  </div>
                </div>

              </div>

              {/* Bottom Metrics Bar */}
              <div className="mt-5 pt-4 border-t border-slate-800 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-slate-950/50 border border-slate-800/60">
                  <div className="font-display font-bold text-cyan-400 text-sm">-35%</div>
                  <div className="text-[10px] text-slate-400 font-mono">Query Latency</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-950/50 border border-slate-800/60">
                  <div className="font-display font-bold text-sky-400 text-sm">99.8%</div>
                  <div className="text-[10px] text-slate-400 font-mono">Data Reliability</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-950/50 border border-slate-800/60">
                  <div className="font-display font-bold text-emerald-400 text-sm">100%</div>
                  <div className="text-[10px] text-slate-400 font-mono">End-to-End Scope</div>
                </div>
              </div>

              {/* Footer status link */}
              <div className="mt-4 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-mono">Riya's Development Experience</span>
                <a href="#architecture" className="text-cyan-400 hover:underline flex items-center gap-1">
                  Explore full architecture ▹
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
