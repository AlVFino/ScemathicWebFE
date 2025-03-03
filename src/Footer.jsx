
import './index.css';
import './App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram,faTiktok } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
<section id="Contact" className="py-10 bg-white  sm:pt-16 lg:pt-24">
    <div className="px-4 mx-auto mt-6 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
          {/* pertama */}
            <div className="col-span-2 md:col-span-4 xl:pr-8">


                <p className="w-auto font-bold text-5xl h-9">Schematic</p>

                <p className="text-base leading-relaxed text-gray-600 mt-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

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
                <p className="text-base font-semibold text-gray-900">Company</p>

                <ul className="mt-6 space-y-5">
                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> About </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Features </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Works </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Career </a>
                    </li>
                </ul>
            </div>

          {/* ketiga */}
            <div className="lg:col-span-2">
                <p className="text-base font-semibold text-gray-900">Help</p>

                <ul className="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Customer Support </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Delivery Details </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Terms & Conditions </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Privacy Policy </a>
                    </li>
                </ul>
            </div>

            {/* keempat */}
            <div className="lg:col-span-2">
                <p className="text-base font-semibold text-gray-900">Resources</p>

                <ul className="mt-6 space-y-5">
                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Free eBooks </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Development Tutorial </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> How to - Blog </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> YouTube Playlist </a>
                    </li>
                </ul>
            </div>

            {/* kelima */}
            <div className="lg:col-span-2">
                <p className="text-base font-semibold text-gray-900">Extra Links</p>

                <ul className="mt-6 space-y-5">
                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Customer Support </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Delivery Details </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Terms & Conditions </a>
                    </li>

                    <li>
                        <a href="#" title="" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-orange-600 focus:text-orange-600"> Privacy Policy </a>
                    </li>
                </ul>
            </div>

        </div>

{/* copyright */}
        <hr className="mt-16 mb-10 border-gray-200" />
        <p className="text-sm text-center text-gray-600">© Copyright 2021, All Rights Reserved by Postcraft</p>
{/* end copyright */}
    </div>
</section>

  );
}



export default Footer;
