import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  FileText, 
  Mail,
  ChevronRight
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
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
      const sections = ['about', 'skills', 'projects', 'education', 'contact'];
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
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-6xl transition-all duration-300 ${
          scrolled 
            ? 'glass-nav rounded-2xl shadow-xl shadow-purple-950/20 py-3 px-5 sm:px-6' 
            : 'bg-[#100c22]/70 backdrop-blur-md rounded-2xl border border-violet-500/15 py-3.5 px-5 sm:px-6'
        }`}
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo - Just RK */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
            aria-label="Ruthra Kumar J - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center p-[1px] shadow-md shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow">
              <div className="w-full h-full bg-[#0d091e] rounded-[11px] flex items-center justify-center font-bold text-sm tracking-wider text-violet-200 group-hover:text-white transition-colors">
                RK
              </div>
            </div>
            <div>
              <span className="font-semibold text-slate-100 group-hover:text-violet-300 transition-colors block text-sm sm:text-base leading-tight">
                {personalData.name}
              </span>
              <span className="text-[11px] font-mono text-violet-400/80">
                Full-Stack Web Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#15102c]/80 p-1.5 rounded-full border border-violet-500/15 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'text-violet-200 font-semibold' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gradient-to-r from-violet-600/30 to-purple-600/30 border border-violet-500/40 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Actions: Social icons & Resume button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl text-slate-400 hover:text-violet-300 hover:bg-violet-950/40 transition-all border border-transparent hover:border-violet-500/20"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl text-slate-400 hover:text-violet-300 hover:bg-violet-950/40 transition-all border border-transparent hover:border-violet-500/20"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalData.email}`}
              aria-label="Send Email"
              className="p-2 rounded-xl text-slate-400 hover:text-violet-300 hover:bg-violet-950/40 transition-all border border-transparent hover:border-violet-500/20"
              title={personalData.email}
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalData.resumeUrl === '#resume' ? '#education' : personalData.resumeUrl}
              onClick={(e) => {
                if (personalData.resumeUrl === '#resume' || personalData.resumeUrl === '#education') {
                  handleNavClick(e, '#education');
                }
              }}
              target={personalData.resumeUrl?.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-md shadow-violet-600/25 transition-all hover:scale-105"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={personalData.resumeUrl === '#resume' ? '#education' : personalData.resumeUrl}
              onClick={(e) => {
                if (personalData.resumeUrl === '#resume' || personalData.resumeUrl === '#education') {
                  handleNavClick(e, '#education');
                }
              }}
              target={personalData.resumeUrl?.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-violet-600/20 text-violet-300 border border-violet-500/30"
            >
              Resume
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-[#15102c] border border-violet-500/20 focus:outline-none"
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
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 pt-3 border-t border-violet-500/15 flex flex-col gap-1.5"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-violet-300 hover:bg-[#1a1435] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-violet-400" />
                </a>
              ))}

              <div className="flex items-center gap-3 pt-3 mt-1 border-t border-violet-500/10 px-2">
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-violet-300"
                >
                  <Mail className="w-3.5 h-3.5 text-violet-400" /> {personalData.email}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
