import { useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon, BookOpenIcon, CalendarIcon, UserIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/20/solid";

const Profil_admin = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div id="profil_admin" className="mt-16 px-4 py-6 flex flex-col lg:flex-row gap-4">
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
            <p className="text-gray-600 border-t-2 border-gray-300 pt-2 cursor-pointer hover:text-gray-800 flex items-center gap-2 mb-2">
                <CalendarIcon className="w-5 h-5 text-gray-600" /> Daftar Event
            </p>
          </Link>
          <Link to="/profil_admin">
            <p className="font-semibold  text-gray-600 border-t-2 border-gray-300 pt-2 cursor-pointer hover:text-gray-800 flex items-center gap-2">
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
      <main className="flex-1 bg-white border border-gray-300 rounded-lg shadow-md p-4 sm:p-6 overflow-x-auto">
        <h1 className="text-xl sm:text-2xl font-bold mb-6">Profil Saya</h1>

        {/* Tab menu */}
        <section className="flex gap-6 border-b-2 border-indigo-500 pb-2 mb-4">
          <p
            className={`cursor-pointer ${activeTab === "profile" ? "text-indigo-600 font-bold" : "text-gray-600"}`}
            onClick={() => setActiveTab("profile")}
          >
            Profil
          </p>
          <p
            className={`cursor-pointer ${activeTab === "password" ? "text-indigo-600 font-bold" : "text-gray-600"}`}
            onClick={() => setActiveTab("password")}
          >
            Password
          </p>
        </section>

        {/* Profil */}
        {activeTab === "profile" && (
          <section className="flex flex-col lg:flex-row gap-6">
            {/* Foto Profil */}
            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md border border-gray-300 w-full lg:w-1/3">
              <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-400 text-sm">Foto</span>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 transition">
                Tambah Foto Profil
              </button>
            </div>

            {/* Form Profil */}
            <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-lg shadow-md border border-gray-300">
              <div>
                <label className="block text-gray-700 mb-1">Nama</label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Username</label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">No Telp</label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-1">Bio</label>
                <textarea className="w-full border p-2 rounded h-24"></textarea>
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </section>
        )}

        {/* Ganti Password */}
        {activeTab === "password" && (
          <section className="mt-4">
            <form className="grid grid-cols-1 gap-4 bg-white p-4 rounded-lg shadow-md border border-gray-300">
              <div>
                <label className="block text-gray-700 mb-1">Password Lama</label>
                <input type="password" className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Password Baru</label>
                <input type="password" className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Konfirmasi Password Baru</label>
                <input type="password" className="w-full border p-2 rounded" />
              </div>
              <div className="flex justify-start mt-2">
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </section>
        )}
      </main>
    </div>
  );
};

export default Profil_admin;
