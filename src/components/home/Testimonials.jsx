import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function Testimonials() {
  const container = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);

  useGSAP(() => {
    // Heading animations
    gsap.from(headingRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 90%",
      }
    });

    gsap.fromTo(subHeadingRef.current, 
      { opacity: 0, letterSpacing: "0.2em" },
      { 
        opacity: 1, 
        letterSpacing: "0.4em", 
        duration: 1,
        scrollTrigger: {
          trigger: subHeadingRef.current,
          start: "top 95%",
        }
      }
    );

    // Staggered cards
    gsap.from(".testimonial-card", {
      opacity: 0,
      scale: 0.9,
      y: 30,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".testimonial-grid",
        start: "top 85%",
        onComplete: () => gsap.set(".testimonial-card", { clearProps: "all" })
      }
    });
  }, { scope: container });

  const handleHover = (e) => {
    gsap.to(e.currentTarget, { y: -10, scale: 1.02, duration: 0.3, ease: "power2.out" });
  };

  const handleHoverExit = (e) => {
    gsap.to(e.currentTarget, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
  };

  return (
    <div ref={container} className="w-full py-24 bg-white dark:bg-slate-950 relative">
      <div className="mx-auto w-[85%] max-w-7xl">


        {/* Heading */}
        <div className="text-center mb-16">
          <h3 
            ref={subHeadingRef}
            className="text-sm font-black uppercase text-[var(--primary-600)] mb-4"
          >
            Reviews
          </h3>
          <h2 
            ref={headingRef}
            className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-none"
          >
            Client <span className="text-[var(--primary-600)]">Success.</span>
          </h2>
        </div>

        {/* Testimonials Cards */}
        <div className="testimonial-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverExit}
              className="testimonial-card bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md flex flex-col justify-between shadow-sm relative group overflow-hidden transition-shadow hover:shadow-2xl hover:shadow-[var(--primary-600)]/10"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--primary-600)]/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-[var(--primary-600)]/20 transition-colors"></div>
              
              <div className="relative z-10">
                {/* Star Ratings */}
                <div className="flex gap-1 mb-6 text-orange-400">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-600 dark:text-slate-300 text-lg font-bold italic mb-8 leading-relaxed">
                  "Ahmed's attention to detail is unmatched. He delivered our platform ahead of schedule with perfect execution!"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4 mt-auto relative z-10">
                <div className="w-12 h-12 bg-[var(--primary-600)] rounded-full flex items-center justify-center font-black text-white text-sm shadow-lg shadow-[var(--primary-600)]/20">
                  {i === 1 ? "JD" : i === 2 ? "MK" : "AS"}
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-black text-sm uppercase">CEO, TechFlow</h4>
                  <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">United States</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}


export default Testimonials;

