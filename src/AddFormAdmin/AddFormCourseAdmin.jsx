import {
    HomeIcon,
    BookOpenIcon,
    CalendarIcon,
    UserIcon,
    ArrowLeftOnRectangleIcon,
    ArrowLeftIcon,
  } from "@heroicons/react/20/solid";
  import { Link } from "react-router-dom";
  
  const AddFormCourseAdmin = () => {
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
            <p className="font-semibold  text-gray-600 border-t-2 border-gray-300 pt-2 cursor-pointer hover:text-gray-800 flex items-center gap-2 mb-2">
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
          <Link to="/course_admin">
            <ArrowLeftIcon className="w-5 h-5 mb-4 text-gray-600 hover:text-black transition" />
          </Link>
  
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Tambah Course</h2>
            <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col items-center mb-4">
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                <span className="text-gray-500 text-sm">Preview</span>
              </div>
              <input
                type="file"
                name="thumbnail"
                accept="image/*"
                className="mt-3 text-sm"
                required
              />
            </div>
          </div>
  
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex flex-col">
              <label className="mb-1">Title :</label>
              <input
                type="text"
                name="title"
                placeholder="Course Title"
                className="border p-2 rounded"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Video Link :</label>
              <input
                type="text"
                name="Vidio_Link"
                placeholder="Video Link"
                className="border p-2 rounded"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Penulis :</label>
              <input
                type="text"
                name="author"
                placeholder="Penulis"
                className="border p-2 rounded"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Price :</label>
              <input
                type="text"
                name="Price"
                placeholder="Price"
                className="border p-2 rounded"
                required
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label className="mb-1">Description :</label>
              <textarea
                name="description"
                placeholder="Deskripsi"
                className="border p-2 rounded h-24"
                required
              />
            </div>
            <button
              type="submit"
              className="md:col-span-2 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Tambah Course
            </button>
          </form>
        </main>
      </div>
    );
  };
  
  export default AddFormCourseAdmin;
  