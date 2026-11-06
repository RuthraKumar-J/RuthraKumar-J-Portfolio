import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  FileText, 
  ChevronDown
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Hero() {
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
      className="relative min-h-[92vh] pt-28 pb-16 md:py-32 flex flex-col justify-center items-center overflow-hidden bg-grid-pattern"
    >
      {/* Soft Ambient Violet Glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-violet-600/15 via-purple-600/10 to-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" 
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-purple-700/10 rounded-full blur-[100px] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & Information */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Status Badge: Open for Entry Level Roles */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs sm:text-sm font-medium shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Entry-Level & Full-Time Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient">
                  {personalData.name}
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-violet-200/90">
                Full-Stack Web Developer
              </p>
              <p className="text-sm font-mono text-violet-400/90">
                B.E. Electronics & Communication Engineering • 8.3 CGPA
              </p>
            </div>

            {/* Professional Summary */}
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              {personalData.shortBio}
            </p>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 bg-[#17122f] px-3 py-1.5 rounded-lg border border-violet-500/15">
                <MapPin className="w-3.5 h-3.5 text-violet-400" />
                <span>{personalData.location}</span>
              </div>
              <a 
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-1.5 bg-[#17122f] hover:bg-[#201942] px-3 py-1.5 rounded-lg border border-violet-500/15 hover:border-violet-500/30 transition-colors text-slate-300 hover:text-white"
              >
                <Mail className="w-3.5 h-3.5 text-violet-400" />
                <span>{personalData.email}</span>
              </a>
              <a 
                href={`tel:${personalData.phone}`}
                className="flex items-center gap-1.5 bg-[#17122f] hover:bg-[#201942] px-3 py-1.5 rounded-lg border border-violet-500/15 hover:border-violet-500/30 transition-colors text-slate-300 hover:text-white"
              >
                <Phone className="w-3.5 h-3.5 text-violet-400" />
                <span>{personalData.phone}</span>
              </a>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2 w-full sm:w-auto">
              {/* Primary CTA: View Projects */}
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-600/30 hover:shadow-violet-600/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA: Contact Me */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-violet-200 bg-[#16112e] hover:bg-[#1f1742] border border-violet-500/30 hover:border-violet-400/60 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm cursor-pointer"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span>Contact Me</span>
              </a>

              {/* Secondary: Resume preview */}
              <a
                href="#education"
                onClick={(e) => handleScrollTo(e, 'education')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-violet-950/30 border border-white/10 hover:border-violet-500/30 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-violet-400" />
                <span>Qualifications</span>
              </a>
            </div>

            {/* Social channels */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Profiles:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#140f2a] hover:bg-[#1e173d] text-slate-300 hover:text-violet-300 border border-violet-500/15 transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#140f2a] hover:bg-[#1e173d] text-slate-300 hover:text-violet-300 border border-violet-500/15 transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalData.email}`}
                  className="p-2 rounded-lg bg-[#140f2a] hover:bg-[#1e173d] text-slate-300 hover:text-violet-300 border border-violet-500/15 transition-all"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Clean Professional Profile Image (No text content) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-72 sm:w-80 md:w-88 aspect-[4/5] rounded-3xl p-1.5 bg-gradient-to-b from-violet-500/30 via-purple-500/20 to-violet-900/10 shadow-2xl shadow-violet-950/40">
              {/* Inner Card Container */}
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#100c22] border border-violet-500/20">
                {/* Profile Photo */}
                <img 
                  src={personalData.profileImage}
                  alt={personalData.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/profile.png";
                  }}
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex justify-center">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, 'about')}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-violet-300 transition-colors group cursor-pointer"
            aria-label="Scroll down to About section"
          >
            <span className="text-xs font-mono tracking-wider text-slate-400 group-hover:text-violet-300">
              Scroll down
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-violet-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
