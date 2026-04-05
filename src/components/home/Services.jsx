import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiLayout, FiTrendingUp } from "react-icons/fi";

function Services() {
  const services = [
    { title: "Web Apps", icon: <FiCode />, desc: "High-speed React applications built with clean code." },
    { title: "UI/UX Design", icon: <FiLayout />, desc: "Modern, intuitive interfaces for world-class experiences." },
    { title: "Strategy", icon: <FiTrendingUp />, desc: "Strategic growth plans to scale your business." }
  ];

  return (
    <section className="snap-start py-16 md:py-32 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-6xl pt-10 h-3 font-black text-slate-900 tracking-tighter text-center mb-12 md:mb-24"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          Our Core <span className="text-blue-600">Expertise</span>
        </motion.h2>
        
        {/* Grid: 1 column on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 pt-4 md:grid-cols-3 gap-6 md:gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 md:p-10 rounded-[32px] md:rounded-[40px] shadow-xl border border-slate-100 group transition-all">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-6 shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
              <p className="text-sm md:text-base text-slate-600 font-bold leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;