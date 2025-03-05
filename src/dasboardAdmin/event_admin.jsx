
import { HomeIcon, BookOpenIcon,CalendarIcon, UserIcon, PlusIcon,PencilSquareIcon, TrashIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid";

import { Link } from "react-router-dom";

const Event_admin = () => {
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
            <p className="border-t-2 border-gray-300 pt-2 text-gray-600 cursor-pointer hover:text-gray-800 flex items-center gap-2 mb-2">
                <BookOpenIcon className="w-5 h-5 text-gray-600" /> Daftar Course
            </p>
          </Link>
          <Link to="/event_admin">
            <p className="border-t-2 border-gray-300 pt-2 font-semibold text-gray-600 cursor-pointer hover:text-gray-800 flex items-center gap-2 mb-2">
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
              <Link to="/FormEventAdmin">
                <span className="bg-blue-500 p-2 rounded-lg text-white cursor-pointer flex items-center gap-2">
                    <PlusIcon className="w-5 h-5 text-white" /> Tambahkan Course
                </span>
              </Link>

            </div>
          
            <div className="max-w-md gap-6 mx-auto mt-6 lg:mt-8 lg:max-w-full">
                <table className="w-full border-collapse border border-gray-300 shadow-md">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Judul</th>
                            <th className="border border-gray-300 px-4 py-2">Deskripsi</th>
                            <th className="border border-gray-300 px-4 py-2">Lokasi</th>
                            <th className="border border-gray-300 px-4 py-2">Tanggal</th>
                            <th className="border border-gray-300 px-4 py-2">Thumbnail</th>
                            <th className="border border-gray-300 px-4 py-2">Penulis</th>
                            <th className="border border-gray-300 px-4 py-2">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td className="border border-gray-300 px-4 py-2">Workshop React</td>
                            <td className="border border-gray-300 px-4 py-2">Belajar React dari dasar</td>
                            <td className="border border-gray-300 px-4 py-2">Jakarta</td>
                            <td className="border border-gray-300 px-4 py-2">12 Maret 2025</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <img src="https://via.placeholder.com/50" alt="Thumbnail" className="w-12 h-12 rounded" />
                            </td>
                            <td className="border border-gray-300 px-4 py-2">John Doe</td>
                            <td className="px-4 py-2 h-full flex justify-center items-center gap-3">
                                <button className="text-blue-500 hover:text-blue-700 mt-3">
                                    <PencilSquareIcon className="w-5 h-5" />
                                </button>
                                <button className="text-red-500 hover:text-red-700 mt-3">
                                    <TrashIcon className="w-5 h-5" />
                                </button>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>

      </section>
    </main>


    </div>
  )
}

export default Event_admin