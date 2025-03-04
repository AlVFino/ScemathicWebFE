import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./HalamanUtama/Navbar";
import Hero from "./HalamanUtama/Hero";
import Course from "./HalamanUtama/Course";
import AllC1 from "./HalamanRouterReact/AllC1";
import Event from "./HalamanUtama/Event";
import AllE1 from "./HalamanRouterReact/AllE1";
import AboutMe from "./HalamanRouterReact/AboutMe";
import Keunggulan from "./HalamanUtama/Keunggulan";
import TestimonialsSection from "./HalamanUtama/testimoni";
import Contact from "./HalamanUtama/Footer";
import FAQ from "./HalamanUtama/FAQ";
import ContactSection from "./HalamanRouterReact/kontak";
import Login from "./Login/Regis/Login";
import Regis from "./Login/Regis/Regis";
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
