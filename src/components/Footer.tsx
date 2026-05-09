import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Globe } from './Globe';

export const Footer: React.FC = () => {
  return (
    <footer className="relative min-h-[70vh] w-full bg-[#1F1F1F] text-white flex flex-col justify-between p-8 md:p-20 overflow-hidden">
      {/* Background visual element */}
      <Globe />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end w-full">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-medium tracking-tight mb-12"
          >
            LET'S CRAFT SOMETHING <span className="text-[#FF8A00]">UNIQUE</span>
          </motion.h2>

          <div className="flex flex-col gap-4">
            <a href="mailto:nihanshigoyal11@gmail.com" className="group flex items-center gap-4 text-xl md:text-2xl hover:text-[#FF8A00] transition-colors">
              <Mail className="w-6 h-6" />
              <span>nihanshigoyal11@gmail.com</span>
              <div className="h-[1px] w-0 group-hover:w-full bg-[#FF8A00] transition-all duration-500" />
            </a>
          </div>
        </div>

        <div className="flex gap-6 mt-12 md:mt-0">
          <a href="https://github.com/NihanshiGoyal" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/nihanshi-goyal-416485324/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="relative z-10 pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest opacity-50 gap-4">
        <p>© 2026 NIHANSHI GOYAL. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
