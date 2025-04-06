
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
          </div>
        </div>
      </div>
      
      {/* image owner */}
      <div className="Owner py-10 bg-gray-50 sm:py-16 lg:py-24">
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
                      You made it so simple. My new site is so much faster and easier
                      to work with than my old site. I just choose the page, make the
                      change and click save. No need to think twice before making it.
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
                      <p className="text-xl font-semibold text-black">Jenny Wilson</p>
                      <p className="mt-2 text-base text-gray-600">Co-founder, Appson</p>
                    </div>
                    <blockquote>
                      <p className="mt-4 text-2xl leading-relaxed text-black">
                        You made it so simple. My new site is so much faster and easier
                        to work with than my old site. I just choose the page, make the
                        change and click save. No need to think twice before making it.
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
                    <p className="text-xl font-semibold text-black">Jenny Wilson</p>
                    <p className="mt-2 text-base text-gray-600">Co-founder, Appson</p>
                  </div>
                  <blockquote>
                    <p className="mt-4 text-2xl leading-relaxed text-black">
                      You made it so simple. My new site is so much faster and easier
                      to work with than my old site. I just choose the page, make the
                      change and click save. No need to think twice before making it.
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
