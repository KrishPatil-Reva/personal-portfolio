import React, { useState } from 'react';
import {
  X,
  Download,
  Printer,
  Copy,
  Check,
  Mail,
  MapPin,
  FileCode,
  GraduationCap,
  Sparkles,
  Linkedin,
  Github,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const resumeText = `KRISH PATIL
Aspiring Software Developer | B.Tech Undergraduate (2023 - 2027)
Email: krishppatil5471@gmail.com | Location: India
GitHub: github.com/KrishPatil-Reva | LinkedIn: linkedin.com/in/krish-patil-954696385

------------------------------------------------------------
EDUCATION
------------------------------------------------------------
• Bachelor of Technology (B.Tech) - Computer Science / IT (2023 - 2027)
  Key Coursework: Data Structures Foundations, Database Management Systems, 
  Object-Oriented Logic, Discrete Mathematics, Computer Architecture Basics.
• Senior Secondary Education - Science (Physics, Chemistry, Mathematics)
  Completed with distinction in STEM fundamentals.

------------------------------------------------------------
TECHNICAL SKILLS
------------------------------------------------------------
• Core Languages: C (Procedural logic, memory allocation, pointers), Python (Modular scripting, CLI)
• Database & Modeling: SQL (DDL, DML, DQL), DBMS, Entity-Relationship (ER) Modeling, 3NF Normalization
• Tools & Platforms: Git & GitHub, Linux Bash, VS Code, MySQL Workbench, GCC/Clang

------------------------------------------------------------
FEATURED PROJECTS
------------------------------------------------------------
1. Personal Portfolio Website
   Tech: HTML5, Tailwind CSS, JavaScript, Responsive UX
   Features: Kinetic Terminal UI, high-performance responsive grid, interactive code viewers.

2. DBMS / Relational Database Project
   Tech: Relational SQL, ER Modeling, 3NF Normalization, MySQL
   Features: Student enrollment schema, stored procedures, ACID compliance, optimized join queries.

3. Python Application & CLI Utility
   Tech: Python 3, CLI Architecture, Data Parsing, Algorithms
   Features: Memory-efficient log streamer, exception handling, tabular data parser.
`;

  const handleDownload = () => {
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Krish_Patil_Resume.txt';
    link.click();
    URL.revokeObjectURL(url);
    onShowToast('Resume downloaded successfully!');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    onShowToast('Resume summary copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0e1320] border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        style={{ boxShadow: '0 20px 60px -10px rgba(6, 182, 212, 0.25)' }}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#141a29] border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-cyan-400" />
            <h2 className="text-base font-mono font-bold text-white tracking-wide">
              KRISH_PATIL_RESUME.pdf
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-300 transition-colors text-xs font-mono flex items-center gap-1.5"
              title="Copy text"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              <span className="hidden sm:inline">Copy</span>
            </button>
            <button
              onClick={handleDownload}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-300 transition-colors text-xs font-mono flex items-center gap-1.5"
              title="Download text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </button>
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-300 transition-colors text-xs font-mono flex items-center gap-1.5"
              title="Print resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans text-sm">
          {/* Top Resume Header */}
          <div className="pb-6 border-b border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Krish Patil
                </h1>
                <p className="text-cyan-400 font-mono text-sm mt-1">
                  B.Tech Undergraduate • Aspiring Software Developer
                </p>
              </div>
              <div className="space-y-1.5 text-xs font-mono text-slate-300 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>krishppatil5471@gmail.com</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                  <a
                    href="https://www.linkedin.com/in/krish-patil-954696385/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-300 underline underline-offset-2"
                  >
                    linkedin.com/in/krish-patil-954696385
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  <a
                    href="https://github.com/KrishPatil-Reva"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-300 underline underline-offset-2"
                  >
                    github.com/KrishPatil-Reva
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>India • Available for Remote & Onsite</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase">
                Education
              </h3>
            </div>
            <div className="space-y-4 pl-4 border-l border-white/10">
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-white">
                    Bachelor of Technology (B.Tech) - Computer Science / IT
                  </h4>
                  <span className="text-xs font-mono text-cyan-300">
                    2023 - 2027 (Currently Pursuing)
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-2">
                  [University / College Name Placeholder • Edit with Institute Name]
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-slate-200">Key Coursework:</span>{' '}
                  Data Structures Foundations, Database Management Systems, Object-Oriented
                  Logic, Discrete Mathematics, Computer Architecture Basics.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-white">
                    Senior Secondary Education (Class XII - STEM)
                  </h4>
                  <span className="text-xs font-mono text-slate-400">Distinction</span>
                </div>
                <p className="text-xs text-slate-400">
                  Science • Physics, Chemistry, Mathematics
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FileCode className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase">
                Technical Proficiencies
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4 border-l border-white/10 text-xs">
              <div className="bg-[#121827] p-3 rounded-lg border border-white/5">
                <span className="font-bold text-white block mb-1">C Programming</span>
                <span className="text-slate-400">
                  Control structures, pointer arithmetic, memory management, foundational data structures.
                </span>
              </div>
              <div className="bg-[#121827] p-3 rounded-lg border border-white/5">
                <span className="font-bold text-white block mb-1">Python</span>
                <span className="text-slate-400">
                  Modular functional scripting, CLI tool development, data processing, file I/O pipelines.
                </span>
              </div>
              <div className="bg-[#121827] p-3 rounded-lg border border-white/5">
                <span className="font-bold text-white block mb-1">DBMS & SQL</span>
                <span className="text-slate-400">
                  Relational modeling, 3NF schema design, complex joins, stored routines, ACID guarantees.
                </span>
              </div>
              <div className="bg-[#121827] p-3 rounded-lg border border-white/5">
                <span className="font-bold text-white block mb-1">Developer Tooling</span>
                <span className="text-slate-400">
                  Git/GitHub version control, Linux command-line, VS Code, GCC compiler, MySQL Workbench.
                </span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <h3 className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase">
                Academic & Engineering Projects
              </h3>
            </div>
            <div className="space-y-4 pl-4 border-l border-white/10 text-xs">
              <div>
                <h4 className="font-bold text-white">
                  Personal Portfolio Website
                </h4>
                <p className="text-slate-300 leading-relaxed mt-1">
                  High-performance portfolio application built with responsive UX, dark terminal theme aesthetics, and interactive components showcasing code routines and academic credentials.
                </p>
                <span className="text-slate-400 font-mono text-[11px] mt-1 block">
                  Tech: HTML5, Tailwind CSS, JavaScript, Responsive Design
                </span>
              </div>

              <div>
                <h4 className="font-bold text-white">
                  DBMS / Database Design Project
                </h4>
                <p className="text-slate-300 leading-relaxed mt-1">
                  Normalized multi-table relational schema for academic management. Implemented primary/foreign key cascades, indexed lookups, and stored procedures.
                </p>
                <span className="text-slate-400 font-mono text-[11px] mt-1 block">
                  Tech: Relational SQL, ER Modeling, 3NF Normalization, MySQL
                </span>
              </div>

              <div>
                <h4 className="font-bold text-white">
                  Python Application & CLI Toolkit
                </h4>
                <p className="text-slate-300 leading-relaxed mt-1">
                  Structured command-line utility with streaming file parsing, robust exception handling, and tabular dataset formatting.
                </p>
                <span className="text-slate-400 font-mono text-[11px] mt-1 block">
                  Tech: Python 3, CLI Architecture, Data Parsing, Algorithms
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#141a29] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <span className="text-slate-400">Ready for 2026/2027 Engineering Opportunities</span>
          <button
            onClick={handleDownload}
            className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#0b0f19] font-bold font-mono transition-colors flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            DOWNLOAD RESUME
          </button>
        </div>
      </div>
    </div>
  );
};
