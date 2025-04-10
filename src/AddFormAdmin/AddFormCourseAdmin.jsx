import { HomeIcon, BookOpenIcon,CalendarIcon, UserIcon,  ArrowLeftOnRectangleIcon ,ArrowLeftIcon} from "@heroicons/react/20/solid";

import { Link } from "react-router-dom";

const AddFormCourseAdmin = () => {

  return (

        <div id="admin" className="mt-16 px-6 py-6 flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <aside id="sideBar" className="bg-white border border-gray-300 rounded-lg shadow-md lg:w-48 md:w-48 sm:w-24 h-[50vh] p-5 flex flex-col flex-shrink-0 xl:w-64">
          <nav className="space-y-4">
            <Link to="/Dashboard_Admin">
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
                <p className="border-t-2 border-gray-300 pt-2  text-gray-600 cursor-pointer hover:text-gray-800 flex items-center gap-2 mb-2">
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
            <a href="/course_admin"><ArrowLeftIcon className="w-5 h-5 mb-5" /></a>
          {/* Add Cpurse */}
            <div className="Add-Course ms-5">
                <h2 className="text-3xl font-bold mb-4">Tambah Course</h2>
                <div className="md:w-1/3 flex flex-col items-center mb-4">
                    <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
                        <span className="text-gray-500 text-sm">Preview</span>
                    </div>
                    <input type="file" name="thumbnail" accept="image/*" className="mt-3 text-sm" required />
                </div>
                <div className="">   
                    <form className="grid md:grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label className="mb-2">Title :</label>
                            <input type="text" name="title" placeholder="Course Title" className="border p-2 rounded" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="mb-2">Vidio Link :</label>
                            <input type="text" name="Vidio_Link" placeholder="Vidio Link" className="border p-2 rounded" required/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="mb-2">Penulis :</label>
                            <input type="text" name="author" placeholder="penulis" className="border p-2 rounded" required />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="mb-2">Price :</label>
                            <input type="text" name="Price" placeholder="Price" className="border p-2 rounded" required />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2">Description :</label>
                            <textarea type="text" name="description" placeholder="Deskription" className="border p-2 rounded" required />
                        </div>          
                        <button type="submit" className="col-span-1 md:col-span-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Tambah Event</button>
                    </form>
                </div>
            </div>
        </main>
    
    
        </div>


  )
}

export default AddFormCourseAdmin