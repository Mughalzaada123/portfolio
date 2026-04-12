import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/home/Hero";
import Marquee from "../components/home/Marquee";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";
import Testimonials from "../components/home/Testimonials";
import About from "../components/home/About";
import CTA from "../components/home/CTA";
import Footer from "../components/Footer";
import RobotGuide from "../components/home/RobotGuide";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const containerRef = useRef(null);

  useGSAP(() => {
    // Only track direct child sections to avoid nested conflict
    const sections = Array.from(containerRef.current.querySelectorAll(':scope > section'));


    // Tracking active section for RobotGuide (without snapping)
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(section.id),
        onEnterBack: () => setActiveSection(section.id),
      });
    });

    // Refresh triggers to ensure height is calculated correctly
    ScrollTrigger.refresh();
  }, { scope: containerRef });






  return (
    <div
      ref={containerRef}
      className="bg-white dark:bg-slate-950 relative overflow-x-hidden"
    >
      <RobotGuide activeSection={activeSection} />

      <section id="hero" className="min-h-screen">
        <Hero />
      </section>

      <Marquee />

      <section id="services" className="min-h-screen">
        <Services />
      </section>

      <section id="projects" className="min-h-screen">
        <Projects />
      </section>

      <section id="testimonials" className="min-h-screen">
        <Testimonials />
      </section>

      <section id="about" className="min-h-screen">
        <About />
      </section>

      <section id="cta" className="min-h-screen">
        <CTA />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default Home;

