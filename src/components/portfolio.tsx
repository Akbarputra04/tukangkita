import Image from "next/image"

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Portfolio Kami</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-4 md:mt-16">
          <div>
            <Image className="h-52 w-full object-cover" src="./images/portfolio1.jpeg" alt="portfolio tukangkita 1" />
          </div>
          <div>
            <Image className="h-52 w-full object-cover" src="./images/portfolio2.jpeg" alt="portfolio tukangkita 2" />
          </div>
          <div>
            <Image className="h-52 w-full object-cover" src="./images/portfolio3.jpeg" alt="portfolio tukangkita 3" />
          </div>
          <div>
            <Image className="h-52 w-full object-cover" src="./images/portfolio4.jpg" alt="portfolio tukangkita 4" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio