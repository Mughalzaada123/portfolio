import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="min-h-screen snap-start flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-0">
      
      <div className="max-w-7xl mx-auto w-full">

    {/* Header */}
<motion.div 
  initial={{ opacity: 0, x: -30 }} 
  whileInView={{ opacity: 1, x: 0 }} 
  transition={{ duration: 0.8 }} 
  className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-10 lg:mb-14 items-center sm:items-end"
>
  <h2 className="text-3xl pt-15 sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-tight text-center sm:text-left">
    Recent 
    <span className="text-blue-600"> Works</span>
  </h2>

  {/* Button */}
  <button className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white font-black rounded-full text-xs uppercase tracking-widest">
    View All
  </button>
</motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              
              {/* Image Box */}
              <div className="relative aspect-[4/3] bg-slate-100 rounded-2xl sm:rounded-[32px] overflow-hidden mb-4 sm:mb-6 shadow-lg sm:shadow-xl">
                <div className="absolute inset-0 bg-[#0f172a] flex items-center justify-center text-white font-black text-lg sm:text-xl md:text-2xl opacity-90 transition-transform duration-700 group-hover:scale-110">
                  Project {i}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                Premium Solution
              </h3>

              <p className="text-slate-500 font-bold text-xs sm:text-sm uppercase">
                React • Node.js
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;