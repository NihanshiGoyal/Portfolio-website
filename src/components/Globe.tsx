import React from 'react';

export const Globe: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
      <video 
        src="input_file_0.mp4"
        onError={(e) => {
          (e.target as HTMLVideoElement).src = "https://raw.githubusercontent.com/david-hckh/portfolio-next/main/public/globe-loop.mp4";
        }}
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover scale-110 blur-[2px]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1F1F1F] via-transparent to-[#1F1F1F]" />
    </div>
  );
};
