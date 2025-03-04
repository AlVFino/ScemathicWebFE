
import '../index.css';
import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBookOpen, faRocket, faUpload, faGlobe } from "@fortawesome/free-solid-svg-icons";

function Keunggulan() {
  return (
    // keunggulan
    <section id="why-choose" className="container mx-auto mt-16 mb-10 px-6">
    <div className="text-center mb-4 lg:mb-0" data-aos="fade-up" data-aos-duration="1000">
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Kenapa Harus Scemathic?</h1>
      <p className="text-lg text-gray-700">
        Platform pembelajaran coding gratis dengan materi yang dapat diunggah dengan cepat.
      </p>
    </div>
    <div className="px-4 mx-auto mt-10 sm:px-6 lg:px-8">
      <div className="grid items-center justify-center text-center md:grid-cols-2 md:gap-x-20 gap-y-10">
        {/* List Group */}
        <div className="flex justify-center items-center w-full" data-aos="fade-right" data-aos-duration="1200">
          <div className="space-y-3 ">
            {[
              { icon: faCode, text: "Belajar Coding", desc: "Dapatkan materi pemrograman lengkap dengan mudah.", color: "text-blue-500" },
              { icon: faBookOpen, text: "Akses Gratis", desc: "Semua fitur dan materi tersedia tanpa biaya tambahan.", color: "text-green-500" },
              { icon: faRocket, text: "Pembelajaran Efektif", desc: "Metode interaktif untuk memahami konsep lebih cepat.", color: "text-red-500" },
              { icon: faUpload, text: "Upload Materi", desc: "Instruktur dapat mengunggah materi secara instan.", color: "text-purple-500" },
              { icon: faGlobe, text: "Belajar Fleksibel", desc: "Akses materi dari mana saja kapan saja dengan mudah.", color: "text-yellow-500" },
            ].map((item, index) => (
              <a
                href="#"
                key={index}
                className="flex items-center gap-3 p-4 rounded-lg shadow-lg hover:bg-gray-100 transition justify-center"
                data-aos="zoom-in"
                data-aos-duration={`${800 + index * 100}`}
              >
                <FontAwesomeIcon icon={item.icon} className={`${item.color} text-2xl`} />
                <div className="flex flex-col items-start text-start">
                  <h6 className="font-semibold">{item.text}</h6>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        {/* Gambar */}
        <div className="flex justify-center items-center w-full" data-aos="fade-left" data-aos-duration="1300">
          <img src="/images/mengapa.png" alt="Mengapa Scemathic" className="w-full max-w-sm" width="500" height="300" />
        </div>
      </div>
    </div>
  </section>


  );
}

export default Keunggulan
