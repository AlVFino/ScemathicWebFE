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

// bagian dasboard admin
import DasboardAdmin from "./dasboardAdmin/dasboard_admin";
import CourseAdmin from "./dasboardAdmin/course_admin";
import Event_admin from "./dasboardAdmin/event_admin";
import Profil_admin from "./dasboardAdmin/profil_admin";
import FormEventAdmin from "./FormAdmin/FormEventAdmin";


//bagian dasboard user
import DashboardUser from "./dasboardUser/dasboard_user";
import CourseUser from "./dasboardUser/course_user";
import Event_user from "./dasboardUser/event_user";
import Profil_user from "./dasboardUser/profil_user";


function AppContent() {
  const location = useLocation(); // Dapatkan path saat ini
  const hideNavbarFooter = ["/Login", "/Regis", "/FormEventAdmin"].includes(location.pathname);

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
        {/* dasboard admin */}
        <Route path="/dasboard_admin" element={<DasboardAdmin />} />
        <Route path="/course_admin" element={<CourseAdmin />} />
        <Route path="/event_admin" element={<Event_admin />} />
        <Route path="/profil_admin" element={<Profil_admin />} />
        <Route path="/FormEventAdmin" element={<FormEventAdmin />} />

        {/* dasboard user */}
        <Route path="/dasboard_user" element={<DashboardUser />} />
        <Route path="/course_user" element={<CourseUser />} />
        <Route path="/event_user" element={<Event_user />} />
        <Route path="/profil_user" element={<Profil_user />} />
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
