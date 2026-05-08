import React, { useRef, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { useImagePreloader } from '../hooks/useImagePreloader';

interface PlaneMorphProps {
  frames: string[];
}

export const PlaneMorph: React.FC<PlaneMorphProps> = ({ frames }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { images, loading } = useImagePreloader(frames);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frames.length - 1]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || loading || images.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = (index: number) => {
      const img = images[Math.floor(index)];
      if (!img) return;

      const canvasWidth = canvas.clientWidth;
      const canvasHeight = canvas.clientHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const imgWidth = img.width;
      const imgHeight = img.height;
      const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
      const x = (canvasWidth / 2) - (imgWidth / 2) * scale;
      const y = (canvasHeight / 2) - (imgHeight / 2) * scale;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
    };

    const unsubscribe = frameIndex.on('change', (latest) => {
      render(latest);
    });

    render(0);

    return () => unsubscribe();
  }, [images, loading, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-[#1F1F1F]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-8 md:p-20 overflow-hidden">
        <div className="relative w-full h-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-white/10">
          <canvas ref={canvasRef} className="w-full h-full object-cover grayscale brightness-75" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-white text-center">
            <motion.h2 
              style={{ opacity: scrollYProgress }}
              className="text-4xl md:text-6xl font-medium tracking-tight"
            >
              TRANSFORMING <span className="text-[#FF8A00]">DATA</span> <br />
              INTO IMPACT
            </motion.h2>
          </div>
        </div>
      </div>
    </div>
  );
};
