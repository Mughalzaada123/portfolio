import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiBriefcase, FiZap, FiHeart, FiGlobe, FiCoffee, FiStar, FiTrendingUp, FiClock } from "react-icons/fi";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const perks = [
  { title: "Remote First", icon: <FiGlobe />, desc: "Work from anywhere in the world." },
  { title: "Rapid Growth", icon: <FiTrendingUp />, desc: "Accelerate your career with us." },
  { title: "Flex Hours", icon: <FiClock />, desc: "Your schedule, your rules." },
  { title: "Equity", icon: <FiStar />, desc: "Own a piece of the company." }
];

const jobs = [
  { title: "Senior React Engineer", type: "Full-Time", location: "Remote", dept: "Engineering" },
  { title: "UI/UX Designer", type: "Full-Time", location: "Hybrid", dept: "Design" },
  { title: "Product Manager", type: "Contract", location: "Remote", dept: "Product" },
];

function Careers() {
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

    // Special staggered reveal for job items
    gsap.from(".job-item", {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".job-list",
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  }, { scope: containerRef });

  const handleJobHover = (e) => {
    gsap.to(e.currentTarget, { scale: 1.02, duration: 0.3 });
  };

  const handleJobLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
  };

  return (
    <div 
      ref={containerRef}
      className="bg-white dark:bg-slate-950 transition-colors duration-500 relative font-poppins"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero */}
        <section className="snap-start min-h-screen flex flex-col justify-center pt-20">
          <div className="reveal-item text-center mb-16">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Careers</span>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
              Help Us Build the <br /> <span className="text-blue-600">Future of Web.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 font-bold text-lg leading-relaxed">
              We are always looking for visionary engineers, designers, and thinkers to join our distributed team.
            </p>
          </div>

          {/* Perks Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 reveal-item">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="p-8 bg-blue-50 dark:bg-slate-900/50 rounded-3xl text-center flex flex-col items-center"
              >
                <div className="text-blue-600 text-3xl mb-4">{perk.icon}</div>
                <h4 className="text-slate-900 dark:text-white font-black mb-2">{perk.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="snap-start min-h-screen flex items-center py-20">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="reveal-item text-3xl font-black text-slate-900 dark:text-white mb-12 flex items-center gap-4">
              <FiBriefcase className="text-blue-600" />
              Open Positions
            </h2>
            
            <div className="job-list space-y-4">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  onMouseEnter={handleJobHover}
                  onMouseLeave={handleJobLeave}
                  className="job-item p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-lg flex flex-col md:flex-row justify-between items-center group cursor-pointer"
                >
                  <div className="text-center md:text-left mb-4 md:mb-0">
                    <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full mb-2 inline-block">
                      {job.dept}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">{job.title}</h3>
                    <div className="flex gap-4 mt-1">
                      <span className="text-slate-500 text-xs font-bold">{job.location}</span>
                      <span className="text-slate-500 text-xs font-bold">•</span>
                      <span className="text-slate-500 text-xs font-bold">{job.type}</span>
                    </div>
                  </div>
                  <button className="px-8 py-3 bg-slate-900 dark:bg-blue-600 text-white font-black rounded-full text-sm group-hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
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

export default Careers;

