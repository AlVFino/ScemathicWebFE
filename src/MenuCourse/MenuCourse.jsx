import { useState } from "react";
import "../index.css";
import "../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

function DasboardCourse() {
  const [activeTab, setActiveTab] = useState("deskripsi");

  return (
    <>
      <div id="MenuCourse" className="h-full pt-20 ps-16 pe-16">
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
            <div className="flex items-center mt-3">
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
            <div id="DeskripDanTugas" className="mt-2">
              <div className="flex items-center">
                <div id="deskrip" className="me-2">
                  <span
                    className={`inline-flex px-4 py-2 mt-2 text-xs font-semibold tracking-widest uppercase rounded-full text-white cursor-pointer shadow-lg ${
                      activeTab === "deskripsi" ? "bg-blue-700" : "bg-blue-500"
                    }`}
                    onClick={() => setActiveTab("deskripsi")}
                  >
                    Deskripsi
                  </span>
                </div>
                <div id="Tugas">
                  <span
                    className={`inline-flex px-4 py-2 mt-2 text-xs font-semibold tracking-widest uppercase rounded-full text-white cursor-pointer shadow-lg ${
                      activeTab === "tugas" ? "bg-blue-700" : "bg-blue-500"
                    }`}
                    onClick={() => setActiveTab("tugas")}
                  >
                    Tugas
                  </span>
                </div>
              </div>
            </div>

            {/* Konten Deskripsi & Tugas */}
            {activeTab === "deskripsi" && (
              <div className="h-64 rounded-lg p-3 mt-2 shadow-lg bg-blue-500">
                <p>Hallo semuanya, Selamat Belajar</p>
              </div>
            )}
            {activeTab === "tugas" && (
              <div className="h-64 rounded-lg p-3 mt-2 shadow-lg bg-red-500">
                <p>Hallo semuanya, Ini tugas kamu minggu ini</p>
              </div>
            )}
          </div>
          {/* End Bagian Kiri */}

          {/* Bagian Kanan (Harga dan Tombol Mulai Belajar) */}
          <div className="col-span-2 bg-white rounded-sm shadow-xl p-3">
            <div className="bg-indigo-500 p-2 text-white shadow-lg cursor-pointer rounded-lg">
              <p>Harga Khusus</p>
              <p className="text-3xl font-bold">Gratis!</p>
            </div>
            <div className="bg-yellow-500 p-2 text-white shadow-lg rounded-full cursor-pointer text-center mt-1">
              Mulai Belajar →
            </div>
          </div>
          {/* End Bagian Kanan */}
        </div>
      </div>
    </>
  );
}

export default DasboardCourse;
