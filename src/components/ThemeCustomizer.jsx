import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { FiSettings, FiCheck } from 'react-icons/fi';

const colors = [
  { name: 'Blue', 600: '#155DFC', 400: '#60a5fa', 50: '#eff6ff', 900: '#1e3a8a' },
  { name: 'Pink', 600: '#db2777', 400: '#f472b6', 50: '#fdf2f8', 900: '#831843' },
  { name: 'Teal', 600: '#0d9488', 400: '#2dd4bf', 50: '#f0fdfa', 900: '#134e4a' },
  { name: 'Emerald', 600: '#059669', 400: '#34d399', 50: '#ecfdf5', 900: '#064e3b' },
  { name: 'Amber', 600: '#d97706', 400: '#fbbf24', 50: '#fffbeb', 900: '#78350f' },
  { name: 'Purple', 600: '#7c3aed', 400: '#a78bfa', 50: '#f5f3ff', 900: '#4c1d95' },
  { name: 'Rose', 600: '#e11d48', 400: '#fb7185', 50: '#fff1f2', 900: '#881337' },
  { name: 'Cyan', 600: '#0891b2', 400: '#22d3ee', 50: '#ecfeff', 900: '#164e63' },
];

const ThemeCustomizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [showHint, setShowHint] = useState(true);
  
  const hintRef = useRef(null);
  const arrowRef = useRef(null);
  const panelRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const savedColor = localStorage.getItem('theme-primary-color');
    if (savedColor) {
      const found = colors.find(c => c.name === savedColor);
      if (found) {
        changeColor(found);
      }
    }

    const timer = setTimeout(() => hideHint(), 10000);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (showHint && hintRef.current) {
      gsap.fromTo(hintRef.current, 
        { opacity: 0, x: 20, scale: 0.8 },
        { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
      
      gsap.to(arrowRef.current, {
        x: 5,
        duration: 0.75,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, [showHint]);

  useGSAP(() => {
    if (isOpen && panelRef.current) {
      gsap.fromTo(panelRef.current,
        { opacity: 0, x: 20, scale: 0.9 },
        { opacity: 1, x: 0, scale: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  const changeColor = (color) => {
    setSelectedColor(color);
    document.documentElement.style.setProperty('--primary-600', color[600]);
    document.documentElement.style.setProperty('--primary-400', color[400]);
    document.documentElement.style.setProperty('--primary-50', color[50]);
    document.documentElement.style.setProperty('--primary-900', color[900]);
    localStorage.setItem('theme-primary-color', color.name);
  };

  const hideHint = () => {
    if (hintRef.current) {
      gsap.to(hintRef.current, {
        opacity: 0,
        x: 20,
        scale: 0.8,
        duration: 0.4,
        onComplete: () => setShowHint(false)
      });
    } else {
      setShowHint(false);
    }
  };

  const handleToggle = () => {
    if (isOpen) {
      gsap.to(panelRef.current, {
        opacity: 0,
        x: 20,
        scale: 0.9,
        duration: 0.3,
        onComplete: () => setIsOpen(false)
      });
    } else {
      setIsOpen(true);
      hideHint();
    }
  };

  const handleBtnHover = (e) => {
    gsap.to(e.currentTarget, { scale: 1.1, rotate: 15, duration: 0.3 });
  };

  const handleBtnLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, rotate: 0, duration: 0.3 });
  };

  const handleColorHover = (e) => {
    gsap.to(e.currentTarget, { scale: 1.2, duration: 0.3 });
  };

  const handleColorLeave = (e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
  };

  return (
    <div ref={containerRef} className="fixed right-6 top-1/2 -translate-y-1/2 z-[999999] hidden md:flex flex-col items-center">
      {/* Interactive Hint Note */}
      {showHint && !isOpen && (
        <div
          ref={hintRef}
          className="absolute right-full mr-6 top-0 w-48 pointer-events-none"
        >
          <div className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-md p-4 rounded-[2rem] border-2 border-dashed border-blue-400 shadow-2xl">
            <p className="text-slate-900 dark:text-white text-[13px] font-black italic leading-tight text-center">
              Want to change <br />
              <span className="text-blue-600 uppercase">THE COLORS?</span> ✨ <br />
              <span className="block mt-2 text-[10px] opacity-70 font-bold tracking-tight">
                Pick your favorite vibe!
              </span>
            </p>
          </div>

          <div
            ref={arrowRef}
            className="absolute top-1/2 -right-6 -translate-y-1/2 text-blue-500"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      )}

      {/* Settings Toggle Button */}
      <button
        onMouseEnter={handleBtnHover}
        onMouseLeave={handleBtnLeave}
        onMouseDown={(e) => gsap.to(e.currentTarget, { scale: 0.9, duration: 0.1 })}
        onMouseUp={(e) => gsap.to(e.currentTarget, { scale: 1.1, duration: 0.1 })}
        onClick={handleToggle}
        className="w-12 h-12 bg-[#0f172a] dark:bg-white text-white dark:text-slate-900 rounded-2xl shadow-2xl flex items-center justify-center mb-4 border border-white/20 dark:border-slate-800"
      >
        <FiSettings className={`w-6 h-6 ${isOpen ? 'animate-spin' : ''}`} />
      </button>

      {/* Color Palette Panel */}
      {isOpen && (
        <div
          ref={panelRef}
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-4 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col gap-3"
        >
          {colors.map((color) => (
            <button
              key={color.name}
              onMouseEnter={handleColorHover}
              onMouseLeave={handleColorLeave}
              onMouseDown={(e) => gsap.to(e.currentTarget, { scale: 0.9, duration: 0.1 })}
              onMouseUp={(e) => gsap.to(e.currentTarget, { scale: 1.2, duration: 0.1 })}
              onClick={() => changeColor(color)}
              className="w-8 h-8 rounded-full shadow-lg relative flex items-center justify-center transition-all border-2 border-transparent hover:border-white dark:hover:border-slate-400"
              style={{ backgroundColor: color[600] }}
              title={color.name}
            >
              {selectedColor.name === color.name && (
                <FiCheck className="text-white text-xs" />
              )}
              {selectedColor.name === color.name && (
                <div
                  className="absolute -inset-1.5 border-2 border-blue-600 rounded-full"
                  style={{ borderColor: color[600] }}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeCustomizer;

