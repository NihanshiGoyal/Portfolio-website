import React, { useRef, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { useImagePreloader } from '../hooks/useImagePreloader';

interface HeroScrollProps {
  frames: string[];
}

export const HeroScroll: React.FC<HeroScrollProps> = ({ frames }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { images, loading } = useImagePreloader(frames);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 0.8], [0, frames.length - 1]);
  const canvasOpacity = useTransform(scrollYProgress, [0.7, 0.95], [1, 0]);
  const canvasScale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.8]);
  const canvasRotateX = useTransform(scrollYProgress, [0.8, 1], [0, -20]);
  const canvasY = useTransform(scrollYProgress, [0.8, 1], [0, -100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3], [1, 1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || loading || images.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId: number;

    const render = (index: number) => {
      const img = images[Math.floor(index)] || images[images.length - 1];
      if (!img) return;

      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;
      
      if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
      }

      const imgWidth = img.width;
      const imgHeight = img.height;
      const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
      const x = (canvasWidth / 2) - (imgWidth / 2) * scale;
      const y = (canvasHeight / 2) - (imgHeight / 2) * scale;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
    };

    const unsubscribe = frameIndex.on('change', (latest) => {
      rafId = requestAnimationFrame(() => render(latest));
    });

    // Initial render
    render(0);

    return () => {
      unsubscribe();
      cancelAnimationFrame(rafId);
    };
  }, [images, loading, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#F5F1EA] perspective-[1500px]">
        <motion.canvas 
          ref={canvasRef} 
          style={{ 
            opacity: canvasOpacity, 
            scale: canvasScale,
            rotateX: canvasRotateX,
            y: canvasY,
            transformZ: 0
          }}
          className="h-full w-full object-cover" 
        />
        
        <motion.div 
          style={{ opacity: textOpacity, scale: textScale, y: textY }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-6"
        >
          <div className="text-center">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 flex flex-col md:block">
              <span>Nihanshi</span> <span className="text-[#FF8A00]">Goyal</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-lg md:text-2xl text-[#1F1F1F]/40 font-medium tracking-tight">
              <span>B.Tech in IT</span>
              <span className="w-1 md:w-2 h-1 md:h-2 bg-[#FF8A00] rounded-full" />
              <span>Incoming Intern @ Barclays</span>
              <span className="w-1 md:w-2 h-1 md:h-2 bg-[#FF8A00] rounded-full" />
              <span>AI & ML Enthusiast</span>
            </div>

            <div className="mt-12 flex gap-4 justify-center pointer-events-auto">
              <a href="#work" className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-[#FF8A00] transition-colors">
                View Projects
              </a>
              <a href="#contact" className="px-8 py-3 bg-white border border-black/10 rounded-full font-bold hover:bg-[#F5F1EA] transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          style={{ opacity: textOpacity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30">Scroll Down</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-black to-transparent" />
        </motion.div>
      </div>
    </div>
  );
};
