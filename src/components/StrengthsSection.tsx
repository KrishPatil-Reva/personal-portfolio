import React from 'react';
import {
  Lightbulb,
  Zap,
  Code,
  Database,
  Users,
  TrendingUp,
} from 'lucide-react';
import { STRENGTHS_DATA } from '../data/portfolioData';

export const StrengthsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-cyan-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-cyan-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-cyan-400" />;
      default:
        return <Lightbulb className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section className="py-16 md:py-20 border-t border-white/[0.04]" id="strengths">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
              {STRENGTHS_DATA.sectionNumber}
            </span>
            <div className="h-[1px] w-12 bg-cyan-500/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {STRENGTHS_DATA.title}
          </h2>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {STRENGTHS_DATA.items.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-[#111624]/70 border border-white/[0.06] hover:border-cyan-500/30 hover:bg-[#151c2e]/70 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center mb-4 group-hover:border-cyan-400/40 group-hover:bg-cyan-950/40 transition-colors">
                {getIcon(item.iconName)}
              </div>
              <h3 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
