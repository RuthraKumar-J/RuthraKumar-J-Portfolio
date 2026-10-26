import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  Code2, 
  Terminal, 
  Cpu, 
  Sparkles,
  Layers,
  ChevronDown
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'Github':
        return <Github className="w-4 h-4" />;
      case 'Linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'Mail':
        return <Mail className="w-4 h-4" />;
      case 'Code2':
        return <Code2 className="w-4 h-4" />;
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-16 md:py-36 flex flex-col justify-center items-center overflow-hidden bg-grid-pattern"
    >
      {/* Background Ambient Glow Orbs */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/15 to-violet-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none -z-10" 
        aria-hidden="true"
      />
      <div 
        className="absolute top-20 left-10 w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[90px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Dynamic Status Badge: Open to Work */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium shadow-sm shadow-emerald-500/20 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalData.availability}</span>
            </motion.div>

            {/* Catchy Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Hi, I'm{' '}
              <span className="text-gradient">
                {personalData.name}
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-200 mt-2 block">
                Full-Stack Developer & Hardware Enthusiast
              </span>
            </h1>

            {/* 2-Sentence Bio */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              {personalData.shortBio}
            </p>

            {/* Dual Call to Action */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
              {/* Primary CTA: View Projects */}
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA: Contact Me */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 hover:text-white transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect & Code:
              </span>
              <div className="flex items-center gap-2.5">
                {personalData.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-white/5 hover:border-cyan-500/30 transition-all duration-200 hover:-translate-y-0.5 shadow-sm group"
                    title={social.username}
                  >
                    {getSocialIcon(social.iconName)}
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: High-Tech Holographic Avatar Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[4/5] rounded-3xl p-1.5 bg-gradient-to-b from-cyan-500/40 via-indigo-500/20 to-transparent shadow-2xl shadow-cyan-500/10">
              
              {/* Inner Card Container */}
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-950 border border-white/10 flex flex-col">
                
                {/* Profile Photo */}
                <img 
                  src={personalData.profileImage}
                  alt={personalData.name}
                  className="w-full h-full object-cover object-center filter saturate-[1.08] hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback to high tech avatar illustration if image path is altered
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80";
                  }}
                />

                {/* Ambient Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

                {/* Bottom Overlay Card Info */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5" />
                        Full-Stack & Systems
                      </p>
                      <h2 className="text-sm font-bold text-white">
                        {personalData.name}
                      </h2>
                    </div>
                    <span className="px-2 py-1 text-[10px] font-mono rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-300">
                      B.E. ECE
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Interactive Micro-Badge 1: React & Frontend */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 shadow-lg shadow-cyan-500/10 flex items-center gap-2"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-mono font-medium text-slate-200">
                  React 18 + Vite
                </span>
              </motion.div>

              {/* Floating Interactive Micro-Badge 2: Hardware & IoT */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-indigo-500/30 shadow-lg shadow-indigo-500/10 flex items-center gap-2"
              >
                <Cpu className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-mono font-medium text-slate-200">
                  ESP32 & IoT Telemetry
                </span>
              </motion.div>

              {/* Floating Micro-Badge 3: High Performance */}
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="hidden sm:flex absolute top-1/2 -right-8 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-violet-500/30 shadow-lg flex-col text-[11px] font-mono text-violet-300"
              >
                <span className="text-slate-400 text-[9px] uppercase">Node & DB</span>
                <span>Sub-100ms API</span>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator Chevron */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, 'about')}
            className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors group cursor-pointer"
            aria-label="Scroll down to About section"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 group-hover:text-cyan-400">
              Explore
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
