
import './index.css'

import { Link } from 'react-router-dom';

function Event() {
 

  return (
    
        <section id="Event" className="p-2">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

                <div className="flex items-end justify-between">

                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl font-bold leading-tight text-black mt-6 sm:text-4xl lg:text-5xl">Event</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                    </div>

                </div>

                <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">

                <Link to={"/MenuEvent"}>
                <div className="overflow-hidden bg-white rounded shadow">
                        <div className="p-5">
                            <div className="block">
                                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                    <img className="object-cover  w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
                                </a> 
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="inline-flex px-4 py-2 mt-3 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9"> Technology </span>
                                <span className="block mt-3 text-sm font-semibold tracking-widest text-gray-500 uppercase"> May 12, 2020 </span>    
                            </div>
                            <p className="mt-5 text-2xl font-semibold">
                                <a href="#" title="" className="text-black"> How to build coffee inside your home in 5 minutes. </a>
                            </p>
                            <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                                Continue Reading
                            </a>
                        </div>
                    </div>   
                </Link>

                <Link>
                <div className="overflow-hidden bg-white rounded shadow">
                        <div className="p-5">
                            <div className="block">
                                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                    <img className="object-cover  w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
                                </a> 
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="inline-flex px-4 py-2 mt-3 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9"> Technology </span>
                                <span className="block mt-3 text-sm font-semibold tracking-widest text-gray-500 uppercase"> May 12, 2020 </span>    
                            </div>
                            <p className="mt-5 text-2xl font-semibold">
                                <a href="#" title="" className="text-black"> How to build coffee inside your home in 5 minutes. </a>
                            </p>
                            <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                                Continue Reading
                            </a>
                        </div>
                    </div>                
                </Link>

                <Link>
                <div className="overflow-hidden bg-white rounded shadow">
                        <div className="p-5">
                            <div className="block">
                                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                                    <img className="object-cover  w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
                                </a> 
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="inline-flex px-4 py-2 mt-3 text-xs font-semibold tracking-widest uppercase rounded-full text-rose-500 bg-rose-100 mt-9"> Technology </span>
                                <span className="block mt-3 text-sm font-semibold tracking-widest text-gray-500 uppercase"> May 12, 2020 </span>    
                            </div>
                            <p className="mt-5 text-2xl font-semibold">
                                <a href="#" title="" className="text-black"> How to build coffee inside your home in 5 minutes. </a>
                            </p>
                            <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                                Continue Reading
                            </a>
                        </div>
                    </div>                
                </Link>



                </div>

            </div>
        </section>

  )
}

export default Event
