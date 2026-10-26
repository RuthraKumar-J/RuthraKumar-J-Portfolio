import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Database, 
  Cpu, 
  Terminal, 
  CheckCircle, 
  Sparkles,
  GitBranch,
  Layers,
  Flame,
  Check
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Stack', icon: <Layers className="w-4 h-4" /> },
    { id: 'frontend', name: 'Frontend', icon: <Layout className="w-4 h-4" /> },
    { id: 'backend', name: 'Backend & DB', icon: <Database className="w-4 h-4" /> },
    { id: 'hardware', name: 'Hardware & IoT', icon: <Cpu className="w-4 h-4" /> },
    { id: 'tools', name: 'Tools & DevOps', icon: <Terminal className="w-4 h-4" /> }
  ];

  const filteredCategories = activeCategory === 'all' 
    ? skillsData.categories 
    : skillsData.categories.filter(cat => cat.id === activeCategory);

  const getLevelBadge = (level) => {
    switch (level) {
      case 'Expert':
        return 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10';
      case 'Advanced':
        return 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10';
      case 'Proficient':
        return 'border-indigo-500/30 text-indigo-300 bg-indigo-500/10';
      default:
        return 'border-slate-500/30 text-slate-300 bg-slate-500/10';
    }
  };

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Glows */}
      <div 
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Arsenal</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Technologies & Problem Solving Stack
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-slate-400 text-sm sm:text-base"
          >
            Battle-tested frameworks, modern web standards, and hardware toolchains I use to build scalable products.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/5 backdrop-blur-md shadow-xl">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 text-cyan-300 shadow-sm' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredCategories.map((category) => (
              <div 
                key={category.id}
                className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 group-hover:scale-105 transition-transform">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        {category.skills.length} core technologies
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-400 border border-white/5">
                    Production Stack
                  </span>
                </div>

                {/* Skill Chips / Badges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div 
                      key={sIdx}
                      whileHover={{ scale: 1.02 }}
                      className="p-3 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/25 transition-all duration-200 flex items-center justify-between group/chip"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-cyan-400/80 group-hover/chip:scale-125 transition-transform" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover/chip:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>

                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${getLevelBadge(skill.level)}`}>
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>

              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Callout: Current Exploration & Continuous Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-slate-900/60 to-indigo-950/30 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
              <Flame className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Currently Exploring & Experimenting
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Next.js 15 App Router, Rust for Embedded microservices, and Edge AI inference on microcontrollers.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-800/80 text-cyan-300 border border-cyan-500/30">
              Active Learner
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
