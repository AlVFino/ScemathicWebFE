const testimonialsData = [
    {
      name: "Jenny Wilson",
      role: "Project Manager at Microsoft",
      image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg",
    },
    {
      name: "Robert Fox",
      role: "Founder at Brain.co",
      image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg",
    },
    {
      name: "Kristin Wat",
      role: "UX Designer at Google",
      image: "https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg",
    },
  ];
  
  function TestimonialsSection() {
    return (
      <section id="testimonials" className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl  sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
              Apa Kata Mereka Tentang <span className="text-blue-600"> Schematic</span>
            </h2>
          </div>
          <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center  lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="overflow-hidden bg-white rounded-md shadow-lg">
                <svg width="22" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-A400 m-2 dark:text-gray-600 fill-current">
                  <path d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                      fill="current"></path>
                </svg>
                <div className="px-8 py-12">
                  <div className="w-24 h-24 mx-auto">
                    <img className=" object-cover w-24 h-24 mx-auto rounded-full" src={testimonial.image} alt={testimonial.name} />
                    <p className="text-base font-semibold text-black mt-2">{testimonial.name}</p>
                  </div>
                  <blockquote className="mt-16">
                    <p className="text-lg text-black">
                      “Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”
                    </p>
                  </blockquote>
                  
                  {/* <p className="mt-1 text-base text-gray-600">{testimonial.role}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default TestimonialsSection;
  