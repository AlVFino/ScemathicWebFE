import  { useState } from "react";

import { Link } from "react-router-dom";

import { HomeIcon, BookOpenIcon,CalendarIcon, UserIcon, ArrowLeftOnRectangleIcon} from "@heroicons/react/20/solid";

const Profil_user = () => {
    const [activeTab, setActiveTab] = useState("profile"); // Default ke Profil
  return (
    <div id="ProfilUser" className="mt-16 px-6 py-6 flex flex-col md:flex-row">
    {/* Sidebar */}
    <aside id="sideBar" className="bg-white border border-gray-300 rounded-lg shadow-md lg:w-48 md:w-48 sm:w-24 h-[40vh] p-5 flex flex-col flex-shrink-0 xl:w-64">
      <nav className="space-y-4">
      <Link to="/dashboard_user">
            <p className=" text-gray-700 flex items-center gap-2 mb-2">
                <HomeIcon className="w-5 h-5 text-gray-700" /> Dashboard
            </p>
          </Link>
          <Link to="/course_user">
            <p className="border-t-2 border-gray-300 pt-2 text-gray-600 cursor-pointer hover:text-gray-800 flex items-center gap-2 mb-2">
                <BookOpenIcon className="w-5 h-5 text-gray-600" /> Daftar Course
            </p>
          </Link>
          <Link to="/event_user">
            <p className="border-t-2 border-gray-300 pt-2 text-gray-600 cursor-pointer hover:text-gray-800 flex items-center gap-2 mb-2">
                <CalendarIcon className="w-5 h-5 text-gray-600" /> Daftar Event
            </p>
          </Link>
          <Link to="/profil_user">
            <p className="border-t-2 border-gray-300 pt-2 font-semibold text-gray-600 cursor-pointer hover:text-gray-800 flex items-center gap-2">
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
    
    <main id="content" className="flex-1 bg-white border border-gray-300 rounded-lg shadow-md p-8 md:ml-6 mt-10 md:mt-0">
        <h1 className="text-2xl font-bold mb-6">Profil Saya</h1>
        {/* Menu Tab */}
        <section id="OptionMenu" className="flex gap-6 border-b-2 border-indigo-500 pb-2">
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
        {/* profil */}
        {activeTab === "profile" && (
          <section id="profile">
            <div className="mt-6 rounded-lg flex flex-col lg:flex-row gap-8">
              {/* Photo Profile Section */}
              <div className="flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-md border border-gray-300 w-full lg:w-1/3">
                <img src="#" alt="Foto Profil" className="rounded-full border border-gray-300 shadow-md  sm:w-24 h-24 lg:w-64 lg:h-64 md:w-48 md:h-48 " />
                <button className="bg-blue-500 text-white px-3 py-2 rounded-lg mt-4 hover:bg-blue-600 transition">
                  Tambah Foto Profil
                </button>
              </div>

              {/* Form Section */}
              <form className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 bg-white p-6 rounded-lg shadow-md border border-gray-300">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Nama</label>
                  <input type="text" className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-300" />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Username</label>
                  <input type="text" className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-300" />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">Email</label>
                  <input type="email" className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-300" />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">No Telp</label>
                  <input type="number" className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-300" />
                </div>

                {/* Bio akan full lebar */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-1">Bio</label>
                  <textarea className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-300 h-24"></textarea>
                </div>

                {/* Tombol Simpan */}
                <div className="md:col-span-2 flex justify-end">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                    Simpan Perubahan
                  </button>
                </div>
              </form>
            </div>
          </section>
        )}

        {/* Change Password */}
        {activeTab === "password" && (
          <section id="changePassword" className="mt-5">
            <form className="flex-1 gap-x-6 gap-y-6 bg-white p-6 rounded-lg shadow-md border border-gray-300">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Password Lama :</label>
                <input type="password" className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-300" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Password Baru :</label>
                <input type="password" className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-300" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">Konfirmasi Password Baru :</label>
                <input type="password" className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-blue-300" />
              </div>

              {/* Tombol Simpan */}
              <div className="md:col-span-2 flex justify-start mt-3">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </section>
        )}
    </main>

    </div>
  )
}

export default Profil_user