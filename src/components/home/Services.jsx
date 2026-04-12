import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCode, FiLayout, FiTrendingUp, FiSmartphone, FiDatabase, FiGlobe } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const container = useRef(null);
  const headingRef = useRef(null);

  const services = [
    { title: "React & Next.js", icon: <FiCode />, desc: "High-performance frontend applications dynamically built with React.js and Next.js." },
    { title: "Node.js Backend", icon: <FiDatabase />, desc: "Robust, fast, and highly scalable server architectures and APIs powered by Node.js." },
    { title: "PHP Laravel Web", icon: <FiGlobe />, desc: "Secure and feature-rich enterprise-level web applications built on the Laravel framework." },
    { title: "WordPress CMS", icon: <FiLayout />, desc: "Custom theme development and content-rich reliable applications relying on WordPress." },
    { title: "Mobile Apps", icon: <FiSmartphone />, desc: "Responsive cross-platform mobile applications optimized for all smartphone devices." },
    { title: "Design & Scaling", icon: <FiTrendingUp />, desc: "Strategic growth plans coupled with modern, intuitive user interfaces for world-class experiences." }
  ];

  useGSAP(() => {
    // Individual card reveal based on viewport entry
    const cards = gsap.utils.toArray(".service-card");
    cards.forEach((card) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 50, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    // Heading reveal stays as a single trigger
    gsap.fromTo(headingRef.current, 
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 95%",
        } 
      }
    );
  }, { scope: container });




  return (
    <div ref={container} className="w-full py-20 relative">
      <div className="mx-auto w-[85%] max-w-7xl">
        <h2
          ref={headingRef}
          className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter text-center mb-16"
        >
          Our Core <span className="text-blue-600 dark:text-blue-400">Expertise</span>
        </h2>

        {/* Grid: 1 column on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white dark:bg-slate-900 p-8 rounded-[32px] shadow-xl border border-slate-100 dark:border-slate-800 group transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-blue-600/20">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">{service.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-bold leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Services;

