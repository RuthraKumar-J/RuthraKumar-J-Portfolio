import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#090714] border-t border-violet-500/15 py-12 overflow-hidden text-slate-400">
      {/* Subtle top violet glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-violet-500/10">
          
          {/* Brand Logo - Just RK */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center p-[1px] shadow-md shadow-violet-500/20">
              <div className="w-full h-full bg-[#0d091e] rounded-[10px] flex items-center justify-center font-bold text-xs tracking-wider text-violet-200">
                RK
              </div>
            </div>
            <div>
              <span className="font-semibold text-white text-sm block">
                {personalData.name}
              </span>
              <span className="text-xs font-mono text-violet-400/80">
                {personalData.role}
              </span>
            </div>
          </div>

          {/* Quick Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-violet-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#140f29] hover:bg-[#1f173f] text-slate-300 hover:text-violet-300 border border-violet-500/20 text-xs font-mono transition-all hover:-translate-y-0.5 cursor-pointer shadow-sm group"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-violet-400" />
          </button>
        </div>

        {/* Bottom Credits & Contact reminder */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-3 text-slate-400 text-xs">
            <span>{personalData.location}</span>
            <span>•</span>
            <a href={`mailto:${personalData.email}`} className="hover:text-violet-300 transition-colors">
              {personalData.email}
            </a>
            <span>•</span>
            <a href={`tel:${personalData.phone}`} className="hover:text-violet-300 transition-colors">
              {personalData.phone}
            </a>
          </p>

          <div className="flex items-center gap-2 justify-center text-[11px] font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-slate-400">Available for hire</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
