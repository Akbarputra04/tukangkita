const Tentang = () => {
  return (
    <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Tentang Kami</h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
              merupakan startup layanan jasa tukang jogja yang telah dipercaya oleh ratusan klien. Bergerak dalam bidang Jasa Tukang Renovasi dan Bangun Rumah yang selalu mengedepankan kualitas dan hasil profesional.
            </p>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
              Berdiri sejak mei 2019 dan kini telah melayani banyak klien yang hingga kini masih terus bekerja sama. Latar belakang berdirinya tukangkita adalah untuk memudahkan orang yang mencari jasa tukang renovasi maupun bangun rumah tanpa repot. Kami menawarkan layanan jasa tukang jogja untuk keperluan kost, rumah tinggal, sekolah, kantor, ruko, dan kontrakan dengan sistem borongan termasuk bahan material kebutuhan.
            </p>

            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
              Semoga anda bisa bekerja sama dengan kami untuk mendapatkan hasil terbaik dari pembangunan rumah anda.
            </p>

            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
              Tukangkita.com
              Membangun sepenuh hati dan bermutu tinggi.
            </p>
          </div>

          <div className="relative">
            <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="./images/logo.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tentang