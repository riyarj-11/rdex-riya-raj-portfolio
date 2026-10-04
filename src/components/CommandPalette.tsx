import React, { useState, useEffect } from 'react';
import { Search, X, Code2, Briefcase, GraduationCap, Award, Mail, FileText, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onNotify: (msg: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onNotify
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else window.dispatchEvent(new CustomEvent('open-command-palette'));
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'projects',
      label: 'Explore Projects (LexiCare & RDEX)',
      category: 'Navigation',
      icon: Code2,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'architecture',
      label: 'View Full-Stack Architecture Pipeline',
      category: 'Navigation',
      icon: Code2,
      action: () => {
        document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'experience',
      label: 'Experience & Enerva Marine Details',
      category: 'Navigation',
      icon: Briefcase,
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'stack',
      label: 'Technical Skills (.NET, React, SQL Server)',
      category: 'Navigation',
      icon: Code2,
      action: () => {
        document.getElementById('tech-stack')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'certifications',
      label: 'Certifications & Honors (Oracle, Postman)',
      category: 'Navigation',
      icon: Award,
      action: () => {
        document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'education',
      label: 'Education (LIET B.Tech CSE)',
      category: 'Navigation',
      icon: GraduationCap,
      action: () => {
        document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'resume',
      label: 'Open Verified Resume Document',
      category: 'Document',
      icon: FileText,
      action: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      id: 'contact',
      label: 'Contact Riya Raj Directly',
      category: 'Contact',
      icon: Mail,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'copy-email',
      label: `Copy Email: ${PERSONAL_INFO.email}`,
      category: 'Quick Action',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        onNotify('Email address copied to clipboard!');
        onClose();
      }
    }
  ];

  const filtered = actions.filter(a =>
    a.label.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-sm">
      <div 
        className="w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-950/70">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            type="text"
            placeholder="Type a command, project name, or technology..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-800/40">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-sm text-slate-500">
              No matching actions found for "{query}"
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/70 text-left transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-cyan-500/10 text-slate-300 group-hover:text-cyan-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-200 group-hover:text-white">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        {item.category}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </button>
              );
            })
          )}
        </div>

        <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Tip: Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">Esc</kbd> to exit</span>
          <span>RDEX Quick Command Hub</span>
        </div>
      </div>
    </div>
  );
};
