import React from 'react';

export const AsLogo: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="AS Monogram Logo"
  >
    <defs>
      <linearGradient id="as-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="50%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <path
      d="M10 38L22 10H26L38 38H31.5L29 31.5H19L16.5 38H10ZM20.7 26.5H27.3L24 16.8L20.7 26.5Z"
      fill="url(#as-gradient)"
      opacity="0.95"
    />
    <path
      d="M36 15C34.5 13.5 32 12.5 29.5 12.5C26 12.5 24 14.5 24 17C24 21 34 20.5 34 27C34 30.5 30.8 33 26 33C22.5 33 19.5 31.2 18 29.2L20.5 26.5C22 28 24 29.2 26.2 29.2C28.2 29.2 30 28.2 30 26.5C30 23.2 20 23 20 16.8C20 13 23.5 10 28.5 10C31.5 10 34.2 11.2 36 13L36 15Z"
      fill="#38bdf8"
      opacity="0.4"
      style={{ mixBlendMode: 'screen' }}
    />
  </svg>
);

export const NodeJsIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 2L3 9.5V22.5L16 30L29 22.5V9.5L16 2Z"
      fill="#539E43"
    />
    <path
      d="M16 4.3L5 10.7V21.3L16 27.7L27 21.3V10.7L16 4.3Z"
      fill="#333333"
      opacity="0.3"
    />
    <path
      d="M16 5.5L25 10.7V21.3L16 26.5L7 21.3V10.7L16 5.5Z"
      fill="#43853D"
    />
    <text
      x="16"
      y="18.5"
      textAnchor="middle"
      fontSize="7.5"
      fontWeight="700"
      fill="#FFFFFF"
      fontFamily="sans-serif"
    >
      node
    </text>
  </svg>
);

export const TypeScriptIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="4" fill="#3178C6" />
    <path
      d="M16.5 13H11V15H12.7V24H14.8V15H16.5V13ZM24.8 15.5C24.3 14.2 22.9 13 20.8 13C18.4 13 17 14.5 17 16.5C17 19.8 21.2 19.5 21.2 21.5C21.2 22.4 20.3 22.7 19.3 22.6C18 22.4 17.4 21.4 17.2 20.7L15.3 21.5C15.8 23.2 17.3 24.4 19.3 24.4C22.1 24.4 23.4 22.8 23.4 20.8C23.4 17.6 19.1 17.8 19.1 15.9C19.1 15.2 19.8 14.8 20.6 14.8C21.4 14.8 22.1 15.2 22.5 15.9L24.8 15.5Z"
      fill="#FFFFFF"
    />
  </svg>
);

export const ExpressIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <div className={`${className} rounded-full bg-[#1e293b] border border-slate-700/80 flex items-center justify-center text-white font-mono font-semibold text-xs tracking-tighter shadow-sm hover:border-slate-500 transition-colors`}>
    <span className="text-slate-200">ex</span>
  </div>
);

export const PostgresIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 2C8.27 2 2 8.27 2 16C2 23.73 8.27 30 16 30C23.73 30 30 23.73 30 16C30 8.27 23.73 2 16 2Z"
      fill="#336791"
    />
    <path
      d="M16.5 7C12.5 7 9.5 9.5 9.5 13C9.5 15.5 10.8 17.2 12.8 18.2C12.2 19.5 11.2 21 9.5 22C11.5 22.5 14 22 15.5 20.5C15.8 20.6 16.2 20.6 16.5 20.6C20.5 20.6 23.5 17.8 23.5 13.8C23.5 9.8 20.5 7 16.5 7Z"
      fill="#FFFFFF"
      opacity="0.9"
    />
    <circle cx="14" cy="12" r="1" fill="#336791" />
  </svg>
);

export const DockerIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="4" fill="#0db7ed" fillOpacity="0.1" />
    <path
      d="M28.5 15.5C28.1 15.5 27.5 15.8 27.2 16.2C26.5 15.2 25.4 14.7 24.2 14.8L23.8 14.8C23.5 13.5 22.6 12.7 21.5 12.5L20.8 12.4V14.5C20.8 14.7 20.7 14.9 20.5 14.9H19.5C18.5 14.9 17.5 14.2 17.5 13.2V8.5H15V11H12.5V8.5H10V11H7.5V11H5V13.5H7.5V16H5V18.5C5 22 8 24.5 13 24.5C19 24.5 24 21.5 25.5 17.5C26.5 17.5 27.5 17 28.5 16.2V15.5Z"
      fill="#2496ED"
    />
  </svg>
);

export const GitIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30.4 14.6L17.4 1.6C16.6 0.8 15.4 0.8 14.6 1.6L11.6 4.6L15.3 8.3C16.1 8 17.1 8.2 17.8 8.9C18.6 9.7 18.7 10.8 18.3 11.7L21.8 15.2C22.7 14.8 23.8 15 24.6 15.7C25.6 16.7 25.6 18.4 24.6 19.4C23.6 20.4 21.9 20.4 20.9 19.4C20.1 18.6 20 17.5 20.3 16.6L17 13.3V21.4C17.3 21.7 17.5 22.1 17.5 22.5C17.5 23.9 16.4 25 15 25C13.6 25 12.5 23.9 12.5 22.5C12.5 21.4 13.2 20.5 14.2 20.2V12.1C13.2 11.8 12.5 10.9 12.5 9.8C12.5 9.3 12.7 8.9 13 8.5L9.3 4.8L1.6 12.5C0.8 13.3 0.8 14.6 1.6 15.4L14.6 28.4C15.4 29.2 16.6 29.2 17.4 28.4L30.4 15.4C31.2 14.6 31.2 13.4 30.4 12.6V14.6Z"
      fill="#F05032"
    />
  </svg>
);

export const GitHubIcon: React.FC<{ className?: string }> = ({ className = 'w-10 h-10' }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2C8.27 2 2 8.27 2 16C2 22.19 6.02 27.43 11.6 29.29C12.3 29.42 12.56 28.99 12.56 28.62C12.56 28.29 12.55 27.4 12.54 26.24C8.65 27.09 7.83 24.37 7.83 24.37C7.19 22.75 6.27 22.32 6.27 22.32C5 21.45 6.37 21.47 6.37 21.47C7.77 21.57 8.51 22.91 8.51 22.91C9.76 25.05 11.78 24.43 12.58 24.07C12.71 23.16 13.07 22.54 13.47 22.19C10.37 21.84 7.1 20.64 7.1 15.3C7.1 13.78 7.64 12.54 8.53 11.57C8.39 11.22 7.91 9.8 8.67 7.88C8.67 7.88 9.84 7.51 12.5 9.31C13.61 9 14.81 8.85 16 8.84C17.19 8.85 18.39 9 19.5 9.31C22.16 7.51 23.33 7.88 23.33 7.88C24.09 9.8 23.61 11.22 23.47 11.57C24.36 12.54 24.9 13.78 24.9 15.3C24.9 20.66 21.62 21.83 18.51 22.18C19.01 22.61 19.46 23.46 19.46 24.77C19.46 26.65 19.44 28.17 19.44 28.62C19.44 29 19.69 29.43 20.41 29.29C25.98 27.42 30 22.18 30 16C30 8.27 23.73 2 16 2Z"
    />
  </svg>
);
