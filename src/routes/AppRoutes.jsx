import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Home" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/contactus" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;