import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const thumbRef = useRef(null);
  const sunIconRef = useRef(null);
  const moonIconRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    
    // Default to Light theme unless 'dark' is explicitly saved
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useGSAP(() => {
    if (!mounted) return;
    
    // Thumb movement
    const targetX = isDark ? (window.innerWidth < 768 ? 32 : 36) : 4;
    gsap.to(thumbRef.current, {
      x: targetX,
      duration: 0.4,
      ease: "back.out(1.5)"
    });

    // Icon swap animation
    if (isDark) {
      // Show moon, hide sun
      gsap.fromTo(moonIconRef.current, 
        { scale: 0, rotate: -90, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, duration: 0.3 }
      );
      gsap.to(sunIconRef.current, { scale: 0, rotate: 90, opacity: 0, duration: 0.2 });
    } else {
      // Show sun, hide moon
      gsap.fromTo(sunIconRef.current, 
        { scale: 0, rotate: 90, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, duration: 0.3 }
      );
      gsap.to(moonIconRef.current, { scale: 0, rotate: -90, opacity: 0, duration: 0.2 });
    }
  }, [isDark, mounted]);

  const toggleTheme = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Prevent hydration mismatch
  if (!mounted) return <div className="w-14 h-8 md:w-16 md:h-9" />;

  return (
    <div className="flex items-center touch-none">
      <button
        onClick={toggleTheme}
        onMouseDown={(e) => e.preventDefault()} // Prevent stealing focus from scroll container
        type="button"
        aria-label="Toggle Theme"
        className={`relative w-14 h-8 md:w-16 md:h-9 flex items-center rounded-full cursor-pointer transition-colors duration-500 shadow-lg border border-transparent ${
          isDark ? 'bg-slate-700' : 'bg-blue-100'
        }`}
      >
        {/* Track Icons */}
        <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none">
          <FiSun size={12} className={`${isDark ? 'opacity-20' : 'opacity-100'} text-amber-500 transition-opacity`} />
          <FiMoon size={12} className={`${isDark ? 'opacity-100' : 'opacity-20'} text-blue-400 transition-opacity`} />
        </div>

        {/* The Moving Slider Thumb */}
        <div
          ref={thumbRef}
          className={`relative z-10 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 ${
            isDark ? 'bg-blue-500' : 'bg-white'
          }`}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <div ref={moonIconRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <FiMoon size={14} className="text-white" />
            </div>
            <div ref={sunIconRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <FiSun size={14} className="text-amber-500" />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;

