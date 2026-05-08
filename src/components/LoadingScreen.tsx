import React from 'react';
import { motion } from 'motion/react';

interface LoadingScreenProps {
  progress: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] bg-[#F5F1EA] flex flex-col items-center justify-center p-12"
    >
      <div className="w-full max-w-md">
        <div className="flex justify-between items-end mb-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-[2px]"
          >
            <div className="w-4 h-4 bg-black rounded-[2px]" />
            <div className="w-4 h-4 bg-black rounded-full" />
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-black" />
          </motion.div>
          <span className="text-4xl font-bold tracking-tighter tabular-nums">
            {progress}%
          </span>
        </div>
        
        <div className="h-[2px] w-full bg-black/10 relative overflow-hidden">
          <motion.div 
            className="h-full bg-black absolute left-0 top-0"
            style={{ width: `${progress}%` }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          />
        </div>
        
        <div className="mt-8 overflow-hidden">
          <motion.p 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs uppercase tracking-[0.3em] font-bold opacity-30 text-center"
          >
            Initializing creative environment
          </motion.p>
        </div>
      </div>

      <div className="absolute bottom-12 left-12">
        <p className="text-[10px] uppercase tracking-widest opacity-20 transform -rotate-90 origin-left">
          Nihanshi Goyal Portfolio v1.0
        </p>
      </div>
    </motion.div>
  );
};
