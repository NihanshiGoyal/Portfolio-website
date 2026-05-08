import React from 'react';
import { motion } from 'motion/react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 md:px-12 bg-[#F5F1EA]/80 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2"
      >
        <div className="flex gap-[2px] items-center">
          <div className="w-4 h-4 bg-black rounded-[2px]" />
          <div className="w-4 h-4 bg-black rounded-full" />
          <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-black" />
          <span className="ml-4 font-bold tracking-tighter text-lg">Nihanshi</span>
        </div>
      </motion.div>

      <div className="flex items-center gap-6 md:gap-10 text-xs uppercase tracking-widest font-medium">
        <a href="#work" className="hover:text-[#FF8A00] transition-colors relative group hidden sm:block">
          Work
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FF8A00] transition-all group-hover:w-full" />
        </a>
        <a href="#about" className="hover:text-[#FF8A00] transition-colors relative group hidden sm:block">
          About
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FF8A00] transition-all group-hover:w-full" />
        </a>
        <a href="#experience" className="hover:text-[#FF8A00] transition-colors relative group hidden sm:block">
          Experience
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FF8A00] transition-all group-hover:w-full" />
        </a>
        <a href="#resume" className="hover:text-[#FF8A00] transition-colors relative group flex items-center gap-1">
          Resume
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FF8A00] transition-all group-hover:w-full" />
        </a>
        <a href="#contact" className="px-5 py-2 bg-[#FF8A00] text-white rounded-full hover:bg-black transition-colors shadow-lg shadow-[#FF8A00]/20">
          Contact
        </a>
      </div>
    </nav>
  );
};
