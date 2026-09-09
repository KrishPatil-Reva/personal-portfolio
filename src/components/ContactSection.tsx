import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  Send,
  Loader2,
} from 'lucide-react';
import { CONTACT_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onShowToast: (message: string, type?: 'success' | 'info' | 'error') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship Opportunity / Project Collaboration',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    onShowToast('Email address copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onShowToast('Please fill out all required fields.', 'error');
      return;
    }

    setIsSubmitting(true);
    // Simulate sending network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onShowToast('Thank you! Your message has been sent successfully.', 'success');
      setFormData({
        name: '',
        email: '',
        subject: 'Internship Opportunity / Project Collaboration',
        message: '',
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 900);
  };

  return (
    <section className="py-16 md:py-24 border-t border-white/[0.04]" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
              {CONTACT_DATA.sectionNumber}
            </span>
            <div className="h-[1px] w-12 bg-cyan-500/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            {CONTACT_DATA.title}
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            {CONTACT_DATA.subtitle}
          </p>
        </div>

        {/* 2-Column Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            {CONTACT_DATA.cards.map((card) => {
              if (card.id === 'email') {
                return (
                  <div
                    key={card.id}
                    className="p-4 rounded-xl bg-[#111624]/80 border border-white/[0.08] hover:border-cyan-500/30 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-slate-900 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                          {card.label}
                        </span>
                        <span className="text-xs sm:text-sm font-mono text-white select-all">
                          {card.value}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleCopyEmail(card.copyValue!)}
                      className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition-colors shrink-0"
                      title="Copy email address"
                      aria-label="Copy email"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                );
              }

              if (card.id === 'linkedin') {
                return (
                  <a
                    key={card.id}
                    href={card.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-xl bg-[#111624]/80 border border-white/[0.08] hover:border-cyan-500/30 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors shrink-0">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                          {card.label}
                        </span>
                        <span className="text-xs sm:text-sm font-mono text-slate-300 group-hover:text-white transition-colors">
                          {card.value}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors shrink-0" />
                  </a>
                );
              }

              if (card.id === 'github') {
                return (
                  <a
                    key={card.id}
                    href={card.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-xl bg-[#111624]/80 border border-white/[0.08] hover:border-cyan-500/30 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors shrink-0">
                        <Github className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                          {card.label}
                        </span>
                        <span className="text-xs sm:text-sm font-mono text-slate-300 group-hover:text-white transition-colors">
                          {card.value}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors shrink-0" />
                  </a>
                );
              }

              return (
                <div
                  key={card.id}
                  className="p-4 rounded-xl bg-[#111624]/80 border border-white/[0.08] flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                      {card.label}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-200">
                      {card.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-7 rounded-xl bg-[#111624]/90 border border-white/[0.08] space-y-4 shadow-xl"
            >
              {/* Name & Email Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                  >
                    YOUR NAME
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0d121f] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/40 text-sm text-white placeholder-slate-500 font-mono transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                  >
                    YOUR EMAIL
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0d121f] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/40 text-sm text-white placeholder-slate-500 font-mono transition-colors"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                >
                  SUBJECT
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="Internship Opportunity / Project Collaboration"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0d121f] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/40 text-sm text-white placeholder-slate-500 font-mono transition-colors"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5"
                >
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  placeholder="Write your message or inquiry here..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0d121f] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/40 text-sm text-white placeholder-slate-500 font-mono transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-[#0b0f19] font-bold text-xs sm:text-sm font-mono tracking-wider transition-all duration-200 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-3.5 h-3.5 fill-current stroke-none" />
                    </>
                  )}
                </button>

                {isSubmitted && (
                  <span className="ml-4 text-xs font-mono text-emerald-400 animate-in fade-in">
                    Message sent successfully!
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
