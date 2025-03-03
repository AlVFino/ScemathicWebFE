
import "../index.css";
import "../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay,faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendar as kalender,faCreditCard } from "@fortawesome/free-regular-svg-icons";

function DasboardCourse() {


  return (
    <>
      <div id="MenuEvent" className="h-full pt-20 ps-16 pe-16">
        <div className="grid grid-cols-12 gap-4">
          {/* Bagian Kiri (Konten Utama) */}
          <div className="col-span-10 bg-white rounded-lg shadow-xl p-3">
            <img
              className="object-cover w-full h-1/2"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-2.jpg"
              alt=""
            />
            <h1 className="text-4xl font-bold">
              Tutorial Dasar React JS - Untuk Pemula
            </h1>
            <span className="inline-flex px-4 py-2 mt-2 text-xs font-semibold tracking-widest uppercase rounded-full bg-indigo-100 cursor-pointer shadow-lg">
              Technology
            </span>
            <div className="flex items-center mt-5">
              <img
                className="object-cover rounded-full w-[45px] h-[45px] me-1"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png"
                alt=""
              />
              <p className="me-2">By Scemathic</p>
              <p>
                <FontAwesomeIcon icon={faCalendarDay} /> 20, Mei, 2023
              </p>
            </div>

            {/* Tab Deskripsi & Tugas */}
            <div id="DeskripDanTugas" className="mt-5">
                <div className="bg-blue-500 p-3 rounded-lg shadow-lg">
                    <h1 className="mb-3 text-3xl font-bold"># mengoptmalkan Ai Sebagai Sarana Pmbuat Ide untuk Website</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti temporibus porro accusantium! Inventore dolores odio neque sequi! Voluptatum, vel minima ut eum reiciendis nesciunt! Beatae officiis suscipit ut obcaecati numquam reprehenderit ipsa minima magni voluptates, modi laborum, impedit provident labore incidunt non fuga nam quo tempora perferendis asperiores dolores quis, quia reiciendis? Sequi voluptates incidunt maxime labore optio cum blanditiis. Non quo, dolores voluptates, dolorem ullam quos neque excepturi sed quas minima repudiandae hic? Illo, voluptates et suscipit facere magni doloribus, dolores deserunt veniam optio nulla sequi rerum similique ea tenetur accusantium quibusdam nisi? Dolore praesentium quos ab doloribus?</p>
                </div>
            </div>

          </div>
          {/* End Bagian Kiri */}

          {/* Bagian Kanan (Harga dan Tombol Mulai Belajar) */}
          <div className="col-span-2 bg-white rounded-sm shadow-xl p-3">
            <div className="bg-indigo-500 p-2 text-white shadow-lg cursor-pointer rounded-lg mb-3">
                <p className="font-bold mb-2"><FontAwesomeIcon icon={kalender} /> Mulai Tanggal</p>
              <p >1 Maret 2025, 15.00 - 1 Maret 2025, 16.00</p>
            </div>

            <div className="bg-indigo-500 p-2 text-white shadow-lg cursor-pointer rounded-lg mb-3">
                <p className="font-bold mb-2"><FontAwesomeIcon icon={kalender} /> Pendaftaran Terakhir</p>
              <p >1 Maret 2025, 14.00</p>
            </div>

            <div className="bg-indigo-500 p-2 text-white shadow-lg cursor-pointer rounded-lg mb-3">
                <p className="font-bold mb-2"><FontAwesomeIcon icon={faLocationDot} /> Lokasi Meet</p>
              <p >Google Meet</p>
            </div>
            <div className="bg-indigo-500 p-2 text-white shadow-lg cursor-pointer rounded-lg mb-4">
                <p className="font-bold mb-2"><FontAwesomeIcon icon={faCreditCard} /> Biaya Pendaftaran</p>
                <p className="text-3xl font-bold">Gratis!</p>
            </div>

            <div className="bg-yellow-500 p-2 text-white shadow-lg rounded-full cursor-pointer text-center mt-1">
              daftar Sekarang →
            </div>

          </div>
          {/* End Bagian Kanan */}
        </div>
      </div>
    </>
  );
}

export default DasboardCourse;
