import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, TECH_SKILLS, EXPERIENCES, PROJECTS } from '../data/portfolio';

interface CommandOutput {
  command: string;
  output: string | string[];
}

export const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: [
        `RDEX Interactive Shell [Version 2.0.4]`,
        `Type 'help' to see available commands or 'skills' to inspect stack.`
      ]
    }
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let response: string | string[];

    switch (cmd) {
      case 'help':
        response = [
          'Available commands:',
          '  skills       - View full-stack technical competencies',
          '  experience   - View corporate roles and honors',
          '  projects     - View LexiCare & key software systems',
          '  contact      - Display email, phone, and direct links',
          '  clear        - Reset terminal window',
          '  whoami       - Display brief bio'
        ];
        break;
      case 'skills':
        response = [
          'CORE TECHNICAL STACK:',
          '• Frontend: React 18, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5',
          '• Backend: .NET, ASP.NET Core, C#, RESTful Web APIs, LINQ',
          '• Database: SQL Server (T-SQL), Stored Procedures, Relational Modeling, Supabase',
          '• Tools: Git, GitHub, Azure DevOps, Visual Studio, VS Code, Postman'
        ];
        break;
      case 'experience':
        response = [
          'CORPORATE EXPERIENCE:',
          `1. ${EXPERIENCES[0].role} @ ${EXPERIENCES[0].company} (${EXPERIENCES[0].period})`,
          `   Honor: ${EXPERIENCES[0].badge}`,
          `   Scope: C#, ASP.NET Core REST APIs, SQL Server optimization (-35% latency)`,
          `2. ${EXPERIENCES[1].role} @ ${EXPERIENCES[1].company} (${EXPERIENCES[1].period})`
        ];
        break;
      case 'projects':
        response = [
          'FEATURED PROJECTS:',
          `1. ${PROJECTS[0].title} — ${PROJECTS[0].subtitle}`,
          `   Stack: ${PROJECTS[0].techStack.join(', ')}`,
          `   Repo: ${PROJECTS[0].githubUrl}`,
          `2. ${PROJECTS[1].title} — ${PROJECTS[1].subtitle}`
        ];
        break;
      case 'contact':
        response = [
          `Email: ${PERSONAL_INFO.email}`,
          `Phone: ${PERSONAL_INFO.phone}`,
          `LinkedIn: ${PERSONAL_INFO.linkedin}`,
          `GitHub: ${PERSONAL_INFO.github}`
        ];
        break;
      case 'whoami':
        response = `${PERSONAL_INFO.name} — Full-Stack & .NET Developer. Developer Intern of the Month (Aug 2026 @ Enerva Marine).`;
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        response = `Command not recognized: "${cmd}". Type 'help' for valid options.`;
    }

    setHistory((prev) => [...prev, { command: input, output: response }]);
    setInput('');
  };

  return (
    <section className="py-20 border-t border-slate-800/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider">
              RDEX CLI Emulator
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">
            Interactive Shell • Try 'help'
          </span>
        </div>

        {/* Terminal Frame */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[11px] text-slate-400 font-medium">
              guest@rdex-workstation:~
            </span>
            <div className="w-10" />
          </div>

          {/* Console Body */}
          <div className="p-4 sm:p-6 space-y-4 max-h-72 overflow-y-auto">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-slate-600">rdex $</span>
                  <span>{item.command}</span>
                </div>
                <div className="text-slate-300 pl-4 space-y-0.5 leading-relaxed">
                  {Array.isArray(item.output) ? (
                    item.output.map((line, lIdx) => <div key={lIdx}>{line}</div>)
                  ) : (
                    <div>{item.output}</div>
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Prompt Input Form */}
          <form onSubmit={handleCommand} className="flex items-center px-4 py-3 bg-slate-900/60 border-t border-slate-800">
            <span className="text-cyan-400 mr-2">rdex $</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type 'skills', 'experience', 'projects', 'help'..."
              className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 text-xs focus:outline-none"
            />
            <button type="submit" className="text-slate-500 hover:text-cyan-400 transition-colors">
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
