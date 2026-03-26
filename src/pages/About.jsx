import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiAward, FiUsers, FiCpu, FiArrowRight } from "react-icons/fi";

function About() {
  const stats = [
    { label: "Years Experience", value: "10+", icon: <FiAward /> },
    { label: "Projects Done", value: "150+", icon: <FiCpu /> },
    { label: "Happy Clients", value: "100+", icon: <FiUsers /> },
    { label: "Success Rate", value: "100%", icon: <FiCheckCircle /> },
  ];

  // Animation Variants for consistency
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. HERO SECTION - Increased Top Padding for Sticky Navbar */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-[0.2em] text-blue-600 uppercase bg-blue-50 rounded-full">
              Our Journey
            </span>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-8">
              We Design. We Build. <br className="hidden md:block" />
              <span className="text-blue-600">We Deliver Excellence.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 font-bold leading-relaxed">
              Ahmed Raza Dev provides elite engineering for modern brands. We turn complex visions into seamless digital realities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN CONTENT - Balanced Grid Spacing */}
      <section className="py-16 md:py-24 bg-slate-50/50 border-y border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            
            {/* Visual Column */}
            <motion.div 
              {...fadeIn}
              className="relative aspect-square md:aspect-[4/3] bg-[#0f172a] rounded-[40px] overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 mb-6 bg-blue-600 rounded-3xl rotate-12 flex items-center justify-center shadow-2xl group-hover:rotate-0 transition-transform duration-500">
                   <FiCpu className="text-white text-4xl" />
                </div>
                <h3 className="text-white text-3xl font-black mb-2">Modern Stack</h3>
                <p className="text-blue-200 font-bold uppercase tracking-widest text-xs">React • Tailwind • Node.js</p>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Driving Growth Through <br /> Strategic Web Solutions
                </h2>
                <p className="text-slate-600 text-lg font-bold leading-relaxed">
                  With over a decade of experience, we specialize in building high-performance web applications that don't just look good but perform exceptionally.
                </p>
              </div>

              {/* Feature List with Proper Vertical Spacing */}
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Component-Driven UI",
                  "Performance Optimized",
                  "SEO-Ready Architecture",
                  "Scalable Backend Design",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FiCheckCircle className="text-blue-600 text-xl shrink-0" />
                    <span className="font-black text-slate-800 text-xs md:text-sm uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-black rounded-full hover:bg-slate-900 transition-all shadow-xl shadow-blue-100 hover:shadow-slate-200 active:scale-95 group">
                  View Our Portfolio
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. STATS SECTION - High Contrast Spacing */}
      <section className="py-20 md:py-28 bg-[#0f172a] relative overflow-hidden px-6">
        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-blue-400 text-3xl mb-5 flex justify-center">
                  {stat.icon}
                </div>
                <h4 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-2">
                  {stat.value}
                </h4>
                <p className="text-blue-200/60 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA - Clean Bottom Spacing */}
      <section className="py-24 md:py-32 px-6 text-center">
        <motion.div {...fadeIn} className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Have a project in mind? <br />
            <span className="text-blue-600">Let's talk about it.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="/contactus" className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white font-black text-xl rounded-full shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all">
              Start Project
            </a>
            <a href="tel:+923202108037" className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-slate-100 text-slate-900 font-black text-xl rounded-full hover:bg-slate-50 transition-all">
              Call Us
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

export default About;