import mitra from '../assets/Mitra.png';

const Mitra_kerja = () => {
  return (
    <div className="bg-gradient-to-b from-white-50 to-green-100">

    <section className="py-14 mt-2 sm:py-16 lg:py-2">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-bold text-black sm:text-4xl lg:text-5xl">
                        Bergabunglah Sebagai Mentor di 
                        <div className="inline-flex">
                        <h1 className="text-4xl bg-[#9FB3DF] mt-2 font-bold text-black sm:text-4xl lg:text-5xl">Skillora.</h1>
                        </div>
                    </h1>

                    <p className="mt-8 text-base text-black sm:text-xl">
                        Bagikan keahlian Anda kepada ribuan pelajar yang haus pengetahuan! 
                        Sebagai mentor Skillora, Anda akan mendapatkan platform eksklusif untuk 
                        mengajar, membangun personal brand, dan menghasilkan pendapatan tambahan.
                    </p>

                    <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                        <a 
                            href="https://wa.me/6285738159689?text=Hai%20admin%20Skillora,%20saya%20ingin%20mendaftar%20menjadi%20mentor." 
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Daftar via WhatsApp" 
                            className="inline-flex text-lg items-center justify-center px-5 py-4 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-600" 
                            role="button"
                        >
                            Daftar Sekarang - Gratis!
                        </a>
                    </div>
                </div>

                <div>
                    <img className="w-full" src={mitra} alt="" />
                </div>
            </div>
        </div>
    </section>
</div>

  )
}

export default Mitra_kerja