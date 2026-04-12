import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "#hero" },
    { name: "Services", path: "#services" },
    { name: "Projects", path: "#projects" },
    { name: "Testimonials", path: "#testimonials" },
    { name: "About Us", path: "#about" },
    { name: "Contact", path: "#cta" },
  ];

  // Dynamically track active section on scroll using ScrollTrigger
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

  const handleLogoHover = (e) => {
    gsap.to(e.currentTarget, { rotate: 180, scale: 1.1, duration: 0.5 });
  };

  const handleLogoLeave = (e) => {
    gsap.to(e.currentTarget, { rotate: 0, scale: 1, duration: 0.5 });
  };

  const handleLinkTap = (e) => {
    gsap.to(e.currentTarget, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });
  };

  return (
    <div className="fixed top-0 left-0 w-full pt-3 z-50 pointer-events-none px-4">
      <nav
        ref={navRef}
        className="mx-auto border border-gray-100 dark:border-slate-700/50 shadow-2xl pointer-events-auto bg-white/95 dark:bg-slate-900/80 backdrop-blur-md overflow-hidden min-w-[280px] w-auto max-w-7xl rounded-[35px]"
        style={{ width: isOpen ? "100%" : "auto" }}
      >
        <div className="px-5 py-2.5">
          <div className="flex justify-between items-center h-10 md:h-12">

            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-2 group cursor-pointer shrink-0">
              <div
                onMouseEnter={handleLogoHover}
                onMouseLeave={handleLogoLeave}
                className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-black text-base shadow-lg"
              >
                AR
              </div>
              <h1 className="font-black tracking-tighter text-gray-900 dark:text-white text-lg md:text-xl">
                Ahmed Raza <span className="text-blue-600">Dev</span>
              </h1>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => {
                const isActive = activeHash === item.path;
                return (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={() => setActiveHash(item.path)}
                    className="relative px-4 py-2 text-[14px] lg:text-[15px] font-black tracking-tight transition-colors duration-300"
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
              <div className="ml-4 pl-4 border-l border-gray-100 dark:border-slate-800 relative z-30 pointer-events-auto">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Actions (Toggle + Theme) */}
            <div className="md:hidden flex items-center gap-3 relative z-30 pointer-events-auto">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                onMouseDown={handleLinkTap}
                className="p-2 text-gray-900 dark:text-white focus:outline-none flex items-center justify-center transition-transform"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            ref={mobileMenuRef}
            className="md:hidden overflow-hidden"
            style={{ height: 0, opacity: 0 }}
          >
            <div className="flex flex-col gap-1.5 pb-4 mt-3 border-t border-gray-50 pt-4 px-2">
              {menuItems.map((item) => {
                const isActive = location.hash === item.path || (!location.hash && item.path === "#hero");
                return (
                  <div key={item.name} className="mobile-link">
                    <a
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`w-full block text-center py-3 rounded-xl text-base font-black tracking-tight transition-all
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