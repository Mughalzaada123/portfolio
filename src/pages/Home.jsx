import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/home/Hero";
import Marquee from "../components/home/Marquee";
import Services from "../components/home/Services";
import LogoLoop from "../components/home/LogoLoop";
import Projects from "../components/home/Projects";
import Testimonials from "../components/home/Testimonials";
import About from "../components/home/About";
import CTA from "../components/home/CTA";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Refresh triggers to ensure height is calculated correctly
    ScrollTrigger.refresh();
  }, { scope: containerRef });






  return (
    <div
      ref={containerRef}
      className="bg-white dark:bg-slate-950 relative overflow-x-hidden"
    >

      <section id="hero" className="min-h-screen">
        <Hero />
      </section>

      <Marquee />

      <section id="services">
        <Services />
      </section>

      <LogoLoop />

      <section id="projects">
        <Projects />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="cta">
        <CTA />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default Home;

