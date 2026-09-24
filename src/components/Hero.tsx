import React, { useState } from 'react';
import { ArrowUpRight, Download, Play, Check, Copy } from 'lucide-react';
import { GitHubIcon } from './TechIcons';

interface HeroProps {
  onViewProjects: () => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onViewProjects,
  onOpenResume,
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [serverOutput, setServerOutput] = useState<string[]>([]);

  const codeSnippet = `import { createServer } from 'http';
import app from './app';

const PORT = process.env.PORT || 3000;

createServer(app).listen(PORT, () => {
  console.log(\`🚀 Server running on port \${PORT}\`);
});`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setServerOutput(['$ ts-node src/server.ts', 'Compiling TypeScript modules...']);
    
    setTimeout(() => {
      setServerOutput((prev) => [
        ...prev,
        'Database connection pool established [PostgreSQL @ localhost:5432]',
      ]);
    }, 500);

    setTimeout(() => {
      setServerOutput((prev) => [
        ...prev,
        '🚀 Server running on port 3000',
        'Ready for incoming HTTP requests (GET /api/v1/health 200 OK)',
      ]);
      setIsRunning(false);
    }, 1200);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 right-1/4 -z-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 -z-10 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/80" />
              <span>Available for Junior Backend Developer roles</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-1">
              <p className="text-xl sm:text-2xl text-slate-300 font-medium tracking-tight">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Abolfazl{' '}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-indigo-300 bg-clip-text text-transparent">
                  Shahabi
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-slate-300 pt-1 tracking-tight">
                Junior Backend Developer
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
              I build scalable and maintainable backend applications using Node.js
              and TypeScript. Passionate about clean code, problem solving and continuous
              learning.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* View Projects Primary CTA */}
              <button
                onClick={onViewProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4f46e5] hover:bg-[#4338ca] text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* GitHub Button */}
              <a
                href="https://github.com/abolfazlshahabi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0e1424] hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 text-slate-200 font-medium text-sm transition-all duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <GitHubIcon className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>

              {/* Download Resume Button */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0e1424] hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 text-slate-200 font-medium text-sm transition-all duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Download className="w-4 h-4 text-slate-300" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Code Terminal Window with Ambient Glow & Dotted Matrix */}
          <div className="lg:col-span-5 relative">
            {/* Dotted Grid Pattern Behind Card */}
            <div
              className="absolute -top-6 -right-6 w-56 h-56 opacity-25 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            />

            {/* Glowing Orb Behind Card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 -z-10" />

            {/* Terminal Window Card */}
            <div className="relative rounded-2xl bg-[#080d1a]/95 border border-slate-800/90 shadow-2xl backdrop-blur-md overflow-hidden">
              {/* Window Header */}
              <div className="px-4 py-3 bg-[#0c1222] border-b border-slate-800/80 flex items-center justify-between">
                {/* Traffic Light Dots */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm" />
                  <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                    server.ts
                  </span>
                </div>

                {/* Terminal Actions */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleRunSimulation}
                    disabled={isRunning}
                    className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded transition-colors"
                    title="Simulate node server execution"
                  >
                    <Play className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                    <span>Run</span>
                  </button>

                  <button
                    onClick={handleCopy}
                    className="p-1 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 rounded transition-colors"
                    title="Copy code snippet"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-200">
                <div className="space-y-1">
                  <div>
                    <span className="text-purple-400">import</span>{' '}
                    <span className="text-slate-300">{'{'}</span>{' '}
                    <span className="text-cyan-400">createServer</span>{' '}
                    <span className="text-slate-300">{'}'}</span>{' '}
                    <span className="text-purple-400">from</span>{' '}
                    <span className="text-emerald-400">'http'</span>
                    <span className="text-slate-400">;</span>
                  </div>

                  <div>
                    <span className="text-purple-400">import</span>{' '}
                    <span className="text-cyan-400">app</span>{' '}
                    <span className="text-purple-400">from</span>{' '}
                    <span className="text-emerald-400">'./app'</span>
                    <span className="text-slate-400">;</span>
                  </div>

                  <div className="py-2">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-300">PORT</span>{' '}
                    <span className="text-slate-400">=</span>{' '}
                    <span className="text-slate-200">process.env.</span>
                    <span className="text-blue-300">PORT</span>{' '}
                    <span className="text-purple-400">||</span>{' '}
                    <span className="text-amber-300">3000</span>
                    <span className="text-slate-400">;</span>
                  </div>

                  <div>
                    <span className="text-cyan-400">createServer</span>
                    <span className="text-slate-300">(app).</span>
                    <span className="text-yellow-400">listen</span>
                    <span className="text-slate-300">(</span>
                    <span className="text-blue-300">PORT</span>
                    <span className="text-slate-300">, () =&gt; {'{'}</span>
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-300">console.</span>
                    <span className="text-yellow-400">log</span>
                    <span className="text-slate-300">(</span>
                    <span className="text-emerald-400">`🚀 Server running on port $&#123;</span>
                    <span className="text-blue-300">PORT</span>
                    <span className="text-emerald-400">&#125;`</span>
                    <span className="text-slate-300">);</span>
                  </div>

                  <div>
                    <span className="text-slate-300">{'}'});</span>
                  </div>
                </div>

                {/* Simulated Server Console Output */}
                {serverOutput.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono space-y-1 text-slate-300 bg-black/40 -mx-5 -mb-5 p-3 rounded-b-xl">
                    <div className="text-slate-400 flex items-center justify-between">
                      <span>Server Console Log:</span>
                      <button
                        onClick={() => setServerOutput([])}
                        className="text-[10px] text-slate-500 hover:text-slate-300 underline"
                      >
                        clear
                      </button>
                    </div>
                    {serverOutput.map((line, idx) => (
                      <div
                        key={idx}
                        className={
                          line.includes('🚀')
                            ? 'text-emerald-400 font-semibold'
                            : line.startsWith('$')
                            ? 'text-slate-400'
                            : 'text-blue-300'
                        }
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
