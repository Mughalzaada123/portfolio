import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, Sparkles, Send } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import heroImg from "../../assets/hero.png"; // Ensure path is correct

const HeroSection = () => {
  const container = useRef(null);
  const heroRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const shapeRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const mobileDockRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // Entrance Animation
    tl.fromTo(container.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .from(".gsap-item", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 1,
      }, "-=0.5")
      .from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
      }, "-=1")
      .from(badgeRef.current, {
        opacity: 0,
        x: -20,
        duration: 0.8,
      }, "-=0.5")
      .from(mobileDockRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
      }, "-=0.8");

    // Background Blobs Floating
    gsap.to(blob1Ref.current, {
      scale: 1.2,
      x: 30,
      y: -20,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(blob2Ref.current, {
      scale: 1.1,
      x: -40,
      y: 40,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1
    });

    // Dynamic Background Shape Rotation & Morph
    gsap.to(shapeRef.current, {
      rotate: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });

    // Main Image Floating
    gsap.to(imageRef.current, {
      y: -15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Badge Floating
    gsap.to(badgeRef.current, {
      y: 10,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5
    });
  }, { scope: container });

  const handleHover = (e, scale = 1.05, shadow = true) => {
    gsap.to(e.currentTarget, {
      scale: scale,
      boxShadow: shadow ? "0 20px 40px -10px rgba(37, 99, 235, 0.3)" : "none",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleHoverExit = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      boxShadow: "none",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleTap = (e) => {
    gsap.to(e.currentTarget, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });
  };

  return (
    <div
      ref={container}
      id="hero"
      className="relative w-full min-h-screen bg-slate-50 dark:bg-[#030712] flex items-center justify-center overflow-hidden pt-8 md:pt-20 transition-colors duration-700"
    >
      {/* --- PREMIUM BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')` }}
        ></div>

        <div
          ref={blob1Ref}
          className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] rounded-full"
        />
        <div
          ref={blob2Ref}
          className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] bg-purple-400/10 dark:bg-indigo-600/10 blur-[120px] rounded-full"
        />
      </div>

      <div className="relative z-10 w-[80%] max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14 px-4 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 lg:gap-16">

          {/* TEXT CONTENT */}
          <div className="flex-1 text-center lg:text-left z-20">
            <div className="gsap-item inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 mb-6">
              <Sparkles size={14} className="text-[var(--primary-600)]" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Available for New Projects
              </span>
            </div>

            <h1 className="gsap-item text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-slate-900 dark:text-white">
              Ahmed <br className="hidden md:block" />
              <span className="text-[var(--primary-600)]">
                Raza
              </span>
            </h1>

            <p className="gsap-item mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 font-medium leading-relaxed">
              Crafting high-performance web experiences with modern tech stacks.
              Bridging the gap between <span className="text-slate-900 dark:text-white">Creative Design</span> and <span className="text-slate-900 dark:text-white">Technical Excellence</span>.
            </p>

            {/* CTA BUTTONS (Desktop) */}
            <div className="gsap-item hidden lg:flex items-center justify-center lg:justify-start gap-4 mt-10">
              <button
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
                onClick={() => {
                  handleTap({ currentTarget: container.current }); // dummy call for effect or just manual
                  document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseDown={handleTap}
                style={{ backgroundColor: 'var(--primary-600)' }}
                className="px-8 py-4 text-white rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl shadow-blue-600/20 hover:shadow-2xl"
              >
                Hire Me <Send size={18} />
              </button>
              <button
                onMouseEnter={(e) => handleHover(e, 1.05, false)}
                onMouseLeave={handleHoverExit}
                onMouseDown={handleTap}
                className="px-8 py-4 bg-white dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl font-bold flex items-center gap-2 transition-all hover:border-[var(--primary-600)]"
              >
                Portfolio <ArrowUpRight size={18} />
              </button>
            </div>

            {/* SOCIAL LINKS */}
            <div className="gsap-item mt-12 flex items-center justify-center lg:justify-start gap-6 opacity-80 hover:opacity-100 transition-all duration-500">
              <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-[var(--primary-600)] transition-colors"><FiGithub size={28} /></a>
              <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-[var(--primary-600)] transition-colors"><FiLinkedin size={28} /></a>
              <div className="h-px w-12 bg-slate-300 dark:bg-slate-700"></div>
              <span className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">IT Technician</span>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="relative flex-1 flex flex-col items-center justify-center">
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
              <div
                ref={shapeRef}
                style={{ 
                  background: 'linear-gradient(to top right, var(--primary-600), transparent)',
                  borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%'
                }}
                className="absolute inset-0 opacity-20 dark:opacity-40 backdrop-blur-3xl border border-white/20 dark:border-white/10"
              />

              <img
                ref={imageRef}
                src={heroImg}
                alt="Ahmed Raza"
                className="absolute inset-0 w-full h-[50vh] md:h-full lg:h-[650px] object-contain z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] origin-bottom scale-110 md:scale-100"
              />

              <div
                ref={badgeRef}
                className="absolute -left-4 top-1/4 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/20 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Sparkles className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-tighter text-slate-500 font-bold">Experienced</p>
                    <p className="text-sm font-black dark:text-white">Web Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE ONLY BUTTONS */}
      <div
        ref={mobileDockRef}
        className="absolute bottom-6 left-0 right-0 z-50 flex lg:hidden px-6"
      >
        <div className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-[2rem] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col gap-2">
          <button
            onMouseDown={handleTap}
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ backgroundColor: 'var(--primary-600)' }}
            className="w-full py-4 text-white font-black rounded-[1.5rem] flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
          >
            Hire Me Now <Send size={18} />
          </button>
          <button
            onMouseDown={handleTap}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full py-3 bg-transparent text-slate-900 dark:text-white font-bold flex items-center justify-center gap-2"
          >
            View Portfolio <ArrowUpRight size={18} className="opacity-50" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 hidden xl:block overflow-hidden pointer-events-none">
        <h2 className="text-[15vh] font-black text-slate-900/[0.03] dark:text-white/[0.02] whitespace-nowrap leading-none select-none">
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
