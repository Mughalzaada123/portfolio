import React from "react";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="h-screen snap-start flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          className="bg-blue-600 rounded-[60px] p-12 md:p-24 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -ml-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-none mb-10">
              Ready to build <br/> your dream?
            </h2>
            <button className="px-12 py-5 bg-white text-blue-600 font-black text-2xl rounded-full hover:bg-slate-900 hover:text-white transition-all active:scale-95 shadow-xl">
              Let's Talk Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;