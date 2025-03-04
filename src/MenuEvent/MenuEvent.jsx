import "../index.css";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendar as kalender, faCreditCard } from "@fortawesome/free-regular-svg-icons";

import gambar1 from "../assets/imgCourse/1.png";

const courseData = {
  title: "Tutorial Dasar React JS - Untuk Pemula",
  category: "Technology",
  instructor: {
    name: "By Scemathic",
    avatar: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
    date: "20, Mei, 2023",
  },
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint eos expedita possimus a nihil quos...",
  schedule: [
    { label: "Mulai Tanggal", value: "1 Maret 2025, 15.00 - 1 Maret 2025, 16.00", icon: kalender },
    { label: "Pendaftaran Terakhir", value: "1 Maret 2025, 14.00", icon: kalender },
    { label: "Lokasi Meet", value: "Google Meet", icon: faLocationDot },
    { label: "Biaya Pendaftaran", value: "Gratis!", icon: faCreditCard },
  ],
};

function DasboardCourse() {
  return (
    <div id="MenuEvent" className="h-full pt-20 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        
        {/* Bagian Kiri */}
        <div className="md:col-span-8 lg:col-span-9 bg-white rounded-lg shadow-xl p-3">
          <img className="object-cover w-full h-40 sm:h-56 md:h-64 lg:h-[500px] rounded-lg" src={gambar1} alt="" />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3">{courseData.title}</h1>
          <span className="inline-flex px-4 py-2 mt-2 text-xs font-semibold tracking-widest uppercase rounded-full text-white bg-blue-500 shadow-lg">
            {courseData.category}
          </span>
          <div className="flex items-center mt-5">
            <img className="object-cover rounded-full w-10 h-10 me-2" src={courseData.instructor.avatar} alt="" />
            <p className="me-2">{courseData.instructor.name}</p>
            <p>
              <FontAwesomeIcon icon={faCalendarDay} /> {courseData.instructor.date}
            </p>
          </div>

          {/* Deskripsi */}
          <div className="mt-5 bg-zinc-100 p-3 rounded-lg shadow-lg">
            <h1 className="mb-3 text-lg md:text-xl lg:text-3xl font-bold"># Mengoptimalkan AI</h1>
            <p className="text-sm md:text-base">{courseData.description}</p>
          </div>
        </div>

        {/* Bagian Kanan */}
        <div className="md:col-span-4 lg:col-span-3 bg-white rounded-lg shadow-xl p-3 h-[450px]">
          {courseData.schedule.map((item, index) => (
            <div key={index} className="bg-indigo-500 p-2 text-white shadow-lg rounded-lg mb-3">
              <p className="font-bold mb-2">
                <FontAwesomeIcon icon={item.icon} /> {item.label}
              </p>
              <p>{item.value}</p>
            </div>
          ))}
          <div className="bg-yellow-500 p-2 text-white shadow-lg rounded-full cursor-pointer text-center mt-1">
            Daftar Sekarang →
          </div>
        </div>
      </div>
    </div>
  );
}

export default DasboardCourse;
