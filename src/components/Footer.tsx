import React from 'react';
import { Github, Linkedin, FileText, Mail } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
  onOpenMail: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenMail }) => {
  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 border-t border-white/[0.06] bg-[#090d16]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
              &lt;KP/&gt;
            </span>
            <span className="text-base font-bold text-white tracking-tight">
              Krish Patil
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            © 2026 Krish Patil. All Rights Reserved.
          </p>
        </div>

        {/* Center: Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="hover:text-cyan-300 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right: Quick action buttons */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/KrishPatil-Reva"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/krish-patil-954696385/"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
            title="View Resume"
            aria-label="View Resume"
          >
            <FileText className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenMail}
            className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
            title="Send Email"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
