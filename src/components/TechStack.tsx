import React, { useState } from 'react';
import {
  NodeJsIcon,
  TypeScriptIcon,
  ExpressIcon,
  PostgresIcon,
  DockerIcon,
  GitIcon,
  GitHubIcon,
} from './TechIcons';
import { TECH_STACK, TechItem } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  const getTechIcon = (name: string) => {
    switch (name) {
      case 'Node.js':
        return <NodeJsIcon className="w-10 h-10 transition-transform group-hover:scale-110" />;
      case 'TypeScript':
        return <TypeScriptIcon className="w-10 h-10 transition-transform group-hover:scale-110" />;
      case 'Express.js':
        return <ExpressIcon className="w-10 h-10 transition-transform group-hover:scale-110" />;
      case 'PostgreSQL':
        return <PostgresIcon className="w-10 h-10 transition-transform group-hover:scale-110" />;
      case 'Docker':
        return <DockerIcon className="w-10 h-10 transition-transform group-hover:scale-110" />;
      case 'Git':
        return <GitIcon className="w-10 h-10 transition-transform group-hover:scale-110" />;
      case 'GitHub':
        return <GitHubIcon className="w-10 h-10 text-slate-200 transition-transform group-hover:scale-110" />;
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="py-14 border-y border-slate-800/80 bg-[#090d18]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Header */}
          <div className="shrink-0 lg:max-w-xs">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              My Tech Stack
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Technologies I work with
            </p>
          </div>

          {/* Tech List */}
          <div className="flex-1 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            <div className="flex items-center gap-6 sm:gap-8 min-w-max justify-start lg:justify-end">
              {TECH_STACK.map((tech) => (
                <button
                  key={tech.name}
                  onClick={() => setSelectedTech(selectedTech?.name === tech.name ? null : tech)}
                  className="group flex flex-col items-center gap-2.5 p-2 rounded-xl transition-all hover:bg-slate-800/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 text-left"
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    {getTechIcon(tech.name)}
                  </div>
                  <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Tech Detail Drawer / Tooltip */}
        {selectedTech && (
          <div className="mt-6 p-4 rounded-xl bg-[#0e1426] border border-blue-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                {getTechIcon(selectedTech.name)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-white text-sm">{selectedTech.name}</h4>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                    {selectedTech.category}
                  </span>
                  <span className="text-[11px] text-slate-400">· {selectedTech.experience}</span>
                </div>
                <p className="text-xs text-slate-300 mt-0.5">{selectedTech.description}</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedTech(null)}
              className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800/60 self-end sm:self-center"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
