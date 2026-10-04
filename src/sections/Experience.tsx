import React from 'react';
import { EXPERIENCES } from '../data/portfolio';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">03 // Work Experience</span>
            <div className="h-px w-12 bg-cyan-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Production Software Engineering
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Real enterprise software built for commercial fleet telemetry and artificial intelligence.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className="relative p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all hover:bg-slate-900/90 shadow-xl"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      {exp.role}
                    </h3>
                    <span className="text-cyan-400 font-medium text-base">@ {exp.company}</span>
                  </div>

                  {exp.badge && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium mt-2">
                      <Award className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.badge}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-slate-300 text-sm mt-4 leading-relaxed">
                {exp.summary}
              </p>

              {/* Responsibilities list */}
              <div className="mt-5 space-y-2.5">
                {exp.responsibilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech used pills */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-500 mr-2">Tech:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-md bg-slate-950 text-slate-300 border border-slate-800 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
