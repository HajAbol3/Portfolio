import React, { useState } from 'react';
import { ShoppingCart, Calendar, LayoutDashboard, ArrowRight, Shield, Database, ExternalLink } from 'lucide-react';
import { GitHubIcon } from './TechIcons';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  const getProjectIcon = (iconName: string) => {
    const iconClass = 'w-6 h-6 text-white';
    switch (iconName) {
      case 'shopping-cart':
        return <ShoppingCart className={iconClass} />;
      case 'calendar':
        return <Calendar className={iconClass} />;
      case 'layout-dashboard':
        return <LayoutDashboard className={iconClass} />;
      case 'shield':
        return <Shield className={iconClass} />;
      case 'database':
        return <Database className={iconClass} />;
      default:
        return <LayoutDashboard className={iconClass} />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#080d19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-1">
              Real-world projects built with modern technologies
            </p>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1"
          >
            <span>{showAll ? 'Show less' : 'View all projects'}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#0d1322] border border-slate-800/90 hover:border-slate-700/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/30 flex flex-col justify-between p-6 group"
            >
              <div>
                {/* Top Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-500/30 flex items-center justify-center mb-5 shadow-sm group-hover:bg-blue-600/40 transition-colors">
                  {getProjectIcon(project.icon)}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-200 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Pills (Matching the design in image) */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/60 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/btn focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors py-1 px-2 rounded-lg hover:bg-slate-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <GitHubIcon className="w-4 h-4 text-slate-400" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
