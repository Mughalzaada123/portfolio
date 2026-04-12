import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiClock } from "react-icons/fi";

import project1 from "../../assets/projects/ar-dev-toolkit.png";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const container = useRef(null);
  const headerRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "AR-dev-toolkit",
      category: "PHP • CSS • JS Logic",
      image: project1,
      isComingSoon: false
    },
    { id: 2, title: "", category: "", isComingSoon: true },
    { id: 3, title: "", category: "", isComingSoon: true }
  ];

  useGSAP(() => {
    // Reveal header
    gsap.from(headerRef.current, {
      opacity: 0,
      x: -30,
      duration: 1,
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 90%",
      }
    });

    // Individual project card reveal
    const cards = gsap.utils.toArray(".project-card");
    cards.forEach((card) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });
  }, { scope: container });


  return (
    <div ref={container} className="w-full py-24 bg-white dark:bg-slate-950 relative">
      <div className="mx-auto w-[85%] max-w-7xl">

        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-10 lg:mb-14 items-center sm:items-end"
        >
          <h2 className="text-3xl pt-15 sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight text-center sm:text-left">
            Recent
            <span className="text-blue-600 dark:text-blue-400"> Works</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="project-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card group ${!project.isComingSoon ? "cursor-pointer" : ""}`}
            >
              {/* Image Box */}
              <div className={`relative aspect-[4/3] bg-slate-100 dark:bg-slate-800 rounded-2xl sm:rounded-[32px] overflow-hidden mb-4 sm:mb-6 shadow-lg sm:shadow-xl ${project.isComingSoon ? 'border border-slate-200 dark:border-slate-800' : ''}`}>
                {!project.isComingSoon ? (
                  <div className="absolute inset-0 w-full h-full">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[#0f172a] dark:bg-blue-900/40 flex items-center justify-center text-white font-black text-lg sm:text-xl md:text-2xl opacity-90 transition-transform duration-700 group-hover:scale-110">
                        Project {project.id}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0" />
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-slate-200/50 dark:bg-slate-800 animate-[pulse_2s_ease-in-out_infinite] flex items-center justify-center">
                    <span className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-sm md:text-base flex items-center gap-2">
                      <FiClock /> Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              {!project.isComingSoon ? (
                <>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-bold text-xs sm:text-sm uppercase">
                    {project.category}
                  </p>
                </>
              ) : (
                <div className="flex flex-col gap-3 mt-2">
                  <div className="h-6 sm:h-8 bg-slate-200/50 dark:bg-slate-800 rounded-lg w-3/4 animate-[pulse_2s_ease-in-out_infinite]"></div>
                  <div className="h-4 sm:h-5 bg-slate-200/50 dark:bg-slate-800 rounded-md w-1/2 animate-[pulse_2s_ease-in-out_infinite]"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Projects;

