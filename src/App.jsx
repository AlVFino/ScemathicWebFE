import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Course from "./Course";
import AllC1 from "./AllC1";
import Event from "./Event";
import AllE1 from "./AllE1";
import AboutMe from "./AboutMe";
import Keunggulan from "./Keunggulan";
import TestimonialsSection from "./testimoni";
import Contact from "./Footer";
import FAQ from "./FAQ";
import ContactSection from "./kontak";
import Login from "./Login";
import Regis from "./Regis";
import DasboardCourse from "./MenuCourse/MenuCourse";
import DasboardEvent from "./MenuEvent/MenuEvent";

function AppContent() {
  const location = useLocation(); // Dapatkan path saat ini
  const hideNavbarFooter = ["/Login", "/Regis"].includes(location.pathname);

  return (
    <>
      {!hideNavbarFooter && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Course />
              <Event />
              <Keunggulan />
              <FAQ />
              <TestimonialsSection />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/Regis" element={<Regis />} />
        <Route path="/AllC1" element={<AllC1 />} />
        <Route path="/AllE1" element={<AllE1 />} />
        <Route path="/About" element={<AboutMe />} />
        <Route path="/Contact" element={<ContactSection />} />
        <Route path="/MenuCourse" element={<DasboardCourse />} />
        <Route path="/MenuEvent" element={<DasboardEvent />} />
      </Routes>

      {!hideNavbarFooter && <Contact />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
