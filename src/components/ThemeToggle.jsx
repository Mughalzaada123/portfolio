import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const thumbRef = useRef(null);
  const trackRef = useRef(null);
  const isFirstRun = useRef(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const dark = savedTheme === 'dark';
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    setIsDark(dark);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !thumbRef.current) return;
    if (isFirstRun.current) {
      gsap.set(thumbRef.current, { x: isDark ? 30 : 0 });
      isFirstRun.current = false;
      return;
    }
    gsap.to(thumbRef.current, {
      x: isDark ? 30 : 0,
      duration: 0.45,
      ease: 'back.out(2)',
    });
    // Subtle scale pulse on the track
    gsap.fromTo(trackRef.current,
      { scale: 0.95 },
      { scale: 1, duration: 0.3, ease: 'back.out(2)' }
    );
  }, [isDark, mounted]);

  const toggleTheme = (e) => {
    e.stopPropagation();
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) return <div className="w-[68px] h-9" />;

  return (
    <button
      ref={trackRef}
      onClick={toggleTheme}
      onMouseDown={(e) => e.preventDefault()}
      type="button"
      aria-label="Toggle theme"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #0f172a 0%, #1a2744 100%)'
          : 'linear-gradient(135deg, #fef3c7 0%, #fde68a 60%, #fbbf24 100%)',
        boxShadow: isDark
          ? `0 0 0 1.5px color-mix(in srgb, var(--primary-600) 40%, transparent), 0 4px 20px color-mix(in srgb, var(--primary-600) 25%, transparent), inset 0 1px 0 rgba(255,255,255,0.07)`
          : '0 0 0 1.5px rgba(251,191,36,0.5), 0 4px 20px rgba(251,191,36,0.35), inset 0 1px 0 rgba(255,255,255,0.6)',
        transition: 'background 0.35s ease, box-shadow 0.35s ease',
      }}
      className="relative w-[68px] h-9 rounded-full flex items-center px-1 cursor-pointer overflow-hidden"
    >
      {/* --- Dark mode background: stars --- */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
          {[
            { top: '18%', left: '12%', size: 1.5, delay: '0s' },
            { top: '55%', left: '20%', size: 1,   delay: '0.4s' },
            { top: '30%', left: '32%', size: 2,   delay: '0.8s' },
            { top: '70%', left: '35%', size: 1,   delay: '0.2s' },
            { top: '15%', left: '50%', size: 1.5, delay: '0.6s' },
          ].map((s, i) => (
            <span
              key={i}
              style={{
                position: 'absolute',
                top: s.top,
                left: s.left,
                width: s.size,
                height: s.size,
                borderRadius: '50%',
                background: 'white',
                opacity: 0.7,
                animation: `starPulse 2s ${s.delay} ease-in-out infinite`,
              }}
            />
          ))}
        </div>
      )}

      {/* --- Light mode background: sun rays --- */}
      {!isDark && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full flex items-center justify-start pl-2">
          {[0, 30, 60, 90, 120, 150].map((deg, i) => (
            <span
              key={i}
              style={{
                position: 'absolute',
                width: 10,
                height: 1.5,
                borderRadius: 9999,
                background: 'rgba(180,100,0,0.25)',
                transformOrigin: '0 50%',
                transform: `rotate(${deg}deg) translateX(8px)`,
                left: '18%',
                top: '50%',
                marginTop: -0.75,
                animation: `rayRotate 6s linear infinite`,
              }}
            />
          ))}
        </div>
      )}

      {/* --- Thumb --- */}
      <div
        ref={thumbRef}
        style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 10,
          background: isDark
            ? 'var(--primary-600)'
            : 'linear-gradient(135deg, #f97316, #fcd34d)',
          boxShadow: isDark
            ? `0 2px 16px color-mix(in srgb, var(--primary-600) 70%, transparent), 0 0 0 2px rgba(255,255,255,0.12)`
            : '0 2px 12px rgba(251,146,60,0.6), 0 0 0 2px rgba(255,255,255,0.5)',
          transition: 'background 0.35s, box-shadow 0.35s',
        }}
      >
        {isDark ? (
          /* Moon SVG */
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
          </svg>
        ) : (
          /* Sun SVG */
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1"  x2="12" y2="3"  stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="12" y1="21" x2="12" y2="23" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"  stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="1"  y1="12" x2="3"  y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="21" y1="12" x2="23" y2="12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        )}
      </div>

    </button>
  );
};

export default ThemeToggle;

