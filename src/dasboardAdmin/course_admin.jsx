import { useState } from "react";

import { Link } from "react-router-dom";

import gambar1 from "../assets/imgCourse/1.png";
import { HomeIcon, BookOpenIcon,CalendarIcon, UserIcon, PlusIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid";



// import gambar2 from "../assets/imgCourse/4.png";
// import gambar3 from "../assets/imgCourse/3.png";

const CourseAdmin = () => {
    const [selectedCategory] = useState("all");
    
      const courses = [
        { id: 1, img: gambar1, title: "Tutorial HTML Dasar Untuk Pemula!", desc: "Amet minim mollit non deserunt ullamco...", category: "Programming", color: "bg-blue-500" },
      ];

      const filteredCourses = selectedCategory === "all" ? courses : courses.filter(course => course.category === selectedCategory);
  return (
    
    <div id="admin" className="mt-16 px-6 py-6 flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside id="sideBar" className="bg-white border border-gray-300 rounded-lg shadow-md lg:w-48 md:w-48 sm:w-24 h-[50vh] p-5 flex flex-col flex-shrink-0 xl:w-64">
        <nav className="space-y-4">
        <Link to="/dasboard_admin">
            <p className=" text-gray-700 flex items-center gap-2 mb-2">
                <HomeIcon className="w-5 h-5 text-gray-700" /> Dashboard
            </p>
          </Link>
          <Link to="/course_admin">
            <p className="border-t-2 border-gray-300 pt-2 font-semibold text-gray-600 cursor-pointer hover:text-gray-800 flex items-center gap-2 mb-2">
                <BookOpenIcon className="w-5 h-5 text-gray-600" /> Daftar Course
            </p>
          </Link>
          <Link to="/event_admin">
            <p className="border-t-2 border-gray-300 pt-2 text-gray-600 cursor-pointer hover:text-gray-800 flex items-center gap-2 mb-2">
                <CalendarIcon className="w-5 h-5 text-gray-600" /> Daftar Event
            </p>
          </Link>
          <Link to="/profil_admin">
            <p className="border-t-2 border-gray-300 pt-2 text-gray-600 cursor-pointer hover:text-gray-800 flex items-center gap-2">
                <UserIcon className="w-5 h-5 text-gray-600" /> Profil Saya
            </p>
          </Link>
        </nav>

                {/* Logout di bagian bawah */}
        <button className="text-red-500 font-medium flex items-center gap-2 mt-auto px-3 py-2 rounded-lg hover:bg-red-100 hover:text-red-700 transition">
          <ArrowLeftOnRectangleIcon className="w-5 h-5" />
          Logout
        </button>
      </aside>
      
      {/* Content */}
      <main id="content" className="flex-1 bg-white border border-gray-300 rounded-lg shadow-md p-8 ml-6">
        {/* Course */}
        <section id="course">
            <div className="flex justify-between items-center mt-10">
                <h1 className="font-bold text-xl ">Course Saya</h1>
                <span className="bg-blue-500 p-2 rounded-lg text-white cursor-pointer flex items-center gap-2">
                    <PlusIcon className="w-5 h-5 text-white" /> Tambahkan Course
                </span>
            </div>
            
            <div className="col-span-9 grid max-w-md grid-cols-1 gap-6 mx-auto mt-3 lg:mt-5 lg:grid-cols-3 lg:max-w-full">
            {filteredCourses.map((course) => (
              <Link key={course.id} to="#">
                <div className="overflow-hidden bg-white rounded shadow cursor-pointer hover:shadow-xl">
                  <div className="p-5">
                    <div className="block">
                      <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                        <img className="object-cover w-full h-full rounded-lg" src={course.img} alt="" />
                      </a>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className={`inline-flex px-4 py-2 mt-3 text-xs font-semibold tracking-widest uppercase rounded-full text-white ${course.color}`}>
                        {course.category.toUpperCase()}
                      </span>
                      <span className="inline-flex items-start pb-0.5 ms-1 mt-1 text-base font-semibold text-dark-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                        By Schemathic
                      </span>
                    </div>

                    <p className="mt-5 text-2xl font-semibold">
                      <a href="#" title="" className="text-black">{course.title}</a>
                    </p>
                    <p className="mt-4 text-base text-gray-600">{course.desc}</p>

                    <p className="w-24 mt-2 text-center bg-purple-500 p-1 text-lg font-bold text-white rounded-lg shadow-lg">
                      Gratiss!
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            </div>
        </section>
      </main>


    </div>
  );
};

export default CourseAdmin;