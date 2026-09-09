import React from 'react';
import { ExternalLink, Code2, Eye, FileText, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenGithub: (url: string, projectName: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenGithub,
}) => {
  const getActionIcon = (type: string) => {
    switch (type) {
      case 'preview':
        return <Eye className="w-3.5 h-3.5" />;
      case 'specs':
        return <Layers className="w-3.5 h-3.5" />;
      case 'docs':
        return <FileText className="w-3.5 h-3.5" />;
      default:
        return <ExternalLink className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section className="py-16 md:py-20 border-t border-white/[0.04]" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
                {PROJECTS_DATA.sectionNumber}
              </span>
              <div className="h-[1px] w-12 bg-cyan-500/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {PROJECTS_DATA.title}
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400">
            {PROJECTS_DATA.subtitle}
          </p>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl bg-[#111624]/80 border border-white/[0.08] p-6 flex flex-col justify-between hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
            >
              <div>
                {/* Header: Category & Terminal Window Dots */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-mono font-semibold text-cyan-400 tracking-wider uppercase">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
                    <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                    <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono rounded bg-slate-900/90 text-slate-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 hover:underline transition-colors"
                >
                  {getActionIcon(project.primaryAction.type)}
                  <span>{project.primaryAction.label}</span>
                </button>

                <button
                  onClick={() => onOpenGithub(project.githubUrl, project.title)}
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>GitHub Repo</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
