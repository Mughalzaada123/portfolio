import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Route change hone par mobile menu band karne ke liye
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

  // Mobile menu links ke animation variants
  const containerVars = {
    initial: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
  };

  const linkVars = {
    initial: { y: 15, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 300, damping: 25 } 
    },
    exit: { y: 10, opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <div className="fixed top-0 left-0 w-full pt-3 z-50 pointer-events-none px-4">
      <motion.nav
        // Width animate hogi lekin borderRadius ab fixed rahega
        animate={{
          width: isOpen ? "100%" : "auto",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 35 }}
        // "rounded-[35px]" yahan constant rakha gaya hai taaki corners animate na hon
        className="mx-auto border border-gray-100 shadow-2xl pointer-events-auto bg-white/95 backdrop-blur-md overflow-hidden md:w-max min-w-[280px] lg:w-4/5 lg:max-w-7xl rounded-[35px]"
      >
        <div className="px-5 py-2.5">
          <div className="flex justify-between items-center h-10 md:h-12">
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-2 group cursor-pointer shrink-0">
              <motion.div 
                whileHover={{ rotate: 180, scale: 1.1 }}
                className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-black text-base shadow-lg"
              >
                AR
              </motion.div>
              <h1 className="font-black tracking-tighter text-gray-900 text-lg md:text-xl">
                Ahmed Raza <span className="text-blue-600">Dev</span>
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="relative px-4 py-2 text-[14px] lg:text-[15px] font-black tracking-tight transition-colors duration-300"
                  >
                    <span className={`relative z-10 ${isActive ? "text-white" : "text-gray-700 hover:text-blue-600"}`}>
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-blue-600 rounded-full shadow-lg"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-900 focus:outline-none"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                      <FiX size={24} />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                      <FiMenu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="md:hidden overflow-hidden"
              >
                <motion.div 
                  variants={containerVars}
                  initial="initial"
                  animate="animate"
                  exit="initial"
                  className="flex flex-col gap-1.5 pb-4 mt-3 border-t border-gray-50 pt-4 px-2"
                >
                  {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <motion.div key={item.name} variants={linkVars}>
                        <Link
                          to={item.path}
                          className={`w-full block text-center py-3 rounded-xl text-base font-black tracking-tight transition-all
                            ${isActive 
                              ? "bg-blue-600 text-white shadow-md" 
                              : "text-gray-700 active:bg-blue-50"
                            }`}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
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