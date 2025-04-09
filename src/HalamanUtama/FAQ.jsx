import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Bagaimana cara membuat akun di Skillora?",
      answer: "Untuk membuat akun di Scemathic, silakan kunjungi halaman pendaftaran dan isi formulir dengan informasi yang diperlukan. Setelah itu, verifikasi email Anda untuk mulai menggunakan platform kami.",
    },
    {
      question: "Bagaimana cara mendaftar kursus atau event pembelajaran?",
      answer: "Anda dapat mendaftar kursus atau event dengan masuk ke akun Scemathic Anda, pilih kursus yang diinginkan, lalu klik tombol 'Daftar'. Anda akan mendapatkan notifikasi konfirmasi setelah pendaftaran berhasil.",
    },
    {
      question: "Apakah semua Kursus dan Event di Skillora Gratis Semua?",
      answer: "Ya, semua kursus dan event di Skillora 100% gratis! Kami percaya pendidikan berkualitas harus bisa diakses siapa saja tanpa hambatan biaya. Anda bisa mengikuti seluruh materi , dan event eksklusif tanpa perlu mengeluarkan uang sepeser pun.",
    },
    {
      question: "Bagaimana cara menghubungi tim dukungan Skillora?",
      answer: "Jika Anda memiliki pertanyaan atau butuh bantuan, Anda dapat menghubungi tim dukungan kami melalui email atau fitur live chat yang tersedia di website Scemathic.",
    },
  ];

  return (
    <section id="FAQ" className="py-5" data-aos="fade-up" data-aos-duration="1000">
      <section className="py-6 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className=" mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Pertanyaan Umum</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Temukan jawaban atas pertanyaan terkait kursus dan event pembelajaran di Skillorra.</p>
          </div>

          <div className="max-w-3xl mx-auto mt-3 space-y-4 md:mt-13">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
              >
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="flex text-lg font-semibold text-black">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-gray-400 transform ${openIndex === index ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-base mt-9">
            Tidak menemukan jawaban yang Anda cari?{' '}
            <a href="/Contact" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
              Hubungi tim dukungan kami
            </a>
          </p>
        </div>
      </section>
    </section>
  );
};

export default FAQ;
