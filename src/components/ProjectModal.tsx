import React, { useState } from 'react';
import {
  X,
  Code2,
  Copy,
  Check,
  ExternalLink,
  Terminal,
  CheckCircle2,
  Database,
  Sparkles,
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onShowToast,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'code' | 'interactive'>('overview');
  const [copied, setCopied] = useState(false);
  const [cliInput, setCliInput] = useState('');
  const [cliOutput, setCliOutput] = useState<string[]>([
    'Initializing Python CLI toolkit v1.2...',
    'Type "help" or "stats" to run simulated commands.',
  ]);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.details?.codeSnippet) {
      navigator.clipboard.writeText(project.details.codeSnippet);
      setCopied(true);
      onShowToast('Code snippet copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCliSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = cliInput.trim().toLowerCase();
    let response = '';

    if (cmd === 'help') {
      response = 'Available commands: stats, parse --log=access.log, schema, clear, exit';
    } else if (cmd === 'stats') {
      response = 'Processed 48,290 records in 0.042s (Streaming O(1) memory mode: 12MB)';
    } else if (cmd.startsWith('parse')) {
      response = 'OK: Parsed 200 HTTP responses: 94.2% | 404: 3.1% | 500: 0.1%';
    } else if (cmd === 'schema') {
      response = 'Entities: students (pk: id), courses, enrollments, instructors (3NF Compliant)';
    } else if (cmd === 'clear') {
      setCliOutput([]);
      setCliInput('');
      return;
    } else if (cmd === '') {
      return;
    } else {
      response = `Command not recognized: "${cmd}". Type "help" for list of options.`;
    }

    setCliOutput((prev) => [...prev, `$ ${cliInput}`, response]);
    setCliInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#0e1320] border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        style={{ boxShadow: '0 20px 60px -10px rgba(6, 182, 212, 0.25)' }}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#141a29] border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-cyan-400" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block">
                {project.category}
              </span>
              <h2 className="text-base font-bold text-white tracking-wide">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-[#101624] border-b border-white/[0.06] text-xs font-mono">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded transition-colors ${
              activeTab === 'overview'
                ? 'bg-cyan-500/15 text-cyan-300 font-semibold border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Overview & Highlights
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-1.5 rounded transition-colors ${
              activeTab === 'code'
                ? 'bg-cyan-500/15 text-cyan-300 font-semibold border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Code Architecture
          </button>
          <button
            onClick={() => setActiveTab('interactive')}
            className={`px-3 py-1.5 rounded transition-colors ${
              activeTab === 'interactive'
                ? 'bg-cyan-500/15 text-cyan-300 font-semibold border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Interactive Terminal
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Project Summary
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.details?.overview || project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800 text-cyan-300 border border-cyan-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              {project.details?.highlights && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Technical Deliverables
                  </h4>
                  <div className="space-y-2.5">
                    {project.details.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Core Implementation Extract
                </span>
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#080c14] border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto max-h-[340px]">
                <pre>
                  <code>{project.details?.codeSnippet || '// Code extract loaded'}</code>
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'interactive' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Interactive Runtime Sandbox</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Session
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#080c14] border border-cyan-500/30 font-mono text-xs text-slate-300 flex flex-col h-[280px]">
                <div className="flex-1 overflow-y-auto space-y-1.5 mb-2 pr-1 scrollbar-none">
                  {cliOutput.map((line, idx) => (
                    <div
                      key={idx}
                      className={
                        line.startsWith('$')
                          ? 'text-cyan-300 font-semibold'
                          : line.startsWith('OK')
                          ? 'text-emerald-300'
                          : 'text-slate-300'
                      }
                    >
                      {line}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleCliSubmit} className="flex items-center gap-2 pt-2 border-t border-white/10">
                  <span className="text-cyan-400 font-bold">$</span>
                  <input
                    type="text"
                    value={cliInput}
                    onChange={(e) => setCliInput(e.target.value)}
                    placeholder="type 'help', 'stats', or 'schema'..."
                    className="flex-1 bg-transparent text-white focus:outline-none text-xs font-mono placeholder-slate-600"
                  />
                  <button
                    type="submit"
                    className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30 text-[11px] font-mono hover:bg-cyan-900"
                  >
                    RUN
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#141a29] border-t border-white/10 flex items-center justify-between gap-3 text-xs font-mono">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span>View GitHub Repository</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs transition-colors"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
