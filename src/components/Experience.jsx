import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award,
  BookOpen,
  Languages,
  Sparkles,
  FileCheck
} from 'lucide-react';
import { educationData, certificationsData, languagesData } from '../data/portfolioData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'education', 'certifications'

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-[#090714]">
      {/* Background Soft Violet Glow */}
      <div 
        className="absolute top-1/4 left-10 w-96 h-96 bg-violet-600/5 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background & Credentials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Qualifications
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Academic achievements, technical coursework, and certifications from my resume.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#140f29] border border-violet-500/20 shadow-lg">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-violet-600/30 to-purple-600/30 border border-violet-500/40 text-violet-200 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Credentials
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-violet-600/30 to-purple-600/30 border border-violet-500/40 text-violet-200 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Degrees
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'certifications'
                  ? 'bg-gradient-to-r from-violet-600/30 to-purple-600/30 border border-violet-500/40 text-violet-200 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              Certifications & Skills
            </button>
          </div>
        </div>

        {/* Vertical Timeline for Education */}
        <div className="space-y-8">
          
          {/* Education Degrees */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div className="relative pl-6 sm:pl-8 border-l-2 border-violet-500/30 ml-3 sm:ml-6 space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full border-2 border-violet-400 bg-[#090714] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    </div>
                  </div>

                  {/* Card Container */}
                  <div className="glass-card rounded-2xl p-6 sm:p-7 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300">
                    
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/25">
                            {edu.period}
                          </span>
                          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold">
                            {edu.grade}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                          {edu.degree}
                        </h3>

                        <h4 className="text-sm font-semibold text-slate-300 mt-0.5">
                          {edu.institution}
                        </h4>
                      </div>

                      {/* Location Badge */}
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-[#161030] px-3 py-1 rounded-lg border border-violet-500/15">
                        <MapPin className="w-3.5 h-3.5 text-violet-400" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    {/* Coursework */}
                    {edu.coursework && (
                      <div className="mb-4">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                          Key Subjects & Foundations:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.coursework.map((course, cIdx) => (
                            <span 
                              key={cIdx} 
                              className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#140f2a] text-slate-300 border border-violet-500/15"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Highlights */}
                    {edu.highlights && (
                      <div className="space-y-1.5 pt-2 border-t border-violet-500/10">
                        {edu.highlights.map((high, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <Sparkles className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                            <span>{high}</span>
                          </div>
                        ))}
                      </div>
                    )}

                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications & Languages Grid (Visible when 'all' or 'certifications') */}
          {(activeTab === 'all' || activeTab === 'certifications') && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* Typewriting Certification Card */}
              <div className="glass-card rounded-2xl p-6 border border-violet-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-300 border border-violet-500/25">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Technical Certification</h3>
                    <p className="text-xs text-slate-400 font-mono">Government Approved</p>
                  </div>
                </div>

                {certificationsData.map((cert, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#140f29] border border-violet-500/15 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white text-sm">{cert.title}</span>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-200 border border-violet-500/30">
                        {cert.grade}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Language Proficiencies Card */}
              <div className="glass-card rounded-2xl p-6 border border-violet-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/25">
                    <Languages className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Languages Known</h3>
                    <p className="text-xs text-slate-400 font-mono">Resume Specification</p>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {languagesData.map((lang, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#140f29] border border-violet-500/15 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-violet-400" />
                        <span className="text-sm font-semibold text-white">{lang.language}</span>
                      </div>
                      <span className="text-xs font-mono text-violet-300 px-2.5 py-0.5 rounded-md bg-violet-500/10 border border-violet-500/20">
                        {lang.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
