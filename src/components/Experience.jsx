import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Award,
  Sparkles 
} from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'work', 'education'

  const workItems = experienceData.map(item => ({ ...item, sectionType: 'work' }));
  const eduItems = educationData.map(item => ({ ...item, sectionType: 'education' }));

  let combinedTimeline = [];
  if (activeTab === 'work') {
    combinedTimeline = workItems;
  } else if (activeTab === 'education') {
    combinedTimeline = eduItems;
  } else {
    // Interleave or combine chronologically
    combinedTimeline = [...workItems, ...eduItems];
  }

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background glow effects */}
      <div 
        className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Timeline & Milestones</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Experience & Academic Foundation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-slate-400 text-sm sm:text-base"
          >
            My engineering trajectory through internships, production teams, and rigorous academic training.
          </motion.p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900/90 border border-white/5 shadow-xl">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 text-cyan-300 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'work'
                  ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 text-cyan-300 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              Work & Internships
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 text-cyan-300 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Education & Degrees
            </button>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12">
          
          <AnimatePresence>
            {combinedTimeline.map((item, index) => {
              const isWork = item.sectionType === 'work';

              return (
                <motion.div
                  key={`${item.sectionType}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Glowing Milestone Dot */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-125 ${
                      isWork 
                        ? 'border-cyan-400 bg-slate-950 shadow-lg shadow-cyan-500/30' 
                        : 'border-indigo-400 bg-slate-950 shadow-lg shadow-indigo-500/30'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${isWork ? 'bg-cyan-400' : 'bg-indigo-400'}`} />
                    </div>
                  </div>

                  {/* Card Container */}
                  <div className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden group-hover:border-cyan-500/30 transition-all duration-300">
                    
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                            isWork 
                              ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' 
                              : 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20'
                          }`}>
                            {isWork ? (item.badge || 'Internship') : 'Academic Degree'}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {isWork ? item.role : item.degree}
                        </h3>

                        <h4 className="text-sm font-semibold text-slate-300">
                          {isWork ? item.company : item.institution}
                        </h4>
                      </div>

                      {/* Period & Location Badge */}
                      <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-white/5">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                      {item.description}
                    </p>

                    {/* Work Achievements Bullets */}
                    {isWork && item.achievements && (
                      <div className="space-y-2 mb-5">
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Academic Coursework & Highlights */}
                    {!isWork && (
                      <div className="space-y-4 mb-5">
                        {item.grade && (
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                            <Award className="w-4 h-4" />
                            <span>{item.grade}</span>
                          </div>
                        )}

                        {item.coursework && (
                          <div>
                            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                              Relevant Coursework:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {item.coursework.map((course, cIdx) => (
                                <span 
                                  key={cIdx} 
                                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900 text-slate-300 border border-white/5"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {item.highlights && (
                          <div className="space-y-1.5 pt-2">
                            {item.highlights.map((high, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                                <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                                <span>{high}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Tech Stack Tags for work items */}
                    {isWork && item.technologies && (
                      <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] font-mono uppercase text-slate-500 mr-1">
                          Stack Used:
                        </span>
                        {item.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 text-cyan-300/90 border border-cyan-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
