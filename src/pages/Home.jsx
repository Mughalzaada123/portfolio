import React from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";
import Testimonials from "../components/home/Testimonials";
import About from "../components/home/About";
import CTA from "../components/home/CTA";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    // overflow-x-hidden is crucial to stop mobile horizontal scrolling
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-white overflow-x-hidden">
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <About />
      <CTA />
      <Footer/>
    </div>
  );
}

export default Home;