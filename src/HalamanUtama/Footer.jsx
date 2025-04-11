
import '../index.css';
import '../App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram,faTiktok } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
<section id="Contact" className="py-10 bg-gray-100 rounded-t-lg  inset-shadow-sm sm:pt-16 lg:pt-24">
    <div className="px-4  mx-auto mt-1 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
          {/* pertama */}
            <div className="col-span-2 md:col-span-4 xl:pr-8">


                <p className="w-auto font-bold text-5xl h-9">Skilllora</p>

                <p className="text-base leading-relaxed text-gray-600 mt-7">Teman kodingmu yang siap setiap saat dan dimana saja!
                </p>

                <ul className="flex items-center space-x-3 mt-9">
                    <li>
                        <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                        <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                        <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <FontAwesomeIcon icon={faTiktok}/>
                        </a>
                    </li>
                </ul>
            </div>
            
          {/* kedua */}
            <div className="lg:col-span-2">
                <p className="text-base font-semibold text-gray-900">Perusahaan</p>

                <ul className="mt-6 space-y-5">
                    <li>
                        <a href="/About" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Tentang Kami </a>
                    </li>

                    <li>
                        <a href="/About" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600">  Tim Kami </a>
                    </li>

                    <li>
                        <a href="/Contact" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Alamat </a>
                    </li>
                </ul>
            </div>

          {/* ketiga */}
          <div className="lg:col-span-2">
                <p className="text-base font-semibold text-gray-900">Kursus & Skill</p>

                <ul className="mt-6 space-y-5">
                    <li>
                        <a href="/Course" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Semua Kursus </a>
                    </li>

                    <li>
                        <a href="/Event" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Semua Event </a>
                    </li>

                </ul>
            </div>


            {/* keempat */}
            <div className="lg:col-span-2">
                <p className="text-base font-semibold text-gray-900">Support</p>

                <ul className="mt-6 space-y-4">
                    <li>
                        <a href="/Contact" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Hubungi Kami </a>
                    </li>


                </ul>
            </div>

            {/* kelima */}
            <div className="lg:col-span-2">
                <p className="text-base font-semibold text-gray-900">Program Lainnya</p>

                <ul className="mt-6 space-y-5">
                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Mitra Kerja </a>
                    </li>
                </ul>
            </div>

        </div>

{/* copyright */}
        <hr className="mt-10 mb-10 border-gray-200" />
        <p className="text-sm text-center text-gray-600">© Copyright 2025, All Rights Reserved by Skillorra</p>
{/* end copyright */}
    </div>
</section>

  );
}



export default Footer;
