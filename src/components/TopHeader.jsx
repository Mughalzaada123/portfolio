import { FiPhone, FiMail, FiArrowRight } from "react-icons/fi";

function TopHeader() {
  return (
    <div className="bg-[#0f172a] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 relative z-10">
        <div className="flex flex-row justify-between items-center gap-4 overflow-x-auto no-scrollbar">
          
          {/* Left Side: Heavy Typography Links */}
          <div className="flex flex-row items-center gap-4 md:gap-10 shrink-0">
            
            {/* Phone Link */}
            <a
              href="tel:+923202108037"
              className="flex items-center gap-3 group whitespace-nowrap"
            >
              <div className="bg-blue-600 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                <FiPhone className="text-white w-4 h-4" />
              </div>
              <div className="flex flex-col justify-center">
                {/* Labels now visible on all screens with font-black */}
                <span className="text-blue-400 font-black uppercase tracking-[0.15em] text-[10px] md:text-[11px] leading-tight">
                  Call Us
                </span>
                <span className="font-black text-[14px] md:text-[16px] tracking-tighter text-white group-hover:text-blue-400 transition-colors">
                  +92 320 2108037
                </span>
              </div>
            </a>

            {/* Vertical Divider - Visible only on Desktop to keep mobile clean */}
            <div className="hidden md:block h-8 w-[2px] bg-white/10 shrink-0"></div>

            {/* Email Link */}
            <a
              href="mailto:mrahmedrazabaig@gmail.com"
              className="flex items-center gap-3 group whitespace-nowrap"
            >
              <div className="bg-blue-600 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                <FiMail className="text-white w-4 h-4" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-blue-400 font-black uppercase tracking-[0.15em] text-[10px] md:text-[11px] leading-tight">
                  Email Us
                </span>
                <span className="font-black text-[14px] md:text-[16px] tracking-tighter text-white group-hover:text-blue-400 transition-colors">
                  mrahmedrazabaig@gmail.com
                </span>
              </div>
            </a>
          </div>

          {/* Right Side: Heavy Style Status Badge */}
          <div className="hidden xl:flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
               <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-[12px] font-black uppercase tracking-[0.2em] text-white">
                Status: <span className="text-green-400">Available</span>
              </span>
              <FiArrowRight className="text-blue-500" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TopHeader;``