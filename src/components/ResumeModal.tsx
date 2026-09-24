import React, { useState } from 'react';
import { X, Download, Printer, Copy, Check, Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';
import { EXPERIENCES, EDUCATION, TECH_STACK } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTextResume = () => {
    const textContent = `ABOLFAZL SHAHABI - JUNIOR BACKEND DEVELOPER
Email: abolfazl.shahabi.dev@gmail.com | GitHub: https://github.com/abolfazlshahabi
LinkedIn: https://linkedin.com/in/abolfazlshahabi

SUMMARY:
Passionate Junior Backend Developer specializing in scalable, secure RESTful APIs and microservices using Node.js and TypeScript. Strong foundation in relational data modeling (PostgreSQL), caching layers (Redis), and containerization (Docker).

CORE SKILLS:
- Languages & Runtimes: TypeScript, JavaScript (ES6+), Node.js
- Frameworks: Express.js, NestJS
- Databases & ORM: PostgreSQL, Redis, Prisma, TypeORM
- Tools & DevOps: Docker, Docker Compose, Git, GitHub Actions, Linux
- Testing & Docs: Jest, Supertest, Swagger/OpenAPI

WORK EXPERIENCE:
${EXPERIENCES.map(
  (exp) => `* ${exp.role} | ${exp.company} (${exp.period})
  ${exp.summary}
  Key Achievements:
  ${exp.achievements.map((a) => `  - ${a}`).join('\n')}`
).join('\n\n')}

EDUCATION:
${EDUCATION.map(
  (edu) => `* ${edu.degree} - ${edu.institution} (${edu.period})
  ${edu.description}`
).join('\n\n')}
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Abolfazl_Shahabi_Resume.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyMarkdown = () => {
    const md = `# Abolfazl Shahabi - Junior Backend Developer
- **Email:** abolfazl.shahabi.dev@gmail.com
- **GitHub:** https://github.com/abolfazlshahabi
- **Stack:** Node.js, TypeScript, Express, PostgreSQL, Docker, Redis

## Experience
${EXPERIENCES.map((e) => `### ${e.role} - ${e.company} (${e.period})\n${e.summary}`).join('\n\n')}

## Education
${EDUCATION.map((ed) => `### ${ed.degree} - ${ed.institution} (${ed.period})`).join('\n\n')}
`;
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0d1424] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-slate-200">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#080d19] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-white tracking-tight">
              Curriculum Vitae (CV) - Abolfazl Shahabi
            </h2>
            <span className="hidden sm:inline-block text-xs px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Verified Static Document
            </span>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Print CV or Save as PDF"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={handleCopyMarkdown}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Copy as Markdown"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>

            <button
              onClick={handleDownloadTextResume}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Body */}
        <div className="p-8 overflow-y-auto space-y-8 bg-[#0a0f1d] text-slate-300 font-sans print:bg-white print:text-black print:p-0">
          {/* Header & Contact */}
          <div className="border-b border-slate-800/80 pb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-tight print:text-black">
              Abolfazl Shahabi
            </h1>
            <p className="text-base font-semibold text-blue-400 mt-1">
              Junior Backend Developer | Node.js & TypeScript
            </p>
            <p className="text-xs text-slate-400 mt-3 leading-relaxed max-w-2xl">
              Backend engineer passionate about scalable REST APIs, reliable database design, and microservices architecture. Dedicated to writing clean, maintainable, and type-safe code with automated test coverage.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                abolfazl.shahabi.dev@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                github.com/abolfazlshahabi
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                Tehran (Available for Remote Worldwide)
              </span>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3 print:text-black">
              Core Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#0e1529] border border-slate-800/80">
                <span className="font-semibold text-white">Languages & Runtimes:</span>
                <p className="text-slate-400 mt-1">TypeScript, Node.js, JavaScript (ES6+), SQL, Bash</p>
              </div>
              <div className="p-3 rounded-xl bg-[#0e1529] border border-slate-800/80">
                <span className="font-semibold text-white">Frameworks & Libraries:</span>
                <p className="text-slate-400 mt-1">Express.js, NestJS, Prisma ORM, TypeORM, Zod</p>
              </div>
              <div className="p-3 rounded-xl bg-[#0e1529] border border-slate-800/80">
                <span className="font-semibold text-white">Databases & Caching:</span>
                <p className="text-slate-400 mt-1">PostgreSQL, Redis (Key-Value & Pub/Sub), MongoDB</p>
              </div>
              <div className="p-3 rounded-xl bg-[#0e1529] border border-slate-800/80">
                <span className="font-semibold text-white">DevOps & Tooling:</span>
                <p className="text-slate-400 mt-1">Docker, Docker Compose, Git, GitHub Actions, Linux, Postman/Swagger</p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 print:text-black">
              Work Experience
            </h3>
            <div className="space-y-5">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-blue-500/40 pl-4 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-white text-sm print:text-black">{exp.role}</span>
                    <span className="text-slate-400 font-mono">{exp.period}</span>
                  </div>
                  <div className="text-xs text-blue-400 font-medium">{exp.company} · {exp.location}</div>
                  <p className="text-xs text-slate-300">{exp.summary}</p>
                  <ul className="list-disc list-inside text-xs text-slate-400 space-y-1 pt-1">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 print:text-black">
              Education & Certifications
            </h3>
            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#0e1529] border border-slate-800/80 text-xs">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-white text-sm">{edu.degree}</h4>
                    <span className="text-slate-400 font-mono">{edu.period}</span>
                  </div>
                  <p className="text-blue-400 mt-0.5">{edu.institution}</p>
                  <p className="text-slate-400 mt-1.5 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#080d19] border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Static resume document ready for PDF export & GitHub hosting
          </span>
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
