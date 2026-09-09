import React from 'react';
import { Building2, CheckCircle, ShieldCheck } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const btech = EDUCATION_DATA.items[0];
  const secondary = EDUCATION_DATA.items[1];

  return (
    <section className="py-16 md:py-20 border-t border-white/[0.04]" id="education">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
              {EDUCATION_DATA.sectionNumber}
            </span>
            <div className="h-[1px] w-12 bg-cyan-500/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {EDUCATION_DATA.title}
          </h2>
        </div>

        {/* 2-Column Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Undergraduate Degree Card (8 cols) */}
          <div className="lg:col-span-7 rounded-xl bg-[#111624]/80 border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300">
            <div>
              {/* Header Badge & Date */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 tracking-wider">
                  {btech.type}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {btech.duration}
                </span>
              </div>

              {/* Title & Field */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                {btech.title}
              </h3>
              <p className="text-sm font-medium text-cyan-400/90 mb-4">
                {btech.field}
              </p>

              {/* Institution */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 mb-6 bg-slate-900/50 p-2.5 rounded-lg border border-white/[0.04]">
                <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-mono text-xs">{btech.institution}</span>
              </div>
            </div>

            {/* Coursework */}
            <div>
              <span className="block text-[11px] font-mono tracking-wider text-slate-400 uppercase mb-3">
                KEY COURSEWORK & TOPICS:
              </span>
              <div className="flex flex-wrap gap-2">
                {btech.coursework?.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 text-xs font-mono rounded-md bg-slate-800/60 text-slate-200 border border-white/[0.06] hover:border-cyan-500/30 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Senior Secondary Card (5 cols) */}
          <div className="lg:col-span-5 rounded-xl bg-[#111624]/80 border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded bg-slate-800 text-slate-300 border border-white/10 tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {secondary.type}
                </span>
              </div>

              {/* Title & Stream */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                {secondary.title}
              </h3>
              <p className="text-sm font-medium text-slate-300 mb-4">
                {secondary.field}
              </p>

              {/* Institution */}
              <div className="flex items-start gap-2 text-xs text-slate-400 mb-6 bg-slate-900/50 p-2.5 rounded-lg border border-white/[0.04]">
                <Building2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="font-mono text-xs leading-relaxed">{secondary.institution}</span>
              </div>
            </div>

            {/* Academic Standing Callout */}
            {secondary.standing && (
              <div className="p-3.5 rounded-lg bg-cyan-950/30 border border-cyan-500/20 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-0.5">
                    {secondary.standing.label}
                  </h4>
                  <p className="text-xs text-slate-300 font-normal">
                    {secondary.standing.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
