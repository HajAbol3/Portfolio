import React, { useState } from 'react';
import { X, Briefcase, GraduationCap, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES, EDUCATION } from '../data/portfolioData';

interface ExperienceEducationModalProps {
  isOpen: boolean;
  initialTab?: 'experience' | 'education';
  onClose: () => void;
}

export const ExperienceEducationModal: React.FC<ExperienceEducationModalProps> = ({
  isOpen,
  initialTab = 'experience',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#0d1424] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-slate-200">
        {/* Header with Tabs */}
        <div className="px-6 py-4 bg-[#080d19] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 p-1 bg-slate-900 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                activeTab === 'experience'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Work Experience</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'experience' ? (
            <div className="space-y-6">
              <p className="text-xs text-slate-400">
                Professional software engineering track focused on Node.js, TypeScript, and microservice backend systems:
              </p>

              <div className="space-y-6">
                {EXPERIENCES.map((exp, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 relative pl-6 border-l-4 border-l-blue-500"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h3 className="font-bold text-white text-base">{exp.role}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-blue-400 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3 font-medium">
                      <span>{exp.company}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                      {exp.summary}
                    </p>

                    <div className="space-y-1.5">
                      <span className="text-[11px] font-semibold uppercase text-slate-400">Key Contributions:</span>
                      {exp.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-xs text-slate-400">
                Academic foundations and specialized industry certifications:
              </p>

              <div className="space-y-4">
                {EDUCATION.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 border-l-4 border-l-indigo-500"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-bold text-white text-base">{edu.degree}</h3>
                      <span className="text-xs text-indigo-400 font-mono">{edu.period}</span>
                    </div>

                    <div className="text-xs text-slate-300 font-semibold">{edu.institution}</div>

                    <p className="text-xs text-slate-400 leading-relaxed pt-1">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#080d19] border-t border-slate-800 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
