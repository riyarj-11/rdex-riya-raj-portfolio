import React from 'react';
import { CERTIFICATIONS, CO_CURRICULAR } from '../data/portfolio';
import { Award, Trophy, Medal, Sparkles, CheckCircle2 } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">07 // Achievements & Credentials</span>
            <div className="h-px w-12 bg-cyan-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Certifications & Co-Curricular Achievements
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Verified credentials, competitive assessments, and university sports and cultural awards referenced directly from my official resume.
          </p>
        </div>

        {/* Section Grid: Certifications & Co-Curricular */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Certifications and Achievements (Exact from PDF) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h3 className="font-display font-bold text-white text-lg flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                Certifications and Achievements
              </h3>
              <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                Resume Verified
              </span>
            </div>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all hover:bg-slate-900/90 group"
                >
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div className="flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <h4 className="font-bold text-white text-sm group-hover:text-cyan-400 transition-colors leading-snug">
                        {cert.name}
                      </h4>
                    </div>
                    {cert.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-800/50 shrink-0">
                        {cert.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 pl-6 leading-relaxed">
                    {cert.description || cert.name}
                  </p>

                  <div className="mt-2.5 pt-2 pl-6 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Organization: <strong className="text-slate-300">{cert.issuer}</strong></span>
                    {cert.date && <span>{cert.date}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Co-Curricular Achievements (Exact from PDF) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <h3 className="font-display font-bold text-white text-lg flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                Co-Curricular Achievements
              </h3>
              <span className="text-[11px] font-mono text-amber-400 px-2 py-0.5 rounded bg-amber-950/60 border border-amber-800/40">
                Sports & Arts
              </span>
            </div>

            <div className="space-y-3">
              {CO_CURRICULAR.map((item) => (
                <div
                  key={item.id}
                  className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-all hover:bg-slate-900/90 group"
                >
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div className="flex items-start gap-2.5">
                      <Medal className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="font-bold text-white text-sm group-hover:text-amber-300 transition-colors leading-snug">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-950/40 text-amber-300 border border-amber-800/50 shrink-0">
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 pl-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-2.5 pt-2 pl-6 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>Category: <strong className="text-slate-400">{item.category}</strong></span>
                    <span className="text-amber-400/80">★ Official Honor</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
