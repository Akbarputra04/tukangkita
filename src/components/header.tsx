"use client"

import Link from "next/link"
import { useState } from "react"

const Header = () => {
  const [menuShow, setMenuShow] = useState(false)

	const toggleMenu = () => {
		setMenuShow(prev => !prev)
	}

  return (
    <header className="sticky top-0 z-10 w-full bg-yellow-50">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* lg+ */}
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link href="/" title="" className="flex">
                <img className="w-auto h-12 lg:h-16" src="./images/logo-complete.png" alt="" />
              </Link>
            </div>

            <button type="button" className="inline-flex p-2 transition-all duration-200 rounded-md text-black lg:hidden focus:bg-gray-800 focus:text-white hover:bg-gray-800 hover:text-white" onClick={toggleMenu}>
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>

            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <a href="#home" title="" className="text-base text-black font-medium focus:text-opacity-70"> Home </a>

              <a href="#jasa" title="" className="text-base text-black font-medium focus:text-opacity-70"> Jasa Kami </a>

              <a href="#portfolio" title="" className="text-base text-black font-medium focus:text-opacity-70"> Portfolio </a>

              <Link href="/tentang" title="" className="text-base text-black font-medium focus:text-opacity-70"> Tentang </Link>
            </div>

            <a href="https://wa.me/+62895422399000" title="" className="items-center justify-center hidden px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-full lg:inline-flex hover:bg-orange-600 focus:bg-orange-600" role="button">Hubungi Kami</a>
          </nav>
        </div>

        {/* xs to lg */}
        <nav className={`fixed z-10 flex flex-col justify-between w-full min-h-screen px-4 py-10 bg-yellow-50 sm:px-6 lg:hidden ${menuShow ? 'translate-x-0' : 'translate-x-full'} transition-transform`}>
          <button type="button" className="inline-flex justify-center p-2 transition-all duration-200 rounded-md text-black focus:bg-gray-800 focus:text-white hover:bg-gray-800 hover:text-white" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col gap-10 flex-grow h-full">
            <nav className="flex flex-col mt-10 space-y-2">
              <a href="#home" title="" className="flex w-full py-2 font-medium text-black justify-center transition-all duration-200 focus:text-opacity-70"> Home </a>

              <a href="#jasa" title="" className="flex w-full py-2 font-medium text-black justify-center transition-all duration-200 focus:text-opacity-70"> Jasa Kami </a>

              <a href="#portfolio" title="" className="flex w-full py-2 font-medium text-black justify-center transition-all duration-200 focus:text-opacity-70"> Portfolio </a>

              <Link href="/tentang" title="" className="flex w-full py-2 font-medium text-black justify-center transition-all duration-200 focus:text-opacity-70"> Tentang </Link>
            </nav>

            <div className="flex flex-col items-center">
              <a href="https://wa.me/+62895422399000" title="" className="inline-flex items-center justify-center w-auto px-6 py-3 mt-auto text-base font-semibold text-black transition-all duration-200 bg-yellow-400 border border-transparent rounded-full hover:bg-yellow-500 focus:bg-yellow-500" role="button">Hubungi Kami</a>
            </div>
          </div>
        </nav>
      </div>
    </header>

  )
}

export default Header