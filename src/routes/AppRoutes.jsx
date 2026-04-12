import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Careers from "../pages/Careers";
import FAQ from "../pages/FAQ";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}

export default AppRoutes;