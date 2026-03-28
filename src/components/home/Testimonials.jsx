import React from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

function Testimonials() {
  return (
    <section className=" snap-start py-24 md:py-42 px-6 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }} 
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter">
            Client <span className="text-blue-400">Success</span>
          </h2>
        </motion.div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/5 border border-white/10 p-6 sm:p-8 md:p-10 rounded-[32px] backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                {/* Star Ratings */}
                <div className="flex gap-1 mb-4 text-orange-400">
                  {[...Array(5)].map((_, i) => <FiStar key={i} fill="currentColor" />)}
                </div>

                {/* Testimonial Text */}
                <p className="text-blue-100 text-base sm:text-lg font-bold italic mb-6 sm:mb-8 leading-relaxed">
                  "Ahmed's attention to detail is unmatched. He delivered our platform ahead of schedule!"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-black text-white text-sm">CR</div>
                <div>
                  <h4 className="text-white font-black text-sm uppercase">CEO, TechFlow</h4>
                  <span className="text-blue-400 text-xs uppercase tracking-wider">United States</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;