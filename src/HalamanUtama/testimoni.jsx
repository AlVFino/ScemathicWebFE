const testimonialsData = [
    {
      name: "Jenny Wilson",  
      Message : "“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”",
    },
    {
      name: "Robert Fox",
      Message : "“Amet2 minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”",
    },
    {
      name: "Kristin Wat",
      Message : "“Amet3 minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”",
    },
    {
      name: "Kristin Wat",
      Message : "“Amet3 minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”",
    },
    {
      name: "Kristin Wat",
      Message : "“Amet3 minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”",
    },
  ];
  
  function TestimonialsSection() {
    return (
      <section id="testimonials" className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl  sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
              Apa Kata Mereka Tentang <span className="text-blue-600"> Skillorra</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
            {testimonialsData.map((testimonial, index) => (
              <div key= {index} className="overflow-hidden bg-white rounded-md shadow-lg m-2">
                <div className="px-5 py-6">
                    <div className="flex items-center justify-between">
                        <div className="min-w-0  mr-auto">
                            <p className="text-base font-semibold text-gray-600 truncate">~ {testimonial.name}</p>
                        </div>
                        <a href="#" title="" className="inline-block text-sky-500">
                          <svg width="22" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="text-gray-A400 m-2 dark:text-gray-600 fill-current">
                            <path d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                                fill="current"></path>
                          </svg>
                        </a>
                    </div>
                    <blockquote className="mt-5">
                        <p className="text-base text-gray-800">
                            {testimonial.Message}
                        </p>
                    </blockquote>
                </div>
              </div>
            ))}
          </div>

            {/* form isi testimoni */}
          <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md mx-auto mt-24 p-3 ">
            <div className="flex flex-col space-y-2 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Send Us Feedback</h2>
                <p className="text-md md:text-xl">
                    We Value Your Feedback To Improve Our Services!
                </p>
            </div>
            <div className="flex flex-col max-w-md space-y-5">
                <input type="text" placeholder="Name"
                      className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />
                <textarea type="text" placeholder="Message" className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"></textarea>
                <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                    Send Feedback
                </button>
            </div>
          </div>

        </div>
      </section>
    );
  }
  
  export default TestimonialsSection;
  