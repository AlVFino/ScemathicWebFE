import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./HalamanUtama/Navbar";
import Hero from "./HalamanUtama/Hero";
import Course from "./HalamanUtama/Course";
import Course2 from "./HalamanRouterReact/Course2";
import Event from "./HalamanUtama/Event";
import Event2 from "./HalamanRouterReact/Event2";
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
import Mitra_kerja from "./HalamanRouterReact/Mitra_kerja";

// bagian dasboard admin
import DasboardAdmin from "./dasboardAdmin/dashboard_admin";
import CourseAdmin from "./dasboardAdmin/course_admin";
import Event_admin from "./dasboardAdmin/event_admin";
import Profil_admin from "./dasboardAdmin/profil_admin";
import AddFormEventAdmin from "./AddFormAdmin/AddFormEventAdmin";  
import AddFormCourseAdmin from "./AddFormAdmin/AddFormCourseAdmin";

//bagian dasboard user
import DashboardUser from "./dasboardUser/dasboard_user";
import CourseUser from "./dasboardUser/course_user";
import Event_user from "./dasboardUser/event_user";
import Profil_user from "./dasboardUser/profil_user";



function AppContent() {
  const location = useLocation(); // Dapatkan path saat ini
  const hideNavbarFooter = ["/Login", "/Regis", "/AddFormCourseAdmin","/AddFormEventAdmin"].includes(location.pathname);

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
        <Route path="/Course" element={<Course2 />} />
        <Route path="/Event" element={<Event2 />} />
        <Route path="/About" element={<AboutMe />} />
        <Route path="/Contact" element={<ContactSection />} />
        <Route path="/MenuCourse" element={<DasboardCourse />} />
        <Route path="/MenuEvent" element={<DasboardEvent />} />
        <Route path="/Mitra" element={<Mitra_kerja />}></Route>
        {/* dasboard admin */}
        <Route path="/Dashboard_Admin" element={<DasboardAdmin />} />
        <Route path="/course_admin" element={<CourseAdmin />} />
        <Route path="/event_admin" element={<Event_admin />} />
        <Route path="/profil_admin" element={<Profil_admin />} />
        <Route path="/AddFormEventAdmin" element={<AddFormEventAdmin/>} />
        <Route path="/AddFormCourseAdmin" element={<AddFormCourseAdmin/>}></Route>

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
