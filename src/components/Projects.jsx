import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  Cpu, 
  Sparkles, 
  Activity,
  CheckCircle2,
  Maximize2
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filterOptions = ['All', 'Full-Stack & IoT', 'Full-Stack', 'Frontend', 'Hardware & Systems'];

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedFilter);

  // High-fidelity Mockup Visual Generator
  const renderProjectVisual = (project) => {
    switch (project.id) {
      case 'omnipulse':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-[#070d1e] text-slate-200 font-mono text-[11px] select-none">
            {/* Mock Header */}
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-cyan-400 font-bold">OmniPulse Live Telemetry</span>
              </div>
              <span className="text-[10px] text-slate-500">broker.mqtt://99.8%</span>
            </div>
            
            {/* Mock Telemetry Waves */}
            <div className="my-2 space-y-2">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-slate-400">ESP32 Node #04 (Temp/Hum)</span>
                <span className="text-emerald-400 font-bold">24.6°C / 58% RH</span>
              </div>
              <div className="h-10 w-full flex items-end gap-1.5 pt-1 px-1 bg-slate-900/60 rounded-lg border border-white/5">
                {[40, 65, 30, 85, 45, 90, 75, 60, 95, 70, 80, 50, 92].map((val, i) => (
                  <div 
                    key={i} 
                    style={{ height: `${val}%` }} 
                    className="flex-1 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-sm opacity-80"
                  />
                ))}
              </div>
            </div>

            {/* Mock Footer Status */}
            <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/5 pt-2">
              <span>WebSockets: ACTIVE</span>
              <span className="text-cyan-300">Packet delay: 18ms</span>
            </div>
          </div>
        );

      case 'devforge':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-[#0b0c16] text-slate-200 font-mono text-[11px] select-none">
            <div className="flex items-center justify-between border-b border-violet-500/20 pb-2">
              <span className="text-violet-400 font-bold">devforge / snippets / auth.ts</span>
              <span className="text-[10px] text-slate-500">JWT • 256-bit</span>
            </div>

            <div className="space-y-1 text-[10.5px] leading-relaxed text-slate-400 my-2">
              <p><span className="text-violet-400">export const</span> <span className="text-amber-300">verifySession</span> = (token) =&gt; &#123;</p>
              <p className="pl-3 text-slate-500">// instant fuzzy search across 1,000+ snippets</p>
              <p className="pl-3"><span className="text-cyan-400">const</span> payload = <span className="text-indigo-300">jwt.decode</span>(token);</p>
              <p className="pl-3 text-emerald-400">return payload.isValid ? payload : null;</p>
              <p>&#125;;</p>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/5 pt-2">
              <span className="text-violet-300">Fuzzy Search: Ready</span>
              <span>100% Type Safe</span>
            </div>
          </div>
        );

      case 'auracommerce':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-[#081216] text-slate-200 font-sans text-xs select-none">
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
              <span className="font-bold text-emerald-400">AuraStore • Headless UI</span>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">98+ Lighthouse</span>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2">
              <div className="p-2 rounded-lg bg-slate-900/90 border border-white/5 flex flex-col gap-1">
                <div className="w-full h-8 rounded bg-gradient-to-r from-emerald-600/30 to-teal-600/30 flex items-center justify-center font-mono text-[10px] text-emerald-300">Product A</div>
                <div className="flex justify-between items-center text-[10px]">
                  <span className="font-semibold text-white">$120</span>
                  <span className="text-emerald-400">In Cart (1)</span>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/90 border border-white/5 flex flex-col gap-1">
                <div className="w-full h-8 rounded bg-gradient-to-r from-cyan-600/30 to-blue-600/30 flex items-center justify-center font-mono text-[10px] text-cyan-300">Product B</div>
                <div className="flex justify-between items-center text-[10px]">
                  <span className="font-semibold text-white">$45</span>
                  <span className="text-slate-400">Added</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/5 pt-2">
              <span>Optimistic Cart Updates</span>
              <span className="text-emerald-400">0ms UI Lag</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-[#150d06] text-slate-200 font-mono text-[11px] select-none">
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-2">
              <span className="text-amber-400 font-bold">EcoSense Hardware Telemetry</span>
              <span className="text-[10px] text-amber-300">COM3: 115200 BAUD</span>
            </div>
            
            <div className="my-2 p-2.5 rounded-lg bg-slate-900/80 border border-white/5 text-[10px] text-slate-300 space-y-1">
              <div className="flex justify-between">
                <span>AC Voltage:</span>
                <span className="text-amber-400 font-bold">230.4 V</span>
              </div>
              <div className="flex justify-between">
                <span>Current Draw:</span>
                <span className="text-amber-400 font-bold">3.24 A</span>
              </div>
              <div className="flex justify-between">
                <span>Power Factor:</span>
                <span className="text-emerald-400 font-bold">0.96 (Optimal)</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-white/5 pt-2">
              <span>Logging to MySQL</span>
              <span className="text-amber-300">±1.5% Precision</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/80">
      {/* Background radial gradient */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-b from-cyan-600/5 via-indigo-600/5 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Engineered for Scale, Speed & Usability
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-slate-400 text-sm sm:text-base"
          >
            Select end-to-end full-stack applications, real-time IoT architectures, and high-performance UI systems.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-white/5 backdrop-blur-md shadow-xl">
            {filterOptions.map((filter) => {
              const isActive = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 text-cyan-300 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col group shadow-xl hover:shadow-cyan-500/10"
              >
                {/* Visual Mockup Container */}
                <div className="relative h-52 sm:h-56 w-full border-b border-white/10 overflow-hidden bg-slate-950">
                  {renderProjectVisual(project)}

                  {/* Gradient Light Shimmer on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {/* Category Pill on top left */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono border backdrop-blur-md ${project.badgeColor}`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Quick View Button on top right */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="absolute top-3 right-3 z-10 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 backdrop-blur-md transition-all shadow-md cursor-pointer"
                    title="View Architecture Details"
                    aria-label={`View ${project.title} architecture`}
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title & Tagline */}
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cyan-400 font-mono mt-1 mb-3">
                      {project.tagline}
                    </p>

                    {/* Brief Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-light">
                      {project.description}
                    </p>

                    {/* Problem Solved Highlight */}
                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 mb-5">
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        <span>The Challenge & Solution</span>
                      </h4>
                      <p className="text-xs text-slate-300 leading-normal">
                        {project.problemSolved}
                      </p>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Live Demo */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-cyan-500/10 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 border border-cyan-500/30 transition-all duration-200"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      {/* GitHub Repository */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-all duration-200"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    </div>

                    {/* Case Study Details trigger */}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Deep Dive</span>
                      <span>&rarr;</span>
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
