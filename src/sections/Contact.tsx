import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio';

interface ContactProps {
  onNotify: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNotify }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onNotify('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onNotify('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      onNotify(`Thanks ${formData.name}! Your message has been routed to Riya.`);
      // Form mailto fallback
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">08 // Contact</span>
            <div className="h-px w-12 bg-cyan-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Initiate Contact & Collaboration
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl">
            Currently interviewing for Full-Stack, .NET, and React Developer positions.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-5">
              <h3 className="font-display font-bold text-white text-lg">
                Direct Communications
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Feel free to reach out directly via email, phone, or LinkedIn. I typically reply within 24 hours.
              </p>

              <div className="space-y-3 text-xs">
                {/* Email item */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <div className="text-slate-400 text-[10px]">Email</div>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="font-mono text-slate-200 hover:text-cyan-400">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone item */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-slate-400 text-[10px]">Phone</div>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="font-mono text-slate-200 hover:text-cyan-400">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Location item */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-slate-400 text-[10px]">Location</div>
                    <div className="font-mono text-slate-200">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 shadow-xl"
            >
              <h3 className="font-display font-bold text-white text-lg mb-2">
                Send a Direct Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Full-Stack / .NET Developer Opportunity"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Riya, we saw your work on LexiCare and Enerva Marine and would love to connect..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 transition-all disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmitting ? 'Routing Message...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
