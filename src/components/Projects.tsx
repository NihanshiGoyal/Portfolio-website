import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const projects = [
  {
    title: "SAR Narrative Generation",
    description: "Built an AI system to generate regulatory-compliant SARs from financial transaction data. Designed a risk scoring engine and implemented audit trails for compliance.",
    tags: ["C++", "NLP", "Regulatory Tech"],
    id: "01",
    github: "https://github.com/NihanshiGoyal/SAR-with-Audit-Trail",
    link: "https://github.com/NihanshiGoyal/SAR-with-Audit-Trail"
  },
  {
    title: "ThinkDesk AI - Productivity",
    description: "Developed AI-based system to automate 1000+ tasks and communication workflows. Reduced manual workload by 40% using intelligent task prioritization.",
    tags: ["HTML", "CSS", "AI"],
    id: "02",
    github: "https://github.com/NihanshiGoyal/ThinkDeskAI",
    link: "https://think-desk-git-master-ehnas-projects.vercel.app/"
  },
  {
    title: "JanSetu - Civic-Tech",
    description: "Built real-time issue reporting platform connecting citizens with authorities. Improved resolution efficiency by 35% through structured workflows.",
    tags: ["React", "JavaScript"],
    id: "03",
    github: "https://github.com/NihanshiGoyal/JanSetu",
    link: "https://jansetu-portal.vercel.app/"
  }
];

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    id: string;
    github: string;
    link: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={cardRef}
      style={{ rotateX, scale, opacity }}
      className="group relative perspective-[1500px]"
    >
      {/* Background Number Parallax Effect */}
      <div className="absolute -left-10 md:-left-20 -top-10 md:-top-20 text-[10rem] md:text-[20rem] font-black text-black/[0.03] select-none pointer-events-none group-hover:text-[#AFCDFF]/10 transition-colors duration-700 font-mono tracking-tighter">
        {project.id}
      </div>

      <div className="relative z-10 bg-white/40 backdrop-blur-md border border-black/5 rounded-[40px] p-8 md:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_100px_rgba(255,138,0,0.1)] transition-all duration-700 group-hover:-translate-y-4">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-[#FF8A00] mb-4 block tracking-[0.4em] uppercase">{project.id} / PROJECT</span>
          <h3 className="text-4xl md:text-7xl font-semibold tracking-tighter mb-8 group-hover:text-[#243B7A] transition-colors duration-500">
            {project.title}
          </h3>
          <p className="text-[#1F1F1F]/60 text-lg md:text-2xl leading-relaxed mb-10 font-medium max-w-2xl">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-6 py-2 bg-[#ECE7DE] text-[#1F1F1F]/50 text-[10px] uppercase tracking-widest font-black rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href={project.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4 border-2 border-[#1F1F1F] rounded-full text-xs font-black hover:bg-[#1F1F1F] hover:text-white transition-all text-center tracking-widest"
            >
              REPOSITORY
            </a>
            <a 
              href={project.link}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#FF8A00] text-white rounded-full text-xs font-black shadow-2xl shadow-[#FF8A00]/20 hover:bg-[#243B7A] transition-all text-center tracking-widest"
            >
              LIVE SOLUTION
            </a>
          </div>
        </div>

        {/* Subtle Color Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#AFCDFF]/5 to-[#FF8A00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-[40px]" />
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="work" className="py-60 px-8 md:px-20 bg-[#F5F1EA]">
      <div className="max-w-6xl mx-auto space-y-60">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};
