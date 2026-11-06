import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  Zap
} from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative w-full max-w-2xl bg-[#120d29] border border-violet-500/30 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-violet-500/20 flex items-start justify-between bg-[#0e0922]">
            <div>
              <span className={`text-xs font-mono px-3 py-1 rounded-full border ${project.badgeColor} uppercase tracking-wider`}>
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-violet-300 font-mono mt-0.5">
                {project.tagline}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-[#1a133b] hover:bg-[#251b54] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto space-y-5">
            
            {/* Overview & Problem Solved */}
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                  Project Overview
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-violet-950/30 border border-violet-500/25">
                <h4 className="text-xs font-mono uppercase tracking-wider text-violet-300 mb-1.5 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  Engineering Implementation
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.problemSolved}
                </p>
              </div>
            </div>

            {/* Resume Highlights */}
            {project.highlights && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Key Technical Deliverables
                </h4>
                <div className="space-y-2">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#161033] border border-violet-500/15 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Performance Metrics */}
            {project.metrics && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Core Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#161033] border border-violet-500/15 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="text-xs font-semibold text-slate-200">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack List */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                Technologies Deployed
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t, i) => (
                  <span 
                    key={i} 
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#1c1540] text-violet-200 border border-violet-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="p-5 border-t border-violet-500/20 bg-[#0e0922] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-md shadow-violet-600/25 transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View on GitHub</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
