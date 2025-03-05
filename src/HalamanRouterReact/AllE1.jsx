import { Link } from 'react-router-dom';

export const ALLE1 = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Event Jangan Dicari Ada Event kita gas Ikut</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-6 lg:mt-8 lg:grid-cols-3 lg:max-w-full">

        <Link to={"/MenuEvent"}>
        <div className="overflow-hidden bg-white rounded shadow hover:shadow-xl">
                <div className="p-5">
                    <div className="block">
                        <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                            <img className="object-cover  w-full h-full rounded-lg" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
                        </a> 
                    </div>
                    <div className="flex justify-between items-center">
                    <span className="inline-flex px-4 py-2 mt-3 text-xs font-semibold tracking-widest uppercase rounded-full text-white bg-blue-500 mt-9"> Programming </span>
                        <span className="block mt-3 text-sm font-semibold tracking-widest text-gray-500 uppercase mt-9"> May 12, 2020 </span>    
                    </div>
                    <span className="inline-flex items-start pb-0.5 ms-1 mt-3 text-base font-semibold text-dark-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                            By Schemathic
                    </span>
                    <p className="mt-5 text-2xl font-semibold">
                        <a href="#" title="" className="text-black"> How to build coffee inside your home in 5 minutes. </a>
                    </p>
                    <p className='w-24 mt-5 text-center bg-purple-500 p-1 text-lg  font-bold text-white rounded-lg shadow-lg '>
                            Gratiss!
                    </p>
                </div>
            </div>   
        </Link>

        <Link>
        <div className="overflow-hidden bg-white rounded shadow hover:shadow-xl">
                <div className="p-5">
                    <div className="block">
                        <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                            <img className="object-cover  w-full h-full rounded-lg" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
                        </a> 
                    </div>
                    <div className="flex justify-between items-center">
                    <span className="inline-flex px-4 py-2 mt-3 text-xs font-semibold tracking-widest uppercase rounded-full text-white bg-orange-500 mt-9"> Desain UI/UX </span>
                        <span className="block mt-3 text-sm font-semibold tracking-widest text-gray-500 uppercase mt-9"> May 12, 2020 </span>    
                    </div>
                    <span className="inline-flex items-start pb-0.5 ms-1 mt-3 text-base font-semibold text-dark-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                            By Schemathic
                    </span>
                    <p className="mt-5 text-2xl font-semibold">
                        <a href="#" title="" className="text-black"> How to build coffee inside your home in 5 minutes. </a>
                    </p>
                    <p className='w-24 mt-5 text-center bg-purple-500 p-1 text-lg  font-bold text-white rounded-lg shadow-lg '>
                            Gratiss!
                    </p>
                </div>
            </div>                
        </Link>

        <Link>
        <div className="overflow-hidden bg-white rounded shadow hover:shadow-xl">
                <div className="p-5">
                    <div className="block">
                        <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                            <img className="object-cover  w-full h-full rounded-lg" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
                        </a> 
                    </div>
                    <div className="flex justify-between items-center">
                    <span className="inline-flex px-4 py-2 mt-3 text-xs font-semibold tracking-widest uppercase rounded-full text-white bg-green-500 mt-9"> Framework </span>
                        <span className="block mt-3 text-sm font-semibold tracking-widest text-gray-500 uppercase mt-9"> May 12, 2020 </span>    
                    </div>
                    <span className="inline-flex items-start pb-0.5 ms-1 mt-3 text-base font-semibold text-dark-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                            By Schemathic
                    </span>
                    <p className="mt-5 text-2xl font-semibold">
                        <a href="#" title="" className="text-black"> How to build coffee inside your home in 5 minutes. </a>
                    </p>
                    <p className='w-24 mt-5 text-center bg-purple-500 p-1 text-lg  font-bold text-white rounded-lg shadow-lg '>
                            Gratiss!
                    </p>
                </div>
            </div>                
        </Link>



        </div>
    </div>
    </section>

  )
}

export default ALLE1