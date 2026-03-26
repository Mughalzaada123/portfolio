import React from "react";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-blue-600 font-black uppercase tracking-widest text-sm mb-3">
            Get In Touch
          </h2>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter">
            Let’s Build Something <span className="text-blue-600">Great.</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Have a project in mind or just want to say hi? Feel free to reach out. 
            We usually respond within 2 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Contact Information Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 bg-[#0f172a] rounded-[32px] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full -mr-16 -mt-16"></div>
            
            <h3 className="text-2xl font-black mb-8 relative z-10">Contact Information</h3>
            
            <div className="space-y-8 relative z-10">
              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <FiPhone className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">Call Us</p>
                  <a href="tel:+923202108037" className="text-lg font-bold hover:text-blue-400 transition-colors">
                    +92 320 2108037
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <FiMail className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">Email Us</p>
                  <a href="mailto:contact@devsol.pk" className="text-lg font-bold hover:text-blue-400 transition-colors">
                    contact@devsol.pk
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <FiMapPin className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">Location</p>
                  <p className="text-lg font-bold">Karachi, Pakistan</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 group border-t border-white/10 pt-8">
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center shrink-0">
                  <FiClock className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">Business Hours</p>
                  <p className="text-lg font-bold">Mon - Sat: 9AM - 8PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-white rounded-[32px] p-8 md:p-12 shadow-xl border border-slate-100"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-slate-700 font-black text-sm uppercase tracking-wide">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-bold"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-slate-700 font-black text-sm uppercase tracking-wide">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-bold"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-slate-700 font-black text-sm uppercase tracking-wide">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-bold"
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-slate-700 font-black text-sm uppercase tracking-wide">Message</label>
                <textarea 
                  rows="5"
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 outline-none transition-all font-bold"
                ></textarea>
              </div>

              <div className="md:col-span-2 pt-4">
                <button 
                  className="w-full md:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black text-lg rounded-full shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all active:scale-95 flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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