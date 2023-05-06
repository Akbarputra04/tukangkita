"use client"

const Footer = () => {
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <img className="w-auto h-16 mb-4" src="./images/logo-complete.png" alt="logo tukangkita" />

            <iframe title="tukangkita maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d587.4715631348213!2d110.38568032525342!3d-7.892782324164207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a55d89f6b9141%3A0xee58975db118e45a!2sSenja%20Sekar%20Orchid!5e0!3m2!1sid!2sid!4v1683211008564!5m2!1sid!2sid" width="300" height="300" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Menu</p>

            <ul className="mt-6 space-y-4">
              <li>
                <a href="#home" aria-label="Menu Home" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </a>
              </li>

              <li>
                <a href="#jasa" aria-label="Menu Jasa Kami" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Jasa Kami </a>
              </li>

              <li>
                <a href="#portfolio" aria-label="Menu Portfolio" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Portfolio </a>
              </li>

              <li>
                <a href="/tentang" aria-label="Menu Tentang" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Tentang </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Hubungi Kami</p>

            <ul className="mt-6 space-y-4">
              <li>
                <a href="https://wa.me/+62895422399000" aria-label="Whatsapp" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> +62895422399000 </a>
              </li>

              <li>
                <a href="https://goo.gl/maps/sbi73bu2hcbMQCbe8" aria-label="Google Maps" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Jl. Imogiri Timur, Kembangsongo, Puton, Trimulyo, Kec. Jetis, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55781 </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm text-center lg:text-left font-semibold tracking-widest text-gray-400 uppercase mb-4">Konsultasi Gratis</p>

            <a href="https://wa.me/+62895422399000" className="inline-flex items-center justify-center w-full px-4 py-4 font-semibold transition-all duration-200 text-white bg-orange-500 border border-transparent rounded-full sm:w-auto sm:mt-0 hover:bg-orange-600 focus:bg-orange-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-whatsapp mr-2" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
            Hubungi Kami
          </a>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">© Copyright 2023, All Rights Reserved by Tukangkita.com</p>
      </div>
    </section>
  )
}

export default Footer