
import { HomeIcon, BookOpenIcon,CalendarIcon, UserIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid";

import { Link } from "react-router-dom";

const Event_user = () => {
  return (
    <div id="EventUser" className="mt-16 px-6 py-6 flex flex-col md:flex-row min-h-screen bg-gray-50 ">
    {/* Sidebar */}
    <aside id="sideBar" className="bg-white border border-gray-300 rounded-lg shadow-md lg:w-48 md:w-48 sm:w-24 h-[40vh] p-5 flex flex-col flex-shrink-0 xl:w-64">
      <nav className="space-y-4">
        <Link to="/dasboard_user">
            <p className=" text-gray-700 flex items-center gap-2 mb-2">
                <HomeIcon className="w-5 h-5 text-gray-700" /> Dashboard
            </p>
          </Link>
          <Link to="/course_user">
            <p className="border-t-2 border-gray-300 pt-2 border-t-2 border-gray-300 pt-2 text-gray-600 cursor-pointer hover:text-gray-800 flex items-center gap-2 mb-2">
                <BookOpenIcon className="w-5 h-5 text-gray-600" /> Daftar Course
            </p>
          </Link>
          <Link to="/event_user">
            <p className="border-t-2 border-gray-300 pt-2 border-t-2 border-gray-300 pt-2 font-semibold text-gray-600 cursor-pointer hover:text-gray-800 flex items-center gap-2 mb-2">
                <CalendarIcon className="w-5 h-5 text-gray-600" /> Daftar Event
            </p>
          </Link>
          <Link to="/profil_user">
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
    <main id="content" className="flex-1 bg-white border border-gray-300 rounded-lg shadow-md p-8 md:ml-6 mt-10 md:mt-0">
      {/* Course */}
      <section id="course">
            <div className="flex  items-center mt-1">
              <h1 className="font-bold text-2xl ">Event Saya</h1>
            </div>
          

            <div className="col-span-9 grid max-w-md grid-cols-1 gap-6 mx-auto mt-3 lg:mt-5 lg:grid-cols-3 lg:max-w-full">

              <Link to="#">
                <div className="overflow-hidden bg-white rounded shadow cursor-pointer hover:shadow-xl">
                <div className="p-5">
                    <div className="block">
                        <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                            <img className="object-cover  w-full h-full rounded-lg" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
                        </a> 
                    </div>
                    <div className="flex justify-between items-center">
                    <span className="inline-flex px-4 py-2 mt-3 text-xs font-semibold tracking-widest uppercase rounded-full text-white bg-orange-500 mt-9"> Desain UI/UX </span>
                        <span className="block mt-3 text-sm font-semibold tracking-widest text-gray-500 uppercase mt-9"> May 12, 2020 </span>    
                    </div>
                    <span className="inline-flex items-start pb-0.5 ms-1 mt-3 text-base font-semibold text-dark-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                            By Schemathic
                    </span>
                    <p className="mt-5 text-2xl font-semibold">
                        <a href="#" title="" className="text-black"> How to build coffee inside your home in 5 minutes. </a>
                    </p>
                    <p className='w-24 mt-5 text-center bg-purple-500 p-1 text-lg  font-bold text-white rounded-lg shadow-lg '>
                            Gratiss!
                    </p>
                  </div>
                </div>
              </Link>
            
            </div>


      </section>
    </main>


    </div>
  )
}

export default Event_user