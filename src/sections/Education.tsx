import React from 'react';
import { EDUCATION } from '../data/portfolio';
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">06 // Academic Background</span>
            <div className="h-px w-12 bg-cyan-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Education & Computer Science Foundation
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Formal foundations in computational theory, database systems, and software engineering.
          </p>
        </div>

        {/* Education List */}
        <div className="space-y-6">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium">
                      {edu.field}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-sm font-semibold text-slate-200">
                  {edu.institution}
                </div>

                <div className="mt-3 space-y-1.5">
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Coursework */}
                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono text-slate-400">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Relevant Coursework:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 text-xs rounded-md bg-slate-950 text-slate-300 border border-slate-800 font-mono"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
