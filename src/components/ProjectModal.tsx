import React, { useState } from 'react';
import { X, CheckCircle, ExternalLink, Code, Layers, Server, Play, Copy, Check } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { GitHubIcon } from './TechIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [selectedEndpointIndex, setSelectedEndpointIndex] = useState(0);
  const [testResult, setTestResult] = useState<string | null>(null);
  const [isCalling, setIsCalling] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const currentEndpoint = project.endpoints[selectedEndpointIndex] || project.endpoints[0];

  const handleSimulateApiCall = () => {
    setIsCalling(true);
    setTestResult(null);

    setTimeout(() => {
      let mockPayload = {};
      if (currentEndpoint.path.includes('login')) {
        mockPayload = {
          success: true,
          accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
          expiresIn: 3600,
          user: { id: 'usr_8921', role: 'developer', name: 'Abolfazl' },
        };
      } else if (currentEndpoint.path.includes('products')) {
        mockPayload = {
          total: 48,
          page: 1,
          limit: 10,
          data: [
            { id: 'prd_01', name: 'Serverless Worker License', price: 29.99, stock: 140 },
            { id: 'prd_02', name: 'PostgreSQL Cloud Replica', price: 89.00, stock: 12 },
          ],
        };
      } else if (currentEndpoint.path.includes('availability')) {
        mockPayload = {
          date: '2026-09-24',
          provider: 'Dr. Shahabi Service',
          slots: ['09:00 - 10:00', '10:30 - 11:30', '14:00 - 15:00'],
          cachedInRedis: true,
        };
      } else {
        mockPayload = {
          status: 'success',
          timestamp: new Date().toISOString(),
          endpoint: currentEndpoint.path,
          latency: '24ms',
          data: { message: currentEndpoint.desc },
        };
      }

      setTestResult(JSON.stringify(mockPayload, null, 2));
      setIsCalling(false);
    }, 400);
  };

  const handleCopyEndpoint = () => {
    navigator.clipboard.writeText(`${currentEndpoint.method} ${currentEndpoint.path}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getMethodBadge = (method: string) => {
    switch (method) {
      case 'GET':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'POST':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'PUT':
      case 'PATCH':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'DELETE':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0d1322] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-slate-200">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#080d19] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
              {project.category}
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Project Overview
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.fullDescription}
            </p>
            {project.metrics && (
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Performance: {project.metrics}</span>
              </div>
            )}
          </div>

          {/* Architecture Highlights */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>Architectural Highlights & Engineering Decisions</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.architectureHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2.5"
                >
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive API Endpoints Explorer */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Server className="w-4 h-4 text-cyan-400" />
              <span>Key API Endpoints & Request Simulator</span>
            </h4>

            {/* Endpoints List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
              {project.endpoints.map((ep, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedEndpointIndex(idx);
                    setTestResult(null);
                  }}
                  className={`p-2.5 rounded-lg text-left text-xs font-mono flex items-center justify-between border transition-all ${
                    selectedEndpointIndex === idx
                      ? 'bg-blue-600/15 border-blue-500/50 text-white'
                      : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold border ${getMethodBadge(ep.method)}`}>
                      {ep.method}
                    </span>
                    <span className="truncate">{ep.path}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Endpoint Card */}
            <div className="p-4 rounded-xl bg-black/60 border border-slate-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2 font-mono">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${getMethodBadge(currentEndpoint.method)}`}>
                    {currentEndpoint.method}
                  </span>
                  <span className="text-slate-200 font-semibold">{currentEndpoint.path}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEndpoint}
                    className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
                    title="Copy Endpoint"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={handleSimulateApiCall}
                    disabled={isCalling}
                    className="flex items-center gap-1.5 px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{isCalling ? 'Sending...' : 'Test Request'}</span>
                  </button>
                </div>
              </div>

              <p className="text-xs text-slate-400 italic">
                {currentEndpoint.desc}
              </p>

              {testResult && (
                <div className="mt-3 pt-3 border-t border-slate-800 font-mono text-xs">
                  <div className="text-[11px] text-emerald-400 mb-1 font-semibold flex items-center justify-between">
                    <span>HTTP 200 OK (Simulated REST Response)</span>
                    <span className="text-slate-500 text-[10px]">Content-Type: application/json</span>
                  </div>
                  <pre className="p-3 rounded-lg bg-[#060a14] border border-slate-800 text-slate-300 text-[11px] leading-relaxed overflow-x-auto">
                    {testResult}
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
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
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#080d19] border-t border-slate-800 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
          >
            <GitHubIcon className="w-4 h-4 text-white" />
            <span>View Source on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
