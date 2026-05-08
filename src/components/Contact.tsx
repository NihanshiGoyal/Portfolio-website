import React from 'react';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-8 md:px-20 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-medium tracking-tight mb-4"
        >
          Let's Connect
        </motion.h2>
        <p className="text-xl text-[#1F1F1F]/50">Reach out for projects, collabs, or a chat!</p>
      </div>

      <div className="max-w-xl mx-auto">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold opacity-40">Name</label>
            <input 
              type="text" 
              placeholder="Jane Smith"
              className="w-full bg-[#F5F1EA] border-none rounded-2xl p-6 focus:ring-2 focus:ring-[#FF8A00] outline-none transition-all"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold opacity-40">Email</label>
            <input 
              type="email" 
              placeholder="jane@example.com"
              className="w-full bg-[#F5F1EA] border-none rounded-2xl p-6 focus:ring-2 focus:ring-[#FF8A00] outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-bold opacity-40">Message</label>
            <textarea 
              placeholder="Your message..."
              rows={4}
              className="w-full bg-[#F5F1EA] border-none rounded-2xl p-6 focus:ring-2 focus:ring-[#FF8A00] outline-none transition-all resize-none"
            />
          </div>

          <button className="w-full py-6 bg-black text-white rounded-2xl font-bold hover:bg-[#FF8A00] transition-all transform hover:scale-[1.02] active:scale-[0.98]">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
