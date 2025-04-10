
import '../index.css';
import '../App.css';


function AboutMe() {
  return (

    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="mt-5 pt-1">

          <div>
            <h2 className=" text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
             Tentang Kami 
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
            Skillora hadir sebagai solusi bagi kamu yang ingin berkembang di dunia teknologi informasi. Di Skillora, kamu bisa menemukan berbagai materi, artikel, dan informasi terkini seputar dunia IT, mulai dari programming, desain, pengembangan web dan aplikasi, hingga tren teknologi terbaru. Semua dikemas dalam bahasa yang mudah dipahami, cocok untuk pemula maupun yang sudah berpengalaman. Menyediakan fitur-fitur interaktif yang memudahkan kamu untuk belajar secara fleksibel, kapan saja, di mana saja, dan selamanya. Mari tumbuh bersama, satu klik, satu langkah, satu skill baru setiap harinya.


            </p>
          </div>
        </div>
      </div>
      
      {/* image owner */}
      <div className="Owner py-6 sm:py-16 lg:py-24">
        <div className="judul">
            <h2 className=" text-xl text-center font-bold leading-tight text-black mb-7 sm:text-4xl lg:text-5xl lg:leading-tight">
                Tim Pengembang Skillorra 
            </h2>
        </div>
          {/* ownr 1 */}
            <div className="max-w-6xl mb-10 px-4 mx-auto sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 lg:items-stretch md:grid-cols-2 gap-y-8 gap-x-12 xl:gap-x-20">
                <div className="image">
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      className="object-cover w-full h-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/5/man-using-phone.jpg"
                      alt="Testimonial"
                    />
                  </div>

                </div>

                <div className="flex flex-col justify-between md:py-5">
                <div className="lg:mt-auto">
                    <p className="text-xl font-semibold text-black">Muhammad Rizki A.</p>
                    <p className="mt-2 text-base text-gray-600">Frond-End Develover</p>
                  </div>
                  <blockquote>
                    <p className="mt-4 text-2xl leading-relaxed text-black">
                    Siswa asli Daerah Bojonegoro, Muhammad Rizki Alifvino, atau yang biasa dipanggil Pino, merupakan siswa yang sabar dan ramah kepada orang lain. Memiliki cita-cita menjadi fullstack web developer, yang menangani semua bagian website, baik front-end maupun back-end.

                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          {/* end owner 1 */}
          {/* ownr 2 */}
            <div className="max-w-6xl mb-10 px-4 mx-auto sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 lg:items-stretch md:grid-cols-2 gap-y-8 gap-x-12 xl:gap-x-20">

                <div className="flex flex-col  justify-between md:py-5">
                  <div className="lg:mt-auto">
                      <p className="text-xl font-semibold text-black">Gayuh Ageng Baladewa</p>
                      <p className="mt-2 text-base text-gray-600">Designer & IT Support</p>
                    </div>
                    <blockquote>
                      <p className="mt-4 text-2xl leading-relaxed text-black">
                      Siswa yang berasal dari daerah Surabaya, yang kini sedang menuntut ilmu di SMKN 4 Bojonegoro. Gayuh Ageng Baladewa, biasa dipanggil Gayuh, Anak ke-3 dari 3 bersaudara, memiliki cita-cita menjadi game developer yang ulung dan dikenal oleh banyak orang.
                      </p>
                    </blockquote>
                  </div>

                  <div className="image">
                    <div className="aspect-w-4 aspect-h-3">
                      <img
                        className="object-cover w-full h-full"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/5/man-using-phone.jpg"
                        alt="Testimonial"
                      />
                    </div>

                  </div>

              </div>
            </div>
          {/* end owner 2 */}
          {/* ownr 3 */}
            <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 lg:items-stretch md:grid-cols-2 gap-y-8 gap-x-12 xl:gap-x-20">
                <div className="image">
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      className="object-cover w-full h-full"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/5/man-using-phone.jpg"
                      alt="Testimonial"
                    />
                  </div>

                </div>

                <div className="flex flex-col justify-between md:py-5">
                <div className="lg:mt-auto">
                    <p className="text-xl font-semibold text-black">Dwi Setyo Ramadhani</p>
                    <p className="mt-2 text-base text-gray-600">Back-End Developer</p>
                  </div>
                  <blockquote>
                    <p className="mt-4 text-2xl leading-relaxed text-black">
                    Berasal dari Tuban, Dwi Setyo Ramadhani, atau yang biasa dipanggil Tyo, kini sedang mencari ilmu di SMKN 4 Bojonegoro karena jurusan incarannya yaitu Jurusan RPL. Berbeda dari siswa lainnya, Tyo sudah belajar ilmu seputar pemrograman sejak dari jenjang SMP.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          {/* end owner 3 */}    
      </div>
    </section>
  );
}

export default AboutMe;
