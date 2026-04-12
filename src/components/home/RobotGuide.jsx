import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/Draggable';
import robotImg from '../../assets/robot.png';

gsap.registerPlugin(Draggable);

const RobotGuide = ({ activeSection }) => {
  const [message, setMessage] = useState("i will inform you about website");
  const [isLeft, setIsLeft] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showInitialHint, setShowInitialHint] = useState(true);
  
  const constraintsRef = useRef(null);
  const robotRef = useRef(null);
  const robotContainerRef = useRef(null);
  const messageRef = useRef(null);
  const hintRef = useRef(null);
  const shadowRef = useRef(null);

  const sectionData = {
    hero: { message: "Hey there! I'm your digital tour guide. Stick with me! ✨", position: 'left' },
    services: { message: "Scope out these skills! I taught him everything he knows. 😉", position: 'right' },
    projects: { message: "Warning: These projects are so cool they might freeze your screen! 🚀", position: 'left' },
    testimonials: { message: "Don't just take my word for it—see what the fans say! ⭐", position: 'right' },
    about: { message: "Wanna know the human behind the machine? Here's the scoop! ☕", position: 'left' },
    cta: { message: "Don't be shy! Let's build something epic together. 🤝", position: 'right' },
    footer: { message: "End of the line! But we can still be BFFs on socials. 👋", position: 'left' },
  };

  useGSAP(() => {
    // Floating robot animation
    gsap.to(robotRef.current, {
      y: -12,
      rotate: 2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Shadow animation
    gsap.to(shadowRef.current, {
      scale: 0.8,
      opacity: 0.1,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Draggable setup
    Draggable.create(robotContainerRef.current, {
      bounds: constraintsRef.current,
      type: "x,y",
      onDragStart: () => {
        gsap.to(robotContainerRef.current, { scale: 0.95, duration: 0.2 });
      },
      onDragEnd: () => {
        gsap.to(robotContainerRef.current, { scale: 1, duration: 0.2 });
      }
    });
  }, { scope: constraintsRef });

  useEffect(() => {
    if (activeSection && sectionData[activeSection]) {
      const data = sectionData[activeSection];
      setMessage(data.message);
      setIsLeft(data.position === 'left');
      
      const isMobile = window.innerWidth < 768;
      const targetX = data.position === 'left' 
        ? (isMobile ? 25 : 40) 
        : (isMobile ? window.innerWidth - 100 : window.innerWidth - 200);
      
      // Move robot container to section position
      gsap.to(robotContainerRef.current, {
        x: targetX,
        y: 0,
        rotateY: data.position === 'left' ? 0 : 180,
        duration: 0.8,
        ease: "power2.out"
      });
    }
  }, [activeSection]);

  // Handle message appearance
  useEffect(() => {
    if (showNotifications && messageRef.current) {
      gsap.fromTo(messageRef.current, 
        { opacity: 0, y: 15, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "back.out(1.7)" }
      );
    }
  }, [showNotifications, message]);

  const handleClick = () => {
    setShowNotifications(!showNotifications);
    setShowInitialHint(false);
  };

  return (
    <div ref={constraintsRef} className="fixed inset-0 pointer-events-none z-[100] perspective-[1000px] overflow-hidden">
      <div
        ref={robotContainerRef}
        onClick={handleClick}
        className="absolute bottom-12 w-20 md:w-36 lg:w-40 pointer-events-auto cursor-grab active:cursor-grabbing"
      >
        {/* Compact & Subtle Pulse Hint */}
        {showInitialHint && !showNotifications && activeSection === 'hero' && (
          <div
            ref={hintRef}
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-max"
          >
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-blue-500/30 shadow-lg flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-[10px] md:text-xs font-black text-slate-800 dark:text-white uppercase tracking-tighter">
                Tap for Secrets
              </span>
            </div>
            
            <div className="flex justify-center -mt-px">
              <div className="w-2 h-2 bg-white/80 dark:bg-slate-900/80 border-r border-b border-blue-500/30 rotate-45 transform origin-top-left ml-2 md:ml-0"></div>
            </div>
          </div>
        )}

        {/* Note / Speech Bubble */}
        {showNotifications && (
          <div
            ref={messageRef}
            className="absolute -top-24 md:-top-32 left-1/2 -translate-x-1/2 ml-3 md:ml-0 w-36 md:w-52"
          >
            <div 
              className={`bg-white/40 dark:bg-slate-900/60 backdrop-blur-lg p-2 md:p-4 rounded-xl md:rounded-2xl shadow-xl border-2 border-blue-500/50 text-[10px] md:text-[13px] font-black text-gray-900 dark:text-white text-center relative
                ${!isLeft ? 'scale-x-[-1]' : ''}
              `}
            >
              <div className={!isLeft ? 'scale-x-[-1]' : ''}>
                {message}
              </div>
              
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/40 backdrop-blur-lg border-b-2 border-r-2 border-blue-500/50 rotate-45"></div>
            </div>
          </div>
        )}

        {/* Robot Image */}
        <div ref={robotRef} className="relative">
          <img
            src={robotImg}
            alt="Robot Guide"
            className="w-full h-auto drop-shadow-2xl select-none pointer-events-none"
          />
          
          <div 
            ref={shadowRef}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-3 bg-black/20 rounded-full blur-lg -z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default RobotGuide;

