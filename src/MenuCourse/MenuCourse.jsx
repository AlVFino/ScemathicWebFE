import "../index.css";
import "../App.css";
import { faCalendarDay, faCheckCircle, faAward, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DasboardCourse() {
  return (
    <>
      <div id="MenuCourse" className="h-full pt-10 px-6 md:px-16 lg:mt-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Bagian Kiri (Konten Utama) */}
          <div className="md:col-span-8 lg:col-span-9 bg-white rounded-lg shadow-xl border-t border-black/10 p-5">
            <img
              className="object-cover w-full h-40 sm:h-56 md:h-64 lg:h-[500px] rounded-lg "
              src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-2.jpg"
              alt=""
            />
            <h1 className="text-2xl md:text-4xl font-bold mt-3">Tutorial Dasar React JS - Untuk Pemula</h1>
            <span className="inline-block px-4 py-2 mt-2 text-xs font-semibold tracking-widest uppercase rounded-full bg-indigo-100 shadow-lg">
              Technology
            </span>
            <div className="flex items-center mt-3">
              <img
                className="object-cover rounded-full w-10 h-10 me-2"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
                alt=""
              />
              <p className="me-2 text-sm md:text-base">By Scemathic</p>
              <p className="date text-sm md:text-base">
                <FontAwesomeIcon icon={faCalendarDay} /> 20, Mei, 2023
              </p>
            </div>

            {/* Tab Deskripsi */}
            <div id="DeskripDanTugas" className="mt-4">
              <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full text-white bg-blue-500 cursor-pointer shadow-lg">
                Deskripsi
              </span>
            </div>

            {/* Konten Deskripsi */}
            <div className="h-48 md:h-64 rounded-lg p-3 mt-3 shadow-lg bg-blue-500 text-white">
              <p>Hallo semuanya, Selamat Belajar</p>
            </div>
          </div>

          {/* Bagian Kanan (Harga dan Tombol Mulai Belajar) */}
          <div className="md:col-span-4 lg:col-span-3 bg-white rounded-lg shadow-xl border-t border-black/10 p-5">
            {/* Harga & Benefit */}
            <div className="bg-indigo-500 p-3 text-white shadow-lg rounded-lg">
              <p className="text-sm font-semibold">Harga Khusus</p>
              <p className="text-3xl font-bold">Gratis!</p>
            </div>

            {/* Countdown Timer
            <div className="mt-3 text-center bg-red-500 text-white p-2 rounded-lg shadow">
              <p className="text-sm">Pendaftaran ditutup pada:</p>
              <p className="text-lg font-bold">1 Maret 2025, 14.00</p>
            </div> */}

            {/* Tombol Mulai Belajar */}
            <div className="bg-yellow-500 p-2 text-white shadow-lg rounded-full cursor-pointer text-center mt-3 transition-transform transform hover:scale-105 hover:bg-yellow-600">
              <a href="/course_user">
                Mulai Belajar →
              </a>
            </div>

            {/* Keuntungan Kursus */}
            <div className="mt-4 text-sm text-gray-700 space-y-2">
              <div className="font-bold">Kursus Ini Mencangkup:</div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 me-2 text-lg" />
                <span>Akses Selamanya</span>
              </div>
              <div className="border-t-2 border-gray-300 my-3"></div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faAward} className="text-yellow-500 me-2 text-lg" />
                <span>Sertifikat Penyelesaian</span>
              </div>
              <div className="border-t-2 border-gray-300 my-3"></div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faUsers} className="text-blue-500 me-2 text-lg" />
                <span>Grup Diskusi</span>
              </div>
              <div className="border-t-2 border-gray-300 my-3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DasboardCourse;
