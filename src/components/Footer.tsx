import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/70 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-display font-black text-slate-950 text-sm">
                RD
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">
                {PERSONAL_INFO.brand}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                // {PERSONAL_INFO.brandFullName}
              </span>
            </div>
            
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Engineering mission-critical enterprise systems across React, ASP.NET Core, and SQL Server. Positioned for high-impact full-stack and backend engineering roles.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
                aria-label="LeetCode Profile"
              >
                <Code2 className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Riya</a></li>
              <li><a href="#tech-stack" className="hover:text-cyan-400 transition-colors">Technical Stack</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Work Experience</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects (LexiCare)</a></li>
              <li><a href="#architecture" className="hover:text-cyan-400 transition-colors">Full-Stack Architecture</a></li>
              <li><a href="#education" className="hover:text-cyan-400 transition-colors">Education & Certifications</a></li>
            </ul>
          </div>

          {/* Technical Identity */}
          <div>
            <h4 className="font-mono text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Engineering Focus
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-300">Frontend: React 18, TypeScript, Tailwind</li>
              <li className="text-slate-300">Backend: .NET, ASP.NET Core, C#</li>
              <li className="text-slate-300">Database: SQL Server (T-SQL)</li>
              <li className="text-slate-300">DevOps: Azure DevOps, Git, CI/CD</li>
              <li className="text-cyan-400 font-mono text-[11px] pt-1">
                ● Status: Ready for Hires
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-slate-500">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name} ({PERSONAL_INFO.brand}). Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>in React & TypeScript.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
