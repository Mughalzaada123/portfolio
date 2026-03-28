import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCode, FiGlobe, FiTerminal, FiMonitor, FiDatabase, FiZap, FiCpu, FiLayers, FiGitBranch, FiLayout, FiSmartphone, FiCommand } from "react-icons/fi";

const floatingElements = [
  { content: <FiCode />, top: "12%", left: "6%", size: "text-4xl md:text-6xl", color: "text-blue-500/40" },
  { content: <FiGlobe />, top: "18%", right: "10%", size: "text-4xl md:text-6xl", color: "text-blue-400/40" },
  { content: <FiTerminal />, bottom: "18%", left: "10%", size: "text-3xl md:text-5xl", color: "text-slate-500/50" },
  // ... Desktop par zyada icons dikhane ke liye aap purani list use kar sakte hain
];

function Hero() {
  return (
<section className="relative min-h-screen snap-start flex items-center justify-center px-4">      {/* Background Icons: Mobile par sirf 3-4 subtle icons rakhen */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
        {floatingElements.map((item, index) => (
          <motion.div
            key={index}
            animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute ${item.size} ${item.color} opacity-30`}
            style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
          >
            {item.content}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-blue-700 bg-blue-100/50 rounded-full">
            Software Development Studio
          </span>
          <h1 className="text-4xl md:text-7xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-[1.1] md:leading-[0.85] mb-6">
            Building Digital <br /> <span className="text-blue-600">Masterpieces.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-xl lg:text-2xl text-slate-600 font-bold leading-relaxed mb-10 px-4 md:px-0">
            Ahmed Raza Dev transforms your ideas into high-performance web applications with cutting-edge tech.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 md:px-0">
            <button className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white font-black text-lg md:text-xl rounded-full shadow-2xl hover:bg-slate-900 transition-all active:scale-95 flex items-center justify-center gap-3">
              Get Started <FiArrowRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;