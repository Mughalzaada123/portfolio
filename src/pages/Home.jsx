import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCode, FiLayout, FiTrendingUp, FiCheckCircle, FiStar } from "react-icons/fi";

function Home() {
  // Animation Variant
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-32 px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-50/50 to-transparent -z-10"></div>
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-[0.2em] text-blue-600 uppercase bg-blue-50 rounded-full">
              Software Development Studio
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
              Building Digital <br />
              <span className="text-blue-600">Masterpieces.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 font-bold leading-relaxed mb-10">
              Ahmed Raza Dev transforms your ideas into high-performance web applications with cutting-edge tech and flawless design.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white font-black text-xl rounded-full shadow-2xl shadow-blue-200 hover:bg-slate-900 transition-all active:scale-95 flex items-center justify-center gap-3">
                Get Started <FiArrowRight />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-slate-100 text-slate-900 font-black text-xl rounded-full hover:bg-slate-50 transition-all">
                View Work
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-24 md:py-32 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
              Our Core <span className="text-blue-600">Expertise</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: "Web Development", icon: <FiCode />, desc: "High-speed React applications built with clean, maintainable code." },
              { title: "UI/UX Design", icon: <FiLayout />, desc: "Modern, intuitive interfaces that provide world-class user experiences." },
              { title: "Digital Strategy", icon: <FiTrendingUp />, desc: "Strategic growth plans to scale your business in the digital landscape." }
            ].map((service, index) => (
              <motion.div 
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 font-bold leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RECENT PROJECTS */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div {...fadeIn} className="text-left">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
                Recent <span className="text-blue-600">Works</span>
              </h2>
            </motion.div>
            <motion.button {...fadeIn} className="px-8 py-3 bg-slate-900 text-white font-black rounded-full text-sm uppercase tracking-widest">
              View All Projects
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] bg-slate-100 rounded-[32px] overflow-hidden mb-6 shadow-2xl">
                  <div className="absolute inset-0 bg-[#0f172a] flex items-center justify-center text-white font-black text-2xl opacity-90 group-hover:scale-110 transition-transform duration-700">
                    Project {i}
                  </div>
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">E-Commerce Platform</h3>
                <p className="text-slate-500 font-bold">React • Tailwind • Node.js</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS (Premium Look) */}
      <section className="py-24 md:py-32 bg-[#0f172a] px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Client <span className="text-blue-400">Success</span> Stories
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i} 
                {...fadeIn}
                className="bg-white/5 border border-white/10 p-10 rounded-[32px] backdrop-blur-md relative"
              >
                <div className="flex gap-1 mb-6 text-orange-400">
                  {[...Array(5)].map((_, i) => <FiStar key={i} fill="currentColor" />)}
                </div>
                <p className="text-blue-100 text-lg font-bold leading-relaxed mb-8 italic">
                  "Ahmed's attention to detail and technical skill is unmatched. He delivered our platform ahead of schedule!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-black text-white">CR</div>
                  <div>
                    <h4 className="text-white font-black">CEO, TechFlow</h4>
                    <span className="text-blue-400 text-xs font-black uppercase tracking-widest">United States</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ABOUT MINI SECTION */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">About Ahmed Raza</h2>
            <p className="text-slate-600 text-xl font-bold leading-relaxed">
              I am a full-stack architect with a passion for building software that matters. My mission is to bridge the gap between complex engineering and human-centric design.
            </p>
            <div className="pt-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-sm">
                <FiCheckCircle /> 10+ Years Experience
              </div>
              <div className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-sm">
                <FiCheckCircle /> 150+ Projects Done
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="pb-24 md:pb-32 px-6">
        <motion.div 
          {...fadeIn}
          className="max-w-7xl mx-auto bg-blue-600 rounded-[50px] p-12 md:p-24 text-center text-white shadow-2xl shadow-blue-200 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full -ml-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none mb-8">
              Ready to build your <br className="hidden md:block" /> next big thing?
            </h2>
            <button className="px-12 py-5 bg-white text-blue-600 font-black text-2xl rounded-full hover:bg-slate-900 hover:text-white transition-all active:scale-95 shadow-xl">
              Let's Talk Today
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

export default Home;