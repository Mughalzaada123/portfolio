import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiPlus, FiMinus, FiHelpCircle } from "react-icons/fi";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Standard website projects take 4-6 weeks, while complex applications can take 3-6 months depending on requirements."
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes, we provide 3 months of complimentary support after launch, followed by various maintenance plans."
  },
  {
    q: "What is your primary tech stack?",
    a: "We specialize in the MERN stack (MongoDB, Express, React, Node.js), but we also use Next.js, TypeScript, and various cloud platforms."
  },
  {
    q: "Can you help with existing projects?",
    a: "Absolutely! We can take over existing codebases for refactoring, feature additions, or performance optimization."
  },
  {
    q: "How do you handle project payments?",
    a: "We usually work with a milestone-based payment structure: 30% upfront, and the rest divided across key deliverables."
  }
];

const FAQItem = ({ faq, index, activeIndex, setActiveIndex }) => {
  const contentRef = useRef(null);
  const isActive = activeIndex === index;

  useGSAP(() => {
    if (isActive) {
      gsap.fromTo(contentRef.current, 
        { height: 0, opacity: 0 }, 
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    } else {
      gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
    }
  }, [isActive]);

  return (
    <div
      className={`faq-item border rounded-3xl overflow-hidden transition-all duration-300 ${
        isActive 
        ? 'border-blue-500 bg-blue-50/30 dark:bg-blue-900/10' 
        : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900'
      }`}
    >
      <button
        onClick={() => setActiveIndex(isActive ? null : index)}
        className="w-full px-8 py-6 flex justify-between items-center text-left"
      >
        <span className={`text-lg font-black tracking-tight ${isActive ? 'text-blue-600' : 'text-slate-900 dark:text-white'}`}>
          {faq.q}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
          {isActive ? <FiMinus size={18} /> : <FiPlus size={18} />}
        </div>
      </button>
      
      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="px-8 pb-8 text-slate-600 dark:text-slate-400 font-bold leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-6">
          {faq.a}
        </div>
      </div>
    </div>
  );
};

function FAQ() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

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

    // FAQ items reveal
    gsap.from(".faq-item", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".faq-container",
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className="bg-white dark:bg-slate-950 transition-colors duration-500 relative"
    >
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header & First few FAQ Items */}
        <section className="snap-start min-h-screen flex flex-col justify-center pt-20">
          <div className="reveal-item text-center mb-16">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Information</span>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
              Frequently Asked <span className="text-blue-600">Questions.</span>
            </h1>
          </div>

          {/* FAQ Items (Top Half) */}
          <div className="faq-container space-y-4">
            {faqs.slice(0, 3).map((faq, index) => (
              <FAQItem 
                key={index} 
                faq={faq} 
                index={index} 
                activeIndex={activeIndex} 
                setActiveIndex={setActiveIndex} 
              />
            ))}
          </div>
        </section>

        {/* Second Half of FAQs */}
        <section className="snap-start min-h-screen flex flex-col justify-center py-20">
          <div className="faq-container-2 space-y-4 w-full">
            {faqs.slice(3).map((faq, index) => {
              const realIndex = index + 3;
              return (
                <FAQItem 
                  key={realIndex} 
                  faq={faq} 
                  index={realIndex} 
                  activeIndex={activeIndex} 
                  setActiveIndex={setActiveIndex} 
                />
              );
            })}
          </div>

          <div 
            className="reveal-item mt-12 p-8 bg-slate-900 dark:bg-slate-800 rounded-[35px] text-center border border-slate-100 dark:border-slate-800 w-full"
          >
            <FiHelpCircle className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-white text-xl font-black mb-1">Still have questions?</h3>
            <p className="text-slate-400 font-bold mb-6 text-sm">We're here to help you solve your business challenges.</p>
            <a
              href="/contactus"
              className="inline-block px-10 py-4 bg-blue-600 text-white font-black rounded-full hover:bg-white hover:text-slate-900 transition-all shadow-xl"
            >
              Contact Support
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

export default FAQ;

