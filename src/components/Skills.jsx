import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Database, 
  Cpu, 
  Terminal, 
  Layers, 
  BookOpen,
  Sparkles
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: <Layers className="w-4 h-4" /> },
    { id: 'frontend', name: 'Frontend', icon: <Layout className="w-4 h-4" /> },
    { id: 'backend', name: 'Backend & DB', icon: <Database className="w-4 h-4" /> },
    { id: 'hardware', name: 'Hardware & Embedded', icon: <Cpu className="w-4 h-4" /> },
    { id: 'tools', name: 'Tools & Methods', icon: <Terminal className="w-4 h-4" /> }
  ];

  const filteredCategories = activeCategory === 'all' 
    ? skillsData.categories 
    : skillsData.categories.filter(cat => cat.id === activeCategory);

  const getLevelBadge = (level) => {
    switch (level) {
      case 'Proficient':
        return 'border-violet-500/40 text-violet-200 bg-violet-500/15';
      case 'Hands-on':
        return 'border-purple-500/40 text-purple-200 bg-purple-500/15';
      case 'Practical':
        return 'border-indigo-500/40 text-indigo-200 bg-indigo-500/15';
      default:
        return 'border-slate-500/30 text-slate-300 bg-slate-500/10';
    }
  };

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-violet-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-purple-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-violet-300" />;
      default:
        return <Code2 className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-[#090714]">
      {/* Background Glows */}
      <div 
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Stack & Tools
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Core technologies and development methodologies utilized across frontend web apps, databases, and embedded systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-[#140f29] border border-violet-500/20 shadow-lg">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-gradient-to-r from-violet-600/30 to-purple-600/30 border border-violet-500/40 text-violet-200 shadow-sm' 
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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredCategories.map((category) => (
              <div 
                key={category.id}
                className="glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-violet-500/15">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#181135] border border-violet-500/25">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        {category.skills.length} core competencies
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                    Verified
                  </span>
                </div>

                {/* Skill Chips Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-3 rounded-xl bg-[#120d26]/80 border border-violet-500/15 hover:border-violet-500/35 transition-all flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                        <span className="text-xs sm:text-sm font-medium text-slate-200">
                          {skill.name}
                        </span>
                      </div>

                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${getLevelBadge(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Learning Focus Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-[#130f29] border border-violet-500/25 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-300 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Continuous Learning & Skill Expansion
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Currently diving deeper into Next.js, TypeScript, cloud deployments, and clean software architecture patterns.
              </p>
            </div>
          </div>

          <span className="px-3 py-1.5 rounded-xl text-xs font-mono bg-violet-500/20 text-violet-200 border border-violet-500/30 shrink-0">
            Entry-Level Ready
          </span>
        </div>

      </div>
    </section>
  );
}
