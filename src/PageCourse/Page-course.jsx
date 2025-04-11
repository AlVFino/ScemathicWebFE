import { Link } from "react-router-dom";
import {
  HomeIcon,
  BookOpenIcon,
  CalendarIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@heroicons/react/20/solid";

const CourseData = [
  {
    LinkVidio: "https://www.youtube.com/embed/9BAGJjndLgc?si=ol-HCFkgvpcbhkUm",
    Judul: "ANDAI TAK BERPISAH - Difarina Indra Adella ft. Fendik Adella - OM ADELLA",
  },
];

const Pagecourse = () => {
  return (
    <div className="mt-16 px-4 sm:px-6 py-6 flex flex-col lg:flex-row min-h-screen bg-gray-50 gap-4">
      {/* Sidebar */}
      <aside className="bg-white border border-gray-300 rounded-lg shadow-md w-full sm:w-60 lg:w-48 xl:w-64 p-5 flex flex-col flex-shrink-0">
        <nav className="space-y-4">
          <Link to="/Dashboard_Admin">
            <p className="text-gray-700 flex items-center gap-2 mb-2">
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

        <button className="text-red-500 font-medium flex items-center gap-2 mt-auto px-3 py-2 rounded-lg hover:bg-red-100 hover:text-red-700 transition">
          <ArrowLeftOnRectangleIcon className="w-5 h-5" />
          Logout
        </button>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-white border border-gray-300 rounded-lg shadow-md p-6 sm:p-8">
        <a href="/course_user">
          <ArrowLeftIcon className="w-5 h-5 mb-5 text-gray-700 hover:text-gray-900" />
        </a>
        {CourseData.map((data, index) => (
          <div key={index} className="w-full">
            <div className="shadow-lg rounded-lg overflow-hidden aspect-video">
              <iframe
                className="w-full h-full"
                src={data.LinkVidio}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <h1 className="text-2xl font-bold mt-5">{data.Judul}</h1>

            <div className="flex items-center mt-3 mb-5">
              <img
                className="object-cover rounded-full w-10 h-10 me-2"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
                alt=""
              />
              <p className="text-sm md:text-base">By Scemathic</p>
            </div>

            <a
              href="/MenuCourse"
              className="group mt-2 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-semibold px-5 py-2 rounded-xl shadow-md hover:shadow-2xl"
            >
              Lihat Detail
              <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Pagecourse;
 