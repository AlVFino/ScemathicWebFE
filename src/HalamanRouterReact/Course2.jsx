import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

import gambar1 from "../assets/imgCourse/1.png";
import gambar2 from "../assets/imgCourse/4.png";
import gambar3 from "../assets/imgCourse/3.png";

 const Course2 = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const courses = [
    { id: 1, img: gambar1, title: "Tutorial HTML Dasar Untuk Pemula!", desc: "Amet minim mollit non deserunt ullamco...", category: "Programming", color: "bg-blue-500" },
    { id: 2, img: gambar3, title: "Tutorial Git dan Github Dasar!", desc: "Amet minim mollit non deserunt ullamco...", category: "Software Development", color: "bg-orange-500" },
    { id: 3, img: gambar2, title: "Tutorial Bootstrap Dasar Untuk Pemula!", desc: "Amet minim mollit non deserunt ullamco...", category: "Framework", color: "bg-green-500" },
  ];

  const filteredCourses = selectedCategory === "all" ? courses : courses.filter(course => course.category === selectedCategory);

  return (
    <section className="py-10 bg-white sm:py-16  lg:py-24 pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Ikuti Latihan Course Dari Berbagai Sumber
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-12 overflow-hidden">
          {/* Sidebar */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3 bg-white rounded-lg shadow-lg p-5 lg:h-96 md:h-80 sm:h-64">
            <p className="text-2xl font-bold mb-1">Kategori</p>

              <div className="flex flex-col space-y-3 items-start">
                  <Menu as="div" className=" inline-block text-left mb-1">
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg font-semibold text-gray-900 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                    Pemrograman Web
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                  </MenuButton>

                  <MenuItems className="mt-2 w-full origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5">
                    <div className="py-1">
                      <MenuItem>
                        <button className="block w-full px-4 py-2 text-sm text-gray-700 text-left hover:bg-gray-100" onClick={() => setSelectedCategory("Programming")}>
                          HTML
                        </button>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>

                <Menu as="div" className=" inline-block text-left mb-1">
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg font-semibold text-gray-900 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                    Software Dev
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                  </MenuButton>

                  <MenuItems className="mt-2 w-full origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5">
                    <div className="py-1">
                      <MenuItem>
                        <button className="block w-full px-4 py-2 text-sm text-gray-700 text-left hover:bg-gray-100" onClick={() => setSelectedCategory("Software Development")}>
                          Git & Github
                        </button>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>

                <Menu as="div" className="inline-block text-left">
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg font-semibold text-gray-900 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                    Framework
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                  </MenuButton>

                  <MenuItems className="mt-2 w-full origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5">
                    <div className="py-1">
                      <MenuItem>
                        <button className="block w-full px-4 py-2 text-sm text-gray-700 text-left hover:bg-gray-100" onClick={() => setSelectedCategory("Framework")}>
                          Bootstrap
                        </button>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </div>
            
          </div>

          {/* Konten Course */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mt-3 lg:mt-5">
            {filteredCourses.map((course) => (
              <Link key={course.id} to="#">
                <div className="overflow-hidden bg-white rounded shadow cursor-pointer flex flex-col hover:shadow-xl">
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
          
        </div>
      </div>
    </section>
  );
};

export default Course2;
