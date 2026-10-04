import React, { useState } from 'react';
import { ARCHITECTURE_LAYERS } from '../data/portfolio';
import { Monitor, Server, Cpu, Database, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState<number>(0);

  const icons = [Monitor, Server, Cpu, Database];
  const activeLayer = ARCHITECTURE_LAYERS[selectedLayerIndex];

  return (
    <section id="architecture" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">05 // System Design</span>
            <div className="h-px w-12 bg-cyan-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Full-Stack Architectural Lifecycle
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            How I architect systems from user interaction down to persistent SQL Server storage.
          </p>
        </div>

        {/* 4-Step Pipeline Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {ARCHITECTURE_LAYERS.map((layer, idx) => {
            const Icon = icons[idx];
            const isSelected = selectedLayerIndex === idx;
            return (
              <button
                key={layer.step}
                onClick={() => setSelectedLayerIndex(idx)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg ${
                    isSelected ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-900 text-slate-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-cyan-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                  }`}>
                    Tier {layer.step}
                  </span>
                </div>

                <div className="font-display font-bold text-white text-sm">
                  {layer.title}
                </div>
                <div className="text-[11px] font-mono text-cyan-400/90 mt-1">
                  {layer.tech[0]} • {layer.tech[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Tier Deep-Dive Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {activeLayer.layer}
                </span>
              </div>
              <h3 className="text-2xl font-bold font-display text-white">
                {activeLayer.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {activeLayer.description}
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider">
                  Core Engineering Responsibilities:
                </h4>
                {activeLayer.keyResponsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-4">
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                Technology Specifications
              </h4>

              <div className="flex flex-wrap gap-2">
                {activeLayer.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-md bg-slate-900 text-cyan-300 border border-slate-800 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Type Safety & Validation at this boundary</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Designed for low latency and high concurrency</span>
                </div>
              </div>
            </div>

          </div>

          {/* End-to-End Data Pipeline Visual */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <h4 className="text-xs font-mono font-semibold uppercase text-slate-400 tracking-wider mb-3">
              Live Data Flow Path:
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-slate-950 text-cyan-300 border border-slate-800">
                1. User Event (React SPA)
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span className="px-2.5 py-1 rounded bg-slate-950 text-blue-300 border border-slate-800">
                2. REST JSON Payload
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span className="px-2.5 py-1 rounded bg-slate-950 text-sky-300 border border-slate-800">
                3. ASP.NET Core Middleware & Auth
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span className="px-2.5 py-1 rounded bg-slate-950 text-indigo-300 border border-slate-800">
                4. C# Domain Service Logic
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              <span className="px-2.5 py-1 rounded bg-slate-950 text-emerald-300 border border-slate-800">
                5. SQL Server Stored Procedure
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
