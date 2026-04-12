import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiLayout, FiSmartphone, FiDatabase, FiCloud, FiLock, FiTrendingUp } from "react-icons/fi";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const services_data = [
  {
    title: "Web Architecture",
    desc: "Building scalable, high-performance web applications using the latest modern stacks.",
    icon: <FiLayout />,
    color: "bg-blue-500"
  },
  {
    title: "Mobile Solutions",
    desc: "Responsive and native-feeling mobile experiences that work across all devices.",
    icon: <FiSmartphone />,
    color: "bg-purple-500"
  },
  {
    title: "Data Systems",
    desc: "Robust backend architectures and database designs for complex data requirements.",
    icon: <FiDatabase />,
    color: "bg-emerald-500"
  },
  {
    title: "Cloud Infrastructure",
    desc: "Deployment and management of cloud systems for maximum uptime and security.",
    icon: <FiCloud />,
    color: "bg-amber-500"
  },
  {
    title: "Cyber Security",
    desc: "Ensuring your digital assets are protected with industry-standard security protocols.",
    icon: <FiLock />,
    color: "bg-rose-500"
  },
  {
    title: "SEO & Growth",
    desc: "Optimizing your digital footprint to drive traffic and improve search visibility.",
    icon: <FiTrendingUp />,
    color: "bg-indigo-500"
  }
];

function Services() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const revealSections = gsap.utils.toArray('section');
    
    revealSections.forEach((section) => {
      const children = section.querySelectorAll('.reveal-item');
      if (children.length > 0) {
        gsap.from(children, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      }
    });

    // Multi-grid service reveal
    const grids = gsap.utils.toArray('[class*="service-grid"]');
    grids.forEach((grid) => {
      const cards = grid.querySelectorAll('[class*="service-card"]');
      if (cards.length > 0) {
        gsap.from(cards, {
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 90%",
            toggleActions: "play none none reverse",
            onComplete: () => gsap.set(cards, { clearProps: "all" })
          }
        });
      }
    });
  }, { scope: containerRef });



  const handleHover = (e) => {
    gsap.to(e.currentTarget, { y: -10, duration: 0.3 });
  };

  const handleHoverLeave = (e) => {
    gsap.to(e.currentTarget, { y: 0, duration: 0.3 });
  };

  return (
    <div 
      ref={containerRef}
      className="bg-white dark:bg-slate-950 transition-colors duration-500 relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <section className="snap-start min-h-screen flex flex-col justify-center pt-20">
          <div className="reveal-item text-center mb-20">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our Expertise</span>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
              Elite Digital <span className="text-blue-600">Solutions.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 font-bold text-lg leading-relaxed">
              We provide comprehensive engineering services to help modern startups and enterprises scale their digital products.
            </p>
          </div>
          
          {/* Service Cards within the first snap section */}
          <div className="service-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services_data.slice(0, 3).map((service, index) => (
              <div
                key={index}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverLeave}
                className="service-card p-8 bg-slate-50 dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-100/50 dark:shadow-none group cursor-default"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-bold leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* More Grid Items */}
        <section className="snap-start min-h-screen flex items-center py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full service-grid-2">
            {services_data.slice(3).map((service, index) => (
              <div
                key={index}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverLeave}
                className="service-card-2 p-8 bg-slate-50 dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-100/50 dark:shadow-none group cursor-default"
              >
                <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-bold leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="snap-start min-h-screen flex items-center pt-20">
          <div className="reveal-item w-full p-12 bg-blue-600 rounded-[40px] text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-32 -mt-32"></div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 relative z-10">Ready to start your project?</h2>
            <a
              href="/contactus"
              className="inline-block px-10 py-4 bg-white text-blue-600 font-black rounded-full hover:bg-slate-900 hover:text-white transition-all shadow-xl relative z-10"
            >
              Get Expert Advice
            </a>
          </div>
        </section>
      </div>
      
      {/* Footer Section */}
      <section className="snap-start">
        <Footer />
      </section>
    </div>
  );
}

export default Services;

