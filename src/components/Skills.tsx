import React from 'react';
import { motion } from 'motion/react';
import { Code2, Hash, Brain, Shield, Palette, PenTool, MessageSquare, Lightbulb } from 'lucide-react';

const skills = [
  { name: 'C++', icon: Code2 },
  { name: 'Python', icon: Hash },
  { name: 'JavaScript', icon: Code2 },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'System Design', icon: Shield },
  { name: 'Data Structures', icon: Brain },
  { name: 'DBMS', icon: Shield },
  { name: 'Git / GitHub', icon: Code2 },
];

export const Skills: React.FC = () => {
  return (
    <section className="py-32 px-8 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 mb-6 flex items-center justify-center text-[#1F1F1F]/40 group-hover:text-[#FF8A00] transition-colors">
                <skill.icon size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-[#1F1F1F]">{skill.name}</h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 grid md:grid-cols-2 gap-20 items-start">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold tracking-tight mb-8 underline decoration-[#FF8A00] decoration-4 underline-offset-8">Education</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold">Banasthali Vidyapith</h3>
                <p className="text-sm opacity-50 font-bold">B.Tech in Information Technology / 2024–2026</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="px-3 py-1 bg-black text-white text-[10px] font-black rounded-full">CGPA: 8.25</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest opacity-40 mb-2">Class XII (CBSE)</h4>
                  <p className="text-2xl font-bold">85.6%</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest opacity-40 mb-2">Class X (CBSE)</h4>
                  <p className="text-2xl font-bold">91.6%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-md md:ml-auto">
            <h2 className="text-4xl font-bold tracking-tight mb-8">Research <br /> <span className="text-[#FF8A00]">Interests</span></h2>
            <ul className="space-y-4 text-[#1F1F1F]/70 font-medium border-l-2 border-black/5 pl-8">
              <li>• Computer Vision & Image Processing</li>
              <li>• AI-based Surveillance & Threat Detection</li>
              <li>• Autonomous Systems using Computer Vision</li>
              <li>• Pattern Recognition & Intelligent Monitoring</li>
              <li>• Safety and Security Systems powered by AI</li>
            </ul>
          </div>
        </div>

        <div className="mt-40 grid md:grid-cols-2 gap-20 items-center">
          <div className="aspect-[16/9] bg-black rounded-3xl overflow-hidden shadow-2xl relative">
            <video 
              src="input_file_0.mp4"
              onError={(e) => {
                (e.target as HTMLVideoElement).src = "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-on-laptop-4402-large.mp4";
              }}
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent flex flex-col justify-end p-12">
               <span className="text-[#FF8A00] font-black text-xs tracking-[0.4em] mb-4">REVOLUTIONIZING FINTECH</span>
               <h3 className="text-white text-3xl font-bold tracking-tight">Focusing on high-volume financial data & scalable architectures.</h3>
            </div>
          </div>
          <div className="max-w-md">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Innovative Backend Systems</h2>
            <p className="text-[#1F1F1F]/60 leading-relaxed font-medium">
              Passionate about fraud detection pipelines and building robust API-driven ecosystems that prioritize security and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
