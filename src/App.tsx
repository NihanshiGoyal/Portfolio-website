/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroScroll } from './components/HeroScroll';
import { PlaneMorph } from './components/PlaneMorph';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SmoothScroll } from './components/SmoothScroll';
import { ResumeSection } from './components/ResumeSection';
import { LoadingScreen } from './components/LoadingScreen';
import { useImagePreloader } from './hooks/useImagePreloader';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import profileImage from '/profile.jpeg';

// Generating mock frame paths (Using external images as fallback if local ones don't exist)
const heroFrames = Array.from({ length: 30 }, (_, i) => 
  `https://raw.githubusercontent.com/david-hckh/portfolio-next/main/public/sequence-1/${(i + 1).toString().padStart(3, '0')}.webp`
);

const morphFrames = Array.from({ length: 30 }, (_, i) => 
  `https://raw.githubusercontent.com/david-hckh/portfolio-next/main/public/sequence-2/${(i + 1).toString().padStart(3, '0')}.webp`
);

const allFrames = [...heroFrames, ...morphFrames];

export default function App() {
  const { loading, progress } = useImagePreloader(allFrames);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!loading) {
      // Small delay for smooth transition
      const timer = setTimeout(() => setShowContent(true), 500);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <SmoothScroll>
      <AnimatePresence mode="wait">
        {!showContent && <LoadingScreen progress={progress} />}
      </AnimatePresence>

      <main className={`relative bg-[#F5F1EA] selection:bg-[#FF8A00] selection:text-white ${!showContent ? 'h-screen overflow-hidden' : ''} perspective-[1000px]`}>
        <Navbar />
        
        {/* Global Background Video */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]">
          <video 
            src="input_file_0.mp4"
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Section with Canvas Scroll */}
        <section className="relative z-0">
          <HeroScroll frames={heroFrames} />
        </section>

        {/* Info Section with 3D Reveal */}
        <motion.section 
          id="about"
          initial={{ opacity: 0, rotateX: 10, y: 100 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 py-48 px-8 md:px-20 bg-white"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-12">
                SHAPING THE <br />
                <span className="text-[#FF8A00] italic">FUTURE</span> <br />
                OF FINTECH.
              </h2>
              <div className="flex gap-8 items-start">
                <div className="w-px h-24 bg-black/10 mt-2" />
                <p className="text-xl md:text-2xl text-[#1F1F1F]/70 leading-relaxed max-w-md font-medium">
                  Computer Science undergraduate at Banasthali Vidyapith. I focus on AI-driven solutions for fraud detection, regulatory automation, and high-volume financial data processing.
                </p>
              </div>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[4/5] bg-[#ECE7DE] rounded-3xl overflow-hidden relative z-10 shadow-2xl"
              >
                <div className="relative aspect-[4/5] bg-[#ECE7DE] rounded-3xl overflow-hidden z-10 shadow-2xl">
                  <img 
                    src="profile.jpeg" 
                    alt="Nihanshi Goyal"
                    className="w-full h-full object-cover hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-10">
                    <div className="flex flex-col">
                      <p className="text-white text-xs uppercase tracking-[0.3em] font-bold mb-1">Incoming Intern</p>
                      <p className="text-[#FF8A00] text-lg font-bold">Barclays India @ 2027</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Parallax Background Shape */}
              <motion.div 
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-10 -right-10 w-64 h-64 bg-[#FF8A00]/10 rounded-full blur-3xl -z-0"
              />
            </div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <section id="experience" className="bg-white py-32 px-8 md:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <h2 className="text-sm font-black uppercase tracking-[0.6em] text-[#FF8A00]">Professional Journey</h2>
              <a 
                href="#resume"
                className="text-xs font-bold uppercase tracking-widest px-6 py-2 border border-black/10 rounded-full hover:bg-black hover:text-white transition-all"
              >
                View Full CV
              </a>
            </div>
            <div className="space-y-24">
              {[
                {
                  role: "Incoming Software Engineering Intern",
                  company: "Barclays India",
                  period: "2027 Program",
                  description: "Selected via competitive Hack-O-Hire process. Will focus on high-volume financial data processing, fraud detection pipelines, and exposure to AML compliance systems and risk analytics.",
                  color: "bg-[#243B7A]",
                  details: ["Hack-O-Hire Finalist", "Scalable Architectures", "Financial Backend"]
                },
                {
                  role: "Freelance Technical Lead",
                  company: "Independent Projects",
                  period: "2024 - Present",
                  description: "Architecting and delivering full-stack solutions for various clients. Specialized in automated workflows and AI integration for productivity tools (ThinkDesk AI).",
                  color: "bg-[#FF8A00]",
                  details: ["Workflow Automation", "AI Integration", "Full-Stack"]
                }
              ].map((exp, i) => (
                <motion.div 
                  key={exp.role}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-[1fr_2fr] gap-12 items-start"
                >
                  <div>
                    <span className="text-sm font-mono opacity-30">{exp.period}</span>
                    <h3 className="text-3xl font-bold mt-2">{exp.company}</h3>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.details.map(detail => (
                        <span key={detail} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-[#F5F1EA] rounded-full opacity-60">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative pl-12 border-l border-black/5">
                    <div className={`absolute top-0 left-0 w-2 h-2 rounded-full -translate-x-1/2 ${exp.color}`} />
                    <h4 className="text-xl font-medium mb-4">{exp.role}</h4>
                    <p className="text-lg text-[#1F1F1F]/60 max-w-xl">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section with Scroll Animation */}
        <section className="bg-white py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { count: "8.25", label: "B.Tech CGPA", color: "text-[#FF8A00]" },
                { count: "91.4", label: "CBSE XII %", color: "text-black" },
                { count: "03", label: "MAJOR PROJECTS", color: "text-black" }
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="flex flex-col items-center justify-center py-16 bg-[#F5F1EA] rounded-3xl"
                >
                  <span className={`text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-4 ${stat.color}`}>
                    {stat.count}
                  </span>
                  <p className="text-xs md:text-sm uppercase tracking-[0.5em] font-black opacity-20">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div id="achievements" className="mt-40">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 gap-0"
              >
                {[
                  { title: "Smart India Hackathon (Internal Round) Winner", year: "2025" },
                  { title: "Ideathon, MSC BV Winner", year: "2024" },
                  { title: "Mayukh Pixel Play Winner", year: "2024" },
                  { title: "HackCelestia National Hackathon Participant", year: "2026" }
                ].map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex justify-between items-center py-8 border-b border-black/5 group cursor-default"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-sm font-mono opacity-20">0{i+1}</span>
                      <span className="text-2xl md:text-4xl font-medium group-hover:translate-x-4 transition-transform duration-500">{item.title}</span>
                    </div>
                    <span className="text-sm font-bold opacity-30 px-4 py-1 border border-black/10 rounded-full">{item.year}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-[#F5F1EA]">
          <Projects />
        </section>

        {/* Resume Section */}
        <ResumeSection />

        {/* Feature Section with Secondary Scroll */}
        <PlaneMorph frames={morphFrames} />

        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <Contact />

        {/* Footer with Globe Animation */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}

