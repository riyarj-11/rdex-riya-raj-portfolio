import React from 'react';
import { X, Printer, Copy, ExternalLink, Mail, Phone, MapPin, Award } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, EDUCATION, CERTIFICATIONS, CO_CURRICULAR } from '../data/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotify: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onNotify }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const plainText = `
RIYA RAJ
Full-Stack Developer | .NET Developer | React Developer
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

PROFESSIONAL SUMMARY:
${PERSONAL_INFO.summary}

WORK EXPERIENCE:
1. ${EXPERIENCES[0].role} - ${EXPERIENCES[0].company} (${EXPERIENCES[0].period})
Award: ${EXPERIENCES[0].badge}
${EXPERIENCES[0].responsibilities.map(r => `• ${r}`).join('\n')}

2. ${EXPERIENCES[1].role} - ${EXPERIENCES[1].company} (${EXPERIENCES[1].period})
${EXPERIENCES[1].responsibilities.map(r => `• ${r}`).join('\n')}

FEATURED PROJECTS:
1. ${PROJECTS[0].title} (${PROJECTS[0].subtitle}) - ${PROJECTS[0].date}
Stack: ${PROJECTS[0].techStack.join(', ')}
${PROJECTS[0].description}
Key features:
${PROJECTS[0].features.map(f => `• ${f}`).join('\n')}

2. ${PROJECTS[1].title} (${PROJECTS[1].subtitle}) - ${PROJECTS[1].date}
Stack: ${PROJECTS[1].techStack.join(', ')}
${PROJECTS[1].description}

EDUCATION:
${EDUCATION[0].degree} - ${EDUCATION[0].field}
${EDUCATION[0].institution} (${EDUCATION[0].period})
Coursework: ${EDUCATION[0].coursework.join(', ')}

CERTIFICATIONS:
${CERTIFICATIONS.map(c => `• ${c.name} (${c.issuer}, ${c.date})`).join('\n')}

CO-CURRICULAR & HONORS:
${CO_CURRICULAR.map(c => `• ${c.title} [${c.badge}]: ${c.description}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(plainText).then(() => {
      onNotify('Resume text copied to clipboard!');
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-700/70 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-display font-bold text-white text-base tracking-wide">
              RDEX Official Resume — Riya Raj
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono hidden sm:inline-block">
              Updated Oct 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all"
              title="Copy plain text"
            >
              <Copy className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Copy Text</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Styled Resume Document */}
        <div className="overflow-y-auto p-6 md:p-10 space-y-8 bg-slate-900/90 text-slate-200 text-sm leading-relaxed font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold font-display text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-cyan-400 font-medium text-base mt-1">
                  Full-Stack Developer | .NET Developer | React Developer
                </p>
              </div>

              <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs text-slate-400 font-mono">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:text-cyan-400">
                  <Mail className="w-3.5 h-3.5 text-cyan-500" />
                  {PERSONAL_INFO.email}
                </a>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-1.5 hover:text-cyan-400">
                  <Phone className="w-3.5 h-3.5 text-cyan-500" />
                  {PERSONAL_INFO.phone}
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-4 pt-3 border-t border-slate-800/60 text-xs">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline flex items-center gap-1">
                LinkedIn Profile <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-slate-700">•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline flex items-center gap-1">
                GitHub Repositories <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-slate-700">•</span>
              <a href={PERSONAL_INFO.leetcode} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline flex items-center gap-1">
                LeetCode Profile <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono tracking-widest uppercase text-cyan-400 mb-2 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" /> Professional Summary
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono tracking-widest uppercase text-cyan-400 mb-4 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" /> Work Experience
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div>
                      <span className="font-bold text-white text-base">{exp.role}</span>
                      <span className="text-slate-400 text-sm"> — {exp.company}</span>
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      {exp.period} | {exp.location}
                    </div>
                  </div>

                  {exp.badge && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-3">
                      <Award className="w-3 h-3 text-cyan-400" />
                      {exp.badge}
                    </div>
                  )}

                  <ul className="space-y-1.5 mt-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-cyan-400 text-sm leading-none">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-slate-800/60">
                    {exp.technologies.map((t, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 bg-slate-900 text-slate-300 rounded border border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono tracking-widest uppercase text-cyan-400 mb-4 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" /> Key Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-white text-sm">
                      {proj.title} <span className="font-normal text-slate-400 text-xs">— {proj.subtitle}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-400">{proj.date}</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2">{proj.description}</p>
                  
                  <div className="space-y-1 mb-3">
                    {proj.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-cyan-500">▹</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/60 text-xs">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.techStack.map((tech, idx) => (
                        <span key={idx} className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950/40 text-cyan-300 border border-cyan-900/50 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {proj.githubUrl && (
                      <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1 font-mono text-[11px]">
                        GitHub <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div>
              <h2 className="text-xs font-mono tracking-widest uppercase text-cyan-400 mb-3 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" /> Education
              </h2>
              <div className="space-y-3">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="font-bold text-white text-xs">{edu.degree}</div>
                    <div className="text-xs text-cyan-300">{edu.field}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{edu.institution}</div>
                    <div className="text-[11px] font-mono text-slate-500 mt-1">{edu.period}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-mono tracking-widest uppercase text-cyan-400 mb-3 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" /> Certifications
              </h2>
              <div className="space-y-2">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-medium text-slate-200">{cert.name}</div>
                      <div className="text-[11px] text-slate-400">{cert.issuer}</div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Co-Curricular & Leadership */}
          <div>
            <h2 className="text-xs font-mono tracking-widest uppercase text-cyan-400 mb-3 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" /> Honors & Co-Curricular
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CO_CURRICULAR.map((item) => (
                <div key={item.id} className="p-3 rounded-lg bg-slate-950/50 border border-slate-800/70 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-white">{item.title}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/50 font-mono">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-slate-400 text-[11px]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-slate-800 bg-slate-950 text-xs text-slate-400">
          <span>RDEX • Verified Developer Credential</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
