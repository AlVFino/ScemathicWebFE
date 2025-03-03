import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faComment, faPaperPlane, faLocationDot,faPhone,} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope as regular } from "@fortawesome/free-regular-svg-icons";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100" data-aos="fade-up" data-aos-duration="1000">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12" data-aos="fade-down" data-aos-duration="1200">
          <h2 className="text-4xl font-bold text-red-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">Were here to help! Reach out to us for any inquiries or feedback.</p>
        </div>
        <div className="grid grid-cols-12 gap-4 mx-auto" data-aos="zoom-in" data-aos-duration="1300">

                  <div className="col-span-5 flex flex-col gap-4 p-3">
                    <div className="bg-purple-500 rounded-lg flex items-center justify-center gap-4 p-5 shadow-lg">
                          <FontAwesomeIcon icon={faLocationDot} className="bg-white rounded-full w-7 h-7 p-4 "/>
                          <div className="div text-white">
                            <p className="judul text-lg font-bold">ADDRES</p>
                            <p className="deskripsi text-base font-normal">Jalan Raya Surabaya, Sukowati, Kapas, Sukolilo, Sukowati, Kec. Kapas, Kabupaten Bojonegoro, Jawa Timur</p>
                          </div>
                      </div>

                      <div className="bg-purple-500 rounded-lg flex items-center  gap-4 p-5 shadow-lg">
                      <FontAwesomeIcon icon={faPhone} className="bg-white rounded-full  w-7 h-7 p-4 text-3xl"/>
                      <div className="div text-white">
                            <p className="judul text-lg font-bold">PHONE</p>
                            <p className="deskripsi text-base font-normal">+62 858-0693-1779 <br />+62 0857-3815-9689 <br />+62 823-3454-7530</p>
                          </div>
                      </div>

                      <div className="bg-purple-500 rounded-lg p-5 flex items-center gap-4 shadow-lg">
                      <FontAwesomeIcon icon={regular} className="bg-white rounded-full  w-7 h-7 p-4 text-3xl"/>
                      <div className="div text-white">
                            <p className="judul text-lg font-bold">E-MAIL ADDRES</p>
                            <p className="deskripsi text-base font-normal">ScemathixSmKN4BJn@gmail.com</p>
                          </div>
                      </div>
                  </div>
                    


          <div className="col-span-7   p-3 shadow-lg rounded-lg">
            <form>
              <div className="mb-4" data-aos="fade-right" data-aos-duration="800">
                <label htmlFor="name" className="block text-red-800 font-bold mb-2">Your Name</label>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <span className="px-3 text-gray-600">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input type="text" id="name" className="w-full p-3 outline-none" placeholder="Enter your name" required />
                </div>
              </div>
              <div className="mb-4" data-aos="fade-right" data-aos-duration="900">
                <label htmlFor="email" className="block text-red-800 font-bold mb-2">Your Email</label>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <span className="px-3 text-gray-600">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <input type="email" id="email" className="w-full p-3 outline-none" placeholder="Enter your email" required />
                </div>
              </div>
              <div className="mb-4" data-aos="fade-right" data-aos-duration="1000">
                <label htmlFor="message" className="block text-red-800 font-bold mb-2">Your Message</label>
                <div className="flex items-start border border-gray-300 rounded-lg overflow-hidden">
                  <span className="px-3 pt-3 text-gray-600">
                    <FontAwesomeIcon icon={faComment} />
                  </span>
                  <textarea id="message" className="w-full p-3 outline-none" rows="5" placeholder="Enter your message" required></textarea>
                </div>
              </div>
              <div className="mt-6" data-aos="fade-up" data-aos-duration="1100">
                <button type="submit" className="w-full bg-red-800 text-white py-3 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-red-900">
                  Send Message <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </form>
          </div>


        </div>
      </div>
    </section>
  );
};

export default ContactSection;
