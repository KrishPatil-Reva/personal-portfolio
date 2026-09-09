import React from 'react';
import { Check, Wrench } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-20 border-t border-white/[0.04]" id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
              {SKILLS_DATA.sectionNumber}
            </span>
            <div className="h-[1px] w-12 bg-cyan-500/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {SKILLS_DATA.title}
          </h2>
        </div>

        {/* 3 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {SKILLS_DATA.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl bg-[#111624]/80 border border-white/[0.08] p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
            >
              <div>
                {/* Header Row: Language Abbreviation & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-cyan-400 text-base shadow-sm group-hover:border-cyan-400/60 transition-colors">
                    {card.iconAbbr}
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-slate-800/80 text-slate-300 border border-white/10">
                    {card.badgeText}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                  {card.description}
                </p>

                {/* Bullet checklist */}
                <div className="space-y-2.5 mb-6">
                  {card.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Proficiency */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Proficiency</span>
                <span className="text-cyan-300 font-medium">
                  {card.proficiency}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Environments Strip */}
        <div className="rounded-xl bg-[#111624]/60 border border-white/[0.08] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white font-mono shrink-0">
            <Wrench className="w-4 h-4 text-cyan-400" />
            <span>Tools & Environments:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {SKILLS_DATA.toolsAndEnvironments.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-xs font-mono rounded bg-slate-900/90 text-slate-300 border border-white/[0.08] hover:border-cyan-500/30 hover:text-white transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
