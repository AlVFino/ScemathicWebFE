
import '../index.css';
import '../App.css';


function AboutMe() {
  return (
    // about
    // <section id="AboutMe" className="container pt-20">
    //   <div className="flex flex-col  lg:flex-row items-center bg-white shadow-lg rounded-lg p-6 lg:p-10 border">
        
    //     {/* Teks */}
    //     <div className="lg:w-2/3 text-start" data-aos="fade-right" data-aos-duration="1000">
    //       <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Apa Itu Scematic?</h1>
    //       <p className="text-lg text-gray-700">
    //         Scematc adalah Wbsite Yang Menyediakan Layanan Untuk Pembelajaran Siswa dan SIswi seluruh indonesia.
    //       </p>

    //       <div className="mt-6">
    //         <a href="#menu" className="inline-flex items-center bg-yellow-500 text-white font-bold text-lg px-6 py-3 rounded-full shadow-md hover:bg-yellow-600 transition">
    //           Belanja Sekarang Yuk! <ion-icon name="bag-handle-outline" className="ml-2 text-xl"></ion-icon>
    //         </a>
    //       </div>
    //     </div>

    //     {/* Gambar */}
    //     <div className="lg:w-1/3 flex justify-center mt-6 lg:mt-0" data-aos="fade-left" data-aos-duration="1000">
    //       <img className="rounded-lg shadow-lg w-full max-w-sm" src="/public/images/Screenshot (38).png" alt="Belajar di gamelab.id" />
    //     </div>

    //   </div>
    // </section>

    
    // end about
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
          <div className="relative mb-12">
            <img
              className="w-full rounded-md"
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team Work"
            />
            <div className=" absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
              <div className="overflow-hidden bg-white rounded">
                <div className="px-10 py-6">
                  <div className="flex items-center">
                    <p className="flex-shrink-0 text-3xl font-bold text-blue-600 sm:text-4xl">100%</p>
                    <p className="pl-6 text-sm font-medium text-black sm:text-lg">
                      FREE <br /> for Teacher And Study
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className=" text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
             Tentang Kami 
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Schematic adalah Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, doloribus iusto vitae in unde saepe cum impedit fugiat quasi minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
              role="button"
            >
              Daftarkan Dirimu Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
