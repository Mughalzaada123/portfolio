import React, { useRef } from "react";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useGSAP(() => {
    // Hero entrance
    gsap.from(heroRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Info card entrance (Left)
    gsap.from(leftColRef.current, {
      opacity: 0,
      x: -30,
      duration: 0.8,
      delay: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: leftColRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });

    // Form entrance (Right)
    gsap.from(rightColRef.current, {
      opacity: 0,
      x: 30,
      duration: 0.8,
      delay: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: rightColRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  }, { scope: containerRef });

  const handleBtnTap = (e) => {
    gsap.to(e.currentTarget, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });
  };

  return (
    <div 
      ref={containerRef}
      className="bg-white dark:bg-slate-950 transition-colors duration-500 relative"
    >
      
      {/* 1. Main Contact Section: Takes full screen */}
      <section className="snap-start min-h-screen flex items-center justify-center pt-24 pb-12 px-6 lg:px-12">
        <div className="max-w-[1300px] w-full mx-auto">
          
          {/* Re-expanded Hero Heading */}
          <div 
            ref={heroRef}
            className="text-center mb-12 lg:mb-20"
          >
            <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-xs md:text-sm mb-4 block">
              Contact Experience
            </span>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9] mb-8">
              Let’s Build Something <br className="hidden lg:block" />
              <span className="text-blue-600">Great Together.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 font-bold text-lg md:text-xl leading-relaxed">
              Engineering visions into legendary digital realities. Let's start the conversation.
            </p>
          </div>

          {/* Main Grid: items-stretch to match heights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Column: Info Card */}
            <div 
              ref={leftColRef}
              className="lg:col-span-4 flex"
            >
              <div className="bg-[#0f172a] dark:bg-slate-900 rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center border border-transparent dark:border-slate-800 group w-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full -mr-16 -mt-16 transition-all group-hover:bg-blue-600/30"></div>
                
                <h3 className="text-2xl font-black mb-10 relative z-10 uppercase tracking-tight">Direct Access</h3>
                
                <div className="space-y-8 relative z-10">
                  {[
                    { icon: <FiPhone />, label: "Call", val: "+92 320 2108037", link: "tel:+923202108037" },
                    { icon: <FiMail />, label: "Email", val: "contact@devsol.pk", link: "mailto:contact@devsol.pk" },
                    { icon: <FiMapPin />, label: "Location", val: "Karachi, Pakistan", link: "#" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6 group/item">
                      <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform shadow-lg">
                        <span className="text-xl">{item.icon}</span>
                      </div>
                      <div>
                        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{item.label}</p>
                        <a href={item.link} className="text-lg font-bold tracking-tight hover:text-blue-400 transition-colors">{item.val}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div 
              ref={rightColRef}
              className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-[40px] p-8 lg:p-14 shadow-2xl border border-slate-100 dark:border-slate-800 transition-colors duration-500"
            >
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-slate-900 dark:text-slate-300 font-black text-xs uppercase tracking-widest ml-1">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 outline-none transition-all font-bold text-slate-900 dark:text-white" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-slate-900 dark:text-slate-300 font-black text-xs uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 outline-none transition-all font-bold text-slate-900 dark:text-white" />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-slate-900 dark:text-slate-300 font-black text-xs uppercase tracking-widest ml-1">Subject</label>
                  <input type="text" placeholder="How can we help?" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 outline-none transition-all font-bold text-slate-900 dark:text-white" />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-slate-900 dark:text-slate-300 font-black text-xs uppercase tracking-widest ml-1">Message</label>
                  <textarea rows="4" placeholder="Tell us about your mission..." className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-600 outline-none transition-all font-bold text-slate-900 dark:text-white resize-none"></textarea>
                </div>

                <div className="md:col-span-2 pt-4">
                  <button 
                    onMouseDown={handleBtnTap}
                    className="w-full md:w-auto px-12 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl hover:bg-slate-900 dark:hover:bg-blue-700 transition-all flex items-center justify-center gap-4 group"
                  >
                    Send Message <FiSend className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Footer Section: Separate Snap Point */}
      <section className="snap-start py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <Footer />
      </section>
    </div>
  );
}

export default Contact;