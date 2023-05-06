"use client"

import Image from "next/image"

import image1 from '../../public/images/portfolio1.jpeg'
import image2 from '../../public/images/portfolio2.jpeg'
import image3 from '../../public/images/portfolio3.jpeg'
import image4 from '../../public/images/portfolio4.jpg'

import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Portfolio Kami</h2>
        </div>

        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-4 md:mt-16"
        >
          <a href="/images/portfolio1.jpeg">
            <Image className="h-52 w-full object-cover" src={image1} alt="portfolio tukangkita 1" />
          </a>
          <a href="/images/portfolio2.jpeg">
            <Image className="h-52 w-full object-cover" src={image2} alt="portfolio tukangkita 2" />
          </a>
          <a href="/images/portfolio3.jpeg">
            <Image className="h-52 w-full object-cover" src={image3} alt="portfolio tukangkita 3" />
          </a>
          <a href="/images/portfolio4.jpg">
            <Image className="h-52 w-full object-cover" src={image4} alt="portfolio tukangkita 4" />
          </a>
        </LightGallery>
      </div>
    </section>
  )
}

export default Portfolio