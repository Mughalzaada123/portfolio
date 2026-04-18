import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThemeToggle from "./ThemeToggle";
import { useAppReady } from '../context/AppReadyContext';

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");
  const [previousActive, setPreviousActive] = useState("#hero");
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();
  const appReady = useAppReady();
  const navItemRefs = useRef({});

  const menuItems = [
    { name: "Home", path: "#hero" },
    { name: "Services", path: "#services" },
    { name: "Projects", path: "#projects" },
    { name: "Testimonials", path: "#testimonials" },
    { name: "About Us", path: "#about" },
    { name: "Contact", path: "#cta" },
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setActiveHash(path);
    setIsOpen(false);
    
    const element = document.querySelector(path);
    if (element) {
      // Offset for navbar spacing
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Reset animations for this section INSTANTLY so there is no glitch/flash
      const triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        if (trigger.trigger && (element.contains(trigger.trigger) || trigger.trigger === element)) {
          if (trigger.animation) {
            trigger.animation.progress(0).pause();
          }
        }
      });

      // Play the animation after the smooth scroll completes (approx 600ms)
      setTimeout(() => {
        triggers.forEach(trigger => {
          if (trigger.trigger && (element.contains(trigger.trigger) || trigger.trigger === element)) {
            if (trigger.animation) {
              trigger.animation.play();
            }
          }
        });
      }, 600);
    }
  };

  // Simplified scroll tracking
  useGSAP(() => {
    const sections = document.querySelectorAll("section[id], div[id='hero']");
    
    sections.forEach((section) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveHash(`#${section.id}`);
            }
          }
        }
      });
    });
  }, []);


  useEffect(() => {
    if (location.hash) {
      setActiveHash(location.hash);
    }
  }, [location.hash]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2
    });
  }, []);

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
      gsap.from(".mobile-link", {
        y: 15,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: "power2.out",
        delay: 0.1
      });
    } else {
      gsap.to(mobileMenuRef.current, { 
        height: 0, 
        opacity: 0, 
        duration: 0.3, 
        ease: "power2.in" 
      });
    }
  }, [isOpen]);

  // Navbar entrance animation
  useGSAP(() => {
    // Only run animation after loader has exited
    if (!appReady) return;
    
    gsap.from(navRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.1
    });
  }, { dependencies: [appReady] });

  const handleLogoHover = (e) => {
    gsap.to(e.currentTarget, { rotate: 180, scale: 1.1, duration: 0.5 });
  };

  const handleLogoLeave = (e) => {
    gsap.to(e.currentTarget, { rotate: 0, scale: 1, duration: 0.5 });
  };

  const handleLinkTap = (e) => {
    gsap.to(e.currentTarget, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });
  };

  // Wobble effect for active navigation item
  useGSAP(() => {
    if (activeHash !== previousActive && previousActive) {
      const activeRef = navItemRefs.current[activeHash];
      if (activeRef) {
        // Kill any existing animations on this element
        gsap.killTweensOf(activeRef);
        
        // Create jelly-like left-right wobble timeline
        const tl = gsap.timeline({
          onComplete: () => {
            gsap.set(activeRef, { x: 0, scaleX: 1, scaleY: 1 });
            setPreviousActive(activeHash);
          }
        });
        
        tl.to(activeRef, {
          x: 2,
          scaleX: 0.98,
          scaleY: 1.02,
          duration: 0.15,
          ease: "power2.out"
        })
        .to(activeRef, {
          x: -2,
          scaleX: 1.02,
          scaleY: 0.98,
          duration: 0.3,
          ease: "sine.inOut"
        })
        .to(activeRef, {
          x: 1,
          scaleX: 0.99,
          scaleY: 1.01,
          duration: 0.2,
          ease: "sine.inOut"
        })
        .to(activeRef, {
          x: -1,
          scaleX: 1.01,
          scaleY: 0.99,
          duration: 0.2,
          ease: "sine.inOut"
        })
        .to(activeRef, {
          x: 0,
          scaleX: 1,
          scaleY: 1,
          duration: 0.25,
          ease: "power2.inOut"
        });
      } else {
        // Fallback: update previous state even if ref not found
        setPreviousActive(activeHash);
      }
    }
  }, [activeHash, previousActive]);

  // Wobble effect for active item - temporarily disabled
  // useGSAP(() => {
  //   if (activeHash !== previousActive && previousActive) {
  //     const activeElement = document.querySelector(`a[href="${activeHash}"]`);
  //     if (activeElement) {
  //       gsap.fromTo(activeElement,
  //         { rotate: 0, scale: 1 },
  //         {
  //           rotate: 5,
  //           scale: 1.05,
  //           duration: 0.15,
  //           yoyo: true,
  //           repeat: 3,
  //           ease: "power2.inOut",
  //           onComplete: () => {
  //             gsap.set(activeElement, { rotate: 0, scale: 1 });
  //           }
  //         }
  //       );
  //     }
  //     setPreviousActive(activeHash);
  //   }
  // }, [activeHash, previousActive]);

  return (
    <div className="fixed top-0 left-0 w-full pt-2 sm:pt-3 z-[100] px-2 sm:px-4">
      <nav
        ref={navRef}
        className="mx-auto border border-gray-100 dark:border-slate-700/50 shadow-2xl bg-white/95 dark:bg-slate-900/80 backdrop-blur-md overflow-hidden w-full max-w-7xl rounded-[25px] sm:rounded-[35px]"
      >
        <div className="px-3 sm:px-5 py-2 sm:py-2.5">
          <div className="flex justify-between items-center h-9 sm:h-10 md:h-12">

            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer shrink-0">
              <div
                onMouseEnter={handleLogoHover}
                onMouseLeave={handleLogoLeave}
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-black text-xs sm:text-sm md:text-base shadow-lg"
              >
                AR
              </div>
              <div>
                <h1 className="font-black tracking-tighter text-gray-900 dark:text-white text-xs sm:text-sm md:text-base lg:text-xl">
                  Ahmed Raza <span className="text-blue-600">Dev</span>
                </h1>
              </div>
            </Link>

            <div className="hidden md:flex lg:hidden items-center gap-1">
              {menuItems.map((item) => {
                const isActive = activeHash === item.path;
                return (
                  <a
                    key={item.name}
                    ref={(el) => navItemRefs.current[item.path] = el}
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className="relative px-2 py-1.5 text-[10px] font-black tracking-tight transition-colors duration-300 min-w-[60px] text-center"
                  >
                    <span className={`relative z-10 ${isActive ? "text-white" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}>
                      {item.name}
                    </span>
                    {isActive && (
                      <div
                        className="active-pill absolute inset-0 bg-blue-600 rounded-full shadow-lg"
                      />
                    )}
                  </a>
                );
              })}
              <div className="ml-2 pl-2 border-l border-gray-100 dark:border-slate-800 relative z-30 pointer-events-auto">
                <ThemeToggle />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {menuItems.map((item) => {
                const isActive = activeHash === item.path;
                return (
                  <a
                    key={item.name}
                    ref={(el) => navItemRefs.current[item.path] = el}
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className="relative px-4 sm:px-5 py-2 text-[12px] sm:text-[14px] lg:text-[15px] font-black tracking-tight transition-colors duration-300 min-w-[80px] text-center"
                  >
                    <span className={`relative z-10 ${isActive ? "text-white" : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}`}>
                      {item.name}
                    </span>
                    {isActive && (
                      <div
                        className="active-pill absolute inset-0 bg-blue-600 rounded-full shadow-lg"
                      />
                    )}
                  </a>
                );
              })}
              <div className="ml-4 sm:ml-6 pl-4 sm:pl-6 border-l border-gray-100 dark:border-slate-800 relative z-30 pointer-events-auto">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Actions (Toggle + Theme) */}
            <div className="md:hidden flex items-center gap-2 sm:gap-3 relative z-30 pointer-events-auto">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                onMouseDown={handleLinkTap}
                className="p-1.5 sm:p-2 text-gray-900 dark:text-white focus:outline-none flex items-center justify-center transition-transform"
              >
                {isOpen ? <FiX size={20} sm:size={24} /> : <FiMenu size={20} sm:size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            ref={mobileMenuRef}
            className="lg:hidden overflow-hidden"
            style={{ height: 0, opacity: 0 }}
          >
            <div className="flex flex-col gap-1.5 pb-3 sm:pb-4 mt-2 sm:mt-3 border-t border-gray-50 dark:border-slate-800 pt-3 sm:pt-4 px-1 sm:px-2">
              {menuItems.map((item) => {
                const isActive = location.hash === item.path || (!location.hash && item.path === "#hero");
                return (
                  <div key={item.name} className="mobile-link">
                    <a
                      href={item.path}
                      onClick={(e) => handleNavClick(e, item.path)}
                      className={`w-full block text-center py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-black tracking-tight transition-all
                        ${isActive
                          ? "bg-blue-600 text-white shadow-md"
                          : "text-gray-700 active:bg-blue-50 dark:text-gray-300 dark:active:bg-slate-800"
                        }`}
                    >
                      {item.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
