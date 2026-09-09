import React, { useState, useEffect } from 'react';
import { User, Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Strengths', href: '#strengths' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'education', 'skills', 'projects', 'strengths', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f19]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group cursor-pointer"
          aria-label="Krish Patil - Home"
        >
          <span className="flex items-center justify-center px-2 py-0.5 text-xs font-mono font-bold tracking-wider rounded bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors">
            &lt;KP/&gt;
          </span>
          <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            krish.dev
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? 'text-cyan-400 font-semibold'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Resume Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 text-xs font-mono font-semibold tracking-wider text-cyan-300 transition-all duration-200 group shadow-sm hover:shadow-cyan-500/20"
          >
            <span>RESUME / CONNECT</span>
            <div className="w-7 h-7 rounded-full bg-cyan-400 flex items-center justify-center text-[#0b0f19] group-hover:scale-105 transition-transform">
              <User className="w-3.5 h-3.5" />
            </div>
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f131d]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/40 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-2 border-t border-white/10 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-cyan-500 text-[#0b0f19] font-bold text-xs tracking-wider"
            >
              <FileText className="w-4 h-4" />
              VIEW RESUME
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
