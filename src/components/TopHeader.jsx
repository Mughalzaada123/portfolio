import { FiPhone, FiMail, FiArrowRight } from "react-icons/fi";

function TopHeader() {
  return (
    /* Background changed to White/Slate match Home Theme */
    <div className="bg-white text-slate-900 border-b border-gray-100 relative overflow-hidden">
      {/* Subtle Blue Glow matching Home Hero Section */}
      <div className="absolute top-0 right-0 w-32 h-full bg-blue-600/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 relative z-10">
        {/* Flex behavior optimized to prevent overflow/slider */}
        <div className="flex flex-row justify-between items-center gap-2 sm:gap-4">
          
          {/* Left Side: Heavy Typography Links */}
          <div className="flex flex-row items-center gap-3 sm:gap-6 md:gap-10 shrink-0">
            
            {/* Phone Link */}
            <a
              href="tel:+923202108037"
              className="flex items-center gap-2 group whitespace-nowrap"
            >
              <div className="bg-blue-600 p-1.5 md:p-2 rounded-lg md:rounded-xl group-hover:bg-slate-900 transition-all duration-300 shadow-md shadow-blue-200">
                <FiPhone className="text-white w-3 h-3 md:w-4 md:h-4" />
              </div>
              <div className="flex flex-col justify-center leading-none">
                {/* Responsive Label: Hidden on very small mobile to prevent slider */}
                <span className="hidden sm:block text-blue-600 font-black uppercase tracking-[0.1em] text-[10px] md:text-[11px] mb-0.5">
                  Call Us
                </span>
                <span className="font-black text-[11px] md:text-[15px] tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">
                  +92 320 2108037
                </span>
              </div>
            </a>

            {/* Vertical Divider */}
            <div className="h-4 md:h-8 w-[1.5px] bg-gray-200 shrink-0"></div>

            {/* Email Link */}
            <a
              href="mailto:mrahmedrazabaig@gmail.com"
              className="flex items-center gap-2 group whitespace-nowrap"
            >
              <div className="bg-blue-600 p-1.5 md:p-2 rounded-lg md:rounded-xl group-hover:bg-slate-900 transition-all duration-300 shadow-md shadow-blue-200">
                <FiMail className="text-white w-3 h-3 md:w-4 md:h-4" />
              </div>
              <div className="flex flex-col justify-center leading-none">
                <span className="hidden sm:block text-blue-600 font-black uppercase tracking-[0.1em] text-[10px] md:text-[11px] mb-0.5">
                  Email Us
                </span>
                <span className="font-black text-[10px] sm:text-[11px] md:text-[15px] tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">
                  mrahmedrazabaig@gmail.com
                </span>
              </div>
            </a>
          </div>

          {/* Right Side: Heavy Style Status Badge (Hidden on mobile to ensure zero slider) */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-50 border border-gray-100">
               <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-500">
                Status: <span className="text-green-600">Available</span>
              </span>
              <FiArrowRight className="text-blue-600" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TopHeader;