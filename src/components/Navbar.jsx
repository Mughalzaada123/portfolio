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

  return (
    <div className="sticky top-0 z-50 w-full py-4 pointer-events-none px-2 sm:px-0">
      <nav
        className={`
          mx-auto border border-gray-100 shadow-xl pointer-events-auto
          bg-white/95 backdrop-blur-md transition-all duration-500 ease-in-out overflow-hidden
          /* Circle effect fix: rounded-full ki jagah [100px] use kiya hai */
          ${isOpen ? "rounded-[30px] w-full sm:w-[92%]" : "rounded-[100px] w-full md:w-[90%] lg:w-4/5"}
        `}
      >
        <div className="px-6 py-3">
          <div className="flex justify-between items-center">
            
            {/* Logo: Font-Black (Maximum Bold) */}
            <Link to="/" className="flex items-center gap-3 group cursor-pointer shrink-0">
              <motion.div 
                whileHover={{ rotate: [0, -15, 15, -15, 0], scale: 1.1 }}
                className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-blue-600 text-white font-black text-lg shadow-lg"
              >
                AR
              </motion.div>
              <h1 className="font-black tracking-tighter text-gray-900 text-xl md:text-2xl">
                Ahmed Raza <span className="text-blue-600">Dev</span>
              </h1>
            </Link>

            {/* Desktop Menu: Font-Bold */}
            <div className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="relative px-5 py-2.5 text-[15px] lg:text-[16px] font-bold tracking-tight transition-colors duration-300"
                  >
                    <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-white" : "text-gray-700 hover:text-blue-600"}`}>
                      {item.name}
                    </span>
                    
                    {isActive && (
                      <motion.div
                        layoutId="wobblePill"
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 20 
                        }}
                        className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-200"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
              >
                {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu: Font-Bold aur Smooth Height transition */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="md:hidden overflow-hidden"
              >
                <div className="flex flex-col gap-1 pb-4 mt-4 border-t border-gray-50 pt-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`w-full text-center py-4 rounded-2xl text-[17px] font-bold tracking-wide transition-all duration-200
                        ${location.pathname === item.path 
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-100" 
                          : "text-gray-700 active:bg-blue-50"
                        }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;