import Image from "next/image"
import linesImage from '../../public/images/lines.svg'

const Service = () => {
  return (
    <section id="jasa" className="relative py-10 bg-blue-600 sm:py-16 lg:py-24">
      <div className="absolute top-0 left-0">
        <Image className="object-cover w-full h-full" src={linesImage} alt="" />
      </div>

      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Temukan Yang Anda Butuhkan</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 lg:mt-16 sm:grid-cols-2 md:gap-8">
          <div className="overflow-hidden bg-white rounded-lg">
            <div className="px-7 py-9">
              <div className="flex items-center">
                <h3 className="text-4xl font-bold text-gray-900">Perawatan & Perbaikan</h3>
              </div>
              <p className="mt-6 text-base text-gray-600 md:max-w-xs">Layanan perawatan & perbaikan wastafel, saluran air, atap bocor, cat (dinding & plafon) dll</p>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-lg">
            <div className="px-7 py-9">
              <div className="flex items-center">
                <h3 className="text-4xl font-bold text-gray-900">Bangun Rumah</h3>
              </div>
              <p className="mt-6 text-base text-gray-600 md:max-w-xs">Layanan pembangunan rumah, taman, kanopi, kolam, lapangan dll</p>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-lg">
            <div className="px-7 py-9">
              <div className="flex items-center">
                <h3 className="text-4xl font-bold text-gray-900">Renovasi Rumah</h3>
              </div>
              <p className="mt-6 text-base text-gray-600 md:max-w-xs">Layanan renovasi rumah, kamar, gedung, plafon, atap & kanopi dll</p>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-lg">
            <div className="px-7 py-9">
              <div className="flex items-center">
                <h3 className="text-4xl font-bold text-gray-900">Desain Bangunan</h3>
              </div>
              <p className="mt-6 text-base text-gray-600 md:max-w-xs">Layanan desain bangunan 2D, 3D, RAB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service