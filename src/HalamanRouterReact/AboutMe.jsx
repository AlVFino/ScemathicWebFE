
import '../index.css';
import '../App.css';


function AboutMe() {
  return (

    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="mt-5 pt-10">

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
