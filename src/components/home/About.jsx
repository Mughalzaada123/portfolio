import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="h-screen snap-start flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8">About Ahmed Raza</h2>
          <p className="text-slate-600 text-xl md:text-2xl font-bold leading-relaxed">
            I am a full-stack architect with a passion for building software that matters. My mission is to bridge the gap between complex engineering and human-centric design.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <h4 className="text-4xl font-black text-blue-600">10+</h4>
              <p className="text-xs font-black uppercase text-slate-400 tracking-widest">Years Experience</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-black text-blue-600">150+</h4>
              <p className="text-xs font-black uppercase text-slate-400 tracking-widest">Projects Done</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;