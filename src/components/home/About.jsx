import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "../../assets/hero.png";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const container = useRef(null);
  const imageContainerRef = useRef(null);
  const textContainerRef = useRef(null);
  const decoCircleRef = useRef(null);
  const expTagRef = useRef(null);
  const bgAccentRef = useRef(null);

  useGSAP(() => {
    // Left side image reveal
    gsap.from(imageContainerRef.current, {
      opacity: 0,
      x: -50,
      scale: 0.9,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: "top 85%",
      }
    });

    // Decorative circle rotation
    gsap.to(decoCircleRef.current, {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });

    // Floating experience tag
    gsap.from(expTagRef.current, {
      scale: 0,
      rotate: -20,
      duration: 0.8,
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: expTagRef.current,
        start: "top 95%",
      }
    });

    // Right side text reveal (staggered)
    gsap.from(".about-item", {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textContainerRef.current,
        start: "top 80%",
        onComplete: () => gsap.set(".about-item", { clearProps: "all" })
      }
    });

    // Background decorative accent
    gsap.to(bgAccentRef.current, {
      scale: 1.2,
      opacity: 0.1,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: container });

  const handleBtnHover = (e) => {
    const line = e.currentTarget.querySelector('.about-btn-line');
    gsap.to(e.currentTarget, { gap: "24px", duration: 0.3 });
    gsap.to(line, { width: "80px", duration: 0.3 });
  };

  const handleBtnLeave = (e) => {
    const line = e.currentTarget.querySelector('.about-btn-line');
    gsap.to(e.currentTarget, { gap: "16px", duration: 0.3 });
    gsap.to(line, { width: "48px", duration: 0.3 });
  };

  return (
    <div ref={container} className="relative w-full py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LEFT SIDE: IMAGE CONTAINER */}
          <div 
            ref={imageContainerRef}
            className="relative w-full lg:w-5/12 flex justify-center lg:justify-start"
          >
            {/* Decorative Background Element */}
            <div 
              ref={decoCircleRef}
              className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-transparent blur-3xl rounded-full opacity-50"
            ></div>
            
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none aspect-[4/5] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl group">
              <img 
                src={heroImg} 
                alt="Ahmed Raza" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
              />
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Floating Experience Tag */}
            <div 
              ref={expTagRef}
              className="absolute -bottom-6 -right-2 md:-right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-white/5 hidden sm:block z-10"
            >
              <p className="text-blue-600 font-black text-xl md:text-2xl leading-none">2+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Years Exp</p>
            </div>
          </div>

          {/* RIGHT SIDE: TEXT CONTENT */}
          <div 
            ref={textContainerRef}
            className="w-full lg:w-7/12 flex flex-col text-center lg:text-left items-center lg:items-start"
          >
            <div className="space-y-4 mb-8">
              <h3 className="about-item text-xs md:text-sm font-black uppercase tracking-[0.4em] text-blue-600">
                Who is Ahmed?
              </h3>
              <h2 className="about-item text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9]">
                About <br /> 
                <span className="text-slate-400 dark:text-slate-600">Ahmed Raza</span>
              </h2>
            </div>

            <p className="about-item text-slate-600 dark:text-slate-400 text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mb-10 text-center lg:text-left">
              I am a <span className="text-slate-900 dark:text-white font-bold">Full-Stack Architect</span> with a passion for building software that matters. 
              My mission is to bridge the gap between complex engineering and human-centric design, 
              creating digital products that are as robust as they are intuitive.
            </p>

            {/* STATS GRID */}
            <div className="about-item w-full grid grid-cols-3 gap-4 md:gap-8 py-8 border-y border-slate-200 dark:border-white/10 mb-10">
              <div className="space-y-1">
                <h4 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white italic">4+</h4>
                <p className="text-[10px] md:text-xs font-black uppercase text-slate-400 tracking-widest">Projects</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-2xl md:text-4xl font-black text-blue-600 italic">2+</h4>
                <p className="text-[10px] md:text-xs font-black uppercase text-slate-400 tracking-widest">Exp</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white italic">100%</h4>
                <p className="text-[10px] md:text-xs font-black uppercase text-slate-400 tracking-widest">Client Joy</p>
              </div>
            </div>

            <button
              onMouseEnter={handleBtnHover}
              onMouseLeave={handleBtnLeave}
              className="group flex items-center gap-4 text-xs md:text-sm font-black uppercase tracking-[0.2em] text-blue-600 transition-all"
            >
              Learn more about me 
              <span className="about-btn-line w-12 h-[2px] bg-blue-600 transition-all duration-300"></span>
            </button>
          </div>

        </div>
      </div>

      {/* Background Decorative Accent */}
      <div 
        ref={bgAccentRef}
        className="absolute top-1/2 -right-20 w-64 h-64 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" 
        style={{ opacity: 0.05 }}
      />
    </div>
  );
}


export default About;
