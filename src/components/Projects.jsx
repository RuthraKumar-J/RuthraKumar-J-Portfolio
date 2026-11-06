import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Cpu, 
  Layout, 
  Code2
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all'
    ? projectsData
    : projectsData.filter(p => {
        if (activeTab === 'web') return p.category === 'Web Development';
        if (activeTab === 'embedded') return p.category === 'Embedded & Hardware';
        return true;
      });

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-[#0c091b]">
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
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Key Projects & Technical Work</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Projects
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Hands-on engineering projects highlighted in my resume spanning full-stack web applications and real-time embedded sensor systems.
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
              All Projects
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'web'
                  ? 'bg-gradient-to-r from-violet-600/30 to-purple-600/30 border border-violet-500/40 text-violet-200 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layout className="w-3.5 h-3.5" />
              Web Development
            </button>
            <button
              onClick={() => setActiveTab('embedded')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeTab === 'embedded'
                  ? 'bg-gradient-to-r from-violet-600/30 to-purple-600/30 border border-violet-500/40 text-violet-200 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              Embedded & Hardware
            </button>
          </div>
        </div>

        {/* Vertical Timeline matching Academic Background section */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-violet-500/30 ml-3 sm:ml-6 space-y-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border-2 border-violet-400 bg-[#090714] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  </div>
                </div>

                {/* Project Card Container */}
                <div className="glass-card rounded-2xl p-6 sm:p-7 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300">
                  
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/25">
                          {project.category}
                        </span>
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 font-semibold">
                          {project.tagline}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    {/* Stack summary badge */}
                    <div className="flex items-center gap-1.5 text-xs font-mono text-violet-300 bg-[#161030] px-3 py-1.5 rounded-lg border border-violet-500/20 shrink-0">
                      <Code2 className="w-3.5 h-3.5 text-violet-400" />
                      <span>{project.id === 'instagram-clone' ? 'React.js + Tailwind' : 'Arduino + C'}</span>
                    </div>
                  </div>

                  {/* Project Overview Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key Highlights from Resume */}
                  <div className="space-y-2 mb-5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Key Technical Deliverables:
                    </span>
                    {project.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Deployed (Coursework-style tag chips) */}
                  <div className="mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                      Technologies & Methods:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tech, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-[#140f2a] text-slate-300 border border-violet-500/15"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Implementation Summary */}
                  <div className="p-3.5 rounded-xl bg-[#140f29] border border-violet-500/15 text-xs text-slate-300">
                    <span className="text-violet-300 font-semibold block mb-0.5">
                      Engineering Focus & Problem Solved:
                    </span>
                    <p className="leading-relaxed text-slate-400">
                      {project.problemSolved}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
