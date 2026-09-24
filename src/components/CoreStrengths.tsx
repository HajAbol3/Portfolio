import React from 'react';
import { Code2, BookOpen, Users, Rocket } from 'lucide-react';
import { CORE_STRENGTHS } from '../data/portfolioData';

export const CoreStrengths: React.FC = () => {
  const getIcon = (iconName: string) => {
    const iconClass = 'w-6 h-6 text-blue-400';
    switch (iconName) {
      case 'code-xml':
        return <Code2 className={iconClass} />;
      case 'book-open':
        return <BookOpen className={iconClass} />;
      case 'users':
        return <Users className={iconClass} />;
      case 'rocket':
        return <Rocket className={iconClass} />;
      default:
        return <Code2 className={iconClass} />;
    }
  };

  return (
    <section id="about" className="py-20 bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_STRENGTHS.map((strength) => (
            <div
              key={strength.id}
              className="p-6 rounded-2xl bg-[#0d1322] border border-slate-800/90 hover:border-slate-700/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-600/15 group-hover:border-blue-500/40 transition-colors">
                  {getIcon(strength.icon)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight group-hover:text-blue-200 transition-colors">
                  {strength.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed">
                  {strength.description}
                </p>
              </div>

              {/* Extra practical detail */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[12px] text-slate-500">
                <span>{strength.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
