import React from 'react';
import {
  GraduationCap,
  Code2,
  Database,
  Rocket,
  Terminal,
} from 'lucide-react';
import { ABOUT_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-cyan-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="py-16 md:py-20 border-t border-white/[0.04]" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
              {ABOUT_DATA.sectionNumber}
            </span>
            <div className="h-[1px] w-12 bg-cyan-500/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {ABOUT_DATA.title}
          </h2>
        </div>

        {/* Bio & Current Status Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          {/* Bio text */}
          <div className="lg:col-span-8 flex flex-col gap-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {ABOUT_DATA.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            {/* Tags row */}
            <div className="flex flex-wrap gap-2 pt-2">
              {ABOUT_DATA.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-slate-800/80 text-cyan-300 border border-white/[0.08] hover:border-cyan-500/30 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Current Status Card */}
          <div className="lg:col-span-4">
            <div className="p-5 sm:p-6 rounded-xl bg-[#141926]/80 border border-white/[0.08] shadow-lg hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                    {ABOUT_DATA.statusCard.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {ABOUT_DATA.statusCard.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-white/[0.06] text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 font-mono text-xs">Goal:</span>
                  <span className="text-white font-medium text-right">
                    {ABOUT_DATA.statusCard.goal}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 font-mono text-xs">Primary Tech:</span>
                  <span className="font-mono font-semibold text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20 text-xs">
                    {ABOUT_DATA.statusCard.primaryTech}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400 font-mono text-xs">Work Type:</span>
                  <span className="text-slate-200 font-medium">
                    {ABOUT_DATA.statusCard.workType}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ABOUT_DATA.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-5 rounded-xl bg-[#111624]/60 border border-white/[0.06] hover:border-cyan-500/30 hover:bg-[#151c2e]/70 transition-all duration-200 flex flex-col group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-white/10 flex items-center justify-center mb-4 group-hover:border-cyan-400/40 group-hover:bg-cyan-950/40 transition-colors">
                {getIcon(pillar.icon)}
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                {pillar.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
