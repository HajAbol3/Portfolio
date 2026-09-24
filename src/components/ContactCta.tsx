import React from 'react';
import { Mail, ArrowRight, Linkedin } from 'lucide-react';
import { GitHubIcon } from './TechIcons';

interface ContactCtaProps {
  onOpenContact: () => void;
}

export const ContactCta: React.FC<ContactCtaProps> = ({ onOpenContact }) => {
  return (
    <section id="contact" className="py-16 bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0b1736] via-[#102454] to-[#0d1c42] border border-blue-800/40 p-8 sm:p-12 shadow-2xl shadow-blue-950/40">
          {/* Subtle wavy lines texture */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(ellipse at 80% 50%, rgba(56, 189, 248, 0.25) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Left Content */}
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-300 tracking-wide uppercase">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Let's Work Together</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Have a project in mind?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I'm always open to discussing new opportunities, collaborations or just a friendly chat.
              </p>
            </div>

            {/* Right Action & Socials */}
            <div className="flex flex-col sm:items-end gap-5 shrink-0">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Social Icons Row matching image */}
              <div className="flex items-center gap-4 text-slate-300">
                <a
                  href="https://github.com/abolfazlshahabi"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="p-2 rounded-full hover:bg-white/10 hover:text-white transition-colors"
                >
                  <GitHubIcon className="w-5 h-5" />
                </a>

                <a
                  href="https://linkedin.com/in/abolfazlshahabi"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-2 rounded-full hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="mailto:abolfazl.shahabi.dev@gmail.com"
                  aria-label="Send direct email"
                  className="p-2 rounded-full hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
