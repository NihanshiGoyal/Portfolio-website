import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, ExternalLink, Eye } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-32 px-8 md:px-20 bg-[#243B7A] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-black uppercase tracking-[0.6em] text-[#FF8A00] mb-8">Curriculum Vitae</h2>
              <h3 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">
                READY TO <br />
                <span className="text-[#AFCDFF]">COLLABORATE?</span>
              </h3>
              <p className="text-xl text-white/60 leading-relaxed mb-12 max-w-md">
                Download my full resume to see a detailed breakdown of my technical skills, 
                academic record at Banasthali Vidyapith, and industrial experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="https://drive.google.com/file/d/1n5XQ0JxJ9CCcNFMydAYphRL7O8z00LSf/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-10 py-5 bg-[#FF8A00] text-white rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 shadow-2xl shadow-black/20"
                >
                  <Eye className="w-5 h-5" />
                  View Resume
                </a>
                <a 
                  href="https://drive.google.com/file/d/1n5XQ0JxJ9CCcNFMydAYphRL7O8z00LSf/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-10 py-5 border border-white/20 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all transform hover:-translate-y-1"
                >
                  <Download className="w-5 h-5" />
                  Download
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-white rounded-3xl p-8 shadow-2xl skew-y-3 transform-gpu hover:skew-y-0 transition-transform duration-700 overflow-hidden">
               {/* Abstract Resume Representation */}
               <div className="w-full h-full flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <div className="w-32 h-6 bg-[#243B7A]/10 rounded" />
                    <div className="w-12 h-12 bg-[#FF8A00]/20 rounded-full" />
                  </div>
                  <div className="w-full h-4 bg-[#243B7A]/5 rounded" />
                  <div className="w-3/4 h-4 bg-[#243B7A]/5 rounded" />
                  <div className="mt-12 space-y-4">
                    <div className="w-1/2 h-8 bg-[#243B7A] rounded" />
                    <div className="w-full h-2 bg-[#243B7A]/10 rounded" />
                    <div className="w-full h-2 bg-[#243B7A]/10 rounded" />
                    <div className="w-5/6 h-2 bg-[#243B7A]/10 rounded" />
                  </div>
                  <div className="mt-12 space-y-4 text-[#1F1F1F]/20 font-mono text-[8px] overflow-hidden whitespace-nowrap">
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div key={i}>0x{Math.random().toString(16).slice(2, 10).toUpperCase()} {" >> "} INTERNAL_FLUX_CAPACITOR_CONNECTED</div>
                    ))}
                  </div>
               </div>
               
               <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF8A00] rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
