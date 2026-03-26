import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contactus" },
  ];

  // Variants for Staggered Links
  const containerVars = {
    initial: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const linkVars = {
    initial: { y: 20, opacity: 0, scale: 0.9 },
    animate: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 } 
    },
    exit: { y: 10, opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <div className="sticky top-0 z-50 w-full py-4 pointer-events-none px-4">
      <motion.nav
        // Snappy Spring Animation for the container
        animate={{
          width: isOpen ? "100%" : "auto",
          borderRadius: isOpen ? "32px" : "100px",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="mx-auto border border-gray-100 shadow-2xl pointer-events-auto bg-white/95 backdrop-blur-md overflow-hidden md:w-max min-w-[300px] lg:w-4/5 lg:max-w-7xl"
      >
        <div className="px-6 py-3">
          <div className="flex justify-between items-center h-12 md:h-14">
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3 group cursor-pointer shrink-0">
              <motion.div 
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-black text-lg shadow-lg"
              >
                AR
              </motion.div>
              <h1 className="font-black tracking-tighter text-gray-900 text-xl md:text-2xl">
                Ahmed Raza <span className="text-blue-600">Dev</span>
              </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="relative px-5 py-2.5 text-[15px] lg:text-[16px] font-black tracking-tight transition-colors duration-300"
                  >
                    <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-white" : "text-gray-700 hover:text-blue-600"}`}>
                      {item.name}
                    </span>
                    
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-200"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Toggle with Rotation Animation */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                className="p-3 text-gray-900 hover:bg-gray-100 rounded-full focus:outline-none"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                      <FiX size={28} />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                      <FiMenu size={28} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu: Staggered "Pop-in" Animation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="md:hidden overflow-hidden"
              >
                <motion.div 
                  variants={containerVars}
                  initial="initial"
                  animate="animate"
                  exit="initial"
                  className="flex flex-col gap-2 pb-6 mt-4 border-t border-gray-50 pt-6"
                >
                  {menuItems.map((item) => (
                    <motion.div key={item.name} variants={linkVars}>
                      <Link
                        to={item.path}
                        className={`w-full block text-center py-4 rounded-2xl text-[18px] font-black tracking-tight transition-all
                          ${location.pathname === item.path 
                            ? "bg-blue-600 text-white shadow-xl shadow-blue-100 scale-105" 
                            : "text-gray-700 active:bg-blue-50"
                          }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
}

export default Navbar;