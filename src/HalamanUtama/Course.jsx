
import '../index.css'

import { Link } from 'react-router-dom';

import gambar1 from '../assets/imgCourse/1.png';
import gambar2 from '../assets/imgCourse/4.png';
import gambar3 from '../assets/imgCourse/3.png';

function Course() {
 

  return (
    
        <section id="Course" className=" p-2">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-end justify-between">
                    <div className="flex-1 text-center lg:text-left">
                        <p className="text-lg font-bold leading-tight text-indigo-600 mt-6 sm:text-xl lg:text-2xl">Course</p>
                        <h2 className="text-2xl mx-auto mt-1  font-bold leading-relaxed  lg:mx-0 lg:text-5xl sm:text-4xl">Mau Balajar Apa Hari Ini?</h2>
                        <h5 className="text-xl mx-auto mt-3  leading-relaxed  lg:mx-0 lg:text-3xl sm:text-2xl">Cari Course Sesuai Keinginanmu</h5>
                    </div>
                </div>

            <div className="grid pt-4">
                <div className="kategori">
                    

                </div>
                <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-3 lg:mt-5 lg:grid-cols-3 lg:max-w-full ">
                    <Link to="/MenuCourse">
                        <div className="overflow-hidden bg-white rounded shadow cursor-pointer hover:shadow-xl">
                            <div className="p-5">
                                <div className="block">
                                    <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                        <img className="object-cover w-full h-full rounded-lg" src={gambar1} alt="" />
                                    </a>
                                </div>
                                <div className="flex flex-col  items-start">
                                    <span className="inline-flex px-4 py-2 mt-3 text-xs font-semibold tracking-widest uppercase rounded-full text-white bg-blue-500 mt-9"> Programming </span>
                                    <span className="inline-flex items-start pb-0.5 ms-1 mt-1 text-base font-semibold text-dark-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                                    By Schemathic
                                    </span>
                                </div>
                                
                                <p className="mt-5 text-2xl font-semibold">
                                    <a href="#" title="" className="text-black">Tutorial HTML Dasar Untuk Pemula! </a>
                                </p>
                                <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

                                <p className='w-24 mt-2 text-center bg-purple-500 p-1 text-lg  font-bold text-white rounded-lg shadow-lg '>
                                    Gratiss!
                                </p>
                            </div>
                        </div>
                    </Link>


                    <div className="overflow-hidden bg-white rounded shadow cursor-pointer hover:shadow-xl">
                        <div className="p-5">
                            <div className="block">
                                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                    <img className="object-cover w-full h-full rounded-lg" src={gambar3} alt="" />
                                </a>
                            </div>
                            <div className="flex flex-col  items-start">
                                    <span className="inline-flex px-4 py-2 mt-3 text-xs font-semibold tracking-widest uppercase rounded-full text-white bg-orange-500 mt-9">Software Development </span>
                                    <span className="inline-flex items-start pb-0.5 ms-1 mt-1 text-base font-semibold text-dark-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                                    By Schemathic
                                    </span>
                                </div>

                                <p className="mt-5 text-2xl font-semibold">
                                    <a href="#" title="" className="text-black">Tutorial Git dan Github Dasar Untuk Pemula! </a>
                                </p>
                                <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

                                <p className='w-24 mt-2 text-center bg-purple-500 p-1 text-lg  font-bold text-white rounded-lg shadow-lg '>
                                    Gratiss!
                                </p>
                        </div>
                    </div>

                    <div className="overflow-hidden bg-white rounded shadow cursor-pointer hover:shadow-xl">
                        <div className="p-5">
                            <div className="block">
                                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                    <img className="object-cover w-full h-full rounded-lg" src={gambar2} alt="" />
                                </a>
                            </div>
                            <div className="flex flex-col  items-start">
                                    <span className="inline-flex px-4 py-2 mt-3 text-xs font-semibold tracking-widest uppercase rounded-full text-white bg-green-500 mt-9"> Framework </span>
                                    <span className="inline-flex items-start pb-0.5 ms-1 mt-1 text-base font-semibold text-dark-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                                    By Schemathic
                                    </span>
                                </div>

                                <p className="mt-5 text-2xl font-semibold">
                                    <a href="#" title="" className="text-black">Tutorial Bootstrap Dasar Untuk Pemula! </a>
                                </p>
                                <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

                                <p className='w-24 mt-2 text-center bg-purple-500 p-1 text-lg  font-bold text-white rounded-lg shadow-lg '>
                                    Gratiss!
                                </p>
                        </div>
                    </div>
                </div>                
            </div>





            </div>
        </section>

  );
}

export default Course
