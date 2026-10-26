import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Sparkles, 
  Code, 
  Cpu, 
  Rocket, 
  CheckCircle2, 
  Terminal,
  Award,
  Layers
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function About() {
  const principles = [
    {
      title: "Full-Stack Craftsmanship",
      desc: "Delivering unified products from pixel-perfect UI interactions to robust database queries and RESTful microservices.",
      icon: <Layers className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Hardware-to-Cloud Integration",
      desc: "Leveraging an ECE background to interface microcontrollers (ESP32/Arduino) with real-time web telemetry & MQTT brokers.",
      icon: <Cpu className="w-5 h-5 text-indigo-400" />
    },
    {
      title: "Performance & DX First",
      desc: "Obsessed with clean code maintainability, zero-CLS web ergonomics, responsive design, and rapid build times.",
      icon: <Rocket className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/50">
      {/* Background Accent Gradients */}
      <div 
        className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[130px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[130px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <User className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Bridging High-Level Code with Low-Level Reality
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-slate-400 text-sm sm:text-base"
          >
            A look into who I am, how I build software, and the foundation driving my technical career.
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative Bio & Principles */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Bio Card */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>The Engineering Philosophy</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalData.aboutParagraphs.map((para, idx) => (
                  <p key={idx} className="font-light">
                    {para}
                  </p>
                ))}
              </div>

              {/* Key Quick Facts */}
              <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Location: <strong className="text-white">{personalData.location}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Degree: <strong className="text-white">B.E. Electronics (Honors)</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Primary Focus: <strong className="text-white">React, Node, IoT Telemetry</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Status: <strong className="text-emerald-400">Open for Full-Time Roles</strong></span>
                </div>
              </div>
            </div>

            {/* Core Value Cards */}
            <div className="grid grid-cols-1 gap-4">
              {principles.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 flex items-start gap-3.5 group"
                >
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-white/5 group-hover:scale-110 transition-transform shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Quick Stats Grid & Interactive Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* 4 Stats Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personalData.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="glass-card p-5 rounded-2xl flex flex-col justify-between hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-bl-3xl pointer-events-none" />
                  
                  <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-mono tracking-tight group-hover:scale-105 transition-transform origin-left">
                    {stat.value}
                  </span>
                  
                  <div className="mt-3">
                    <h4 className="text-sm font-semibold text-white">
                      {stat.label}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Terminal / Developer Mindset Preview */}
            <div className="rounded-2xl bg-slate-950 border border-white/10 shadow-2xl overflow-hidden font-mono text-xs">
              
              {/* Terminal Window Header */}
              <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>developer@arun-os:~</span>
                </div>
                <span className="text-[10px] text-slate-500">bash</span>
              </div>

              {/* Terminal Content */}
              <div className="p-4 space-y-2 text-slate-300 bg-[#060b18]">
                <p className="text-slate-500"># Querying developer profile specifications</p>
                
                <p>
                  <span className="text-cyan-400">$</span> <span className="text-amber-300">cat</span> developer_profile.json
                </p>
                
                <div className="text-slate-400 pl-2 border-l border-cyan-500/30 space-y-1 text-[11px]">
                  <p>&#123;</p>
                  <p className="pl-4">
                    <span className="text-cyan-300">"candidate"</span>: <span className="text-emerald-300">"{personalData.name}"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-300">"education"</span>: <span className="text-emerald-300">"B.E. ECE (First Class Distinction)"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-300">"stack"</span>: [
                    <span className="text-amber-300">"React"</span>, 
                    <span className="text-amber-300">"Node.js"</span>, 
                    <span className="text-amber-300">"MongoDB"</span>, 
                    <span className="text-amber-300">"ESP32"</span>
                    ],
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-300">"mindset"</span>: <span className="text-emerald-300">"Fast execution, clean code, scalable architecture"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-300">"availableImmediately"</span>: <span className="text-purple-400">true</span>
                  </p>
                  <p>&#125;</p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-emerald-400">
                  <span>✔ Profile verified: Ready to create impact</span>
                </div>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
