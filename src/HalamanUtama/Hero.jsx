import '../index.css'

import { Link } from 'react-router-dom';
import bgImage from '../assets/b1.jpg';

function Hero() {
  return (
    <>
        <div id="hero-section" className="h-full p-10" 
   style={{
    height: "100vh",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
  >
                


          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-4 py-2 text-sm font-semibold text-gray-700 bg-white shadow-md ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Apa Itu Scemathic?&nbsp;
            <a href="#Course" className="font-semibold text-indigo-600 hover:underline">
              Lihat Semua Course →
            </a>
          </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Belajar Dengan Kami</h1>
              <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Tuk Jadi Yang Terbaik</h1>
              <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">Kami menyediakan Course Dan Event yang dapat membantu Proses Belajar Anda tumbuh lebih cepat.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link to={"/Regis"}>
                  <a href="#" className="rounded-full p-3 bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Daftar Sekarang!</a>
                </Link>

                <a href="#Course" className="text-sm font-semibold bg-white rounded-full shadow-md p-3 text-gray-900">Lihat Semua Course<span aria-hidden="true">→</span></a>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Hero
