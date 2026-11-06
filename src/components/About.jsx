import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Code, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  GraduationCap, 
  Languages, 
  Award,
  Sparkles
} from 'lucide-react';
import { personalData, languagesData, certificationsData } from '../data/portfolioData';

export default function About() {
  const coreCompetencies = [
    {
      title: "Frontend Engineering",
      desc: "Building responsive, modular, and accessible single-page web applications using React.js, Tailwind CSS, and modern JavaScript (ES6+).",
      icon: <Layers className="w-5 h-5 text-violet-400" />
    },
    {
      title: "Backend & RESTful Services",
      desc: "Architecting backend routes, connecting Express.js servers with MongoDB databases, and integrating robust RESTful APIs.",
      icon: <Code className="w-5 h-5 text-purple-400" />
    },
    {
      title: "Embedded Systems & Hardware",
      desc: "Combining optical blink, SpO2, and temperature sensors with Arduino microcontrollers and Embedded C logic for real-time alerts.",
      icon: <Cpu className="w-5 h-5 text-indigo-400" />
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-[#0c091b]">
      {/* Background Soft Violet Accents */}
      <div 
        className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[130px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[130px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            An aspiring Full-Stack Web Developer with a solid foundation in electronics, web frameworks, and algorithmic problem solving.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl relative border border-violet-500/20">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>Professional Background</span>
                <Sparkles className="w-4 h-4 text-violet-400" />
              </h3>

              <div className="space-y-3.5 text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalData.aboutParagraphs.map((para, idx) => (
                  <p key={idx} className="font-light">
                    {para}
                  </p>
                ))}
              </div>

              {/* Key Quick Facts */}
              <div className="mt-6 pt-6 border-t border-violet-500/15 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>College: <strong className="text-white">MRK Institute of Technology</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>Degree: <strong className="text-white">B.E. ECE (8.3 CGPA)</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>Location: <strong className="text-white">Tamil Nadu, India</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0" />
                  <span>Availability: <strong className="text-emerald-400">Immediate Hire</strong></span>
                </div>
              </div>
            </div>

            {/* Core Competencies Cards */}
            <div className="grid grid-cols-1 gap-3.5">
              {coreCompetencies.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl bg-[#140f29]/80 border border-violet-500/15 hover:border-violet-500/35 transition-all flex items-start gap-3.5 group"
                >
                  <div className="p-2 rounded-lg bg-violet-950/60 border border-violet-500/25 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-violet-200 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Key Stats & Languages & Certification */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* 4 Stats Cards */}
            <div className="grid grid-cols-2 gap-3.5">
              {personalData.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="glass-card p-4 sm:p-5 rounded-2xl flex flex-col justify-between border border-violet-500/20 hover:border-violet-400/40 transition-all"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-purple-300 font-mono">
                    {stat.value}
                  </span>
                  
                  <div className="mt-2.5">
                    <h4 className="text-xs font-semibold text-white">
                      {stat.label}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Languages Card from Resume */}
            <div className="glass-card p-5 rounded-2xl border border-violet-500/20">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Languages className="w-4 h-4 text-violet-400" />
                <span>Languages</span>
              </h3>

              <div className="space-y-3">
                {languagesData.map((lang, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-medium text-slate-200">{lang.language}</span>
                      <span className="text-[11px] font-mono text-violet-300">{lang.proficiency}</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1b143a] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
                        style={{ width: `${lang.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certification Card from Resume */}
            <div className="glass-card p-5 rounded-2xl border border-violet-500/20">
              <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-violet-400" />
                <span>Certifications</span>
              </h3>

              {certificationsData.map((cert, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#140f29] border border-violet-500/15">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-semibold text-white">
                      {cert.title}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                      {cert.grade}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
