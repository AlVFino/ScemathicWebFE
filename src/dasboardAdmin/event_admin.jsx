import {
  HomeIcon,
  BookOpenIcon,
  CalendarIcon,
  UserIcon,
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const Event_admin = () => {
  return (
    <div className="mt-16 px-4 py-6 flex flex-col lg:flex-row min-h-screen bg-gray-50 gap-4">
      {/* Sidebar */}
      <aside id="sideBar" className="bg-white border border-gray-300 rounded-lg shadow-md lg:w-48 md:w-48 sm:w-24 h-[40vh] p-5 flex flex-col flex-shrink-0 xl:w-64">
        <nav className="space-y-4">
        <Link to="/dashboard_admin">
            <p className=" text-gray-700  flex items-center gap-2 mb-2">
                <HomeIcon className="w-5 h-5 text-gray-700" /> Dashboard
            </p>
          </Link>
          <Link to="/course_admin">
            <p className=" border-t-2 border-gray-300 pt-2 text-gray-600 cursor-pointer hover:text-gray-800 flex items-center gap-2 mb-2">
                <BookOpenIcon className="w-5 h-5 text-gray-600" /> Daftar Course
            </p>
          </Link>
          <Link to="/event_admin">
            <p className="font-semibold   text-gray-600 border-t-2 border-gray-300 pt-2 cursor-pointer hover:text-gray-800 flex items-center gap-2 mb-2">
                <CalendarIcon className="w-5 h-5 text-gray-600" /> Daftar Event
            </p>
          </Link>
          <Link to="/profil_admin">
            <p className="text-gray-600 border-t-2 border-gray-300 pt-2 cursor-pointer hover:text-gray-800 flex items-center gap-2">
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
      <main className="flex-1 bg-white border border-gray-300 rounded-lg shadow-md p-6">
        <section id="event">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4">
            <h1 className="font-bold text-xl sm:text-2xl">Event Saya</h1>
            <Link to="/AddFormEventAdmin">
              <span className="bg-blue-500 px-4 py-2 rounded-lg text-white flex items-center gap-2 text-sm hover:bg-blue-600 transition">
                <PlusIcon className="w-5 h-5" />
                Tambahkan Event
              </span>
            </Link>
          </div>

          <div className="overflow-x-auto mt-6">
            <table className="min-w-[768px] w-full border-collapse border border-gray-300 shadow-md text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Title</th>
                  <th className="border border-gray-300 px-4 py-2">Deskripsi</th>
                  <th className="border border-gray-300 px-4 py-2">Location</th>
                  <th className="border border-gray-300 px-4 py-2">Date</th>
                  <th className="border border-gray-300 px-4 py-2">Thumbnail</th>
                  <th className="border border-gray-300 px-4 py-2">Author</th>
                  <th className="border border-gray-300 px-4 py-2">Link Group</th>
                  <th className="border border-gray-300 px-4 py-2">Price</th>
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
                    <img
                      src="https://via.placeholder.com/50"
                      alt="Thumbnail"
                      className="w-12 h-12 rounded mx-auto"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">John Doe</td>
                  <td className="border border-gray-300 px-4 py-2 break-words">
                    https://anjay.my.id
                  </td>
                  <td className="border border-gray-300 px-4 py-2">RP. 0</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex justify-center gap-3">
                      <button className="text-blue-500 hover:text-blue-700">
                        <PencilSquareIcon className="w-5 h-5" />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Event_admin;
