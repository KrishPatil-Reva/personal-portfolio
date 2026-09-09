import React, { useState } from 'react';
import { ArrowDown, Play, Copy, Check } from 'lucide-react';
import { HERO_DATA, TERMINAL_FILES } from '../data/portfolioData';

interface HeroProps {
  onCopySuccess: (message: string) => void;
  onNavigateContact: () => void;
  onNavigateProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onCopySuccess,
  onNavigateContact,
  onNavigateProjects,
}) => {
  const [activeFileIndex, setActiveFileIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const activeFile = TERMINAL_FILES[activeFileIndex];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeFile.code);
    setCopied(true);
    onCopySuccess(`Copied ${activeFile.name} to clipboard`);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden" id="hero">
      {/* Ambient background light gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pulsing Status Chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-[11px] font-mono font-medium text-cyan-300 tracking-wider mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>{HERO_DATA.badge}</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 leading-tight">
              {HERO_DATA.greeting}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
                {HERO_DATA.name}
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-slate-300 mb-6 leading-tight">
              {HERO_DATA.nameTitle}
            </h2>

            {/* Body Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-normal">
              {HERO_DATA.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={onNavigateProjects}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-[#0b0f19] font-bold text-xs sm:text-sm font-mono tracking-wider transition-all duration-200 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>VIEW MY PROJECTS</span>
                <ArrowDown className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onNavigateContact}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/50 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm font-mono tracking-wider transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>CONTACT ME</span>
                <Play className="w-3.5 h-3.5 fill-current stroke-none text-cyan-400" />
              </button>
            </div>

            {/* 3 Stats row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full pt-4 border-t border-white/[0.08]">
              {HERO_DATA.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-[11px] font-mono font-medium tracking-wider text-cyan-400 uppercase mb-1">
                    {stat.label}
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400 font-normal">
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Code Window */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-xl bg-[#0d121f] border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 hover:border-cyan-500/30 group">
              {/* Window Titlebar */}
              <div className="bg-[#131826] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]/90" />
                  <div className="w-3 h-3 rounded-full bg-[#f59e0b]/90" />
                  <div className="w-3 h-3 rounded-full bg-[#10b981]/90" />
                </div>

                {/* Tabs selector */}
                <div className="flex items-center gap-1.5 overflow-x-auto max-w-[220px] sm:max-w-none scrollbar-none">
                  {TERMINAL_FILES.map((file, idx) => (
                    <button
                      key={file.name}
                      onClick={() => setActiveFileIndex(idx)}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded transition-colors whitespace-nowrap ${
                        activeFileIndex === idx
                          ? 'bg-[#1b2234] text-cyan-300 font-medium border border-cyan-500/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {file.name}
                    </button>
                  ))}
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopyCode}
                  className="text-slate-400 hover:text-cyan-300 p-1.5 rounded transition-colors"
                  title="Copy code to clipboard"
                  aria-label="Copy code"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Code Editor Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto bg-[#0a0e18] min-h-[300px]">
                <pre className="font-mono text-slate-300">
                  {activeFileIndex === 0 ? (
                    <code>
                      <span className="text-cyan-400">const</span>{' '}
                      <span className="text-yellow-200">developer</span> = &#123;{'\n'}
                      {'  '}
                      <span className="text-sky-300">name</span>:{' '}
                      <span className="text-emerald-300">'Krish Patil'</span>,{'\n'}
                      {'  '}
                      <span className="text-sky-300">role</span>:{' '}
                      <span className="text-emerald-300">'Aspiring Software Developer'</span>,{'\n'}
                      {'  '}
                      <span className="text-sky-300">education</span>:{' '}
                      <span className="text-emerald-300">'B.Tech - Computer Science'</span>,{'\n'}
                      {'  '}
                      <span className="text-sky-300">skills</span>: [{'\n'}
                      {'    '}
                      <span className="text-emerald-300">'C'</span>,{'\n'}
                      {'    '}
                      <span className="text-emerald-300">'Python'</span>,{'\n'}
                      {'    '}
                      <span className="text-emerald-300">'SQL'</span>,{'\n'}
                      {'    '}
                      <span className="text-emerald-300">'DBMS'</span>{'\n'}
                      {'  '}],{'\n'}
                      {'  '}
                      <span className="text-sky-300">interests</span>: [{'\n'}
                      {'    '}
                      <span className="text-emerald-300">'System Architecture'</span>,{'\n'}
                      {'    '}
                      <span className="text-emerald-300">'Database Optimization'</span>,{'\n'}
                      {'    '}
                      <span className="text-emerald-300">'Algorithmic Logic'</span>{'\n'}
                      {'  '}],{'\n'}
                      {'  '}
                      <span className="text-sky-300">status</span>:{' '}
                      <span className="text-emerald-300">'Open to Opportunities'</span>{'\n'}
                      &#125;;{'\n\n'}
                      <span className="text-slate-500 italic">
                        // Continuous expansion in progress
                      </span>{'\n'}
                      <span className="text-yellow-200">developer</span>.
                      <span className="text-cyan-300">buildProjects</span>();
                    </code>
                  ) : (
                    <code>{activeFile.code}</code>
                  )}
                </pre>
              </div>

              {/* Terminal Bottom Status Bar */}
              <div className="bg-[#111624] px-4 py-2 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-slate-300">Ready</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>{activeFile.runtime}</span>
                  <span>UTF-8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
