import React from 'react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolio';
import { ExternalLink, Github, Sparkles, Layers, Server, Database, CheckCircle2, ArrowRight } from 'lucide-react';

interface FeaturedProjectProps {
  onNotify: (msg: string) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ onNotify }) => {
  const lexiCare = PROJECTS[0];
  const otherProjects = PROJECTS.slice(1);

  const handleLiveDemoClick = (url?: string) => {
    if (!url || url === 'YOUR_DEPLOYED_PROJECT_URL') {
      onNotify('Live demo URL: Configured as YOUR_DEPLOYED_PROJECT_URL. You can link your deployed Vercel/Azure instance!');
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="projects" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">04 // Featured Engineering</span>
            <div className="h-px w-12 bg-cyan-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Flagship Full-Stack Systems
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Real systems built from architectural blueprint to database persistence.
          </p>
        </div>

        {/* PRIMARY SPOTLIGHT: LexiCare */}
        <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-cyan-500/30 p-6 sm:p-10 shadow-2xl overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Top meta */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Featured Full-Stack Project
              </span>
              <span className="text-xs text-slate-500 font-mono">
                {lexiCare.date}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={lexiCare.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-xs font-medium transition-all"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span>GitHub Repository</span>
              </a>

              <button
                onClick={() => handleLiveDemoClick(lexiCare.liveUrl)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-xs transition-all shadow-sm shadow-cyan-500/20"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
              </button>
            </div>
          </div>

          {/* Main Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">
            
            <div className="lg:col-span-7 space-y-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                  {lexiCare.title}
                </h3>
                <p className="text-cyan-400 font-medium text-sm mt-1">
                  {lexiCare.subtitle}
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {lexiCare.description}
              </p>

              {/* Key Features */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">
                  Key Engineering Features:
                </h4>
                {lexiCare.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="text-cyan-400 font-bold">▹</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-3">
                {lexiCare.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-md bg-slate-950 text-cyan-300 border border-slate-800 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Card */}
            <div className="lg:col-span-5 p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-4">
              <h4 className="font-display font-bold text-white text-sm flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                LexiCare Architectural Stack
              </h4>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="font-semibold text-white mb-0.5">Frontend Client</div>
                  <p className="text-slate-400 text-[11px]">{lexiCare.architecture?.frontend}</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="font-semibold text-white mb-0.5">Backend REST Web API</div>
                  <p className="text-slate-400 text-[11px]">{lexiCare.architecture?.backend}</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="font-semibold text-white mb-0.5">Data Storage & Analytics</div>
                  <p className="text-slate-400 text-[11px]">{lexiCare.architecture?.database}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="pt-2 border-t border-slate-800 space-y-1.5">
                {lexiCare.metrics?.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] text-cyan-300 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* COMPANION PLATFORM: RDEX */}
        {otherProjects.map((project) => (
          <div
            key={project.id}
            className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all hover:bg-slate-900/90 shadow-xl"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              
              {/* Left Column */}
              <div className="space-y-3 lg:max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-800/50">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    {project.date}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-400/90 font-medium mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-md bg-slate-950 text-slate-300 border border-slate-800 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Features & Action */}
              <div className="lg:w-80 p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-4 shrink-0">
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">
                  Platform Highlights:
                </h4>
                
                <ul className="space-y-2">
                  {project.features.map((feat, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">▹</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:underline font-mono"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Repo</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono transition-colors"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};
