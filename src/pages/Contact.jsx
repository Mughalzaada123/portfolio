import React from "react";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

function Contact() {
  return (
    // FIX: lg:h-[calc(100vh-140px)] is based on TopHeader+Navbar height.
    // pt-4 ensures content is brought up near Navbar.
<div className="min-h-[calc(100vh-130px)] flex items-start justify-center pt-8 pb-8 px-4 sm:px-6 lg:px-8">    <div className="max-w-7xl w-full mx-auto">
        
        {/* Compact Header Section - Margins Reduced */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 lg:mb-10"
        >
          <span className="text-blue-600 font-black uppercase tracking-widest text-[10px] md:text-xs mb-1 block">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-none">
            Let’s Build Something <span className="text-blue-600">Great.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Contact Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 bg-[#0f172a] rounded-[32px] p-6 lg:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/20 blur-3xl rounded-full -mr-12 -mt-12"></div>
            
            <h3 className="text-xl font-black mb-8 relative z-10 uppercase tracking-tight">Contact Info</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all duration-300">
                  <FiPhone className="w-5 h-5 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-wider">Call</p>
                  <a href="tel:+923202108037" className="text-sm font-bold tracking-tight">+92 320 2108037</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all duration-300">
                  <FiMail className="w-5 h-5 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-wider">Email</p>
                  <a href="mailto:contact@devsol.pk" className="text-sm font-bold tracking-tight">contact@devsol.pk</a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all duration-300">
                  <FiMapPin className="w-5 h-5 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-wider">Location</p>
                  <p className="text-sm font-bold tracking-tight">Karachi, Pakistan</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                  <FiClock className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-wider">Status</p>
                  <p className="text-sm font-bold text-green-400 tracking-tight">Available Now</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 bg-white rounded-[32px] p-6 lg:p-12 shadow-xl border border-slate-100 flex flex-col justify-center"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-1" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5">
                <label className="text-slate-700 font-black text-[10px] uppercase tracking-wide ml-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 outline-none transition-all font-bold text-sm" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-slate-700 font-black text-[10px] uppercase tracking-wide ml-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 outline-none transition-all font-bold text-sm" />
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-slate-700 font-black text-[10px] uppercase tracking-wide ml-1">Subject</label>
                <input type="text" placeholder="Project Inquiry" className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 outline-none transition-all font-bold text-sm" />
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-slate-700 font-black text-[10px] uppercase tracking-wide ml-1">Message</label>
                <textarea rows="3" placeholder="How can we help?" className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-600 outline-none transition-all font-bold text-sm"></textarea>
              </div>

              <div className="md:col-span-2 pt-2">
                <button className="w-full md:w-auto px-12 py-4 bg-blue-600 text-white font-black text-base rounded-full shadow-lg shadow-blue-200 hover:bg-slate-900 transition-all active:scale-95 flex items-center justify-center gap-3 group">
                  Send Message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Contact;