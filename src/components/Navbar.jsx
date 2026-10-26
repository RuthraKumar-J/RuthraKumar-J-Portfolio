import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  FileText, 
  Terminal, 
  ExternalLink 
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section spy
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-6xl transition-all duration-300 ${
          scrolled 
            ? 'glass-nav rounded-2xl shadow-2xl py-3 px-5 sm:px-6' 
            : 'bg-slate-950/40 backdrop-blur-md rounded-2xl border border-white/5 py-4 px-5 sm:px-6'
        }`}
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            aria-label="Back to top"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-mono font-bold text-cyan-400 group-hover:text-white transition-colors">
                &lt;AK/&gt;
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">
                {personalData.name}
              </span>
              <span className="block text-xs font-mono text-slate-400">
                Full-Stack & IoT
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'text-cyan-300' 
                      : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Actions: Social icons & Resume button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalData.socials.find(s => s.name === 'GitHub')?.url || 'https://github.com'}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-all border border-transparent hover:border-white/10"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalData.socials.find(s => s.name === 'LinkedIn')?.url || 'https://linkedin.com'}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-all border border-transparent hover:border-white/10"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalData.resumeUrl}
              onClick={(e) => {
                if (personalData.resumeUrl === '#resume') {
                  e.preventDefault();
                  alert("Resume preview: Arun Kumar - B.E. ECE Full-Stack Developer. Replace resumeUrl in portfolioData.js with your Google Drive or PDF link!");
                }
              }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-sans shadow-md shadow-cyan-500/25 transition-all hover:scale-105"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={personalData.resumeUrl}
              onClick={(e) => {
                if (personalData.resumeUrl === '#resume') {
                  e.preventDefault();
                  alert("Resume: Arun Kumar - Full-Stack Developer & Hardware Enthusiast");
                }
              }}
              className="px-2.5 py-1 text-xs font-medium rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
            >
              Resume
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-white/10 focus:outline-none"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-2"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-slate-900/80 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-cyan-500/60">&gt;</span>
                </a>
              ))}

              <div className="flex items-center gap-3 pt-3 mt-1 border-t border-white/5 px-2">
                <a
                  href={personalData.socials.find(s => s.name === 'GitHub')?.url || 'https://github.com'}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href={personalData.socials.find(s => s.name === 'LinkedIn')?.url || 'https://linkedin.com'}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
