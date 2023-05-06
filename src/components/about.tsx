import Image from "next/image"
import image1 from '../../public/images/about2.jpg'
import image2 from '../../public/images/about1.jpg'

const About = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
          <div className="pr-12 sm:pr-0">
          <div className="relative max-w-xs mb-12">
              <Image className="object-bottom rounded-md" src={image1} alt="pekerja tukangkita 1" />

              <Image className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12" src={image2} alt="pekerja tukangkita 2" />
          </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Tukangkita.com</h2>
            <p className="my-4 text-base leading-relaxed text-gray-600">Tukangkita.com menyediakan layanan jasa renovasi dan bangun rumah dari mendesain, merencanakan, merenovasi dan membangun dengan teliti, hati-hati, sepenuh hati, dan bermutu tinggi.</p>
            <a href="tentang" className="font-semibold text-orange-500 hover:text-orange-600 focus:text-orange-600">Selengkapnya...</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About