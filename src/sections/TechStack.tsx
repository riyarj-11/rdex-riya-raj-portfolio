import React, { useState } from 'react';
import { TECH_SKILLS } from '../data/portfolio';
import { Layout, Server, Database, Wrench } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { name: 'All', icon: null },
    { name: 'Frontend', icon: Layout },
    { name: 'Backend & APIs', icon: Server },
    { name: 'Database', icon: Database },
    { name: 'DevOps & Tools', icon: Wrench },
  ];

  const filteredSkills = activeCategory === 'All'
    ? TECH_SKILLS
    : TECH_SKILLS.filter(s => s.category === activeCategory);

  return (
    <section id="tech-stack" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">02 // Technical Skills</span>
            <div className="h-px w-12 bg-cyan-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Curated Enterprise Technology Stack
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Only technologies supported by verified production experience and academic capstones.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-slate-950 text-cyan-400' : 'bg-slate-800 text-slate-400'
                }`}>
                  {cat.name === 'All' ? TECH_SKILLS.length : TECH_SKILLS.filter(s => s.category === cat.name).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all hover:bg-slate-900/90 group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-display font-bold text-white text-base group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-cyan-300 border border-slate-800">
                  {skill.category}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {skill.highlight}
              </p>
            </div>
          ))}
        </div>

        {/* Stack Highlights Strip */}
        <div className="mt-8 p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs text-slate-300 font-mono">
              Core Stack: <strong className="text-white">React + TypeScript</strong> on client, <strong className="text-white">ASP.NET Core (C#)</strong> on server, <strong className="text-white">SQL Server</strong> for storage.
            </span>
          </div>
          <a
            href="#projects"
            className="text-xs text-cyan-400 hover:underline font-mono shrink-0"
          >
            See applied in LexiCare & Enerva ▹
          </a>
        </div>

      </div>
    </section>
  );
};
